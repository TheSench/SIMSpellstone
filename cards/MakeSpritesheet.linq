<Query Kind="Program">
  <Namespace>System.Drawing</Namespace>
  <Namespace>System.Drawing.Drawing2D</Namespace>
</Query>

void Main()
{
	var path = @"C:\Users\jsen\Documents\Visual Studio 2013\Projects\SIMSpellstone\res\cardImages";
	var files = new DirectoryInfo(path).GetFiles("*.jpg");
	var fileNames = new List<string>();
	foreach (var file in files)
	{
		fileNames.Add(file.FullName);
	}

	var css = new StringBuilder(
@".sprite {
    background-repeat: no-repeat;
    background-image: url('../res/cardImages/SpriteSheet.png');
    display: block;
    width: 84px;
    height: 120px;
}

");

	using (var spriteSheet = new Bitmap(84 * files.Length, 120))
	{
		for (var i = 0; i < fileNames.Count; i++)
		{
			var fileName = fileNames[i];
			var position = 84 * i;
			var imageName = Path.GetFileNameWithoutExtension(fileName);
			css.AppendLine(".sprite-" + imageName + "{ background-position: -" + position + "px 0; }");
			AddImage(fileName, spriteSheet, position);
		}
		spriteSheet.Save(Path.Combine(path, "SpriteSheet.png"));
	}
	css.ToString().Dump();
}

// Define other methods and classes here

public static void AddImage(string inputFile, Bitmap spriteSheet, int position)
{
	using (var srcImage = Image.FromFile(inputFile))
	using (var graphics = Graphics.FromImage(spriteSheet))
	{
		graphics.SmoothingMode = SmoothingMode.AntiAlias;
		graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
		graphics.PixelOffsetMode = PixelOffsetMode.HighQuality;
		graphics.DrawImage(srcImage, new Rectangle(position, 0, 84, 120));
		srcImage.Dispose();
	}
}