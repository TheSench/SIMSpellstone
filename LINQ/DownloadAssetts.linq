<Query Kind="Program">
  <Namespace>System.Net</Namespace>
</Query>

static string folder = Path.Combine(Path.GetDirectoryName(Util.CurrentQueryPath), "../Downloads");
static DirectoryInfo directory = new DirectoryInfo(folder);
static string baseURL = "https://d3splaxnu2bep2.cloudfront.net/spellstone/asset_bundles/2020_3_42f1/";
static string fileVersion = "_unity2020_3_42_webgl.unity3d";
static WebClient client = new WebClient();
static bool downloadFiles = true;
static bool runExtraction = true;

void Main()
{
	DateTime startDate = DateTime.Now;
	var fileTypes = new List<string>()
	{
		//"arena_boxes_{3}",
		"cardpack_{3}",
		"cardpack_event_{3}",
		"cardpack_expansion_{3}",
		"cardpack_aprilfools_{3}",
		"cardpack_standardset_2020",
		// "core_assets_{3}",
		//"event{1}",
		//"event_{3}",
		//"frog_crystal_{2}",
		//"guildwars_{3}",
		//"item_{3}",
		//"localizationpack_{3}",
		//"mappack_{3}",
		"portraitpack_{3}",
		//"pvp_bundle_{3}",
		//"raid_001",
		//"raid_002",
		//"raid_003",
		//"runepack_{3}",
		//"santaBundle_{3}",
		//"storepack_{3}",
		//"event_002",
		//"event_003",
		//"event_004",
		//"event_005",
		//"event_006",
		//"event_007",
		//"event_008",
		//"event_009",
		//"event_010",
		//"event_01{1}",
		//"event_020",
		//"event_02{1}",
	};

	if (downloadFiles)
	{
		var pattern = new Regex(@"{(\d+)}", RegexOptions.Compiled);
		var filesChecked = new HashSet<string>();
		foreach (var fileType in fileTypes)
		{
			var digitMatch = pattern.Match(fileType);
			if (digitMatch.Success)
			{
				var numDigits = int.Parse(digitMatch.Groups[1].Value);
				for (int i = 1; ; i++)
				{
					if (i >= Math.Pow(10, numDigits)) break;
					var iPadded = i.ToString().PadLeft(numDigits, '0');
					var fileName = fileType.Replace($"{{{numDigits}}}", iPadded);
					if (filesChecked.Contains(fileName)) break;
					filesChecked.Add(fileName);
					if (!DownloadFile(fileName)) break;
				}
			}
			else
			{
				var fileName = fileType;
				if (filesChecked.Contains(fileName)) break;
				filesChecked.Add(fileName);
				if (!DownloadFile(fileName)) break;
			}
		}
	}

	if (runExtraction)
	{
		var files = directory.GetFiles("*.unity3d");
		foreach (var file in files)
		{
			Extract(file);
		}
		"".Dump();
	}
}

void Extract(FileInfo file)
{
	var filename = file.FullName;
	var extractedName = Path.Combine(directory.FullName, file.Name.Replace(fileVersion, ""));
	if (!Directory.Exists(extractedName))
	{
		$"{filename}\n -> {extractedName}".Dump();
		using (Process proc = new Process
		{
			StartInfo = new ProcessStartInfo
			{
				FileName = Path.Combine(Path.GetDirectoryName(Util.CurrentQueryPath), "../.venv/Scripts/python.exe"),
				Arguments = $"{Path.Combine(Path.GetDirectoryName(Util.CurrentQueryPath), "disunity.py")} {filename}",
				UseShellExecute = false,
				RedirectStandardOutput = true,
				RedirectStandardError = true,
				CreateNoWindow = true
			}
		})
		{
			proc.Start();
			proc.WaitForExit();
			if (proc.ExitCode != 0)
			{
				throw new Exception(proc.StandardError.ReadToEnd());
			}
		}
	}
}

// Define other methods and classes here
bool DownloadFile(string fileName)
{
	var url = baseURL + fileName + fileVersion;
	var savedName = Path.Combine(folder, fileName + fileVersion);

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
	catch (Exception e)
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