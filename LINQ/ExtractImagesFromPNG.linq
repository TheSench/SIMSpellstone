<Query Kind="Program">
  <Namespace>System.Drawing</Namespace>
  <Namespace>System.Drawing.Imaging</Namespace>
  <NuGetReference>INHelpers.Json.Net</NuGetReference>
  <Namespace>Newtonsoft.Json.Linq</Namespace>
</Query>

static string Folder = @"C:\Users\jsen\Desktop\JSEN\Spellstone\";
static string imagePath;
static string convertedFolder;
static string _allImagesPath;
bool overwrite = false;

// string assetName = "cardpack_event_040";
static CardType type = CardType.Assault;
static string imageFilter = "";

static string imageFormat;
Dictionary<CardType, string> Formats = new Dictionary<UserQuery.CardType, string>()
{
	{CardType.Commander, "png"},
	{CardType.Assault, "jpg"},
	{CardType.Item, "png"},
	{CardType.Store, "png"}
};

void Main()
{
	imagePath = Path.Combine(Folder, "Images");
	convertedFolder = Path.Combine(imagePath, "Converted");

	foreach (var dir in new DirectoryInfo(Folder).GetDirectories())
	{
		string assetName = dir.Name;
		if (assetName.StartsWith("cardpack_event") || assetName.StartsWith("cardpack_expansion"))
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

		assetName.Dump("\n> Asset folder");

		if (type == CardType.Item || type == CardType.Store)
		{
			_allImagesPath = Path.Combine(imagePath, "All", "Items");
		}
		else
		{
			_allImagesPath = Path.Combine(imagePath, "All", "Cards");
		}
		
		var unknown_i = 1;
		imageFormat = Formats[type];
		if (imageFilter == String.Empty)
		{
			switch (type)
			{
				case CardType.Commander:
					imageFilter = "portrait";
					break;

				case CardType.Item:
					imageFilter = "_collection";
					break;
			}
		}
		var assetFolder = Path.Combine(Folder, assetName);
		foreach (var file in new DirectoryInfo(assetFolder).GetFiles("*.json"))
		{
			bool hasSprites = false;
			var sprites = new List<Sprite>();
			using (var reader = file.OpenText())
			{
				JObject json = JObject.Parse(reader.ReadToEnd());
				var spriteDefinitions = (JArray) json["spriteDefinitions"];
				for (int i = 0; i < spriteDefinitions.Count; i++)
				{
					var sprite = (JObject) spriteDefinitions[i];
					var name = sprite["name"].ToString();
					if (String.IsNullOrWhiteSpace(name))
					{
						continue;
					}
					var vectors = GetVectors((JArray) sprite["uvs"]);
					var isFlipped = IsFlipped((int) sprite["flipped"]);
					sprites.Add(new Sprite(name, vectors, isFlipped));
				}
				if (json.ContainsKey("spriteCollectionName"))
				{
					hasSprites = true;
					var imageName = json["spriteCollectionName"].ToString() + ".png";
					imageName.Dump("Sprite File");
					//sprites.ForEach(sprite => sprite.Name.Dump());
					var imageFile = Path.Combine(assetFolder, imageName);
					if (!String.IsNullOrWhiteSpace(imageFilter))
					{
						if (!imageName.ToLower().Contains(imageFilter.ToLower()))
						{
							goto nextFile;
						}
					}
					ParseFile(assetName, new FileInfo(imageFile), sprites);
				}
			}
		nextFile:
			if (!hasSprites)
			{
				file.Delete();
			}
			continue;
		}
	}
}

// Define other methods and classes here

private bool IsFlipped(int flipped)
{
	return flipped == 1;
}

private List<Point> GetVectors(JArray uvs)
{
	var vectors = new List<Point>();
	for (var i = 0; i < uvs.Count; i++)
	{
		var x = (float) uvs[i]["x"];
		var y = (float) uvs[i]["y"];
		vectors.Add(new Point(x, y));
	}
	return vectors;
}

private class Sprite
{
	public Sprite(string name, List<Point> points, bool isFlipped)
	{
		Name = name;
		Points = points;
		IsFlipped = isFlipped;
	}

	public string Name { get; private set; }
	public bool IsFlipped { get; private set; }
	public List<Point> Points { get; private set; }
	
	public override string ToString()
	{
		var pointOutput = String.Join("\r\n", Points);
		return String.Format("{0}:\r\n{1}", Name, pointOutput);
	}
}

private class Point
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
private void ParseFile(string assetName, FileInfo file, List<Sprite> sprites)
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

private void ExtractImages(string assetName, string filename, Bitmap srcImage, List<Sprite> sprites)
{
	var newPath = Path.Combine(imagePath, assetName);

	filename.Dump();
	using (srcImage)
	{
		var imageWidth = srcImage.Width;
		var imageHeight = srcImage.Height;
		foreach (var sprite in sprites)
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
				var rect = new Rectangle(xMin, yMin, width, height);//.Dump(sprite.ToString());
				using (var cropped = srcImage.Clone(rect, srcImage.PixelFormat))
				{
					Directory.CreateDirectory(newPath);
					var spriteName = sprite.Name;
					if (type == CardType.Commander)
					{
						spriteName = "portrait_" + spriteName.ToLower().Replace("portrait_", "").Replace("portraits_", "");
					}
					var newFileName = String.Format("{0}.{1}", spriteName, imageFormat).Dump();
					cropped.RotateFlip(rotation);
					SaveImage(cropped, newPath, newFileName);
				}
			}
			catch (Exception e)
			{
				e.Dump();
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

private void SaveImage(Bitmap image, string directory, string filename)
{
	//image.RotateFlip(RotateFlipType.Rotate270FlipNone);
	var format = (imageFormat == "png" ? ImageFormat.Png : ImageFormat.Jpeg);
	
	var saveLocation = Path.Combine(directory, filename);
	if (overwrite || !File.Exists(saveLocation))
	{
		image.Save(Path.Combine(directory, filename), format);
		File.Copy(Path.Combine(directory, filename), Path.Combine(_allImagesPath, filename));
	}
}

public enum CardType
{
	Commander,
	Assault,
	Item,
	Store
}