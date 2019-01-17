<Query Kind="Program">
  <Namespace>System.Drawing</Namespace>
  <Namespace>System.Drawing.Drawing2D</Namespace>
  <Namespace>System.Drawing.Imaging</Namespace>
</Query>

void Main()
{
	var path = Path.Combine(Path.GetDirectoryName(Util.CurrentQueryPath), @"..\res\cardImages\");
	var spritePath = Path.Combine(Path.GetDirectoryName(Util.CurrentQueryPath), @"..\res\sprites\");
	var files = new DirectoryInfo(path).GetFiles().OrderBy(file => file.CreationTime);
	var imageFileNames = new List<string>();
	var portraitFileNames = new List<string>();
	foreach (var file in files)
	{
		if (file.Name.StartsWith("SpriteSheet") || file.Name.StartsWith("PortraitSheet"))
		{
			continue;
		}
		else if (file.Name.StartsWith("portrait_"))
		{
			portraitFileNames.Add(file.FullName);
		}
		else
		{
			imageFileNames.Add(file.FullName);
		}
		if(file.Name.Contains("Spellstone"))
		{
			
		}
	}

	var cssFile = new FileInfo(Path.Combine(Path.GetDirectoryName(Util.CurrentQueryPath), @"..\styles\spritesheet.css"));
	using (var writer = cssFile.CreateText())
	{
		writer.Write(
@".sprite {
    position: absolute;
    background-repeat: no-repeat;
    display: block;
    width: 84px;
    height: 120px;
}
.portrait {
    position: absolute;
    background-repeat: no-repeat;
	background-color: white;
    display: block;
    width: 84px;
    height: 100px;
}
");

		// Create Spritesheets for Card Images
		var offset = 0;
		var sheetIndex = 1;
		var images = imageFileNames.Count;
		var dimensions = 10;
		while (offset < images)
		{
			var height = (images - offset) / dimensions;
			if (images % dimensions > 0) height++;
			if (height > dimensions) height = dimensions;
			var sheetName = "SpriteSheet" + sheetIndex + ".jpg";
			var backgroundImage = "background-image: url('../res/cardImages/" + sheetName + "');";
			using (var spriteSheet = new Bitmap(84 * dimensions, 120 * height))
			{
				var end = Math.Min(dimensions * dimensions, images - offset);
				int i = 0;
				for (; i < end; i++)
				{
					if (i + offset == 1738)
					{

					}
					var fileName = imageFileNames[i + offset];
					var x = 84 * (i % dimensions);
					var y = 120 * (i / dimensions);
					var imageName = Path.GetFileNameWithoutExtension(fileName);

					writer.WriteLine(".sprite-" + imageName + "{ background-position: -" + x + "px -" + y + "px; " + backgroundImage + "}");
					AddImage(fileName, spriteSheet, x, y);
				}
				spriteSheet.Save(Path.Combine(spritePath, sheetName), ImageFormat.Png);
				offset += i;
			}
			sheetIndex++;
		}

		// Create Spritesheets for Commander Images
		offset = 0;
		sheetIndex = 1;
		images = portraitFileNames.Count;
		dimensions = 10;
		while (offset < images)
		{
			var height = (images - offset) / dimensions;
			if (images % dimensions > 0) height++;
			if (height > dimensions) height = dimensions;
			var sheetName = "PortraitSheet" + sheetIndex + ".jpg";
			var backgroundImage = "background-image: url('../res/cardImages/" + sheetName + "');";
			using (var spriteSheet = new Bitmap(84 * dimensions, 100 * height))
			{
				var end = Math.Min(dimensions * dimensions, images - offset);
				int i = 0;
				for (; i < end; i++)
				{
					var fileName = portraitFileNames[i + offset];
					var x = 84 * (i % dimensions);
					var y = 100 * (i / dimensions);
					var imageName = Path.GetFileNameWithoutExtension(fileName);

					writer.WriteLine(".portrait-" + imageName + "{ background-position: -" + x + "px -" + y + "px; " + backgroundImage + "}");
					AddPortrait(fileName, spriteSheet, x, y);
				}
				spriteSheet.Save(Path.Combine(spritePath, sheetName), ImageFormat.Png);
				offset += i;
			}
			sheetIndex++;
		}
	}
}

// Define other methods and classes here

public static void AddImage(string inputFile, Bitmap spriteSheet, int x, int y)
{
	using (var srcImage = Image.FromFile(inputFile))
	using (var graphics = Graphics.FromImage(spriteSheet))
	{
		graphics.SmoothingMode = SmoothingMode.AntiAlias;
		graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
		graphics.PixelOffsetMode = PixelOffsetMode.HighQuality;
		graphics.DrawImage(srcImage, new Rectangle(x, y, 84, 120));
		srcImage.Dispose();
	}
}

public static void AddPortrait(string inputFile, Bitmap spriteSheet, int x, int y)
{
	using (var srcImage = Image.FromFile(inputFile))
	using (var graphics = Graphics.FromImage(spriteSheet))
	{
		graphics.SmoothingMode = SmoothingMode.AntiAlias;
		graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
		graphics.PixelOffsetMode = PixelOffsetMode.HighQuality;
		graphics.DrawImage(srcImage, new Rectangle(x, y, 84, 100));
		srcImage.Dispose();
	}
}