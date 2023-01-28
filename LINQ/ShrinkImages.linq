<Query Kind="Program">
  <Namespace>System.Drawing.Drawing2D</Namespace>
  <Namespace>System.Drawing</Namespace>
  <Namespace>System.Drawing.Imaging</Namespace>
</Query>

static string rawImagePath = Path.Combine(Path.GetDirectoryName(Util.CurrentQueryPath), @"..\res\cardImagesLarge\");
static string resourcePath = Path.Combine(Path.GetDirectoryName(Util.CurrentQueryPath), @"..\res\cardImages\");

void Main()
{
	var path = Path.Combine(Path.GetDirectoryName(Util.CurrentQueryPath), @"..\res\cardImages\");
	var files = new DirectoryInfo(rawImagePath).GetFiles();
	var assaultArt = new List<string>();
	var commanderArt = new List<string>();
	foreach (var file in files)
	{
		if (file.Name.Contains("portrait"))
		{
			commanderArt.Add(file.FullName);
		}
		else
		{
			assaultArt.Add(file.FullName);
		}
	}
	foreach (var fileName in commanderArt)
	{
		ResizePortrait(fileName, fileName, 84, 100);
	}

	foreach (var fileName in assaultArt)
	{
		var newFileName = fileName.Replace(".png", ".jpg");
		if (newFileName != fileName) fileName.Dump("Changed format");
		ResizeImage(fileName, fileName, 84, 120);
	}
}

// Define other methods and classes here

public static void ResizeImage(string inputFile, string outputFile, int newWidth, int newHeight)
{
	var outputPath = Path.Combine(resourcePath, Path.GetFileName(outputFile));
	using (var srcImage = Image.FromFile(inputFile))
	{
		if (!File.Exists(outputPath))
		{
			inputFile.Dump("Sprite");
			if (srcImage.Height != newHeight || srcImage.Width != newWidth)
			{
				SaveScaledImage(srcImage, outputPath, newWidth, newHeight, 0, 0, newWidth, newHeight);
			}
			else
			{
				srcImage.Save(outputPath, ImageFormat.Jpeg);
			}
		}
	}
}

public static void ResizePortrait(string inputFile, string outputFile, int newWidth, int newHeight)
{
	var outputPath = Path.Combine(resourcePath, Path.GetFileName(outputFile));
	var padding = 10;
	using (var srcImage = Image.FromFile(inputFile))
	{
		if (!File.Exists(outputPath))
		{
			inputFile.Dump("Sprite");
			if (srcImage.Height != newHeight || srcImage.Width != newWidth)
			{
				var paddedWidth = newWidth - 2 * padding;
				var paddedHeight = newHeight - 2 * padding;
				var srcWidth = (float)srcImage.Width;
				var srcHeight = (float)srcImage.Height;
				var scaleW = srcWidth / (float)paddedWidth;
				var scaleH = srcHeight / (float)paddedHeight;
				var scaledWidth = paddedWidth;
				var scaledHeight = paddedHeight;
				if (scaleW > scaleH)
				{
					scaledHeight = (int)Math.Round(srcHeight / scaleW, 0, MidpointRounding.AwayFromZero);
				}
				else
				{
					scaledWidth = (int)Math.Round(srcWidth / scaleH, 0, MidpointRounding.AwayFromZero);
				}
				var offsetX = (paddedWidth - scaledWidth) / 2 + padding;
				var offsetY = (paddedHeight - scaledHeight) / 2 + padding;
				SaveScaledImage(srcImage, outputPath, newWidth, newHeight, offsetX, offsetY, scaledWidth, scaledHeight);
			}
			else
			{
				srcImage.Save(outputPath, ImageFormat.Png);
			}
		}
	}
}

private static void SaveScaledImage(Image srcImage, String outputPath, int newWidth, int newHeight, int offsetX, int offsetY, int scaledWidth, int scaledHeight)
{
	using (var newImage = new Bitmap(newWidth, newHeight))
	using (var graphics = Graphics.FromImage(newImage))
	{
		graphics.SmoothingMode = SmoothingMode.AntiAlias;
		graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
		graphics.PixelOffsetMode = PixelOffsetMode.HighQuality;
		graphics.DrawImage(srcImage, new Rectangle(offsetX, offsetY, scaledWidth, scaledHeight));
		srcImage.Dispose();
		newImage.Save(outputPath, ImageFormat.Png);
	}
}