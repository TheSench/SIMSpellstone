<Query Kind="Program">
  <Namespace>System.Drawing</Namespace>
  <Namespace>System.Drawing.Imaging</Namespace>
</Query>

static string Folder = @"C:\Users\jsen\Desktop\JSEN\Spellstone\";
static string imagePath;
static string convertedFolder;
static string _allImagesPath;
bool overwrite = false;

string assetName = "cardpack_event_040";
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
	_allImagesPath = Path.Combine(imagePath, "All");

	if (type == CardType.Item || type == CardType.Store)
	{
		_allImagesPath = Path.Combine(_allImagesPath, "Items");
	}
	else
	{
		_allImagesPath = Path.Combine(_allImagesPath, "Cards");
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
	foreach (var file in new DirectoryInfo(assetFolder).GetFiles("*.txt"))
	{
		bool hasSprites = false;
		var sprites = new List<Sprite>();
		using (var reader = file.OpenText())
		{
			while (!reader.EndOfStream)
			{
				var line = reader.ReadLine();
				if (line.EndsWith("Generic Mono data") || line.EndsWith("tk2dSpriteDefinition data"))
				{
					line = reader.ReadLine();
					try
					{
						var name = line.Split(new[] { "string name = " }, 2, StringSplitOptions.None)[1].Trim('"');
						/*if (String.IsNullOrWhiteSpace(name))
						{
							name = "nameless_" + (unknown_i++);
						}*/
						var vectors = GetVectors(reader);
						var isFlipped = IsFlipped(reader);
						sprites.Add(new Sprite(name, vectors, isFlipped));
					}
					catch (Exception e)
					{
					}
				}
				else if (line.IndexOf("spriteCollectionName") > 0)
				{
					hasSprites = true;
					var name = line.Split(new[] { "string spriteCollectionName = " }, 2, StringSplitOptions.None)[1].Trim('"');
					var imageName = name.Split('@').Select(s => s/*.Substring(s.Length - 2)*/).First() + ".png";
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
		}
	nextFile:
		if (!hasSprites)
		{
			file.Delete();
		}
		continue;
	}
}

// Define other methods and classes here

private bool IsFlipped(StreamReader reader)
{
	while (!reader.EndOfStream)
	{
		var line = reader.ReadLine();
		if (line.Contains("int flipped"))
		{
			return (line.Split(new[] { "int flipped = " }, 2, StringSplitOptions.None)[1]) == "1";
		}
	}
	return false;
}

private List<Point> GetVectors(StreamReader reader)
{
	while (!reader.EndOfStream)
	{
		var line = reader.ReadLine();
		if (line.EndsWith("vector uvs"))
		{
			break;
		}
	}
	
	var vectors = new List<Point>();
	while (!reader.EndOfStream && vectors.Count < 4)
	{
		var line = reader.ReadLine();
		if (line.EndsWith("Vector2f data"))
		{
			line = reader.ReadLine();
			var x = float.Parse(line.Split(new[] { "float x = " }, 2, StringSplitOptions.None)[1]);
			line = reader.ReadLine();
			var y = float.Parse(line.Split(new[] { "float y = " }, 2, StringSplitOptions.None)[1]);
			vectors.Add(new Point(x, y));
		}
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