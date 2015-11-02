<Query Kind="Program">
  <Reference>&lt;RuntimeDirectory&gt;\System.XML.dll</Reference>
</Query>

void Main()
{
	var xmlFile = @"C:\Users\jsen\Desktop\JSEN\Simulator\cards\cards.xml";
	var doc = XDocument.Load(xmlFile);
	
	System.Xml.Serialization.XmlSerializer unitDeserializer = new System.Xml.Serialization.XmlSerializer(typeof(unit));

	StringBuilder sbJSON = new StringBuilder();
	List<unit> units = new List<unit>();
	List<unit> heroes = new List<unit>();

	var unitNodes = doc.Descendants("unit");
	foreach (var unitXML in unitNodes)
	{
		var stringReader = new StringReader(unitXML.ToString());
		var unit = (unit)unitDeserializer.Deserialize(stringReader);
		if (unit.card_type == CardType.Hero)
		{
			heroes.Add(unit);
		}
		else
		{
			units.Add(unit);
		}
	}
	StringBuilder sb = new StringBuilder();
	var file = new FileInfo(@"C:\Users\jsen\Documents\Visual Studio 2013\WebSites\Simulator\cards\cache.js");
	using (var writer = file.CreateText())
	{
		writer.Write("var CARDS = {\r\n");
		writer.Write("\"root\": {\r\n");
		writer.Write("\"unit\": {\r\n");
		foreach (var unit in units)
		{
			writer.Write(unit.ToString());
		}
		/*
		writer.Write("},\r\n");
		writer.Write("\"heroes\": {\r\n");
		*/
		foreach (var hero in heroes)
		{
			writer.Write(hero.ToString());
		}
		writer.Write("}\r\n");
		writer.Write("}\r\n");
		writer.Write("}\r\n");
		writer.Write("var missions = [];\r\n");
		writer.Write("var achievements = [];\r\n");
		writer.Write("var raids = [];\r\n");
		writer.Write("var quests = [];\r\n");
	}
	sb.ToString().Dump();
}

public abstract class CardType
{
	public static string Hero = "1";
	public static string Unit = "2";
}

/// <remarks/>
[System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
[System.Xml.Serialization.XmlRootAttribute(Namespace = "", IsNullable = false)]
public partial class unit
{
	const string unitTabs = "    ";
	const string upgradeTabs = "      ";
	const string skillUpgradeDefTabs = "          ";
	const string skillUpgradePropTabs = "        ";
	const string skillTabs = "      ";
	const string skillUpgradeTabs = "        ";

	public void AppendUnit(StringBuilder sb)
	{
		sb.Append("  \"").Append(id).Append("\": {\r\n");
		AppendEntryString(sb, "id", id, unitTabs);
		AppendEntryString(sb, "name", name, unitTabs);
		AppendEntryString(sb, "rarity", rarity, unitTabs);
		AppendEntryString(sb, "set", set, unitTabs);
		AppendEntryString(sb, "type", type, unitTabs);
		AppendEntryString(sb, "sub_type", sub_type, unitTabs);
		AppendEntry(sb, "attack", attack, unitTabs);
		AppendEntry(sb, "health", health, unitTabs);
		AppendEntry(sb, "cost", cost, unitTabs);
		AppendSkills(sb, skills, unitTabs);
		AppendUpgrades(sb);
		sb.Append("  },\r\n");
	}

	public override string ToString()
	{
		StringBuilder unit = new StringBuilder();
		AppendUnit(unit);
		return unit.ToString();
	}

	private void AppendEntry(StringBuilder sb, string name, string value, string tabs)
	{
		if (value != null)
		{
			sb.Append(tabs).Append("\"").Append(name).Append("\"").Append(":").Append(value).Append(",\r\n");
		}
	}

	private void AppendEntryString(StringBuilder sb, string name, string value, string tabs)
	{
		if (value != null)
		{
			sb.Append(tabs).Append("\"").Append(name).Append("\"").Append(":").Append("\"").Append(value).Append("\",\r\n");
		}
	}

	private void AppendSkills(StringBuilder sb, skill[] skills, string tabs)
	{
		if (skills == null || skills.Length == 0)
		{
			//sb.Append(tabs).Append("\"skill\": {},\r\n");
			sb.Append(tabs).Append("\"skill\": [],\r\n");
		}
		else
		{
			string skillDefTabs = tabs + "  ";
			string skillPropTabs = skillDefTabs + "  ";
			//sb.Append(tabs).Append("\"skill\": {\r\n");
			sb.Append(tabs).Append("\"skill\": [\r\n");
			foreach (var skill in skills)
			{
				//sb.Append(skillDefTabs).Append("\"").Append(skill.id).Append("\": {\r\n");
				sb.Append(skillDefTabs).Append("{\r\n");
				AppendEntryString(sb, "id", skill.id, skillPropTabs);
				AppendEntry(sb, "x", skill.x, skillPropTabs);
				AppendEntryString(sb, "y", skill.y, skillPropTabs);
				AppendEntry(sb, "z", skill.y, skillPropTabs);
				AppendEntry(sb, "c", skill.c, skillPropTabs);
				AppendEntryString(sb, "s", skill.s, skillPropTabs);
				AppendEntryString(sb, "all", skill.all, skillPropTabs);
				sb.Append(skillDefTabs).Append("},\r\n");
			}
			//sb.Append(tabs).Append("},\r\n");
			sb.Append(tabs).Append("],\r\n");
		}
	}

	private void AppendUpgrades(StringBuilder sb)
	{
		if (upgrades == null || upgrades.Length == 0)
		{
			sb.Append(unitTabs).Append("\"upgrades\": {}\r\n");
		}
		else
		{
			sb.Append(unitTabs).Append("\"upgrades\": {\r\n");
			foreach (var upgrade in upgrades)
			{
				sb.Append(upgradeTabs).Append("\"").Append(upgrade.level).Append("\": {\r\n");
				AppendEntry(sb, "attack", upgrade.attack, skillUpgradePropTabs);
				AppendEntry(sb, "health", upgrade.health, skillUpgradePropTabs);
				AppendEntry(sb, "cost", upgrade.cost, skillUpgradePropTabs);
				AppendSkills(sb, upgrade.skills, skillUpgradePropTabs);
				sb.Append(upgradeTabs).Append("},\r\n");
			}
			sb.Append(unitTabs).Append("}\r\n");
		}
	}

	private string idField;
	private string card_typeField;
	private string nameField;
	private string pictureField;
	private string asset_bundleField;
	private string attackField;
	private string healthField;
	private string costField;
	private string rarityField;
	private string typeField;
	private string sub_typeField;
	private string setField;
	private skill[] skillsField;
	private unitUpgrade[] upgradesField;

	/// <remarks/>
	public string id
	{
		get { return this.idField; }
		set { this.idField = value; }
	}

	/// <remarks/>
	public string card_type
	{
		get { return this.card_typeField; }
		set { this.card_typeField = value; }
	}

	/// <remarks/>
	public string name
	{
		get { return this.nameField; }
		set { this.nameField = value; }
	}

	/// <remarks/>
	public string picture
	{
		get { return this.pictureField; }
		set { this.pictureField = value; }
	}

	/// <remarks/>
	public string asset_bundle
	{
		get { return this.asset_bundleField; }
		set { this.asset_bundleField = value; }
	}

	/// <remarks/>
	public string attack
	{
		get { return this.attackField; }
		set { this.attackField = value; }
	}

	/// <remarks/>
	public string health
	{
		get { return this.healthField; }
		set { this.healthField = value; }
	}

	/// <remarks/>
	public string cost
	{
		get { return this.costField; }
		set { this.costField = value; }
	}

	/// <remarks/>
	public string rarity
	{
		get { return this.rarityField; }
		set { this.rarityField = value; }
	}

	/// <remarks/>
	[System.Xml.Serialization.XmlElementAttribute("skill")]
	public skill[] skills
	{
		get { return this.skillsField; }
		set { this.skillsField = value; }
	}

	/// <remarks/>
	public string type
	{
		get { return this.typeField; }
		set { this.typeField = value; }
	}

	/// <remarks/>
	public string sub_type
	{
		get { return this.sub_typeField; }
		set { this.sub_typeField = value; }
	}

	/// <remarks/>
	public string set
	{
		get { return this.setField; }
		set { this.setField = value; }
	}

	/// <remarks/>
	[System.Xml.Serialization.XmlElementAttribute("upgrade")]
	public unitUpgrade[] upgrades
	{
		get { return this.upgradesField; }
		set { this.upgradesField = value; }
	}
}
/// <remarks/>
[System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
public partial class unitUpgrade
{
	private string levelField;
	private string attackField;
	private string healthField;
	private string costField;
	private skill[] skillField;

	/// <remarks/>
	public string level
	{
		get { return this.levelField; }
		set { this.levelField = value; }
	}

	/// <remarks/>
	public string attack
	{
		get { return this.attackField; }
		set { this.attackField = value; }
	}

	/// <remarks/>
	public string health
	{
		get { return this.healthField; }
		set { this.healthField = value; }
	}

	/// <remarks/>
	public string cost
	{
		get { return this.costField; }
		set { this.costField = value; }
	}

	/// <remarks/>
	[System.Xml.Serialization.XmlElementAttribute("skill")]
	public skill[] skills
	{
		get { return this.skillField; }
		set { this.skillField = value; }
	}
}

/// <remarks/>
[System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
public partial class skill
{
	private string idField;
	private string xField;
	private string yField;
	private string cField;
	private string sField;
	private string allField;

	/// <remarks/>
	[System.Xml.Serialization.XmlAttributeAttribute()]
	public string id
	{
		get { return this.idField; }
		set { this.idField = value; }
	}

	/// <remarks/>
	[System.Xml.Serialization.XmlAttributeAttribute()]
	public string x
	{
		get { return this.xField; }
		set { this.xField = value; }
	}

	/// <remarks/>
	[System.Xml.Serialization.XmlAttributeAttribute()]
	public string y
	{
		get { return this.yField; }
		set { this.yField = value; }
	}

	/// <remarks/>
	[System.Xml.Serialization.XmlAttributeAttribute()]
	public string c
	{
		get { return this.cField; }
		set { this.cField = value; }
	}

	/// <remarks/>
	[System.Xml.Serialization.XmlAttributeAttribute()]
	public string s
	{
		get { return this.sField; }
		set { this.sField = value; }
	}

	/// <remarks/>
	[System.Xml.Serialization.XmlAttributeAttribute()]
	public string all
	{
		get { return this.allField; }
		set { this.allField = value; }
	}
}