<Query Kind="Program">
  <Namespace>System.IO</Namespace>
  <Namespace>System.Net</Namespace>
</Query>

string folder = @"C:\Users\jsen\Desktop\JSEN\Spellstone";
string baseURL = "https://d3splaxnu2bep2.cloudfront.net/spellstone/asset_bundles_live/2020_3_33f1/";
string fileVersion = "_unity2020_3_33_webgl.unity3d";
WebClient client = new WebClient();
bool downloadFiles = true;
bool outputCommands = false;


void Main()
{
	DateTime startDate = DateTime.Now;
	var fileTypes = new List<string>()
	{
		"arena_boxes_{3}",
		"cardpack_{3}",
		"cardpack_event_{3}",
		"cardpack_expansion_{3}",
		"cardpack_aprilfools_001",
		"core_assets_{3}",
		"event{1}",
		"event_{3}",
		"frog_crystal_{2}",
		"guildwars_{3}",
		"item_{3}",
		"localizationpack_{3}",
		"mappack_{3}",
		"portraitpack_{3}",
		"pvp_bundle_{3}",
		"raid_001",
		"raid_002",
		"raid_003",
		"runepack_{3}",
		"santaBundle_{3}",
		"storepack_{3}",
		"event_002",
		"event_003",
		"event_004",
		"event_005",
		"event_006",
		"event_007",
		"event_008",
		"event_009",
		"event_010",
		"event_01{1}",
		"event_020",
		"event_02{1}",
	};
	// Filtered list with updated card assaults/commanders
	fileTypes = new List<string>(){ "cardpack_event_{3}", "portraitpack_{3}", "cardpack_expansion_{3}" };

	if (downloadFiles)
	{
		var filesChecked = new HashSet<string>();
		foreach (var fileType in fileTypes)
		{
			for (int i = 1; ; i++)
			{
				var iPadded = i.ToString().PadLeft(3, '0');
				var i1 = iPadded.Substring(2, 1);
				var i2 = iPadded.Substring(1, 2);
				var i3 = iPadded.Substring(0, 3);
				var fileName = String.Format(fileType, "", i1, i2, i3)/*.Dump()*/;
				fileName += fileVersion;
				if (filesChecked.Contains(fileName))
				{
					break;
				}
				filesChecked.Add(fileName);
				var url = baseURL + fileName;
				if (!DownloadFile(url, fileName)) break;
				if (fileName == fileType) break;
			}
		}

		// Main client assets don't work anymore with this method
		// var mainClient = "spellstone-WebGL-v1_13_1.unity3d";
		// var clientURL = "http://chat.kongregate.com/gamez/0024/8326/live/" + mainClient;
		// DownloadFile(clientURL, mainClient);
	}

	if (outputCommands)
	{
		var directory = new DirectoryInfo(@"C:\Users\jsen\Desktop\JSEN\Spellstone");
		var files = directory.GetFiles("*.unity3d");
		// var command = "call \"C:\\Users\\jsen\\Desktop\\JSEN\\disunity_3_4\\disunity.bat\" extract \"{0}\"";
		var command = "call disunity.py \"{0}\"";
		foreach (var file in files)
		{
			var extractedName = Path.Combine(directory.FullName, file.Name.Replace(".unity3d", ""));
			if (!Directory.Exists(extractedName) || file.LastWriteTime > startDate)
			{
				if (Directory.Exists(extractedName))
				{
					Directory.Delete(extractedName, true);
				}
				var newCommand = String.Format(command, file.FullName);
				if (file.Name.StartsWith("spellstone-WebGL"))
				{
					newCommand.Replace("extract", "bundle-extract").Dump();
				}
				newCommand.Dump();
			}
		}
		"".Dump();
	}
}

// Define other methods and classes here
bool DownloadFile(string url, string fileName)
{
	var savedName = Path.Combine(folder, fileName);

	try
	{
		var localTime = CheckFileTime(savedName);
		var remoteTime = CheckLastModified(url);
	
		if (localTime < remoteTime)
		{
			client.DownloadFile(url, savedName);
			fileName.Dump();
		}
	}
	catch
	{
		return false;
	}
	return true;
}

DateTime CheckFileTime(string fileName)
{
	if (File.Exists(fileName))
	{
		return File.GetLastWriteTime(fileName);
	}
	else
	{
		return DateTime.MinValue;
	}
}

DateTime CheckLastModified(string url)
{
	DateTime dtmLastModified = DateTime.MinValue;
	
	var request = WebRequest.Create(url);
	request.Method = "HEAD";
	using (var response = request.GetResponse())
	{
		var headers = response.Headers;
		var lastModifiedDate = headers["Last-Modified"];
		if (lastModifiedDate != null)
		{
			DateTime.TryParse(lastModifiedDate, out dtmLastModified);
		}
	}

	return dtmLastModified;
}