<Query Kind="Program">
  <NuGetReference>Newtonsoft.Json</NuGetReference>
  <Namespace>Newtonsoft.Json.Linq</Namespace>
  <Namespace>System.Drawing</Namespace>
  <Namespace>System.Drawing.Imaging</Namespace>
</Query>

static string folder = Path.Combine(Path.GetDirectoryName(Util.CurrentQueryPath), "../Downloads");
static string cardImagePath = Path.Combine(Path.GetDirectoryName(Util.CurrentQueryPath), @"..\res\cardImagesLarge\");
bool overwrite = false;

Dictionary<CardType, string> Formats = new Dictionary<UserQuery.CardType, string>()
{
	{CardType.Commander, "png"},
	{CardType.Assault, "jpg"},
};
static Dictionary<String, CardType> Overrides = new Dictionary<String, CardType> {
	{"AprilFools_003Collection.png", CardType.Commander}
};

void Main()
{
	foreach (var dir in new DirectoryInfo(folder).GetDirectories())
	{
		string assetName = dir.Name;
		CardType type = CardType.Assault;
		if (assetName.StartsWith("cardpack"))
		{
			type = CardType.Assault;
		}
		else if (assetName.StartsWith("portraitpack"))
		{
			type = CardType.Commander;
		}
		else
		{
			continue;
		}

		//assetName.Dump("\n> Asset folder");

		var assetFolder = Path.Combine(folder, assetName);
		foreach (var file in new DirectoryInfo(assetFolder).GetFiles("*.json"))
		{
			using (var reader = file.OpenText())
			{
				JObject json = JObject.Parse(reader.ReadToEnd());
				var imageName = "";
				if (json.ContainsKey("spriteCollectionName"))
				{
					imageName = (json["spriteCollectionName"].ToString() + ".png");
				}
				if (imageName.ToLower().Contains("portrait"))
				{
					type = CardType.Commander;
				}
				type = Overrides.GetValueOrDefault(imageName, type);

				if (String.IsNullOrWhiteSpace(imageName) || ShouldSkip(imageName, type))
				{
					file.Name.Dump("Skipping");
					reader.Close();
					file.Delete();
				}
				else
				{
					//imageName.Dump("Sprite File");
					var imageFile = Path.Combine(assetFolder, imageName);

					var sprites = json["spriteDefinitions"].Cast<JObject>()
						.Where(sprite => !String.IsNullOrWhiteSpace(sprite["name"].ToString()))
						.Select(sprite => new Sprite(
							sprite["name"].ToString(),
							sprite.GetVectors(),
							sprite.IsFlipped(),
							type
						));
					ParseFile(assetName, new FileInfo(imageFile), sprites);
				}
			}
		}
	}
}

private static bool ShouldSkip(string imageName, CardType type)
{
	return (type == CardType.Assault &&
		!imageName.Contains("Set") &&
		!imageName.Contains("@1x"));
}

// Define other methods and classes here

private class Sprite
{
	public Sprite(string name, List<Point> points, bool isFlipped, CardType type)
	{
		Name = name;
		Points = points;
		IsFlipped = isFlipped;
		Type = type;
	}

	public string Name { get; private set; }
	public bool IsFlipped { get; private set; }
	public List<Point> Points { get; private set; }
	public CardType Type { get; private set; }

	public override string ToString()
	{
		var pointOutput = String.Join("\r\n", Points);
		return String.Format("{0}:\r\n{1}", Name, pointOutput);
	}
}

public class Point
{
	public Point(float x, float y)
	{

		X = x;
		Y = y;
	}

	public float X { get; private set; }
	public float Y { get; private set; }

	public int GetX(int size)
	{
		return (int)Math.Round(X * size, 0, MidpointRounding.AwayFromZero);
	}

	public int GetY(int size)
	{
		return size - (int)Math.Round(Y * size, 0, MidpointRounding.AwayFromZero);
	}

	public override string ToString()
	{
		return String.Format("({0}, {1})", X, Y);
	}
}

// Define other methods and classes here
private void ParseFile(string assetName, FileInfo file, IEnumerable<Sprite> sprites)
{
	if (file.Exists)
	{
		using (var reader = file.OpenRead())
		using (var bitmap = new Bitmap(reader))
		{
			ExtractImages(assetName, file.FullName, bitmap, sprites);
		}
	}
	else
	{
		String.Join("\r\n", sprites.Select(s => s.Name)).Dump(file + " is missing");
	}
}

private void ExtractImages(string assetName, string filename, Bitmap srcImage, IEnumerable<Sprite> sprites)
{
	using (srcImage)
	{
		var imageWidth = srcImage.Width;
		var imageHeight = srcImage.Height;
		foreach (var sprite in sprites)
		{
			var spriteName = sprite.Name;
			if (sprite.Type == CardType.Commander)
			{
				spriteName = "portrait_" + spriteName.ToLower().Replace("portrait_", "").Replace("portraits_", "");
			}
			var imageFormat = Formats[sprite.Type];
			var newFileName = String.Format("{0}.{1}", spriteName, imageFormat);
			var saveLocation = Path.Combine(cardImagePath, newFileName);

			if (overwrite || !File.Exists(saveLocation))
			{
				try
				{
					var points = sprite.Points;
					var xMin = points.Min(p => p.GetX(imageWidth));
					var xMax = points.Max(p => p.GetX(imageWidth));
					var yMin = points.Min(p => p.GetY(imageHeight));
					var yMax = points.Max(p => p.GetY(imageHeight));

					var rotation = (sprite.IsFlipped ? RotateFlipType.Rotate270FlipX : RotateFlipType.RotateNoneFlipNone);

					var width = xMax - xMin;
					var height = yMax - yMin;
					var rect = new Rectangle(xMin, yMin, width, height);
					using (var cropped = srcImage.Clone(rect, srcImage.PixelFormat))
					{
						cropped.RotateFlip(rotation);
						SaveImage(cropped, saveLocation, imageFormat);
					}
				}
				catch (Exception e)
				{
					e.Dump();
				}
			}
		}
	}
}

private enum Corner
{
	TopRight = 0,
	TopLeft = 1,
	BottomRight = 2,
	BottomLeft = 3
}

private void SaveImage(Bitmap image, string saveLocation, string imageFormat)
{
	var format = (imageFormat == "png" ? ImageFormat.Png : ImageFormat.Jpeg);
	saveLocation.Dump();
	image.Save(saveLocation, format);
}

public enum CardType
{
	Commander,
	Assault,
	Item,
	Store
}

public static class Extensions
{
	public static void ForEach<T>(this IEnumerable<T> enumeration, Action<T> action)
	{
		foreach (T item in enumeration)
		{
			action(item);
		}
	}

	public static bool IsFlipped(this JObject sprite)
	{
		return (int)sprite["flipped"] == 1;
	}

	public static List<UserQuery.Point> GetVectors(this JObject sprite)
	{
		return sprite["uvs"].Select(uv => new UserQuery.Point(
				(float)uv["x"],
				(float)uv["y"]
			)).ToList();
	}
}