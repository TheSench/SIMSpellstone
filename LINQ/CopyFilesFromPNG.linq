<Query Kind="Program" />

static string Folder = @"C:\Users\jsen\Desktop\JSEN\Spellstone\";
static string imagePath = Path.Combine(Folder, "Images");
static string convertedFolder = Path.Combine(imagePath, "Converted");
static string _allImagesPath = Path.Combine(imagePath, "All");
bool overwrite = true;

string assetName = "portraitpack_005";
static CardType type = CardType.Commander;
static string imageFilter = "";

static string imageFormat;
Dictionary<CardType, string> Formats = new Dictionary<UserQuery.CardType, string>()
{
	{CardType.Commander, ".png"},
	{CardType.Assault, ".jpg"},
	{CardType.Item, ".png"},
	{CardType.Store, ".png"}
};

void Main()
{
	if (type == CardType.Item || type == CardType.Store)
	{
		_allImagesPath = Path.Combine(_allImagesPath, "Items");
	}
	else
	{
		_allImagesPath = Path.Combine(_allImagesPath, "Cards");
	}

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
	foreach (var file in new DirectoryInfo(assetFolder).GetFiles("*CAB*.png"))
	{
		if(!file.Name.StartsWith("atlas0-CAB"))
		{
			var newName = file.Name.Split(new[] { "-CAB" }, StringSplitOptions.None)[0] + imageFormat;
			if (type == CardType.Commander)
			{
				newName = newName.Replace("Portrait_", "portrait_");
				newName = newName.Replace("Portraits_", "portrait_");
			}
			SaveImage(file, newName);
		}
	}
}

private void SaveImage(FileInfo origFile, string filename)
{
	var saveFolder = Path.Combine(imagePath, assetName);
	var saveLocation = Path.Combine(saveFolder , filename);
	var allImagesLocation = Path.Combine(_allImagesPath, filename);
	var destFile = new FileInfo(saveLocation);
	if (overwrite || !destFile.Exists || destFile.Length > origFile.Length)
	{
		if(!Directory.Exists(saveFolder))
		{
			Directory.CreateDirectory(saveFolder);
		}
		origFile.CopyTo(saveLocation, true);
		origFile.CopyTo(allImagesLocation, true);
	}
}

private string GetImagePath(string path, string additional = null)
{
	var filename = Path.GetFileName(path);
	var dir = new DirectoryInfo(path);
	while (dir.Parent.Name != "Spellstone")
	{
		dir = dir.Parent;
	}

	if (string.IsNullOrEmpty(additional))
	{
		return Path.Combine(dir.Parent.FullName, "Images", dir.Name);
	}
	else
	{
		return Path.Combine(dir.Parent.FullName, "Images", additional, dir.Name);
	}
}

public enum CardType
{
	Commander,
	Assault,
	Item,
	Store
}