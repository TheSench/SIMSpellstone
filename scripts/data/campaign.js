var LOCATIONS = {
  "1": {
    "id": "1",
    "name": "Elaria",
  },
  "100": {
    "id": "100",
    "name": "Salt Wastes",
  },
  "101": {
    "id": "101",
    "name": "Tarragon Peak",
  },
  "102": {
    "id": "102",
    "name": "The Celestial Vault",
  },
  "103": {
    "id": "103",
    "name": "Dawnglow Swamp",
  },
  "104": {
    "id": "104",
    "name": "Frigore",
  },
  "105": {
    "id": "105",
    "name": "Center of The Void",
  },
  "106": {
    "id": "106",
    "name": "Skyhaven",
  },
  "107": {
    "id": "107",
    "name": "Golden Crown Village",
  },
  "108": {
    "id": "108",
    "name": "Gloomy Land",
  },
  "109": {
    "id": "109",
    "name": "Red Feather Valley",
  },
  "110": {
    "id": "110",
    "name": "Beetleton Bunker",
  },
  "111": {
    "id": "111",
    "name": "Goblin Rise Stronghold",
  },
  "2": {
    "id": "2",
    "name": "Luminis",
  },
  "3": {
    "id": "3",
    "name": "Karthos",
  },
  "4": {
    "id": "4",
    "name": "The Void",
  },
  "5": {
    "id": "5",
    "name": "Dawnglow Swamp",
  },
  "6": {
    "id": "6",
    "name": "Seastone Citadel",
  },
  "0": {
    "id": "0",
    "name": "Hero Upgrades",
  },
};
var CAMPAIGNS = {
  "3003": {
    "id": "3003",
    "name": "Applied Knowledge",
    "location_id": "0",
    "side_mission": "1",
    "missions": ["1512","1513","1514","1515","1516","1517"]
  },
  "3004": {
    "id": "3004",
    "name": "Oda and the Serpent",
    "location_id": "0",
    "side_mission": "1",
    "missions": ["1518","1519","1520","1521","1522","1523"]
  },
  "3005": {
    "id": "3005",
    "name": "Losing Baggage",
    "location_id": "0",
    "side_mission": "1",
    "missions": ["1524","1525","1526","1527","1528","1529"]
  },
  "3006": {
    "id": "3006",
    "name": "Trial by Dragonfire",
    "location_id": "0",
    "side_mission": "1",
    "missions": ["1530","1531","1532","1533","1534","1535"]
  },
  "3007": {
    "id": "3007",
    "name": "Yuriel and the Orc",
    "location_id": "0",
    "side_mission": "1",
    "missions": ["1536","1537","1538","1539","1540","1541"]
  },
  "3008": {
    "id": "3008",
    "name": "Night Watch",
    "location_id": "0",
    "side_mission": "1",
    "missions": ["1542","1543","1544","1545","1546","1547"]
  },
  "1": {
    "id": "1",
    "name": "The Elaria Expedition",
    "location_id": "1",
    "side_mission": "",
    "missions": ["11","12","13","14"]
  },
  "2": {
    "id": "2",
    "name": "Rise of the Dead",
    "location_id": "1",
    "side_mission": "",
    "missions": ["21","22","23","24"]
  },
  "3": {
    "id": "3",
    "name": "The Good, the Bad, and the Fiery",
    "location_id": "1",
    "side_mission": "",
    "missions": ["31","32","33","34"]
  },
  "3000": {
    "id": "3000",
    "name": "The Ground Quakes...",
    "location_id": "1",
    "side_mission": "1",
    "missions": ["1500","1501","1502","1503"]
  },
  "4": {
    "id": "4",
    "name": "Source of Chaos",
    "location_id": "1",
    "side_mission": "",
    "missions": ["41","42","43","44"]
  },
  "5": {
    "id": "5",
    "name": "Wyldwood Depths",
    "location_id": "1",
    "side_mission": "",
    "missions": ["51","52","53","54"]
  },
  "6": {
    "id": "6",
    "name": "Chaos Contagion",
    "location_id": "1",
    "side_mission": "",
    "missions": ["61","62","63","64"]
  },
  "1000": {
    "id": "1000",
    "name": "Demon's Pass",
    "location_id": "100",
    "side_mission": "",
    "missions": ["5001","5002","5003","5004","5005","5006"]
  },
  "1001": {
    "id": "1001",
    "name": "First Contact",
    "location_id": "100",
    "side_mission": "",
    "missions": ["5007","5008","5009","5010","5011","5012"]
  },
  "1002": {
    "id": "1002",
    "name": "Aria's Fall",
    "location_id": "100",
    "side_mission": "",
    "missions": ["5013","5014","5015","5016","5017","5018"]
  },
  "1083": {
    "id": "1083",
    "name": "Salt Waste Empire",
    "location_id": "100",
    "side_mission": "",
    "missions": ["5313","5314","5315","5316","5317"]
  },
  "1084": {
    "id": "1084",
    "name": "Backup Plan",
    "location_id": "100",
    "side_mission": "",
    "missions": ["5318","5319","5320","5321","5322","5323"]
  },
  "1085": {
    "id": "1085",
    "name": "Ground Inspection",
    "location_id": "100",
    "side_mission": "",
    "missions": ["5324","5325","5326","5327","5328"]
  },
  "1086": {
    "id": "1086",
    "name": "Reks and the Tamer",
    "location_id": "100",
    "side_mission": "",
    "missions": ["5329","5330","5331","5332","5333","5334","5335","5336"]
  },
  "1003": {
    "id": "1003",
    "name": "Tarragon Quakes",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5019","5020","5021","5022","5023","5024"]
  },
  "1004": {
    "id": "1004",
    "name": "Decim's Deceit",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5025"]
  },
  "1005": {
    "id": "1005",
    "name": "Scorched Lands",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5026"]
  },
  "1006": {
    "id": "1006",
    "name": "Dragon's Aerie",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5027"]
  },
  "1007": {
    "id": "1007",
    "name": "Ice Dragon's Realm",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5028"]
  },
  "1018": {
    "id": "1018",
    "name": "Tarragon Quakes",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5065","5066","5067","5068","5069","5070"]
  },
  "1019": {
    "id": "1019",
    "name": "Decim's Deceit",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5071"]
  },
  "1020": {
    "id": "1020",
    "name": "Scorched Lands",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5072"]
  },
  "1021": {
    "id": "1021",
    "name": "Dragon's Aerie",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5073"]
  },
  "1022": {
    "id": "1022",
    "name": "Ice Dragon's Realm",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5074"]
  },
  "1023": {
    "id": "1023",
    "name": "Molten Eruption",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5075","5076","5077","5078"]
  },
  "1064": {
    "id": "1064",
    "name": "Lakeside",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5241","5242","5243","5244"]
  },
  "1065": {
    "id": "1065",
    "name": "Nasty Neighbours",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5245","5246","5247","5248"]
  },
  "1066": {
    "id": "1066",
    "name": "Lost Lambs",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5249","5250","5251","5252","5253"]
  },
  "1067": {
    "id": "1067",
    "name": "Worst Fears",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5254","5255","5256"]
  },
  "1068": {
    "id": "1068",
    "name": "Goblins Afoot",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5257","5258","5259"]
  },
  "1069": {
    "id": "1069",
    "name": "Sinister Intentions",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5260","5261","5262","5263","5264"]
  },
  "1070": {
    "id": "1070",
    "name": "High Flying",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5265"]
  },
  "1097": {
    "id": "1097",
    "name": "The Price of Freedom",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5388","5389","5390","5391","5392"]
  },
  "1098": {
    "id": "1098",
    "name": "Dragon Buddies",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5393","5394","5395","5396","5397","5398"]
  },
  "1099": {
    "id": "1099",
    "name": "Cry of the Wild",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5399","5400","5401","5402","5403"]
  },
  "1100": {
    "id": "1100",
    "name": "Relentless Kidnappers",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5404","5405","5406","5407"]
  },
  "1101": {
    "id": "1101",
    "name": "Showdown",
    "location_id": "101",
    "side_mission": "",
    "missions": ["5408","5409","5410","5411"]
  },
  "1008": {
    "id": "1008",
    "name": "The Strong Stone",
    "location_id": "102",
    "side_mission": "",
    "missions": ["5029","5030"]
  },
  "1009": {
    "id": "1009",
    "name": "Golden Lava",
    "location_id": "102",
    "side_mission": "",
    "missions": ["5031","5032","5033","5034"]
  },
  "1010": {
    "id": "1010",
    "name": "Magma Explosion",
    "location_id": "102",
    "side_mission": "",
    "missions": ["5035","5036","5037","5038"]
  },
  "1011": {
    "id": "1011",
    "name": "Celestial Depths",
    "location_id": "102",
    "side_mission": "",
    "missions": ["5039","5040"]
  },
  "1012": {
    "id": "1012",
    "name": "Capturing the Sky",
    "location_id": "102",
    "side_mission": "",
    "missions": ["5041","5042"]
  },
  "1042": {
    "id": "1042",
    "name": "Scorched Villages",
    "location_id": "102",
    "side_mission": "",
    "missions": ["5154","5155","5156"]
  },
  "1043": {
    "id": "1043",
    "name": "Back to the Vaults",
    "location_id": "102",
    "side_mission": "",
    "missions": ["5157","5158","5159"]
  },
  "1044": {
    "id": "1044",
    "name": "To Water Island",
    "location_id": "102",
    "side_mission": "",
    "missions": ["5160","5161","5162","5163","5164"]
  },
  "1045": {
    "id": "1045",
    "name": "Zen Gardens",
    "location_id": "102",
    "side_mission": "",
    "missions": ["5165","5166","5167","5168","5169","5170"]
  },
  "1046": {
    "id": "1046",
    "name": "Quick Thinking",
    "location_id": "102",
    "side_mission": "",
    "missions": ["5171","5172","5173","5174"]
  },
  "1047": {
    "id": "1047",
    "name": "Final Round",
    "location_id": "102",
    "side_mission": "",
    "missions": ["5175","5176","5177","5178"]
  },
  "1013": {
    "id": "1013",
    "name": "Into the Marshes",
    "location_id": "103",
    "side_mission": "",
    "missions": ["5043","5044","5045","5046","5047","5048","5049","5050"]
  },
  "1014": {
    "id": "1014",
    "name": "High Grace",
    "location_id": "103",
    "side_mission": "",
    "missions": ["5051","5052","5053","5054"]
  },
  "1015": {
    "id": "1015",
    "name": "Tadpole Collection",
    "location_id": "103",
    "side_mission": "",
    "missions": ["5055","5056","5057","5058"]
  },
  "1016": {
    "id": "1016",
    "name": "Search and Rescue",
    "location_id": "103",
    "side_mission": "",
    "missions": ["5059","5060","5061","5062"]
  },
  "1017": {
    "id": "1017",
    "name": "To The Throne",
    "location_id": "103",
    "side_mission": "",
    "missions": ["5063","5064"]
  },
  "1024": {
    "id": "1024",
    "name": "To Frigore!",
    "location_id": "104",
    "side_mission": "",
    "missions": ["5079","5080","5081","5082"]
  },
  "1025": {
    "id": "1025",
    "name": "Vapor Collection",
    "location_id": "104",
    "side_mission": "",
    "missions": ["5083","5084","5085","5086"]
  },
  "1026": {
    "id": "1026",
    "name": "Vapor Hunters",
    "location_id": "104",
    "side_mission": "",
    "missions": ["5087","5088","5089","5090","5091","5092"]
  },
  "1027": {
    "id": "1027",
    "name": "Descent into Madness",
    "location_id": "104",
    "side_mission": "",
    "missions": ["5093","5094","5095","5096"]
  },
  "1028": {
    "id": "1028",
    "name": "Flashing Lights",
    "location_id": "104",
    "side_mission": "",
    "missions": ["5097","5098"]
  },
  "1029": {
    "id": "1029",
    "name": "Playing With Vapor",
    "location_id": "104",
    "side_mission": "",
    "missions": ["5099","5100","5101","5102","5103"]
  },
  "1030": {
    "id": "1030",
    "name": "Closer to The Void",
    "location_id": "105",
    "side_mission": "",
    "missions": ["5104","5105","5106","5107","5108"]
  },
  "1031": {
    "id": "1031",
    "name": "Trial by Purple Fire",
    "location_id": "105",
    "side_mission": "",
    "missions": ["5109","5110","5111","5112"]
  },
  "1032": {
    "id": "1032",
    "name": "Climate Change",
    "location_id": "105",
    "side_mission": "",
    "missions": ["5113","5114","5115","5116"]
  },
  "1033": {
    "id": "1033",
    "name": "Infection of The Void",
    "location_id": "105",
    "side_mission": "",
    "missions": ["5117","5118","5119","5120","5121","5122"]
  },
  "1034": {
    "id": "1034",
    "name": "Lost Laboratory",
    "location_id": "105",
    "side_mission": "",
    "missions": ["5123","5124","5125","5126"]
  },
  "1035": {
    "id": "1035",
    "name": "Lay Down Your Burdens",
    "location_id": "105",
    "side_mission": "",
    "missions": ["5127","5128"]
  },
  "1087": {
    "id": "1087",
    "name": "Light of the Wisps",
    "location_id": "105",
    "side_mission": "",
    "missions": ["5337","5338","5339","5340","5341"]
  },
  "1088": {
    "id": "1088",
    "name": "A Difference of Opinion",
    "location_id": "105",
    "side_mission": "",
    "missions": ["5342","5343","5344","5345","5346","5347"]
  },
  "1089": {
    "id": "1089",
    "name": "Influence of The Void",
    "location_id": "105",
    "side_mission": "",
    "missions": ["5348","5349","5350","5351","5352"]
  },
  "1090": {
    "id": "1090",
    "name": "Redemption",
    "location_id": "105",
    "side_mission": "",
    "missions": ["5353","5354","5355","5356","5357","5358","5359","5360"]
  },
  "1036": {
    "id": "1036",
    "name": "To Skyhaven",
    "location_id": "106",
    "side_mission": "",
    "missions": ["5129","5130","5131","5132"]
  },
  "1037": {
    "id": "1037",
    "name": "Finding Your Way",
    "location_id": "106",
    "side_mission": "",
    "missions": ["5133","5134","5135","5136"]
  },
  "1038": {
    "id": "1038",
    "name": "Home Sweet Home",
    "location_id": "106",
    "side_mission": "",
    "missions": ["5137","5138","5139","5140","5141"]
  },
  "1039": {
    "id": "1039",
    "name": "Old Mistakes",
    "location_id": "106",
    "side_mission": "",
    "missions": ["5142","5143","5144","5145","5146","5147"]
  },
  "1040": {
    "id": "1040",
    "name": "To Court",
    "location_id": "106",
    "side_mission": "",
    "missions": ["5148","5149","5150"]
  },
  "1041": {
    "id": "1041",
    "name": "History Repeats",
    "location_id": "106",
    "side_mission": "",
    "missions": ["5151","5152","5153"]
  },
  "1077": {
    "id": "1077",
    "name": "Rumor Mill",
    "location_id": "106",
    "side_mission": "",
    "missions": ["5290","5291","5292"]
  },
  "1078": {
    "id": "1078",
    "name": "Territory Control",
    "location_id": "106",
    "side_mission": "",
    "missions": ["5293","5294","5295"]
  },
  "1079": {
    "id": "1079",
    "name": "Redemption",
    "location_id": "106",
    "side_mission": "",
    "missions": ["5296","5297","5298","5299","5300"]
  },
  "1080": {
    "id": "1080",
    "name": "Groundwork",
    "location_id": "106",
    "side_mission": "",
    "missions": ["5301","5302","5303"]
  },
  "1081": {
    "id": "1081",
    "name": "What was Sown",
    "location_id": "106",
    "side_mission": "",
    "missions": ["5304","5305","5306"]
  },
  "1082": {
    "id": "1082",
    "name": "Plan of Attack",
    "location_id": "106",
    "side_mission": "",
    "missions": ["5307","5308","5309","5310","5311","5312"]
  },
  "1048": {
    "id": "1048",
    "name": "New Horizons",
    "location_id": "107",
    "side_mission": "",
    "missions": ["5179","5180","5181"]
  },
  "1049": {
    "id": "1049",
    "name": "Saying Goodbye",
    "location_id": "107",
    "side_mission": "",
    "missions": ["5182","5183","5184"]
  },
  "1050": {
    "id": "1050",
    "name": "Golden Crown Banquet",
    "location_id": "107",
    "side_mission": "",
    "missions": ["5185","5186","5187","5188","5189"]
  },
  "1051": {
    "id": "1051",
    "name": "Surprise from Above",
    "location_id": "107",
    "side_mission": "",
    "missions": ["5190","5191","5192"]
  },
  "1052": {
    "id": "1052",
    "name": "The Chase",
    "location_id": "107",
    "side_mission": "",
    "missions": ["5193","5194","5195","5196"]
  },
  "1053": {
    "id": "1053",
    "name": "Defensive Maneuvers",
    "location_id": "107",
    "side_mission": "",
    "missions": ["5197","5198","5199","5200","5201","5202"]
  },
  "1057": {
    "id": "1057",
    "name": "Side Dish",
    "location_id": "107",
    "side_mission": "",
    "missions": ["5215"]
  },
  "1102": {
    "id": "1102",
    "name": "The Secret Mission",
    "location_id": "107",
    "side_mission": "",
    "missions": ["5412","5413","5414","5415","5416"]
  },
  "1103": {
    "id": "1103",
    "name": "Gold Versus Dawn",
    "location_id": "107",
    "side_mission": "",
    "missions": ["5417","5418","5419","5420","5421","5422"]
  },
  "1104": {
    "id": "1104",
    "name": "Tracking the Corruption",
    "location_id": "107",
    "side_mission": "",
    "missions": ["5423","5424","5425","5426","5427"]
  },
  "1105": {
    "id": "1105",
    "name": "Corrupted Waters",
    "location_id": "107",
    "side_mission": "",
    "missions": ["5428","5429","5430","5431"]
  },
  "1106": {
    "id": "1106",
    "name": "Alternate Plan",
    "location_id": "107",
    "side_mission": "",
    "missions": ["5432","5433","5434","5435"]
  },
  "1107": {
    "id": "1107",
    "name": "Spirits of Time",
    "location_id": "107",
    "side_mission": "",
    "missions": ["5436","5437","5438","5439","5440"]
  },
  "1054": {
    "id": "1054",
    "name": "Volcano of Eruptions",
    "location_id": "108",
    "side_mission": "",
    "missions": ["5203","5204","5205","5206"]
  },
  "1055": {
    "id": "1055",
    "name": "A Man Who Loves Birds",
    "location_id": "108",
    "side_mission": "",
    "missions": ["5207","5208","5209","5210"]
  },
  "1056": {
    "id": "1056",
    "name": "Some Gloomy Lake",
    "location_id": "108",
    "side_mission": "",
    "missions": ["5211","5212","5213","5214"]
  },
  "1058": {
    "id": "1058",
    "name": "Avian Hideaway",
    "location_id": "109",
    "side_mission": "",
    "missions": ["5216","5217","5218","5219","5220"]
  },
  "1059": {
    "id": "1059",
    "name": "Unwavered",
    "location_id": "109",
    "side_mission": "",
    "missions": ["5221","5222","5223","5224"]
  },
  "1060": {
    "id": "1060",
    "name": "To Red Feather Valley",
    "location_id": "109",
    "side_mission": "",
    "missions": ["5225","5226","5227","5228"]
  },
  "1061": {
    "id": "1061",
    "name": "Into the City",
    "location_id": "109",
    "side_mission": "",
    "missions": ["5229","5230","5231","5232","5233","5234"]
  },
  "1062": {
    "id": "1062",
    "name": "Through the Alleyway",
    "location_id": "109",
    "side_mission": "",
    "missions": ["5235","5236","5237"]
  },
  "1063": {
    "id": "1063",
    "name": "Frobert and the Magistrate",
    "location_id": "109",
    "side_mission": "",
    "missions": ["5238","5239","5240"]
  },
  "1071": {
    "id": "1071",
    "name": "SOS",
    "location_id": "110",
    "side_mission": "",
    "missions": ["5266","5267","5268"]
  },
  "1072": {
    "id": "1072",
    "name": "To Beetleton Bunker",
    "location_id": "110",
    "side_mission": "",
    "missions": ["5269","5270","5271"]
  },
  "1073": {
    "id": "1073",
    "name": "Town on Fire",
    "location_id": "110",
    "side_mission": "",
    "missions": ["5272","5273","5274","5275","5276"]
  },
  "1074": {
    "id": "1074",
    "name": "Goblin Incoming",
    "location_id": "110",
    "side_mission": "",
    "missions": ["5277","5278","5279","5280","5281","5282"]
  },
  "1075": {
    "id": "1075",
    "name": "The Artifact",
    "location_id": "110",
    "side_mission": "",
    "missions": ["5283","5284","5285","5286"]
  },
  "1076": {
    "id": "1076",
    "name": "Up, Up and Away",
    "location_id": "110",
    "side_mission": "",
    "missions": ["5287","5288","5289"]
  },
  "1091": {
    "id": "1091",
    "name": "Decim and the Goblins",
    "location_id": "111",
    "side_mission": "",
    "missions": ["5361","5362","5363","5364","5365"]
  },
  "1092": {
    "id": "1092",
    "name": "Dungeon Depths",
    "location_id": "111",
    "side_mission": "",
    "missions": ["5366","5367","5368","5369","5370"]
  },
  "1093": {
    "id": "1093",
    "name": "The Fugitive",
    "location_id": "111",
    "side_mission": "",
    "missions": ["5371","5372","5373","5374","5375","5376"]
  },
  "1094": {
    "id": "1094",
    "name": "Common Enemy",
    "location_id": "111",
    "side_mission": "",
    "missions": ["5377","5378","5379","5380"]
  },
  "1095": {
    "id": "1095",
    "name": "New Friends",
    "location_id": "111",
    "side_mission": "",
    "missions": ["5381","5382","5383","5384"]
  },
  "1096": {
    "id": "1096",
    "name": "Trick or Treat",
    "location_id": "111",
    "side_mission": "",
    "missions": ["5385","5386","5387"]
  },
  "10": {
    "id": "10",
    "name": "The City of Luminis",
    "location_id": "2",
    "side_mission": "",
    "missions": ["101","102","103","104"]
  },
  "11": {
    "id": "11",
    "name": "Aether's Scorn",
    "location_id": "2",
    "side_mission": "",
    "missions": ["111","112","113","114"]
  },
  "12": {
    "id": "12",
    "name": "Castle on the Rocks",
    "location_id": "2",
    "side_mission": "",
    "missions": ["121","122","123","124"]
  },
  "3001": {
    "id": "3001",
    "name": "The Wind Stirs...",
    "location_id": "2",
    "side_mission": "1",
    "missions": ["1504","1505","1506","1507"]
  },
  "7": {
    "id": "7",
    "name": "Road to Luminis",
    "location_id": "2",
    "side_mission": "",
    "missions": ["71","72","73","74"]
  },
  "8": {
    "id": "8",
    "name": "The Glowing Grove",
    "location_id": "2",
    "side_mission": "",
    "missions": ["81","82","83","84"]
  },
  "9": {
    "id": "9",
    "name": "Mage's River",
    "location_id": "2",
    "side_mission": "",
    "missions": ["91","92","93","94"]
  },
  "13": {
    "id": "13",
    "name": "Chaos Arrives",
    "location_id": "3",
    "side_mission": "",
    "missions": ["131","132","133","134"]
  },
  "14": {
    "id": "14",
    "name": "Siege of Karthos",
    "location_id": "3",
    "side_mission": "",
    "missions": ["141","142","143","144"]
  },
  "15": {
    "id": "15",
    "name": "Karthos, Lair of Chaos",
    "location_id": "3",
    "side_mission": "",
    "missions": ["151","152","153","154"]
  },
  "16": {
    "id": "16",
    "name": "Across the Flames",
    "location_id": "3",
    "side_mission": "",
    "missions": ["161","162","163","164"]
  },
  "17": {
    "id": "17",
    "name": "Securing an Exit",
    "location_id": "3",
    "side_mission": "",
    "missions": ["171","172","173","174"]
  },
  "18": {
    "id": "18",
    "name": "Void's Ambush",
    "location_id": "3",
    "side_mission": "",
    "missions": ["181","182","183","184"]
  },
  "3002": {
    "id": "3002",
    "name": "The Heat Rises...",
    "location_id": "3",
    "side_mission": "1",
    "missions": ["1508","1509","1510","1511"]
  },
  "19": {
    "id": "19",
    "name": "Caverns of Crossing",
    "location_id": "4",
    "side_mission": "",
    "missions": ["191","192","193","194"]
  },
  "20": {
    "id": "20",
    "name": "The Hermit",
    "location_id": "4",
    "side_mission": "",
    "missions": ["201","202","203","204"]
  },
  "21": {
    "id": "21",
    "name": "Eater of Rock",
    "location_id": "4",
    "side_mission": "",
    "missions": ["211","212","213","214"]
  },
  "22": {
    "id": "22",
    "name": "Impending Peril",
    "location_id": "4",
    "side_mission": "",
    "missions": ["221","222","223","224"]
  },
  "23": {
    "id": "23",
    "name": "Wings of Void",
    "location_id": "4",
    "side_mission": "",
    "missions": ["231","232","233","234"]
  },
  "24": {
    "id": "24",
    "name": "The Void Core",
    "location_id": "4",
    "side_mission": "",
    "missions": ["241","242","243","244"]
  },
  "25": {
    "id": "25",
    "name": "Swamp Lands",
    "location_id": "5",
    "side_mission": "",
    "missions": ["251","252","253","254"]
  },
  "26": {
    "id": "26",
    "name": "Exploring Dawnglow",
    "location_id": "5",
    "side_mission": "",
    "missions": ["261","262","263","264"]
  },
  "27": {
    "id": "27",
    "name": "Plagued Waters",
    "location_id": "5",
    "side_mission": "",
    "missions": ["271","272","273","274"]
  },
  "28": {
    "id": "28",
    "name": "Small Prints",
    "location_id": "5",
    "side_mission": "",
    "missions": ["281","282","283","284"]
  },
  "29": {
    "id": "29",
    "name": "Corruption's Nest",
    "location_id": "5",
    "side_mission": "",
    "missions": ["291","292","293","294"]
  },
  "30": {
    "id": "30",
    "name": "Big Mama",
    "location_id": "5",
    "side_mission": "",
    "missions": ["301","302","303","304"]
  },
  "31": {
    "id": "31",
    "name": "Tales from the Swamp",
    "location_id": "6",
    "side_mission": "",
    "missions": ["311","312","313","314"]
  },
  "32": {
    "id": "32",
    "name": "Finding the Lost",
    "location_id": "6",
    "side_mission": "",
    "missions": ["321","322","323","324"]
  },
  "33": {
    "id": "33",
    "name": "Seastone Citadel",
    "location_id": "6",
    "side_mission": "",
    "missions": ["331","332","333","334"]
  },
  "34": {
    "id": "34",
    "name": "Brother from Another Mother",
    "location_id": "6",
    "side_mission": "",
    "missions": ["341","342","343","344"]
  },
  "35": {
    "id": "35",
    "name": "Next Generation",
    "location_id": "6",
    "side_mission": "",
    "missions": ["351","352","353","354"]
  },
  "36": {
    "id": "36",
    "name": "Trial by Fire",
    "location_id": "6",
    "side_mission": "",
    "missions": ["361","362","363","364"]
  },
};
var MISSIONS = {
  "101": {
    "id": "101",
    "name": "City of Light",
    "commander": {
        "id": "2"
    },
    "deck": [
      {
        "id": "1003"
      },
      {
        "id": "1004"
      },
      {
        "id": "1004"
      },
      {
        "id": "1004",
        "level": "2"
      },
      {
        "id": "1006"
      },
      {
        "id": "1007",
        "level": "2"
      },
      {
        "id": "1007",
        "level": "2"
      },
      {
        "id": "1011"
      },
      {
        "id": "1011"
      },
      {
        "id": "1019"
      },
    ]
  },
  "102": {
    "id": "102",
    "name": "Audience",
    "commander": {
        "id": "2"
    },
    "deck": [
      {
        "id": "1002"
      },
      {
        "id": "1004"
      },
      {
        "id": "1004"
      },
      {
        "id": "1005"
      },
      {
        "id": "1006"
      },
      {
        "id": "1007",
        "level": "2"
      },
      {
        "id": "1007",
        "level": "2"
      },
      {
        "id": "1018"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
    ]
  },
  "103": {
    "id": "103",
    "name": "Blind Eye",
    "commander": {
        "id": "2",
        "level": "2"
    },
    "deck": [
      {
        "id": "1002"
      },
      {
        "id": "1004"
      },
      {
        "id": "1004"
      },
      {
        "id": "1005"
      },
      {
        "id": "1005"
      },
      {
        "id": "1006"
      },
      {
        "id": "11006"
      },
      {
        "id": "1018"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
    ]
  },
  "104": {
    "id": "104",
    "name": "Rebuke",
    "commander": {
        "id": "3"
    },
    "deck": [
      {
        "id": "1002",
        "level": "2"
      },
      {
        "id": "1002",
        "level": "2"
      },
      {
        "id": "1003",
        "level": "2"
      },
      {
        "id": "1003",
        "level": "2"
      },
      {
        "id": "1005"
      },
      {
        "id": "11006"
      },
      {
        "id": "1011"
      },
      {
        "id": "1017"
      },
      {
        "id": "1018"
      },
      {
        "id": "1027"
      },
    ]
  },
  "11": {
    "id": "11",
    "name": "One Small Step",
    "commander": {
        "id": "216"
    },
    "deck": [
      {
        "id": "1600"
      },
      {
        "id": "1600"
      },
      {
        "id": "1600"
      },
      {
        "id": "1601",
        "mastery_level": "2"
      },
      {
        "id": "1601",
        "mastery_level": "2"
      },
      {
        "id": "1601",
        "mastery_level": "3"
      },
      {
        "id": "1603",
        "mastery_level": "3"
      },
      {
        "id": "1603",
        "mastery_level": "3"
      },
      {
        "id": "1606",
        "mastery_level": "3"
      },
      {
        "id": "1601",
        "level": "3",
        "mastery_level": "3"
      },
    ]
  },
  "111": {
    "id": "111",
    "name": "Exile",
    "commander": {
        "id": "2",
        "level": "2"
    },
    "deck": [
      {
        "id": "1004"
      },
      {
        "id": "1002"
      },
      {
        "id": "1006"
      },
      {
        "id": "1004"
      },
      {
        "id": "1005"
      },
      {
        "id": "1017"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
    ]
  },
  "112": {
    "id": "112",
    "name": "Open Fields",
    "commander": {
        "id": "218"
    },
    "deck": [
      {
        "id": "1602",
        "level": "2"
      },
      {
        "id": "1602",
        "level": "2"
      },
      {
        "id": "1605"
      },
      {
        "id": "1003"
      },
      {
        "id": "1004",
        "level": "2"
      },
      {
        "id": "1613"
      },
      {
        "id": "1015"
      },
      {
        "id": "1613"
      },
      {
        "id": "1010"
      },
      {
        "id": "1018"
      },
    ]
  },
  "113": {
    "id": "113",
    "name": "Sickness Spreading",
    "commander": {
        "id": "218"
    },
    "deck": [
      {
        "id": "1602",
        "level": "2"
      },
      {
        "id": "1602",
        "level": "2"
      },
      {
        "id": "1605",
        "level": "2"
      },
      {
        "id": "1003",
        "level": "2"
      },
      {
        "id": "1004"
      },
      {
        "id": "1015"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1010"
      },
      {
        "id": "1018"
      },
    ]
  },
  "114": {
    "id": "114",
    "name": "Border's Edge",
    "commander": {
        "id": "2",
        "level": "2"
    },
    "deck": [
      {
        "id": "1602",
        "level": "2"
      },
      {
        "id": "1605"
      },
      {
        "id": "1003"
      },
      {
        "id": "1004"
      },
      {
        "id": "1010"
      },
      {
        "id": "1015"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1613"
      },
      {
        "id": "1625"
      },
    ]
  },
  "12": {
    "id": "12",
    "name": "Guardian's Training",
    "commander": {
        "id": "217"
    },
    "deck": [
      {
        "id": "1000"
      },
      {
        "id": "1000"
      },
      {
        "id": "1000"
      },
      {
        "id": "1001",
        "mastery_level": "2"
      },
      {
        "id": "1001",
        "mastery_level": "2"
      },
      {
        "id": "1601",
        "mastery_level": "2"
      },
      {
        "id": "1601",
        "mastery_level": "3"
      },
      {
        "id": "1603",
        "mastery_level": "3"
      },
      {
        "id": "1005",
        "mastery_level": "3"
      },
      {
        "id": "1005",
        "mastery_level": "3"
      },
    ]
  },
  "121": {
    "id": "121",
    "name": "Shelter",
    "commander": {
        "id": "203",
        "level": "3"
    },
    "deck": [
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1605"
      },
      {
        "id": "1004"
      },
      {
        "id": "1619"
      },
      {
        "id": "1015"
      },
      {
        "id": "1613"
      },
      {
        "id": "1010"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
    ]
  },
  "122": {
    "id": "122",
    "name": "In The Distance",
    "commander": {
        "id": "203",
        "level": "2"
    },
    "deck": [
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1304"
      },
      {
        "id": "1004"
      },
      {
        "id": "1313"
      },
      {
        "id": "1314",
        "level": "2"
      },
      {
        "id": "1314",
        "level": "2"
      },
      {
        "id": "1613"
      },
      {
        "id": "1010"
      },
      {
        "id": "1018"
      },
    ]
  },
  "123": {
    "id": "123",
    "name": "Something's Off...",
    "commander": {
        "id": "218",
        "level": "2"
    },
    "deck": [
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1304"
      },
      {
        "id": "1304"
      },
      {
        "id": "1313"
      },
      {
        "id": "1314"
      },
      {
        "id": "1613"
      },
      {
        "id": "1010"
      },
      {
        "id": "1018"
      },
      {
        "id": "1629"
      },
    ]
  },
  "124": {
    "id": "124",
    "name": "Lightning and Brimstone",
    "commander": {
        "id": "219"
    },
    "deck": [
      {
        "id": "1303",
        "level": "2"
      },
      {
        "id": "1303",
        "level": "2"
      },
      {
        "id": "1304",
        "level": "2"
      },
      {
        "id": "1306",
        "level": "2"
      },
      {
        "id": "1311",
        "level": "2"
      },
      {
        "id": "1311",
        "level": "2"
      },
      {
        "id": "1317",
        "level": "2"
      },
      {
        "id": "1314"
      },
      {
        "id": "1329"
      },
      {
        "id": "1326"
      },
    ]
  },
  "13": {
    "id": "13",
    "name": "Undead Emerge",
    "commander": {
        "id": "200"
    },
    "deck": [
      {
        "id": "1300"
      },
      {
        "id": "1300"
      },
      {
        "id": "1300"
      },
      {
        "id": "1300",
        "level": "2",
        "mastery_level": "2"
      },
      {
        "id": "1300",
        "level": "2",
        "mastery_level": "2"
      },
      {
        "id": "1302",
        "mastery_level": "2"
      },
      {
        "id": "1302",
        "mastery_level": "3"
      },
      {
        "id": "1303",
        "mastery_level": "3"
      },
      {
        "id": "1305",
        "mastery_level": "3"
      },
      {
        "id": "1313",
        "mastery_level": "3"
      },
    ]
  },
  "131": {
    "id": "131",
    "name": "Unfamiliar Lands",
    "commander": {
        "id": "210"
    },
    "deck": [
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1311"
      },
      {
        "id": "1313"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1330"
      },
    ]
  },
  "132": {
    "id": "132",
    "name": "Lava Crab Gang",
    "commander": {
        "id": "210"
    },
    "deck": [
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1313"
      },
      {
        "id": "1314"
      },
      {
        "id": "1328"
      },
    ]
  },
  "133": {
    "id": "133",
    "name": "Rocks and Lava",
    "commander": {
        "id": "210"
    },
    "deck": [
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1314"
      },
      {
        "id": "1317",
        "level": "2"
      },
      {
        "id": "1330"
      },
    ]
  },
  "134": {
    "id": "134",
    "name": "Titans of Fire",
    "commander": {
        "id": "206"
    },
    "deck": [
      {
        "id": "1301"
      },
      {
        "id": "1301"
      },
      {
        "id": "1305"
      },
      {
        "id": "1305"
      },
      {
        "id": "1317",
        "level": "2"
      },
      {
        "id": "1317",
        "level": "2"
      },
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "1326"
      },
      {
        "id": "1330"
      },
    ]
  },
  "14": {
    "id": "14",
    "name": "Bury the Dead",
    "commander": {
        "id": "200",
        "level": "1"
    },
    "deck": [
      {
        "id": "1300"
      },
      {
        "id": "1300"
      },
      {
        "id": "1300"
      },
      {
        "id": "1302"
      },
      {
        "id": "1301",
        "mastery_level": "2"
      },
      {
        "id": "1302",
        "mastery_level": "2"
      },
      {
        "id": "1302",
        "mastery_level": "3"
      },
      {
        "id": "1303",
        "mastery_level": "3"
      },
      {
        "id": "1305",
        "mastery_level": "3"
      },
      {
        "id": "1313",
        "mastery_level": "3"
      },
    ]
  },
  "141": {
    "id": "141",
    "name": "Chaotic... Evil?",
    "commander": {
        "id": "210"
    },
    "deck": [
      {
        "id": "1302"
      },
      {
        "id": "1303"
      },
      {
        "id": "1306"
      },
      {
        "id": "1305"
      },
      {
        "id": "1317"
      },
      {
        "id": "1318"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1327"
      },
      {
        "id": "1328"
      },
    ]
  },
  "142": {
    "id": "142",
    "name": "Trust",
    "commander": {
        "id": "210",
        "level": "2"
    },
    "deck": [
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1304"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1315"
      },
      {
        "id": "1317"
      },
      {
        "id": "1318"
      },
      {
        "id": "1325"
      },
      {
        "id": "1328"
      },
    ]
  },
  "143": {
    "id": "143",
    "name": "Troubling Travels",
    "commander": {
        "id": "231"
    },
    "deck": [
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1304"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1315"
      },
      {
        "id": "1317"
      },
      {
        "id": "1318"
      },
      {
        "id": "1325"
      },
      {
        "id": "1328"
      },
    ]
  },
  "144": {
    "id": "144",
    "name": "Pierce the Siege",
    "commander": {
        "id": "231",
        "level": "2"
    },
    "deck": [
      {
        "id": "1302"
      },
      {
        "id": "1301"
      },
      {
        "id": "1303"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1315"
      },
      {
        "id": "1318"
      },
      {
        "id": "1330"
      },
      {
        "id": "1325"
      },
      {
        "id": "1326"
      },
    ]
  },
  "1500": {
    "id": "1500",
    "name": "The Earth Trembles...",
    "commander": {
        "id": "254"
    },
    "deck": [
      {
        "id": "8005"
      },
      {
        "id": "8005"
      },
      {
        "id": "8005"
      },
      {
        "id": "8006"
      },
      {
        "id": "8006"
      },
      {
        "id": "8006"
      },
      {
        "id": "7018"
      },
      {
        "id": "7014"
      },
      {
        "id": "7014"
      },
      {
        "id": "7009"
      },
      {
        "id": "7009"
      },
      {
        "id": "7002"
      },
      {
        "id": "7001"
      },
      {
        "id": "7001"
      },
      {
        "id": "7008"
      },
    ]
  },
  "1501": {
    "id": "1501",
    "name": "The Land Shatters...",
    "commander": {
        "id": "254"
    },
    "deck": [
      {
        "id": "8005"
      },
      {
        "id": "8005"
      },
      {
        "id": "8006"
      },
      {
        "id": "8006"
      },
      {
        "id": "7018"
      },
      {
        "id": "7014"
      },
      {
        "id": "7014"
      },
      {
        "id": "7009"
      },
      {
        "id": "7009"
      },
      {
        "id": "7002"
      },
      {
        "id": "7002"
      },
      {
        "id": "7001"
      },
      {
        "id": "7001"
      },
      {
        "id": "2013"
      },
      {
        "id": "7008"
      },
    ]
  },
  "1502": {
    "id": "1502",
    "name": "Rising from the Depths...",
    "commander": {
        "id": "254"
    },
    "deck": [
      {
        "id": "8005"
      },
      {
        "id": "8005"
      },
      {
        "id": "8006"
      },
      {
        "id": "7018"
      },
      {
        "id": "7014"
      },
      {
        "id": "7014"
      },
      {
        "id": "7009"
      },
      {
        "id": "7009"
      },
      {
        "id": "7002"
      },
      {
        "id": "7002"
      },
      {
        "id": "7001"
      },
      {
        "id": "7001"
      },
      {
        "id": "2013"
      },
      {
        "id": "7008"
      },
      {
        "id": "7008"
      },
    ]
  },
  "1503": {
    "id": "1503",
    "name": "Atlas, the Ancient",
    "commander": {
        "id": "254"
    },
    "deck": [
      {
        "id": "8005"
      },
      {
        "id": "8006"
      },
      {
        "id": "7018"
      },
      {
        "id": "7018"
      },
      {
        "id": "7014"
      },
      {
        "id": "7014"
      },
      {
        "id": "7009"
      },
      {
        "id": "7009"
      },
      {
        "id": "7002"
      },
      {
        "id": "7002"
      },
      {
        "id": "7001"
      },
      {
        "id": "7001"
      },
      {
        "id": "2013"
      },
      {
        "id": "2013"
      },
      {
        "id": "7008"
      },
    ]
  },
  "1504": {
    "id": "1504",
    "name": "The Wind Stirs...",
    "commander": {
        "id": "255"
    },
    "deck": [
      {
        "id": "8007"
      },
      {
        "id": "8007"
      },
      {
        "id": "8008"
      },
      {
        "id": "8008"
      },
      {
        "id": "5008"
      },
      {
        "id": "5008"
      },
      {
        "id": "2007"
      },
      {
        "id": "2007"
      },
      {
        "id": "5013"
      },
      {
        "id": "5013"
      },
      {
        "id": "5026"
      },
      {
        "id": "5026"
      },
      {
        "id": "5023"
      },
      {
        "id": "5018"
      },
      {
        "id": "1042"
      },
    ]
  },
  "1505": {
    "id": "1505",
    "name": "The Clouds Part...",
    "commander": {
        "id": "255"
    },
    "deck": [
      {
        "id": "8007"
      },
      {
        "id": "8007"
      },
      {
        "id": "8008"
      },
      {
        "id": "8008"
      },
      {
        "id": "8008"
      },
      {
        "id": "5008"
      },
      {
        "id": "5008"
      },
      {
        "id": "2007"
      },
      {
        "id": "2007"
      },
      {
        "id": "5013"
      },
      {
        "id": "5013"
      },
      {
        "id": "5026"
      },
      {
        "id": "5026"
      },
      {
        "id": "5023"
      },
      {
        "id": "5018"
      },
      {
        "id": "1042"
      },
    ]
  },
  "1506": {
    "id": "1506",
    "name": "The Air Chills...",
    "commander": {
        "id": "255"
    },
    "deck": [
      {
        "id": "8007"
      },
      {
        "id": "8008"
      },
      {
        "id": "8008"
      },
      {
        "id": "8008"
      },
      {
        "id": "5008"
      },
      {
        "id": "5008"
      },
      {
        "id": "2007"
      },
      {
        "id": "2007"
      },
      {
        "id": "5013"
      },
      {
        "id": "5026"
      },
      {
        "id": "5026"
      },
      {
        "id": "5023"
      },
      {
        "id": "5018"
      },
      {
        "id": "1042"
      },
      {
        "id": "1042"
      },
      {
        "id": "1042"
      },
    ]
  },
  "1507": {
    "id": "1507",
    "name": "Solaron, The Origin",
    "commander": {
        "id": "255"
    },
    "deck": [
      {
        "id": "8007"
      },
      {
        "id": "8008"
      },
      {
        "id": "5008"
      },
      {
        "id": "5008"
      },
      {
        "id": "2007"
      },
      {
        "id": "2007"
      },
      {
        "id": "5013"
      },
      {
        "id": "5013"
      },
      {
        "id": "5026"
      },
      {
        "id": "5026"
      },
      {
        "id": "5026"
      },
      {
        "id": "5023"
      },
      {
        "id": "5023"
      },
      {
        "id": "5018"
      },
      {
        "id": "1042"
      },
    ]
  },
  "1508": {
    "id": "1508",
    "name": "The Heat Rises...",
    "commander": {
        "id": "256"
    },
    "deck": [
      {
        "id": "8009"
      },
      {
        "id": "8010"
      },
      {
        "id": "1340"
      },
      {
        "id": "1340"
      },
      {
        "id": "2015"
      },
      {
        "id": "6014"
      },
      {
        "id": "6013"
      },
      {
        "id": "6013"
      },
      {
        "id": "6003"
      },
      {
        "id": "6002"
      },
      {
        "id": "2006"
      },
      {
        "id": "6019"
      },
      {
        "id": "6019"
      },
      {
        "id": "6024"
      },
    ]
  },
  "1509": {
    "id": "1509",
    "name": "The Lava Flows...",
    "commander": {
        "id": "256"
    },
    "deck": [
      {
        "id": "8009"
      },
      {
        "id": "8010"
      },
      {
        "id": "8010"
      },
      {
        "id": "8010"
      },
      {
        "id": "1340"
      },
      {
        "id": "1340"
      },
      {
        "id": "2015"
      },
      {
        "id": "6014"
      },
      {
        "id": "6013"
      },
      {
        "id": "6003"
      },
      {
        "id": "6002"
      },
      {
        "id": "2006"
      },
      {
        "id": "6019"
      },
      {
        "id": "6024"
      },
      {
        "id": "6024"
      },
    ]
  },
  "151": {
    "id": "151",
    "name": "Within the Walls",
    "commander": {
        "id": "5",
        "level": "2"
    },
    "deck": [
      {
        "id": "1302"
      },
      {
        "id": "1306"
      },
      {
        "id": "1305"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1318"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1325"
      },
      {
        "id": "1328"
      },
    ]
  },
  "1510": {
    "id": "1510",
    "name": "The Volcano Erupts...",
    "commander": {
        "id": "256"
    },
    "deck": [
      {
        "id": "8009"
      },
      {
        "id": "8009"
      },
      {
        "id": "8009"
      },
      {
        "id": "8010"
      },
      {
        "id": "1340"
      },
      {
        "id": "1340"
      },
      {
        "id": "2015"
      },
      {
        "id": "2015"
      },
      {
        "id": "6014"
      },
      {
        "id": "6013"
      },
      {
        "id": "6003"
      },
      {
        "id": "6002"
      },
      {
        "id": "2006"
      },
      {
        "id": "6019"
      },
      {
        "id": "6024"
      },
    ]
  },
  "1511": {
    "id": "1511",
    "name": "Vulcanos",
    "commander": {
        "id": "256"
    },
    "deck": [
      {
        "id": "8009"
      },
      {
        "id": "8009"
      },
      {
        "id": "8009"
      },
      {
        "id": "8009",
        "mastery_level": "6"
      },
      {
        "id": "8010"
      },
      {
        "id": "8010"
      },
      {
        "id": "8010",
        "mastery_level": "6"
      },
      {
        "id": "1340"
      },
      {
        "id": "2015"
      },
      {
        "id": "6014"
      },
      {
        "id": "6013"
      },
      {
        "id": "6003"
      },
      {
        "id": "6002"
      },
      {
        "id": "2006"
      },
      {
        "id": "6019"
      },
      {
        "id": "6024"
      },
    ]
  },
  "1512": {
    "id": "1512",
    "name": "The Road Traveled",
    "commander": {
        "id": "224"
    },
    "deck": [
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "7045"
      },
      {
        "id": "1010",
        "mastery_level": "2"
      },
      {
        "id": "7021",
        "mastery_level": "2"
      },
      {
        "id": "1317",
        "mastery_level": "3"
      },
      {
        "id": "6015",
        "mastery_level": "4"
      },
      {
        "id": "2005",
        "mastery_level": "5"
      },
      {
        "id": "6002",
        "mastery_level": "6"
      },
      {
        "id": "5013",
        "mastery_level": "7"
      },
    ]
  },
  "1513": {
    "id": "1513",
    "name": "Field Observation",
    "commander": {
        "id": "203"
    },
    "deck": [
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "5015"
      },
      {
        "id": "1026"
      },
      {
        "id": "1318",
        "mastery_level": "2"
      },
      {
        "id": "2020",
        "mastery_level": "2"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "2009",
        "mastery_level": "4"
      },
      {
        "id": "2012",
        "mastery_level": "5"
      },
      {
        "id": "6013",
        "mastery_level": "6"
      },
      {
        "id": "6032",
        "mastery_level": "7"
      },
    ]
  },
  "1514": {
    "id": "1514",
    "name": "Real Time Training",
    "commander": {
        "id": "210"
    },
    "deck": [
      {
        "id": "1616"
      },
      {
        "id": "1616"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1610"
      },
      {
        "id": "2000"
      },
      {
        "id": "6020"
      },
      {
        "id": "7011",
        "mastery_level": "2"
      },
      {
        "id": "1617",
        "mastery_level": "3"
      },
      {
        "id": "1628",
        "mastery_level": "4"
      },
      {
        "id": "1625",
        "mastery_level": "5"
      },
      {
        "id": "7009",
        "mastery_level": "6"
      },
      {
        "id": "7040",
        "mastery_level": "7"
      },
    ]
  },
  "1515": {
    "id": "1515",
    "name": "Action and Reaction",
    "commander": {
        "id": "226"
    },
    "deck": [
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "6006"
      },
      {
        "id": "1630"
      },
      {
        "id": "7004"
      },
      {
        "id": "6029"
      },
      {
        "id": "1313",
        "mastery_level": "2"
      },
      {
        "id": "7020",
        "mastery_level": "2"
      },
      {
        "id": "1319",
        "mastery_level": "3"
      },
      {
        "id": "2020",
        "mastery_level": "4"
      },
      {
        "id": "1629",
        "mastery_level": "5"
      },
      {
        "id": "1342",
        "mastery_level": "6"
      },
      {
        "id": "6041",
        "mastery_level": "7"
      },
    ]
  },
  "1516": {
    "id": "1516",
    "name": "Golden Rule",
    "commander": {
        "id": "238"
    },
    "deck": [
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "1011"
      },
      {
        "id": "1011"
      },
      {
        "id": "1018"
      },
      {
        "id": "1030"
      },
      {
        "id": "5021"
      },
      {
        "id": "5004"
      },
      {
        "id": "1025",
        "mastery_level": "2"
      },
      {
        "id": "1018",
        "mastery_level": "3"
      },
      {
        "id": "1026",
        "mastery_level": "4"
      },
      {
        "id": "2002",
        "mastery_level": "5"
      },
      {
        "id": "5001",
        "mastery_level": "6"
      },
      {
        "id": "5009",
        "mastery_level": "7"
      },
    ]
  },
  "1517": {
    "id": "1517",
    "name": "Elyse Emerges",
    "commander": {
        "id": "243"
    },
    "deck": [
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "5005"
      },
      {
        "id": "5044"
      },
      {
        "id": "6005"
      },
      {
        "id": "2001"
      },
      {
        "id": "6016",
        "mastery_level": "2"
      },
      {
        "id": "5006",
        "mastery_level": "3"
      },
      {
        "id": "2012",
        "mastery_level": "4"
      },
      {
        "id": "6035",
        "mastery_level": "5"
      },
      {
        "id": "1343",
        "mastery_level": "6"
      },
      {
        "id": "6028",
        "mastery_level": "7"
      },
    ]
  },
  "1518": {
    "id": "1518",
    "name": "Ocean View",
    "commander": {
        "id": "224"
    },
    "deck": [
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1325"
      },
      {
        "id": "1317",
        "mastery_level": "2"
      },
      {
        "id": "6038",
        "mastery_level": "2"
      },
      {
        "id": "1014",
        "mastery_level": "3"
      },
      {
        "id": "1031",
        "mastery_level": "4"
      },
      {
        "id": "5005",
        "mastery_level": "5"
      },
      {
        "id": "5043",
        "mastery_level": "6"
      },
      {
        "id": "5034",
        "mastery_level": "7"
      },
    ]
  },
  "1519": {
    "id": "1519",
    "name": "Concerned Citizen",
    "commander": {
        "id": "223"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "6006"
      },
      {
        "id": "6006"
      },
      {
        "id": "2021"
      },
      {
        "id": "6010"
      },
      {
        "id": "7006",
        "mastery_level": "2"
      },
      {
        "id": "5025",
        "mastery_level": "2"
      },
      {
        "id": "1314",
        "mastery_level": "3"
      },
      {
        "id": "5028",
        "mastery_level": "4"
      },
      {
        "id": "2004",
        "mastery_level": "5"
      },
      {
        "id": "5009",
        "mastery_level": "6"
      },
      {
        "id": "6045",
        "mastery_level": "7"
      },
    ]
  },
  "152": {
    "id": "152",
    "name": "Decim the Firebringer",
    "commander": {
        "id": "5",
        "level": "2"
    },
    "deck": [
      {
        "id": "1302"
      },
      {
        "id": "1306"
      },
      {
        "id": "1305"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1318"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1325"
      },
      {
        "id": "1328"
      },
    ]
  },
  "1520": {
    "id": "1520",
    "name": "Exposure Therapy",
    "commander": {
        "id": "200"
    },
    "deck": [
      {
        "id": "1615"
      },
      {
        "id": "1615"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "2031"
      },
      {
        "id": "7015"
      },
      {
        "id": "5015",
        "mastery_level": "2"
      },
      {
        "id": "7017",
        "mastery_level": "3"
      },
      {
        "id": "2009",
        "mastery_level": "4"
      },
      {
        "id": "2023",
        "mastery_level": "5"
      },
      {
        "id": "7046",
        "mastery_level": "6"
      },
      {
        "id": "7044",
        "mastery_level": "7"
      },
    ]
  },
  "1521": {
    "id": "1521",
    "name": "Finding Strength",
    "commander": {
        "id": "225"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1329"
      },
      {
        "id": "2030"
      },
      {
        "id": "1028"
      },
      {
        "id": "1012",
        "mastery_level": "2"
      },
      {
        "id": "1628",
        "mastery_level": "2"
      },
      {
        "id": "1616",
        "mastery_level": "3"
      },
      {
        "id": "2032",
        "mastery_level": "4"
      },
      {
        "id": "6020",
        "mastery_level": "5"
      },
      {
        "id": "7018",
        "mastery_level": "6"
      },
      {
        "id": "2013",
        "mastery_level": "7"
      },
    ]
  },
  "1522": {
    "id": "1522",
    "name": "Dark Betrayal",
    "commander": {
        "id": "265"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1329"
      },
      {
        "id": "1329"
      },
      {
        "id": "6029"
      },
      {
        "id": "2024",
        "mastery_level": "2"
      },
      {
        "id": "1613",
        "mastery_level": "3"
      },
      {
        "id": "6034",
        "mastery_level": "4"
      },
      {
        "id": "2012",
        "mastery_level": "5"
      },
      {
        "id": "6039",
        "mastery_level": "6"
      },
      {
        "id": "6037",
        "mastery_level": "7"
      },
    ]
  },
  "1523": {
    "id": "1523",
    "name": "Oda's Confrontation",
    "commander": {
        "id": "268"
    },
    "deck": [
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "5035"
      },
      {
        "id": "1326"
      },
      {
        "id": "6044"
      },
      {
        "id": "6042"
      },
      {
        "id": "5021"
      },
      {
        "id": "5012"
      },
      {
        "id": "2032"
      },
      {
        "id": "6035"
      },
      {
        "id": "2015",
        "mastery_level": "6"
      },
      {
        "id": "5000",
        "mastery_level": "7"
      },
    ]
  },
  "1524": {
    "id": "1524",
    "name": "What Ails",
    "commander": {
        "id": "223"
    },
    "deck": [
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1616"
      },
      {
        "id": "1616"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "7016"
      },
      {
        "id": "1015",
        "mastery_level": "2"
      },
      {
        "id": "2011",
        "mastery_level": "2"
      },
      {
        "id": "1619",
        "mastery_level": "3"
      },
      {
        "id": "7020",
        "mastery_level": "4"
      },
      {
        "id": "7038",
        "mastery_level": "5"
      },
      {
        "id": "7027",
        "mastery_level": "6"
      },
      {
        "id": "5018",
        "mastery_level": "7"
      },
    ]
  },
  "1525": {
    "id": "1525",
    "name": "Showing Symptoms",
    "commander": {
        "id": "200"
    },
    "deck": [
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1011"
      },
      {
        "id": "1011"
      },
      {
        "id": "7007"
      },
      {
        "id": "6015"
      },
      {
        "id": "7021"
      },
      {
        "id": "5017",
        "mastery_level": "2"
      },
      {
        "id": "7005",
        "mastery_level": "2"
      },
      {
        "id": "1014",
        "mastery_level": "3"
      },
      {
        "id": "7045",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "6043",
        "mastery_level": "6"
      },
      {
        "id": "2022",
        "mastery_level": "7"
      },
    ]
  },
  "1526": {
    "id": "1526",
    "name": "Salt Side Laboratory",
    "commander": {
        "id": "210"
    },
    "deck": [
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "6007"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "2003"
      },
      {
        "id": "5025"
      },
      {
        "id": "5024",
        "mastery_level": "2"
      },
      {
        "id": "1615",
        "mastery_level": "3"
      },
      {
        "id": "1628",
        "mastery_level": "4"
      },
      {
        "id": "6025",
        "mastery_level": "5"
      },
      {
        "id": "6024",
        "mastery_level": "6"
      },
      {
        "id": "5039",
        "mastery_level": "7"
      },
    ]
  },
  "1527": {
    "id": "1527",
    "name": "Flower for the Lady",
    "commander": {
        "id": "205"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1019"
      },
      {
        "id": "5006"
      },
      {
        "id": "1632"
      },
      {
        "id": "2025"
      },
      {
        "id": "5015"
      },
      {
        "id": "1012",
        "mastery_level": "2"
      },
      {
        "id": "1028",
        "mastery_level": "2"
      },
      {
        "id": "1314",
        "mastery_level": "3"
      },
      {
        "id": "6029",
        "mastery_level": "4"
      },
      {
        "id": "7005",
        "mastery_level": "5"
      },
      {
        "id": "7033",
        "mastery_level": "6"
      },
      {
        "id": "5031",
        "mastery_level": "7"
      },
    ]
  },
  "1528": {
    "id": "1528",
    "name": "Building Burdens",
    "commander": {
        "id": "299"
    },
    "deck": [
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "5017"
      },
      {
        "id": "2027"
      },
      {
        "id": "2029"
      },
      {
        "id": "5040"
      },
      {
        "id": "7041",
        "mastery_level": "2"
      },
      {
        "id": "5007",
        "mastery_level": "3"
      },
      {
        "id": "2032",
        "mastery_level": "4"
      },
      {
        "id": "6038",
        "mastery_level": "5"
      },
      {
        "id": "2028",
        "mastery_level": "6"
      },
      {
        "id": "5019",
        "mastery_level": "7"
      },
    ]
  },
  "1529": {
    "id": "1529",
    "name": "Bottoms Up",
    "commander": {
        "id": "252"
    },
    "deck": [
      {
        "id": "7022"
      },
      {
        "id": "7022"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "2012"
      },
      {
        "id": "7020"
      },
      {
        "id": "6046"
      },
      {
        "id": "5046"
      },
      {
        "id": "1032",
        "mastery_level": "2"
      },
      {
        "id": "6022",
        "mastery_level": "3"
      },
      {
        "id": "6042",
        "mastery_level": "4"
      },
      {
        "id": "1043",
        "mastery_level": "5"
      },
      {
        "id": "6018",
        "mastery_level": "6"
      },
      {
        "id": "5049",
        "mastery_level": "7"
      },
    ]
  },
  "153": {
    "id": "153",
    "name": "Contention",
    "commander": {
        "id": "206",
        "level": "2"
    },
    "deck": [
      {
        "id": "1306"
      },
      {
        "id": "1303"
      },
      {
        "id": "1304"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1318"
      },
      {
        "id": "1319"
      },
      {
        "id": "1315"
      },
      {
        "id": "1328"
      },
      {
        "id": "1326"
      },
    ]
  },
  "1530": {
    "id": "1530",
    "name": "Outback",
    "commander": {
        "id": "208"
    },
    "deck": [
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "6006"
      },
      {
        "id": "6006"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "2019"
      },
      {
        "id": "1314",
        "mastery_level": "2"
      },
      {
        "id": "7034",
        "mastery_level": "2"
      },
      {
        "id": "7006",
        "mastery_level": "3"
      },
      {
        "id": "2031",
        "mastery_level": "4"
      },
      {
        "id": "7011",
        "mastery_level": "5"
      },
      {
        "id": "7027",
        "mastery_level": "6"
      },
      {
        "id": "7043",
        "mastery_level": "7"
      },
    ]
  },
  "1531": {
    "id": "1531",
    "name": "Over Easy",
    "commander": {
        "id": "290"
    },
    "deck": [
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "6021"
      },
      {
        "id": "5041"
      },
      {
        "id": "6007",
        "mastery_level": "2"
      },
      {
        "id": "5044",
        "mastery_level": "2"
      },
      {
        "id": "1019",
        "mastery_level": "3"
      },
      {
        "id": "6021",
        "mastery_level": "4"
      },
      {
        "id": "1329",
        "mastery_level": "5"
      },
      {
        "id": "6030",
        "mastery_level": "6"
      },
      {
        "id": "5047",
        "mastery_level": "7"
      },
    ]
  },
  "1532": {
    "id": "1532",
    "name": "Hatch Day",
    "commander": {
        "id": "227"
    },
    "deck": [
      {
        "id": "1619"
      },
      {
        "id": "1619"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "2009"
      },
      {
        "id": "7016"
      },
      {
        "id": "2023",
        "mastery_level": "2"
      },
      {
        "id": "1015",
        "mastery_level": "3"
      },
      {
        "id": "2014",
        "mastery_level": "4"
      },
      {
        "id": "6046",
        "mastery_level": "5"
      },
      {
        "id": "5018",
        "mastery_level": "6"
      },
      {
        "id": "6013",
        "mastery_level": "7"
      },
    ]
  },
  "1533": {
    "id": "1533",
    "name": "Gone In 60 Seconds",
    "commander": {
        "id": "267"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "2005"
      },
      {
        "id": "2005"
      },
      {
        "id": "5024"
      },
      {
        "id": "1017",
        "mastery_level": "2"
      },
      {
        "id": "6015",
        "mastery_level": "2"
      },
      {
        "id": "1019",
        "mastery_level": "3"
      },
      {
        "id": "7045",
        "mastery_level": "4"
      },
      {
        "id": "5025",
        "mastery_level": "5"
      },
      {
        "id": "7008",
        "mastery_level": "6"
      },
      {
        "id": "6047",
        "mastery_level": "7"
      },
    ]
  },
  "1534": {
    "id": "1534",
    "name": "Fear",
    "commander": {
        "id": "250"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "2027"
      },
      {
        "id": "2025"
      },
      {
        "id": "6042"
      },
      {
        "id": "2024",
        "mastery_level": "2"
      },
      {
        "id": "1014",
        "mastery_level": "3"
      },
      {
        "id": "5040",
        "mastery_level": "4"
      },
      {
        "id": "2020",
        "mastery_level": "5"
      },
      {
        "id": "6019",
        "mastery_level": "6"
      },
      {
        "id": "5031",
        "mastery_level": "7"
      },
    ]
  },
  "1535": {
    "id": "1535",
    "name": "Cave Dweller",
    "commander": {
        "id": "293"
    },
    "deck": [
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "6036"
      },
      {
        "id": "6034"
      },
      {
        "id": "2032"
      },
      {
        "id": "6044",
        "mastery_level": "2"
      },
      {
        "id": "6022",
        "mastery_level": "3"
      },
      {
        "id": "2023",
        "mastery_level": "4"
      },
      {
        "id": "1343",
        "mastery_level": "5"
      },
      {
        "id": "6040",
        "mastery_level": "6"
      },
      {
        "id": "6009",
        "mastery_level": "7"
      },
    ]
  },
  "1536": {
    "id": "1536",
    "name": "Bookworm",
    "commander": {
        "id": "246"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1011"
      },
      {
        "id": "2023"
      },
      {
        "id": "5017",
        "mastery_level": "2"
      },
      {
        "id": "6046",
        "mastery_level": "2"
      },
      {
        "id": "1014",
        "mastery_level": "3"
      },
      {
        "id": "2029",
        "mastery_level": "4"
      },
      {
        "id": "2009",
        "mastery_level": "5"
      },
      {
        "id": "6035",
        "mastery_level": "6"
      },
      {
        "id": "6024",
        "mastery_level": "7"
      },
    ]
  },
  "1537": {
    "id": "1537",
    "name": "Dark Presence",
    "commander": {
        "id": "238"
    },
    "deck": [
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "5020"
      },
      {
        "id": "7020"
      },
      {
        "id": "1017",
        "mastery_level": "2"
      },
      {
        "id": "1028",
        "mastery_level": "2"
      },
      {
        "id": "5012",
        "mastery_level": "3"
      },
      {
        "id": "7004",
        "mastery_level": "4"
      },
      {
        "id": "7029",
        "mastery_level": "5"
      },
      {
        "id": "7028",
        "mastery_level": "6"
      },
      {
        "id": "1043",
        "mastery_level": "7"
      },
    ]
  },
  "1538": {
    "id": "1538",
    "name": "No Choice",
    "commander": {
        "id": "227"
    },
    "deck": [
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "1617"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "5046"
      },
      {
        "id": "6021"
      },
      {
        "id": "5033",
        "mastery_level": "2"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "7021",
        "mastery_level": "4"
      },
      {
        "id": "2032",
        "mastery_level": "5"
      },
      {
        "id": "5048",
        "mastery_level": "6"
      },
      {
        "id": "6013",
        "mastery_level": "7"
      },
    ]
  },
  "1539": {
    "id": "1539",
    "name": "Trapped by Chaos",
    "commander": {
        "id": "266"
    },
    "deck": [
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "1614"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "7045"
      },
      {
        "id": "7021"
      },
      {
        "id": "7034"
      },
      {
        "id": "1617",
        "mastery_level": "2"
      },
      {
        "id": "7005",
        "mastery_level": "2"
      },
      {
        "id": "5007",
        "mastery_level": "3"
      },
      {
        "id": "7035",
        "mastery_level": "4"
      },
      {
        "id": "1329",
        "mastery_level": "5"
      },
      {
        "id": "1641",
        "mastery_level": "6"
      },
      {
        "id": "6047",
        "mastery_level": "7"
      },
    ]
  },
  "154": {
    "id": "154",
    "name": "Lord of the Undead",
    "commander": {
        "id": "207"
    },
    "deck": [
      {
        "id": "1329",
        "level": "5"
      },
      {
        "id": "1329",
        "level": "5"
      },
      {
        "id": "1329",
        "level": "5"
      },
      {
        "id": "1329",
        "level": "5"
      },
      {
        "id": "1329",
        "level": "5"
      },
    ]
  },
  "1540": {
    "id": "1540",
    "name": "Strange Book",
    "commander": {
        "id": "243"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1028"
      },
      {
        "id": "5015"
      },
      {
        "id": "7024"
      },
      {
        "id": "2020",
        "mastery_level": "2"
      },
      {
        "id": "1616",
        "mastery_level": "3"
      },
      {
        "id": "5035",
        "mastery_level": "4"
      },
      {
        "id": "5020",
        "mastery_level": "5"
      },
      {
        "id": "5034",
        "mastery_level": "6"
      },
      {
        "id": "7018",
        "mastery_level": "7"
      },
    ]
  },
  "1541": {
    "id": "1541",
    "name": "What Lies Within",
    "commander": {
        "id": "209"
    },
    "deck": [
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "2019"
      },
      {
        "id": "2020"
      },
      {
        "id": "1332"
      },
      {
        "id": "7035"
      },
      {
        "id": "1331",
        "mastery_level": "2"
      },
      {
        "id": "5022",
        "mastery_level": "3"
      },
      {
        "id": "7020",
        "mastery_level": "4"
      },
      {
        "id": "7023",
        "mastery_level": "5"
      },
      {
        "id": "6028",
        "mastery_level": "6"
      },
      {
        "id": "6045",
        "mastery_level": "7"
      },
    ]
  },
  "1542": {
    "id": "1542",
    "name": "Guard Duty",
    "commander": {
        "id": "211"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "5011"
      },
      {
        "id": "5012",
        "mastery_level": "2"
      },
      {
        "id": "1025",
        "mastery_level": "2"
      },
      {
        "id": "1018",
        "mastery_level": "3"
      },
      {
        "id": "6005",
        "mastery_level": "4"
      },
      {
        "id": "6016",
        "mastery_level": "5"
      },
      {
        "id": "6032",
        "mastery_level": "6"
      },
      {
        "id": "6039",
        "mastery_level": "7"
      },
    ]
  },
  "1543": {
    "id": "1543",
    "name": "Idle Hands",
    "commander": {
        "id": "206"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1312"
      },
      {
        "id": "5030"
      },
      {
        "id": "5046"
      },
      {
        "id": "5022",
        "mastery_level": "2"
      },
      {
        "id": "2032",
        "mastery_level": "2"
      },
      {
        "id": "1317",
        "mastery_level": "3"
      },
      {
        "id": "5005",
        "mastery_level": "4"
      },
      {
        "id": "5030",
        "mastery_level": "5"
      },
      {
        "id": "2028",
        "mastery_level": "6"
      },
      {
        "id": "6040",
        "mastery_level": "7"
      },
    ]
  },
  "1544": {
    "id": "1544",
    "name": "Enemy Spotted",
    "commander": {
        "id": "208"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1631"
      },
      {
        "id": "7038"
      },
      {
        "id": "7047",
        "mastery_level": "2"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "7004",
        "mastery_level": "4"
      },
      {
        "id": "1629",
        "mastery_level": "5"
      },
      {
        "id": "7039",
        "mastery_level": "6"
      },
      {
        "id": "7048",
        "mastery_level": "7"
      },
    ]
  },
  "1545": {
    "id": "1545",
    "name": "Pangs of War",
    "commander": {
        "id": "289"
    },
    "deck": [
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "1313"
      },
      {
        "id": "1330"
      },
      {
        "id": "1325"
      },
      {
        "id": "6031"
      },
      {
        "id": "2000",
        "mastery_level": "2"
      },
      {
        "id": "6011",
        "mastery_level": "2"
      },
      {
        "id": "7006",
        "mastery_level": "3"
      },
      {
        "id": "6042",
        "mastery_level": "4"
      },
      {
        "id": "6038",
        "mastery_level": "5"
      },
      {
        "id": "6041",
        "mastery_level": "6"
      },
      {
        "id": "6001",
        "mastery_level": "7"
      },
    ]
  },
  "1546": {
    "id": "1546",
    "name": "Iron Stomach",
    "commander": {
        "id": "275"
    },
    "deck": [
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1614"
      },
      {
        "id": "1626"
      },
      {
        "id": "7030"
      },
      {
        "id": "7035"
      },
      {
        "id": "1015",
        "mastery_level": "2"
      },
      {
        "id": "1629",
        "mastery_level": "2"
      },
      {
        "id": "5012",
        "mastery_level": "3"
      },
      {
        "id": "1329",
        "mastery_level": "4"
      },
      {
        "id": "7005",
        "mastery_level": "5"
      },
      {
        "id": "7040",
        "mastery_level": "6"
      },
      {
        "id": "5013",
        "mastery_level": "7"
      },
    ]
  },
  "1547": {
    "id": "1547",
    "name": "Promotion",
    "commander": {
        "id": "264"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "1032"
      },
      {
        "id": "5041"
      },
      {
        "id": "5046"
      },
      {
        "id": "5016"
      },
      {
        "id": "2010",
        "mastery_level": "2"
      },
      {
        "id": "1012",
        "mastery_level": "3"
      },
      {
        "id": "5028",
        "mastery_level": "4"
      },
      {
        "id": "2007",
        "mastery_level": "5"
      },
      {
        "id": "5018",
        "mastery_level": "5"
      },
      {
        "id": "7013",
        "mastery_level": "6"
      },
    ]
  },
  "161": {
    "id": "161",
    "name": "Path to The Void",
    "commander": {
        "id": "231"
    },
    "deck": [
      {
        "id": "1302"
      },
      {
        "id": "1303"
      },
      {
        "id": "1315"
      },
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "1318"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1327"
      },
      {
        "id": "1326"
      },
    ]
  },
  "162": {
    "id": "162",
    "name": "River of Fire",
    "commander": {
        "id": "231",
        "level": "2"
    },
    "deck": [
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1325"
      },
      {
        "id": "1327"
      },
    ]
  },
  "163": {
    "id": "163",
    "name": "Crossings",
    "commander": {
        "id": "206",
        "level": "2"
    },
    "deck": [
      {
        "id": "1305"
      },
      {
        "id": "1307"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1314"
      },
      {
        "id": "1315"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1325"
      },
      {
        "id": "1328"
      },
    ]
  },
  "164": {
    "id": "164",
    "name": "Fire Twins",
    "commander": {
        "id": "222"
    },
    "deck": [
      {
        "id": "1302"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1315"
      },
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "1319"
      },
      {
        "id": "1327"
      },
      {
        "id": "1326"
      },
      {
        "id": "1326"
      },
    ]
  },
  "171": {
    "id": "171",
    "name": "Exit Strategy",
    "commander": {
        "id": "206",
        "level": "2"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1325"
      },
      {
        "id": "1330"
      },
      {
        "id": "1330"
      },
    ]
  },
  "172": {
    "id": "172",
    "name": "Kicking the Nest",
    "commander": {
        "id": "211"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1314"
      },
      {
        "id": "1315"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1326"
      },
      {
        "id": "1327"
      },
      {
        "id": "1329"
      },
    ]
  },
  "173": {
    "id": "173",
    "name": "Purging",
    "commander": {
        "id": "211"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1317"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1326"
      },
      {
        "id": "1325"
      },
      {
        "id": "1326"
      },
    ]
  },
  "174": {
    "id": "174",
    "name": "Wraith's Den",
    "commander": {
        "id": "211"
    },
    "deck": [
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319",
        "mastery_level": "2"
      },
    ]
  },
  "181": {
    "id": "181",
    "name": "Pre-emptive Strike",
    "commander": {
        "id": "208"
    },
    "deck": [
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1011"
      },
      {
        "id": "1018"
      },
      {
        "id": "1616"
      },
      {
        "id": "1613"
      },
      {
        "id": "1329",
        "level": "5"
      },
      {
        "id": "1329",
        "level": "5"
      },
      {
        "id": "1628"
      },
      {
        "id": "5004"
      },
    ]
  },
  "182": {
    "id": "182",
    "name": "The Second Wave",
    "commander": {
        "id": "208"
    },
    "deck": [
      {
        "id": "1306"
      },
      {
        "id": "1314"
      },
      {
        "id": "1017"
      },
      {
        "id": "1010"
      },
      {
        "id": "1615"
      },
      {
        "id": "1618"
      },
      {
        "id": "6007"
      },
      {
        "id": "1328"
      },
      {
        "id": "1026"
      },
      {
        "id": "1628"
      },
    ]
  },
  "183": {
    "id": "183",
    "name": "Clash",
    "commander": {
        "id": "208"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "1314"
      },
      {
        "id": "1318"
      },
      {
        "id": "6006"
      },
      {
        "id": "6006"
      },
      {
        "id": "1327"
      },
      {
        "id": "1629"
      },
      {
        "id": "1628"
      },
      {
        "id": "6005"
      },
      {
        "id": "6005"
      },
    ]
  },
  "184": {
    "id": "184",
    "name": "The Void's Champion",
    "commander": {
        "id": "209"
    },
    "deck": [
      {
        "id": "1312"
      },
      {
        "id": "1311"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1326"
      },
      {
        "id": "1327"
      },
      {
        "id": "1327"
      },
      {
        "id": "1341"
      },
    ]
  },
  "191": {
    "id": "191",
    "name": "Caverns of Crossing",
    "commander": {
        "id": "212"
    },
    "deck": [
      {
        "id": "1011"
      },
      {
        "id": "1011"
      },
      {
        "id": "1313"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1329",
        "level": "3"
      },
      {
        "id": "1628"
      },
      {
        "id": "1330"
      },
      {
        "id": "1328"
      },
      {
        "id": "1328"
      },
    ]
  },
  "192": {
    "id": "192",
    "name": "Depths of the World",
    "commander": {
        "id": "212"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1011"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1017"
      },
      {
        "id": "1026"
      },
      {
        "id": "1328"
      },
      {
        "id": "1328"
      },
      {
        "id": "1629"
      },
      {
        "id": "1629"
      },
    ]
  },
  "193": {
    "id": "193",
    "name": "Deep Tremors",
    "commander": {
        "id": "212"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1017"
      },
      {
        "id": "1026"
      },
      {
        "id": "1328"
      },
      {
        "id": "1628"
      },
      {
        "id": "1629"
      },
      {
        "id": "1629"
      },
    ]
  },
  "194": {
    "id": "194",
    "name": "Mr. Bear, Tear Down This Wall",
    "commander": {
        "id": "212"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1619"
      },
      {
        "id": "6004"
      },
      {
        "id": "6005"
      },
      {
        "id": "6005"
      },
      {
        "id": "1629"
      },
      {
        "id": "1627"
      },
      {
        "id": "7004"
      },
    ]
  },
  "201": {
    "id": "201",
    "name": "The Ridge",
    "commander": {
        "id": "220"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1018"
      },
      {
        "id": "1317",
        "level": "3"
      },
      {
        "id": "1615"
      },
      {
        "id": "1026"
      },
      {
        "id": "1027"
      },
      {
        "id": "1027"
      },
      {
        "id": "1329"
      },
      {
        "id": "1329"
      },
      {
        "id": "5005"
      },
    ]
  },
  "202": {
    "id": "202",
    "name": "From the Pits",
    "commander": {
        "id": "220"
    },
    "deck": [
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "1616"
      },
      {
        "id": "1614"
      },
      {
        "id": "1625"
      },
      {
        "id": "1625"
      },
      {
        "id": "1626"
      },
      {
        "id": "1626"
      },
      {
        "id": "1626"
      },
      {
        "id": "1628"
      },
    ]
  },
  "203": {
    "id": "203",
    "name": "A Strange Man",
    "commander": {
        "id": "220"
    },
    "deck": [
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "1327"
      },
      {
        "id": "1629"
      },
      {
        "id": "1628"
      },
      {
        "id": "1628"
      },
      {
        "id": "1626"
      },
      {
        "id": "1330"
      },
    ]
  },
  "204": {
    "id": "204",
    "name": "Malchior, Grand Excavator",
    "commander": {
        "id": "213"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "1012"
      },
      {
        "id": "1617"
      },
      {
        "id": "1619"
      },
      {
        "id": "1619"
      },
      {
        "id": "1029"
      },
      {
        "id": "1029"
      },
      {
        "id": "1629"
      },
      {
        "id": "1629"
      },
      {
        "id": "1629"
      },
    ]
  },
  "21": {
    "id": "21",
    "name": "Armored Up!",
    "commander": {
        "id": "217"
    },
    "deck": [
      {
        "id": "1001"
      },
      {
        "id": "1001"
      },
      {
        "id": "1000"
      },
      {
        "id": "1000"
      },
      {
        "id": "1001",
        "level": "2",
        "mastery_level": "2"
      },
      {
        "id": "1601",
        "mastery_level": "2"
      },
      {
        "id": "1006",
        "mastery_level": "3"
      },
      {
        "id": "1615",
        "mastery_level": "3"
      },
      {
        "id": "1014",
        "mastery_level": "3"
      },
      {
        "id": "1011",
        "mastery_level": "3"
      },
    ]
  },
  "211": {
    "id": "211",
    "name": "Misunderstanding",
    "commander": {
        "id": "220",
        "level": "2"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "1312"
      },
      {
        "id": "1030"
      },
      {
        "id": "1030"
      },
      {
        "id": "1327"
      },
      {
        "id": "1327"
      },
      {
        "id": "1329",
        "level": "4"
      },
      {
        "id": "1027"
      },
      {
        "id": "1628"
      },
      {
        "id": "1628"
      },
    ]
  },
  "212": {
    "id": "212",
    "name": "Few Crystals Short of a Load",
    "commander": {
        "id": "220",
        "level": "2"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1315"
      },
      {
        "id": "1326"
      },
      {
        "id": "1326"
      },
      {
        "id": "1629"
      },
      {
        "id": "1625"
      },
      {
        "id": "1626"
      },
      {
        "id": "1626"
      },
      {
        "id": "1629"
      },
      {
        "id": "1629"
      },
    ]
  },
  "213": {
    "id": "213",
    "name": "Rumble Tumble",
    "commander": {
        "id": "220"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1010"
      },
      {
        "id": "1326"
      },
      {
        "id": "1326"
      },
      {
        "id": "1629"
      },
      {
        "id": "1625"
      },
      {
        "id": "1626"
      },
      {
        "id": "1628"
      },
      {
        "id": "6005"
      },
      {
        "id": "6005"
      },
    ]
  },
  "214": {
    "id": "214",
    "name": "Source of the Tremors",
    "commander": {
        "id": "214"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1619"
      },
      {
        "id": "1326"
      },
      {
        "id": "1026"
      },
      {
        "id": "1330"
      },
      {
        "id": "1629"
      },
      {
        "id": "1629"
      },
      {
        "id": "1027"
      },
      {
        "id": "6004"
      },
      {
        "id": "1040"
      },
    ]
  },
  "22": {
    "id": "22",
    "name": "The Buried Cache",
    "commander": {
        "id": "217"
    },
    "deck": [
      {
        "id": "1001"
      },
      {
        "id": "1001",
        "level": "2"
      },
      {
        "id": "1001",
        "level": "2"
      },
      {
        "id": "1000"
      },
      {
        "id": "1600",
        "level": "3",
        "mastery_level": "2"
      },
      {
        "id": "1001",
        "level": "2",
        "mastery_level": "2"
      },
      {
        "id": "1006",
        "mastery_level": "3"
      },
      {
        "id": "1014",
        "mastery_level": "3"
      },
      {
        "id": "1619",
        "mastery_level": "3"
      },
      {
        "id": "1011",
        "mastery_level": "3"
      },
    ]
  },
  "221": {
    "id": "221",
    "name": "Gibberish",
    "commander": {
        "id": "210",
        "level": "2"
    },
    "deck": [
      {
        "id": "1318"
      },
      {
        "id": "1613"
      },
      {
        "id": "1030"
      },
      {
        "id": "1326"
      },
      {
        "id": "1326"
      },
      {
        "id": "1629"
      },
      {
        "id": "1629"
      },
      {
        "id": "7004"
      },
      {
        "id": "6004"
      },
      {
        "id": "6004"
      },
    ]
  },
  "222": {
    "id": "222",
    "name": "Corrupted Lands",
    "commander": {
        "id": "210",
        "level": "2"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1615"
      },
      {
        "id": "1028"
      },
      {
        "id": "1028"
      },
      {
        "id": "1328"
      },
      {
        "id": "1326"
      },
      {
        "id": "1628"
      },
      {
        "id": "6005"
      },
      {
        "id": "7004"
      },
      {
        "id": "7004"
      },
    ]
  },
  "223": {
    "id": "223",
    "name": "Bo Turvar Axis",
    "commander": {
        "id": "210",
        "level": "3"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1326"
      },
      {
        "id": "1326"
      },
      {
        "id": "1626"
      },
      {
        "id": "1626"
      },
      {
        "id": "1629"
      },
      {
        "id": "6004"
      },
      {
        "id": "5005"
      },
      {
        "id": "5005"
      },
    ]
  },
  "224": {
    "id": "224",
    "name": "Press On",
    "commander": {
        "id": "210",
        "level": "3"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1327"
      },
      {
        "id": "1326"
      },
      {
        "id": "1326"
      },
      {
        "id": "1026"
      },
      {
        "id": "1330"
      },
      {
        "id": "5004"
      },
      {
        "id": "1328"
      },
      {
        "id": "6003"
      },
    ]
  },
  "23": {
    "id": "23",
    "name": "Scourge",
    "commander": {
        "id": "200"
    },
    "deck": [
      {
        "id": "1300"
      },
      {
        "id": "1300"
      },
      {
        "id": "1300",
        "level": "2"
      },
      {
        "id": "1300",
        "level": "2"
      },
      {
        "id": "1300",
        "level": "2",
        "mastery_level": "2"
      },
      {
        "id": "1302",
        "mastery_level": "2"
      },
      {
        "id": "1302",
        "mastery_level": "2"
      },
      {
        "id": "1303",
        "mastery_level": "3"
      },
      {
        "id": "1305",
        "mastery_level": "3"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
    ]
  },
  "231": {
    "id": "231",
    "name": "Aether Raid",
    "commander": {
        "id": "221"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1019"
      },
      {
        "id": "1026"
      },
      {
        "id": "1026"
      },
      {
        "id": "1027"
      },
      {
        "id": "1028"
      },
      {
        "id": "1028"
      },
      {
        "id": "1030"
      },
      {
        "id": "1030"
      },
      {
        "id": "1041"
      },
    ]
  },
  "232": {
    "id": "232",
    "name": "Falling Feathers",
    "commander": {
        "id": "221"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "1011"
      },
      {
        "id": "1026"
      },
      {
        "id": "1027"
      },
      {
        "id": "1027"
      },
      {
        "id": "1027"
      },
      {
        "id": "1027"
      },
      {
        "id": "1028"
      },
      {
        "id": "1030"
      },
      {
        "id": "5003"
      },
    ]
  },
  "233": {
    "id": "233",
    "name": "Yuriel's Ambush",
    "commander": {
        "id": "2",
        "level": "3"
    },
    "deck": [
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1025"
      },
      {
        "id": "1025"
      },
      {
        "id": "1025"
      },
      {
        "id": "1028"
      },
      {
        "id": "1030"
      },
      {
        "id": "1025"
      },
      {
        "id": "1025"
      },
      {
        "id": "5003"
      },
    ]
  },
  "234": {
    "id": "234",
    "name": "Yuriel's Honor",
    "commander": {
        "id": "2",
        "level": "3"
    },
    "deck": [
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "1030"
      },
      {
        "id": "1025"
      },
      {
        "id": "1025"
      },
      {
        "id": "1025"
      },
      {
        "id": "1027"
      },
      {
        "id": "5001"
      },
      {
        "id": "5000"
      },
    ]
  },
  "24": {
    "id": "24",
    "name": "Savior",
    "commander": {
        "id": "200"
    },
    "deck": [
      {
        "id": "1300"
      },
      {
        "id": "1300"
      },
      {
        "id": "1300",
        "level": "2"
      },
      {
        "id": "1300",
        "level": "2"
      },
      {
        "id": "1302"
      },
      {
        "id": "1300",
        "level": "2",
        "mastery_level": "2"
      },
      {
        "id": "1302",
        "mastery_level": "2"
      },
      {
        "id": "1303",
        "mastery_level": "3"
      },
      {
        "id": "1305",
        "mastery_level": "3"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
    ]
  },
  "241": {
    "id": "241",
    "name": "Mystic's Disgrace",
    "commander": {
        "id": "3",
        "level": "2"
    },
    "deck": [
      {
        "id": "1011"
      },
      {
        "id": "1017"
      },
      {
        "id": "1025"
      },
      {
        "id": "1025"
      },
      {
        "id": "1025"
      },
      {
        "id": "1025"
      },
      {
        "id": "1027"
      },
      {
        "id": "1027"
      },
      {
        "id": "1040"
      },
      {
        "id": "1041"
      },
    ]
  },
  "242": {
    "id": "242",
    "name": "Samael's Deceit",
    "commander": {
        "id": "3",
        "level": "4"
    },
    "deck": [
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1025"
      },
      {
        "id": "1027"
      },
      {
        "id": "1027"
      },
      {
        "id": "1027"
      },
      {
        "id": "1028"
      },
      {
        "id": "1040"
      },
      {
        "id": "1041"
      },
    ]
  },
  "243": {
    "id": "243",
    "name": "Samael's Wrath",
    "commander": {
        "id": "3",
        "level": "6"
    },
    "deck": [
      {
        "id": "1011"
      },
      {
        "id": "1019"
      },
      {
        "id": "1025"
      },
      {
        "id": "1026"
      },
      {
        "id": "1026"
      },
      {
        "id": "1030"
      },
      {
        "id": "5004"
      },
      {
        "id": "5004"
      },
      {
        "id": "1040"
      },
      {
        "id": "1041"
      },
    ]
  },
  "244": {
    "id": "244",
    "name": "The Void",
    "commander": {
        "id": "215"
    },
    "deck": [
      {
        "id": "1315",
        "level": "2"
      },
      {
        "id": "1012",
        "level": "2"
      },
      {
        "id": "5005"
      },
      {
        "id": "1628"
      },
      {
        "id": "1629"
      },
      {
        "id": "1327"
      },
      {
        "id": "1327"
      },
      {
        "id": "1040"
      },
      {
        "id": "1340"
      },
      {
        "id": "6001"
      },
    ]
  },
  "251": {
    "id": "251",
    "name": "Call From the Emperor ",
    "commander": {
        "id": "280"
    },
    "deck": [
      {
        "id": "1616"
      },
      {
        "id": "6006"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "7038"
      },
      {
        "id": "6029"
      },
      {
        "id": "7034"
      },
      {
        "id": "1629"
      },
      {
        "id": "6021"
      },
      {
        "id": "1631"
      },
      {
        "id": "7034",
        "mastery_level": "4"
      },
      {
        "id": "7031",
        "mastery_level": "6"
      },
      {
        "id": "2015",
        "mastery_level": "7"
      },
    ]
  },
  "252": {
    "id": "252",
    "name": "To the Swamps",
    "commander": {
        "id": "281"
    },
    "deck": [
      {
        "id": "7006"
      },
      {
        "id": "1613"
      },
      {
        "id": "1619"
      },
      {
        "id": "1015"
      },
      {
        "id": "5030"
      },
      {
        "id": "2002"
      },
      {
        "id": "7015"
      },
      {
        "id": "1328"
      },
      {
        "id": "2011"
      },
      {
        "id": "7011"
      },
      {
        "id": "7024",
        "mastery_level": "4"
      },
      {
        "id": "7009",
        "mastery_level": "6"
      },
      {
        "id": "7027",
        "mastery_level": "7"
      },
    ]
  },
  "253": {
    "id": "253",
    "name": "Thick Goop",
    "commander": {
        "id": "247"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "6004"
      },
      {
        "id": "2008"
      },
      {
        "id": "7016"
      },
      {
        "id": "7020"
      },
      {
        "id": "6020"
      },
      {
        "id": "7016"
      },
      {
        "id": "7029",
        "mastery_level": "4"
      },
      {
        "id": "5001",
        "mastery_level": "6"
      },
      {
        "id": "1643",
        "mastery_level": "7"
      },
    ]
  },
  "254": {
    "id": "254",
    "name": "Royal Company",
    "commander": {
        "id": "282"
    },
    "deck": [
      {
        "id": "7012"
      },
      {
        "id": "7017"
      },
      {
        "id": "6006"
      },
      {
        "id": "6029"
      },
      {
        "id": "7020"
      },
      {
        "id": "7020"
      },
      {
        "id": "2004"
      },
      {
        "id": "2019"
      },
      {
        "id": "1330"
      },
      {
        "id": "5011"
      },
      {
        "id": "7039",
        "mastery_level": "4"
      },
      {
        "id": "6002",
        "mastery_level": "6"
      },
      {
        "id": "7000",
        "mastery_level": "7"
      },
    ]
  },
  "261": {
    "id": "261",
    "name": "Cloudy Waters",
    "commander": {
        "id": "280"
    },
    "deck": [
      {
        "id": "1618"
      },
      {
        "id": "1617"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "6010"
      },
      {
        "id": "5035"
      },
      {
        "id": "5035"
      },
      {
        "id": "5033"
      },
      {
        "id": "7021"
      },
      {
        "id": "1632"
      },
      {
        "id": "6029",
        "mastery_level": "4"
      },
      {
        "id": "6035",
        "mastery_level": "6"
      },
      {
        "id": "7033",
        "mastery_level": "7"
      },
    ]
  },
  "262": {
    "id": "262",
    "name": "Fog of War",
    "commander": {
        "id": "281"
    },
    "deck": [
      {
        "id": "6017"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1619"
      },
      {
        "id": "7015"
      },
      {
        "id": "2021"
      },
      {
        "id": "1630"
      },
      {
        "id": "7038"
      },
      {
        "id": "7020"
      },
      {
        "id": "7035"
      },
      {
        "id": "7035",
        "mastery_level": "4"
      },
      {
        "id": "7013",
        "mastery_level": "6"
      },
      {
        "id": "6024",
        "mastery_level": "7"
      },
    ]
  },
  "263": {
    "id": "263",
    "name": "Marks of the Void",
    "commander": {
        "id": "283"
    },
    "deck": [
      {
        "id": "6017"
      },
      {
        "id": "1011"
      },
      {
        "id": "1018"
      },
      {
        "id": "2004"
      },
      {
        "id": "5025"
      },
      {
        "id": "5010"
      },
      {
        "id": "6010"
      },
      {
        "id": "1629"
      },
      {
        "id": "2030"
      },
      {
        "id": "1030"
      },
      {
        "id": "1342",
        "mastery_level": "4"
      },
      {
        "id": "5023",
        "mastery_level": "6"
      },
      {
        "id": "6037",
        "mastery_level": "7"
      },
    ]
  },
  "264": {
    "id": "264",
    "name": "Bad Fur Day",
    "commander": {
        "id": "284"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "6034"
      },
      {
        "id": "6034"
      },
      {
        "id": "7011"
      },
      {
        "id": "7034"
      },
      {
        "id": "1628"
      },
      {
        "id": "6038"
      },
      {
        "id": "6015"
      },
      {
        "id": "2015",
        "mastery_level": "4"
      },
      {
        "id": "6019",
        "mastery_level": "6"
      },
      {
        "id": "7019",
        "mastery_level": "7"
      },
    ]
  },
  "271": {
    "id": "271",
    "name": "Rough Roads",
    "commander": {
        "id": "247"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "1615"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "2012"
      },
      {
        "id": "1331"
      },
      {
        "id": "6011"
      },
      {
        "id": "1325"
      },
      {
        "id": "1331"
      },
      {
        "id": "2012"
      },
      {
        "id": "2014",
        "mastery_level": "4"
      },
      {
        "id": "6000",
        "mastery_level": "6"
      },
      {
        "id": "6028",
        "mastery_level": "7"
      },
    ]
  },
  "272": {
    "id": "272",
    "name": "Rabid Wylds",
    "commander": {
        "id": "282"
    },
    "deck": [
      {
        "id": "7007"
      },
      {
        "id": "1613"
      },
      {
        "id": "1615"
      },
      {
        "id": "1028"
      },
      {
        "id": "5015"
      },
      {
        "id": "6015"
      },
      {
        "id": "5020"
      },
      {
        "id": "5020"
      },
      {
        "id": "7010"
      },
      {
        "id": "5015"
      },
      {
        "id": "7028",
        "mastery_level": "4"
      },
      {
        "id": "5001",
        "mastery_level": "6"
      },
      {
        "id": "6026",
        "mastery_level": "7"
      },
    ]
  },
  "273": {
    "id": "273",
    "name": "Seeping Toxins",
    "commander": {
        "id": "283"
    },
    "deck": [
      {
        "id": "7022"
      },
      {
        "id": "7022"
      },
      {
        "id": "1618"
      },
      {
        "id": "7016"
      },
      {
        "id": "2014"
      },
      {
        "id": "1027"
      },
      {
        "id": "2011"
      },
      {
        "id": "1028"
      },
      {
        "id": "1627"
      },
      {
        "id": "2012"
      },
      {
        "id": "7033",
        "mastery_level": "4"
      },
      {
        "id": "6018",
        "mastery_level": "6"
      },
      {
        "id": "5009",
        "mastery_level": "7"
      },
    ]
  },
  "274": {
    "id": "274",
    "name": "Plod On",
    "commander": {
        "id": "284"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "7006"
      },
      {
        "id": "2024"
      },
      {
        "id": "2023"
      },
      {
        "id": "2019"
      },
      {
        "id": "1330"
      },
      {
        "id": "5033"
      },
      {
        "id": "6029"
      },
      {
        "id": "6029"
      },
      {
        "id": "2019"
      },
      {
        "id": "6039",
        "mastery_level": "4"
      },
      {
        "id": "7033",
        "mastery_level": "6"
      },
      {
        "id": "7037",
        "mastery_level": "7"
      },
    ]
  },
  "281": {
    "id": "281",
    "name": "Unfamiliar Footsteps",
    "commander": {
        "id": "280"
    },
    "deck": [
      {
        "id": "7006"
      },
      {
        "id": "1613"
      },
      {
        "id": "1617"
      },
      {
        "id": "1027"
      },
      {
        "id": "1027"
      },
      {
        "id": "6015"
      },
      {
        "id": "7021"
      },
      {
        "id": "1632"
      },
      {
        "id": "1325"
      },
      {
        "id": "7021"
      },
      {
        "id": "5002",
        "mastery_level": "4"
      },
      {
        "id": "5013",
        "mastery_level": "6"
      },
      {
        "id": "6013",
        "mastery_level": "7"
      },
    ]
  },
  "282": {
    "id": "282",
    "name": "A Step in the Right Direction",
    "commander": {
        "id": "281"
    },
    "deck": [
      {
        "id": "6006"
      },
      {
        "id": "1313"
      },
      {
        "id": "1613"
      },
      {
        "id": "1631"
      },
      {
        "id": "1629"
      },
      {
        "id": "1026"
      },
      {
        "id": "6015"
      },
      {
        "id": "6015"
      },
      {
        "id": "1026"
      },
      {
        "id": "7021"
      },
      {
        "id": "6037",
        "mastery_level": "4"
      },
      {
        "id": "6014",
        "mastery_level": "6"
      },
      {
        "id": "7009",
        "mastery_level": "7"
      },
    ]
  },
  "283": {
    "id": "283",
    "name": "Glowing Prints",
    "commander": {
        "id": "247"
    },
    "deck": [
      {
        "id": "1615"
      },
      {
        "id": "6007"
      },
      {
        "id": "6004"
      },
      {
        "id": "2002"
      },
      {
        "id": "6011"
      },
      {
        "id": "6011"
      },
      {
        "id": "6011"
      },
      {
        "id": "7015"
      },
      {
        "id": "5015"
      },
      {
        "id": "2025"
      },
      {
        "id": "5038",
        "mastery_level": "4"
      },
      {
        "id": "5019",
        "mastery_level": "6"
      },
      {
        "id": "7000",
        "mastery_level": "7"
      },
    ]
  },
  "284": {
    "id": "284",
    "name": "Big Step, Small Step",
    "commander": {
        "id": "284"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1613"
      },
      {
        "id": "2020"
      },
      {
        "id": "2025"
      },
      {
        "id": "7034"
      },
      {
        "id": "2025"
      },
      {
        "id": "5021"
      },
      {
        "id": "2025"
      },
      {
        "id": "1332"
      },
      {
        "id": "2027"
      },
      {
        "id": "7019",
        "mastery_level": "4"
      },
      {
        "id": "5037",
        "mastery_level": "6"
      },
      {
        "id": "5031",
        "mastery_level": "7"
      },
    ]
  },
  "291": {
    "id": "291",
    "name": "A Broken Home",
    "commander": {
        "id": "280"
    },
    "deck": [
      {
        "id": "6022"
      },
      {
        "id": "1318"
      },
      {
        "id": "5017"
      },
      {
        "id": "1325"
      },
      {
        "id": "1630"
      },
      {
        "id": "5020"
      },
      {
        "id": "5020"
      },
      {
        "id": "1031"
      },
      {
        "id": "1330"
      },
      {
        "id": "2023"
      },
      {
        "id": "1341",
        "mastery_level": "4"
      },
      {
        "id": "6009",
        "mastery_level": "6"
      },
      {
        "id": "1640",
        "mastery_level": "7"
      },
    ]
  },
  "292": {
    "id": "292",
    "name": "Filthy Pests",
    "commander": {
        "id": "281"
    },
    "deck": [
      {
        "id": "1015"
      },
      {
        "id": "5012"
      },
      {
        "id": "1026"
      },
      {
        "id": "5025"
      },
      {
        "id": "1631"
      },
      {
        "id": "5021"
      },
      {
        "id": "5024"
      },
      {
        "id": "2004"
      },
      {
        "id": "6029"
      },
      {
        "id": "1631"
      },
      {
        "id": "7002",
        "mastery_level": "4"
      },
      {
        "id": "7008",
        "mastery_level": "6"
      },
      {
        "id": "1040",
        "mastery_level": "7"
      },
    ]
  },
  "293": {
    "id": "293",
    "name": "Beyond the Bush",
    "commander": {
        "id": "282"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1312"
      },
      {
        "id": "1332"
      },
      {
        "id": "5033"
      },
      {
        "id": "2020"
      },
      {
        "id": "6016"
      },
      {
        "id": "1632"
      },
      {
        "id": "2021"
      },
      {
        "id": "5025"
      },
      {
        "id": "1632"
      },
      {
        "id": "6033",
        "mastery_level": "4"
      },
      {
        "id": "7033",
        "mastery_level": "6"
      },
      {
        "id": "2026",
        "mastery_level": "7"
      },
    ]
  },
  "294": {
    "id": "294",
    "name": "Don't Wake the Babies",
    "commander": {
        "id": "285"
    },
    "deck": [
      {
        "id": "1616"
      },
      {
        "id": "1032"
      },
      {
        "id": "2010"
      },
      {
        "id": "2025"
      },
      {
        "id": "5016"
      },
      {
        "id": "1029"
      },
      {
        "id": "5016"
      },
      {
        "id": "7021"
      },
      {
        "id": "5033"
      },
      {
        "id": "5016"
      },
      {
        "id": "6023",
        "mastery_level": "4"
      },
      {
        "id": "5027",
        "mastery_level": "6"
      },
      {
        "id": "2007",
        "mastery_level": "7"
      },
    ]
  },
  "301": {
    "id": "301",
    "name": "Cries of the Young",
    "commander": {
        "id": "247"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "1615"
      },
      {
        "id": "6025"
      },
      {
        "id": "2005"
      },
      {
        "id": "2005"
      },
      {
        "id": "7024"
      },
      {
        "id": "6025"
      },
      {
        "id": "2004"
      },
      {
        "id": "1025"
      },
      {
        "id": "6025"
      },
      {
        "id": "6026",
        "mastery_level": "4"
      },
      {
        "id": "6023",
        "mastery_level": "6"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
    ]
  },
  "302": {
    "id": "302",
    "name": "What Hunger Brings",
    "commander": {
        "id": "283"
    },
    "deck": [
      {
        "id": "1614"
      },
      {
        "id": "2019"
      },
      {
        "id": "7004"
      },
      {
        "id": "1631"
      },
      {
        "id": "7004"
      },
      {
        "id": "1027"
      },
      {
        "id": "1027"
      },
      {
        "id": "7005"
      },
      {
        "id": "5024"
      },
      {
        "id": "2027"
      },
      {
        "id": "5023",
        "mastery_level": "4"
      },
      {
        "id": "1641",
        "mastery_level": "6"
      },
      {
        "id": "7014",
        "mastery_level": "7"
      },
    ]
  },
  "303": {
    "id": "303",
    "name": "Last Leg",
    "commander": {
        "id": "285"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "2012"
      },
      {
        "id": "1331"
      },
      {
        "id": "2012"
      },
      {
        "id": "1328"
      },
      {
        "id": "1331"
      },
      {
        "id": "2004"
      },
      {
        "id": "2012"
      },
      {
        "id": "6035"
      },
      {
        "id": "6028",
        "mastery_level": "4"
      },
      {
        "id": "1043",
        "mastery_level": "6"
      },
      {
        "id": "6027",
        "mastery_level": "7"
      },
    ]
  },
  "304": {
    "id": "304",
    "name": "Corrupter's Wrath",
    "commander": {
        "id": "286"
    },
    "deck": [
      {
        "id": "6022"
      },
      {
        "id": "6036"
      },
      {
        "id": "6034"
      },
      {
        "id": "6036"
      },
      {
        "id": "2023"
      },
      {
        "id": "2023"
      },
      {
        "id": "2024"
      },
      {
        "id": "2012"
      },
      {
        "id": "6009"
      },
      {
        "id": "6039"
      },
      {
        "id": "7033",
        "mastery_level": "4"
      },
      {
        "id": "6033",
        "mastery_level": "6"
      },
      {
        "id": "6035",
        "mastery_level": "7"
      },
    ]
  },
  "31": {
    "id": "31",
    "name": "Protecting the Tools",
    "commander": {
        "id": "200"
    },
    "deck": [
      {
        "id": "1300"
      },
      {
        "id": "1300"
      },
      {
        "id": "1301"
      },
      {
        "id": "1301"
      },
      {
        "id": "1301"
      },
      {
        "id": "1302",
        "mastery_level": "2"
      },
      {
        "id": "1303",
        "mastery_level": "2"
      },
      {
        "id": "1305",
        "mastery_level": "2"
      },
      {
        "id": "1314",
        "mastery_level": "3"
      },
      {
        "id": "1314",
        "mastery_level": "3"
      },
    ]
  },
  "311": {
    "id": "311",
    "name": "From the Muck",
    "commander": {
        "id": "298"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "2019"
      },
      {
        "id": "7020"
      },
      {
        "id": "7034"
      },
      {
        "id": "7016"
      },
      {
        "id": "6011"
      },
      {
        "id": "6042"
      },
      {
        "id": "5050",
        "mastery_level": "4"
      },
      {
        "id": "5019",
        "mastery_level": "6"
      },
      {
        "id": "7043",
        "mastery_level": "7"
      },
    ]
  },
  "312": {
    "id": "312",
    "name": "Lingering Trails",
    "commander": {
        "id": "299"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1311"
      },
      {
        "id": "2025"
      },
      {
        "id": "2027"
      },
      {
        "id": "6004"
      },
      {
        "id": "1328"
      },
      {
        "id": "5010"
      },
      {
        "id": "2030"
      },
      {
        "id": "1630",
        "mastery_level": "4"
      },
      {
        "id": "5031",
        "mastery_level": "6"
      },
      {
        "id": "5029",
        "mastery_level": "7"
      },
    ]
  },
  "313": {
    "id": "313",
    "name": "Thorough Exam",
    "commander": {
        "id": "300"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "2032"
      },
      {
        "id": "6021"
      },
      {
        "id": "6016"
      },
      {
        "id": "7047"
      },
      {
        "id": "2031"
      },
      {
        "id": "7038"
      },
      {
        "id": "1331",
        "mastery_level": "4"
      },
      {
        "id": "6028",
        "mastery_level": "6"
      },
      {
        "id": "5049",
        "mastery_level": "7"
      },
    ]
  },
  "314": {
    "id": "314",
    "name": "Long Way from Home",
    "commander": {
        "id": "298"
    },
    "deck": [
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "1318"
      },
      {
        "id": "5035"
      },
      {
        "id": "6044"
      },
      {
        "id": "7005"
      },
      {
        "id": "7045"
      },
      {
        "id": "6010"
      },
      {
        "id": "7015"
      },
      {
        "id": "2002"
      },
      {
        "id": "6026",
        "mastery_level": "4"
      },
      {
        "id": "7009",
        "mastery_level": "6"
      },
      {
        "id": "5042",
        "mastery_level": "7"
      },
    ]
  },
  "32": {
    "id": "32",
    "name": "Collateral Damage",
    "commander": {
        "id": "200"
    },
    "deck": [
      {
        "id": "1300"
      },
      {
        "id": "1300",
        "level": "2"
      },
      {
        "id": "1300",
        "level": "2"
      },
      {
        "id": "1301"
      },
      {
        "id": "1301"
      },
      {
        "id": "1302",
        "mastery_level": "2"
      },
      {
        "id": "1303",
        "mastery_level": "2"
      },
      {
        "id": "1305",
        "mastery_level": "2"
      },
      {
        "id": "1319",
        "mastery_level": "3"
      },
      {
        "id": "1319",
        "mastery_level": "3"
      },
    ]
  },
  "321": {
    "id": "321",
    "name": "It Takes Two",
    "commander": {
        "id": "299"
    },
    "deck": [
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1012"
      },
      {
        "id": "1615"
      },
      {
        "id": "2009"
      },
      {
        "id": "6046"
      },
      {
        "id": "2019"
      },
      {
        "id": "7035"
      },
      {
        "id": "7015"
      },
      {
        "id": "1630"
      },
      {
        "id": "7004",
        "mastery_level": "5"
      },
      {
        "id": "5001",
        "mastery_level": "6"
      },
      {
        "id": "7013",
        "mastery_level": "7"
      },
    ]
  },
  "322": {
    "id": "322",
    "name": "Precautionary Measures",
    "commander": {
        "id": "298"
    },
    "deck": [
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "6006"
      },
      {
        "id": "2003"
      },
      {
        "id": "5024"
      },
      {
        "id": "1325"
      },
      {
        "id": "2023"
      },
      {
        "id": "5025"
      },
      {
        "id": "5004"
      },
      {
        "id": "5010"
      },
      {
        "id": "5023",
        "mastery_level": "4"
      },
      {
        "id": "6043",
        "mastery_level": "6"
      },
      {
        "id": "7008",
        "mastery_level": "7"
      },
    ]
  },
  "323": {
    "id": "323",
    "name": "Leap of Faith",
    "commander": {
        "id": "300"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "5033"
      },
      {
        "id": "1331"
      },
      {
        "id": "1331"
      },
      {
        "id": "1632"
      },
      {
        "id": "2000"
      },
      {
        "id": "1330"
      },
      {
        "id": "1325"
      },
      {
        "id": "6009",
        "mastery_level": "4"
      },
      {
        "id": "5037",
        "mastery_level": "6"
      },
      {
        "id": "6035",
        "mastery_level": "7"
      },
    ]
  },
  "324": {
    "id": "324",
    "name": "Beach View",
    "commander": {
        "id": "301"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1028"
      },
      {
        "id": "7011"
      },
      {
        "id": "1627"
      },
      {
        "id": "5030"
      },
      {
        "id": "5005"
      },
      {
        "id": "1027"
      },
      {
        "id": "1327"
      },
      {
        "id": "5034",
        "mastery_level": "4"
      },
      {
        "id": "6019",
        "mastery_level": "6"
      },
      {
        "id": "6033",
        "mastery_level": "7"
      },
    ]
  },
  "33": {
    "id": "33",
    "name": "Shattering",
    "commander": {
        "id": "223"
    },
    "deck": [
      {
        "id": "1000"
      },
      {
        "id": "1300",
        "level": "2"
      },
      {
        "id": "1001"
      },
      {
        "id": "1301"
      },
      {
        "id": "1301"
      },
      {
        "id": "1003",
        "mastery_level": "2"
      },
      {
        "id": "1004",
        "mastery_level": "2"
      },
      {
        "id": "1305",
        "mastery_level": "2"
      },
      {
        "id": "1313",
        "mastery_level": "3"
      },
      {
        "id": "1313",
        "mastery_level": "3"
      },
    ]
  },
  "331": {
    "id": "331",
    "name": "Rocky Road",
    "commander": {
        "id": "299"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "1313"
      },
      {
        "id": "6029"
      },
      {
        "id": "2024"
      },
      {
        "id": "1330"
      },
      {
        "id": "6029"
      },
      {
        "id": "1331"
      },
      {
        "id": "1025"
      },
      {
        "id": "2005"
      },
      {
        "id": "2020"
      },
      {
        "id": "2028",
        "mastery_level": "4"
      },
      {
        "id": "5043",
        "mastery_level": "6"
      },
      {
        "id": "7036",
        "mastery_level": "7"
      },
    ]
  },
  "332": {
    "id": "332",
    "name": "The Hidden Citadel ",
    "commander": {
        "id": "298"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1615"
      },
      {
        "id": "1030"
      },
      {
        "id": "7034"
      },
      {
        "id": "2031"
      },
      {
        "id": "1625"
      },
      {
        "id": "5035"
      },
      {
        "id": "5015"
      },
      {
        "id": "1028"
      },
      {
        "id": "1642",
        "mastery_level": "4"
      },
      {
        "id": "7002",
        "mastery_level": "6"
      },
      {
        "id": "5002",
        "mastery_level": "7"
      },
    ]
  },
  "333": {
    "id": "333",
    "name": "Locked Away",
    "commander": {
        "id": "300"
    },
    "deck": [
      {
        "id": "1015"
      },
      {
        "id": "1017"
      },
      {
        "id": "1328"
      },
      {
        "id": "1328"
      },
      {
        "id": "1627"
      },
      {
        "id": "5005"
      },
      {
        "id": "1026"
      },
      {
        "id": "7029"
      },
      {
        "id": "5020"
      },
      {
        "id": "1630"
      },
      {
        "id": "7032",
        "mastery_level": "4"
      },
      {
        "id": "6014",
        "mastery_level": "6"
      },
      {
        "id": "1043",
        "mastery_level": "7"
      },
    ]
  },
  "334": {
    "id": "334",
    "name": "Pop and Unlock",
    "commander": {
        "id": "301"
    },
    "deck": [
      {
        "id": "1019"
      },
      {
        "id": "7007"
      },
      {
        "id": "7021"
      },
      {
        "id": "7045"
      },
      {
        "id": "5044"
      },
      {
        "id": "5021"
      },
      {
        "id": "6015"
      },
      {
        "id": "7005"
      },
      {
        "id": "5028"
      },
      {
        "id": "5030"
      },
      {
        "id": "6047",
        "mastery_level": "4"
      },
      {
        "id": "6039",
        "mastery_level": "6"
      },
      {
        "id": "5045",
        "mastery_level": "7"
      },
    ]
  },
  "34": {
    "id": "34",
    "name": "Missing Cache?!",
    "commander": {
        "id": "223"
    },
    "deck": [
      {
        "id": "1000"
      },
      {
        "id": "1000",
        "level": "2"
      },
      {
        "id": "1301"
      },
      {
        "id": "1001"
      },
      {
        "id": "1302"
      },
      {
        "id": "1302",
        "mastery_level": "2"
      },
      {
        "id": "1303",
        "mastery_level": "2"
      },
      {
        "id": "1005",
        "mastery_level": "2"
      },
      {
        "id": "1015",
        "mastery_level": "3"
      },
      {
        "id": "1015",
        "mastery_level": "3"
      },
    ]
  },
  "341": {
    "id": "341",
    "name": "Sleeping on the Job",
    "commander": {
        "id": "299"
    },
    "deck": [
      {
        "id": "1617"
      },
      {
        "id": "7012"
      },
      {
        "id": "1014"
      },
      {
        "id": "7024"
      },
      {
        "id": "2001"
      },
      {
        "id": "5016"
      },
      {
        "id": "2019"
      },
      {
        "id": "6016"
      },
      {
        "id": "5011"
      },
      {
        "id": "1030"
      },
      {
        "id": "6032",
        "mastery_level": "4"
      },
      {
        "id": "6041",
        "mastery_level": "6"
      },
      {
        "id": "5042",
        "mastery_level": "7"
      },
    ]
  },
  "342": {
    "id": "342",
    "name": "Up and At'Em",
    "commander": {
        "id": "302"
    },
    "deck": [
      {
        "id": "1314"
      },
      {
        "id": "1313"
      },
      {
        "id": "7038"
      },
      {
        "id": "7047"
      },
      {
        "id": "2014"
      },
      {
        "id": "2011"
      },
      {
        "id": "1627"
      },
      {
        "id": "1328"
      },
      {
        "id": "7034"
      },
      {
        "id": "7011"
      },
      {
        "id": "7042",
        "mastery_level": "4"
      },
      {
        "id": "7039",
        "mastery_level": "6"
      },
      {
        "id": "7001",
        "mastery_level": "7"
      },
    ]
  },
  "343": {
    "id": "343",
    "name": "Sign of a Friend",
    "commander": {
        "id": "298"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "1019"
      },
      {
        "id": "6034"
      },
      {
        "id": "7041"
      },
      {
        "id": "1327"
      },
      {
        "id": "2030"
      },
      {
        "id": "1629"
      },
      {
        "id": "2005"
      },
      {
        "id": "5028"
      },
      {
        "id": "2023"
      },
      {
        "id": "7023",
        "mastery_level": "4"
      },
      {
        "id": "7046",
        "mastery_level": "6"
      },
      {
        "id": "7037",
        "mastery_level": "7"
      },
    ]
  },
  "344": {
    "id": "344",
    "name": "Hidden Treasures ",
    "commander": {
        "id": "301"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "2027"
      },
      {
        "id": "2027"
      },
      {
        "id": "2025"
      },
      {
        "id": "6042"
      },
      {
        "id": "5040"
      },
      {
        "id": "1028"
      },
      {
        "id": "5015"
      },
      {
        "id": "7005"
      },
      {
        "id": "7041"
      },
      {
        "id": "5001",
        "mastery_level": "4"
      },
      {
        "id": "5031",
        "mastery_level": "6"
      },
      {
        "id": "5032",
        "mastery_level": "7"
      },
    ]
  },
  "351": {
    "id": "351",
    "name": "Hesitations of the Holy",
    "commander": {
        "id": "301"
    },
    "deck": [
      {
        "id": "1312"
      },
      {
        "id": "6007"
      },
      {
        "id": "6034"
      },
      {
        "id": "2023"
      },
      {
        "id": "1628"
      },
      {
        "id": "6005"
      },
      {
        "id": "1332"
      },
      {
        "id": "6029"
      },
      {
        "id": "2024"
      },
      {
        "id": "6036"
      },
      {
        "id": "6037",
        "mastery_level": "4"
      },
      {
        "id": "2013",
        "mastery_level": "6"
      },
      {
        "id": "7033",
        "mastery_level": "7"
      },
    ]
  },
  "352": {
    "id": "352",
    "name": "Sickness Abound",
    "commander": {
        "id": "299"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "5046"
      },
      {
        "id": "1032"
      },
      {
        "id": "1331"
      },
      {
        "id": "2012"
      },
      {
        "id": "6046"
      },
      {
        "id": "6031"
      },
      {
        "id": "2032"
      },
      {
        "id": "1325"
      },
      {
        "id": "5048"
      },
      {
        "id": "6049"
      },
      {
        "id": "5009"
      },
    ]
  },
  "353": {
    "id": "353",
    "name": "One with the Force",
    "commander": {
        "id": "300"
    },
    "deck": [
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "6025"
      },
      {
        "id": "6044"
      },
      {
        "id": "7010"
      },
      {
        "id": "5024"
      },
      {
        "id": "2031"
      },
      {
        "id": "1030"
      },
      {
        "id": "2002"
      },
      {
        "id": "2003"
      },
      {
        "id": "7039",
        "mastery_level": "4"
      },
      {
        "id": "6024",
        "mastery_level": "6"
      },
      {
        "id": "5000",
        "mastery_level": "7"
      },
    ]
  },
  "354": {
    "id": "354",
    "name": "The Test Begins",
    "commander": {
        "id": "301"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1628"
      },
      {
        "id": "6016"
      },
      {
        "id": "2001"
      },
      {
        "id": "6038"
      },
      {
        "id": "1027"
      },
      {
        "id": "2021"
      },
      {
        "id": "1030"
      },
      {
        "id": "7004"
      },
      {
        "id": "1631"
      },
      {
        "id": "7048",
        "mastery_level": "4"
      },
      {
        "id": "5049",
        "mastery_level": "6"
      },
      {
        "id": "1343",
        "mastery_level": "7"
      },
    ]
  },
  "361": {
    "id": "361",
    "name": "Circle of Troubles",
    "commander": {
        "id": "261"
    },
    "deck": [
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "6011"
      },
      {
        "id": "1326"
      },
      {
        "id": "1629"
      },
      {
        "id": "2021"
      },
      {
        "id": "5028"
      },
      {
        "id": "1632"
      },
      {
        "id": "6029"
      },
      {
        "id": "5035"
      },
      {
        "id": "5047",
        "mastery_level": "4"
      },
      {
        "id": "5027",
        "mastery_level": "6"
      },
      {
        "id": "6027",
        "mastery_level": "7"
      },
    ]
  },
  "362": {
    "id": "362",
    "name": "First Wave",
    "commander": {
        "id": "266"
    },
    "deck": [
      {
        "id": "1616"
      },
      {
        "id": "5046"
      },
      {
        "id": "2010"
      },
      {
        "id": "7034"
      },
      {
        "id": "2008"
      },
      {
        "id": "6042"
      },
      {
        "id": "1625"
      },
      {
        "id": "7045"
      },
      {
        "id": "7021"
      },
      {
        "id": "7029"
      },
      {
        "id": "5045",
        "mastery_level": "4"
      },
      {
        "id": "5043",
        "mastery_level": "6"
      },
      {
        "id": "7027",
        "mastery_level": "7"
      },
    ]
  },
  "363": {
    "id": "363",
    "name": "Front Line Worries",
    "commander": {
        "id": "214"
    },
    "deck": [
      {
        "id": "6012"
      },
      {
        "id": "1031"
      },
      {
        "id": "1025"
      },
      {
        "id": "6005"
      },
      {
        "id": "2032"
      },
      {
        "id": "6020"
      },
      {
        "id": "1327"
      },
      {
        "id": "1030"
      },
      {
        "id": "5028"
      },
      {
        "id": "5040"
      },
      {
        "id": "5031",
        "mastery_level": "4"
      },
      {
        "id": "6045",
        "mastery_level": "6"
      },
      {
        "id": "5002",
        "mastery_level": "7"
      },
    ]
  },
  "364": {
    "id": "364",
    "name": "Final Round ",
    "commander": {
        "id": "303"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "2020"
      },
      {
        "id": "6042"
      },
      {
        "id": "2020"
      },
      {
        "id": "7011"
      },
      {
        "id": "2004"
      },
      {
        "id": "6010"
      },
      {
        "id": "6044"
      },
      {
        "id": "6024"
      },
      {
        "id": "7008"
      },
      {
        "id": "6030",
        "mastery_level": "4"
      },
      {
        "id": "5029",
        "mastery_level": "6"
      },
      {
        "id": "6035",
        "mastery_level": "7"
      },
    ]
  },
  "41": {
    "id": "41",
    "name": "Push Them Back",
    "commander": {
        "id": "224"
    },
    "deck": [
      {
        "id": "1300",
        "level": "2"
      },
      {
        "id": "1300",
        "level": "2"
      },
      {
        "id": "1302"
      },
      {
        "id": "1302"
      },
      {
        "id": "1305"
      },
      {
        "id": "1305",
        "mastery_level": "2"
      },
      {
        "id": "1303",
        "mastery_level": "2"
      },
      {
        "id": "1314",
        "mastery_level": "2"
      },
      {
        "id": "1318",
        "mastery_level": "3"
      },
    ]
  },
  "42": {
    "id": "42",
    "name": "Bottleneck",
    "commander": {
        "id": "224"
    },
    "deck": [
      {
        "id": "1300",
        "level": "2"
      },
      {
        "id": "1302",
        "level": "2"
      },
      {
        "id": "1302",
        "level": "2"
      },
      {
        "id": "1302",
        "level": "2"
      },
      {
        "id": "1305"
      },
      {
        "id": "1305"
      },
      {
        "id": "1305",
        "mastery_level": "2"
      },
      {
        "id": "1303",
        "mastery_level": "2"
      },
      {
        "id": "1314",
        "mastery_level": "2"
      },
      {
        "id": "1318",
        "mastery_level": "3"
      },
    ]
  },
  "43": {
    "id": "43",
    "name": "The Bridge",
    "commander": {
        "id": "224"
    },
    "deck": [
      {
        "id": "1300",
        "level": "3"
      },
      {
        "id": "1301"
      },
      {
        "id": "1302",
        "level": "2"
      },
      {
        "id": "1302",
        "level": "2"
      },
      {
        "id": "1305"
      },
      {
        "id": "1305"
      },
      {
        "id": "1305",
        "mastery_level": "2"
      },
      {
        "id": "1303",
        "mastery_level": "2"
      },
      {
        "id": "1317",
        "mastery_level": "2"
      },
      {
        "id": "1318",
        "mastery_level": "3"
      },
    ]
  },
  "44": {
    "id": "44",
    "name": "The Necromancer",
    "commander": {
        "id": "4"
    },
    "deck": [
      {
        "id": "1300"
      },
      {
        "id": "1300",
        "level": "2"
      },
      {
        "id": "1301"
      },
      {
        "id": "1302"
      },
      {
        "id": "1302",
        "level": "2"
      },
      {
        "id": "1305"
      },
      {
        "id": "1303"
      },
      {
        "id": "1317",
        "mastery_level": "2"
      },
      {
        "id": "1311",
        "mastery_level": "2"
      },
      {
        "id": "1311",
        "mastery_level": "3"
      },
    ]
  },
  "5001": {
    "id": "5001",
    "name": "Treasure Hunter",
    "commander": {
        "id": "225"
    },
    "deck": [
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1607"
      },
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "1304"
      },
      {
        "id": "6006"
      },
      {
        "id": "6006",
        "mastery_level": "3"
      },
      {
        "id": "2000",
        "mastery_level": "5"
      },
      {
        "id": "2000",
        "mastery_level": "7"
      },
    ]
  },
  "5002": {
    "id": "5002",
    "name": "In Search of Power",
    "commander": {
        "id": "225"
    },
    "deck": [
      {
        "id": "1601"
      },
      {
        "id": "1601"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1304"
      },
      {
        "id": "1304"
      },
      {
        "id": "1003"
      },
      {
        "id": "1003"
      },
      {
        "id": "1010"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314",
        "mastery_level": "3"
      },
      {
        "id": "2000",
        "mastery_level": "5"
      },
      {
        "id": "2000",
        "mastery_level": "7"
      },
    ]
  },
  "5003": {
    "id": "5003",
    "name": "The Salt Ways",
    "commander": {
        "id": "225"
    },
    "deck": [
      {
        "id": "1304"
      },
      {
        "id": "1304"
      },
      {
        "id": "1304"
      },
      {
        "id": "1602"
      },
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "1314"
      },
      {
        "id": "1615"
      },
      {
        "id": "1314",
        "mastery_level": "3"
      },
      {
        "id": "2000",
        "mastery_level": "5"
      },
      {
        "id": "2000",
        "mastery_level": "7"
      },
    ]
  },
  "5004": {
    "id": "5004",
    "name": "Hollow Ground",
    "commander": {
        "id": "226"
    },
    "deck": [
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1311"
      },
      {
        "id": "1313"
      },
      {
        "id": "2000",
        "mastery_level": "3"
      },
      {
        "id": "2000",
        "mastery_level": "5"
      },
      {
        "id": "2000",
        "mastery_level": "7"
      },
    ]
  },
  "5005": {
    "id": "5005",
    "name": "Path to Knowledge",
    "commander": {
        "id": "227"
    },
    "deck": [
      {
        "id": "1602"
      },
      {
        "id": "1607"
      },
      {
        "id": "1304"
      },
      {
        "id": "1302"
      },
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1018"
      },
      {
        "id": "2000",
        "mastery_level": "3"
      },
      {
        "id": "2000",
        "mastery_level": "5"
      },
      {
        "id": "6001",
        "mastery_level": "7"
      },
    ]
  },
  "5006": {
    "id": "5006",
    "name": "Monument in the Waste",
    "commander": {
        "id": "227"
    },
    "deck": [
      {
        "id": "1302"
      },
      {
        "id": "1303"
      },
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "2000"
      },
      {
        "id": "2000"
      },
      {
        "id": "2000",
        "mastery_level": "3"
      },
      {
        "id": "2000",
        "mastery_level": "5"
      },
      {
        "id": "1341",
        "mastery_level": "7"
      },
    ]
  },
  "5007": {
    "id": "5007",
    "name": "Corruption Eruption",
    "commander": {
        "id": "228"
    },
    "deck": [
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1302"
      },
      {
        "id": "1302"
      },
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613",
        "mastery_level": "3"
      },
      {
        "id": "2001",
        "mastery_level": "5"
      },
      {
        "id": "2001",
        "mastery_level": "7"
      },
    ]
  },
  "5008": {
    "id": "5008",
    "name": "Breaking Free",
    "commander": {
        "id": "228"
    },
    "deck": [
      {
        "id": "1304"
      },
      {
        "id": "1607"
      },
      {
        "id": "1304"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1010"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "2001",
        "mastery_level": "5"
      },
      {
        "id": "2001",
        "mastery_level": "7"
      },
    ]
  },
  "5009": {
    "id": "5009",
    "name": "Infestation",
    "commander": {
        "id": "228"
    },
    "deck": [
      {
        "id": "1006"
      },
      {
        "id": "1007"
      },
      {
        "id": "1305"
      },
      {
        "id": "1306"
      },
      {
        "id": "1602"
      },
      {
        "id": "1607"
      },
      {
        "id": "1307"
      },
      {
        "id": "1613"
      },
      {
        "id": "1312"
      },
      {
        "id": "1018"
      },
      {
        "id": "1314",
        "mastery_level": "3"
      },
      {
        "id": "2001",
        "mastery_level": "5"
      },
      {
        "id": "2001",
        "mastery_level": "7"
      },
    ]
  },
  "5010": {
    "id": "5010",
    "name": "Aria's Flight",
    "commander": {
        "id": "228"
    },
    "deck": [
      {
        "id": "1302"
      },
      {
        "id": "1302"
      },
      {
        "id": "1302"
      },
      {
        "id": "1307"
      },
      {
        "id": "1607"
      },
      {
        "id": "1305"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "2001",
        "mastery_level": "3"
      },
      {
        "id": "2001",
        "mastery_level": "5"
      },
      {
        "id": "2001",
        "mastery_level": "7"
      },
    ]
  },
  "5011": {
    "id": "5011",
    "name": "Sanctuary",
    "commander": {
        "id": "228"
    },
    "deck": [
      {
        "id": "1307"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1304"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "6006"
      },
      {
        "id": "6006"
      },
      {
        "id": "2001",
        "mastery_level": "3"
      },
      {
        "id": "2001",
        "mastery_level": "5"
      },
      {
        "id": "6003",
        "mastery_level": "7"
      },
    ]
  },
  "5012": {
    "id": "5012",
    "name": "Touch of the Void",
    "commander": {
        "id": "228"
    },
    "deck": [
      {
        "id": "1000"
      },
      {
        "id": "1000"
      },
      {
        "id": "1000"
      },
      {
        "id": "1000"
      },
      {
        "id": "1010"
      },
      {
        "id": "1613"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "2001"
      },
      {
        "id": "1329"
      },
      {
        "id": "2001",
        "mastery_level": "3"
      },
      {
        "id": "1329",
        "mastery_level": "5"
      },
      {
        "id": "6003",
        "mastery_level": "7"
      },
    ]
  },
  "5013": {
    "id": "5013",
    "name": "Mind Seize",
    "commander": {
        "id": "228"
    },
    "deck": [
      {
        "id": "1006"
      },
      {
        "id": "1601"
      },
      {
        "id": "1601"
      },
      {
        "id": "1302"
      },
      {
        "id": "1302"
      },
      {
        "id": "1303"
      },
      {
        "id": "1303"
      },
      {
        "id": "6006"
      },
      {
        "id": "1615"
      },
      {
        "id": "5007"
      },
      {
        "id": "1017",
        "mastery_level": "3"
      },
      {
        "id": "2002",
        "mastery_level": "5"
      },
      {
        "id": "2002",
        "mastery_level": "7"
      },
    ]
  },
  "5014": {
    "id": "5014",
    "name": "Losing Control",
    "commander": {
        "id": "228"
    },
    "deck": [
      {
        "id": "1004"
      },
      {
        "id": "1004"
      },
      {
        "id": "1302"
      },
      {
        "id": "1304"
      },
      {
        "id": "1304"
      },
      {
        "id": "1305"
      },
      {
        "id": "1305"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "2002",
        "mastery_level": "5"
      },
      {
        "id": "2002",
        "mastery_level": "7"
      },
    ]
  },
  "5015": {
    "id": "5015",
    "name": "Shadows in Flight",
    "commander": {
        "id": "228"
    },
    "deck": [
      {
        "id": "1301"
      },
      {
        "id": "1301"
      },
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "1602"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613",
        "mastery_level": "3"
      },
      {
        "id": "2002",
        "mastery_level": "5"
      },
      {
        "id": "2002",
        "mastery_level": "7"
      },
    ]
  },
  "5016": {
    "id": "5016",
    "name": "Friendly Fire",
    "commander": {
        "id": "229"
    },
    "deck": [
      {
        "id": "11300"
      },
      {
        "id": "11300"
      },
      {
        "id": "11300"
      },
      {
        "id": "1303"
      },
      {
        "id": "1305"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1314"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "6005",
        "mastery_level": "3"
      },
      {
        "id": "6005",
        "mastery_level": "5"
      },
      {
        "id": "6005",
        "mastery_level": "7"
      },
    ]
  },
  "5017": {
    "id": "5017",
    "name": "Downfall",
    "commander": {
        "id": "228"
    },
    "deck": [
      {
        "id": "1607"
      },
      {
        "id": "1004"
      },
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1011"
      },
      {
        "id": "1011"
      },
      {
        "id": "6006"
      },
      {
        "id": "6006"
      },
      {
        "id": "2002",
        "mastery_level": "3"
      },
      {
        "id": "2002",
        "mastery_level": "5"
      },
      {
        "id": "6002",
        "mastery_level": "7"
      },
    ]
  },
  "5018": {
    "id": "5018",
    "name": "Aria's Shadow",
    "commander": {
        "id": "230"
    },
    "deck": [
      {
        "id": "1301"
      },
      {
        "id": "1306"
      },
      {
        "id": "1303"
      },
      {
        "id": "1312"
      },
      {
        "id": "1319"
      },
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "1326"
      },
      {
        "id": "1327"
      },
      {
        "id": "1341"
      },
      {
        "id": "1328",
        "mastery_level": "3"
      },
      {
        "id": "6004",
        "mastery_level": "5"
      },
      {
        "id": "6003",
        "mastery_level": "7"
      },
    ]
  },
  "5019": {
    "id": "5019",
    "name": "Lost Hatchlings",
    "commander": {
        "id": "232"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "6012"
      },
      {
        "id": "2004"
      },
      {
        "id": "2004"
      },
      {
        "id": "2004"
      },
      {
        "id": "1328"
      },
      {
        "id": "2001"
      },
      {
        "id": "1628"
      },
      {
        "id": "1325"
      },
      {
        "id": "6009"
      },
      {
        "id": "2004",
        "mastery_level": "3"
      },
      {
        "id": "1040",
        "mastery_level": "5"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
    ]
  },
  "5020": {
    "id": "5020",
    "name": "Split Ground",
    "commander": {
        "id": "232"
    },
    "deck": [
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "2004"
      },
      {
        "id": "2004"
      },
      {
        "id": "5010"
      },
      {
        "id": "5010"
      },
      {
        "id": "6004"
      },
      {
        "id": "6005"
      },
      {
        "id": "1327"
      },
      {
        "id": "1340"
      },
      {
        "id": "2004",
        "mastery_level": "3"
      },
      {
        "id": "1040",
        "mastery_level": "5"
      },
      {
        "id": "6009",
        "mastery_level": "7"
      },
    ]
  },
  "5021": {
    "id": "5021",
    "name": "Dragon Cries",
    "commander": {
        "id": "232"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "7012"
      },
      {
        "id": "6010"
      },
      {
        "id": "6010"
      },
      {
        "id": "7010"
      },
      {
        "id": "7010"
      },
      {
        "id": "2004"
      },
      {
        "id": "2004"
      },
      {
        "id": "1330"
      },
      {
        "id": "1326"
      },
      {
        "id": "1340"
      },
      {
        "id": "1340"
      },
      {
        "id": "2004",
        "mastery_level": "3"
      },
      {
        "id": "6009",
        "mastery_level": "5"
      },
      {
        "id": "6009",
        "mastery_level": "7"
      },
    ]
  },
  "5022": {
    "id": "5022",
    "name": "Ignition",
    "commander": {
        "id": "5"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "6011"
      },
      {
        "id": "6011"
      },
      {
        "id": "6011"
      },
      {
        "id": "6010"
      },
      {
        "id": "6004"
      },
      {
        "id": "1329"
      },
      {
        "id": "1327"
      },
      {
        "id": "1341"
      },
      {
        "id": "6003"
      },
      {
        "id": "6002"
      },
      {
        "id": "6011",
        "mastery_level": "3"
      },
      {
        "id": "1340",
        "mastery_level": "5"
      },
      {
        "id": "6003",
        "mastery_level": "7"
      },
    ]
  },
  "5023": {
    "id": "5023",
    "name": "Parley",
    "commander": {
        "id": "232"
    },
    "deck": [
      {
        "id": "2004"
      },
      {
        "id": "2004"
      },
      {
        "id": "2005"
      },
      {
        "id": "2005"
      },
      {
        "id": "5010"
      },
      {
        "id": "5010"
      },
      {
        "id": "6010"
      },
      {
        "id": "7010"
      },
      {
        "id": "1340"
      },
      {
        "id": "6009"
      },
      {
        "id": "7008"
      },
      {
        "id": "1040"
      },
      {
        "id": "2005",
        "mastery_level": "3"
      },
      {
        "id": "7008",
        "mastery_level": "5"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
    ]
  },
  "5024": {
    "id": "5024",
    "name": "Down the Mountain",
    "commander": {
        "id": "233"
    },
    "deck": [
      {
        "id": "6010"
      },
      {
        "id": "6010"
      },
      {
        "id": "1325"
      },
      {
        "id": "1328"
      },
      {
        "id": "2001"
      },
      {
        "id": "6004"
      },
      {
        "id": "1628"
      },
      {
        "id": "7009"
      },
      {
        "id": "6009"
      },
      {
        "id": "6001"
      },
      {
        "id": "6008"
      },
      {
        "id": "7002"
      },
      {
        "id": "6011",
        "mastery_level": "3"
      },
      {
        "id": "1340",
        "mastery_level": "5"
      },
      {
        "id": "7009",
        "mastery_level": "7"
      },
    ]
  },
  "5025": {
    "id": "5025",
    "name": "Decim, Chaos Incarnate",
    "commander": {
        "id": "234"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "6012"
      },
      {
        "id": "1327"
      },
      {
        "id": "1327"
      },
      {
        "id": "6011"
      },
      {
        "id": "6005"
      },
      {
        "id": "6001"
      },
      {
        "id": "6003"
      },
      {
        "id": "6008"
      },
      {
        "id": "1340"
      },
      {
        "id": "6011",
        "mastery_level": "2"
      },
      {
        "id": "2004",
        "mastery_level": "3"
      },
      {
        "id": "1340",
        "mastery_level": "5"
      },
      {
        "id": "6008",
        "mastery_level": "6"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
    ]
  },
  "5026": {
    "id": "5026",
    "name": "Scorched Lands",
    "commander": {
        "id": "235"
    },
    "deck": [
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "1311"
      },
      {
        "id": "1313"
      },
      {
        "id": "1319"
      },
      {
        "id": "1325"
      },
      {
        "id": "2004"
      },
      {
        "id": "6011"
      },
      {
        "id": "6010"
      },
      {
        "id": "6010"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "1318",
        "mastery_level": "5"
      },
      {
        "id": "1318",
        "mastery_level": "7"
      },
    ]
  },
  "5027": {
    "id": "5027",
    "name": "Dragon's Aerie",
    "commander": {
        "id": "236"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "5012"
      },
      {
        "id": "1011"
      },
      {
        "id": "1027"
      },
      {
        "id": "1027"
      },
      {
        "id": "2005"
      },
      {
        "id": "5011"
      },
      {
        "id": "1041"
      },
      {
        "id": "1040"
      },
      {
        "id": "1012",
        "mastery_level": "3"
      },
      {
        "id": "2002",
        "mastery_level": "5"
      },
      {
        "id": "1027",
        "mastery_level": "7"
      },
    ]
  },
  "5028": {
    "id": "5028",
    "name": "Ice Dragon's Realm",
    "commander": {
        "id": "237"
    },
    "deck": [
      {
        "id": "6012"
      },
      {
        "id": "5012"
      },
      {
        "id": "7012"
      },
      {
        "id": "2005"
      },
      {
        "id": "2005"
      },
      {
        "id": "5010"
      },
      {
        "id": "7010"
      },
      {
        "id": "1340"
      },
      {
        "id": "7008"
      },
      {
        "id": "5008"
      },
      {
        "id": "7010",
        "mastery_level": "3"
      },
      {
        "id": "5008",
        "mastery_level": "6"
      },
      {
        "id": "6009",
        "mastery_level": "7"
      },
    ]
  },
  "5029": {
    "id": "5029",
    "name": "Guardian's Light",
    "commander": {
        "id": "238"
    },
    "deck": [
      {
        "id": "1001",
        "level": "2"
      },
      {
        "id": "1001",
        "level": "2"
      },
      {
        "id": "1001",
        "level": "2"
      },
      {
        "id": "1005"
      },
      {
        "id": "1005"
      },
      {
        "id": "11001"
      },
      {
        "id": "5017"
      },
      {
        "id": "1012"
      },
      {
        "id": "1017",
        "level": "1",
        "mastery_level": "2"
      },
      {
        "id": "2002",
        "level": "1",
        "mastery_level": "2"
      },
      {
        "id": "5007",
        "level": "1",
        "mastery_level": "3"
      },
      {
        "id": "2002",
        "level": "1",
        "mastery_level": "4"
      },
      {
        "id": "1030",
        "level": "1",
        "mastery_level": "5"
      },
      {
        "id": "5013",
        "level": "1",
        "mastery_level": "6"
      },
      {
        "id": "5014",
        "level": "1",
        "mastery_level": "7"
      },
    ]
  },
  "5030": {
    "id": "5030",
    "name": "Groc, Vault Ancient",
    "commander": {
        "id": "239"
    },
    "deck": [
      {
        "id": "1601"
      },
      {
        "id": "1601"
      },
      {
        "id": "11607"
      },
      {
        "id": "11602"
      },
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "1617"
      },
      {
        "id": "1619"
      },
      {
        "id": "1610",
        "mastery_level": "2"
      },
      {
        "id": "2009",
        "mastery_level": "2"
      },
      {
        "id": "1619",
        "mastery_level": "3"
      },
      {
        "id": "7004",
        "mastery_level": "4"
      },
      {
        "id": "2009",
        "mastery_level": "5"
      },
      {
        "id": "11641",
        "mastery_level": "6"
      },
      {
        "id": "7014",
        "mastery_level": "7"
      },
    ]
  },
  "5031": {
    "id": "5031",
    "name": "Pincers in the Sky",
    "commander": {
        "id": "240"
    },
    "deck": [
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1307"
      },
      {
        "id": "1301"
      },
      {
        "id": "1318"
      },
      {
        "id": "6017"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313",
        "mastery_level": "2"
      },
      {
        "id": "2008",
        "mastery_level": "3"
      },
      {
        "id": "1315",
        "mastery_level": "4"
      },
      {
        "id": "2008",
        "mastery_level": "5"
      },
      {
        "id": "6000",
        "mastery_level": "6"
      },
      {
        "id": "6000",
        "mastery_level": "7"
      },
    ]
  },
  "5032": {
    "id": "5032",
    "name": "Make It Snappy",
    "commander": {
        "id": "240"
    },
    "deck": [
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1303"
      },
      {
        "id": "1301"
      },
      {
        "id": "1311"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1315"
      },
      {
        "id": "6017",
        "mastery_level": "2"
      },
      {
        "id": "6011",
        "mastery_level": "3"
      },
      {
        "id": "6017",
        "mastery_level": "4"
      },
      {
        "id": "2008",
        "mastery_level": "5"
      },
      {
        "id": "1340",
        "mastery_level": "6"
      },
      {
        "id": "6000",
        "mastery_level": "7"
      },
    ]
  },
  "5033": {
    "id": "5033",
    "name": "River of Gold",
    "commander": {
        "id": "241"
    },
    "deck": [
      {
        "id": "1305"
      },
      {
        "id": "1305"
      },
      {
        "id": "1303"
      },
      {
        "id": "1305"
      },
      {
        "id": "6017"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1012"
      },
      {
        "id": "1325",
        "mastery_level": "2"
      },
      {
        "id": "1325",
        "mastery_level": "3"
      },
      {
        "id": "1012",
        "mastery_level": "4"
      },
      {
        "id": "2008",
        "mastery_level": "5"
      },
      {
        "id": "7013",
        "mastery_level": "6"
      },
      {
        "id": "7013",
        "mastery_level": "7"
      },
    ]
  },
  "5034": {
    "id": "5034",
    "name": "Worth Its Weight",
    "commander": {
        "id": "241"
    },
    "deck": [
      {
        "id": "1002"
      },
      {
        "id": "1002"
      },
      {
        "id": "1301"
      },
      {
        "id": "1301"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1010"
      },
      {
        "id": "1629",
        "mastery_level": "2"
      },
      {
        "id": "2009",
        "mastery_level": "3"
      },
      {
        "id": "1010",
        "mastery_level": "4"
      },
      {
        "id": "2008",
        "mastery_level": "5"
      },
      {
        "id": "7013",
        "mastery_level": "6"
      },
      {
        "id": "7013",
        "mastery_level": "7"
      },
    ]
  },
  "5035": {
    "id": "5035",
    "name": "Shakey Graves",
    "commander": {
        "id": "240"
    },
    "deck": [
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "1306"
      },
      {
        "id": "6006"
      },
      {
        "id": "1319"
      },
      {
        "id": "1311"
      },
      {
        "id": "1312",
        "mastery_level": "2"
      },
      {
        "id": "2008",
        "mastery_level": "3"
      },
      {
        "id": "1312",
        "mastery_level": "2"
      },
      {
        "id": "2008",
        "mastery_level": "5"
      },
      {
        "id": "6000",
        "mastery_level": "6"
      },
      {
        "id": "6001",
        "mastery_level": "7"
      },
    ]
  },
  "5036": {
    "id": "5036",
    "name": "Mass Exodus",
    "commander": {
        "id": "244"
    },
    "deck": [
      {
        "id": "1305"
      },
      {
        "id": "1305"
      },
      {
        "id": "1300"
      },
      {
        "id": "1301"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1315"
      },
      {
        "id": "6012"
      },
      {
        "id": "1313",
        "mastery_level": "2"
      },
      {
        "id": "6015",
        "mastery_level": "3"
      },
      {
        "id": "1315",
        "mastery_level": "4"
      },
      {
        "id": "6015",
        "mastery_level": "5"
      },
      {
        "id": "7014",
        "mastery_level": "6"
      },
      {
        "id": "6001",
        "mastery_level": "7"
      },
    ]
  },
  "5037": {
    "id": "5037",
    "name": "A Promising Trail",
    "commander": {
        "id": "244"
    },
    "deck": [
      {
        "id": "1305"
      },
      {
        "id": "1305"
      },
      {
        "id": "1300"
      },
      {
        "id": "1301"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1315"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313",
        "mastery_level": "2"
      },
      {
        "id": "6015",
        "mastery_level": "3"
      },
      {
        "id": "1315",
        "mastery_level": "4"
      },
      {
        "id": "6015",
        "mastery_level": "5"
      },
      {
        "id": "6002",
        "mastery_level": "6"
      },
      {
        "id": "6002",
        "mastery_level": "7"
      },
    ]
  },
  "5038": {
    "id": "5038",
    "name": "The Gatekeeper",
    "commander": {
        "id": "245"
    },
    "deck": [
      {
        "id": "1305"
      },
      {
        "id": "1305"
      },
      {
        "id": "1002"
      },
      {
        "id": "1306"
      },
      {
        "id": "1311"
      },
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "1315"
      },
      {
        "id": "1326"
      },
      {
        "id": "2008",
        "mastery_level": "2"
      },
      {
        "id": "2008",
        "mastery_level": "3"
      },
      {
        "id": "1311",
        "mastery_level": "4"
      },
      {
        "id": "2004",
        "mastery_level": "5"
      },
      {
        "id": "1340",
        "mastery_level": "6"
      },
      {
        "id": "6003",
        "mastery_level": "7"
      },
    ]
  },
  "5039": {
    "id": "5039",
    "name": "Deepness",
    "commander": {
        "id": "242"
    },
    "deck": [
      {
        "id": "1000"
      },
      {
        "id": "1000"
      },
      {
        "id": "1000"
      },
      {
        "id": "1000"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1617",
        "mastery_level": "2"
      },
      {
        "id": "7004",
        "mastery_level": "3"
      },
      {
        "id": "7017",
        "mastery_level": "4"
      },
      {
        "id": "3333",
        "mastery_level": "5"
      },
      {
        "id": "7000",
        "mastery_level": "6"
      },
      {
        "id": "7003",
        "mastery_level": "7"
      },
    ]
  },
  "5040": {
    "id": "5040",
    "name": "Coral Madness",
    "commander": {
        "id": "242"
    },
    "deck": [
      {
        "id": "1606"
      },
      {
        "id": "1606"
      },
      {
        "id": "1607"
      },
      {
        "id": "1607"
      },
      {
        "id": "2222"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "1617"
      },
      {
        "id": "7007"
      },
      {
        "id": "1630",
        "mastery_level": "2"
      },
      {
        "id": "1630",
        "mastery_level": "3"
      },
      {
        "id": "7017",
        "mastery_level": "4"
      },
      {
        "id": "1630",
        "mastery_level": "5"
      },
      {
        "id": "5014",
        "mastery_level": "6"
      },
      {
        "id": "5014",
        "mastery_level": "7"
      },
    ]
  },
  "5041": {
    "id": "5041",
    "name": "Whirlwind",
    "commander": {
        "id": "243"
    },
    "deck": [
      {
        "id": "1002"
      },
      {
        "id": "1002"
      },
      {
        "id": "1002"
      },
      {
        "id": "1002"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1012"
      },
      {
        "id": "1617"
      },
      {
        "id": "2222",
        "mastery_level": "2"
      },
      {
        "id": "5015",
        "mastery_level": "3"
      },
      {
        "id": "1012",
        "mastery_level": "4"
      },
      {
        "id": "2010",
        "mastery_level": "5"
      },
      {
        "id": "5015",
        "mastery_level": "7"
      },
    ]
  },
  "5042": {
    "id": "5042",
    "name": "Second Wind",
    "commander": {
        "id": "243"
    },
    "deck": [
      {
        "id": "1002"
      },
      {
        "id": "1002"
      },
      {
        "id": "1002"
      },
      {
        "id": "1002"
      },
      {
        "id": "1012"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "6017"
      },
      {
        "id": "7017",
        "mastery_level": "2"
      },
      {
        "id": "2010",
        "mastery_level": "3"
      },
      {
        "id": "1010",
        "mastery_level": "4"
      },
      {
        "id": "2010",
        "mastery_level": "5"
      },
      {
        "id": "2010",
        "mastery_level": "7"
      },
    ]
  },
  "5043": {
    "id": "5043",
    "name": "Call to Action",
    "commander": {
        "id": "246"
    },
    "deck": [
      {
        "id": "1307"
      },
      {
        "id": "1006"
      },
      {
        "id": "1302"
      },
      {
        "id": "1606"
      },
      {
        "id": "1004"
      },
      {
        "id": "1303"
      },
      {
        "id": "1313"
      },
      {
        "id": "6022"
      },
      {
        "id": "1319",
        "mastery_level": "2"
      },
      {
        "id": "2012",
        "mastery_level": "2"
      },
      {
        "id": "6022",
        "mastery_level": "3"
      },
      {
        "id": "1627",
        "mastery_level": "4"
      },
      {
        "id": "5020",
        "mastery_level": "5"
      },
      {
        "id": "6009",
        "mastery_level": "6"
      },
      {
        "id": "7019",
        "mastery_level": "7"
      },
    ]
  },
  "5044": {
    "id": "5044",
    "name": "Swamplands",
    "commander": {
        "id": "246"
    },
    "deck": [
      {
        "id": "1302",
        "level": "2"
      },
      {
        "id": "1302",
        "level": "2"
      },
      {
        "id": "1004"
      },
      {
        "id": "1004"
      },
      {
        "id": "1604"
      },
      {
        "id": "1604"
      },
      {
        "id": "1613"
      },
      {
        "id": "7007"
      },
      {
        "id": "1015",
        "mastery_level": "2"
      },
      {
        "id": "2011",
        "mastery_level": "2"
      },
      {
        "id": "6022",
        "mastery_level": "3"
      },
      {
        "id": "6016",
        "mastery_level": "4"
      },
      {
        "id": "7020",
        "mastery_level": "5"
      },
      {
        "id": "5008",
        "mastery_level": "6"
      },
      {
        "id": "5019",
        "mastery_level": "7"
      },
    ]
  },
  "5045": {
    "id": "5045",
    "name": "What Creeps in the Dark",
    "commander": {
        "id": "248"
    },
    "deck": [
      {
        "id": "1604"
      },
      {
        "id": "1604"
      },
      {
        "id": "1604"
      },
      {
        "id": "1300"
      },
      {
        "id": "1304"
      },
      {
        "id": "1307"
      },
      {
        "id": "6006"
      },
      {
        "id": "1618"
      },
      {
        "id": "5022",
        "mastery_level": "2"
      },
      {
        "id": "6020",
        "mastery_level": "2"
      },
      {
        "id": "1618",
        "mastery_level": "3"
      },
      {
        "id": "6021",
        "mastery_level": "4"
      },
      {
        "id": "1628",
        "mastery_level": "5"
      },
      {
        "id": "6019",
        "mastery_level": "6"
      },
      {
        "id": "7019",
        "mastery_level": "7"
      },
    ]
  },
  "5046": {
    "id": "5046",
    "name": "Treetop Horror",
    "commander": {
        "id": "247"
    },
    "deck": [
      {
        "id": "1604"
      },
      {
        "id": "1604"
      },
      {
        "id": "1304"
      },
      {
        "id": "1304"
      },
      {
        "id": "1601"
      },
      {
        "id": "1602"
      },
      {
        "id": "1616"
      },
      {
        "id": "6007"
      },
      {
        "id": "1015",
        "mastery_level": "2"
      },
      {
        "id": "2014",
        "mastery_level": "2"
      },
      {
        "id": "1313",
        "mastery_level": "3"
      },
      {
        "id": "7016",
        "mastery_level": "4"
      },
      {
        "id": "6020",
        "mastery_level": "5"
      },
      {
        "id": "6014",
        "mastery_level": "6"
      },
      {
        "id": "2013",
        "mastery_level": "7"
      },
    ]
  },
  "5047": {
    "id": "5047",
    "name": "Scent of Betrayal",
    "commander": {
        "id": "248"
    },
    "deck": [
      {
        "id": "1604"
      },
      {
        "id": "1300"
      },
      {
        "id": "1302"
      },
      {
        "id": "1006"
      },
      {
        "id": "1302"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022",
        "mastery_level": "2"
      },
      {
        "id": "5021",
        "mastery_level": "2"
      },
      {
        "id": "1313",
        "mastery_level": "3"
      },
      {
        "id": "6020",
        "mastery_level": "4"
      },
      {
        "id": "6020",
        "mastery_level": "5"
      },
      {
        "id": "5019",
        "mastery_level": "6"
      },
      {
        "id": "7019",
        "mastery_level": "7"
      },
    ]
  },
  "5048": {
    "id": "5048",
    "name": "Through the Woods",
    "commander": {
        "id": "250"
    },
    "deck": [
      {
        "id": "1604"
      },
      {
        "id": "1607"
      },
      {
        "id": "1601"
      },
      {
        "id": "1603"
      },
      {
        "id": "1603"
      },
      {
        "id": "6017"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "6017",
        "mastery_level": "2"
      },
      {
        "id": "7021",
        "mastery_level": "2"
      },
      {
        "id": "7012",
        "mastery_level": "3"
      },
      {
        "id": "7020",
        "mastery_level": "4"
      },
      {
        "id": "5020",
        "mastery_level": "5"
      },
      {
        "id": "6002",
        "mastery_level": "6"
      },
      {
        "id": "7000",
        "mastery_level": "7"
      },
    ]
  },
  "5049": {
    "id": "5049",
    "name": "Room to Breathe",
    "commander": {
        "id": "249"
    },
    "deck": [
      {
        "id": "1604"
      },
      {
        "id": "1604"
      },
      {
        "id": "1302"
      },
      {
        "id": "1302"
      },
      {
        "id": "1313"
      },
      {
        "id": "1010"
      },
      {
        "id": "7022"
      },
      {
        "id": "6012"
      },
      {
        "id": "1618",
        "mastery_level": "2"
      },
      {
        "id": "7020",
        "mastery_level": "2"
      },
      {
        "id": "1618",
        "mastery_level": "3"
      },
      {
        "id": "7021",
        "mastery_level": "4"
      },
      {
        "id": "2014",
        "mastery_level": "5"
      },
      {
        "id": "2013",
        "mastery_level": "6"
      },
      {
        "id": "7019",
        "mastery_level": "7"
      },
    ]
  },
  "5050": {
    "id": "5050",
    "name": "Tour Guide",
    "commander": {
        "id": "250"
    },
    "deck": [
      {
        "id": "1601"
      },
      {
        "id": "1300"
      },
      {
        "id": "1302"
      },
      {
        "id": "1302"
      },
      {
        "id": "1015"
      },
      {
        "id": "7022"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "7022",
        "mastery_level": "2"
      },
      {
        "id": "5021",
        "mastery_level": "2"
      },
      {
        "id": "1613",
        "mastery_level": "3"
      },
      {
        "id": "7021",
        "mastery_level": "4"
      },
      {
        "id": "2011",
        "mastery_level": "5"
      },
      {
        "id": "1641",
        "mastery_level": "6"
      },
      {
        "id": "2013",
        "mastery_level": "7"
      },
    ]
  },
  "5051": {
    "id": "5051",
    "name": "Paradise Lost",
    "commander": {
        "id": "247"
    },
    "deck": [
      {
        "id": "1304"
      },
      {
        "id": "1304"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1604"
      },
      {
        "id": "1604"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "7022"
      },
      {
        "id": "7022"
      },
      {
        "id": "2014",
        "mastery_level": "2"
      },
      {
        "id": "1615",
        "mastery_level": "3"
      },
      {
        "id": "7016",
        "mastery_level": "4"
      },
      {
        "id": "5021",
        "mastery_level": "5"
      },
      {
        "id": "6018",
        "mastery_level": "6"
      },
      {
        "id": "7018",
        "mastery_level": "7"
      },
    ]
  },
  "5052": {
    "id": "5052",
    "name": "An Old Fiend",
    "commander": {
        "id": "247"
    },
    "deck": [
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1615"
      },
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "1616"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "7022",
        "mastery_level": "2"
      },
      {
        "id": "1628",
        "mastery_level": "3"
      },
      {
        "id": "5022",
        "mastery_level": "4"
      },
      {
        "id": "2014",
        "mastery_level": "5"
      },
      {
        "id": "2013",
        "mastery_level": "6"
      },
      {
        "id": "5018",
        "mastery_level": "7"
      },
    ]
  },
  "5053": {
    "id": "5053",
    "name": "Last Laugh",
    "commander": {
        "id": "249"
    },
    "deck": [
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1604"
      },
      {
        "id": "1616"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1619"
      },
      {
        "id": "1028",
        "mastery_level": "2"
      },
      {
        "id": "7021",
        "mastery_level": "3"
      },
      {
        "id": "7022",
        "mastery_level": "4"
      },
      {
        "id": "6020",
        "mastery_level": "5"
      },
      {
        "id": "6019",
        "mastery_level": "6"
      },
      {
        "id": "7019",
        "mastery_level": "7"
      },
    ]
  },
  "5054": {
    "id": "5054",
    "name": "A Negotiation",
    "commander": {
        "id": "246"
    },
    "deck": [
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "1604"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "1319"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "5020",
        "mastery_level": "2"
      },
      {
        "id": "5021",
        "mastery_level": "3"
      },
      {
        "id": "1313",
        "mastery_level": "4"
      },
      {
        "id": "6020",
        "mastery_level": "5"
      },
      {
        "id": "6009",
        "mastery_level": "6"
      },
      {
        "id": "5019",
        "mastery_level": "7"
      },
    ]
  },
  "5055": {
    "id": "5055",
    "name": "The Emperor's Deal",
    "commander": {
        "id": "246"
    },
    "deck": [
      {
        "id": "1004"
      },
      {
        "id": "1004"
      },
      {
        "id": "1604"
      },
      {
        "id": "1604"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "7022"
      },
      {
        "id": "7022"
      },
      {
        "id": "1617"
      },
      {
        "id": "1618",
        "mastery_level": "2"
      },
      {
        "id": "2012",
        "mastery_level": "3"
      },
      {
        "id": "1618",
        "mastery_level": "4"
      },
      {
        "id": "7020",
        "mastery_level": "5"
      },
      {
        "id": "7018",
        "mastery_level": "6"
      },
      {
        "id": "5008",
        "mastery_level": "7"
      },
    ]
  },
  "5056": {
    "id": "5056",
    "name": "Back to the Swamps",
    "commander": {
        "id": "250"
    },
    "deck": [
      {
        "id": "1607"
      },
      {
        "id": "1603"
      },
      {
        "id": "1604"
      },
      {
        "id": "1604"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1617"
      },
      {
        "id": "6022"
      },
      {
        "id": "7007",
        "mastery_level": "2"
      },
      {
        "id": "7021",
        "mastery_level": "3"
      },
      {
        "id": "1618",
        "mastery_level": "4"
      },
      {
        "id": "1627",
        "mastery_level": "5"
      },
      {
        "id": "7019",
        "mastery_level": "6"
      },
      {
        "id": "7014",
        "mastery_level": "7"
      },
    ]
  },
  "5057": {
    "id": "5057",
    "name": "What Lurks",
    "commander": {
        "id": "248"
    },
    "deck": [
      {
        "id": "1604"
      },
      {
        "id": "1604"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "6006"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1328",
        "mastery_level": "2"
      },
      {
        "id": "1328",
        "mastery_level": "3"
      },
      {
        "id": "1313",
        "mastery_level": "4"
      },
      {
        "id": "6020",
        "mastery_level": "5"
      },
      {
        "id": "5019",
        "mastery_level": "6"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
    ]
  },
  "5058": {
    "id": "5058",
    "name": "Guardian Awakened",
    "commander": {
        "id": "251"
    },
    "deck": [
      {
        "id": "1605"
      },
      {
        "id": "1605"
      },
      {
        "id": "1605"
      },
      {
        "id": "1604"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "5022"
      },
      {
        "id": "5020",
        "mastery_level": "2"
      },
      {
        "id": "5021",
        "mastery_level": "3"
      },
      {
        "id": "6017",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "7000",
        "mastery_level": "6"
      },
      {
        "id": "1341",
        "mastery_level": "7"
      },
    ]
  },
  "5059": {
    "id": "5059",
    "name": "Baby on Board",
    "commander": {
        "id": "247"
    },
    "deck": [
      {
        "id": "1300"
      },
      {
        "id": "1300"
      },
      {
        "id": "1604"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "6012"
      },
      {
        "id": "5022"
      },
      {
        "id": "5012",
        "mastery_level": "2"
      },
      {
        "id": "6021",
        "mastery_level": "3"
      },
      {
        "id": "5022",
        "mastery_level": "4"
      },
      {
        "id": "5021",
        "mastery_level": "5"
      },
      {
        "id": "6008",
        "mastery_level": "6"
      },
      {
        "id": "5014",
        "mastery_level": "7"
      },
    ]
  },
  "5060": {
    "id": "5060",
    "name": "Over Easy",
    "commander": {
        "id": "247"
    },
    "deck": [
      {
        "id": "1304"
      },
      {
        "id": "1304"
      },
      {
        "id": "1304"
      },
      {
        "id": "1615"
      },
      {
        "id": "1615"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1616"
      },
      {
        "id": "6007"
      },
      {
        "id": "1015",
        "mastery_level": "2"
      },
      {
        "id": "2011",
        "mastery_level": "3"
      },
      {
        "id": "1018",
        "mastery_level": "4"
      },
      {
        "id": "2002",
        "mastery_level": "5"
      },
      {
        "id": "2013",
        "mastery_level": "6"
      },
      {
        "id": "7001",
        "mastery_level": "7"
      },
    ]
  },
  "5061": {
    "id": "5061",
    "name": "Motherly Instincts",
    "commander": {
        "id": "250"
    },
    "deck": [
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "1307"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "1330",
        "mastery_level": "2"
      },
      {
        "id": "7021",
        "mastery_level": "3"
      },
      {
        "id": "7012",
        "mastery_level": "4"
      },
      {
        "id": "1630",
        "mastery_level": "5"
      },
      {
        "id": "7000",
        "mastery_level": "6"
      },
      {
        "id": "7019",
        "mastery_level": "7"
      },
    ]
  },
  "5062": {
    "id": "5062",
    "name": "Last Guardian",
    "commander": {
        "id": "251"
    },
    "deck": [
      {
        "id": "1607"
      },
      {
        "id": "1604"
      },
      {
        "id": "1604"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "7021",
        "mastery_level": "2"
      },
      {
        "id": "2012",
        "mastery_level": "3"
      },
      {
        "id": "1015",
        "mastery_level": "4"
      },
      {
        "id": "2011",
        "mastery_level": "5"
      },
      {
        "id": "7018",
        "mastery_level": "6"
      },
      {
        "id": "6009",
        "mastery_level": "7"
      },
    ]
  },
  "5063": {
    "id": "5063",
    "name": "Special Delivery",
    "commander": {
        "id": "249"
    },
    "deck": [
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1604"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1319"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1328",
        "mastery_level": "2"
      },
      {
        "id": "7011",
        "mastery_level": "3"
      },
      {
        "id": "1630",
        "mastery_level": "4"
      },
      {
        "id": "1627",
        "mastery_level": "5"
      },
      {
        "id": "7019",
        "mastery_level": "6"
      },
      {
        "id": "6019",
        "mastery_level": "7"
      },
    ]
  },
  "5064": {
    "id": "5064",
    "name": "Tough Decisions",
    "commander": {
        "id": "252"
    },
    "deck": [
      {
        "id": "1604"
      },
      {
        "id": "1604"
      },
      {
        "id": "1604"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "5022"
      },
      {
        "id": "6022"
      },
      {
        "id": "7022"
      },
      {
        "id": "7022"
      },
      {
        "id": "7016",
        "mastery_level": "2"
      },
      {
        "id": "5020",
        "mastery_level": "3"
      },
      {
        "id": "2014",
        "mastery_level": "4"
      },
      {
        "id": "6018"
      },
      {
        "id": "5018"
      },
      {
        "id": "7018"
      },
    ]
  },
  "5065": {
    "id": "5065",
    "name": "Lost Hatchlings",
    "commander": {
        "id": "232"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "6012"
      },
      {
        "id": "2004"
      },
      {
        "id": "2004"
      },
      {
        "id": "2004"
      },
      {
        "id": "1328"
      },
      {
        "id": "2001"
      },
      {
        "id": "1628"
      },
      {
        "id": "1325"
      },
      {
        "id": "6009"
      },
      {
        "id": "2004",
        "mastery_level": "3"
      },
      {
        "id": "1040",
        "mastery_level": "5"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
    ]
  },
  "5066": {
    "id": "5066",
    "name": "Split Ground",
    "commander": {
        "id": "232"
    },
    "deck": [
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "2004"
      },
      {
        "id": "2004"
      },
      {
        "id": "5010"
      },
      {
        "id": "5010"
      },
      {
        "id": "6004"
      },
      {
        "id": "6005"
      },
      {
        "id": "1327"
      },
      {
        "id": "1340"
      },
      {
        "id": "2004",
        "mastery_level": "3"
      },
      {
        "id": "1040",
        "mastery_level": "5"
      },
      {
        "id": "6009",
        "mastery_level": "7"
      },
    ]
  },
  "5067": {
    "id": "5067",
    "name": "Dragon Cries",
    "commander": {
        "id": "232"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "6010"
      },
      {
        "id": "6010"
      },
      {
        "id": "7010"
      },
      {
        "id": "7010"
      },
      {
        "id": "2004"
      },
      {
        "id": "2004"
      },
      {
        "id": "1330"
      },
      {
        "id": "1326"
      },
      {
        "id": "1340"
      },
      {
        "id": "2004",
        "mastery_level": "3"
      },
      {
        "id": "6009",
        "mastery_level": "5"
      },
      {
        "id": "6009",
        "mastery_level": "7"
      },
    ]
  },
  "5068": {
    "id": "5068",
    "name": "Ignition",
    "commander": {
        "id": "5"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "6011"
      },
      {
        "id": "6011"
      },
      {
        "id": "6011"
      },
      {
        "id": "6010"
      },
      {
        "id": "6004"
      },
      {
        "id": "1329"
      },
      {
        "id": "1327"
      },
      {
        "id": "1341"
      },
      {
        "id": "6002"
      },
      {
        "id": "6011",
        "mastery_level": "3"
      },
      {
        "id": "1340",
        "mastery_level": "5"
      },
      {
        "id": "6003",
        "mastery_level": "7"
      },
    ]
  },
  "5069": {
    "id": "5069",
    "name": "Parley",
    "commander": {
        "id": "232"
    },
    "deck": [
      {
        "id": "6012"
      },
      {
        "id": "1319"
      },
      {
        "id": "2004"
      },
      {
        "id": "2004"
      },
      {
        "id": "2005"
      },
      {
        "id": "6015"
      },
      {
        "id": "2001"
      },
      {
        "id": "2001"
      },
      {
        "id": "1629"
      },
      {
        "id": "7010"
      },
      {
        "id": "1340"
      },
      {
        "id": "6009"
      },
      {
        "id": "2005",
        "mastery_level": "3"
      },
      {
        "id": "7008",
        "mastery_level": "5"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
    ]
  },
  "5070": {
    "id": "5070",
    "name": "Down the Mountain",
    "commander": {
        "id": "233"
    },
    "deck": [
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "6010"
      },
      {
        "id": "6010"
      },
      {
        "id": "1325"
      },
      {
        "id": "1328"
      },
      {
        "id": "2001"
      },
      {
        "id": "6004"
      },
      {
        "id": "1628"
      },
      {
        "id": "6009"
      },
      {
        "id": "6001"
      },
      {
        "id": "7002"
      },
      {
        "id": "6011",
        "mastery_level": "3"
      },
      {
        "id": "1340",
        "mastery_level": "5"
      },
      {
        "id": "7009",
        "mastery_level": "7"
      },
    ]
  },
  "5071": {
    "id": "5071",
    "name": "Decim, Chaos Incarnate",
    "commander": {
        "id": "234"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "6012"
      },
      {
        "id": "1327"
      },
      {
        "id": "1327"
      },
      {
        "id": "6011"
      },
      {
        "id": "6005"
      },
      {
        "id": "6001"
      },
      {
        "id": "6003"
      },
      {
        "id": "6008"
      },
      {
        "id": "1340"
      },
      {
        "id": "6011",
        "mastery_level": "2"
      },
      {
        "id": "2004",
        "mastery_level": "3"
      },
      {
        "id": "1340",
        "mastery_level": "5"
      },
      {
        "id": "6008",
        "mastery_level": "6"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
    ]
  },
  "5072": {
    "id": "5072",
    "name": "Scorched Lands",
    "commander": {
        "id": "235"
    },
    "deck": [
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "1311"
      },
      {
        "id": "1313"
      },
      {
        "id": "1319"
      },
      {
        "id": "1325"
      },
      {
        "id": "2004"
      },
      {
        "id": "6011"
      },
      {
        "id": "6010"
      },
      {
        "id": "6010"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "1318",
        "mastery_level": "5"
      },
      {
        "id": "1318",
        "mastery_level": "7"
      },
    ]
  },
  "5073": {
    "id": "5073",
    "name": "Dragon's Aerie",
    "commander": {
        "id": "236"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "5012"
      },
      {
        "id": "1011"
      },
      {
        "id": "1027"
      },
      {
        "id": "1027"
      },
      {
        "id": "2005"
      },
      {
        "id": "5011"
      },
      {
        "id": "1041"
      },
      {
        "id": "1040"
      },
      {
        "id": "1012",
        "mastery_level": "3"
      },
      {
        "id": "2002",
        "mastery_level": "5"
      },
      {
        "id": "1027",
        "mastery_level": "7"
      },
    ]
  },
  "5074": {
    "id": "5074",
    "name": "Ice Dragon's Realm",
    "commander": {
        "id": "237"
    },
    "deck": [
      {
        "id": "6012"
      },
      {
        "id": "5012"
      },
      {
        "id": "7012"
      },
      {
        "id": "2005"
      },
      {
        "id": "2005"
      },
      {
        "id": "5010"
      },
      {
        "id": "7010"
      },
      {
        "id": "1340"
      },
      {
        "id": "7008"
      },
      {
        "id": "5008"
      },
      {
        "id": "7010",
        "mastery_level": "3"
      },
      {
        "id": "5008",
        "mastery_level": "6"
      },
      {
        "id": "6009",
        "mastery_level": "7"
      },
    ]
  },
  "5075": {
    "id": "5075",
    "name": "War of Lava",
    "commander": {
        "id": "257"
    },
    "deck": [
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "11331"
      },
      {
        "id": "1326"
      },
      {
        "id": "6005"
      },
      {
        "id": "1325"
      },
      {
        "id": "2008"
      },
      {
        "id": "1341"
      },
      {
        "id": "1341"
      },
      {
        "id": "6000"
      },
      {
        "id": "6010",
        "mastery_level": "2"
      },
      {
        "id": "1327",
        "mastery_level": "3"
      },
      {
        "id": "6001",
        "mastery_level": "5"
      },
      {
        "id": "1341",
        "mastery_level": "6"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
    ]
  },
  "5076": {
    "id": "5076",
    "name": "Rising Fire",
    "commander": {
        "id": "257"
    },
    "deck": [
      {
        "id": "6012"
      },
      {
        "id": "2001"
      },
      {
        "id": "2008"
      },
      {
        "id": "2008"
      },
      {
        "id": "6015"
      },
      {
        "id": "1325"
      },
      {
        "id": "1325"
      },
      {
        "id": "6013"
      },
      {
        "id": "1343"
      },
      {
        "id": "1343"
      },
      {
        "id": "6010",
        "mastery_level": "2"
      },
      {
        "id": "6015",
        "mastery_level": "3"
      },
      {
        "id": "6013",
        "mastery_level": "5"
      },
      {
        "id": "7013",
        "mastery_level": "6"
      },
      {
        "id": "7013",
        "mastery_level": "7"
      },
    ]
  },
  "5077": {
    "id": "5077",
    "name": "Heat of Battle",
    "commander": {
        "id": "257"
    },
    "deck": [
      {
        "id": "1330"
      },
      {
        "id": "1330"
      },
      {
        "id": "1328"
      },
      {
        "id": "1328"
      },
      {
        "id": "6011"
      },
      {
        "id": "6015"
      },
      {
        "id": "6014"
      },
      {
        "id": "6002"
      },
      {
        "id": "1343"
      },
      {
        "id": "1343"
      },
      {
        "id": "6005",
        "mastery_level": "2"
      },
      {
        "id": "1327",
        "mastery_level": "3"
      },
      {
        "id": "6001",
        "mastery_level": "5"
      },
      {
        "id": "6024",
        "mastery_level": "6"
      },
      {
        "id": "6002",
        "mastery_level": "7"
      },
    ]
  },
  "5078": {
    "id": "5078",
    "name": "Melting Point",
    "commander": {
        "id": "257"
    },
    "deck": [
      {
        "id": "1331"
      },
      {
        "id": "1331"
      },
      {
        "id": "1331"
      },
      {
        "id": "1331"
      },
      {
        "id": "1331"
      },
      {
        "id": "1331"
      },
      {
        "id": "1341"
      },
      {
        "id": "1343"
      },
      {
        "id": "1343"
      },
      {
        "id": "1331",
        "mastery_level": "2"
      },
      {
        "id": "1331",
        "mastery_level": "3"
      },
      {
        "id": "6000",
        "mastery_level": "5"
      },
      {
        "id": "1340",
        "mastery_level": "6"
      },
      {
        "id": "1342",
        "mastery_level": "7"
      },
    ]
  },
  "5079": {
    "id": "5079",
    "name": "Into the Tundra",
    "commander": {
        "id": "261"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "2005"
      },
      {
        "id": "1017",
        "mastery_level": "2"
      },
      {
        "id": "5020",
        "mastery_level": "2"
      },
      {
        "id": "1010",
        "mastery_level": "3"
      },
      {
        "id": "5010",
        "mastery_level": "4"
      },
      {
        "id": "7004",
        "mastery_level": "5"
      },
      {
        "id": "5026",
        "mastery_level": "6"
      },
      {
        "id": "5019",
        "mastery_level": "7"
      },
    ]
  },
  "5080": {
    "id": "5080",
    "name": "Bright Lights",
    "commander": {
        "id": "262"
    },
    "deck": [
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "6006"
      },
      {
        "id": "6006"
      },
      {
        "id": "1010"
      },
      {
        "id": "6010"
      },
      {
        "id": "1010",
        "mastery_level": "2"
      },
      {
        "id": "7004",
        "mastery_level": "2"
      },
      {
        "id": "1010",
        "mastery_level": "3"
      },
      {
        "id": "5020",
        "mastery_level": "4"
      },
      {
        "id": "1028",
        "mastery_level": "5"
      },
      {
        "id": "1642",
        "mastery_level": "6"
      },
      {
        "id": "7026",
        "mastery_level": "7"
      },
    ]
  },
  "5081": {
    "id": "5081",
    "name": "Shadows on the Horizon",
    "commander": {
        "id": "261"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "7020"
      },
      {
        "id": "7020"
      },
      {
        "id": "5012",
        "mastery_level": "2"
      },
      {
        "id": "5020",
        "mastery_level": "2"
      },
      {
        "id": "1015",
        "mastery_level": "3"
      },
      {
        "id": "5025",
        "mastery_level": "4"
      },
      {
        "id": "7011",
        "mastery_level": "5"
      },
      {
        "id": "7027",
        "mastery_level": "6"
      },
      {
        "id": "5008",
        "mastery_level": "7"
      },
    ]
  },
  "5082": {
    "id": "5082",
    "name": "Dazed and Confused",
    "commander": {
        "id": "258"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1616"
      },
      {
        "id": "1616"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "1030"
      },
      {
        "id": "1030"
      },
      {
        "id": "1614",
        "mastery_level": "2"
      },
      {
        "id": "1027",
        "mastery_level": "2"
      },
      {
        "id": "1015",
        "mastery_level": "3"
      },
      {
        "id": "5025",
        "mastery_level": "4"
      },
      {
        "id": "2002",
        "mastery_level": "5"
      },
      {
        "id": "5003",
        "mastery_level": "6"
      },
      {
        "id": "1042",
        "mastery_level": "7"
      },
    ]
  },
  "5083": {
    "id": "5083",
    "name": "Big Flash, Big Beast",
    "commander": {
        "id": "262"
    },
    "deck": [
      {
        "id": "1017"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "5015"
      },
      {
        "id": "1017",
        "mastery_level": "2"
      },
      {
        "id": "5020",
        "mastery_level": "2"
      },
      {
        "id": "1012",
        "mastery_level": "3"
      },
      {
        "id": "1028",
        "mastery_level": "4"
      },
      {
        "id": "5010",
        "mastery_level": "5"
      },
      {
        "id": "5008",
        "mastery_level": "6"
      },
      {
        "id": "5000",
        "mastery_level": "7"
      },
    ]
  },
  "5084": {
    "id": "5084",
    "name": "Eureka!",
    "commander": {
        "id": "258"
    },
    "deck": [
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "6012"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1331"
      },
      {
        "id": "1010",
        "mastery_level": "2"
      },
      {
        "id": "7011",
        "mastery_level": "2"
      },
      {
        "id": "1015",
        "mastery_level": "3"
      },
      {
        "id": "2002",
        "mastery_level": "4"
      },
      {
        "id": "7011",
        "mastery_level": "5"
      },
      {
        "id": "6003",
        "mastery_level": "6"
      },
      {
        "id": "5001",
        "mastery_level": "7"
      },
    ]
  },
  "5085": {
    "id": "5085",
    "name": "Head Down and Fists Up",
    "commander": {
        "id": "263"
    },
    "deck": [
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "6022"
      },
      {
        "id": "7021"
      },
      {
        "id": "7021"
      },
      {
        "id": "7007",
        "mastery_level": "2"
      },
      {
        "id": "5020",
        "mastery_level": "2"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "5011",
        "mastery_level": "4"
      },
      {
        "id": "7024",
        "mastery_level": "5"
      },
      {
        "id": "7003",
        "mastery_level": "6"
      },
      {
        "id": "6009",
        "mastery_level": "7"
      },
    ]
  },
  "5086": {
    "id": "5086",
    "name": "Mad Man's Dance",
    "commander": {
        "id": "258"
    },
    "deck": [
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1315"
      },
      {
        "id": "5012"
      },
      {
        "id": "2000"
      },
      {
        "id": "5005"
      },
      {
        "id": "2000",
        "mastery_level": "2"
      },
      {
        "id": "5005",
        "mastery_level": "2"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "7021",
        "mastery_level": "4"
      },
      {
        "id": "1030",
        "mastery_level": "5"
      },
      {
        "id": "7023",
        "mastery_level": "6"
      },
      {
        "id": "7008",
        "mastery_level": "7"
      },
    ]
  },
  "5087": {
    "id": "5087",
    "name": "Light Signals",
    "commander": {
        "id": "261"
    },
    "deck": [
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "6012"
      },
      {
        "id": "1030"
      },
      {
        "id": "1010",
        "mastery_level": "2"
      },
      {
        "id": "2002",
        "mastery_level": "3"
      },
      {
        "id": "5012",
        "mastery_level": "4"
      },
      {
        "id": "5020",
        "mastery_level": "5"
      },
      {
        "id": "5013",
        "mastery_level": "6"
      },
      {
        "id": "5019",
        "mastery_level": "7"
      },
    ]
  },
  "5088": {
    "id": "5088",
    "name": "Hot on the Trail",
    "commander": {
        "id": "262"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "5025"
      },
      {
        "id": "1617",
        "mastery_level": "2"
      },
      {
        "id": "7004",
        "mastery_level": "3"
      },
      {
        "id": "1319",
        "mastery_level": "4"
      },
      {
        "id": "7011",
        "mastery_level": "5"
      },
      {
        "id": "1642",
        "mastery_level": "6"
      },
      {
        "id": "5003",
        "mastery_level": "7"
      },
    ]
  },
  "5089": {
    "id": "5089",
    "name": "Friends or Fiends",
    "commander": {
        "id": "261"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1330"
      },
      {
        "id": "1315",
        "mastery_level": "2"
      },
      {
        "id": "1328",
        "mastery_level": "3"
      },
      {
        "id": "7012",
        "mastery_level": "4"
      },
      {
        "id": "1325",
        "mastery_level": "5"
      },
      {
        "id": "6009",
        "mastery_level": "6"
      },
      {
        "id": "7008",
        "mastery_level": "7"
      },
    ]
  },
  "5090": {
    "id": "5090",
    "name": "Bigger and Brighter",
    "commander": {
        "id": "264"
    },
    "deck": [
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "1614"
      },
      {
        "id": "1614"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1032"
      },
      {
        "id": "7011",
        "mastery_level": "2"
      },
      {
        "id": "2010",
        "mastery_level": "3"
      },
      {
        "id": "5012",
        "mastery_level": "4"
      },
      {
        "id": "1328",
        "mastery_level": "5"
      },
      {
        "id": "5023",
        "mastery_level": "6"
      },
      {
        "id": "6003",
        "mastery_level": "7"
      },
    ]
  },
  "5091": {
    "id": "5091",
    "name": "Mad Man Club",
    "commander": {
        "id": "262"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "5022"
      },
      {
        "id": "1631"
      },
      {
        "id": "1010"
      },
      {
        "id": "1631",
        "mastery_level": "2"
      },
      {
        "id": "2001",
        "mastery_level": "3"
      },
      {
        "id": "1613",
        "mastery_level": "4"
      },
      {
        "id": "1628",
        "mastery_level": "5"
      },
      {
        "id": "7023",
        "mastery_level": "6"
      },
      {
        "id": "5019",
        "mastery_level": "7"
      },
    ]
  },
  "5092": {
    "id": "5092",
    "name": "Race for the Vapor",
    "commander": {
        "id": "264"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1315"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "5016"
      },
      {
        "id": "1629"
      },
      {
        "id": "1032",
        "mastery_level": "2"
      },
      {
        "id": "2010",
        "mastery_level": "3"
      },
      {
        "id": "6017",
        "mastery_level": "4"
      },
      {
        "id": "5016",
        "mastery_level": "5"
      },
      {
        "id": "2007",
        "mastery_level": "6"
      },
      {
        "id": "6013",
        "mastery_level": "7"
      },
    ]
  },
  "5093": {
    "id": "5093",
    "name": "For Science!",
    "commander": {
        "id": "259"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "5015"
      },
      {
        "id": "1012",
        "mastery_level": "2"
      },
      {
        "id": "5015",
        "mastery_level": "3"
      },
      {
        "id": "6022",
        "mastery_level": "4"
      },
      {
        "id": "5020",
        "mastery_level": "5"
      },
      {
        "id": "5008",
        "mastery_level": "6"
      },
      {
        "id": "7026",
        "mastery_level": "7"
      },
    ]
  },
  "5094": {
    "id": "5094",
    "name": "Connecting the Dots",
    "commander": {
        "id": "263"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "1019"
      },
      {
        "id": "7024"
      },
      {
        "id": "7007",
        "mastery_level": "2"
      },
      {
        "id": "6025",
        "mastery_level": "3"
      },
      {
        "id": "1613",
        "mastery_level": "4"
      },
      {
        "id": "6010",
        "mastery_level": "5"
      },
      {
        "id": "5023",
        "mastery_level": "6"
      },
      {
        "id": "2006",
        "mastery_level": "7"
      },
    ]
  },
  "5095": {
    "id": "5095",
    "name": "A Bold Request",
    "commander": {
        "id": "258"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "7006"
      },
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1632"
      },
      {
        "id": "1631",
        "mastery_level": "2"
      },
      {
        "id": "1332",
        "mastery_level": "3"
      },
      {
        "id": "1617",
        "mastery_level": "4"
      },
      {
        "id": "2001",
        "mastery_level": "5"
      },
      {
        "id": "7023",
        "mastery_level": "6"
      },
      {
        "id": "6009",
        "mastery_level": "7"
      },
    ]
  },
  "5096": {
    "id": "5096",
    "name": "Good Sport",
    "commander": {
        "id": "264"
    },
    "deck": [
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "5004"
      },
      {
        "id": "5004"
      },
      {
        "id": "5012",
        "mastery_level": "2"
      },
      {
        "id": "2005",
        "mastery_level": "3"
      },
      {
        "id": "1010",
        "mastery_level": "4"
      },
      {
        "id": "5005",
        "mastery_level": "5"
      },
      {
        "id": "7008",
        "mastery_level": "6"
      },
      {
        "id": "5013",
        "mastery_level": "7"
      },
    ]
  },
  "5097": {
    "id": "5097",
    "name": "Expected Results",
    "commander": {
        "id": "259"
    },
    "deck": [
      {
        "id": "1614"
      },
      {
        "id": "1614"
      },
      {
        "id": "1614"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1032"
      },
      {
        "id": "1030"
      },
      {
        "id": "5010",
        "mastery_level": "2"
      },
      {
        "id": "7021",
        "mastery_level": "3"
      },
      {
        "id": "5007",
        "mastery_level": "4"
      },
      {
        "id": "1030",
        "mastery_level": "5"
      },
      {
        "id": "5002",
        "mastery_level": "6"
      },
      {
        "id": "1640",
        "mastery_level": "7"
      },
    ]
  },
  "5098": {
    "id": "5098",
    "name": "Head Towards the Light",
    "commander": {
        "id": "264"
    },
    "deck": [
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "5015"
      },
      {
        "id": "6016"
      },
      {
        "id": "1028",
        "mastery_level": "2"
      },
      {
        "id": "5011",
        "mastery_level": "3"
      },
      {
        "id": "1019",
        "mastery_level": "4"
      },
      {
        "id": "5020",
        "mastery_level": "5"
      },
      {
        "id": "5008",
        "mastery_level": "6"
      },
      {
        "id": "5000",
        "mastery_level": "7"
      },
    ]
  },
  "5099": {
    "id": "5099",
    "name": "The Mother Load",
    "commander": {
        "id": "262"
    },
    "deck": [
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "6012"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "2000"
      },
      {
        "id": "1014"
      },
      {
        "id": "1616",
        "mastery_level": "2"
      },
      {
        "id": "7024",
        "mastery_level": "3"
      },
      {
        "id": "6022",
        "mastery_level": "4"
      },
      {
        "id": "7011",
        "mastery_level": "5"
      },
      {
        "id": "6026",
        "mastery_level": "6"
      },
      {
        "id": "5026",
        "mastery_level": "7"
      },
    ]
  },
  "51": {
    "id": "51",
    "name": "Into the Woods!",
    "commander": {
        "id": "201"
    },
    "deck": [
      {
        "id": "1600",
        "level": "2"
      },
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1603"
      },
      {
        "id": "1603"
      },
      {
        "id": "1603"
      },
      {
        "id": "1603",
        "level": "2"
      },
      {
        "id": "1603",
        "level": "2"
      },
      {
        "id": "1606"
      },
      {
        "id": "1606"
      },
      {
        "id": "1615",
        "mastery_level": "2"
      },
    ]
  },
  "5100": {
    "id": "5100",
    "name": "Enemy Territory",
    "commander": {
        "id": "263"
    },
    "deck": [
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "1315"
      },
      {
        "id": "7007"
      },
      {
        "id": "1613"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1315"
      },
      {
        "id": "5020"
      },
      {
        "id": "1629",
        "mastery_level": "2"
      },
      {
        "id": "5025",
        "mastery_level": "3"
      },
      {
        "id": "1017",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "7026",
        "mastery_level": "6"
      },
      {
        "id": "7025",
        "mastery_level": "7"
      },
    ]
  },
  "5101": {
    "id": "5101",
    "name": "Unwanted Attention",
    "commander": {
        "id": "264"
    },
    "deck": [
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "1614"
      },
      {
        "id": "5012"
      },
      {
        "id": "1314"
      },
      {
        "id": "5024"
      },
      {
        "id": "5010"
      },
      {
        "id": "1027",
        "mastery_level": "2"
      },
      {
        "id": "7011",
        "mastery_level": "3"
      },
      {
        "id": "6010",
        "mastery_level": "4"
      },
      {
        "id": "5004",
        "mastery_level": "5"
      },
      {
        "id": "1342",
        "mastery_level": "6"
      },
      {
        "id": "7027",
        "mastery_level": "7"
      },
    ]
  },
  "5102": {
    "id": "5102",
    "name": "Storms Brewing",
    "commander": {
        "id": "259"
    },
    "deck": [
      {
        "id": "1616"
      },
      {
        "id": "1616"
      },
      {
        "id": "1617"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1617"
      },
      {
        "id": "5025"
      },
      {
        "id": "7021"
      },
      {
        "id": "5020",
        "mastery_level": "2"
      },
      {
        "id": "1028",
        "mastery_level": "3"
      },
      {
        "id": "7004",
        "mastery_level": "4"
      },
      {
        "id": "1628",
        "mastery_level": "5"
      },
      {
        "id": "5001",
        "mastery_level": "6"
      },
      {
        "id": "1642",
        "mastery_level": "7"
      },
    ]
  },
  "5103": {
    "id": "5103",
    "name": "The Catalyst",
    "commander": {
        "id": "260"
    },
    "deck": [
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "5012"
      },
      {
        "id": "1010"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "5024"
      },
      {
        "id": "5011"
      },
      {
        "id": "2005",
        "mastery_level": "2"
      },
      {
        "id": "7024",
        "mastery_level": "3"
      },
      {
        "id": "2002",
        "mastery_level": "4"
      },
      {
        "id": "5000",
        "mastery_level": "5"
      },
      {
        "id": "6023",
        "mastery_level": "6"
      },
      {
        "id": "7008",
        "mastery_level": "7"
      },
    ]
  },
  "5104": {
    "id": "5104",
    "name": "Void Voyage",
    "commander": {
        "id": "266"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1317"
      },
      {
        "id": "6006"
      },
      {
        "id": "6006"
      },
      {
        "id": "6029"
      },
      {
        "id": "1319",
        "mastery_level": "2"
      },
      {
        "id": "2020",
        "mastery_level": "2"
      },
      {
        "id": "1313",
        "mastery_level": "3"
      },
      {
        "id": "2004",
        "mastery_level": "4"
      },
      {
        "id": "5021",
        "mastery_level": "5"
      },
      {
        "id": "6024",
        "mastery_level": "6"
      },
      {
        "id": "6027",
        "mastery_level": "7"
      },
    ]
  },
  "5105": {
    "id": "5105",
    "name": "Night Light",
    "commander": {
        "id": "267"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "7021"
      },
      {
        "id": "1315",
        "mastery_level": "2"
      },
      {
        "id": "7021",
        "mastery_level": "2"
      },
      {
        "id": "1616",
        "mastery_level": "3"
      },
      {
        "id": "6015",
        "mastery_level": "4"
      },
      {
        "id": "5028",
        "mastery_level": "5"
      },
      {
        "id": "5032",
        "mastery_level": "6"
      },
      {
        "id": "2022",
        "mastery_level": "7"
      },
    ]
  },
  "5106": {
    "id": "5106",
    "name": "Purple Fire",
    "commander": {
        "id": "266"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "6006"
      },
      {
        "id": "1017"
      },
      {
        "id": "5021"
      },
      {
        "id": "6021"
      },
      {
        "id": "6006",
        "mastery_level": "2"
      },
      {
        "id": "1327",
        "mastery_level": "2"
      },
      {
        "id": "6007",
        "mastery_level": "3"
      },
      {
        "id": "5004",
        "mastery_level": "4"
      },
      {
        "id": "5004",
        "mastery_level": "5"
      },
      {
        "id": "1342",
        "mastery_level": "6"
      },
      {
        "id": "2015",
        "mastery_level": "7"
      },
    ]
  },
  "5107": {
    "id": "5107",
    "name": "Vapor Source",
    "commander": {
        "id": "265"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1332"
      },
      {
        "id": "6029"
      },
      {
        "id": "1319",
        "mastery_level": "2"
      },
      {
        "id": "1632",
        "mastery_level": "2"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "1628",
        "mastery_level": "4"
      },
      {
        "id": "1330",
        "mastery_level": "5"
      },
      {
        "id": "1341",
        "mastery_level": "6"
      },
      {
        "id": "6009",
        "mastery_level": "7"
      },
    ]
  },
  "5108": {
    "id": "5108",
    "name": "Happy Accident",
    "commander": {
        "id": "268"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1327"
      },
      {
        "id": "6031"
      },
      {
        "id": "5012",
        "mastery_level": "2"
      },
      {
        "id": "1027",
        "mastery_level": "2"
      },
      {
        "id": "1311",
        "mastery_level": "3"
      },
      {
        "id": "1331",
        "mastery_level": "4"
      },
      {
        "id": "6029",
        "mastery_level": "5"
      },
      {
        "id": "5023",
        "mastery_level": "6"
      },
      {
        "id": "6003",
        "mastery_level": "7"
      },
    ]
  },
  "5109": {
    "id": "5109",
    "name": "Light My Fire",
    "commander": {
        "id": "267"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1329"
      },
      {
        "id": "1319",
        "mastery_level": "2"
      },
      {
        "id": "6015",
        "mastery_level": "2"
      },
      {
        "id": "1613",
        "mastery_level": "3"
      },
      {
        "id": "2020",
        "mastery_level": "4"
      },
      {
        "id": "1629",
        "mastery_level": "5"
      },
      {
        "id": "5029",
        "mastery_level": "6"
      },
      {
        "id": "5031",
        "mastery_level": "7"
      },
    ]
  },
  "5110": {
    "id": "5110",
    "name": "Unwanted Company",
    "commander": {
        "id": "265"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "1631"
      },
      {
        "id": "6017",
        "mastery_level": "2"
      },
      {
        "id": "2001",
        "mastery_level": "2"
      },
      {
        "id": "1312",
        "mastery_level": "3"
      },
      {
        "id": "6016",
        "mastery_level": "4"
      },
      {
        "id": "1325",
        "mastery_level": "5"
      },
      {
        "id": "6000",
        "mastery_level": "6"
      },
      {
        "id": "2015",
        "mastery_level": "7"
      },
    ]
  },
  "5111": {
    "id": "5111",
    "name": "Burn Marks",
    "commander": {
        "id": "268"
    },
    "deck": [
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "6029"
      },
      {
        "id": "5021"
      },
      {
        "id": "1314",
        "mastery_level": "2"
      },
      {
        "id": "5028",
        "mastery_level": "2"
      },
      {
        "id": "1017",
        "mastery_level": "3"
      },
      {
        "id": "6004",
        "mastery_level": "4"
      },
      {
        "id": "5021",
        "mastery_level": "5"
      },
      {
        "id": "1342",
        "mastery_level": "6"
      },
      {
        "id": "5029",
        "mastery_level": "7"
      },
    ]
  },
  "5112": {
    "id": "5112",
    "name": "Nuts and Bolts",
    "commander": {
        "id": "269"
    },
    "deck": [
      {
        "id": "6006"
      },
      {
        "id": "6006"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "2004"
      },
      {
        "id": "5015"
      },
      {
        "id": "1314",
        "mastery_level": "2"
      },
      {
        "id": "6031",
        "mastery_level": "2"
      },
      {
        "id": "1311",
        "mastery_level": "3"
      },
      {
        "id": "7004",
        "mastery_level": "4"
      },
      {
        "id": "6029",
        "mastery_level": "5"
      },
      {
        "id": "6014",
        "mastery_level": "6"
      },
      {
        "id": "1642",
        "mastery_level": "7"
      },
    ]
  },
  "5113": {
    "id": "5113",
    "name": "Results Under Fire",
    "commander": {
        "id": "266"
    },
    "deck": [
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "7017"
      },
      {
        "id": "1331"
      },
      {
        "id": "1314",
        "mastery_level": "2"
      },
      {
        "id": "2002",
        "mastery_level": "3"
      },
      {
        "id": "1311",
        "mastery_level": "4"
      },
      {
        "id": "7005",
        "mastery_level": "5"
      },
      {
        "id": "6003",
        "mastery_level": "6"
      },
      {
        "id": "5023",
        "mastery_level": "7"
      },
    ]
  },
  "5114": {
    "id": "5114",
    "name": "Void Emerging",
    "commander": {
        "id": "267"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "5015"
      },
      {
        "id": "7007",
        "mastery_level": "2"
      },
      {
        "id": "7021",
        "mastery_level": "3"
      },
      {
        "id": "1012",
        "mastery_level": "4"
      },
      {
        "id": "7004",
        "mastery_level": "5"
      },
      {
        "id": "6018",
        "mastery_level": "6"
      },
      {
        "id": "5031",
        "mastery_level": "7"
      },
    ]
  },
  "5115": {
    "id": "5115",
    "name": "Note Taking",
    "commander": {
        "id": "268"
    },
    "deck": [
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1326"
      },
      {
        "id": "7021"
      },
      {
        "id": "1329",
        "mastery_level": "2"
      },
      {
        "id": "2004",
        "mastery_level": "3"
      },
      {
        "id": "5017",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "2022",
        "mastery_level": "6"
      },
      {
        "id": "5019",
        "mastery_level": "7"
      },
    ]
  },
  "5116": {
    "id": "5116",
    "name": "Being Watched",
    "commander": {
        "id": "269"
    },
    "deck": [
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "6011"
      },
      {
        "id": "2002"
      },
      {
        "id": "1326",
        "mastery_level": "2"
      },
      {
        "id": "1032",
        "mastery_level": "3"
      },
      {
        "id": "1010",
        "mastery_level": "4"
      },
      {
        "id": "2008",
        "mastery_level": "5"
      },
      {
        "id": "5019",
        "mastery_level": "6"
      },
      {
        "id": "5002",
        "mastery_level": "7"
      },
    ]
  },
  "5117": {
    "id": "5117",
    "name": "Unseen Company",
    "commander": {
        "id": "265"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "6029"
      },
      {
        "id": "1311",
        "mastery_level": "2"
      },
      {
        "id": "1632",
        "mastery_level": "3"
      },
      {
        "id": "1319",
        "mastery_level": "4"
      },
      {
        "id": "1332",
        "mastery_level": "5"
      },
      {
        "id": "6009",
        "mastery_level": "6"
      },
      {
        "id": "6000",
        "mastery_level": "7"
      },
    ]
  },
  "5118": {
    "id": "5118",
    "name": "Nerd Alert",
    "commander": {
        "id": "269"
    },
    "deck": [
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "5004"
      },
      {
        "id": "1311",
        "mastery_level": "2"
      },
      {
        "id": "2004",
        "mastery_level": "3"
      },
      {
        "id": "6006",
        "mastery_level": "4"
      },
      {
        "id": "5030",
        "mastery_level": "5"
      },
      {
        "id": "1343",
        "mastery_level": "6"
      },
      {
        "id": "2006",
        "mastery_level": "7"
      },
    ]
  },
  "5119": {
    "id": "5119",
    "name": "The Lost",
    "commander": {
        "id": "270"
    },
    "deck": [
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1032"
      },
      {
        "id": "2008",
        "mastery_level": "2"
      },
      {
        "id": "2010",
        "mastery_level": "3"
      },
      {
        "id": "6017",
        "mastery_level": "4"
      },
      {
        "id": "6021",
        "mastery_level": "5"
      },
      {
        "id": "6013",
        "mastery_level": "6"
      },
      {
        "id": "6028",
        "mastery_level": "7"
      },
    ]
  },
  "5120": {
    "id": "5120",
    "name": "But a Scratch",
    "commander": {
        "id": "266"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1311"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "6011"
      },
      {
        "id": "6011"
      },
      {
        "id": "6011",
        "mastery_level": "2"
      },
      {
        "id": "6011",
        "mastery_level": "3"
      },
      {
        "id": "1319",
        "mastery_level": "4"
      },
      {
        "id": "6011",
        "mastery_level": "5"
      },
      {
        "id": "1342",
        "mastery_level": "6"
      },
      {
        "id": "6003",
        "mastery_level": "7"
      },
    ]
  },
  "5121": {
    "id": "5121",
    "name": "Gravestone Manor",
    "commander": {
        "id": "267"
    },
    "deck": [
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1329"
      },
      {
        "id": "7024"
      },
      {
        "id": "6015",
        "mastery_level": "2"
      },
      {
        "id": "5021",
        "mastery_level": "3"
      },
      {
        "id": "1017",
        "mastery_level": "4"
      },
      {
        "id": "1629",
        "mastery_level": "5"
      },
      {
        "id": "2022",
        "mastery_level": "6"
      },
      {
        "id": "5013",
        "mastery_level": "7"
      },
    ]
  },
  "5122": {
    "id": "5122",
    "name": "Something in the Water",
    "commander": {
        "id": "270"
    },
    "deck": [
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "6006"
      },
      {
        "id": "6006"
      },
      {
        "id": "1332"
      },
      {
        "id": "6021",
        "mastery_level": "2"
      },
      {
        "id": "1331",
        "mastery_level": "3"
      },
      {
        "id": "1314",
        "mastery_level": "4"
      },
      {
        "id": "2012",
        "mastery_level": "5"
      },
      {
        "id": "6018",
        "mastery_level": "6"
      },
      {
        "id": "6028",
        "mastery_level": "7"
      },
    ]
  },
  "5123": {
    "id": "5123",
    "name": "Finding Trouble",
    "commander": {
        "id": "268"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "2020"
      },
      {
        "id": "1012",
        "mastery_level": "2"
      },
      {
        "id": "5015",
        "mastery_level": "3"
      },
      {
        "id": "1319",
        "mastery_level": "4"
      },
      {
        "id": "2020",
        "mastery_level": "5"
      },
      {
        "id": "5031",
        "mastery_level": "6"
      },
      {
        "id": "5032",
        "mastery_level": "7"
      },
    ]
  },
  "5124": {
    "id": "5124",
    "name": "Scanner Darkly ",
    "commander": {
        "id": "265"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "5024"
      },
      {
        "id": "7012",
        "mastery_level": "2"
      },
      {
        "id": "7010",
        "mastery_level": "3"
      },
      {
        "id": "1315",
        "mastery_level": "4"
      },
      {
        "id": "2003",
        "mastery_level": "5"
      },
      {
        "id": "6009",
        "mastery_level": "6"
      },
      {
        "id": "1640",
        "mastery_level": "7"
      },
    ]
  },
  "5125": {
    "id": "5125",
    "name": "Revenge of the Nerds",
    "commander": {
        "id": "270"
    },
    "deck": [
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1311"
      },
      {
        "id": "2019"
      },
      {
        "id": "7020"
      },
      {
        "id": "7022",
        "mastery_level": "2"
      },
      {
        "id": "7016",
        "mastery_level": "3"
      },
      {
        "id": "7022",
        "mastery_level": "4"
      },
      {
        "id": "2011",
        "mastery_level": "5"
      },
      {
        "id": "1643",
        "mastery_level": "6"
      },
      {
        "id": "1043",
        "mastery_level": "7"
      },
    ]
  },
  "5126": {
    "id": "5126",
    "name": "Candy Shop",
    "commander": {
        "id": "269"
    },
    "deck": [
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1319"
      },
      {
        "id": "1616"
      },
      {
        "id": "1616"
      },
      {
        "id": "6031"
      },
      {
        "id": "6031"
      },
      {
        "id": "1314",
        "mastery_level": "2"
      },
      {
        "id": "6016",
        "mastery_level": "3"
      },
      {
        "id": "6007",
        "mastery_level": "4"
      },
      {
        "id": "2020",
        "mastery_level": "5"
      },
      {
        "id": "6032",
        "mastery_level": "6"
      },
      {
        "id": "6003",
        "mastery_level": "7"
      },
    ]
  },
  "5127": {
    "id": "5127",
    "name": "Dark Gardens",
    "commander": {
        "id": "270"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1314"
      },
      {
        "id": "1319"
      },
      {
        "id": "1331"
      },
      {
        "id": "1332"
      },
      {
        "id": "6021",
        "mastery_level": "2"
      },
      {
        "id": "6029",
        "mastery_level": "3"
      },
      {
        "id": "1632",
        "mastery_level": "4"
      },
      {
        "id": "1632",
        "mastery_level": "5"
      },
      {
        "id": "6030",
        "mastery_level": "6"
      },
      {
        "id": "6024",
        "mastery_level": "7"
      },
    ]
  },
  "5128": {
    "id": "5128",
    "name": "Clearing the Air",
    "commander": {
        "id": "271"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "5021"
      },
      {
        "id": "6016"
      },
      {
        "id": "1332",
        "mastery_level": "2"
      },
      {
        "id": "6029",
        "mastery_level": "3"
      },
      {
        "id": "1331",
        "mastery_level": "4"
      },
      {
        "id": "6032",
        "mastery_level": "5"
      },
      {
        "id": "1342",
        "mastery_level": "6"
      },
      {
        "id": "6003",
        "mastery_level": "7"
      },
    ]
  },
  "5129": {
    "id": "5129",
    "name": "Introspection",
    "commander": {
        "id": "272"
    },
    "deck": [
      {
        "id": "5022"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7034"
      },
      {
        "id": "5022",
        "mastery_level": "2"
      },
      {
        "id": "5030",
        "mastery_level": "2"
      },
      {
        "id": "5006",
        "mastery_level": "3"
      },
      {
        "id": "1328",
        "mastery_level": "4"
      },
      {
        "id": "5004",
        "mastery_level": "5"
      },
      {
        "id": "5034",
        "mastery_level": "6"
      },
      {
        "id": "6033",
        "mastery_level": "7"
      },
    ]
  },
  "5130": {
    "id": "5130",
    "name": "Between Friends",
    "commander": {
        "id": "273"
    },
    "deck": [
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "7012"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1031"
      },
      {
        "id": "1012",
        "mastery_level": "2"
      },
      {
        "id": "2009",
        "mastery_level": "2"
      },
      {
        "id": "7017",
        "mastery_level": "3"
      },
      {
        "id": "7029",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "1643",
        "mastery_level": "6"
      },
      {
        "id": "1042",
        "mastery_level": "7"
      },
    ]
  },
  "5131": {
    "id": "5131",
    "name": "Fire and Ice",
    "commander": {
        "id": "272"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "1015"
      },
      {
        "id": "6034"
      },
      {
        "id": "1030"
      },
      {
        "id": "1614",
        "mastery_level": "2"
      },
      {
        "id": "1629",
        "mastery_level": "2"
      },
      {
        "id": "1613",
        "mastery_level": "3"
      },
      {
        "id": "7034",
        "mastery_level": "4"
      },
      {
        "id": "5011",
        "mastery_level": "5"
      },
      {
        "id": "7023",
        "mastery_level": "6"
      },
      {
        "id": "7032",
        "mastery_level": "7"
      },
    ]
  },
  "5132": {
    "id": "5132",
    "name": "Snail Mail",
    "commander": {
        "id": "274"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "6022"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "1027"
      },
      {
        "id": "2012"
      },
      {
        "id": "1017",
        "mastery_level": "2"
      },
      {
        "id": "5005",
        "mastery_level": "2"
      },
      {
        "id": "5017",
        "mastery_level": "3"
      },
      {
        "id": "7024",
        "mastery_level": "4"
      },
      {
        "id": "1031",
        "mastery_level": "5"
      },
      {
        "id": "1343",
        "mastery_level": "6"
      },
      {
        "id": "1041",
        "mastery_level": "7"
      },
    ]
  },
  "5133": {
    "id": "5133",
    "name": "Lost Packages",
    "commander": {
        "id": "273"
    },
    "deck": [
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "1616"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "7029"
      },
      {
        "id": "1012",
        "mastery_level": "2"
      },
      {
        "id": "5016",
        "mastery_level": "2"
      },
      {
        "id": "1014",
        "mastery_level": "3"
      },
      {
        "id": "1026",
        "mastery_level": "4"
      },
      {
        "id": "1028",
        "mastery_level": "5"
      },
      {
        "id": "5003",
        "mastery_level": "6"
      },
      {
        "id": "5027",
        "mastery_level": "7"
      },
    ]
  },
  "5134": {
    "id": "5134",
    "name": "Flight Delays",
    "commander": {
        "id": "275"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "1619"
      },
      {
        "id": "1619"
      },
      {
        "id": "2002"
      },
      {
        "id": "1015",
        "mastery_level": "2"
      },
      {
        "id": "7034",
        "mastery_level": "2"
      },
      {
        "id": "1613",
        "mastery_level": "3"
      },
      {
        "id": "1030",
        "mastery_level": "4"
      },
      {
        "id": "7011",
        "mastery_level": "5"
      },
      {
        "id": "2007",
        "mastery_level": "6"
      },
      {
        "id": "7032",
        "mastery_level": "7"
      },
    ]
  },
  "5135": {
    "id": "5135",
    "name": "Second Wind",
    "commander": {
        "id": "275"
    },
    "deck": [
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "5007"
      },
      {
        "id": "1326"
      },
      {
        "id": "1327"
      },
      {
        "id": "5007",
        "mastery_level": "2"
      },
      {
        "id": "1025",
        "mastery_level": "2"
      },
      {
        "id": "5017",
        "mastery_level": "3"
      },
      {
        "id": "1030",
        "mastery_level": "4"
      },
      {
        "id": "6010",
        "mastery_level": "5"
      },
      {
        "id": "6026",
        "mastery_level": "6"
      },
      {
        "id": "5031",
        "mastery_level": "7"
      },
    ]
  },
  "5136": {
    "id": "5136",
    "name": "Beacon of Hope",
    "commander": {
        "id": "272"
    },
    "deck": [
      {
        "id": "7022"
      },
      {
        "id": "7022"
      },
      {
        "id": "7022"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1027"
      },
      {
        "id": "7016"
      },
      {
        "id": "1616",
        "mastery_level": "2"
      },
      {
        "id": "2014",
        "mastery_level": "2"
      },
      {
        "id": "7022",
        "mastery_level": "3"
      },
      {
        "id": "2011",
        "mastery_level": "4"
      },
      {
        "id": "7020",
        "mastery_level": "5"
      },
      {
        "id": "2013",
        "mastery_level": "6"
      },
      {
        "id": "7027",
        "mastery_level": "7"
      },
    ]
  },
  "5137": {
    "id": "5137",
    "name": "To the Queen",
    "commander": {
        "id": "273"
    },
    "deck": [
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "5007"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "5016"
      },
      {
        "id": "5007",
        "mastery_level": "2"
      },
      {
        "id": "1025",
        "mastery_level": "3"
      },
      {
        "id": "1014",
        "mastery_level": "4"
      },
      {
        "id": "5010",
        "mastery_level": "5"
      },
      {
        "id": "5002",
        "mastery_level": "6"
      },
      {
        "id": "5018",
        "mastery_level": "7"
      },
    ]
  },
  "5138": {
    "id": "5138",
    "name": "Audience Granted",
    "commander": {
        "id": "272"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "5021"
      },
      {
        "id": "1018",
        "mastery_level": "2"
      },
      {
        "id": "7011",
        "mastery_level": "3"
      },
      {
        "id": "1613",
        "mastery_level": "4"
      },
      {
        "id": "5010",
        "mastery_level": "5"
      },
      {
        "id": "5023",
        "mastery_level": "6"
      },
      {
        "id": "7008",
        "mastery_level": "7"
      },
    ]
  },
  "5139": {
    "id": "5139",
    "name": "To Business",
    "commander": {
        "id": "273"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1615"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1028"
      },
      {
        "id": "1031"
      },
      {
        "id": "1014",
        "mastery_level": "2"
      },
      {
        "id": "5020",
        "mastery_level": "3"
      },
      {
        "id": "1615",
        "mastery_level": "4"
      },
      {
        "id": "1025",
        "mastery_level": "5"
      },
      {
        "id": "1041",
        "mastery_level": "6"
      },
      {
        "id": "7000",
        "mastery_level": "7"
      },
    ]
  },
  "5140": {
    "id": "5140",
    "name": "Dark Shadows",
    "commander": {
        "id": "276"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "6006"
      },
      {
        "id": "6006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "2012"
      },
      {
        "id": "6015"
      },
      {
        "id": "7015",
        "mastery_level": "2"
      },
      {
        "id": "7005",
        "mastery_level": "2"
      },
      {
        "id": "1630",
        "mastery_level": "3"
      },
      {
        "id": "7006",
        "mastery_level": "4"
      },
      {
        "id": "1629",
        "mastery_level": "5"
      },
      {
        "id": "7025",
        "mastery_level": "6"
      },
      {
        "id": "6024",
        "mastery_level": "7"
      },
    ]
  },
  "5141": {
    "id": "5141",
    "name": "Sleep Deprived",
    "commander": {
        "id": "274"
    },
    "deck": [
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "5021"
      },
      {
        "id": "5030"
      },
      {
        "id": "5025",
        "mastery_level": "2"
      },
      {
        "id": "5010",
        "mastery_level": "2"
      },
      {
        "id": "5005",
        "mastery_level": "3"
      },
      {
        "id": "5012",
        "mastery_level": "4"
      },
      {
        "id": "5004",
        "mastery_level": "5"
      },
      {
        "id": "5009",
        "mastery_level": "6"
      },
      {
        "id": "6023",
        "mastery_level": "7"
      },
    ]
  },
  "5142": {
    "id": "5142",
    "name": "Airship Ahead",
    "commander": {
        "id": "275"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1032"
      },
      {
        "id": "1315",
        "mastery_level": "2"
      },
      {
        "id": "2010",
        "mastery_level": "3"
      },
      {
        "id": "1014",
        "mastery_level": "4"
      },
      {
        "id": "5016",
        "mastery_level": "5"
      },
      {
        "id": "6002",
        "mastery_level": "6"
      },
      {
        "id": "2007",
        "mastery_level": "7"
      },
    ]
  },
  "5143": {
    "id": "5143",
    "name": "What Hides",
    "commander": {
        "id": "276"
    },
    "deck": [
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "2002"
      },
      {
        "id": "6012",
        "mastery_level": "2"
      },
      {
        "id": "1329",
        "mastery_level": "3"
      },
      {
        "id": "1613",
        "mastery_level": "4"
      },
      {
        "id": "6011",
        "mastery_level": "5"
      },
      {
        "id": "5001",
        "mastery_level": "6"
      },
      {
        "id": "6002",
        "mastery_level": "7"
      },
    ]
  },
  "5144": {
    "id": "5144",
    "name": "Signs from Home",
    "commander": {
        "id": "273"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "1014"
      },
      {
        "id": "6034"
      },
      {
        "id": "1628",
        "mastery_level": "2"
      },
      {
        "id": "1629",
        "mastery_level": "3"
      },
      {
        "id": "1613",
        "mastery_level": "4"
      },
      {
        "id": "6015",
        "mastery_level": "5"
      },
      {
        "id": "6009",
        "mastery_level": "6"
      },
      {
        "id": "7014",
        "mastery_level": "7"
      },
    ]
  },
  "5145": {
    "id": "5145",
    "name": "A Familiar Face",
    "commander": {
        "id": "276"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "1613"
      },
      {
        "id": "1031"
      },
      {
        "id": "7021"
      },
      {
        "id": "7005",
        "mastery_level": "2"
      },
      {
        "id": "1327",
        "mastery_level": "3"
      },
      {
        "id": "1613",
        "mastery_level": "4"
      },
      {
        "id": "1030",
        "mastery_level": "5"
      },
      {
        "id": "1640",
        "mastery_level": "6"
      },
      {
        "id": "5031",
        "mastery_level": "7"
      },
    ]
  },
  "5146": {
    "id": "5146",
    "name": "A Lost Mind",
    "commander": {
        "id": "277"
    },
    "deck": [
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "2011"
      },
      {
        "id": "5028"
      },
      {
        "id": "1026",
        "mastery_level": "2"
      },
      {
        "id": "2014",
        "mastery_level": "2"
      },
      {
        "id": "7024",
        "mastery_level": "3"
      },
      {
        "id": "1019",
        "mastery_level": "4"
      },
      {
        "id": "1026",
        "mastery_level": "5"
      },
      {
        "id": "7026",
        "mastery_level": "6"
      },
      {
        "id": "7032",
        "mastery_level": "7"
      },
    ]
  },
  "5147": {
    "id": "5147",
    "name": "Heading Home",
    "commander": {
        "id": "274"
    },
    "deck": [
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1615"
      },
      {
        "id": "1615"
      },
      {
        "id": "2023"
      },
      {
        "id": "2020"
      },
      {
        "id": "2024",
        "mastery_level": "2"
      },
      {
        "id": "2004",
        "mastery_level": "2"
      },
      {
        "id": "6010",
        "mastery_level": "3"
      },
      {
        "id": "1628",
        "mastery_level": "4"
      },
      {
        "id": "2004",
        "mastery_level": "5"
      },
      {
        "id": "7009",
        "mastery_level": "6"
      },
      {
        "id": "5037",
        "mastery_level": "7"
      },
    ]
  },
  "5148": {
    "id": "5148",
    "name": "Listening Ears",
    "commander": {
        "id": "275"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "7022"
      },
      {
        "id": "7022"
      },
      {
        "id": "7022"
      },
      {
        "id": "5022"
      },
      {
        "id": "7020"
      },
      {
        "id": "5012",
        "mastery_level": "2"
      },
      {
        "id": "7016",
        "mastery_level": "3"
      },
      {
        "id": "1018",
        "mastery_level": "4"
      },
      {
        "id": "2014",
        "mastery_level": "5"
      },
      {
        "id": "1043",
        "mastery_level": "6"
      },
      {
        "id": "1342",
        "mastery_level": "7"
      },
    ]
  },
  "5149": {
    "id": "5149",
    "name": "Strange Fiends",
    "commander": {
        "id": "276"
    },
    "deck": [
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "7021"
      },
      {
        "id": "2009"
      },
      {
        "id": "1325",
        "mastery_level": "2"
      },
      {
        "id": "6015",
        "mastery_level": "3"
      },
      {
        "id": "1613",
        "mastery_level": "4"
      },
      {
        "id": "2009",
        "mastery_level": "5"
      },
      {
        "id": "6013",
        "mastery_level": "6"
      },
      {
        "id": "6002",
        "mastery_level": "7"
      },
    ]
  },
  "5150": {
    "id": "5150",
    "name": "Butterfingers",
    "commander": {
        "id": "274"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1615"
      },
      {
        "id": "1615"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "5015"
      },
      {
        "id": "1028"
      },
      {
        "id": "5020",
        "mastery_level": "2"
      },
      {
        "id": "1014",
        "mastery_level": "2"
      },
      {
        "id": "6005",
        "mastery_level": "3"
      },
      {
        "id": "1615",
        "mastery_level": "4"
      },
      {
        "id": "1031",
        "mastery_level": "5"
      },
      {
        "id": "5008",
        "mastery_level": "6"
      },
      {
        "id": "5003",
        "mastery_level": "7"
      },
    ]
  },
  "5151": {
    "id": "5151",
    "name": "Bad Boy",
    "commander": {
        "id": "272"
    },
    "deck": [
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1026"
      },
      {
        "id": "5011",
        "mastery_level": "2"
      },
      {
        "id": "5021",
        "mastery_level": "3"
      },
      {
        "id": "1017",
        "mastery_level": "4"
      },
      {
        "id": "2005",
        "mastery_level": "5"
      },
      {
        "id": "5000",
        "mastery_level": "6"
      },
      {
        "id": "2006",
        "mastery_level": "7"
      },
    ]
  },
  "5152": {
    "id": "5152",
    "name": "Grave News",
    "commander": {
        "id": "277"
    },
    "deck": [
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1019"
      },
      {
        "id": "2009"
      },
      {
        "id": "5030"
      },
      {
        "id": "7024",
        "mastery_level": "2"
      },
      {
        "id": "1330",
        "mastery_level": "3"
      },
      {
        "id": "7029",
        "mastery_level": "4"
      },
      {
        "id": "2024",
        "mastery_level": "5"
      },
      {
        "id": "1643",
        "mastery_level": "6"
      },
      {
        "id": "2022",
        "mastery_level": "7"
      },
    ]
  },
  "5153": {
    "id": "5153",
    "name": "Hard Decisions",
    "commander": {
        "id": "278"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "1019"
      },
      {
        "id": "1031"
      },
      {
        "id": "1030"
      },
      {
        "id": "1025",
        "mastery_level": "2"
      },
      {
        "id": "1030",
        "mastery_level": "3"
      },
      {
        "id": "1031",
        "mastery_level": "4"
      },
      {
        "id": "1327",
        "mastery_level": "5"
      },
      {
        "id": "1042",
        "mastery_level": "6"
      },
      {
        "id": "5003",
        "mastery_level": "7"
      },
    ]
  },
  "5154": {
    "id": "5154",
    "name": "Call For Help",
    "commander": {
        "id": "243"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "5021"
      },
      {
        "id": "5017"
      },
      {
        "id": "1012"
      },
      {
        "id": "1017",
        "level": "1",
        "mastery_level": "2"
      },
      {
        "id": "2002",
        "level": "1",
        "mastery_level": "2"
      },
      {
        "id": "5007",
        "level": "1",
        "mastery_level": "3"
      },
      {
        "id": "2002",
        "level": "1",
        "mastery_level": "4"
      },
      {
        "id": "1030",
        "level": "1",
        "mastery_level": "5"
      },
      {
        "id": "5013",
        "level": "1",
        "mastery_level": "6"
      },
      {
        "id": "5014",
        "level": "1",
        "mastery_level": "7"
      },
    ]
  },
  "5155": {
    "id": "5155",
    "name": "Training Day",
    "commander": {
        "id": "244"
    },
    "deck": [
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "1617"
      },
      {
        "id": "1619"
      },
      {
        "id": "7021"
      },
      {
        "id": "1328"
      },
      {
        "id": "1610",
        "mastery_level": "2"
      },
      {
        "id": "2009",
        "mastery_level": "2"
      },
      {
        "id": "1619",
        "mastery_level": "3"
      },
      {
        "id": "7004",
        "mastery_level": "4"
      },
      {
        "id": "2009",
        "mastery_level": "5"
      },
      {
        "id": "11641",
        "mastery_level": "6"
      },
      {
        "id": "7027",
        "mastery_level": "7"
      },
    ]
  },
  "5156": {
    "id": "5156",
    "name": "Sharpshooter",
    "commander": {
        "id": "238"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1615"
      },
      {
        "id": "1615"
      },
      {
        "id": "1313"
      },
      {
        "id": "5028"
      },
      {
        "id": "1631"
      },
      {
        "id": "1030"
      },
      {
        "id": "1313",
        "mastery_level": "2"
      },
      {
        "id": "1631",
        "mastery_level": "2"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "2008",
        "mastery_level": "4"
      },
      {
        "id": "2008",
        "mastery_level": "5"
      },
      {
        "id": "6000",
        "mastery_level": "6"
      },
      {
        "id": "7031",
        "mastery_level": "7"
      },
    ]
  },
  "5157": {
    "id": "5157",
    "name": "Eagle Eye",
    "commander": {
        "id": "243"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "5022"
      },
      {
        "id": "1311"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1315"
      },
      {
        "id": "5041"
      },
      {
        "id": "5022",
        "mastery_level": "2"
      },
      {
        "id": "6011",
        "mastery_level": "2"
      },
      {
        "id": "6017",
        "mastery_level": "3"
      },
      {
        "id": "5021",
        "mastery_level": "4"
      },
      {
        "id": "2008",
        "mastery_level": "5"
      },
      {
        "id": "2028",
        "mastery_level": "6"
      },
      {
        "id": "5034",
        "mastery_level": "7"
      },
    ]
  },
  "5158": {
    "id": "5158",
    "name": "Beginner's Luck",
    "commander": {
        "id": "242"
    },
    "deck": [
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "1616"
      },
      {
        "id": "6017"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1012"
      },
      {
        "id": "7041"
      },
      {
        "id": "7038"
      },
      {
        "id": "1012",
        "mastery_level": "2"
      },
      {
        "id": "1325",
        "mastery_level": "2"
      },
      {
        "id": "1012",
        "mastery_level": "3"
      },
      {
        "id": "1325",
        "mastery_level": "4"
      },
      {
        "id": "2008",
        "mastery_level": "5"
      },
      {
        "id": "5038",
        "mastery_level": "6"
      },
      {
        "id": "6041",
        "mastery_level": "7"
      },
    ]
  },
  "5159": {
    "id": "5159",
    "name": "Love at First Sight",
    "commander": {
        "id": "287"
    },
    "deck": [
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "6006"
      },
      {
        "id": "6006"
      },
      {
        "id": "5017"
      },
      {
        "id": "2029"
      },
      {
        "id": "7029"
      },
      {
        "id": "7011"
      },
      {
        "id": "1010",
        "mastery_level": "2"
      },
      {
        "id": "1629",
        "mastery_level": "2"
      },
      {
        "id": "1010",
        "mastery_level": "3"
      },
      {
        "id": "2009",
        "mastery_level": "4"
      },
      {
        "id": "2008",
        "mastery_level": "5"
      },
      {
        "id": "7036",
        "mastery_level": "6"
      },
      {
        "id": "7019",
        "mastery_level": "7"
      },
    ]
  },
  "5160": {
    "id": "5160",
    "name": "Burning the Furnace ",
    "commander": {
        "id": "244"
    },
    "deck": [
      {
        "id": "1319"
      },
      {
        "id": "1311"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613"
      },
      {
        "id": "1617"
      },
      {
        "id": "7021"
      },
      {
        "id": "1312",
        "mastery_level": "2"
      },
      {
        "id": "1629",
        "mastery_level": "2"
      },
      {
        "id": "1312",
        "mastery_level": "3"
      },
      {
        "id": "7021",
        "mastery_level": "4"
      },
      {
        "id": "2009",
        "mastery_level": "5"
      },
      {
        "id": "2022",
        "mastery_level": "6"
      },
      {
        "id": "7040",
        "mastery_level": "7"
      },
    ]
  },
  "5161": {
    "id": "5161",
    "name": "Apprentice and Master",
    "commander": {
        "id": "243"
    },
    "deck": [
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1315"
      },
      {
        "id": "6012"
      },
      {
        "id": "1326"
      },
      {
        "id": "1313",
        "mastery_level": "2"
      },
      {
        "id": "5004",
        "mastery_level": "2"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "6036",
        "mastery_level": "4"
      },
      {
        "id": "6015",
        "mastery_level": "5"
      },
      {
        "id": "5034",
        "mastery_level": "6"
      },
      {
        "id": "6014",
        "mastery_level": "7"
      },
    ]
  },
  "5162": {
    "id": "5162",
    "name": "Burning Passion",
    "commander": {
        "id": "238"
    },
    "deck": [
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "5028"
      },
      {
        "id": "1026"
      },
      {
        "id": "1313",
        "mastery_level": "2"
      },
      {
        "id": "5025",
        "mastery_level": "3"
      },
      {
        "id": "1315",
        "mastery_level": "4"
      },
      {
        "id": "1027",
        "mastery_level": "5"
      },
      {
        "id": "5027",
        "mastery_level": "6"
      },
      {
        "id": "5002",
        "mastery_level": "7"
      },
    ]
  },
  "5163": {
    "id": "5163",
    "name": "Practice Makes Perfect",
    "commander": {
        "id": "242"
    },
    "deck": [
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1311"
      },
      {
        "id": "1318"
      },
      {
        "id": "1629"
      },
      {
        "id": "1631"
      },
      {
        "id": "1311",
        "mastery_level": "2"
      },
      {
        "id": "1030",
        "mastery_level": "3"
      },
      {
        "id": "5007",
        "mastery_level": "4"
      },
      {
        "id": "1030",
        "mastery_level": "5"
      },
      {
        "id": "5003",
        "mastery_level": "6"
      },
      {
        "id": "5042",
        "mastery_level": "7"
      },
    ]
  },
  "5164": {
    "id": "5164",
    "name": "Controlled Burn",
    "commander": {
        "id": "245"
    },
    "deck": [
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "2004"
      },
      {
        "id": "2004"
      },
      {
        "id": "6025"
      },
      {
        "id": "5012",
        "mastery_level": "2"
      },
      {
        "id": "1326",
        "mastery_level": "3"
      },
      {
        "id": "6006",
        "mastery_level": "4"
      },
      {
        "id": "6010",
        "mastery_level": "5"
      },
      {
        "id": "6035",
        "mastery_level": "6"
      },
      {
        "id": "5023",
        "mastery_level": "7"
      },
    ]
  },
  "5165": {
    "id": "5165",
    "name": "Meditation Master",
    "commander": {
        "id": "287"
    },
    "deck": [
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "2030"
      },
      {
        "id": "6006",
        "mastery_level": "2"
      },
      {
        "id": "2023",
        "mastery_level": "3"
      },
      {
        "id": "1614",
        "mastery_level": "4"
      },
      {
        "id": "6015",
        "mastery_level": "5"
      },
      {
        "id": "1643",
        "mastery_level": "6"
      },
      {
        "id": "7040",
        "mastery_level": "7"
      },
    ]
  },
  "5166": {
    "id": "5166",
    "name": "Long Distance ",
    "commander": {
        "id": "243"
    },
    "deck": [
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "6011"
      },
      {
        "id": "5017",
        "mastery_level": "2"
      },
      {
        "id": "2008",
        "mastery_level": "3"
      },
      {
        "id": "1014",
        "mastery_level": "4"
      },
      {
        "id": "5021",
        "mastery_level": "5"
      },
      {
        "id": "1343",
        "mastery_level": "6"
      },
      {
        "id": "5019",
        "mastery_level": "7"
      },
    ]
  },
  "5167": {
    "id": "5167",
    "name": "Under Pressure",
    "commander": {
        "id": "238"
    },
    "deck": [
      {
        "id": "1619"
      },
      {
        "id": "1619"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "6034"
      },
      {
        "id": "1616",
        "mastery_level": "2"
      },
      {
        "id": "1628",
        "mastery_level": "3"
      },
      {
        "id": "5006",
        "mastery_level": "4"
      },
      {
        "id": "2024",
        "mastery_level": "5"
      },
      {
        "id": "6037",
        "mastery_level": "6"
      },
      {
        "id": "5039",
        "mastery_level": "7"
      },
    ]
  },
  "5168": {
    "id": "5168",
    "name": "Keep Calm",
    "commander": {
        "id": "244"
    },
    "deck": [
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "7021"
      },
      {
        "id": "7035"
      },
      {
        "id": "7021",
        "mastery_level": "2"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "6015",
        "mastery_level": "4"
      },
      {
        "id": "1329",
        "mastery_level": "5"
      },
      {
        "id": "6040",
        "mastery_level": "6"
      },
      {
        "id": "7032",
        "mastery_level": "7"
      },
    ]
  },
  "5169": {
    "id": "5169",
    "name": "Power Down",
    "commander": {
        "id": "245"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "5035"
      },
      {
        "id": "5041"
      },
      {
        "id": "5021",
        "mastery_level": "2"
      },
      {
        "id": "2027",
        "mastery_level": "3"
      },
      {
        "id": "5017",
        "mastery_level": "4"
      },
      {
        "id": "1031",
        "mastery_level": "5"
      },
      {
        "id": "1340",
        "mastery_level": "6"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
    ]
  },
  "5170": {
    "id": "5170",
    "name": "Angry Neighbors",
    "commander": {
        "id": "241"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "2010"
      },
      {
        "id": "2010"
      },
      {
        "id": "7021"
      },
      {
        "id": "2009",
        "mastery_level": "2"
      },
      {
        "id": "2009",
        "mastery_level": "2"
      },
      {
        "id": "1032",
        "mastery_level": "3"
      },
      {
        "id": "5012",
        "mastery_level": "4"
      },
      {
        "id": "1629",
        "mastery_level": "5"
      },
      {
        "id": "6013",
        "mastery_level": "6"
      },
      {
        "id": "7013",
        "mastery_level": "7"
      },
    ]
  },
  "5171": {
    "id": "5171",
    "name": "Island Walker",
    "commander": {
        "id": "287"
    },
    "deck": [
      {
        "id": "7022"
      },
      {
        "id": "7022"
      },
      {
        "id": "7022"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "2008"
      },
      {
        "id": "7016"
      },
      {
        "id": "1015",
        "mastery_level": "2"
      },
      {
        "id": "2010",
        "mastery_level": "3"
      },
      {
        "id": "7017",
        "mastery_level": "4"
      },
      {
        "id": "2011",
        "mastery_level": "5"
      },
      {
        "id": "2007",
        "mastery_level": "6"
      },
      {
        "id": "1043",
        "mastery_level": "7"
      },
    ]
  },
  "5172": {
    "id": "5172",
    "name": "Ring of Fire",
    "commander": {
        "id": "242"
    },
    "deck": [
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "1311"
      },
      {
        "id": "2004"
      },
      {
        "id": "2020"
      },
      {
        "id": "6031"
      },
      {
        "id": "5017",
        "mastery_level": "2"
      },
      {
        "id": "2023",
        "mastery_level": "3"
      },
      {
        "id": "1318",
        "mastery_level": "4"
      },
      {
        "id": "2025",
        "mastery_level": "5"
      },
      {
        "id": "6030",
        "mastery_level": "6"
      },
      {
        "id": "6033",
        "mastery_level": "7"
      },
    ]
  },
  "5173": {
    "id": "5173",
    "name": "Quick Draw",
    "commander": {
        "id": "241"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "5012"
      },
      {
        "id": "2020"
      },
      {
        "id": "2020"
      },
      {
        "id": "6036"
      },
      {
        "id": "6021",
        "mastery_level": "2"
      },
      {
        "id": "2020",
        "mastery_level": "3"
      },
      {
        "id": "1017",
        "mastery_level": "4"
      },
      {
        "id": "6038",
        "mastery_level": "5"
      },
      {
        "id": "5009",
        "mastery_level": "6"
      },
      {
        "id": "5029",
        "mastery_level": "7"
      },
    ]
  },
  "5174": {
    "id": "5174",
    "name": "Round Two",
    "commander": {
        "id": "244"
    },
    "deck": [
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "5035"
      },
      {
        "id": "2001"
      },
      {
        "id": "2027"
      },
      {
        "id": "1631"
      },
      {
        "id": "1326",
        "mastery_level": "2"
      },
      {
        "id": "1328",
        "mastery_level": "2"
      },
      {
        "id": "5035",
        "mastery_level": "3"
      },
      {
        "id": "1315",
        "mastery_level": "4"
      },
      {
        "id": "6010",
        "mastery_level": "5"
      },
      {
        "id": "6003",
        "mastery_level": "6"
      },
      {
        "id": "6019",
        "mastery_level": "7"
      },
    ]
  },
  "5175": {
    "id": "5175",
    "name": "Good Shot",
    "commander": {
        "id": "238"
    },
    "deck": [
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1010"
      },
      {
        "id": "7004"
      },
      {
        "id": "7038"
      },
      {
        "id": "6017",
        "mastery_level": "2"
      },
      {
        "id": "2019",
        "mastery_level": "3"
      },
      {
        "id": "1014",
        "mastery_level": "4"
      },
      {
        "id": "1629",
        "mastery_level": "5"
      },
      {
        "id": "2013",
        "mastery_level": "6"
      },
      {
        "id": "7039",
        "mastery_level": "7"
      },
    ]
  },
  "5176": {
    "id": "5176",
    "name": "Final Exam",
    "commander": {
        "id": "241"
    },
    "deck": [
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "7021"
      },
      {
        "id": "2010"
      },
      {
        "id": "2009"
      },
      {
        "id": "7021",
        "mastery_level": "2"
      },
      {
        "id": "7015",
        "mastery_level": "3"
      },
      {
        "id": "7006",
        "mastery_level": "4"
      },
      {
        "id": "1032",
        "mastery_level": "5"
      },
      {
        "id": "6013",
        "mastery_level": "6"
      },
      {
        "id": "7000",
        "mastery_level": "7"
      },
    ]
  },
  "5177": {
    "id": "5177",
    "name": "Master or Apprentice",
    "commander": {
        "id": "245"
    },
    "deck": [
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "6021"
      },
      {
        "id": "6010"
      },
      {
        "id": "1326"
      },
      {
        "id": "6020"
      },
      {
        "id": "1017",
        "mastery_level": "2"
      },
      {
        "id": "5035",
        "mastery_level": "2"
      },
      {
        "id": "1027",
        "mastery_level": "3"
      },
      {
        "id": "5035",
        "mastery_level": "4"
      },
      {
        "id": "5030",
        "mastery_level": "5"
      },
    ]
  },
  "5178": {
    "id": "5178",
    "name": "Downstairs Rumble ",
    "commander": {
        "id": "288"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "2009"
      },
      {
        "id": "2008"
      },
      {
        "id": "1032"
      },
      {
        "id": "1325"
      },
      {
        "id": "2008",
        "mastery_level": "2"
      },
      {
        "id": "7021",
        "mastery_level": "2"
      },
      {
        "id": "1325",
        "mastery_level": "3"
      },
      {
        "id": "2010",
        "mastery_level": "4"
      },
      {
        "id": "2008",
        "mastery_level": "5"
      },
      {
        "id": "1642",
        "mastery_level": "6"
      },
      {
        "id": "5013",
        "mastery_level": "7"
      },
    ]
  },
  "5179": {
    "id": "5179",
    "name": "Nice View ",
    "commander": {
        "id": "292"
    },
    "deck": [
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "2023"
      },
      {
        "id": "1313",
        "mastery_level": "2"
      },
      {
        "id": "6034",
        "mastery_level": "2"
      },
      {
        "id": "7006",
        "mastery_level": "3"
      },
      {
        "id": "1627",
        "mastery_level": "4"
      },
      {
        "id": "1328",
        "mastery_level": "5"
      },
      {
        "id": "7042",
        "mastery_level": "6"
      },
      {
        "id": "6039",
        "mastery_level": "7"
      },
    ]
  },
  "5180": {
    "id": "5180",
    "name": "Moving Day",
    "commander": {
        "id": "290"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1619"
      },
      {
        "id": "1619"
      },
      {
        "id": "2009"
      },
      {
        "id": "6015"
      },
      {
        "id": "1619",
        "mastery_level": "2"
      },
      {
        "id": "6015",
        "mastery_level": "2"
      },
      {
        "id": "1015",
        "mastery_level": "3"
      },
      {
        "id": "2008",
        "mastery_level": "4"
      },
      {
        "id": "2009",
        "mastery_level": "5"
      },
      {
        "id": "7002",
        "mastery_level": "6"
      },
      {
        "id": "2022",
        "mastery_level": "7"
      },
    ]
  },
  "5181": {
    "id": "5181",
    "name": "A New Home",
    "commander": {
        "id": "289"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "2031"
      },
      {
        "id": "7021"
      },
      {
        "id": "6042"
      },
      {
        "id": "5017",
        "mastery_level": "2"
      },
      {
        "id": "2031",
        "mastery_level": "2"
      },
      {
        "id": "7006",
        "mastery_level": "3"
      },
      {
        "id": "6020",
        "mastery_level": "4"
      },
      {
        "id": "2009",
        "mastery_level": "5"
      },
      {
        "id": "7000",
        "mastery_level": "6"
      },
      {
        "id": "1643",
        "mastery_level": "7"
      },
    ]
  },
  "5182": {
    "id": "5182",
    "name": "Loyal Friends",
    "commander": {
        "id": "293"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "1616"
      },
      {
        "id": "1616"
      },
      {
        "id": "6044"
      },
      {
        "id": "1319",
        "mastery_level": "2"
      },
      {
        "id": "6042",
        "mastery_level": "2"
      },
      {
        "id": "1615",
        "mastery_level": "3"
      },
      {
        "id": "6044",
        "mastery_level": "4"
      },
      {
        "id": "2004",
        "mastery_level": "5"
      },
      {
        "id": "6035",
        "mastery_level": "6"
      },
      {
        "id": "6040",
        "mastery_level": "7"
      },
    ]
  },
  "5183": {
    "id": "5183",
    "name": "Grand Entrance",
    "commander": {
        "id": "290"
    },
    "deck": [
      {
        "id": "7022"
      },
      {
        "id": "7022"
      },
      {
        "id": "7022"
      },
      {
        "id": "1618"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "7038"
      },
      {
        "id": "7024"
      },
      {
        "id": "7022",
        "mastery_level": "2"
      },
      {
        "id": "7029",
        "mastery_level": "2"
      },
      {
        "id": "6017",
        "mastery_level": "3"
      },
      {
        "id": "1629",
        "mastery_level": "4"
      },
      {
        "id": "2014",
        "mastery_level": "5"
      },
      {
        "id": "6030",
        "mastery_level": "6"
      },
      {
        "id": "5043",
        "mastery_level": "7"
      },
    ]
  },
  "5184": {
    "id": "5184",
    "name": "Surprise Party",
    "commander": {
        "id": "289"
    },
    "deck": [
      {
        "id": "1614"
      },
      {
        "id": "1614"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "1332"
      },
      {
        "id": "2023"
      },
      {
        "id": "1027"
      },
      {
        "id": "7017",
        "mastery_level": "2"
      },
      {
        "id": "1632",
        "mastery_level": "2"
      },
      {
        "id": "1614",
        "mastery_level": "3"
      },
      {
        "id": "1631",
        "mastery_level": "4"
      },
      {
        "id": "6031",
        "mastery_level": "5"
      },
      {
        "id": "2026",
        "mastery_level": "6"
      },
      {
        "id": "6033",
        "mastery_level": "7"
      },
    ]
  },
  "5185": {
    "id": "5185",
    "name": "Feast for a King",
    "commander": {
        "id": "290"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "2029"
      },
      {
        "id": "1014",
        "mastery_level": "2"
      },
      {
        "id": "2029",
        "mastery_level": "2"
      },
      {
        "id": "6012",
        "mastery_level": "3"
      },
      {
        "id": "7038",
        "mastery_level": "4"
      },
      {
        "id": "2019",
        "mastery_level": "5"
      },
      {
        "id": "2022",
        "mastery_level": "6"
      },
      {
        "id": "7040",
        "mastery_level": "7"
      },
    ]
  },
  "5186": {
    "id": "5186",
    "name": "Guest of Honor",
    "commander": {
        "id": "292"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "2024"
      },
      {
        "id": "1319",
        "mastery_level": "2"
      },
      {
        "id": "6036",
        "mastery_level": "2"
      },
      {
        "id": "1314",
        "mastery_level": "3"
      },
      {
        "id": "2023",
        "mastery_level": "4"
      },
      {
        "id": "6034",
        "mastery_level": "5"
      },
      {
        "id": "7033",
        "mastery_level": "6"
      },
      {
        "id": "6033",
        "mastery_level": "7"
      },
    ]
  },
  "5187": {
    "id": "5187",
    "name": "Dinner Party",
    "commander": {
        "id": "293"
    },
    "deck": [
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "5022"
      },
      {
        "id": "6025"
      },
      {
        "id": "6010"
      },
      {
        "id": "6006",
        "mastery_level": "2"
      },
      {
        "id": "6025",
        "mastery_level": "3"
      },
      {
        "id": "6012",
        "mastery_level": "4"
      },
      {
        "id": "2004",
        "mastery_level": "5"
      },
      {
        "id": "5023",
        "mastery_level": "6"
      },
      {
        "id": "6024",
        "mastery_level": "7"
      },
    ]
  },
  "5188": {
    "id": "5188",
    "name": "The Biggest Fan",
    "commander": {
        "id": "289"
    },
    "deck": [
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "2009"
      },
      {
        "id": "7021"
      },
      {
        "id": "1619",
        "mastery_level": "2"
      },
      {
        "id": "2009",
        "mastery_level": "3"
      },
      {
        "id": "1317",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "6013",
        "mastery_level": "6"
      },
      {
        "id": "5034",
        "mastery_level": "7"
      },
    ]
  },
  "5189": {
    "id": "5189",
    "name": "Party Crashers",
    "commander": {
        "id": "294"
    },
    "deck": [
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "2027"
      },
      {
        "id": "2025"
      },
      {
        "id": "5016"
      },
      {
        "id": "5012",
        "mastery_level": "2"
      },
      {
        "id": "5041",
        "mastery_level": "3"
      },
      {
        "id": "1017",
        "mastery_level": "4"
      },
      {
        "id": "2025",
        "mastery_level": "5"
      },
      {
        "id": "5031",
        "mastery_level": "6"
      },
      {
        "id": "5018",
        "mastery_level": "7"
      },
    ]
  },
  "5190": {
    "id": "5190",
    "name": "A Son Lost",
    "commander": {
        "id": "294"
    },
    "deck": [
      {
        "id": "1615"
      },
      {
        "id": "1615"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "7007"
      },
      {
        "id": "2010"
      },
      {
        "id": "5017",
        "mastery_level": "2"
      },
      {
        "id": "5041",
        "mastery_level": "3"
      },
      {
        "id": "6017",
        "mastery_level": "4"
      },
      {
        "id": "1032",
        "mastery_level": "5"
      },
      {
        "id": "2007",
        "mastery_level": "6"
      },
      {
        "id": "6043",
        "mastery_level": "7"
      },
    ]
  },
  "5191": {
    "id": "5191",
    "name": "Catch Me If You Can",
    "commander": {
        "id": "292"
    },
    "deck": [
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1014"
      },
      {
        "id": "7041"
      },
      {
        "id": "7038"
      },
      {
        "id": "1617",
        "mastery_level": "2"
      },
      {
        "id": "2023",
        "mastery_level": "3"
      },
      {
        "id": "6007",
        "mastery_level": "4"
      },
      {
        "id": "7038",
        "mastery_level": "5"
      },
      {
        "id": "6039",
        "mastery_level": "6"
      },
      {
        "id": "1042",
        "mastery_level": "7"
      },
    ]
  },
  "5192": {
    "id": "5192",
    "name": "Shell Shock",
    "commander": {
        "id": "291"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "2031"
      },
      {
        "id": "2012"
      },
      {
        "id": "6036"
      },
      {
        "id": "6010",
        "mastery_level": "2"
      },
      {
        "id": "7007",
        "mastery_level": "2"
      },
      {
        "id": "2019",
        "mastery_level": "3"
      },
      {
        "id": "1315",
        "mastery_level": "4"
      },
      {
        "id": "7035",
        "mastery_level": "5"
      },
      {
        "id": "1640",
        "mastery_level": "6"
      },
      {
        "id": "7019",
        "mastery_level": "7"
      },
    ]
  },
  "5193": {
    "id": "5193",
    "name": "Flanked",
    "commander": {
        "id": "293"
    },
    "deck": [
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "5035"
      },
      {
        "id": "1631"
      },
      {
        "id": "1017",
        "mastery_level": "2"
      },
      {
        "id": "5035",
        "mastery_level": "3"
      },
      {
        "id": "1319",
        "mastery_level": "4"
      },
      {
        "id": "6029",
        "mastery_level": "5"
      },
      {
        "id": "6035",
        "mastery_level": "6"
      },
      {
        "id": "7037",
        "mastery_level": "7"
      },
    ]
  },
  "5194": {
    "id": "5194",
    "name": "On the Move",
    "commander": {
        "id": "290"
    },
    "deck": [
      {
        "id": "1332"
      },
      {
        "id": "1332"
      },
      {
        "id": "6021"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1311"
      },
      {
        "id": "1314",
        "mastery_level": "2"
      },
      {
        "id": "6036",
        "mastery_level": "3"
      },
      {
        "id": "5006",
        "mastery_level": "4"
      },
      {
        "id": "6044",
        "mastery_level": "5"
      },
      {
        "id": "6028",
        "mastery_level": "6"
      },
      {
        "id": "7036",
        "mastery_level": "7"
      },
    ]
  },
  "5195": {
    "id": "5195",
    "name": "Resisting Arrest",
    "commander": {
        "id": "289"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "7007"
      },
      {
        "id": "1630"
      },
      {
        "id": "1330"
      },
      {
        "id": "6031"
      },
      {
        "id": "2000",
        "mastery_level": "2"
      },
      {
        "id": "1615",
        "mastery_level": "2"
      },
      {
        "id": "2031",
        "mastery_level": "3"
      },
      {
        "id": "7012",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "6037",
        "mastery_level": "6"
      },
      {
        "id": "6041",
        "mastery_level": "7"
      },
    ]
  },
  "5196": {
    "id": "5196",
    "name": "Shortcut",
    "commander": {
        "id": "291"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "7021"
      },
      {
        "id": "2020"
      },
      {
        "id": "2020"
      },
      {
        "id": "7021",
        "mastery_level": "2"
      },
      {
        "id": "6042",
        "mastery_level": "2"
      },
      {
        "id": "6015",
        "mastery_level": "3"
      },
      {
        "id": "1315",
        "mastery_level": "4"
      },
      {
        "id": "2025",
        "mastery_level": "5"
      },
      {
        "id": "6018",
        "mastery_level": "6"
      },
      {
        "id": "6030",
        "mastery_level": "7"
      },
    ]
  },
  "5197": {
    "id": "5197",
    "name": "Closing the Gap",
    "commander": {
        "id": "292"
    },
    "deck": [
      {
        "id": "6034"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "1017",
        "mastery_level": "2"
      },
      {
        "id": "2024",
        "mastery_level": "3"
      },
      {
        "id": "1319",
        "mastery_level": "4"
      },
      {
        "id": "2023",
        "mastery_level": "5"
      },
      {
        "id": "6014"
      },
      {
        "id": "7033"
      },
    ]
  },
  "5198": {
    "id": "5198",
    "name": "A Bold Move",
    "commander": {
        "id": "293"
    },
    "deck": [
      {
        "id": "2027"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1318"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1014",
        "mastery_level": "2"
      },
      {
        "id": "2027",
        "mastery_level": "3"
      },
      {
        "id": "1312",
        "mastery_level": "4"
      },
      {
        "id": "1031",
        "mastery_level": "5"
      },
      {
        "id": "6040",
        "mastery_level": "6"
      },
      {
        "id": "5043",
        "mastery_level": "7"
      },
    ]
  },
  "5199": {
    "id": "5199",
    "name": "Spit in the Eye",
    "commander": {
        "id": "291"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "7035"
      },
      {
        "id": "2012"
      },
      {
        "id": "1613",
        "mastery_level": "2"
      },
      {
        "id": "2024",
        "mastery_level": "3"
      },
      {
        "id": "7007",
        "mastery_level": "4"
      },
      {
        "id": "7034",
        "mastery_level": "5"
      },
      {
        "id": "7032",
        "mastery_level": "6"
      },
      {
        "id": "2015",
        "mastery_level": "7"
      },
    ]
  },
  "52": {
    "id": "52",
    "name": "The Wyldwood",
    "commander": {
        "id": "201"
    },
    "deck": [
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1603",
        "level": "2"
      },
      {
        "id": "1603"
      },
      {
        "id": "1603"
      },
      {
        "id": "1603",
        "level": "2"
      },
      {
        "id": "1603",
        "level": "2"
      },
      {
        "id": "1606"
      },
      {
        "id": "1607"
      },
      {
        "id": "1607"
      },
      {
        "id": "1012",
        "mastery_level": "2"
      },
    ]
  },
  "5200": {
    "id": "5200",
    "name": "Bird Down",
    "commander": {
        "id": "294"
    },
    "deck": [
      {
        "id": "2011"
      },
      {
        "id": "2011"
      },
      {
        "id": "2012"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "2012",
        "mastery_level": "2"
      },
      {
        "id": "2011",
        "mastery_level": "3"
      },
      {
        "id": "7022",
        "mastery_level": "4"
      },
      {
        "id": "5020",
        "mastery_level": "5"
      },
      {
        "id": "1043",
        "mastery_level": "6"
      },
      {
        "id": "6018",
        "mastery_level": "7"
      },
    ]
  },
  "5201": {
    "id": "5201",
    "name": "Hostage Located",
    "commander": {
        "id": "294"
    },
    "deck": [
      {
        "id": "5033"
      },
      {
        "id": "5033"
      },
      {
        "id": "1331"
      },
      {
        "id": "6029"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "1319"
      },
      {
        "id": "1331",
        "mastery_level": "2"
      },
      {
        "id": "5033",
        "mastery_level": "3"
      },
      {
        "id": "1317",
        "mastery_level": "4"
      },
      {
        "id": "1632",
        "mastery_level": "5"
      },
      {
        "id": "5037",
        "mastery_level": "6"
      },
      {
        "id": "6028",
        "mastery_level": "7"
      },
    ]
  },
  "5202": {
    "id": "5202",
    "name": "Fight for Freedom",
    "commander": {
        "id": "291"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "7045"
      },
      {
        "id": "7015"
      },
      {
        "id": "6015"
      },
      {
        "id": "7004"
      },
      {
        "id": "7005",
        "mastery_level": "2"
      },
      {
        "id": "5015",
        "mastery_level": "2"
      },
      {
        "id": "1329",
        "mastery_level": "3"
      },
      {
        "id": "5015",
        "mastery_level": "4"
      },
      {
        "id": "7026",
        "mastery_level": "5"
      },
      {
        "id": "2022",
        "mastery_level": "6"
      },
      {
        "id": "7044",
        "mastery_level": "7"
      },
    ]
  },
  "5203": {
    "id": "5203",
    "name": "The Mad Bomber",
    "commander": {
        "id": "296"
    },
    "deck": [
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016",
        "mastery_level": "2"
      },
      {
        "id": "8016",
        "mastery_level": "3"
      },
      {
        "id": "8016",
        "mastery_level": "4"
      },
      {
        "id": "8016",
        "mastery_level": "5"
      },
      {
        "id": "8016",
        "mastery_level": "6"
      },
      {
        "id": "1315",
        "remove_mastery_level": "3"
      },
      {
        "id": "1311",
        "remove_mastery_level": "5"
      },
      {
        "id": "1311",
        "remove_mastery_level": "6"
      },
      {
        "id": "1331",
        "remove_mastery_level": "7"
      },
      {
        "id": "1331",
        "remove_mastery_level": "7"
      },
      {
        "id": "1331",
        "mastery_level": "3"
      },
      {
        "id": "1342",
        "mastery_level": "5"
      },
      {
        "id": "1342",
        "mastery_level": "6"
      },
      {
        "id": "22026",
        "mastery_level": "7"
      },
      {
        "id": "22026",
        "mastery_level": "7"
      },
    ]
  },
  "5204": {
    "id": "5204",
    "name": "The Sad Bomber",
    "commander": {
        "id": "296"
    },
    "deck": [
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016",
        "mastery_level": "2"
      },
      {
        "id": "8016",
        "mastery_level": "3"
      },
      {
        "id": "8016",
        "mastery_level": "4"
      },
      {
        "id": "8016",
        "mastery_level": "5"
      },
      {
        "id": "8016",
        "mastery_level": "6"
      },
      {
        "id": "1315",
        "remove_mastery_level": "3"
      },
      {
        "id": "1311",
        "remove_mastery_level": "5"
      },
      {
        "id": "1311",
        "remove_mastery_level": "6"
      },
      {
        "id": "1331",
        "remove_mastery_level": "7"
      },
      {
        "id": "1331",
        "remove_mastery_level": "7"
      },
      {
        "id": "1331",
        "mastery_level": "3"
      },
      {
        "id": "1342",
        "mastery_level": "5"
      },
      {
        "id": "1342",
        "mastery_level": "6"
      },
      {
        "id": "22026",
        "mastery_level": "7"
      },
      {
        "id": "22026",
        "mastery_level": "7"
      },
    ]
  },
  "5205": {
    "id": "5205",
    "name": "The Glad Bomber",
    "commander": {
        "id": "296"
    },
    "deck": [
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016",
        "mastery_level": "2"
      },
      {
        "id": "8016",
        "mastery_level": "3"
      },
      {
        "id": "8016",
        "mastery_level": "4"
      },
      {
        "id": "8016",
        "mastery_level": "5"
      },
      {
        "id": "8016",
        "mastery_level": "6"
      },
      {
        "id": "1315",
        "remove_mastery_level": "3"
      },
      {
        "id": "1311",
        "remove_mastery_level": "5"
      },
      {
        "id": "1311",
        "remove_mastery_level": "6"
      },
      {
        "id": "1331",
        "remove_mastery_level": "7"
      },
      {
        "id": "1331",
        "remove_mastery_level": "7"
      },
      {
        "id": "1331",
        "mastery_level": "3"
      },
      {
        "id": "1342",
        "mastery_level": "5"
      },
      {
        "id": "1342",
        "mastery_level": "6"
      },
      {
        "id": "22026",
        "mastery_level": "7"
      },
      {
        "id": "22026",
        "mastery_level": "7"
      },
    ]
  },
  "5206": {
    "id": "5206",
    "name": "The Rad Bomber",
    "commander": {
        "id": "296"
    },
    "deck": [
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016"
      },
      {
        "id": "8016",
        "mastery_level": "2"
      },
      {
        "id": "8016",
        "mastery_level": "3"
      },
      {
        "id": "8016",
        "mastery_level": "4"
      },
      {
        "id": "8016",
        "mastery_level": "5"
      },
      {
        "id": "8016",
        "mastery_level": "6"
      },
      {
        "id": "1315",
        "remove_mastery_level": "3"
      },
      {
        "id": "1311",
        "remove_mastery_level": "5"
      },
      {
        "id": "1311",
        "remove_mastery_level": "6"
      },
      {
        "id": "1331",
        "remove_mastery_level": "7"
      },
      {
        "id": "1331",
        "remove_mastery_level": "7"
      },
      {
        "id": "1331",
        "mastery_level": "3"
      },
      {
        "id": "1342",
        "mastery_level": "5"
      },
      {
        "id": "1342",
        "mastery_level": "6"
      },
      {
        "id": "22026",
        "mastery_level": "7"
      },
      {
        "id": "22026",
        "mastery_level": "7"
      },
    ]
  },
  "5207": {
    "id": "5207",
    "name": "Chicken Assault",
    "commander": {
        "id": "297"
    },
    "deck": [
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
    ]
  },
  "5208": {
    "id": "5208",
    "name": "Chickens, Chickens Everywhere",
    "commander": {
        "id": "297"
    },
    "deck": [
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
    ]
  },
  "5209": {
    "id": "5209",
    "name": "Chicken Appreciation Day",
    "commander": {
        "id": "297"
    },
    "deck": [
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
    ]
  },
  "5210": {
    "id": "5210",
    "name": "Chicken Divebombs",
    "commander": {
        "id": "297"
    },
    "deck": [
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
      {
        "id": "8019"
      },
    ]
  },
  "5211": {
    "id": "5211",
    "name": "Doomsday",
    "commander": {
        "id": "295"
    },
    "deck": [
      {
        "id": "8017"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
    ]
  },
  "5212": {
    "id": "5212",
    "name": "Doomsday 2, Electric Boogaloo",
    "commander": {
        "id": "295"
    },
    "deck": [
      {
        "id": "8017"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
    ]
  },
  "5213": {
    "id": "5213",
    "name": "The Day That Doomed",
    "commander": {
        "id": "295"
    },
    "deck": [
      {
        "id": "8017"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
    ]
  },
  "5214": {
    "id": "5214",
    "name": "Doomest Day",
    "commander": {
        "id": "295"
    },
    "deck": [
      {
        "id": "8017"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
      {
        "id": "8018"
      },
    ]
  },
  "5215": {
    "id": "5215",
    "name": "Quick Stop",
    "commander": {
        "id": "249"
    },
    "deck": [
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "2024"
      },
      {
        "id": "2009"
      },
      {
        "id": "1628"
      },
      {
        "id": "1613",
        "mastery_level": "2"
      },
      {
        "id": "2023",
        "mastery_level": "3"
      },
      {
        "id": "1617",
        "mastery_level": "4"
      },
      {
        "id": "2031",
        "mastery_level": "5"
      },
      {
        "id": "7048",
        "mastery_level": "6"
      },
      {
        "id": "7002",
        "mastery_level": "7"
      },
    ]
  },
  "5216": {
    "id": "5216",
    "name": "Safe House",
    "commander": {
        "id": "306"
    },
    "deck": [
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1616"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "2009"
      },
      {
        "id": "6017",
        "mastery_level": "2"
      },
      {
        "id": "1325",
        "mastery_level": "2"
      },
      {
        "id": "1610",
        "mastery_level": "3"
      },
      {
        "id": "1028",
        "mastery_level": "4"
      },
      {
        "id": "5020",
        "mastery_level": "5"
      },
      {
        "id": "1043",
        "mastery_level": "6"
      },
      {
        "id": "7046",
        "mastery_level": "7"
      },
    ]
  },
  "5217": {
    "id": "5217",
    "name": "Frenemy",
    "commander": {
        "id": "304"
    },
    "deck": [
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "6006"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "6021"
      },
      {
        "id": "1017",
        "mastery_level": "2"
      },
      {
        "id": "2030",
        "mastery_level": "2"
      },
      {
        "id": "1313",
        "mastery_level": "3"
      },
      {
        "id": "1328",
        "mastery_level": "4"
      },
      {
        "id": "1330",
        "mastery_level": "5"
      },
      {
        "id": "6039",
        "mastery_level": "6"
      },
      {
        "id": "6024",
        "mastery_level": "7"
      },
    ]
  },
  "5218": {
    "id": "5218",
    "name": "Friend or Foe",
    "commander": {
        "id": "247"
    },
    "deck": [
      {
        "id": "2025"
      },
      {
        "id": "2027"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1014"
      },
      {
        "id": "5022"
      },
      {
        "id": "1613",
        "mastery_level": "2"
      },
      {
        "id": "2029",
        "mastery_level": "2"
      },
      {
        "id": "1014",
        "mastery_level": "3"
      },
      {
        "id": "2030",
        "mastery_level": "4"
      },
      {
        "id": "6029",
        "mastery_level": "5"
      },
      {
        "id": "6041",
        "mastery_level": "6"
      },
      {
        "id": "7036",
        "mastery_level": "7"
      },
    ]
  },
  "5219": {
    "id": "5219",
    "name": "Short Leash",
    "commander": {
        "id": "304"
    },
    "deck": [
      {
        "id": "7007"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "2024"
      },
      {
        "id": "6044"
      },
      {
        "id": "1613",
        "mastery_level": "2"
      },
      {
        "id": "2032",
        "mastery_level": "2"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "5035",
        "mastery_level": "4"
      },
      {
        "id": "2021",
        "mastery_level": "5"
      },
      {
        "id": "6027",
        "mastery_level": "6"
      },
      {
        "id": "5043",
        "mastery_level": "7"
      },
    ]
  },
  "5220": {
    "id": "5220",
    "name": "Out at Dawn",
    "commander": {
        "id": "306"
    },
    "deck": [
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "1619"
      },
      {
        "id": "1619"
      },
      {
        "id": "1619"
      },
      {
        "id": "6042"
      },
      {
        "id": "2025"
      },
      {
        "id": "2010"
      },
      {
        "id": "1311",
        "mastery_level": "2"
      },
      {
        "id": "1629",
        "mastery_level": "3"
      },
      {
        "id": "1010",
        "mastery_level": "4"
      },
      {
        "id": "5053",
        "mastery_level": "5"
      },
      {
        "id": "7031",
        "mastery_level": "6"
      },
      {
        "id": "5032",
        "mastery_level": "7"
      },
    ]
  },
  "5221": {
    "id": "5221",
    "name": "On the Hunt",
    "commander": {
        "id": "304"
    },
    "deck": [
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "6020"
      },
      {
        "id": "1015",
        "mastery_level": "2"
      },
      {
        "id": "5041",
        "mastery_level": "2"
      },
      {
        "id": "1011",
        "mastery_level": "3"
      },
      {
        "id": "5021",
        "mastery_level": "4"
      },
      {
        "id": "5053",
        "mastery_level": "5"
      },
      {
        "id": "5049",
        "mastery_level": "6"
      },
      {
        "id": "5034",
        "mastery_level": "7"
      },
    ]
  },
  "5222": {
    "id": "5222",
    "name": "Treetop Struggle",
    "commander": {
        "id": "247"
    },
    "deck": [
      {
        "id": "6010"
      },
      {
        "id": "1610"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "1615"
      },
      {
        "id": "1615"
      },
      {
        "id": "5012",
        "mastery_level": "2"
      },
      {
        "id": "2004",
        "mastery_level": "2"
      },
      {
        "id": "6007",
        "mastery_level": "3"
      },
      {
        "id": "1630",
        "mastery_level": "4"
      },
      {
        "id": "1327",
        "mastery_level": "5"
      },
      {
        "id": "6043",
        "mastery_level": "6"
      },
      {
        "id": "6026",
        "mastery_level": "7"
      },
    ]
  },
  "5223": {
    "id": "5223",
    "name": "Attention of the Wyld",
    "commander": {
        "id": "305"
    },
    "deck": [
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "6038"
      },
      {
        "id": "7011"
      },
      {
        "id": "7006",
        "mastery_level": "2"
      },
      {
        "id": "6011",
        "mastery_level": "2"
      },
      {
        "id": "1613",
        "mastery_level": "3"
      },
      {
        "id": "1331",
        "mastery_level": "4"
      },
      {
        "id": "6004",
        "mastery_level": "5"
      },
      {
        "id": "6001",
        "mastery_level": "6"
      },
      {
        "id": "6032",
        "mastery_level": "7"
      },
    ]
  },
  "5224": {
    "id": "5224",
    "name": "Distant Gaze",
    "commander": {
        "id": "304"
    },
    "deck": [
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "6020"
      },
      {
        "id": "1015",
        "mastery_level": "2"
      },
      {
        "id": "5041",
        "mastery_level": "2"
      },
      {
        "id": "1011",
        "mastery_level": "3"
      },
      {
        "id": "5021",
        "mastery_level": "4"
      },
      {
        "id": "5053",
        "mastery_level": "5"
      },
      {
        "id": "5049",
        "mastery_level": "6"
      },
      {
        "id": "5034",
        "mastery_level": "7"
      },
    ]
  },
  "5225": {
    "id": "5225",
    "name": "Out of the Woods",
    "commander": {
        "id": "276"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "1631"
      },
      {
        "id": "7035"
      },
      {
        "id": "6022",
        "mastery_level": "2"
      },
      {
        "id": "7045",
        "mastery_level": "3"
      },
      {
        "id": "1315",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "6047",
        "mastery_level": "6"
      },
      {
        "id": "6052",
        "mastery_level": "7"
      },
    ]
  },
  "5226": {
    "id": "5226",
    "name": "Don't Stress My Stride",
    "commander": {
        "id": "258"
    },
    "deck": [
      {
        "id": "1614"
      },
      {
        "id": "1614"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "6034"
      },
      {
        "id": "7047"
      },
      {
        "id": "1019",
        "mastery_level": "2"
      },
      {
        "id": "2023",
        "mastery_level": "3"
      },
      {
        "id": "1614",
        "mastery_level": "4"
      },
      {
        "id": "7029",
        "mastery_level": "5"
      },
      {
        "id": "2022",
        "mastery_level": "6"
      },
      {
        "id": "6003",
        "mastery_level": "7"
      },
    ]
  },
  "5227": {
    "id": "5227",
    "name": "Water Break",
    "commander": {
        "id": "305"
    },
    "deck": [
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "5007"
      },
      {
        "id": "2003"
      },
      {
        "id": "5025"
      },
      {
        "id": "5024"
      },
      {
        "id": "1615",
        "mastery_level": "2"
      },
      {
        "id": "7010",
        "mastery_level": "3"
      },
      {
        "id": "6012",
        "mastery_level": "4"
      },
      {
        "id": "5050",
        "mastery_level": "5"
      },
      {
        "id": "1640",
        "mastery_level": "6"
      },
      {
        "id": "5027",
        "mastery_level": "7"
      },
    ]
  },
  "5228": {
    "id": "5228",
    "name": "Preparing for Subterfuge",
    "commander": {
        "id": "233"
    },
    "deck": [
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "5022"
      },
      {
        "id": "6020"
      },
      {
        "id": "5004"
      },
      {
        "id": "2021"
      },
      {
        "id": "1015",
        "mastery_level": "2"
      },
      {
        "id": "5028",
        "mastery_level": "3"
      },
      {
        "id": "6007",
        "mastery_level": "4"
      },
      {
        "id": "5041",
        "mastery_level": "5"
      },
      {
        "id": "5031",
        "mastery_level": "6"
      },
      {
        "id": "6045",
        "mastery_level": "7"
      },
    ]
  },
  "5229": {
    "id": "5229",
    "name": "High Guard",
    "commander": {
        "id": "258"
    },
    "deck": [
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1616"
      },
      {
        "id": "1616"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "2034"
      },
      {
        "id": "5020"
      },
      {
        "id": "1028",
        "mastery_level": "2"
      },
      {
        "id": "2019",
        "mastery_level": "3"
      },
      {
        "id": "7022",
        "mastery_level": "4"
      },
      {
        "id": "7020",
        "mastery_level": "5"
      },
      {
        "id": "7049",
        "mastery_level": "6"
      },
      {
        "id": "2028",
        "mastery_level": "7"
      },
    ]
  },
  "5230": {
    "id": "5230",
    "name": "A Favor from the Guard",
    "commander": {
        "id": "276"
    },
    "deck": [
      {
        "id": "1332"
      },
      {
        "id": "1332"
      },
      {
        "id": "6025"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1332",
        "mastery_level": "2"
      },
      {
        "id": "6021",
        "mastery_level": "3"
      },
      {
        "id": "5012",
        "mastery_level": "4"
      },
      {
        "id": "2024",
        "mastery_level": "5"
      },
      {
        "id": "7033",
        "mastery_level": "6"
      },
      {
        "id": "7025",
        "mastery_level": "7"
      },
    ]
  },
  "5231": {
    "id": "5231",
    "name": "Though the Brush",
    "commander": {
        "id": "307"
    },
    "deck": [
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "7011"
      },
      {
        "id": "7004"
      },
      {
        "id": "1631"
      },
      {
        "id": "2031",
        "mastery_level": "2"
      },
      {
        "id": "1026",
        "mastery_level": "2"
      },
      {
        "id": "2012",
        "mastery_level": "3"
      },
      {
        "id": "7007",
        "mastery_level": "4"
      },
      {
        "id": "6004",
        "mastery_level": "5"
      },
      {
        "id": "5039",
        "mastery_level": "6"
      },
      {
        "id": "7039",
        "mastery_level": "7"
      },
    ]
  },
  "5232": {
    "id": "5232",
    "name": "Tight Fit",
    "commander": {
        "id": "305"
    },
    "deck": [
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "1012"
      },
      {
        "id": "1030"
      },
      {
        "id": "7034"
      },
      {
        "id": "7015"
      },
      {
        "id": "1326",
        "mastery_level": "2"
      },
      {
        "id": "2032",
        "mastery_level": "2"
      },
      {
        "id": "7020",
        "mastery_level": "3"
      },
      {
        "id": "1012",
        "mastery_level": "4"
      },
      {
        "id": "6016",
        "mastery_level": "5"
      },
      {
        "id": "7028",
        "mastery_level": "6"
      },
      {
        "id": "5042",
        "mastery_level": "7"
      },
    ]
  },
  "5233": {
    "id": "5233",
    "name": "Swagger",
    "commander": {
        "id": "233"
    },
    "deck": [
      {
        "id": "1011"
      },
      {
        "id": "1011"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "1027"
      },
      {
        "id": "6042"
      },
      {
        "id": "2020"
      },
      {
        "id": "1011",
        "mastery_level": "2"
      },
      {
        "id": "2025",
        "mastery_level": "3"
      },
      {
        "id": "1616",
        "mastery_level": "4"
      },
      {
        "id": "2027",
        "mastery_level": "5"
      },
      {
        "id": "5047",
        "mastery_level": "6"
      },
      {
        "id": "5031",
        "mastery_level": "7"
      },
    ]
  },
  "5234": {
    "id": "5234",
    "name": "Out of Sight, Out of Mind",
    "commander": {
        "id": "304"
    },
    "deck": [
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "7004"
      },
      {
        "id": "5040"
      },
      {
        "id": "1031"
      },
      {
        "id": "7041"
      },
      {
        "id": "1014",
        "mastery_level": "2"
      },
      {
        "id": "2029",
        "mastery_level": "3"
      },
      {
        "id": "6006",
        "mastery_level": "4"
      },
      {
        "id": "5040",
        "mastery_level": "5"
      },
      {
        "id": "6040",
        "mastery_level": "6"
      },
      {
        "id": "7039",
        "mastery_level": "7"
      },
    ]
  },
  "5235": {
    "id": "5235",
    "name": "Capital Offense",
    "commander": {
        "id": "306"
    },
    "deck": [
      {
        "id": "1032"
      },
      {
        "id": "1032"
      },
      {
        "id": "5046"
      },
      {
        "id": "2025"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "5046",
        "mastery_level": "2"
      },
      {
        "id": "2021",
        "mastery_level": "3"
      },
      {
        "id": "1618",
        "mastery_level": "4"
      },
      {
        "id": "2010",
        "mastery_level": "5"
      },
      {
        "id": "5048",
        "mastery_level": "6"
      },
      {
        "id": "2007",
        "mastery_level": "7"
      },
    ]
  },
  "5236": {
    "id": "5236",
    "name": "Somber City",
    "commander": {
        "id": "247"
    },
    "deck": [
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1610"
      },
      {
        "id": "1630"
      },
      {
        "id": "1328"
      },
      {
        "id": "5004"
      },
      {
        "id": "7024",
        "mastery_level": "2"
      },
      {
        "id": "1330",
        "mastery_level": "2"
      },
      {
        "id": "5050",
        "mastery_level": "3"
      },
      {
        "id": "1010",
        "mastery_level": "4"
      },
      {
        "id": "1312",
        "mastery_level": "5"
      },
      {
        "id": "1642",
        "mastery_level": "6"
      },
      {
        "id": "6000",
        "mastery_level": "7"
      },
    ]
  },
  "5237": {
    "id": "5237",
    "name": "High Stakes",
    "commander": {
        "id": "304"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1011"
      },
      {
        "id": "5020"
      },
      {
        "id": "2012"
      },
      {
        "id": "2014"
      },
      {
        "id": "7016"
      },
      {
        "id": "6022",
        "mastery_level": "2"
      },
      {
        "id": "1330",
        "mastery_level": "3"
      },
      {
        "id": "1319",
        "mastery_level": "4"
      },
      {
        "id": "5030",
        "mastery_level": "5"
      },
      {
        "id": "6018",
        "mastery_level": "6"
      },
      {
        "id": "6043",
        "mastery_level": "7"
      },
    ]
  },
  "5238": {
    "id": "5238",
    "name": "You Snooze You Lose",
    "commander": {
        "id": "307"
    },
    "deck": [
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1017"
      },
      {
        "id": "5016"
      },
      {
        "id": "1628"
      },
      {
        "id": "1028"
      },
      {
        "id": "1625",
        "mastery_level": "2"
      },
      {
        "id": "7030",
        "mastery_level": "3"
      },
      {
        "id": "6006",
        "mastery_level": "4"
      },
      {
        "id": "5030",
        "mastery_level": "5"
      },
      {
        "id": "1042",
        "mastery_level": "6"
      },
      {
        "id": "7001",
        "mastery_level": "7"
      },
    ]
  },
  "5239": {
    "id": "5239",
    "name": " Magistrate Quarters",
    "commander": {
        "id": "307"
    },
    "deck": [
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "2019"
      },
      {
        "id": "1027"
      },
      {
        "id": "1027"
      },
      {
        "id": "5010"
      },
      {
        "id": "2010",
        "mastery_level": "2"
      },
      {
        "id": "5046",
        "mastery_level": "2"
      },
      {
        "id": "5041",
        "mastery_level": "3"
      },
      {
        "id": "1029",
        "mastery_level": "4"
      },
      {
        "id": "2010",
        "mastery_level": "5"
      },
      {
        "id": "7043",
        "mastery_level": "6"
      },
      {
        "id": "5014",
        "mastery_level": "7"
      },
    ]
  },
  "5240": {
    "id": "5240",
    "name": "For Frobert!",
    "commander": {
        "id": "308"
    },
    "deck": [
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "7011"
      },
      {
        "id": "6010"
      },
      {
        "id": "6038"
      },
      {
        "id": "2020"
      },
      {
        "id": "2004",
        "mastery_level": "2"
      },
      {
        "id": "2005",
        "mastery_level": "2"
      },
      {
        "id": "1630",
        "mastery_level": "3"
      },
      {
        "id": "6042",
        "mastery_level": "4"
      },
      {
        "id": "6049",
        "mastery_level": "5"
      },
      {
        "id": "6014",
        "mastery_level": "6"
      },
      {
        "id": "6045",
        "mastery_level": "7"
      },
    ]
  },
  "5241": {
    "id": "5241",
    "name": "Toe Jam",
    "commander": {
        "id": "315"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "7055"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1616",
        "mastery_level": "2"
      },
      {
        "id": "7038",
        "mastery_level": "2"
      },
      {
        "id": "1614",
        "mastery_level": "3"
      },
      {
        "id": "2023",
        "mastery_level": "4"
      },
      {
        "id": "2041",
        "mastery_level": "5"
      },
      {
        "id": "6053",
        "mastery_level": "6"
      },
      {
        "id": "5031",
        "mastery_level": "7"
      },
    ]
  },
  "5242": {
    "id": "5242",
    "name": "Scamp Trap",
    "commander": {
        "id": "314"
    },
    "deck": [
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "6042"
      },
      {
        "id": "1617",
        "mastery_level": "2"
      },
      {
        "id": "2008",
        "mastery_level": "2"
      },
      {
        "id": "6017",
        "mastery_level": "3"
      },
      {
        "id": "5053",
        "mastery_level": "4"
      },
      {
        "id": "7045",
        "mastery_level": "5"
      },
      {
        "id": "2043",
        "mastery_level": "6"
      },
      {
        "id": "7043",
        "mastery_level": "7"
      },
    ]
  },
  "5243": {
    "id": "5243",
    "name": "Call of the Wyld",
    "commander": {
        "id": "313"
    },
    "deck": [
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "6006"
      },
      {
        "id": "6006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "6042"
      },
      {
        "id": "7035"
      },
      {
        "id": "1313",
        "mastery_level": "2"
      },
      {
        "id": "7045",
        "mastery_level": "2"
      },
      {
        "id": "1613",
        "mastery_level": "3"
      },
      {
        "id": "2020",
        "mastery_level": "4"
      },
      {
        "id": "7035",
        "mastery_level": "5"
      },
      {
        "id": "7048",
        "mastery_level": "6"
      },
      {
        "id": "5055",
        "mastery_level": "7"
      },
    ]
  },
  "5244": {
    "id": "5244",
    "name": "Worrywart",
    "commander": {
        "id": "262"
    },
    "deck": [
      {
        "id": "1615"
      },
      {
        "id": "1615"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "7022"
      },
      {
        "id": "7022"
      },
      {
        "id": "5020"
      },
      {
        "id": "7053"
      },
      {
        "id": "7007",
        "mastery_level": "2"
      },
      {
        "id": "7020",
        "mastery_level": "2"
      },
      {
        "id": "1012",
        "mastery_level": "3"
      },
      {
        "id": "2014",
        "mastery_level": "4"
      },
      {
        "id": "5011",
        "mastery_level": "5"
      },
      {
        "id": "7052",
        "mastery_level": "6"
      },
      {
        "id": "7039",
        "mastery_level": "7"
      },
    ]
  },
  "5245": {
    "id": "5245",
    "name": "The Storm Brewing",
    "commander": {
        "id": "314"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "2042"
      },
      {
        "id": "1315",
        "mastery_level": "2"
      },
      {
        "id": "1630",
        "mastery_level": "2"
      },
      {
        "id": "5006",
        "mastery_level": "3"
      },
      {
        "id": "2031",
        "mastery_level": "4"
      },
      {
        "id": "2023",
        "mastery_level": "5"
      },
      {
        "id": "7049",
        "mastery_level": "6"
      },
      {
        "id": "6052",
        "mastery_level": "7"
      },
    ]
  },
  "5246": {
    "id": "5246",
    "name": "Suspect Spotted",
    "commander": {
        "id": "315"
    },
    "deck": [
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "7051"
      },
      {
        "id": "6034"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1319"
      },
      {
        "id": "7012",
        "mastery_level": "2"
      },
      {
        "id": "2019",
        "mastery_level": "2"
      },
      {
        "id": "1317",
        "mastery_level": "3"
      },
      {
        "id": "7038",
        "mastery_level": "4"
      },
      {
        "id": "7035",
        "mastery_level": "5"
      },
      {
        "id": "7052",
        "mastery_level": "6"
      },
      {
        "id": "6018",
        "mastery_level": "7"
      },
    ]
  },
  "5247": {
    "id": "5247",
    "name": "Stop and Drop",
    "commander": {
        "id": "310"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "6038"
      },
      {
        "id": "6021"
      },
      {
        "id": "1313",
        "mastery_level": "2"
      },
      {
        "id": "6051",
        "mastery_level": "2"
      },
      {
        "id": "6012",
        "mastery_level": "3"
      },
      {
        "id": "6050",
        "mastery_level": "4"
      },
      {
        "id": "2032",
        "mastery_level": "5"
      },
      {
        "id": "6045",
        "mastery_level": "6"
      },
      {
        "id": "6049",
        "mastery_level": "7"
      },
    ]
  },
  "5248": {
    "id": "5248",
    "name": "Stronger Than You",
    "commander": {
        "id": "310"
    },
    "deck": [
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "1619"
      },
      {
        "id": "1619"
      },
      {
        "id": "2025"
      },
      {
        "id": "2027"
      },
      {
        "id": "2030"
      },
      {
        "id": "1014",
        "mastery_level": "2"
      },
      {
        "id": "1010",
        "mastery_level": "2"
      },
      {
        "id": "5028",
        "mastery_level": "3"
      },
      {
        "id": "1314",
        "mastery_level": "4"
      },
      {
        "id": "2027",
        "mastery_level": "5"
      },
      {
        "id": "1042",
        "mastery_level": "6"
      },
      {
        "id": "5055",
        "mastery_level": "7"
      },
    ]
  },
  "5249": {
    "id": "5249",
    "name": "Scent in the Wrong Direction",
    "commander": {
        "id": "313"
    },
    "deck": [
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "6050"
      },
      {
        "id": "1313",
        "mastery_level": "2"
      },
      {
        "id": "6054",
        "mastery_level": "3"
      },
      {
        "id": "1018",
        "mastery_level": "4"
      },
      {
        "id": "1627",
        "mastery_level": "5"
      },
      {
        "id": "2022",
        "mastery_level": "6"
      },
      {
        "id": "5051",
        "mastery_level": "7"
      },
    ]
  },
  "5250": {
    "id": "5250",
    "name": "Homeward Bound",
    "commander": {
        "id": "262"
    },
    "deck": [
      {
        "id": "5041"
      },
      {
        "id": "5040"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "1010",
        "mastery_level": "2"
      },
      {
        "id": "2025",
        "mastery_level": "3"
      },
      {
        "id": "1010",
        "mastery_level": "4"
      },
      {
        "id": "1031",
        "mastery_level": "5"
      },
      {
        "id": "5052",
        "mastery_level": "6"
      },
      {
        "id": "1343",
        "mastery_level": "7"
      },
    ]
  },
  "5251": {
    "id": "5251",
    "name": "Bleak Suspicions",
    "commander": {
        "id": "315"
    },
    "deck": [
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "2033"
      },
      {
        "id": "2024"
      },
      {
        "id": "6006",
        "mastery_level": "2"
      },
      {
        "id": "6034",
        "mastery_level": "3"
      },
      {
        "id": "6012",
        "mastery_level": "4"
      },
      {
        "id": "5033",
        "mastery_level": "5"
      },
      {
        "id": "6041",
        "mastery_level": "6"
      },
      {
        "id": "7033",
        "mastery_level": "7"
      },
    ]
  },
  "5252": {
    "id": "5252",
    "name": "Smoke and Embers",
    "commander": {
        "id": "262"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7053"
      },
      {
        "id": "2042"
      },
      {
        "id": "7055"
      },
      {
        "id": "1330",
        "mastery_level": "2"
      },
      {
        "id": "5058",
        "mastery_level": "3"
      },
      {
        "id": "1018",
        "mastery_level": "4"
      },
      {
        "id": "7055",
        "mastery_level": "5"
      },
      {
        "id": "5001",
        "mastery_level": "6"
      },
      {
        "id": "7056",
        "mastery_level": "7"
      },
    ]
  },
  "5253": {
    "id": "5253",
    "name": "Wrong Neighborhood",
    "commander": {
        "id": "314"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "5053"
      },
      {
        "id": "6042"
      },
      {
        "id": "6011"
      },
      {
        "id": "1331",
        "mastery_level": "2"
      },
      {
        "id": "2020",
        "mastery_level": "2"
      },
      {
        "id": "5010",
        "mastery_level": "3"
      },
      {
        "id": "1017",
        "mastery_level": "4"
      },
      {
        "id": "5021",
        "mastery_level": "5"
      },
      {
        "id": "6030",
        "mastery_level": "6"
      },
      {
        "id": "1342",
        "mastery_level": "7"
      },
    ]
  },
  "5254": {
    "id": "5254",
    "name": "Home Invasion",
    "commander": {
        "id": "315"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "7051"
      },
      {
        "id": "7041"
      },
      {
        "id": "5017",
        "mastery_level": "2"
      },
      {
        "id": "7011",
        "mastery_level": "3"
      },
      {
        "id": "7006",
        "mastery_level": "4"
      },
      {
        "id": "7038",
        "mastery_level": "5"
      },
      {
        "id": "5034",
        "mastery_level": "6"
      },
      {
        "id": "6033",
        "mastery_level": "7"
      },
    ]
  },
  "5255": {
    "id": "5255",
    "name": "Eerie Silence",
    "commander": {
        "id": "314"
    },
    "deck": [
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "6044"
      },
      {
        "id": "7024"
      },
      {
        "id": "7016",
        "mastery_level": "2"
      },
      {
        "id": "2034",
        "mastery_level": "3"
      },
      {
        "id": "1015",
        "mastery_level": "4"
      },
      {
        "id": "2032",
        "mastery_level": "5"
      },
      {
        "id": "7050",
        "mastery_level": "6"
      },
      {
        "id": "2015",
        "mastery_level": "7"
      },
    ]
  },
  "5256": {
    "id": "5256",
    "name": "Trouble at Home",
    "commander": {
        "id": "313"
    },
    "deck": [
      {
        "id": "1011"
      },
      {
        "id": "1011"
      },
      {
        "id": "5006"
      },
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "1629"
      },
      {
        "id": "7005"
      },
      {
        "id": "2002"
      },
      {
        "id": "2031",
        "mastery_level": "2"
      },
      {
        "id": "2008",
        "mastery_level": "2"
      },
      {
        "id": "7045",
        "mastery_level": "3"
      },
      {
        "id": "1018",
        "mastery_level": "4"
      },
      {
        "id": "2005",
        "mastery_level": "5"
      },
      {
        "id": "2022",
        "mastery_level": "6"
      },
      {
        "id": "7013",
        "mastery_level": "7"
      },
    ]
  },
  "5257": {
    "id": "5257",
    "name": "Red Alert",
    "commander": {
        "id": "262"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "2004"
      },
      {
        "id": "6021"
      },
      {
        "id": "5025"
      },
      {
        "id": "6006",
        "mastery_level": "2"
      },
      {
        "id": "6025",
        "mastery_level": "3"
      },
      {
        "id": "6007",
        "mastery_level": "4"
      },
      {
        "id": "5010",
        "mastery_level": "5"
      },
      {
        "id": "6023",
        "mastery_level": "6"
      },
      {
        "id": "5029",
        "mastery_level": "7"
      },
    ]
  },
  "5258": {
    "id": "5258",
    "name": "Goblin Intruders",
    "commander": {
        "id": "311"
    },
    "deck": [
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "7006"
      },
      {
        "id": "7015"
      },
      {
        "id": "1030"
      },
      {
        "id": "6046"
      },
      {
        "id": "2019",
        "mastery_level": "2"
      },
      {
        "id": "6004",
        "mastery_level": "3"
      },
      {
        "id": "6017",
        "mastery_level": "4"
      },
      {
        "id": "2010",
        "mastery_level": "5"
      },
      {
        "id": "5049",
        "mastery_level": "6"
      },
      {
        "id": "5042",
        "mastery_level": "7"
      },
    ]
  },
  "5259": {
    "id": "5259",
    "name": "Flanked",
    "commander": {
        "id": "313"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "6042"
      },
      {
        "id": "2001"
      },
      {
        "id": "6029"
      },
      {
        "id": "1332"
      },
      {
        "id": "5033",
        "mastery_level": "2"
      },
      {
        "id": "6016",
        "mastery_level": "2"
      },
      {
        "id": "6044",
        "mastery_level": "3"
      },
      {
        "id": "1311",
        "mastery_level": "4"
      },
      {
        "id": "2020",
        "mastery_level": "5"
      },
      {
        "id": "7019",
        "mastery_level": "6"
      },
      {
        "id": "6035",
        "mastery_level": "7"
      },
    ]
  },
  "5260": {
    "id": "5260",
    "name": "Making Omelettes",
    "commander": {
        "id": "311"
    },
    "deck": [
      {
        "id": "1615"
      },
      {
        "id": "1615"
      },
      {
        "id": "1012"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "5020"
      },
      {
        "id": "2034"
      },
      {
        "id": "5050"
      },
      {
        "id": "7007",
        "mastery_level": "2"
      },
      {
        "id": "1025",
        "mastery_level": "3"
      },
      {
        "id": "1615",
        "mastery_level": "4"
      },
      {
        "id": "1028",
        "mastery_level": "5"
      },
      {
        "id": "7042",
        "mastery_level": "6"
      },
      {
        "id": "6032",
        "mastery_level": "7"
      },
    ]
  },
  "5261": {
    "id": "5261",
    "name": "Motherly Instincts",
    "commander": {
        "id": "311"
    },
    "deck": [
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "7034"
      },
      {
        "id": "6038"
      },
      {
        "id": "5053"
      },
      {
        "id": "1315",
        "mastery_level": "2"
      },
      {
        "id": "7053",
        "mastery_level": "3"
      },
      {
        "id": "1613",
        "mastery_level": "4"
      },
      {
        "id": "2020",
        "mastery_level": "5"
      },
      {
        "id": "6037",
        "mastery_level": "6"
      },
      {
        "id": "5034",
        "mastery_level": "7"
      },
    ]
  },
  "5262": {
    "id": "5262",
    "name": "Ring Leader",
    "commander": {
        "id": "312"
    },
    "deck": [
      {
        "id": "5017"
      },
      {
        "id": "6022"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "5021"
      },
      {
        "id": "1026"
      },
      {
        "id": "5044"
      },
      {
        "id": "2001"
      },
      {
        "id": "6054",
        "mastery_level": "2"
      },
      {
        "id": "7024",
        "mastery_level": "3"
      },
      {
        "id": "1015",
        "mastery_level": "4"
      },
      {
        "id": "6005",
        "mastery_level": "5"
      },
      {
        "id": "5031",
        "mastery_level": "6"
      },
      {
        "id": "6043",
        "mastery_level": "7"
      },
    ]
  },
  "5263": {
    "id": "5263",
    "name": "Call of the Dragon",
    "commander": {
        "id": "311"
    },
    "deck": [
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "2005"
      },
      {
        "id": "1330"
      },
      {
        "id": "2041"
      },
      {
        "id": "6046"
      },
      {
        "id": "2040",
        "mastery_level": "2"
      },
      {
        "id": "6031",
        "mastery_level": "2"
      },
      {
        "id": "2009",
        "mastery_level": "3"
      },
      {
        "id": "2032",
        "mastery_level": "4"
      },
      {
        "id": "6036",
        "mastery_level": "5"
      },
      {
        "id": "1343",
        "mastery_level": "6"
      },
      {
        "id": "6045",
        "mastery_level": "7"
      },
    ]
  },
  "5264": {
    "id": "5264",
    "name": "Nope!",
    "commander": {
        "id": "312"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "2040"
      },
      {
        "id": "6050"
      },
      {
        "id": "6054"
      },
      {
        "id": "6036"
      },
      {
        "id": "2040",
        "mastery_level": "2"
      },
      {
        "id": "6020",
        "mastery_level": "2"
      },
      {
        "id": "7030",
        "mastery_level": "3"
      },
      {
        "id": "2042",
        "mastery_level": "4"
      },
      {
        "id": "6014",
        "mastery_level": "5"
      },
      {
        "id": "6055",
        "mastery_level": "6"
      },
      {
        "id": "5047",
        "mastery_level": "7"
      },
    ]
  },
  "5265": {
    "id": "5265",
    "name": "Nervous Flier",
    "commander": {
        "id": "226"
    },
    "deck": [
      {
        "id": "8025"
      },
      {
        "id": "8025"
      },
      {
        "id": "8025"
      },
      {
        "id": "1317"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "1325",
        "mastery_level": "2"
      },
      {
        "id": "6010",
        "mastery_level": "2"
      },
      {
        "id": "8025",
        "mastery_level": "3"
      },
      {
        "id": "6026",
        "mastery_level": "4"
      },
      {
        "id": "8025",
        "mastery_level": "5"
      },
      {
        "id": "8025",
        "mastery_level": "6"
      },
      {
        "id": "6024",
        "mastery_level": "7"
      },
    ]
  },
  "5266": {
    "id": "5266",
    "name": "In Need of Assistance",
    "commander": {
        "id": "304"
    },
    "deck": [
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "1613"
      },
      {
        "id": "7061"
      },
      {
        "id": "1619",
        "mastery_level": "2"
      },
      {
        "id": "7047",
        "mastery_level": "2"
      },
      {
        "id": "1313",
        "mastery_level": "3"
      },
      {
        "id": "6056",
        "mastery_level": "4"
      },
      {
        "id": "7038",
        "mastery_level": "5"
      },
      {
        "id": "6043",
        "mastery_level": "6"
      },
      {
        "id": "7052",
        "mastery_level": "7"
      },
    ]
  },
  "5267": {
    "id": "5267",
    "name": "Hope on the Horizon",
    "commander": {
        "id": "304"
    },
    "deck": [
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "5030"
      },
      {
        "id": "5028"
      },
      {
        "id": "1614",
        "mastery_level": "2"
      },
      {
        "id": "7024",
        "mastery_level": "2"
      },
      {
        "id": "6007",
        "mastery_level": "3"
      },
      {
        "id": "6054",
        "mastery_level": "4"
      },
      {
        "id": "6011",
        "mastery_level": "5"
      },
      {
        "id": "5031",
        "mastery_level": "6"
      },
      {
        "id": "5047",
        "mastery_level": "7"
      },
    ]
  },
  "5268": {
    "id": "5268",
    "name": "First Contact",
    "commander": {
        "id": "316"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "2045"
      },
      {
        "id": "6042"
      },
      {
        "id": "1613",
        "mastery_level": "2"
      },
      {
        "id": "5053",
        "mastery_level": "2"
      },
      {
        "id": "1617",
        "mastery_level": "3"
      },
      {
        "id": "2020",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "5059",
        "mastery_level": "6"
      },
      {
        "id": "5032",
        "mastery_level": "7"
      },
    ]
  },
  "5269": {
    "id": "5269",
    "name": "Shelter for the Wounded",
    "commander": {
        "id": "317"
    },
    "deck": [
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "6006"
      },
      {
        "id": "6006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "1331"
      },
      {
        "id": "7006",
        "mastery_level": "2"
      },
      {
        "id": "1331",
        "mastery_level": "2"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "2012",
        "mastery_level": "4"
      },
      {
        "id": "1332",
        "mastery_level": "5"
      },
      {
        "id": "6035",
        "mastery_level": "6"
      },
      {
        "id": "5037",
        "mastery_level": "7"
      },
    ]
  },
  "5270": {
    "id": "5270",
    "name": "To the Inferno",
    "commander": {
        "id": "317"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "5022"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "7055"
      },
      {
        "id": "1312",
        "mastery_level": "2"
      },
      {
        "id": "2046",
        "mastery_level": "2"
      },
      {
        "id": "6012",
        "mastery_level": "3"
      },
      {
        "id": "2040",
        "mastery_level": "4"
      },
      {
        "id": "5058",
        "mastery_level": "5"
      },
      {
        "id": "7058",
        "mastery_level": "6"
      },
      {
        "id": "6055",
        "mastery_level": "7"
      },
    ]
  },
  "5271": {
    "id": "5271",
    "name": "Teamwork",
    "commander": {
        "id": "314"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "5060"
      },
      {
        "id": "5053"
      },
      {
        "id": "1011",
        "mastery_level": "2"
      },
      {
        "id": "1328",
        "mastery_level": "2"
      },
      {
        "id": "1613",
        "mastery_level": "3"
      },
      {
        "id": "5015",
        "mastery_level": "4"
      },
      {
        "id": "5041",
        "mastery_level": "5"
      },
      {
        "id": "5027",
        "mastery_level": "6"
      },
      {
        "id": "5018",
        "mastery_level": "7"
      },
    ]
  },
  "5272": {
    "id": "5272",
    "name": "Fire Extinguisher",
    "commander": {
        "id": "319"
    },
    "deck": [
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1616"
      },
      {
        "id": "1616"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "7016"
      },
      {
        "id": "1617",
        "mastery_level": "2"
      },
      {
        "id": "6020",
        "mastery_level": "2"
      },
      {
        "id": "5006",
        "mastery_level": "3"
      },
      {
        "id": "6051",
        "mastery_level": "4"
      },
      {
        "id": "7053",
        "mastery_level": "5"
      },
      {
        "id": "7018",
        "mastery_level": "6"
      },
      {
        "id": "6060",
        "mastery_level": "7"
      },
    ]
  },
  "5273": {
    "id": "5273",
    "name": "Calm After the Storm",
    "commander": {
        "id": "317"
    },
    "deck": [
      {
        "id": "6006"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "5062"
      },
      {
        "id": "5053"
      },
      {
        "id": "1613",
        "mastery_level": "2"
      },
      {
        "id": "1028",
        "mastery_level": "2"
      },
      {
        "id": "7006",
        "mastery_level": "3"
      },
      {
        "id": "2045",
        "mastery_level": "4"
      },
      {
        "id": "5060",
        "mastery_level": "5"
      },
      {
        "id": "5059",
        "mastery_level": "6"
      },
      {
        "id": "7049",
        "mastery_level": "7"
      },
    ]
  },
  "5274": {
    "id": "5274",
    "name": "Damage Done",
    "commander": {
        "id": "319"
    },
    "deck": [
      {
        "id": "7057"
      },
      {
        "id": "7055"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1613",
        "mastery_level": "2"
      },
      {
        "id": "7055",
        "mastery_level": "3"
      },
      {
        "id": "1018",
        "mastery_level": "4"
      },
      {
        "id": "2023",
        "mastery_level": "5"
      },
      {
        "id": "7058",
        "mastery_level": "6"
      },
      {
        "id": "6060",
        "mastery_level": "7"
      },
    ]
  },
  "5275": {
    "id": "5275",
    "name": "Surprise Party",
    "commander": {
        "id": "321"
    },
    "deck": [
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "7006"
      },
      {
        "id": "2042"
      },
      {
        "id": "6061"
      },
      {
        "id": "2031"
      },
      {
        "id": "1311",
        "mastery_level": "2"
      },
      {
        "id": "6015",
        "mastery_level": "3"
      },
      {
        "id": "5017",
        "mastery_level": "4"
      },
      {
        "id": "1325",
        "mastery_level": "5"
      },
      {
        "id": "7046",
        "mastery_level": "6"
      },
      {
        "id": "6040",
        "mastery_level": "7"
      },
    ]
  },
  "5276": {
    "id": "5276",
    "name": "Bombardiers Ahoy",
    "commander": {
        "id": "318"
    },
    "deck": [
      {
        "id": "6025"
      },
      {
        "id": "6025"
      },
      {
        "id": "2033"
      },
      {
        "id": "2046"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1314"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "6061",
        "mastery_level": "2"
      },
      {
        "id": "1613",
        "mastery_level": "2"
      },
      {
        "id": "5025",
        "mastery_level": "3"
      },
      {
        "id": "6006",
        "mastery_level": "4"
      },
      {
        "id": "2044",
        "mastery_level": "5"
      },
      {
        "id": "6057",
        "mastery_level": "6"
      },
      {
        "id": "6058",
        "mastery_level": "7"
      },
    ]
  },
  "5277": {
    "id": "5277",
    "name": "Citizen Defense",
    "commander": {
        "id": "320"
    },
    "deck": [
      {
        "id": "7035"
      },
      {
        "id": "7020"
      },
      {
        "id": "7022"
      },
      {
        "id": "7022"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "2019",
        "mastery_level": "2"
      },
      {
        "id": "2012",
        "mastery_level": "3"
      },
      {
        "id": "6022",
        "mastery_level": "4"
      },
      {
        "id": "7061",
        "mastery_level": "5"
      },
      {
        "id": "2022",
        "mastery_level": "6"
      },
      {
        "id": "6033",
        "mastery_level": "7"
      },
    ]
  },
  "5278": {
    "id": "5278",
    "name": "Goblin Behind the Curtain",
    "commander": {
        "id": "321"
    },
    "deck": [
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "7021"
      },
      {
        "id": "2009"
      },
      {
        "id": "7034",
        "mastery_level": "2"
      },
      {
        "id": "6031",
        "mastery_level": "3"
      },
      {
        "id": "6006",
        "mastery_level": "4"
      },
      {
        "id": "7020",
        "mastery_level": "5"
      },
      {
        "id": "7059",
        "mastery_level": "6"
      },
      {
        "id": "7060",
        "mastery_level": "7"
      },
    ]
  },
  "5279": {
    "id": "5279",
    "name": "Search and Destroy",
    "commander": {
        "id": "318"
    },
    "deck": [
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "1018"
      },
      {
        "id": "2004"
      },
      {
        "id": "5035"
      },
      {
        "id": "5021"
      },
      {
        "id": "1017",
        "mastery_level": "2"
      },
      {
        "id": "5060",
        "mastery_level": "3"
      },
      {
        "id": "1619",
        "mastery_level": "4"
      },
      {
        "id": "6061",
        "mastery_level": "5"
      },
      {
        "id": "5031",
        "mastery_level": "6"
      },
      {
        "id": "5019",
        "mastery_level": "7"
      },
    ]
  },
  "5280": {
    "id": "5280",
    "name": "On the Hunt",
    "commander": {
        "id": "321"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "2009"
      },
      {
        "id": "2042"
      },
      {
        "id": "7015"
      },
      {
        "id": "7021",
        "mastery_level": "2"
      },
      {
        "id": "7047",
        "mastery_level": "3"
      },
      {
        "id": "1614",
        "mastery_level": "4"
      },
      {
        "id": "7004",
        "mastery_level": "5"
      },
      {
        "id": "6041",
        "mastery_level": "6"
      },
      {
        "id": "7044",
        "mastery_level": "7"
      },
    ]
  },
  "5281": {
    "id": "5281",
    "name": "Bunch of Bullies",
    "commander": {
        "id": "318"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "6050"
      },
      {
        "id": "2027"
      },
      {
        "id": "2027"
      },
      {
        "id": "6061",
        "mastery_level": "2"
      },
      {
        "id": "6056",
        "mastery_level": "2"
      },
      {
        "id": "2032",
        "mastery_level": "3"
      },
      {
        "id": "1613",
        "mastery_level": "4"
      },
      {
        "id": "7038",
        "mastery_level": "5"
      },
      {
        "id": "5043",
        "mastery_level": "6"
      },
      {
        "id": "1042",
        "mastery_level": "7"
      },
    ]
  },
  "5282": {
    "id": "5282",
    "name": "To the Rescue",
    "commander": {
        "id": "319"
    },
    "deck": [
      {
        "id": "5016"
      },
      {
        "id": "5041"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "6034"
      },
      {
        "id": "2023"
      },
      {
        "id": "2029",
        "mastery_level": "2"
      },
      {
        "id": "1014",
        "mastery_level": "2"
      },
      {
        "id": "5040",
        "mastery_level": "3"
      },
      {
        "id": "1014",
        "mastery_level": "4"
      },
      {
        "id": "6038",
        "mastery_level": "5"
      },
      {
        "id": "5018",
        "mastery_level": "6"
      },
      {
        "id": "6039",
        "mastery_level": "7"
      },
    ]
  },
  "5283": {
    "id": "5283",
    "name": "Power Down",
    "commander": {
        "id": "320"
    },
    "deck": [
      {
        "id": "1332"
      },
      {
        "id": "7055"
      },
      {
        "id": "6044"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "2030",
        "mastery_level": "2"
      },
      {
        "id": "7057",
        "mastery_level": "3"
      },
      {
        "id": "1319",
        "mastery_level": "4"
      },
      {
        "id": "6054",
        "mastery_level": "5"
      },
      {
        "id": "5047",
        "mastery_level": "6"
      },
      {
        "id": "6028",
        "mastery_level": "7"
      },
    ]
  },
  "5284": {
    "id": "5284",
    "name": "Sneaky Sneaks",
    "commander": {
        "id": "320"
    },
    "deck": [
      {
        "id": "2009"
      },
      {
        "id": "2008"
      },
      {
        "id": "6051"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "6046",
        "mastery_level": "2"
      },
      {
        "id": "7024",
        "mastery_level": "3"
      },
      {
        "id": "6022",
        "mastery_level": "4"
      },
      {
        "id": "1032",
        "mastery_level": "5"
      },
      {
        "id": "7013",
        "mastery_level": "6"
      },
      {
        "id": "1342",
        "mastery_level": "7"
      },
    ]
  },
  "5285": {
    "id": "5285",
    "name": "Artifact Located",
    "commander": {
        "id": "319"
    },
    "deck": [
      {
        "id": "7051"
      },
      {
        "id": "2045"
      },
      {
        "id": "7053"
      },
      {
        "id": "6034"
      },
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613",
        "mastery_level": "2"
      },
      {
        "id": "2023",
        "mastery_level": "3"
      },
      {
        "id": "1312",
        "mastery_level": "4"
      },
      {
        "id": "6015",
        "mastery_level": "5"
      },
      {
        "id": "6057",
        "mastery_level": "6"
      },
      {
        "id": "6060",
        "mastery_level": "7"
      },
    ]
  },
  "5286": {
    "id": "5286",
    "name": "Pass Off",
    "commander": {
        "id": "321"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "6017"
      },
      {
        "id": "6011"
      },
      {
        "id": "2046"
      },
      {
        "id": "2046"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "1325"
      },
      {
        "id": "7021",
        "mastery_level": "2"
      },
      {
        "id": "5053",
        "mastery_level": "2"
      },
      {
        "id": "6056",
        "mastery_level": "3"
      },
      {
        "id": "1010",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "5013",
        "mastery_level": "6"
      },
      {
        "id": "6053",
        "mastery_level": "7"
      },
    ]
  },
  "5287": {
    "id": "5287",
    "name": "Victorious Retreat",
    "commander": {
        "id": "322"
    },
    "deck": [
      {
        "id": "5062"
      },
      {
        "id": "6042"
      },
      {
        "id": "6031"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "2031",
        "mastery_level": "2"
      },
      {
        "id": "2024",
        "mastery_level": "2"
      },
      {
        "id": "5053",
        "mastery_level": "3"
      },
      {
        "id": "1318",
        "mastery_level": "4"
      },
      {
        "id": "1330",
        "mastery_level": "5"
      },
      {
        "id": "6033",
        "mastery_level": "6"
      },
      {
        "id": "5059",
        "mastery_level": "7"
      },
    ]
  },
  "5288": {
    "id": "5288",
    "name": "Not So Fast",
    "commander": {
        "id": "320"
    },
    "deck": [
      {
        "id": "6025"
      },
      {
        "id": "2044"
      },
      {
        "id": "7061"
      },
      {
        "id": "2003"
      },
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "7012"
      },
      {
        "id": "7047",
        "mastery_level": "2"
      },
      {
        "id": "5025",
        "mastery_level": "2"
      },
      {
        "id": "7061",
        "mastery_level": "3"
      },
      {
        "id": "7035",
        "mastery_level": "4"
      },
      {
        "id": "2031",
        "mastery_level": "5"
      },
      {
        "id": "7048",
        "mastery_level": "6"
      },
      {
        "id": "6058",
        "mastery_level": "7"
      },
    ]
  },
  "5289": {
    "id": "5289",
    "name": "Puddin Pops",
    "commander": {
        "id": "322"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "2032"
      },
      {
        "id": "2033"
      },
      {
        "id": "7004"
      },
      {
        "id": "2045"
      },
      {
        "id": "2004",
        "mastery_level": "2"
      },
      {
        "id": "1631",
        "mastery_level": "2"
      },
      {
        "id": "6042",
        "mastery_level": "3"
      },
      {
        "id": "7004",
        "mastery_level": "4"
      },
      {
        "id": "6057",
        "mastery_level": "5"
      },
      {
        "id": "5061",
        "mastery_level": "6"
      },
      {
        "id": "7039",
        "mastery_level": "7"
      },
    ]
  },
  "5290": {
    "id": "5290",
    "name": "Foreign Fires",
    "commander": {
        "id": "304"
    },
    "deck": [
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "6066"
      },
      {
        "id": "1312",
        "mastery_level": "2"
      },
      {
        "id": "2031",
        "mastery_level": "2"
      },
      {
        "id": "6012",
        "mastery_level": "3"
      },
      {
        "id": "2008",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "7046",
        "mastery_level": "6"
      },
      {
        "id": "6055",
        "mastery_level": "7"
      },
    ]
  },
  "5291": {
    "id": "5291",
    "name": "Reports from Afar",
    "commander": {
        "id": "327"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1312"
      },
      {
        "id": "2048"
      },
      {
        "id": "1318",
        "mastery_level": "2"
      },
      {
        "id": "5028",
        "mastery_level": "2"
      },
      {
        "id": "1315",
        "mastery_level": "3"
      },
      {
        "id": "5041",
        "mastery_level": "4"
      },
      {
        "id": "2042",
        "mastery_level": "5"
      },
      {
        "id": "5042",
        "mastery_level": "6"
      },
      {
        "id": "7052",
        "mastery_level": "7"
      },
    ]
  },
  "5292": {
    "id": "5292",
    "name": "Time Out",
    "commander": {
        "id": "324"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "2045"
      },
      {
        "id": "5053"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "1616",
        "mastery_level": "2"
      },
      {
        "id": "6042",
        "mastery_level": "2"
      },
      {
        "id": "5022",
        "mastery_level": "3"
      },
      {
        "id": "7062",
        "mastery_level": "4"
      },
      {
        "id": "7038",
        "mastery_level": "5"
      },
      {
        "id": "5059",
        "mastery_level": "6"
      },
      {
        "id": "5055",
        "mastery_level": "7"
      },
    ]
  },
  "5293": {
    "id": "5293",
    "name": "Tales from Tarragon",
    "commander": {
        "id": "273"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "7051"
      },
      {
        "id": "6006",
        "mastery_level": "2"
      },
      {
        "id": "2046",
        "mastery_level": "2"
      },
      {
        "id": "7007",
        "mastery_level": "3"
      },
      {
        "id": "2024",
        "mastery_level": "4"
      },
      {
        "id": "6050",
        "mastery_level": "5"
      },
      {
        "id": "6053",
        "mastery_level": "6"
      },
      {
        "id": "7054",
        "mastery_level": "7"
      },
    ]
  },
  "5294": {
    "id": "5294",
    "name": "Power Rush",
    "commander": {
        "id": "304"
    },
    "deck": [
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1619"
      },
      {
        "id": "1619"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "6056"
      },
      {
        "id": "5060"
      },
      {
        "id": "1018",
        "mastery_level": "2"
      },
      {
        "id": "6054",
        "mastery_level": "2"
      },
      {
        "id": "5007",
        "mastery_level": "3"
      },
      {
        "id": "2040",
        "mastery_level": "4"
      },
      {
        "id": "6063",
        "mastery_level": "5"
      },
      {
        "id": "6055",
        "mastery_level": "6"
      },
      {
        "id": "6060",
        "mastery_level": "7"
      },
    ]
  },
  "5295": {
    "id": "5295",
    "name": "Until Dawn",
    "commander": {
        "id": "324"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "2027"
      },
      {
        "id": "2029"
      },
      {
        "id": "1018",
        "mastery_level": "2"
      },
      {
        "id": "2027",
        "mastery_level": "2"
      },
      {
        "id": "1014",
        "mastery_level": "3"
      },
      {
        "id": "2025",
        "mastery_level": "4"
      },
      {
        "id": "6042",
        "mastery_level": "5"
      },
      {
        "id": "5031",
        "mastery_level": "6"
      },
      {
        "id": "5057",
        "mastery_level": "7"
      },
    ]
  },
  "5296": {
    "id": "5296",
    "name": "Second Chance",
    "commander": {
        "id": "326"
    },
    "deck": [
      {
        "id": "1011"
      },
      {
        "id": "1011"
      },
      {
        "id": "1011"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "5046"
      },
      {
        "id": "2010",
        "mastery_level": "2"
      },
      {
        "id": "6022",
        "mastery_level": "3"
      },
      {
        "id": "7021",
        "mastery_level": "4"
      },
      {
        "id": "7062",
        "mastery_level": "5"
      },
      {
        "id": "6047",
        "mastery_level": "6"
      },
      {
        "id": "6032",
        "mastery_level": "7"
      },
    ]
  },
  "5297": {
    "id": "5297",
    "name": "Forecasting",
    "commander": {
        "id": "273"
    },
    "deck": [
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "2023"
      },
      {
        "id": "1314",
        "mastery_level": "2"
      },
      {
        "id": "1632",
        "mastery_level": "3"
      },
      {
        "id": "5022",
        "mastery_level": "4"
      },
      {
        "id": "1332",
        "mastery_level": "5"
      },
      {
        "id": "6027",
        "mastery_level": "6"
      },
      {
        "id": "6037",
        "mastery_level": "7"
      },
    ]
  },
  "5298": {
    "id": "5298",
    "name": "Shadow from Above",
    "commander": {
        "id": "304"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "1614"
      },
      {
        "id": "1614"
      },
      {
        "id": "6034"
      },
      {
        "id": "7034"
      },
      {
        "id": "1616",
        "mastery_level": "2"
      },
      {
        "id": "2034",
        "mastery_level": "3"
      },
      {
        "id": "1015",
        "mastery_level": "4"
      },
      {
        "id": "6038",
        "mastery_level": "5"
      },
      {
        "id": "7040",
        "mastery_level": "6"
      },
      {
        "id": "7063",
        "mastery_level": "7"
      },
    ]
  },
  "5299": {
    "id": "5299",
    "name": "Through the Looking Glass",
    "commander": {
        "id": "327"
    },
    "deck": [
      {
        "id": "1011"
      },
      {
        "id": "1011"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "6031"
      },
      {
        "id": "2048"
      },
      {
        "id": "1313",
        "mastery_level": "2"
      },
      {
        "id": "7041",
        "mastery_level": "3"
      },
      {
        "id": "1014",
        "mastery_level": "4"
      },
      {
        "id": "1630",
        "mastery_level": "5"
      },
      {
        "id": "7048",
        "mastery_level": "6"
      },
      {
        "id": "1343",
        "mastery_level": "7"
      },
    ]
  },
  "53": {
    "id": "53",
    "name": "Thick Bramble",
    "commander": {
        "id": "201"
    },
    "deck": [
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1603",
        "level": "2"
      },
      {
        "id": "1604"
      },
      {
        "id": "1604",
        "level": "2"
      },
      {
        "id": "1605"
      },
      {
        "id": "1606"
      },
      {
        "id": "1606"
      },
      {
        "id": "1607"
      },
      {
        "id": "1607"
      },
      {
        "id": "1002"
      },
    ]
  },
  "5300": {
    "id": "5300",
    "name": "Security Blanket",
    "commander": {
        "id": "325"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "5050"
      },
      {
        "id": "7035"
      },
      {
        "id": "7061"
      },
      {
        "id": "6061",
        "mastery_level": "2"
      },
      {
        "id": "1617",
        "mastery_level": "2"
      },
      {
        "id": "5025",
        "mastery_level": "3"
      },
      {
        "id": "1618",
        "mastery_level": "4"
      },
      {
        "id": "7030",
        "mastery_level": "5"
      },
      {
        "id": "7037",
        "mastery_level": "6"
      },
      {
        "id": "2047",
        "mastery_level": "7"
      },
    ]
  },
  "5301": {
    "id": "5301",
    "name": "Spy Watch",
    "commander": {
        "id": "326"
    },
    "deck": [
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "2044"
      },
      {
        "id": "6050"
      },
      {
        "id": "2032",
        "mastery_level": "2"
      },
      {
        "id": "7053",
        "mastery_level": "3"
      },
      {
        "id": "5012",
        "mastery_level": "4"
      },
      {
        "id": "5024",
        "mastery_level": "5"
      },
      {
        "id": "6040",
        "mastery_level": "6"
      },
      {
        "id": "6023",
        "mastery_level": "7"
      },
    ]
  },
  "5302": {
    "id": "5302",
    "name": "Gift from Beetleton",
    "commander": {
        "id": "304"
    },
    "deck": [
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1615"
      },
      {
        "id": "1615"
      },
      {
        "id": "1615"
      },
      {
        "id": "6036"
      },
      {
        "id": "1332"
      },
      {
        "id": "1614",
        "mastery_level": "2"
      },
      {
        "id": "6021",
        "mastery_level": "3"
      },
      {
        "id": "1314",
        "mastery_level": "4"
      },
      {
        "id": "7035",
        "mastery_level": "5"
      },
      {
        "id": "6030",
        "mastery_level": "6"
      },
      {
        "id": "7036",
        "mastery_level": "7"
      },
    ]
  },
  "5303": {
    "id": "5303",
    "name": "Upkeep",
    "commander": {
        "id": "325"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "1011"
      },
      {
        "id": "1011"
      },
      {
        "id": "1011"
      },
      {
        "id": "7024"
      },
      {
        "id": "2020"
      },
      {
        "id": "6029"
      },
      {
        "id": "6029",
        "mastery_level": "2"
      },
      {
        "id": "6056",
        "mastery_level": "2"
      },
      {
        "id": "5035",
        "mastery_level": "3"
      },
      {
        "id": "5012",
        "mastery_level": "4"
      },
      {
        "id": "6061",
        "mastery_level": "5"
      },
      {
        "id": "7063",
        "mastery_level": "6"
      },
      {
        "id": "7019",
        "mastery_level": "7"
      },
    ]
  },
  "5304": {
    "id": "5304",
    "name": "Automated System",
    "commander": {
        "id": "326"
    },
    "deck": [
      {
        "id": "1318"
      },
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "2011"
      },
      {
        "id": "2014"
      },
      {
        "id": "6051",
        "mastery_level": "2"
      },
      {
        "id": "5050",
        "mastery_level": "3"
      },
      {
        "id": "1019",
        "mastery_level": "4"
      },
      {
        "id": "5016",
        "mastery_level": "5"
      },
      {
        "id": "5052",
        "mastery_level": "6"
      },
      {
        "id": "1043",
        "mastery_level": "7"
      },
    ]
  },
  "5305": {
    "id": "5305",
    "name": "Break Time",
    "commander": {
        "id": "327"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "6054"
      },
      {
        "id": "2042"
      },
      {
        "id": "6042"
      },
      {
        "id": "5060",
        "mastery_level": "2"
      },
      {
        "id": "7006",
        "mastery_level": "2"
      },
      {
        "id": "2031",
        "mastery_level": "3"
      },
      {
        "id": "1312",
        "mastery_level": "4"
      },
      {
        "id": "6042",
        "mastery_level": "5"
      },
      {
        "id": "6033",
        "mastery_level": "6"
      },
      {
        "id": "5055",
        "mastery_level": "7"
      },
    ]
  },
  "5306": {
    "id": "5306",
    "name": "Red Handed",
    "commander": {
        "id": "323"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "6006"
      },
      {
        "id": "6006"
      },
      {
        "id": "6056"
      },
      {
        "id": "7062"
      },
      {
        "id": "2033"
      },
      {
        "id": "6063",
        "mastery_level": "2"
      },
      {
        "id": "7011",
        "mastery_level": "2"
      },
      {
        "id": "2046",
        "mastery_level": "3"
      },
      {
        "id": "1319",
        "mastery_level": "4"
      },
      {
        "id": "2005",
        "mastery_level": "5"
      },
      {
        "id": "6043",
        "mastery_level": "6"
      },
      {
        "id": "6057",
        "mastery_level": "7"
      },
    ]
  },
  "5307": {
    "id": "5307",
    "name": "Back Home",
    "commander": {
        "id": "273"
    },
    "deck": [
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "7057"
      },
      {
        "id": "6054"
      },
      {
        "id": "7055",
        "mastery_level": "2"
      },
      {
        "id": "2030",
        "mastery_level": "3"
      },
      {
        "id": "5006",
        "mastery_level": "4"
      },
      {
        "id": "5004",
        "mastery_level": "5"
      },
      {
        "id": "7058",
        "mastery_level": "6"
      },
      {
        "id": "5056",
        "mastery_level": "7"
      },
    ]
  },
  "5308": {
    "id": "5308",
    "name": "Bad News",
    "commander": {
        "id": "326"
    },
    "deck": [
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "5065"
      },
      {
        "id": "2050"
      },
      {
        "id": "5017",
        "mastery_level": "2"
      },
      {
        "id": "6066",
        "mastery_level": "3"
      },
      {
        "id": "1615",
        "mastery_level": "4"
      },
      {
        "id": "6044",
        "mastery_level": "5"
      },
      {
        "id": "7064",
        "mastery_level": "6"
      },
      {
        "id": "2051",
        "mastery_level": "7"
      },
    ]
  },
  "5309": {
    "id": "5309",
    "name": "Ancient History",
    "commander": {
        "id": "324"
    },
    "deck": [
      {
        "id": "1011"
      },
      {
        "id": "1011"
      },
      {
        "id": "1011"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1627"
      },
      {
        "id": "6042"
      },
      {
        "id": "5053"
      },
      {
        "id": "2025",
        "mastery_level": "2"
      },
      {
        "id": "7006",
        "mastery_level": "2"
      },
      {
        "id": "2020",
        "mastery_level": "3"
      },
      {
        "id": "5022",
        "mastery_level": "4"
      },
      {
        "id": "6056",
        "mastery_level": "5"
      },
      {
        "id": "5029",
        "mastery_level": "6"
      },
      {
        "id": "6045",
        "mastery_level": "7"
      },
    ]
  },
  "5310": {
    "id": "5310",
    "name": "Dragon Breeding Ground",
    "commander": {
        "id": "327"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "7045"
      },
      {
        "id": "2031"
      },
      {
        "id": "6031"
      },
      {
        "id": "7015",
        "mastery_level": "2"
      },
      {
        "id": "2041",
        "mastery_level": "2"
      },
      {
        "id": "2048",
        "mastery_level": "3"
      },
      {
        "id": "7006",
        "mastery_level": "4"
      },
      {
        "id": "2002",
        "mastery_level": "5"
      },
      {
        "id": "5045",
        "mastery_level": "6"
      },
      {
        "id": "6013",
        "mastery_level": "7"
      },
    ]
  },
  "5311": {
    "id": "5311",
    "name": "Royal Report",
    "commander": {
        "id": "273"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1628"
      },
      {
        "id": "5058"
      },
      {
        "id": "7055"
      },
      {
        "id": "6051"
      },
      {
        "id": "5060",
        "mastery_level": "2"
      },
      {
        "id": "6020",
        "mastery_level": "2"
      },
      {
        "id": "2024",
        "mastery_level": "3"
      },
      {
        "id": "6051",
        "mastery_level": "4"
      },
      {
        "id": "7057",
        "mastery_level": "5"
      },
      {
        "id": "5001",
        "mastery_level": "6"
      },
      {
        "id": "6059",
        "mastery_level": "7"
      },
    ]
  },
  "5312": {
    "id": "5312",
    "name": "Backup has Arrived",
    "commander": {
        "id": "325"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "7061"
      },
      {
        "id": "2027"
      },
      {
        "id": "2027"
      },
      {
        "id": "7020"
      },
      {
        "id": "7011",
        "mastery_level": "2"
      },
      {
        "id": "6042",
        "mastery_level": "2"
      },
      {
        "id": "1028",
        "mastery_level": "3"
      },
      {
        "id": "7016",
        "mastery_level": "4"
      },
      {
        "id": "7042",
        "mastery_level": "5"
      },
      {
        "id": "5032",
        "mastery_level": "6"
      },
      {
        "id": "5008",
        "mastery_level": "7"
      },
    ]
  },
  "5313": {
    "id": "5313",
    "name": "Long Live the King",
    "commander": {
        "id": "321"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1328"
      },
      {
        "id": "1025"
      },
      {
        "id": "2024"
      },
      {
        "id": "1330",
        "mastery_level": "2"
      },
      {
        "id": "2001",
        "mastery_level": "3"
      },
      {
        "id": "6010",
        "mastery_level": "4"
      },
      {
        "id": "5044",
        "mastery_level": "5"
      },
      {
        "id": "6002",
        "mastery_level": "6"
      },
      {
        "id": "2055",
        "mastery_level": "7"
      },
    ]
  },
  "5314": {
    "id": "5314",
    "name": "The King of Con Artists",
    "commander": {
        "id": "318"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "2046"
      },
      {
        "id": "2004"
      },
      {
        "id": "6025"
      },
      {
        "id": "2050",
        "mastery_level": "2"
      },
      {
        "id": "7061",
        "mastery_level": "3"
      },
      {
        "id": "11628",
        "mastery_level": "4"
      },
      {
        "id": "5044",
        "mastery_level": "5"
      },
      {
        "id": "7003",
        "mastery_level": "6"
      },
      {
        "id": "6003",
        "mastery_level": "7"
      },
    ]
  },
  "5315": {
    "id": "5315",
    "name": "Pipe Dreams",
    "commander": {
        "id": "311"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "6015"
      },
      {
        "id": "2049"
      },
      {
        "id": "6021"
      },
      {
        "id": "7015",
        "mastery_level": "2"
      },
      {
        "id": "6044",
        "mastery_level": "3"
      },
      {
        "id": "7065",
        "mastery_level": "4"
      },
      {
        "id": "5016",
        "mastery_level": "5"
      },
      {
        "id": "6052",
        "mastery_level": "6"
      },
      {
        "id": "5070",
        "mastery_level": "7"
      },
    ]
  },
  "5316": {
    "id": "5316",
    "name": "Glory Earned",
    "commander": {
        "id": "321"
    },
    "deck": [
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7006"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "6011"
      },
      {
        "id": "5004"
      },
      {
        "id": "6050"
      },
      {
        "id": "7041",
        "mastery_level": "2"
      },
      {
        "id": "7038",
        "mastery_level": "3"
      },
      {
        "id": "11028",
        "mastery_level": "4"
      },
      {
        "id": "5016",
        "mastery_level": "5"
      },
      {
        "id": "6041",
        "mastery_level": "6"
      },
      {
        "id": "7040",
        "mastery_level": "7"
      },
    ]
  },
  "5317": {
    "id": "5317",
    "name": "Locked Up Tight",
    "commander": {
        "id": "323"
    },
    "deck": [
      {
        "id": "1028"
      },
      {
        "id": "6034"
      },
      {
        "id": "6034"
      },
      {
        "id": "5040",
        "mastery_level": "2"
      },
      {
        "id": "2031",
        "mastery_level": "3"
      },
      {
        "id": "2031",
        "mastery_level": "3"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "6017"
      },
      {
        "id": "2041",
        "mastery_level": "4"
      },
      {
        "id": "2002",
        "mastery_level": "5"
      },
      {
        "id": "1343",
        "mastery_level": "6"
      },
      {
        "id": "2007",
        "mastery_level": "7"
      },
    ]
  },
  "5318": {
    "id": "5318",
    "name": "Knock Knock",
    "commander": {
        "id": "241"
    },
    "deck": [
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "7006"
      },
      {
        "id": "7066"
      },
      {
        "id": "7021"
      },
      {
        "id": "1010",
        "mastery_level": "2"
      },
      {
        "id": "2029",
        "mastery_level": "2"
      },
      {
        "id": "1014",
        "mastery_level": "3"
      },
      {
        "id": "2008",
        "mastery_level": "4"
      },
      {
        "id": "2032",
        "mastery_level": "5"
      },
      {
        "id": "6068",
        "mastery_level": "6"
      },
      {
        "id": "7071",
        "mastery_level": "7"
      },
    ]
  },
  "5319": {
    "id": "5319",
    "name": "Hot Deals",
    "commander": {
        "id": "291"
    },
    "deck": [
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "1616"
      },
      {
        "id": "1616"
      },
      {
        "id": "1319"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "6015"
      },
      {
        "id": "1329",
        "mastery_level": "2"
      },
      {
        "id": "5017",
        "mastery_level": "3"
      },
      {
        "id": "2032",
        "mastery_level": "4"
      },
      {
        "id": "6072",
        "mastery_level": "5"
      },
      {
        "id": "5048",
        "mastery_level": "6"
      },
      {
        "id": "7067",
        "mastery_level": "7"
      },
    ]
  },
  "5320": {
    "id": "5320",
    "name": "Behind Enemy Lines",
    "commander": {
        "id": "320"
    },
    "deck": [
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "6006"
      },
      {
        "id": "6006"
      },
      {
        "id": "1012"
      },
      {
        "id": "5022"
      },
      {
        "id": "1029"
      },
      {
        "id": "7012",
        "mastery_level": "2"
      },
      {
        "id": "7062",
        "mastery_level": "3"
      },
      {
        "id": "7017",
        "mastery_level": "4"
      },
      {
        "id": "5067",
        "mastery_level": "5"
      },
      {
        "id": "7072",
        "mastery_level": "6"
      },
      {
        "id": "5048",
        "mastery_level": "7"
      },
    ]
  },
  "5321": {
    "id": "5321",
    "name": "Around the War Table",
    "commander": {
        "id": "291"
    },
    "deck": [
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "5012"
      },
      {
        "id": "1017"
      },
      {
        "id": "6022"
      },
      {
        "id": "1619"
      },
      {
        "id": "7065"
      },
      {
        "id": "7065"
      },
      {
        "id": "7012",
        "mastery_level": "2"
      },
      {
        "id": "2032",
        "mastery_level": "3"
      },
      {
        "id": "1019",
        "mastery_level": "4"
      },
      {
        "id": "6069",
        "mastery_level": "5"
      },
      {
        "id": "6068",
        "mastery_level": "6"
      },
      {
        "id": "7046",
        "mastery_level": "7"
      },
    ]
  },
  "5322": {
    "id": "5322",
    "name": "Between Worlds",
    "commander": {
        "id": "304"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1017"
      },
      {
        "id": "6006"
      },
      {
        "id": "1318"
      },
      {
        "id": "5046"
      },
      {
        "id": "5046"
      },
      {
        "id": "7012",
        "mastery_level": "2"
      },
      {
        "id": "7053",
        "mastery_level": "3"
      },
      {
        "id": "5012",
        "mastery_level": "4"
      },
      {
        "id": "6070",
        "mastery_level": "5"
      },
      {
        "id": "5061",
        "mastery_level": "6"
      },
      {
        "id": "6047",
        "mastery_level": "7"
      },
    ]
  },
  "5323": {
    "id": "5323",
    "name": "Looking for Backup",
    "commander": {
        "id": "241"
    },
    "deck": [
      {
        "id": "1619"
      },
      {
        "id": "1619"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "6051"
      },
      {
        "id": "7030"
      },
      {
        "id": "7030"
      },
      {
        "id": "5072",
        "mastery_level": "2"
      },
      {
        "id": "6007",
        "mastery_level": "2"
      },
      {
        "id": "6046",
        "mastery_level": "3"
      },
      {
        "id": "1614",
        "mastery_level": "4"
      },
      {
        "id": "6070",
        "mastery_level": "5"
      },
      {
        "id": "7013",
        "mastery_level": "6"
      },
      {
        "id": "7013",
        "mastery_level": "7"
      },
    ]
  },
  "5324": {
    "id": "5324",
    "name": "In the Dirt and Gravel",
    "commander": {
        "id": "328"
    },
    "deck": [
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1318"
      },
      {
        "id": "7015"
      },
      {
        "id": "5010"
      },
      {
        "id": "2044"
      },
      {
        "id": "7045",
        "mastery_level": "2"
      },
      {
        "id": "1029",
        "mastery_level": "3"
      },
      {
        "id": "1626",
        "mastery_level": "4"
      },
      {
        "id": "5025",
        "mastery_level": "5"
      },
      {
        "id": "5066",
        "mastery_level": "6"
      },
      {
        "id": "8001",
        "mastery_level": "7"
      },
    ]
  },
  "5325": {
    "id": "5325",
    "name": "Friends in Low Places",
    "commander": {
        "id": "291"
    },
    "deck": [
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "1326"
      },
      {
        "id": "6038"
      },
      {
        "id": "7041"
      },
      {
        "id": "1329"
      },
      {
        "id": "6015",
        "mastery_level": "2"
      },
      {
        "id": "1629",
        "mastery_level": "3"
      },
      {
        "id": "1032",
        "mastery_level": "4"
      },
      {
        "id": "5024",
        "mastery_level": "5"
      },
      {
        "id": "6028",
        "mastery_level": "6"
      },
      {
        "id": "7074",
        "mastery_level": "7"
      },
    ]
  },
  "5326": {
    "id": "5326",
    "name": "Cowlick Tuft",
    "commander": {
        "id": "328"
    },
    "deck": [
      {
        "id": "1619"
      },
      {
        "id": "1619"
      },
      {
        "id": "1614"
      },
      {
        "id": "1614"
      },
      {
        "id": "2042"
      },
      {
        "id": "7061"
      },
      {
        "id": "6010"
      },
      {
        "id": "6015"
      },
      {
        "id": "7021",
        "mastery_level": "2"
      },
      {
        "id": "1629",
        "mastery_level": "3"
      },
      {
        "id": "1625",
        "mastery_level": "4"
      },
      {
        "id": "5011",
        "mastery_level": "5"
      },
      {
        "id": "6041",
        "mastery_level": "6"
      },
      {
        "id": "7046",
        "mastery_level": "7"
      },
    ]
  },
  "5327": {
    "id": "5327",
    "name": "Hard Choices",
    "commander": {
        "id": "304"
    },
    "deck": [
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
      {
        "id": "1614"
      },
      {
        "id": "1614"
      },
      {
        "id": "5015"
      },
      {
        "id": "6015"
      },
      {
        "id": "6010"
      },
      {
        "id": "1631"
      },
      {
        "id": "1325",
        "mastery_level": "2"
      },
      {
        "id": "1327",
        "mastery_level": "3"
      },
      {
        "id": "2054",
        "mastery_level": "4"
      },
      {
        "id": "1030",
        "mastery_level": "5"
      },
      {
        "id": "6053",
        "mastery_level": "6"
      },
      {
        "id": "7013",
        "mastery_level": "7"
      },
    ]
  },
  "5328": {
    "id": "5328",
    "name": "Grounding Reality",
    "commander": {
        "id": "328"
    },
    "deck": [
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "5005"
      },
      {
        "id": "6056"
      },
      {
        "id": "5065"
      },
      {
        "id": "2050"
      },
      {
        "id": "6005",
        "mastery_level": "2"
      },
      {
        "id": "2008",
        "mastery_level": "3"
      },
      {
        "id": "2048",
        "mastery_level": "4"
      },
      {
        "id": "1330",
        "mastery_level": "5"
      },
      {
        "id": "6043",
        "mastery_level": "6"
      },
      {
        "id": "7013",
        "mastery_level": "7"
      },
    ]
  },
  "5329": {
    "id": "5329",
    "name": "Through the Valley",
    "commander": {
        "id": "311"
    },
    "deck": [
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "2049"
      },
      {
        "id": "6015"
      },
      {
        "id": "5067"
      },
      {
        "id": "6042"
      },
      {
        "id": "7038",
        "mastery_level": "2"
      },
      {
        "id": "1026",
        "mastery_level": "3"
      },
      {
        "id": "2048",
        "mastery_level": "4"
      },
      {
        "id": "1628",
        "mastery_level": "5"
      },
      {
        "id": "6026",
        "mastery_level": "6"
      },
      {
        "id": "6065",
        "mastery_level": "7"
      },
    ]
  },
  "5330": {
    "id": "5330",
    "name": "Safe from Danger",
    "commander": {
        "id": "328"
    },
    "deck": [
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "2032"
      },
      {
        "id": "5050"
      },
      {
        "id": "6029"
      },
      {
        "id": "6042"
      },
      {
        "id": "6070",
        "mastery_level": "2"
      },
      {
        "id": "1325",
        "mastery_level": "3"
      },
      {
        "id": "2046",
        "mastery_level": "4"
      },
      {
        "id": "1628",
        "mastery_level": "5"
      },
      {
        "id": "6040",
        "mastery_level": "6"
      },
      {
        "id": "6039",
        "mastery_level": "7"
      },
    ]
  },
  "5331": {
    "id": "5331",
    "name": "Sun Burned",
    "commander": {
        "id": "291"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "2010"
      },
      {
        "id": "7015"
      },
      {
        "id": "2001"
      },
      {
        "id": "2000"
      },
      {
        "id": "7041",
        "mastery_level": "2"
      },
      {
        "id": "1027",
        "mastery_level": "3"
      },
      {
        "id": "5030",
        "mastery_level": "4"
      },
      {
        "id": "1628",
        "mastery_level": "5"
      },
      {
        "id": "5019",
        "mastery_level": "6"
      },
      {
        "id": "6019",
        "mastery_level": "7"
      },
    ]
  },
  "5332": {
    "id": "5332",
    "name": "Around the Bend",
    "commander": {
        "id": "329"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "2005"
      },
      {
        "id": "6063"
      },
      {
        "id": "7010"
      },
      {
        "id": "2031"
      },
      {
        "id": "1628",
        "mastery_level": "2"
      },
      {
        "id": "6021",
        "mastery_level": "3"
      },
      {
        "id": "5024",
        "mastery_level": "4"
      },
      {
        "id": "6072",
        "mastery_level": "5"
      },
      {
        "id": "6049",
        "mastery_level": "6"
      },
      {
        "id": "2006",
        "mastery_level": "7"
      },
    ]
  },
  "5333": {
    "id": "5333",
    "name": "Saved from Disgrace",
    "commander": {
        "id": "323"
    },
    "deck": [
      {
        "id": "1619"
      },
      {
        "id": "1619"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1025"
      },
      {
        "id": "6042"
      },
      {
        "id": "5025"
      },
      {
        "id": "2031"
      },
      {
        "id": "2004",
        "mastery_level": "2"
      },
      {
        "id": "2003",
        "mastery_level": "3"
      },
      {
        "id": "2044",
        "mastery_level": "4"
      },
      {
        "id": "2009",
        "mastery_level": "5"
      },
      {
        "id": "2022",
        "mastery_level": "6"
      },
      {
        "id": "5063",
        "mastery_level": "7"
      },
    ]
  },
  "5334": {
    "id": "5334",
    "name": "Rain from Above",
    "commander": {
        "id": "321"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "2004"
      },
      {
        "id": "7021"
      },
      {
        "id": "5065"
      },
      {
        "id": "5010"
      },
      {
        "id": "2001",
        "mastery_level": "2"
      },
      {
        "id": "2033",
        "mastery_level": "3"
      },
      {
        "id": "2034",
        "mastery_level": "4"
      },
      {
        "id": "1329",
        "mastery_level": "5"
      },
      {
        "id": "2015",
        "mastery_level": "6"
      },
      {
        "id": "6059",
        "mastery_level": "7"
      },
    ]
  },
  "5335": {
    "id": "5335",
    "name": "Off Guard",
    "commander": {
        "id": "323"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "1628"
      },
      {
        "id": "7011"
      },
      {
        "id": "1027"
      },
      {
        "id": "1026"
      },
      {
        "id": "2001",
        "mastery_level": "2"
      },
      {
        "id": "2054",
        "mastery_level": "3"
      },
      {
        "id": "6004",
        "mastery_level": "4"
      },
      {
        "id": "1327",
        "mastery_level": "5"
      },
      {
        "id": "1640",
        "mastery_level": "6"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
    ]
  },
  "5336": {
    "id": "5336",
    "name": "Last Stand",
    "commander": {
        "id": "329"
    },
    "deck": [
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1628"
      },
      {
        "id": "6054"
      },
      {
        "id": "6046"
      },
      {
        "id": "5015"
      },
      {
        "id": "7066",
        "mastery_level": "2"
      },
      {
        "id": "2001",
        "mastery_level": "3"
      },
      {
        "id": "5046",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "1642",
        "mastery_level": "6"
      },
      {
        "id": "7060",
        "mastery_level": "7"
      },
    ]
  },
  "5337": {
    "id": "5337",
    "name": "Starlight, Starbright",
    "commander": {
        "id": "267"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1331"
      },
      {
        "id": "2020"
      },
      {
        "id": "6034"
      },
      {
        "id": "1330"
      },
      {
        "id": "1328",
        "mastery_level": "2"
      },
      {
        "id": "2002",
        "mastery_level": "3"
      },
      {
        "id": "1332",
        "mastery_level": "4"
      },
      {
        "id": "1632",
        "mastery_level": "5"
      },
      {
        "id": "6047",
        "mastery_level": "6"
      },
      {
        "id": "6003",
        "mastery_level": "7"
      },
    ]
  },
  "5338": {
    "id": "5338",
    "name": "Strength in Numbers",
    "commander": {
        "id": "261"
    },
    "deck": [
      {
        "id": "1011"
      },
      {
        "id": "1011"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "2023"
      },
      {
        "id": "6011"
      },
      {
        "id": "2025"
      },
      {
        "id": "2012"
      },
      {
        "id": "1332",
        "mastery_level": "2"
      },
      {
        "id": "1632",
        "mastery_level": "3"
      },
      {
        "id": "2008",
        "mastery_level": "4"
      },
      {
        "id": "2042",
        "mastery_level": "5"
      },
      {
        "id": "5045",
        "mastery_level": "6"
      },
      {
        "id": "6032",
        "mastery_level": "7"
      },
    ]
  },
  "5339": {
    "id": "5339",
    "name": "Undead Assault",
    "commander": {
        "id": "265"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1331"
      },
      {
        "id": "6011"
      },
      {
        "id": "5033"
      },
      {
        "id": "2032"
      },
      {
        "id": "1332",
        "mastery_level": "2"
      },
      {
        "id": "2020",
        "mastery_level": "3"
      },
      {
        "id": "5035",
        "mastery_level": "4"
      },
      {
        "id": "2056",
        "mastery_level": "5"
      },
      {
        "id": "7028",
        "mastery_level": "6"
      },
      {
        "id": "5037",
        "mastery_level": "7"
      },
    ]
  },
  "5340": {
    "id": "5340",
    "name": "Hate of the Light",
    "commander": {
        "id": "265"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1331"
      },
      {
        "id": "6016"
      },
      {
        "id": "5021"
      },
      {
        "id": "2019"
      },
      {
        "id": "2042",
        "mastery_level": "2"
      },
      {
        "id": "7034",
        "mastery_level": "3"
      },
      {
        "id": "5035",
        "mastery_level": "4"
      },
      {
        "id": "2057",
        "mastery_level": "5"
      },
      {
        "id": "6076",
        "mastery_level": "6"
      },
      {
        "id": "7033",
        "mastery_level": "7"
      },
    ]
  },
  "5341": {
    "id": "5341",
    "name": "Residence of the Haunted",
    "commander": {
        "id": "268"
    },
    "deck": [
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1331"
      },
      {
        "id": "6016"
      },
      {
        "id": "6031"
      },
      {
        "id": "2020"
      },
      {
        "id": "5015",
        "mastery_level": "2"
      },
      {
        "id": "5033",
        "mastery_level": "3"
      },
      {
        "id": "5035",
        "mastery_level": "4"
      },
      {
        "id": "21630",
        "mastery_level": "5"
      },
      {
        "id": "5013",
        "mastery_level": "6"
      },
      {
        "id": "21341",
        "mastery_level": "7"
      },
    ]
  },
  "5342": {
    "id": "5342",
    "name": "Wrong Enemy",
    "commander": {
        "id": "264"
    },
    "deck": [
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "1030"
      },
      {
        "id": "1029"
      },
      {
        "id": "5080"
      },
      {
        "id": "7045"
      },
      {
        "id": "1032",
        "mastery_level": "2"
      },
      {
        "id": "2054",
        "mastery_level": "3"
      },
      {
        "id": "2030",
        "mastery_level": "4"
      },
      {
        "id": "5041",
        "mastery_level": "5"
      },
      {
        "id": "5001",
        "mastery_level": "6"
      },
      {
        "id": "2022",
        "mastery_level": "7"
      },
    ]
  },
  "5343": {
    "id": "5343",
    "name": "Tarian's Offer",
    "commander": {
        "id": "264"
    },
    "deck": [
      {
        "id": "1019"
      },
      {
        "id": "1019"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "2040"
      },
      {
        "id": "2058"
      },
      {
        "id": "6075"
      },
      {
        "id": "6046"
      },
      {
        "id": "1326",
        "mastery_level": "2"
      },
      {
        "id": "1026",
        "mastery_level": "3"
      },
      {
        "id": "1329",
        "mastery_level": "4"
      },
      {
        "id": "5030",
        "mastery_level": "5"
      },
      {
        "id": "6001",
        "mastery_level": "6"
      },
      {
        "id": "7071",
        "mastery_level": "7"
      },
    ]
  },
  "5344": {
    "id": "5344",
    "name": "Malchior's Offer",
    "commander": {
        "id": "271"
    },
    "deck": [
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "2000"
      },
      {
        "id": "2027"
      },
      {
        "id": "7075"
      },
      {
        "id": "1327"
      },
      {
        "id": "2024",
        "mastery_level": "2"
      },
      {
        "id": "2021",
        "mastery_level": "3"
      },
      {
        "id": "1629",
        "mastery_level": "4"
      },
      {
        "id": "5020",
        "mastery_level": "5"
      },
      {
        "id": "5074",
        "mastery_level": "6"
      },
      {
        "id": "5019",
        "mastery_level": "7"
      },
    ]
  },
  "5345": {
    "id": "5345",
    "name": "The Fallen Aether Leader",
    "commander": {
        "id": "269"
    },
    "deck": [
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "6034"
      },
      {
        "id": "6036"
      },
      {
        "id": "7015"
      },
      {
        "id": "1325"
      },
      {
        "id": "2020",
        "mastery_level": "2"
      },
      {
        "id": "6031",
        "mastery_level": "3"
      },
      {
        "id": "1332",
        "mastery_level": "4"
      },
      {
        "id": "6034",
        "mastery_level": "5"
      },
      {
        "id": "1642",
        "mastery_level": "6"
      },
      {
        "id": "2007",
        "mastery_level": "7"
      },
    ]
  },
  "5346": {
    "id": "5346",
    "name": "Single Purpose",
    "commander": {
        "id": "236"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1025"
      },
      {
        "id": "1027"
      },
      {
        "id": "2009"
      },
      {
        "id": "1026"
      },
      {
        "id": "5040",
        "mastery_level": "2"
      },
      {
        "id": "7041",
        "mastery_level": "3"
      },
      {
        "id": "5028",
        "mastery_level": "4"
      },
      {
        "id": "2031",
        "mastery_level": "5"
      },
      {
        "id": "1042",
        "mastery_level": "6"
      },
      {
        "id": "1041",
        "mastery_level": "7"
      },
    ]
  },
  "5347": {
    "id": "5347",
    "name": "Dangerous Power",
    "commander": {
        "id": "264"
    },
    "deck": [
      {
        "id": "1017"
      },
      {
        "id": "1017"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1025"
      },
      {
        "id": "2002"
      },
      {
        "id": "2057"
      },
      {
        "id": "1026"
      },
      {
        "id": "2027",
        "mastery_level": "2"
      },
      {
        "id": "6015",
        "mastery_level": "3"
      },
      {
        "id": "5005",
        "mastery_level": "4"
      },
      {
        "id": "5046",
        "mastery_level": "5"
      },
      {
        "id": "5043",
        "mastery_level": "6"
      },
      {
        "id": "5002",
        "mastery_level": "7"
      },
    ]
  },
  "5348": {
    "id": "5348",
    "name": "High Stakes",
    "commander": {
        "id": "269"
    },
    "deck": [
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "6029"
      },
      {
        "id": "5065"
      },
      {
        "id": "6011"
      },
      {
        "id": "5021"
      },
      {
        "id": "6031",
        "mastery_level": "2"
      },
      {
        "id": "1325",
        "mastery_level": "3"
      },
      {
        "id": "2023",
        "mastery_level": "4"
      },
      {
        "id": "5080",
        "mastery_level": "5"
      },
      {
        "id": "1342",
        "mastery_level": "6"
      },
      {
        "id": "5034",
        "mastery_level": "7"
      },
    ]
  },
  "5349": {
    "id": "5349",
    "name": "Fight Your Way Through",
    "commander": {
        "id": "270"
    },
    "deck": [
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "7035"
      },
      {
        "id": "5033"
      },
      {
        "id": "7034"
      },
      {
        "id": "2020"
      },
      {
        "id": "2023",
        "mastery_level": "2"
      },
      {
        "id": "6042",
        "mastery_level": "3"
      },
      {
        "id": "1632",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "7036",
        "mastery_level": "6"
      },
      {
        "id": "1341",
        "mastery_level": "7"
      },
    ]
  },
  "5350": {
    "id": "5350",
    "name": "A Familiar Face",
    "commander": {
        "id": "331"
    },
    "deck": [
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "5033"
      },
      {
        "id": "6004"
      },
      {
        "id": "6050"
      },
      {
        "id": "2020"
      },
      {
        "id": "6031",
        "mastery_level": "2"
      },
      {
        "id": "2009",
        "mastery_level": "3"
      },
      {
        "id": "6044",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "6035",
        "mastery_level": "6"
      },
      {
        "id": "2015",
        "mastery_level": "7"
      },
    ]
  },
  "5351": {
    "id": "5351",
    "name": "General Garrick",
    "commander": {
        "id": "269"
    },
    "deck": [
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "6011"
      },
      {
        "id": "5053"
      },
      {
        "id": "6075"
      },
      {
        "id": "6016"
      },
      {
        "id": "6031",
        "mastery_level": "2"
      },
      {
        "id": "2032",
        "mastery_level": "3"
      },
      {
        "id": "6029",
        "mastery_level": "4"
      },
      {
        "id": "2008",
        "mastery_level": "5"
      },
      {
        "id": "1343",
        "mastery_level": "6"
      },
      {
        "id": "5009",
        "mastery_level": "7"
      },
    ]
  },
  "5352": {
    "id": "5352",
    "name": "Lost Sanity",
    "commander": {
        "id": "331"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "6016"
      },
      {
        "id": "5065"
      },
      {
        "id": "6051"
      },
      {
        "id": "6029"
      },
      {
        "id": "6031",
        "mastery_level": "2"
      },
      {
        "id": "1032",
        "mastery_level": "3"
      },
      {
        "id": "5021",
        "mastery_level": "4"
      },
      {
        "id": "6046",
        "mastery_level": "5"
      },
      {
        "id": "5061",
        "mastery_level": "6"
      },
      {
        "id": "6002",
        "mastery_level": "7"
      },
    ]
  },
  "5353": {
    "id": "5353",
    "name": "Found Sanity",
    "commander": {
        "id": "265"
    },
    "deck": [
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1329"
      },
      {
        "id": "6038"
      },
      {
        "id": "6029"
      },
      {
        "id": "5021"
      },
      {
        "id": "1331",
        "mastery_level": "2"
      },
      {
        "id": "1327",
        "mastery_level": "3"
      },
      {
        "id": "2049",
        "mastery_level": "4"
      },
      {
        "id": "6020",
        "mastery_level": "5"
      },
      {
        "id": "6037",
        "mastery_level": "6"
      },
      {
        "id": "6019",
        "mastery_level": "7"
      },
    ]
  },
  "5354": {
    "id": "5354",
    "name": "Reformed Resolve",
    "commander": {
        "id": "269"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "1326"
      },
      {
        "id": "6031"
      },
      {
        "id": "6061"
      },
      {
        "id": "5021"
      },
      {
        "id": "1331",
        "mastery_level": "2"
      },
      {
        "id": "2024",
        "mastery_level": "3"
      },
      {
        "id": "2032",
        "mastery_level": "4"
      },
      {
        "id": "6066",
        "mastery_level": "5"
      },
      {
        "id": "6008",
        "mastery_level": "6"
      },
      {
        "id": "2026",
        "mastery_level": "7"
      },
    ]
  },
  "5355": {
    "id": "5355",
    "name": "The Void Spellstone",
    "commander": {
        "id": "269"
    },
    "deck": [
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1632"
      },
      {
        "id": "6075"
      },
      {
        "id": "6011"
      },
      {
        "id": "6036"
      },
      {
        "id": "1626",
        "mastery_level": "2"
      },
      {
        "id": "2019",
        "mastery_level": "3"
      },
      {
        "id": "2032",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "6047",
        "mastery_level": "6"
      },
      {
        "id": "7037",
        "mastery_level": "7"
      },
    ]
  },
  "5356": {
    "id": "5356",
    "name": "Not One More Step",
    "commander": {
        "id": "236"
    },
    "deck": [
      {
        "id": "1614"
      },
      {
        "id": "1614"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1025"
      },
      {
        "id": "6069"
      },
      {
        "id": "2029"
      },
      {
        "id": "1031"
      },
      {
        "id": "5072",
        "mastery_level": "2"
      },
      {
        "id": "5044",
        "mastery_level": "3"
      },
      {
        "id": "2027",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "5071",
        "mastery_level": "6"
      },
      {
        "id": "5079",
        "mastery_level": "7"
      },
    ]
  },
  "5357": {
    "id": "5357",
    "name": "A Matter of Trust",
    "commander": {
        "id": "263"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1025"
      },
      {
        "id": "6056"
      },
      {
        "id": "2029"
      },
      {
        "id": "1030"
      },
      {
        "id": "7041",
        "mastery_level": "2"
      },
      {
        "id": "7038",
        "mastery_level": "3"
      },
      {
        "id": "2027",
        "mastery_level": "4"
      },
      {
        "id": "7004",
        "mastery_level": "5"
      },
      {
        "id": "6041",
        "mastery_level": "6"
      },
      {
        "id": "6045",
        "mastery_level": "7"
      },
    ]
  },
  "5358": {
    "id": "5358",
    "name": "Judgement",
    "commander": {
        "id": "3"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "1014"
      },
      {
        "id": "1014"
      },
      {
        "id": "1327"
      },
      {
        "id": "7047"
      },
      {
        "id": "5072"
      },
      {
        "id": "1030"
      },
      {
        "id": "7041",
        "mastery_level": "2"
      },
      {
        "id": "2054",
        "mastery_level": "3"
      },
      {
        "id": "2021",
        "mastery_level": "4"
      },
      {
        "id": "7029",
        "mastery_level": "5"
      },
      {
        "id": "6071",
        "mastery_level": "6"
      },
      {
        "id": "5048",
        "mastery_level": "7"
      },
    ]
  },
  "5359": {
    "id": "5359",
    "name": "Chain Reaction",
    "commander": {
        "id": "3"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1317"
      },
      {
        "id": "1317"
      },
      {
        "id": "2058"
      },
      {
        "id": "7047"
      },
      {
        "id": "1331"
      },
      {
        "id": "5035"
      },
      {
        "id": "7075",
        "mastery_level": "2"
      },
      {
        "id": "1029",
        "mastery_level": "3"
      },
      {
        "id": "2001",
        "mastery_level": "4"
      },
      {
        "id": "6029",
        "mastery_level": "5"
      },
      {
        "id": "1342",
        "mastery_level": "6"
      },
      {
        "id": "6013",
        "mastery_level": "7"
      },
    ]
  },
  "5360": {
    "id": "5360",
    "name": "Hero's Sacrifice",
    "commander": {
        "id": "330"
    },
    "deck": [
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1331"
      },
      {
        "id": "1331"
      },
      {
        "id": "1331"
      },
      {
        "id": "2020"
      },
      {
        "id": "6031",
        "mastery_level": "2"
      },
      {
        "id": "6031",
        "mastery_level": "2"
      },
      {
        "id": "6016",
        "mastery_level": "4"
      },
      {
        "id": "6011",
        "mastery_level": "5"
      },
      {
        "id": "6027",
        "mastery_level": "6"
      },
      {
        "id": "2026",
        "mastery_level": "7"
      },
    ]
  },
  "5361": {
    "id": "5361",
    "name": "Nomadic Travels",
    "commander": {
        "id": "316"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "1610"
      },
      {
        "id": "6006"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "1329"
      },
      {
        "id": "1329"
      },
      {
        "id": "1625"
      },
      {
        "id": "1625",
        "mastery_level": "2"
      },
      {
        "id": "1628",
        "mastery_level": "3"
      },
      {
        "id": "1628",
        "mastery_level": "3"
      },
      {
        "id": "1631",
        "mastery_level": "5"
      },
      {
        "id": "1341",
        "mastery_level": "6"
      },
      {
        "id": "2041",
        "mastery_level": "7"
      },
    ]
  },
  "5362": {
    "id": "5362",
    "name": "Uncontainable Curiousity",
    "commander": {
        "id": "315"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "1613"
      },
      {
        "id": "1619"
      },
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1328"
      },
      {
        "id": "1328"
      },
      {
        "id": "1632"
      },
      {
        "id": "1632",
        "mastery_level": "2"
      },
      {
        "id": "1628",
        "mastery_level": "3"
      },
      {
        "id": "1326",
        "mastery_level": "4"
      },
      {
        "id": "1027",
        "mastery_level": "5"
      },
      {
        "id": "1043",
        "mastery_level": "6"
      },
      {
        "id": "2013",
        "mastery_level": "7"
      },
    ]
  },
  "5363": {
    "id": "5363",
    "name": "The Sparkler Fireworks",
    "commander": {
        "id": "341"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "1615"
      },
      {
        "id": "1618"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1325"
      },
      {
        "id": "1325"
      },
      {
        "id": "1628"
      },
      {
        "id": "1330",
        "mastery_level": "2"
      },
      {
        "id": "1628",
        "mastery_level": "3"
      },
      {
        "id": "2040",
        "mastery_level": "4"
      },
      {
        "id": "2032",
        "mastery_level": "5"
      },
      {
        "id": "7071",
        "mastery_level": "6"
      },
      {
        "id": "1642",
        "mastery_level": "7"
      },
    ]
  },
  "5364": {
    "id": "5364",
    "name": "Pretty Lights",
    "commander": {
        "id": "341"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "1317"
      },
      {
        "id": "1617"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1327"
      },
      {
        "id": "1327"
      },
      {
        "id": "1026"
      },
      {
        "id": "1628"
      },
      {
        "id": "1026",
        "mastery_level": "2"
      },
      {
        "id": "1628",
        "mastery_level": "3"
      },
      {
        "id": "2029",
        "mastery_level": "4"
      },
      {
        "id": "2024",
        "mastery_level": "5"
      },
      {
        "id": "5009",
        "mastery_level": "6"
      },
      {
        "id": "5003",
        "mastery_level": "7"
      },
    ]
  },
  "5365": {
    "id": "5365",
    "name": "Halt, Criminal Scum!",
    "commander": {
        "id": "323"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "6006"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1031"
      },
      {
        "id": "1031"
      },
      {
        "id": "5021"
      },
      {
        "id": "1628",
        "mastery_level": "2"
      },
      {
        "id": "1628",
        "mastery_level": "3"
      },
      {
        "id": "2034",
        "mastery_level": "4"
      },
      {
        "id": "5021",
        "mastery_level": "5"
      },
      {
        "id": "5051",
        "mastery_level": "6"
      },
      {
        "id": "6049",
        "mastery_level": "7"
      },
    ]
  },
  "5366": {
    "id": "5366",
    "name": "One Star Service",
    "commander": {
        "id": "320"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "5007"
      },
      {
        "id": "5022"
      },
      {
        "id": "1616"
      },
      {
        "id": "1312"
      },
      {
        "id": "1028"
      },
      {
        "id": "1028"
      },
      {
        "id": "1628"
      },
      {
        "id": "1028"
      },
      {
        "id": "1627",
        "mastery_level": "2"
      },
      {
        "id": "1628",
        "mastery_level": "3"
      },
      {
        "id": "5067",
        "mastery_level": "4"
      },
      {
        "id": "5020",
        "mastery_level": "5"
      },
      {
        "id": "5083",
        "mastery_level": "6"
      },
      {
        "id": "1343",
        "mastery_level": "7"
      },
    ]
  },
  "5367": {
    "id": "5367",
    "name": "Uncontainable",
    "commander": {
        "id": "240"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "5006"
      },
      {
        "id": "1314"
      },
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1028"
      },
      {
        "id": "1028"
      },
      {
        "id": "1628"
      },
      {
        "id": "1626",
        "mastery_level": "2"
      },
      {
        "id": "1628",
        "mastery_level": "3"
      },
      {
        "id": "5035",
        "mastery_level": "4"
      },
      {
        "id": "5020",
        "mastery_level": "5"
      },
      {
        "id": "7003",
        "mastery_level": "6"
      },
      {
        "id": "2015",
        "mastery_level": "7"
      },
    ]
  },
  "5368": {
    "id": "5368",
    "name": "The Great Escape",
    "commander": {
        "id": "324"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "1018"
      },
      {
        "id": "1314"
      },
      {
        "id": "1011"
      },
      {
        "id": "2020"
      },
      {
        "id": "2020"
      },
      {
        "id": "2049"
      },
      {
        "id": "1628"
      },
      {
        "id": "2049",
        "mastery_level": "2"
      },
      {
        "id": "1628",
        "mastery_level": "3"
      },
      {
        "id": "5030",
        "mastery_level": "4"
      },
      {
        "id": "5004",
        "mastery_level": "5"
      },
      {
        "id": "7001",
        "mastery_level": "6"
      },
      {
        "id": "5037",
        "mastery_level": "7"
      },
    ]
  },
  "5369": {
    "id": "5369",
    "name": "Metal Gear Dragon",
    "commander": {
        "id": "340"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1014"
      },
      {
        "id": "1319"
      },
      {
        "id": "1613"
      },
      {
        "id": "2057"
      },
      {
        "id": "2057"
      },
      {
        "id": "1629"
      },
      {
        "id": "1028"
      },
      {
        "id": "1629",
        "mastery_level": "2"
      },
      {
        "id": "1028",
        "mastery_level": "3"
      },
      {
        "id": "2048",
        "mastery_level": "4"
      },
      {
        "id": "2060",
        "mastery_level": "5"
      },
      {
        "id": "6068",
        "mastery_level": "6"
      },
      {
        "id": "6000",
        "mastery_level": "7"
      },
    ]
  },
  "5370": {
    "id": "5370",
    "name": "Gears and Steel",
    "commander": {
        "id": "340"
    },
    "deck": [
      {
        "id": "1318"
      },
      {
        "id": "1613"
      },
      {
        "id": "1311"
      },
      {
        "id": "5017"
      },
      {
        "id": "2042"
      },
      {
        "id": "2042"
      },
      {
        "id": "1331"
      },
      {
        "id": "1331"
      },
      {
        "id": "1331",
        "mastery_level": "2"
      },
      {
        "id": "1332",
        "mastery_level": "3"
      },
      {
        "id": "2031",
        "mastery_level": "4"
      },
      {
        "id": "2060",
        "mastery_level": "5"
      },
      {
        "id": "6065",
        "mastery_level": "6"
      },
      {
        "id": "6000",
        "mastery_level": "7"
      },
    ]
  },
  "5371": {
    "id": "5371",
    "name": "Prison Break",
    "commander": {
        "id": "323"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1610"
      },
      {
        "id": "1314"
      },
      {
        "id": "2053"
      },
      {
        "id": "2053"
      },
      {
        "id": "1325"
      },
      {
        "id": "2008"
      },
      {
        "id": "1325",
        "mastery_level": "2"
      },
      {
        "id": "1029",
        "mastery_level": "3"
      },
      {
        "id": "2008",
        "mastery_level": "4"
      },
      {
        "id": "6031",
        "mastery_level": "5"
      },
      {
        "id": "6014",
        "mastery_level": "6"
      },
      {
        "id": "6049",
        "mastery_level": "7"
      },
    ]
  },
  "5372": {
    "id": "5372",
    "name": "Relentless Guards",
    "commander": {
        "id": "321"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1019"
      },
      {
        "id": "1012"
      },
      {
        "id": "2002"
      },
      {
        "id": "2002"
      },
      {
        "id": "1330"
      },
      {
        "id": "1628"
      },
      {
        "id": "2005",
        "mastery_level": "2"
      },
      {
        "id": "1330",
        "mastery_level": "3"
      },
      {
        "id": "1628",
        "mastery_level": "4"
      },
      {
        "id": "5080",
        "mastery_level": "5"
      },
      {
        "id": "7026",
        "mastery_level": "6"
      },
      {
        "id": "1042",
        "mastery_level": "7"
      },
    ]
  },
  "5373": {
    "id": "5373",
    "name": "The Creator",
    "commander": {
        "id": "341"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1017"
      },
      {
        "id": "1319"
      },
      {
        "id": "5005"
      },
      {
        "id": "5005"
      },
      {
        "id": "1027"
      },
      {
        "id": "5021"
      },
      {
        "id": "5021",
        "mastery_level": "2"
      },
      {
        "id": "1027",
        "mastery_level": "3"
      },
      {
        "id": "1628",
        "mastery_level": "4"
      },
      {
        "id": "6020",
        "mastery_level": "5"
      },
      {
        "id": "6014",
        "mastery_level": "6"
      },
      {
        "id": "5018",
        "mastery_level": "7"
      },
    ]
  },
  "5374": {
    "id": "5374",
    "name": "Freedom or Death",
    "commander": {
        "id": "320"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1315"
      },
      {
        "id": "1313"
      },
      {
        "id": "1329"
      },
      {
        "id": "1329"
      },
      {
        "id": "2053"
      },
      {
        "id": "1327"
      },
      {
        "id": "2053",
        "mastery_level": "2"
      },
      {
        "id": "1327",
        "mastery_level": "3"
      },
      {
        "id": "1628",
        "mastery_level": "4"
      },
      {
        "id": "6072",
        "mastery_level": "5"
      },
      {
        "id": "6014",
        "mastery_level": "6"
      },
      {
        "id": "5002",
        "mastery_level": "7"
      },
    ]
  },
  "5375": {
    "id": "5375",
    "name": "Dangerous Origins",
    "commander": {
        "id": "340"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1317"
      },
      {
        "id": "1614"
      },
      {
        "id": "1329"
      },
      {
        "id": "2030"
      },
      {
        "id": "1630"
      },
      {
        "id": "6004"
      },
      {
        "id": "6072",
        "mastery_level": "2"
      },
      {
        "id": "2053",
        "mastery_level": "3"
      },
      {
        "id": "1025",
        "mastery_level": "4"
      },
      {
        "id": "2004",
        "mastery_level": "5"
      },
      {
        "id": "5001",
        "mastery_level": "6"
      },
      {
        "id": "8002",
        "mastery_level": "7"
      },
    ]
  },
  "5376": {
    "id": "5376",
    "name": "Final Push",
    "commander": {
        "id": "323"
    },
    "deck": [
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1314"
      },
      {
        "id": "1314"
      },
      {
        "id": "1329"
      },
      {
        "id": "1325"
      },
      {
        "id": "1628"
      },
      {
        "id": "1030"
      },
      {
        "id": "6072",
        "mastery_level": "2"
      },
      {
        "id": "2053",
        "mastery_level": "3"
      },
      {
        "id": "6072",
        "mastery_level": "4"
      },
      {
        "id": "2053",
        "mastery_level": "5"
      },
      {
        "id": "6085",
        "mastery_level": "6"
      },
      {
        "id": "7026",
        "mastery_level": "7"
      },
    ]
  },
  "5377": {
    "id": "5377",
    "name": "Termite Double Dragons",
    "commander": {
        "id": "340"
    },
    "deck": [
      {
        "id": "1011"
      },
      {
        "id": "1318"
      },
      {
        "id": "1314"
      },
      {
        "id": "6017"
      },
      {
        "id": "1332"
      },
      {
        "id": "1325"
      },
      {
        "id": "1628"
      },
      {
        "id": "2014"
      },
      {
        "id": "6072",
        "mastery_level": "2"
      },
      {
        "id": "2053",
        "mastery_level": "3"
      },
      {
        "id": "2032",
        "mastery_level": "4"
      },
      {
        "id": "6021",
        "mastery_level": "5"
      },
      {
        "id": "6027",
        "mastery_level": "6"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
    ]
  },
  "5378": {
    "id": "5378",
    "name": "Surprise Attack",
    "commander": {
        "id": "265"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1613"
      },
      {
        "id": "1314"
      },
      {
        "id": "1319"
      },
      {
        "id": "1332"
      },
      {
        "id": "2023"
      },
      {
        "id": "1331"
      },
      {
        "id": "2001"
      },
      {
        "id": "6066",
        "mastery_level": "2"
      },
      {
        "id": "2020",
        "mastery_level": "3"
      },
      {
        "id": "5033",
        "mastery_level": "4"
      },
      {
        "id": "2059",
        "mastery_level": "5"
      },
      {
        "id": "7036",
        "mastery_level": "6"
      },
      {
        "id": "2026",
        "mastery_level": "7"
      },
    ]
  },
  "5379": {
    "id": "5379",
    "name": "A Mentor's Wisdom",
    "commander": {
        "id": "268"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1315"
      },
      {
        "id": "1314"
      },
      {
        "id": "1319"
      },
      {
        "id": "1329"
      },
      {
        "id": "2023"
      },
      {
        "id": "1331"
      },
      {
        "id": "2042"
      },
      {
        "id": "6038",
        "mastery_level": "2"
      },
      {
        "id": "6016",
        "mastery_level": "3"
      },
      {
        "id": "6011",
        "mastery_level": "4"
      },
      {
        "id": "6034",
        "mastery_level": "5"
      },
      {
        "id": "5036",
        "mastery_level": "6"
      },
      {
        "id": "5085",
        "mastery_level": "7"
      },
    ]
  },
  "5380": {
    "id": "5380",
    "name": "Undead Resurrection",
    "commander": {
        "id": "270"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "6006"
      },
      {
        "id": "1314"
      },
      {
        "id": "1313"
      },
      {
        "id": "1632"
      },
      {
        "id": "2023"
      },
      {
        "id": "1331"
      },
      {
        "id": "5030"
      },
      {
        "id": "6034",
        "mastery_level": "2"
      },
      {
        "id": "6016",
        "mastery_level": "3"
      },
      {
        "id": "6011",
        "mastery_level": "4"
      },
      {
        "id": "6029",
        "mastery_level": "5"
      },
      {
        "id": "6032",
        "mastery_level": "6"
      },
      {
        "id": "5083",
        "mastery_level": "7"
      },
    ]
  },
  "5381": {
    "id": "5381",
    "name": "Crispy Undead",
    "commander": {
        "id": "267"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1010"
      },
      {
        "id": "1319"
      },
      {
        "id": "1613"
      },
      {
        "id": "1326"
      },
      {
        "id": "2020"
      },
      {
        "id": "1331"
      },
      {
        "id": "5053"
      },
      {
        "id": "6031",
        "mastery_level": "2"
      },
      {
        "id": "6036",
        "mastery_level": "3"
      },
      {
        "id": "6011",
        "mastery_level": "4"
      },
      {
        "id": "7035",
        "mastery_level": "5"
      },
      {
        "id": "6003",
        "mastery_level": "6"
      },
      {
        "id": "6033",
        "mastery_level": "7"
      },
    ]
  },
  "5382": {
    "id": "5382",
    "name": "Undead Pack Master",
    "commander": {
        "id": "330"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1314"
      },
      {
        "id": "6017"
      },
      {
        "id": "5006"
      },
      {
        "id": "1027"
      },
      {
        "id": "2000"
      },
      {
        "id": "1032"
      },
      {
        "id": "1628"
      },
      {
        "id": "6029",
        "mastery_level": "2"
      },
      {
        "id": "6036",
        "mastery_level": "3"
      },
      {
        "id": "5035",
        "mastery_level": "4"
      },
      {
        "id": "7035",
        "mastery_level": "5"
      },
      {
        "id": "6049",
        "mastery_level": "6"
      },
      {
        "id": "7037",
        "mastery_level": "7"
      },
    ]
  },
  "5383": {
    "id": "5383",
    "name": "Negotiations",
    "commander": {
        "id": "311"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "1015"
      },
      {
        "id": "1017"
      },
      {
        "id": "5006"
      },
      {
        "id": "1027"
      },
      {
        "id": "2000"
      },
      {
        "id": "1032"
      },
      {
        "id": "1628"
      },
      {
        "id": "6029",
        "mastery_level": "2"
      },
      {
        "id": "6036",
        "mastery_level": "3"
      },
      {
        "id": "5035",
        "mastery_level": "4"
      },
      {
        "id": "7035",
        "mastery_level": "5"
      },
      {
        "id": "6014",
        "mastery_level": "6"
      },
      {
        "id": "7037",
        "mastery_level": "7"
      },
    ]
  },
  "5384": {
    "id": "5384",
    "name": "Friends Forever",
    "commander": {
        "id": "340"
    },
    "deck": [
      {
        "id": "1615"
      },
      {
        "id": "1314"
      },
      {
        "id": "1619"
      },
      {
        "id": "6012"
      },
      {
        "id": "1626"
      },
      {
        "id": "1328"
      },
      {
        "id": "1331"
      },
      {
        "id": "2012"
      },
      {
        "id": "6021",
        "mastery_level": "2"
      },
      {
        "id": "6036",
        "mastery_level": "3"
      },
      {
        "id": "5035",
        "mastery_level": "4"
      },
      {
        "id": "2014",
        "mastery_level": "5"
      },
      {
        "id": "7026",
        "mastery_level": "6"
      },
      {
        "id": "5034",
        "mastery_level": "7"
      },
    ]
  },
  "5385": {
    "id": "5385",
    "name": "The Tale of Pumpking",
    "commander": {
        "id": "320"
    },
    "deck": [
      {
        "id": "1319"
      },
      {
        "id": "1319"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1329"
      },
      {
        "id": "1330"
      },
      {
        "id": "1330"
      },
      {
        "id": "11331"
      },
      {
        "id": "1328",
        "mastery_level": "2"
      },
      {
        "id": "2024",
        "mastery_level": "3"
      },
      {
        "id": "1626",
        "mastery_level": "4"
      },
      {
        "id": "1632",
        "mastery_level": "5"
      },
      {
        "id": "5082",
        "mastery_level": "6"
      },
      {
        "id": "6035",
        "mastery_level": "7"
      },
    ]
  },
  "5386": {
    "id": "5386",
    "name": "Pumpking's Appearance",
    "commander": {
        "id": "342"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1332"
      },
      {
        "id": "1628"
      },
      {
        "id": "2015",
        "mastery_level": "2"
      },
      {
        "id": "2015",
        "mastery_level": "3"
      },
      {
        "id": "2015",
        "mastery_level": "4"
      },
      {
        "id": "2015",
        "mastery_level": "5"
      },
      {
        "id": "2015",
        "mastery_level": "6"
      },
      {
        "id": "2015",
        "mastery_level": "7"
      },
    ]
  },
  "5387": {
    "id": "5387",
    "name": "More Treat Than Trick",
    "commander": {
        "id": "342"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1632"
      },
      {
        "id": "2032"
      },
      {
        "id": "2032"
      },
      {
        "id": "1628"
      },
      {
        "id": "1326",
        "mastery_level": "2"
      },
      {
        "id": "5035",
        "mastery_level": "3"
      },
      {
        "id": "5021",
        "mastery_level": "4"
      },
      {
        "id": "2062",
        "mastery_level": "5"
      },
      {
        "id": "2015",
        "mastery_level": "6"
      },
      {
        "id": "2015",
        "mastery_level": "7"
      },
    ]
  },
  "5388": {
    "id": "5388",
    "name": "Triumphant Return",
    "commander": {
        "id": "272"
    },
    "deck": [
      {
        "id": "1019"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "1312"
      },
      {
        "id": "1330"
      },
      {
        "id": "1631"
      },
      {
        "id": "5015"
      },
      {
        "id": "2033"
      },
      {
        "id": "1326"
      },
      {
        "id": "2001",
        "mastery_level": "2"
      },
      {
        "id": "1325",
        "mastery_level": "3"
      },
      {
        "id": "5025",
        "mastery_level": "4"
      },
      {
        "id": "7075",
        "mastery_level": "5"
      },
      {
        "id": "6008",
        "mastery_level": "6"
      },
      {
        "id": "1040",
        "mastery_level": "7"
      },
    ]
  },
  "5389": {
    "id": "5389",
    "name": "The Way of the Wyverns",
    "commander": {
        "id": "314"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "6017"
      },
      {
        "id": "1032"
      },
      {
        "id": "2004"
      },
      {
        "id": "5010"
      },
      {
        "id": "2032"
      },
      {
        "id": "5041"
      },
      {
        "id": "1629",
        "mastery_level": "2"
      },
      {
        "id": "2008",
        "mastery_level": "3"
      },
      {
        "id": "5067",
        "mastery_level": "4"
      },
      {
        "id": "7021",
        "mastery_level": "5"
      },
      {
        "id": "5079",
        "mastery_level": "6"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
    ]
  },
  "5390": {
    "id": "5390",
    "name": "Silent Sanctuary",
    "commander": {
        "id": "321"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "6006"
      },
      {
        "id": "1328"
      },
      {
        "id": "2044"
      },
      {
        "id": "5004"
      },
      {
        "id": "2041"
      },
      {
        "id": "5024"
      },
      {
        "id": "1629",
        "mastery_level": "2"
      },
      {
        "id": "2046",
        "mastery_level": "3"
      },
      {
        "id": "6061",
        "mastery_level": "4"
      },
      {
        "id": "6066",
        "mastery_level": "5"
      },
      {
        "id": "5013",
        "mastery_level": "6"
      },
      {
        "id": "1640",
        "mastery_level": "7"
      },
    ]
  },
  "5391": {
    "id": "5391",
    "name": "See No Evil",
    "commander": {
        "id": "311"
    },
    "deck": [
      {
        "id": "1010"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "5022"
      },
      {
        "id": "1028"
      },
      {
        "id": "2019"
      },
      {
        "id": "2063"
      },
      {
        "id": "2031"
      },
      {
        "id": "5062"
      },
      {
        "id": "1625",
        "mastery_level": "2"
      },
      {
        "id": "2045",
        "mastery_level": "3"
      },
      {
        "id": "6050",
        "mastery_level": "4"
      },
      {
        "id": "6089",
        "mastery_level": "5"
      },
      {
        "id": "5009",
        "mastery_level": "6"
      },
      {
        "id": "7088",
        "mastery_level": "7"
      },
    ]
  },
  "5392": {
    "id": "5392",
    "name": "Be Free",
    "commander": {
        "id": "321"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "5012"
      },
      {
        "id": "1327"
      },
      {
        "id": "2064"
      },
      {
        "id": "5080"
      },
      {
        "id": "2031"
      },
      {
        "id": "5044"
      },
      {
        "id": "7061",
        "mastery_level": "2"
      },
      {
        "id": "5062",
        "mastery_level": "3"
      },
      {
        "id": "6034",
        "mastery_level": "4"
      },
      {
        "id": "6089",
        "mastery_level": "5"
      },
      {
        "id": "7026",
        "mastery_level": "6"
      },
      {
        "id": "6023",
        "mastery_level": "7"
      },
    ]
  },
  "5393": {
    "id": "5393",
    "name": "Misplaced Suspicion",
    "commander": {
        "id": "272"
    },
    "deck": [
      {
        "id": "1317"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "1615"
      },
      {
        "id": "2004"
      },
      {
        "id": "5010"
      },
      {
        "id": "5062"
      },
      {
        "id": "2023"
      },
      {
        "id": "5005"
      },
      {
        "id": "5024",
        "mastery_level": "2"
      },
      {
        "id": "5062",
        "mastery_level": "3"
      },
      {
        "id": "5069",
        "mastery_level": "4"
      },
      {
        "id": "6044",
        "mastery_level": "5"
      },
      {
        "id": "6060",
        "mastery_level": "6"
      },
      {
        "id": "6058",
        "mastery_level": "7"
      },
    ]
  },
  "5394": {
    "id": "5394",
    "name": "Feral Dragons",
    "commander": {
        "id": "310"
    },
    "deck": [
      {
        "id": "5007"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "7012"
      },
      {
        "id": "2004"
      },
      {
        "id": "5060"
      },
      {
        "id": "2046"
      },
      {
        "id": "1027"
      },
      {
        "id": "2045"
      },
      {
        "id": "5024",
        "mastery_level": "2"
      },
      {
        "id": "7010",
        "mastery_level": "3"
      },
      {
        "id": "2005",
        "mastery_level": "4"
      },
      {
        "id": "6021",
        "mastery_level": "5"
      },
      {
        "id": "5061",
        "mastery_level": "6"
      },
      {
        "id": "5061",
        "mastery_level": "7"
      },
    ]
  },
  "5395": {
    "id": "5395",
    "name": "The Wind Drake",
    "commander": {
        "id": "351"
    },
    "deck": [
      {
        "id": "1610"
      },
      {
        "id": "5006"
      },
      {
        "id": "5006"
      },
      {
        "id": "7012"
      },
      {
        "id": "1326"
      },
      {
        "id": "5053"
      },
      {
        "id": "2046"
      },
      {
        "id": "1631"
      },
      {
        "id": "2005"
      },
      {
        "id": "2046",
        "mastery_level": "2"
      },
      {
        "id": "7010",
        "mastery_level": "3"
      },
      {
        "id": "7024",
        "mastery_level": "4"
      },
      {
        "id": "5065",
        "mastery_level": "5"
      },
      {
        "id": "6059",
        "mastery_level": "6"
      },
      {
        "id": "2006",
        "mastery_level": "7"
      },
    ]
  },
  "5396": {
    "id": "5396",
    "name": "Dusty Scales",
    "commander": {
        "id": "351"
    },
    "deck": [
      {
        "id": "1014"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "7006"
      },
      {
        "id": "1626"
      },
      {
        "id": "5050"
      },
      {
        "id": "7024"
      },
      {
        "id": "1631"
      },
      {
        "id": "2019"
      },
      {
        "id": "2046",
        "mastery_level": "2"
      },
      {
        "id": "7061",
        "mastery_level": "3"
      },
      {
        "id": "1627",
        "mastery_level": "4"
      },
      {
        "id": "7053",
        "mastery_level": "5"
      },
      {
        "id": "6026",
        "mastery_level": "6"
      },
      {
        "id": "1040",
        "mastery_level": "7"
      },
    ]
  },
  "5397": {
    "id": "5397",
    "name": "Pantomime",
    "commander": {
        "id": "242"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "6022"
      },
      {
        "id": "1632"
      },
      {
        "id": "5024"
      },
      {
        "id": "7010"
      },
      {
        "id": "2004"
      },
      {
        "id": "2014"
      },
      {
        "id": "2005",
        "mastery_level": "2"
      },
      {
        "id": "2002",
        "mastery_level": "3"
      },
      {
        "id": "1031",
        "mastery_level": "4"
      },
      {
        "id": "2029",
        "mastery_level": "5"
      },
      {
        "id": "5063",
        "mastery_level": "6"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
    ]
  },
  "5398": {
    "id": "5398",
    "name": "Dragon Fury",
    "commander": {
        "id": "310"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1017"
      },
      {
        "id": "6005"
      },
      {
        "id": "2048"
      },
      {
        "id": "1631"
      },
      {
        "id": "2004"
      },
      {
        "id": "5011"
      },
      {
        "id": "2005",
        "mastery_level": "2"
      },
      {
        "id": "1628",
        "mastery_level": "3"
      },
      {
        "id": "2040",
        "mastery_level": "4"
      },
      {
        "id": "2029",
        "mastery_level": "5"
      },
      {
        "id": "2013",
        "mastery_level": "6"
      },
      {
        "id": "6009",
        "mastery_level": "7"
      },
    ]
  },
  "5399": {
    "id": "5399",
    "name": "Connect the Dots",
    "commander": {
        "id": "250"
    },
    "deck": [
      {
        "id": "1319"
      },
      {
        "id": "5007"
      },
      {
        "id": "5007"
      },
      {
        "id": "6012"
      },
      {
        "id": "5084"
      },
      {
        "id": "1329"
      },
      {
        "id": "2033"
      },
      {
        "id": "2004"
      },
      {
        "id": "5069"
      },
      {
        "id": "2005",
        "mastery_level": "2"
      },
      {
        "id": "2009",
        "mastery_level": "3"
      },
      {
        "id": "5067",
        "mastery_level": "4"
      },
      {
        "id": "6020",
        "mastery_level": "5"
      },
      {
        "id": "2006",
        "mastery_level": "6"
      },
      {
        "id": "5023",
        "mastery_level": "7"
      },
    ]
  },
  "54": {
    "id": "54",
    "name": "Nature's Heart",
    "commander": {
        "id": "201"
    },
    "deck": [
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1603",
        "level": "2"
      },
      {
        "id": "1603",
        "level": "2"
      },
      {
        "id": "1604"
      },
      {
        "id": "1604"
      },
      {
        "id": "1607"
      },
      {
        "id": "1607"
      },
      {
        "id": "1607"
      },
    ]
  },
  "5400": {
    "id": "5400",
    "name": "A Friend in Need",
    "commander": {
        "id": "214"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "7012"
      },
      {
        "id": "5058"
      },
      {
        "id": "1632"
      },
      {
        "id": "6063"
      },
      {
        "id": "2046"
      },
      {
        "id": "5065"
      },
      {
        "id": "6063",
        "mastery_level": "2"
      },
      {
        "id": "2057",
        "mastery_level": "3"
      },
      {
        "id": "5024",
        "mastery_level": "4"
      },
      {
        "id": "6016",
        "mastery_level": "5"
      },
      {
        "id": "5064",
        "mastery_level": "6"
      },
      {
        "id": "1040",
        "mastery_level": "7"
      },
    ]
  },
  "5401": {
    "id": "5401",
    "name": "Mysterious Corruption",
    "commander": {
        "id": "285"
    },
    "deck": [
      {
        "id": "1614"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "1314"
      },
      {
        "id": "1626"
      },
      {
        "id": "1028"
      },
      {
        "id": "1631"
      },
      {
        "id": "6010"
      },
      {
        "id": "6034"
      },
      {
        "id": "2005",
        "mastery_level": "2"
      },
      {
        "id": "2049",
        "mastery_level": "3"
      },
      {
        "id": "5050",
        "mastery_level": "4"
      },
      {
        "id": "6015",
        "mastery_level": "5"
      },
      {
        "id": "5052",
        "mastery_level": "6"
      },
      {
        "id": "6059",
        "mastery_level": "7"
      },
    ]
  },
  "5402": {
    "id": "5402",
    "name": "Spreading Corruption",
    "commander": {
        "id": "285"
    },
    "deck": [
      {
        "id": "1312"
      },
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "1311"
      },
      {
        "id": "1328"
      },
      {
        "id": "1325"
      },
      {
        "id": "5010"
      },
      {
        "id": "5062"
      },
      {
        "id": "6011"
      },
      {
        "id": "7062",
        "mastery_level": "2"
      },
      {
        "id": "2030",
        "mastery_level": "3"
      },
      {
        "id": "5011",
        "mastery_level": "4"
      },
      {
        "id": "6004",
        "mastery_level": "5"
      },
      {
        "id": "5051",
        "mastery_level": "6"
      },
      {
        "id": "7060",
        "mastery_level": "7"
      },
    ]
  },
  "5403": {
    "id": "5403",
    "name": "Polluted Water",
    "commander": {
        "id": "286"
    },
    "deck": [
      {
        "id": "1015"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1313"
      },
      {
        "id": "1331"
      },
      {
        "id": "1325"
      },
      {
        "id": "2004"
      },
      {
        "id": "2046"
      },
      {
        "id": "6011"
      },
      {
        "id": "1631",
        "mastery_level": "2"
      },
      {
        "id": "2019",
        "mastery_level": "3"
      },
      {
        "id": "2057",
        "mastery_level": "4"
      },
      {
        "id": "5073",
        "mastery_level": "5"
      },
      {
        "id": "5036",
        "mastery_level": "6"
      },
      {
        "id": "1640",
        "mastery_level": "7"
      },
    ]
  },
  "5404": {
    "id": "5404",
    "name": "Pursuers",
    "commander": {
        "id": "322"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1610"
      },
      {
        "id": "1628"
      },
      {
        "id": "7087"
      },
      {
        "id": "2004"
      },
      {
        "id": "1031"
      },
      {
        "id": "5073"
      },
      {
        "id": "1631",
        "mastery_level": "2"
      },
      {
        "id": "2012",
        "mastery_level": "3"
      },
      {
        "id": "2054",
        "mastery_level": "4"
      },
      {
        "id": "2053",
        "mastery_level": "5"
      },
      {
        "id": "7088",
        "mastery_level": "6"
      },
      {
        "id": "5023",
        "mastery_level": "7"
      },
    ]
  },
  "5405": {
    "id": "5405",
    "name": "Rematch",
    "commander": {
        "id": "323"
    },
    "deck": [
      {
        "id": "1615"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1019"
      },
      {
        "id": "1628"
      },
      {
        "id": "2064"
      },
      {
        "id": "2046"
      },
      {
        "id": "1031"
      },
      {
        "id": "1030"
      },
      {
        "id": "1628",
        "mastery_level": "2"
      },
      {
        "id": "1626",
        "mastery_level": "3"
      },
      {
        "id": "2041",
        "mastery_level": "4"
      },
      {
        "id": "2053",
        "mastery_level": "5"
      },
      {
        "id": "6014",
        "mastery_level": "6"
      },
      {
        "id": "1340",
        "mastery_level": "7"
      },
    ]
  },
  "5406": {
    "id": "5406",
    "name": "A Friend to Protect",
    "commander": {
        "id": "320"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "1317"
      },
      {
        "id": "1628"
      },
      {
        "id": "5089"
      },
      {
        "id": "2033"
      },
      {
        "id": "2005"
      },
      {
        "id": "1326"
      },
      {
        "id": "2062",
        "mastery_level": "2"
      },
      {
        "id": "1027",
        "mastery_level": "3"
      },
      {
        "id": "1329",
        "mastery_level": "4"
      },
      {
        "id": "2063",
        "mastery_level": "5"
      },
      {
        "id": "5090",
        "mastery_level": "6"
      },
      {
        "id": "6058",
        "mastery_level": "7"
      },
    ]
  },
  "5407": {
    "id": "5407",
    "name": "Dragon Guard",
    "commander": {
        "id": "318"
    },
    "deck": [
      {
        "id": "1312"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "6012"
      },
      {
        "id": "2062"
      },
      {
        "id": "6021"
      },
      {
        "id": "5025"
      },
      {
        "id": "2001"
      },
      {
        "id": "1330"
      },
      {
        "id": "2062",
        "mastery_level": "2"
      },
      {
        "id": "2020",
        "mastery_level": "3"
      },
      {
        "id": "1028",
        "mastery_level": "4"
      },
      {
        "id": "1628",
        "mastery_level": "5"
      },
      {
        "id": "5029",
        "mastery_level": "6"
      },
      {
        "id": "6024",
        "mastery_level": "7"
      },
    ]
  },
  "5408": {
    "id": "5408",
    "name": "Limited Strength",
    "commander": {
        "id": "323"
    },
    "deck": [
      {
        "id": "1017"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "6007"
      },
      {
        "id": "7087"
      },
      {
        "id": "1628"
      },
      {
        "id": "2004"
      },
      {
        "id": "1629"
      },
      {
        "id": "1029"
      },
      {
        "id": "6072",
        "mastery_level": "2"
      },
      {
        "id": "2002",
        "mastery_level": "3"
      },
      {
        "id": "1625",
        "mastery_level": "4"
      },
      {
        "id": "6090",
        "mastery_level": "5"
      },
      {
        "id": "6049",
        "mastery_level": "6"
      },
      {
        "id": "1640",
        "mastery_level": "7"
      },
    ]
  },
  "5409": {
    "id": "5409",
    "name": "Confronting Defeat",
    "commander": {
        "id": "321"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "7012"
      },
      {
        "id": "7012"
      },
      {
        "id": "6007"
      },
      {
        "id": "6089"
      },
      {
        "id": "1628"
      },
      {
        "id": "7024"
      },
      {
        "id": "1627"
      },
      {
        "id": "1632"
      },
      {
        "id": "1328",
        "mastery_level": "2"
      },
      {
        "id": "1630",
        "mastery_level": "3"
      },
      {
        "id": "1329",
        "mastery_level": "4"
      },
      {
        "id": "2064",
        "mastery_level": "5"
      },
      {
        "id": "6088",
        "mastery_level": "6"
      },
      {
        "id": "2047",
        "mastery_level": "7"
      },
    ]
  },
  "5410": {
    "id": "5410",
    "name": "But It Refused...",
    "commander": {
        "id": "259"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "6007"
      },
      {
        "id": "2064"
      },
      {
        "id": "1628"
      },
      {
        "id": "5062"
      },
      {
        "id": "2030"
      },
      {
        "id": "2024"
      },
      {
        "id": "5053",
        "mastery_level": "2"
      },
      {
        "id": "1327",
        "mastery_level": "3"
      },
      {
        "id": "1330",
        "mastery_level": "4"
      },
      {
        "id": "2062",
        "mastery_level": "5"
      },
      {
        "id": "7088",
        "mastery_level": "6"
      },
      {
        "id": "6026",
        "mastery_level": "7"
      },
    ]
  },
  "5411": {
    "id": "5411",
    "name": "Savior or Destroyer?",
    "commander": {
        "id": "352"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "5017"
      },
      {
        "id": "7005"
      },
      {
        "id": "1628"
      },
      {
        "id": "7062"
      },
      {
        "id": "2014"
      },
      {
        "id": "1630"
      },
      {
        "id": "1028",
        "mastery_level": "2"
      },
      {
        "id": "7066",
        "mastery_level": "3"
      },
      {
        "id": "2005",
        "mastery_level": "4"
      },
      {
        "id": "2062",
        "mastery_level": "5"
      },
      {
        "id": "7003",
        "mastery_level": "6"
      },
      {
        "id": "7054",
        "mastery_level": "7"
      },
    ]
  },
  "5412": {
    "id": "5412",
    "name": "Love of a Mother",
    "commander": {
        "id": "292"
    },
    "deck": [
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1027"
      },
      {
        "id": "1328"
      },
      {
        "id": "1031"
      },
      {
        "id": "2040"
      },
      {
        "id": "2034"
      },
      {
        "id": "1026",
        "mastery_level": "2"
      },
      {
        "id": "1631",
        "mastery_level": "3"
      },
      {
        "id": "6020",
        "mastery_level": "4"
      },
      {
        "id": "1028",
        "mastery_level": "5"
      },
      {
        "id": "1640",
        "mastery_level": "6"
      },
      {
        "id": "1043",
        "mastery_level": "7"
      },
    ]
  },
  "5413": {
    "id": "5413",
    "name": "Second Celebration",
    "commander": {
        "id": "316"
    },
    "deck": [
      {
        "id": "1610"
      },
      {
        "id": "1610"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1631"
      },
      {
        "id": "1628"
      },
      {
        "id": "2014"
      },
      {
        "id": "5060"
      },
      {
        "id": "7016"
      },
      {
        "id": "1328",
        "mastery_level": "2"
      },
      {
        "id": "1327",
        "mastery_level": "3"
      },
      {
        "id": "6051",
        "mastery_level": "4"
      },
      {
        "id": "1028",
        "mastery_level": "5"
      },
      {
        "id": "1641",
        "mastery_level": "6"
      },
      {
        "id": "2013",
        "mastery_level": "7"
      },
    ]
  },
  "5414": {
    "id": "5414",
    "name": "Original Purpose",
    "commander": {
        "id": "319"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "1330"
      },
      {
        "id": "1329"
      },
      {
        "id": "2005"
      },
      {
        "id": "5020"
      },
      {
        "id": "2012"
      },
      {
        "id": "2004",
        "mastery_level": "2"
      },
      {
        "id": "1326",
        "mastery_level": "3"
      },
      {
        "id": "7053",
        "mastery_level": "4"
      },
      {
        "id": "1627",
        "mastery_level": "5"
      },
      {
        "id": "1340",
        "mastery_level": "6"
      },
      {
        "id": "6048",
        "mastery_level": "7"
      },
    ]
  },
  "5415": {
    "id": "5415",
    "name": "Secrets",
    "commander": {
        "id": "327"
    },
    "deck": [
      {
        "id": "1012"
      },
      {
        "id": "1012"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1625"
      },
      {
        "id": "1626"
      },
      {
        "id": "1628"
      },
      {
        "id": "2063"
      },
      {
        "id": "5050"
      },
      {
        "id": "2044",
        "mastery_level": "2"
      },
      {
        "id": "1325",
        "mastery_level": "3"
      },
      {
        "id": "5053",
        "mastery_level": "4"
      },
      {
        "id": "7051",
        "mastery_level": "5"
      },
      {
        "id": "1342",
        "mastery_level": "6"
      },
      {
        "id": "7050",
        "mastery_level": "7"
      },
    ]
  },
  "5416": {
    "id": "5416",
    "name": "Final Request",
    "commander": {
        "id": "247"
    },
    "deck": [
      {
        "id": "1614"
      },
      {
        "id": "1614"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "2060"
      },
      {
        "id": "2041"
      },
      {
        "id": "5024"
      },
      {
        "id": "2056"
      },
      {
        "id": "1627"
      },
      {
        "id": "2042",
        "mastery_level": "2"
      },
      {
        "id": "1332",
        "mastery_level": "3"
      },
      {
        "id": "7051",
        "mastery_level": "4"
      },
      {
        "id": "1328",
        "mastery_level": "5"
      },
      {
        "id": "1343",
        "mastery_level": "6"
      },
      {
        "id": "7049",
        "mastery_level": "7"
      },
    ]
  },
  "5417": {
    "id": "5417",
    "name": "On the Road",
    "commander": {
        "id": "247"
    },
    "deck": [
      {
        "id": "1018"
      },
      {
        "id": "1018"
      },
      {
        "id": "6012"
      },
      {
        "id": "6012"
      },
      {
        "id": "2054"
      },
      {
        "id": "2034"
      },
      {
        "id": "5016"
      },
      {
        "id": "2056"
      },
      {
        "id": "6010"
      },
      {
        "id": "5004",
        "mastery_level": "2"
      },
      {
        "id": "2011",
        "mastery_level": "3"
      },
      {
        "id": "6051",
        "mastery_level": "4"
      },
      {
        "id": "5053",
        "mastery_level": "5"
      },
      {
        "id": "2006",
        "mastery_level": "6"
      },
      {
        "id": "1643",
        "mastery_level": "7"
      },
    ]
  },
  "5418": {
    "id": "5418",
    "name": "Frog Civil War",
    "commander": {
        "id": "290"
    },
    "deck": [
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "6007"
      },
      {
        "id": "6007"
      },
      {
        "id": "2027"
      },
      {
        "id": "2034"
      },
      {
        "id": "5044"
      },
      {
        "id": "5020"
      },
      {
        "id": "6010"
      },
      {
        "id": "5020",
        "mastery_level": "2"
      },
      {
        "id": "2011",
        "mastery_level": "3"
      },
      {
        "id": "7051",
        "mastery_level": "4"
      },
      {
        "id": "7020",
        "mastery_level": "5"
      },
      {
        "id": "1341",
        "mastery_level": "6"
      },
      {
        "id": "7052",
        "mastery_level": "7"
      },
    ]
  },
  "5419": {
    "id": "5419",
    "name": "To the Rescue",
    "commander": {
        "id": "252"
    },
    "deck": [
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "2014"
      },
      {
        "id": "1628"
      },
      {
        "id": "5010"
      },
      {
        "id": "2053"
      },
      {
        "id": "6096"
      },
      {
        "id": "2031",
        "mastery_level": "2"
      },
      {
        "id": "2011",
        "mastery_level": "3"
      },
      {
        "id": "6020",
        "mastery_level": "4"
      },
      {
        "id": "7053",
        "mastery_level": "5"
      },
      {
        "id": "1643",
        "mastery_level": "6"
      },
      {
        "id": "7042",
        "mastery_level": "7"
      },
    ]
  },
  "5420": {
    "id": "5420",
    "name": "Dawnglow Frenzy",
    "commander": {
        "id": "249"
    },
    "deck": [
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1326"
      },
      {
        "id": "1028"
      },
      {
        "id": "2049"
      },
      {
        "id": "6044"
      },
      {
        "id": "1631"
      },
      {
        "id": "2023",
        "mastery_level": "2"
      },
      {
        "id": "2001",
        "mastery_level": "3"
      },
      {
        "id": "5053",
        "mastery_level": "4"
      },
      {
        "id": "5053",
        "mastery_level": "5"
      },
      {
        "id": "5001",
        "mastery_level": "6"
      },
      {
        "id": "2013",
        "mastery_level": "7"
      },
    ]
  },
  "5421": {
    "id": "5421",
    "name": "Mad Frogs",
    "commander": {
        "id": "290"
    },
    "deck": [
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1615"
      },
      {
        "id": "1615"
      },
      {
        "id": "1027"
      },
      {
        "id": "1028"
      },
      {
        "id": "2002"
      },
      {
        "id": "6038"
      },
      {
        "id": "2005"
      },
      {
        "id": "2000",
        "mastery_level": "2"
      },
      {
        "id": "2001",
        "mastery_level": "3"
      },
      {
        "id": "2034",
        "mastery_level": "4"
      },
      {
        "id": "7016",
        "mastery_level": "5"
      },
      {
        "id": "1642",
        "mastery_level": "6"
      },
      {
        "id": "5051",
        "mastery_level": "7"
      },
    ]
  },
  "5422": {
    "id": "5422",
    "name": "Unfamiliar Battleground",
    "commander": {
        "id": "228"
    },
    "deck": [
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1614"
      },
      {
        "id": "1614"
      },
      {
        "id": "1632"
      },
      {
        "id": "1028"
      },
      {
        "id": "1329"
      },
      {
        "id": "5081"
      },
      {
        "id": "2004"
      },
      {
        "id": "1627",
        "mastery_level": "2"
      },
      {
        "id": "2020",
        "mastery_level": "3"
      },
      {
        "id": "7020",
        "mastery_level": "4"
      },
      {
        "id": "1028",
        "mastery_level": "5"
      },
      {
        "id": "2013",
        "mastery_level": "6"
      },
      {
        "id": "2013",
        "mastery_level": "7"
      },
    ]
  },
  "5423": {
    "id": "5423",
    "name": "No Rest",
    "commander": {
        "id": "252"
    },
    "deck": [
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "1031"
      },
      {
        "id": "5062"
      },
      {
        "id": "1630"
      },
      {
        "id": "5067"
      },
      {
        "id": "6063"
      },
      {
        "id": "2023",
        "mastery_level": "2"
      },
      {
        "id": "2020",
        "mastery_level": "3"
      },
      {
        "id": "2014",
        "mastery_level": "4"
      },
      {
        "id": "1028",
        "mastery_level": "5"
      },
      {
        "id": "1040",
        "mastery_level": "6"
      },
      {
        "id": "7050",
        "mastery_level": "7"
      },
    ]
  },
  "5424": {
    "id": "5424",
    "name": "Previous Experience",
    "commander": {
        "id": "252"
    },
    "deck": [
      {
        "id": "1315"
      },
      {
        "id": "1315"
      },
      {
        "id": "1318"
      },
      {
        "id": "1318"
      },
      {
        "id": "1026"
      },
      {
        "id": "5050"
      },
      {
        "id": "1630"
      },
      {
        "id": "5058"
      },
      {
        "id": "6063"
      },
      {
        "id": "2032",
        "mastery_level": "2"
      },
      {
        "id": "2046",
        "mastery_level": "3"
      },
      {
        "id": "6050",
        "mastery_level": "4"
      },
      {
        "id": "1328",
        "mastery_level": "5"
      },
      {
        "id": "5029",
        "mastery_level": "6"
      },
      {
        "id": "5051",
        "mastery_level": "7"
      },
    ]
  },
  "5425": {
    "id": "5425",
    "name": "Water Corruption",
    "commander": {
        "id": "257"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "5012"
      },
      {
        "id": "5012"
      },
      {
        "id": "1330"
      },
      {
        "id": "5046"
      },
      {
        "id": "1630"
      },
      {
        "id": "5080"
      },
      {
        "id": "5024"
      },
      {
        "id": "2032",
        "mastery_level": "2"
      },
      {
        "id": "2056",
        "mastery_level": "3"
      },
      {
        "id": "5046",
        "mastery_level": "4"
      },
      {
        "id": "2034",
        "mastery_level": "5"
      },
      {
        "id": "5061",
        "mastery_level": "6"
      },
      {
        "id": "6048",
        "mastery_level": "7"
      },
    ]
  },
  "5426": {
    "id": "5426",
    "name": "From Dawn to Gold",
    "commander": {
        "id": "313"
    },
    "deck": [
      {
        "id": "1311"
      },
      {
        "id": "1311"
      },
      {
        "id": "6017"
      },
      {
        "id": "6017"
      },
      {
        "id": "1325"
      },
      {
        "id": "5025"
      },
      {
        "id": "1630"
      },
      {
        "id": "5073"
      },
      {
        "id": "2066"
      },
      {
        "id": "1631",
        "mastery_level": "2"
      },
      {
        "id": "5030",
        "mastery_level": "3"
      },
      {
        "id": "2057",
        "mastery_level": "4"
      },
      {
        "id": "7051",
        "mastery_level": "5"
      },
      {
        "id": "5034",
        "mastery_level": "6"
      },
      {
        "id": "5054",
        "mastery_level": "7"
      },
    ]
  },
  "5427": {
    "id": "5427",
    "name": "From the Depths",
    "commander": {
        "id": "352"
    },
    "deck": [
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1619"
      },
      {
        "id": "1619"
      },
      {
        "id": "5011"
      },
      {
        "id": "5020"
      },
      {
        "id": "1630"
      },
      {
        "id": "5073"
      },
      {
        "id": "2067"
      },
      {
        "id": "7005",
        "mastery_level": "2"
      },
      {
        "id": "5015",
        "mastery_level": "3"
      },
      {
        "id": "7015",
        "mastery_level": "4"
      },
      {
        "id": "1028",
        "mastery_level": "5"
      },
      {
        "id": "7054",
        "mastery_level": "6"
      },
      {
        "id": "6052",
        "mastery_level": "7"
      },
    ]
  },
  "5428": {
    "id": "5428",
    "name": "Swamp Fiends",
    "commander": {
        "id": "242"
    },
    "deck": [
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "2062"
      },
      {
        "id": "5010"
      },
      {
        "id": "1628"
      },
      {
        "id": "6031"
      },
      {
        "id": "6097"
      },
      {
        "id": "7066",
        "mastery_level": "2"
      },
      {
        "id": "5010",
        "mastery_level": "3"
      },
      {
        "id": "7015",
        "mastery_level": "4"
      },
      {
        "id": "6020",
        "mastery_level": "5"
      },
      {
        "id": "7014",
        "mastery_level": "6"
      },
      {
        "id": "2013",
        "mastery_level": "7"
      },
    ]
  },
  "5429": {
    "id": "5429",
    "name": "Mindless Aggression",
    "commander": {
        "id": "247"
    },
    "deck": [
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "2060"
      },
      {
        "id": "5084"
      },
      {
        "id": "5035"
      },
      {
        "id": "6029"
      },
      {
        "id": "7062"
      },
      {
        "id": "1630",
        "mastery_level": "2"
      },
      {
        "id": "2049",
        "mastery_level": "3"
      },
      {
        "id": "6015",
        "mastery_level": "4"
      },
      {
        "id": "7053",
        "mastery_level": "5"
      },
      {
        "id": "2051",
        "mastery_level": "6"
      },
      {
        "id": "5064",
        "mastery_level": "7"
      },
    ]
  },
  "5430": {
    "id": "5430",
    "name": "Boiling Water",
    "commander": {
        "id": "352"
    },
    "deck": [
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "6034"
      },
      {
        "id": "5041"
      },
      {
        "id": "5020"
      },
      {
        "id": "7021"
      },
      {
        "id": "7062"
      },
      {
        "id": "1630",
        "mastery_level": "2"
      },
      {
        "id": "2033",
        "mastery_level": "3"
      },
      {
        "id": "1626",
        "mastery_level": "4"
      },
      {
        "id": "5053",
        "mastery_level": "5"
      },
      {
        "id": "2047",
        "mastery_level": "6"
      },
      {
        "id": "6058",
        "mastery_level": "7"
      },
    ]
  },
  "5431": {
    "id": "5431",
    "name": "The Plan",
    "commander": {
        "id": "246"
    },
    "deck": [
      {
        "id": "5017"
      },
      {
        "id": "5017"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "6021"
      },
      {
        "id": "2066"
      },
      {
        "id": "6054"
      },
      {
        "id": "7020"
      },
      {
        "id": "6010"
      },
      {
        "id": "6005",
        "mastery_level": "2"
      },
      {
        "id": "5011",
        "mastery_level": "3"
      },
      {
        "id": "2056",
        "mastery_level": "4"
      },
      {
        "id": "5053",
        "mastery_level": "5"
      },
      {
        "id": "2043",
        "mastery_level": "6"
      },
      {
        "id": "6024",
        "mastery_level": "7"
      },
    ]
  },
  "5432": {
    "id": "5432",
    "name": "Resistance",
    "commander": {
        "id": "292"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "6022"
      },
      {
        "id": "6022"
      },
      {
        "id": "6015"
      },
      {
        "id": "2066"
      },
      {
        "id": "6011"
      },
      {
        "id": "6066"
      },
      {
        "id": "5093"
      },
      {
        "id": "6016",
        "mastery_level": "2"
      },
      {
        "id": "6036",
        "mastery_level": "3"
      },
      {
        "id": "5025",
        "mastery_level": "4"
      },
      {
        "id": "1028",
        "mastery_level": "5"
      },
      {
        "id": "1640",
        "mastery_level": "6"
      },
      {
        "id": "7049",
        "mastery_level": "7"
      },
    ]
  },
  "5433": {
    "id": "5433",
    "name": "Futility",
    "commander": {
        "id": "290"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1010"
      },
      {
        "id": "1010"
      },
      {
        "id": "6011"
      },
      {
        "id": "2048"
      },
      {
        "id": "2002"
      },
      {
        "id": "6056"
      },
      {
        "id": "7093"
      },
      {
        "id": "6042",
        "mastery_level": "2"
      },
      {
        "id": "6015",
        "mastery_level": "3"
      },
      {
        "id": "5069",
        "mastery_level": "4"
      },
      {
        "id": "1328",
        "mastery_level": "5"
      },
      {
        "id": "5063",
        "mastery_level": "6"
      },
      {
        "id": "7052",
        "mastery_level": "7"
      },
    ]
  },
  "5434": {
    "id": "5434",
    "name": "Second Thoughts",
    "commander": {
        "id": "290"
    },
    "deck": [
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
      {
        "id": "1615"
      },
      {
        "id": "1615"
      },
      {
        "id": "6010"
      },
      {
        "id": "2042"
      },
      {
        "id": "1326"
      },
      {
        "id": "6020"
      },
      {
        "id": "7061"
      },
      {
        "id": "7034",
        "mastery_level": "2"
      },
      {
        "id": "5067",
        "mastery_level": "3"
      },
      {
        "id": "5067",
        "mastery_level": "4"
      },
      {
        "id": "1328",
        "mastery_level": "5"
      },
      {
        "id": "6019",
        "mastery_level": "6"
      },
      {
        "id": "7018",
        "mastery_level": "7"
      },
    ]
  },
  "5435": {
    "id": "5435",
    "name": "The Bear and the Boulder",
    "commander": {
        "id": "220"
    },
    "deck": [
      {
        "id": "1312"
      },
      {
        "id": "1312"
      },
      {
        "id": "1313"
      },
      {
        "id": "1313"
      },
      {
        "id": "5089"
      },
      {
        "id": "2031"
      },
      {
        "id": "1631"
      },
      {
        "id": "6020"
      },
      {
        "id": "7010"
      },
      {
        "id": "7029",
        "mastery_level": "2"
      },
      {
        "id": "5065",
        "mastery_level": "3"
      },
      {
        "id": "5025",
        "mastery_level": "4"
      },
      {
        "id": "1028",
        "mastery_level": "5"
      },
      {
        "id": "6052",
        "mastery_level": "6"
      },
      {
        "id": "7018",
        "mastery_level": "7"
      },
    ]
  },
  "5436": {
    "id": "5436",
    "name": "Bah",
    "commander": {
        "id": "249"
    },
    "deck": [
      {
        "id": "26022"
      },
      {
        "id": "26022"
      },
      {
        "id": "1015"
      },
      {
        "id": "1015"
      },
      {
        "id": "1025"
      },
      {
        "id": "1328"
      },
      {
        "id": "1631"
      },
      {
        "id": "1327"
      },
      {
        "id": "2034"
      },
      {
        "id": "2052",
        "mastery_level": "2"
      },
      {
        "id": "5053",
        "mastery_level": "3"
      },
      {
        "id": "2044",
        "mastery_level": "4"
      },
      {
        "id": "5040",
        "mastery_level": "5"
      },
      {
        "id": "5043",
        "mastery_level": "6"
      },
      {
        "id": "7018",
        "mastery_level": "7"
      },
    ]
  },
  "5437": {
    "id": "5437",
    "name": "Ghost of the Past",
    "commander": {
        "id": "351"
    },
    "deck": [
      {
        "id": "7012"
      },
      {
        "id": "6012"
      },
      {
        "id": "7012"
      },
      {
        "id": "6012"
      },
      {
        "id": "11632"
      },
      {
        "id": "5025"
      },
      {
        "id": "1631"
      },
      {
        "id": "1329"
      },
      {
        "id": "2045"
      },
      {
        "id": "7038",
        "mastery_level": "2"
      },
      {
        "id": "2005",
        "mastery_level": "3"
      },
      {
        "id": "2005",
        "mastery_level": "4"
      },
      {
        "id": "2005",
        "mastery_level": "5"
      },
      {
        "id": "1040",
        "mastery_level": "6"
      },
      {
        "id": "2006",
        "mastery_level": "7"
      },
    ]
  },
  "5438": {
    "id": "5438",
    "name": "Ghost of the Present",
    "commander": {
        "id": "252"
    },
    "deck": [
      {
        "id": "5022"
      },
      {
        "id": "5022"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
      {
        "id": "1325"
      },
      {
        "id": "5020"
      },
      {
        "id": "1026"
      },
      {
        "id": "1028"
      },
      {
        "id": "2014"
      },
      {
        "id": "7004",
        "mastery_level": "2"
      },
      {
        "id": "5050",
        "mastery_level": "3"
      },
      {
        "id": "1028",
        "mastery_level": "4"
      },
      {
        "id": "1028",
        "mastery_level": "5"
      },
      {
        "id": "7018",
        "mastery_level": "6"
      },
      {
        "id": "7018",
        "mastery_level": "7"
      },
    ]
  },
  "5439": {
    "id": "5439",
    "name": "Ghost of the Future",
    "commander": {
        "id": "359"
    },
    "deck": [
      {
        "id": "7017"
      },
      {
        "id": "7017"
      },
      {
        "id": "7007"
      },
      {
        "id": "7007"
      },
      {
        "id": "1032"
      },
      {
        "id": "5015"
      },
      {
        "id": "1026"
      },
      {
        "id": "2070"
      },
      {
        "id": "1630"
      },
      {
        "id": "7005",
        "mastery_level": "2"
      },
      {
        "id": "7066",
        "mastery_level": "3"
      },
      {
        "id": "7005",
        "mastery_level": "4"
      },
      {
        "id": "5073",
        "mastery_level": "5"
      },
      {
        "id": "7023",
        "mastery_level": "6"
      },
      {
        "id": "7023",
        "mastery_level": "7"
      },
    ]
  },
  "5440": {
    "id": "5440",
    "name": "Lesson Learned",
    "commander": {
        "id": "249"
    },
    "deck": [
      {
        "id": "5022"
      },
      {
        "id": "1015"
      },
      {
        "id": "6022"
      },
      {
        "id": "1618"
      },
      {
        "id": "2041"
      },
      {
        "id": "5010"
      },
      {
        "id": "2058"
      },
      {
        "id": "2070"
      },
      {
        "id": "2066"
      },
      {
        "id": "1030",
        "mastery_level": "2"
      },
      {
        "id": "2062",
        "mastery_level": "3"
      },
      {
        "id": "7005",
        "mastery_level": "4"
      },
      {
        "id": "1032",
        "mastery_level": "5"
      },
      {
        "id": "1043",
        "mastery_level": "6"
      },
      {
        "id": "5051",
        "mastery_level": "7"
      },
    ]
  },
  "61": {
    "id": "61",
    "name": "Wind in the Woods",
    "commander": {
        "id": "201"
    },
    "deck": [
      {
        "id": "1000",
        "level": "2"
      },
      {
        "id": "1600",
        "level": "2"
      },
      {
        "id": "1601"
      },
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1002",
        "level": "2"
      },
      {
        "id": "1002",
        "level": "2"
      },
      {
        "id": "1002",
        "level": "2"
      },
      {
        "id": "1302"
      },
      {
        "id": "1311"
      },
    ]
  },
  "62": {
    "id": "62",
    "name": "Branching Paths",
    "commander": {
        "id": "201"
    },
    "deck": [
      {
        "id": "1000",
        "level": "2"
      },
      {
        "id": "1600",
        "level": "2"
      },
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1001",
        "level": "2"
      },
      {
        "id": "1002",
        "level": "2"
      },
      {
        "id": "1002",
        "level": "2"
      },
      {
        "id": "1002",
        "level": "2"
      },
      {
        "id": "1002",
        "level": "2"
      },
      {
        "id": "1302"
      },
      {
        "id": "1311"
      },
    ]
  },
  "63": {
    "id": "63",
    "name": "Renewed Trail",
    "commander": {
        "id": "200",
        "level": "2"
    },
    "deck": [
      {
        "id": "1600",
        "level": "2"
      },
      {
        "id": "1300",
        "level": "2"
      },
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1603"
      },
      {
        "id": "1607"
      },
      {
        "id": "1307",
        "level": "2"
      },
      {
        "id": "1303"
      },
      {
        "id": "1303",
        "level": "2"
      },
      {
        "id": "1615"
      },
      {
        "id": "1615"
      },
    ]
  },
  "64": {
    "id": "64",
    "name": "The Hollow",
    "commander": {
        "id": "219"
    },
    "deck": [
      {
        "id": "1300",
        "level": "2"
      },
      {
        "id": "1300",
        "level": "3"
      },
      {
        "id": "1301",
        "level": "2"
      },
      {
        "id": "1301"
      },
      {
        "id": "1303"
      },
      {
        "id": "1303",
        "level": "2"
      },
      {
        "id": "1305"
      },
      {
        "id": "1305"
      },
      {
        "id": "1311"
      },
      {
        "id": "1314"
      },
    ]
  },
  "71": {
    "id": "71",
    "name": "Woodland Departure",
    "commander": {
        "id": "203"
    },
    "deck": [
      {
        "id": "1600",
        "level": "3"
      },
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1000",
        "level": "2"
      },
      {
        "id": "1015"
      },
      {
        "id": "1615"
      },
    ]
  },
  "72": {
    "id": "72",
    "name": "Land of Light",
    "commander": {
        "id": "203"
    },
    "deck": [
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1304"
      },
      {
        "id": "1304"
      },
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1604",
        "level": "3"
      },
      {
        "id": "1618"
      },
      {
        "id": "1613"
      },
    ]
  },
  "73": {
    "id": "73",
    "name": "Hunted",
    "commander": {
        "id": "203"
    },
    "deck": [
      {
        "id": "1607"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1304",
        "level": "3"
      },
      {
        "id": "1304",
        "level": "3"
      },
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1604",
        "level": "3"
      },
      {
        "id": "1618"
      },
      {
        "id": "1613"
      },
    ]
  },
  "74": {
    "id": "74",
    "name": "Prey Upon",
    "commander": {
        "id": "203"
    },
    "deck": [
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602",
        "level": "2"
      },
      {
        "id": "1602",
        "level": "2"
      },
      {
        "id": "1602",
        "level": "2"
      },
      {
        "id": "1001",
        "level": "2"
      },
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1615"
      },
      {
        "id": "1615"
      },
    ]
  },
  "81": {
    "id": "81",
    "name": "Ghosts...?",
    "commander": {
        "id": "204"
    },
    "deck": [
      {
        "id": "1001",
        "level": "2"
      },
      {
        "id": "1001",
        "level": "2"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1018"
      },
    ]
  },
  "82": {
    "id": "82",
    "name": "Soul Wisp Swarm",
    "commander": {
        "id": "204"
    },
    "deck": [
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "11006"
      },
      {
        "id": "11006"
      },
      {
        "id": "1018"
      },
    ]
  },
  "83": {
    "id": "83",
    "name": "Fight or Flight",
    "commander": {
        "id": "204"
    },
    "deck": [
      {
        "id": "1000",
        "level": "2"
      },
      {
        "id": "1601",
        "level": "2"
      },
      {
        "id": "1602"
      },
      {
        "id": "1602"
      },
      {
        "id": "1003"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "11006"
      },
      {
        "id": "1012",
        "level": "2"
      },
      {
        "id": "1012"
      },
    ]
  },
  "84": {
    "id": "84",
    "name": "Trespassing",
    "commander": {
        "id": "2"
    },
    "deck": [
      {
        "id": "1001",
        "level": "2"
      },
      {
        "id": "1001",
        "level": "2"
      },
      {
        "id": "1002",
        "level": "2"
      },
      {
        "id": "1002"
      },
      {
        "id": "1003",
        "level": "2"
      },
      {
        "id": "1006"
      },
      {
        "id": "1006"
      },
      {
        "id": "1011"
      },
      {
        "id": "1018"
      },
      {
        "id": "1014"
      },
    ]
  },
  "91": {
    "id": "91",
    "name": "Finding a Crossing",
    "commander": {
        "id": "205"
    },
    "deck": [
      {
        "id": "1601"
      },
      {
        "id": "1605"
      },
      {
        "id": "1605"
      },
      {
        "id": "1605"
      },
      {
        "id": "1605"
      },
      {
        "id": "1605"
      },
      {
        "id": "1607"
      },
      {
        "id": "1607"
      },
      {
        "id": "1613"
      },
      {
        "id": "1613"
      },
    ]
  },
  "92": {
    "id": "92",
    "name": "Mage's Decree",
    "commander": {
        "id": "205"
    },
    "deck": [
      {
        "id": "1603",
        "level": "2"
      },
      {
        "id": "1603",
        "level": "2"
      },
      {
        "id": "1603",
        "level": "3"
      },
      {
        "id": "1604"
      },
      {
        "id": "1604"
      },
      {
        "id": "1605"
      },
      {
        "id": "1606"
      },
      {
        "id": "1606"
      },
      {
        "id": "1618"
      },
      {
        "id": "1618"
      },
    ]
  },
  "93": {
    "id": "93",
    "name": "Water Under the Bridge",
    "commander": {
        "id": "205"
    },
    "deck": [
      {
        "id": "1603"
      },
      {
        "id": "1603",
        "level": "3"
      },
      {
        "id": "1603",
        "level": "3"
      },
      {
        "id": "1604"
      },
      {
        "id": "1604"
      },
      {
        "id": "1606"
      },
      {
        "id": "1606"
      },
      {
        "id": "1606"
      },
      {
        "id": "1617"
      },
      {
        "id": "1617"
      },
    ]
  },
  "94": {
    "id": "94",
    "name": "Wrath of the River",
    "commander": {
        "id": "205"
    },
    "deck": [
      {
        "id": "1603",
        "level": "3"
      },
      {
        "id": "1603",
        "level": "3"
      },
      {
        "id": "1604",
        "level": "2"
      },
      {
        "id": "1604",
        "level": "2"
      },
      {
        "id": "1606"
      },
      {
        "id": "1606"
      },
      {
        "id": "1607"
      },
      {
        "id": "1607"
      },
      {
        "id": "1619"
      },
      {
        "id": "1617"
      },
    ]
  },
};
