<Query Kind="Program">
  <Namespace>System.IO</Namespace>
  <Namespace>System.Net</Namespace>
</Query>

string folder = @"C:\Users\jsen\Desktop\JSEN\Spellstone";
string baseURL = "http://d3splaxnu2bep2.cloudfront.net/spellstone/asset_bundles/Unity5/";
WebClient client = new WebClient();
bool downloadFiles = true;
bool outputCommands = false;


void Main()
{
	DateTime startDate = DateTime.Now;
	var fileTypes = new List<string>()
	{
		// Replace WebGL with Android
		"arena_boxes_{3}_Unity5_4_2_Android",
		"cardpack_{3}_Unity5_4_2_WebGL.unity3d",
		"cardpack_event_{3}_Unity5_4_2_WebGL.unity3d",
		"cardpack_expansion_{3}_Unity5_4_2_WebGL.unity3d",
		"cardpack_aprilfools_001_Unity5_4_2_WebGL.unity3d",
		"core_assets_{3}_Unity5_4_2_WebGL.unity3d",
		"event{1}_Unity5_4_2_WebGL.unity3d",
		"event_{3}_Unity5_4_2_WebGL.unity3d",
		"frog_crystal_{2}_Unity5_4_2_WebGL.unity3d",
		"guildwars_{3}_Unity5_4_2_WebGL.unity3d",
		"item_{3}_Unity5_4_2_WebGL.unity3d",
		"localizationpack_{3}_Unity5_4_2_WebGL.unity3d",
		"mappack_{3}_Unity5_4_2_WebGL.unity3d",
		"portraitpack_{3}_Unity5_4_2_WebGL.unity3d",
		"pvp_bundle_{3}_Unity5_4_2_WebGL.unity3d",
		"raid_001_Unity5_4_2_WebGL.unity3d",
		"raid_002_Unity5_4_2_WebGL.unity3d",
		"raid_003_Unity5_4_2_WebGL.unity3d",
		"runepack_{3}_Unity5_4_2_WebGL.unity3d",
		"santaBundle_{3}_Unity5_4_2_WebGL.unity3d",
		"storepack_{3}_Unity5_4_2_WebGL.unity3d",
		"event_002_Unity5_4_2_WebGL.unity3d",
		"event_003_Unity5_4_2_WebGL.unity3d",
		"event_004_Unity5_4_2_WebGL.unity3d",
		"event_005_Unity5_4_2_WebGL.unity3d",
		"event_006_Unity5_4_2_WebGL.unity3d",
		"event_007_Unity5_4_2_WebGL.unity3d",
		"event_008_Unity5_4_2_WebGL.unity3d",
		"event_009_Unity5_4_2_WebGL.unity3d",
		"event_010_Unity5_4_2_WebGL.unity3d",
		"event_01{1}_Unity5_4_2_WebGL.unity3d",
		"event_020_Unity5_4_2_WebGL.unity3d",
		"event_02{1}_Unity5_4_2_WebGL.unity3d",
	};

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

		var mainClient = "spellstone-WebGL-v1_13_1.unity3d";
		var clientURL = "http://chat.kongregate.com/gamez/0024/8326/live/" + mainClient;
		DownloadFile(clientURL, mainClient);
	}

	if (outputCommands)
	{
		var directory = new DirectoryInfo(@"C:\Users\jsen\Desktop\JSEN\Spellstone");
		var files = directory.GetFiles("*.unity3d");
		var command = "call \"C:\\Users\\jsen\\Desktop\\JSEN\\disunity_3_4\\disunity.bat\" extract \"{0}\"";
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