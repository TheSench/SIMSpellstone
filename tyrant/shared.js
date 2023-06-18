//function ajax_call(url) {
//	var xmlhttp;
//	if (window.XMLHttpRequest) {
//		// code for IE7+, Firefox, Chrome, Opera, Safari
//		xmlhttp=new XMLHttpRequest();
//	} else {
//		// code for IE6, IE5
//		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//	}
//
//	xmlhttp.open("GET", url, false);
//	xmlhttp.send();
//	return xmlhttp.responseText;
//}

function shuffle(this_array) {
	var i = this_array.length, j, tempi, tempj;
	if ( i == 0 ) return false;
	while ( --i ) {
		j       = Math.floor( Math.random() * ( i + 1 ) );
		tempi   = this_array[i];
		tempj   = this_array[j];
		this_array[i] = tempj;
		this_array[j] = tempi;
	}
}

function copy_deck(original_deck) {
	var new_deck = [];
	new_deck.commander = original_deck.commander;
	new_deck.deck = copy_card_list(original_deck.deck);
	return new_deck;
}

function copy_card_list(original_card_list) {
	var new_card_list = [];
	for (var key = 0, len = original_card_list.length; key < len; key++) {
		new_card_list[key] = original_card_list[key];
	}
	return new_card_list;
}

function copy_card(original_card) {
	return MakeAssault(original_card);
}

var MakeAssault = (function () {
	var Card = function (original_card) {
		this.id = original_card.id;
		this.name = original_card.name;
		this.attack = original_card.attack;
		this.health = original_card.health;
		this.cost = original_card.cost;
		this.rarity = original_card.rarity;
		this.type = original_card.type;
		this.set = original_card.set;
		this.skill = copy_skills(original_card.skill);
		this.health_left = this.health;
		this.timer = this.cost;
		return this;
	}
	
	Card.prototype = {
		p: null,
		health_left: 0,
		timer: 0,
		attack_rally: 0,
		attack_weaken: 0,
		attack_berserk: 0,
		key: 0,
		// Statuses
		poisoned: 0,
		enfeebled: 0,
		protected: 0,
		augmented: 0,
		immobilized: false,
		stunned: false,
		frozen: false,
		jammed: false,
		diseased: false,
		sundered: false,
		phased: false,
		chaosed: false,
		blitz: false,

		//Card ID is ...
		isCommander: function () {
			var mod_id = this.id % 4000;
			return (mod_id >= 1000 && mod_id < 2000);
		},

		isAssault: function () {
			var mod_id = this.id % 4000;
			return (mod_id >= 0 && mod_id < 1000);
		},

		isStructure: function () {
			var mod_id = this.id % 4000;
			return (mod_id >= 2000 && mod_id < 3000);
		},

		isAction: function () {
			var mod_id = this.id % 4000;
			return (mod_id >= 3000 && mod_id < 4000);
		},

		// Alive
		// -['health_left'] > 0
		isAlive: function () {
			return (this.health_left > 0);
		},
		
		// Active
		// - timer = 0
		// - or currently has blitz status
		isActive: function () {
			return (this.timer == 0 || this.blitz);
		},
		
		// Active Next Turn
		// - timer <=1
		// - or currently has blitz status
		isActiveNextTurn: function () {
			return (this.timer <= 1 || this.blitz);
		},

		// Inactive
		// - timer >=1
		isInactive: function () {
			return this.timer >= 1;
		},

		// Unjammed (or Frozen)
		isUnjammed: function () {
			return !(this.jammed || this.frozen);
		},

		// Has Status Ailments (cannot target inactive frozen assaults unless they have other status ailments or it is during enemy's turn)
		// - jam, immobilze, poison, disease, freeze, enfeeble, chaos, stun
		hasAilments: function (enemy_turn) {
			if (this.jammed || this.immobilized || this.stunned || 
					this.poisoned || this.diseased || this.enfeebled || 
					this.chaosed || this.sundered) {
				return true;
			} else if (this.frozen && (this.timer == 0 || enemy_turn)) {
				return true;
			}
			return false;
		},

		// Has at least one Augmentable Activation Skill
		// - strike, protect, enfeeble, rally, repair, supply, siege, heal, weaken (unless they have on play/death/attacked/kill)
		isAugmentable: function () {
			var target_skills = this.skill;
			for (var skill_key in target_skills) {
				switch (skill_key) {
					case 'strike':
					case 'protect':
					case 'enfeeble':
					case 'rally':
					case 'repair':
					case 'supply':
					case 'siege':
					case 'heal':
					case 'weaken':
						var augmentable_skill = target_skills[skill_key];
						if (!augmentable_skill.attacked && !augmentable_skill.died && !augmentable_skill.played && !augmentable_skill.kill) {
							return true;
						}
				}
			}
			return false;
		},
		
		// Damaged
		// -['health_left'] < health
		isDamaged: function () {
			if (this.health_left < this.health) return true;
			return false;
		},
		
		// Has Attack power
		// - attack > 0
		hasAttack: function () {
			return ( (this.attack + this.attack_rally
					- this.attack_weaken + this.attack_berserk) > 0);
		},

		// Targets that are opposite of the source or to the right of it
		// - only use this function for Chaos on Death, Jam on Death, and Weaken on Death
		hasNotAttackedAlready2: function (relative_source) {
			if (!relative_source.isAssault()) return true; // If source is not an assault, assume that the target has not attacked already
			return (this.key >= relative_source.key); // If source is an assault, check its relative position
		},

		// Targets that are opposite of the source or to the right of it
		// - only use this function for Chaos on Attacked, Jam on Attacked, and Weaken on Attacked
		hasNotAttackedAlready3: function (attacker) {
			if (!attacker.isAssault()) return true; // If source is not an assault, assume that the target has not attacked already
			return (this.key > attacker.key); // If source is an assault, check its relative position
		},
		
		// Currently attacking
		// - only use this function for Chaos on Death, Jam on Death, and Weaken on Death
		isAttacking2: function (relative_source) {
			if (!relative_source.isAssault()) return false; // If source is not an assault, assume that the target is not attacking
			return (this.key == relative_source.key);
		},

		isAdjacent: function (src) {
			var thisKey = this.key;
			var left = src.key - 1;
			var right = left + 2;

			return (thisKey >= left && thisKey <= right);
		},

		// Filters by faction
		isInFaction: function (faction) {
			if (faction === undefined) return 1;
			if (this.type == faction) return 1;
			return 0;
		},

		// Filters out any bloodthirsty units
		isNonBloodthirsty: function () {
			return (this.type != 3);
		},

		// Picks one intercepting target
		canIntercept: function (interceptee) {
			// Must have intercept skill
			if (!this.skill.intercept) return false;

			// Must be adjacent to original target
			if (this.key == interceptee.key - 1) {
				return true;
			}
			else if (this.key == interceptee.key + 1) {
				return true;
			}

			return false;
		}
	}
	
	return (function (original_card) {
		return new Card(original_card);
	})
}());

function copy_skills(original_skills) {
	var new_skills = [];
	for (var key in original_skills) {
		new_skills[key] = copy_skill(original_skills[key]);
	}
	return new_skills;
}

function copy_skill(original_skill) {
	var new_skill = {};
	new_skill.id = original_skill.id;
	new_skill.x = original_skill.x;
	new_skill.all = original_skill.all;
	new_skill.y = original_skill.y;
	new_skill.z = original_skill.z;
	new_skill.attacked = original_skill.attacked;
	new_skill.died = original_skill.died;
	new_skill.played = original_skill.played;
	new_skill.kill = original_skill.kill;
	return new_skill;
}

//Debug functions

//return skills in readable format
function debug_skills(skills) {
	var first_skill = true;
	var output = '';
	for (var key in skills) {
		var skill = skills[key];
		if (first_skill) output += ' <u>( ';
		else output += ' | ';
		first_skill = false;
		output += skill.id;
		if (skill.all) output += ' all';
		if (skill.y) output += ' ' + factions[skill.y];
		if (skill.id == 'summon' && skill.x) output += ' ' + CARDS.root.unit[skill.x]['name'];
		else if (skill.x) output += ' ' + skill.x;
		if (skill.played) output += ' on play';
		if (skill.attacked) output += ' on attacked';
		if (skill.died) output += ' on death';
		if (skill.kill) output += ' on kill';
	}
	if (!first_skill) output += ' )</u>';

	return output;
}

// Dump deck contents
function debug_dump_decks() {
//	if (!debug) return;

	echo += '<br><hr><br>';
	echo += '<b>Deck Hash:</b>';
	echo += '<br>';
	echo += '<input type="text" value="';
	echo += hash_encode(cache_player_deck);
	echo += '" onclick="this.select()" size="50">';
	echo += '<br><br>';
	echo += '<b>Card List:</b>';
	echo += '<br>';
	echo += '<input type="text" value="';
	echo += generate_card_list(cache_player_deck);
	echo += '" onclick="this.select()" size="100">';
	echo += '<br><br>';
	var current_card = get_card_by_id(cache_player_deck.commander);
	current_card.p = 'player';
	current_card.health_left = current_card.health;
	echo += debug_name(current_card) + debug_skills(current_card.skill) + '<br>';
	for (var key in cache_player_deck.deck) {
		var card_id = cache_player_deck.deck[key];
		if (isNaN(card_id) && card_id.indexOf(',') != -1) {
			card_id = card_id.split(',');
			card_id = card_id[0];
		}
		current_card = get_card_by_id(card_id);
		current_card.p = 'player';
		current_card.key = undefined;
		echo += debug_name(current_card) + debug_skills(current_card.skill);
		if (current_card.type) echo += ' <u>' + factions[current_card.type] + '</u>';
		echo += '<br>';
	}
	
	var debug_cpu_deck;
	if (cache_cpu_deck) {
		debug_cpu_deck = cache_cpu_deck;
	} else if (getraid) {
		debug_cpu_deck = load_deck_raid(getraid);
	} else if (getquest) {
		debug_cpu_deck = load_deck_quest(getquest);
	}
	
	echo += '<br>';
	echo += '<br>';
	echo += '<i>Deck Hash:</i>';
	echo += '<br>';
	echo += '<input type="text" value="';
	echo += hash_encode(debug_cpu_deck);
	echo += '" onclick="this.select()" size="50">';
	echo += '<br>';
	echo += '<u>Please note that Raid and Quest simulations randomize the enemy deck for each battle. Only one example enemy deck hash is generated.</u><br>';
	echo += '<br>';
	echo += '<i>Card List:</i>';
	echo += '<br>';
	echo += '<input type="text" value="';
	echo += generate_card_list(debug_cpu_deck);
	echo += '" onclick="this.select()" size="100">';
	echo += '<br>';
	echo += '<u>Please note that Raid and Quest simulations randomize the enemy deck for each battle. Only one example enemy deck hash is generated.</u><br>';
	echo += '<br>';
	var current_card = get_card_by_id(debug_cpu_deck.commander);
	current_card.p = 'cpu';
	current_card.health_left = current_card.health;
	echo += debug_name(current_card) + debug_skills(current_card.skill) + '<br>';
	for (var key in debug_cpu_deck.deck) {
		var card_id = debug_cpu_deck.deck[key];
		if (isNaN(card_id) && card_id.indexOf(',') != -1) {
			card_id = card_id.split(',');
			card_id = card_id[0];
		}
		current_card = get_card_by_id(card_id);
		current_card.p = 'cpu';
		current_card.key = undefined;
		echo += debug_name(current_card) + debug_skills(current_card.skill);
		if (current_card.type) echo += ' <u>' + factions[current_card.type] + '</u>';
		echo += '<br>';
	}
	echo += '<br><hr><br>';
}

// Dump field contents
function debug_dump_field() {
	if (!debug) return;

	echo += '<font color="#666666">';

	var players = ['player','cpu'];
	var types = ['assaults','structures'];

	for (var player_key = 0, p_len = players.length; player_key < p_len; player_key++) {
		var player_val = players[player_key];
		for (var type_key = 0, t_len = types.length; type_key < t_len; type_key++) {
			var type_val = types[type_key];
			echo += '<br>';
			echo += player_val + '\'s ' + type_val + ':<br>';
			var field_x_units = field[player_val][type_val];
			for (var card_key = 0, unit_len = field_x_units.length; card_key < unit_len; card_key++) {
				var current_card = field_x_units[card_key];
				echo += debug_name(current_card);
				echo += '('+key+')';
				echo += '<br>';
			}
			if (!field[player_val][type_val].length) echo += 'None<br>';
		}
	}
	echo += '</font>';
	echo += '<br>';
}

// Output formatted name of card
function debug_name(card) {
	if (card.p == 'cpu') {
		var tag = 'i';
	} else {
		var tag = 'b';
	}
	var output = '<' + tag + '>';
	output += card.name;
	if (card.set == 5002) output += '*';
	if (card.key !== undefined) output += ' (' + card.key + ')';
	output += '</' + tag + '>';
	if (!card.isAction()) {
		output += '<u>';
		if (card.isAssault()) {
			output += ' [';
			var atk = parseInt(card.attack) + parseInt(card.attack_rally) - parseInt(card.attack_weaken) + parseInt(card.attack_berserk);
			if (isNaN(atk) || atk == undefined) atk = card.attack;
			output += atk;
			output += '/';
			if (card.health_left !== undefined) output += card.health_left;
			else output += card.health;
			output += '/';
			if (card.timer !== undefined) output += card.timer;
			else output += card.cost;
			output += ']';
		} else if (card.isStructure()) {
			output += ' [';
			if (card.health_left !== undefined) output += card.health_left;
			else output += card.health;
			output += 'hp/';
			if (card.timer !== undefined) output += card.timer;
			else output += card.cost;
			output += 'cd]';
		} else if (card.isCommander()) {
			output += ' [';
			if (card.health_left !== undefined) output += card.health_left;
			else output += card.health;
			output += ' HP]';
		}
	}
	output += '</u>';

	return output;
}

// Dump whatever card or array
function dump(card) {
	echo += '<pre>';
	print_r(card);
	echo += '</pre>';
}

//Returns written card list built from deck array
function generate_card_list(deck) {

	var cardlist = '';

	var commander = get_slim_card_by_id(deck.commander);
	cardlist += commander.name;
	if (commander.set == '5002') cardlist += '*';
	if (!commander.set || commander.set == '9999') cardlist += '['+commander.id+']';
	for (var key in deck.deck) {
		var card = get_slim_card_by_id(deck.deck[key]);
		var priority = 0;
		if (isNaN(deck.deck[key]) && deck.deck[key].indexOf(',') != -1) {
			card = deck.deck[key].split(',');
			priority = parseInt(card[1]);
			card = parseInt(card[0]);
			card = get_slim_card_by_id(card);
		}
		if (!card) continue;
		var current_card = ', ' + card.name;
		if (card.set == '5002') current_card += '*';
		if (!card.set || card.set == '9999') current_card += '['+card.id+']';

		if (cardlist.length > current_card.length+3 && cardlist.lastIndexOf(current_card+'(') == cardlist.length-current_card.length-3) {
			var num = cardlist.substr(cardlist.length-4);
			num = parseInt(num.substr(num.indexOf('(')+1,num.length-1));
			num++;
			while (cardlist.substr(cardlist.length-1,1) != '(') {
				cardlist = cardlist.substr(0,cardlist.length-1);
			}
			cardlist = cardlist.substr(0,cardlist.length-1);
			cardlist += '(' + num + ')';
		} else if (cardlist.length > current_card.length && cardlist.lastIndexOf(current_card) == cardlist.length-current_card.length) {
			cardlist += '(2)';
		} else {
			cardlist += current_card;
			if (priority > 0) cardlist += '=' + priority;
		}
	}

	return cardlist;
}

function base64pair_to_decimal(pair) {
	var base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 /+';

	// Make sure we have two characters
	if (pair.length != 2) return 0;

	// Make sure we have valid characters
	var decimal = 0 + ((base64.indexOf(pair.substr(0, 1))*64) + base64.indexOf(pair.substr(1, 1)));
	// Support both "+" and " " characters
	if (pair.substr(0, 1) == '+') decimal -= 128;
	if (pair.substr(1, 1) == '+') decimal -= 2;

	if (decimal >= 0 && decimal <= 4095) return decimal;
	else return 0;
}

function decimal_to_base64pair(decimal, no_extra) {
	var offset = false;
	var extra_char = '';
	if (decimal > 4000 && !no_extra) {
		offset = 4000;
		decimal -= 4000;
		extra_char = '-';
	}
	var base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	var first_char = base64.substr(Math.floor(decimal/64),1);
	var second_char = base64.substr(decimal%64,1);
	if (first_char == undefined || second_char == undefined) return '';
	else return extra_char + '' + first_char + '' + second_char;
}

//Returns hash built from deck array
function hash_encode(deck) {

	var base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	var current_hash = '';
	var has_priorities = false;

	if (deck.commander) {
		var current_card = deck.commander;
		// Card ID
		var pair = decimal_to_base64pair(current_card);
		if (pair) current_hash += pair;
	}

	for (var k in deck.deck) {
		var current_card = deck.deck[k];
		if (isNaN(current_card) && current_card.indexOf(',') != -1) {
			has_priorities = true;
			current_card = current_card.split(',');
			current_card = current_card[0];
		}

		// Card ID
		var pair = decimal_to_base64pair(current_card);
		if (!pair) continue;

		// Successive multiple found exceeding ID 4000!
		if (current_hash.length > 4 && current_hash.substr(current_hash.length-5,3) == pair && base64pair_to_decimal(current_hash.substr(current_hash.length-2)) >= 4000) {
			var num = base64pair_to_decimal(current_hash.substr(current_hash.length-2))+1;
			//increment count
			pair = decimal_to_base64pair(num, true);
			// remove last pair
			current_hash = current_hash.substr(0,current_hash.length-2);
			// insert new pair
			current_hash += pair;
		// Successive multiple found not exceeding ID 4000!
		} else if (current_hash.length > 3 && current_hash.substr(current_hash.length-5,1) != '-' && current_hash.substr(current_hash.length-4,2) == pair && base64pair_to_decimal(current_hash.substr(current_hash.length-2)) >= 4000) {
			var num = base64pair_to_decimal(current_hash.substr(current_hash.length-2))+1;
			//increment count
			pair = decimal_to_base64pair(num, true);
			// remove last pair
			current_hash = current_hash.substr(0,current_hash.length-2);
			// insert new pair
			current_hash += pair;
		// First multiple found exceeding ID 4000!
		} else if (current_hash.length > 2 && current_hash.substr(current_hash.length-3) == pair) {
			// 4002 means repeat this card twice!
			var num = 4002;
			pair = decimal_to_base64pair(num, true);
			current_hash += pair;
		// First multiple found not exceeding ID 4000!
		} else if (current_hash.length > 1 && current_hash.substr(current_hash.length-3,1) != '-' && current_hash.substr(current_hash.length-2) == pair) {
			// 4002 means repeat this card twice!
			var num = 4002;
			pair = decimal_to_base64pair(num, true);
			current_hash += pair;
		// First of its kind!
		} else {
			current_hash += pair;
		}
	}

	if (has_priorities) {
		current_hash += '|';
		for (var k in deck.deck) {
			var current_card = deck.deck[k];
			if (isNaN(current_card) && current_card.indexOf(',') != -1) {
				var current_priority = current_card.split(',');
				current_priority = parseInt(current_priority[1]);
				current_hash += '' + current_priority;
			} else {
				current_hash += '0';
			}
		}
	}

	return current_hash;
}

//Returns deck array built from hash
function hash_decode(hash) {

	// If fansite URL, extract the hash
	if (hash.indexOf('?nid=') != -1) {
		hash = hash.substr(hash.indexOf('?nid=')+5);
	}
	// If fansite image URL, extract the hash
	if (hash.indexOf('40in') != -1 && hash.indexOf('-') != -1 && hash.indexOf('.jpg') != -1) {
		hash = hash.substr(hash.indexOf('-')+1);
		hash = hash.substr(0,hash.length-4);
	}

	var base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 /+';
	var current_deck = [];
	current_deck.deck = [];
	var last_id = 0;
	var offset = false;
	for (var i = 0; i < hash.length; i+=2) {

		// Get Offset
		if (hash.substr(i, 1) == '-') {
			offset = 4000;
			i++;
		}

		// Make sure we have two characters
		if (i == hash.length) break;
		if (base64.indexOf(hash.substr(i, 1)) == -1) break;
		if (base64.indexOf(hash.substr(i+1, 1)) == -1) break;

		// Ignore extraneous mission data from EvalDecks
		if (hash.substr(i, 1) == '.') break;

		// Ignore advanced ordering for now
		if (hash.substr(i, 1) == '|') break;

		// Make sure we have valid characters
		var current_id = offset + base64pair_to_decimal(hash.substr(i, 2));

		// Repeat previous card multiple times
		if (current_id >= 4000 && last_id && offset == 0) {
			var num_repeat = current_id - 4000;
			for (var j = 1; j < num_repeat; j++) {
				current_deck.deck.push(last_id);
			}
		// Change commander
		} else if (is_commander(current_id)) {
			current_deck.commander = current_id;
		// Add to deck
		} else {
			current_deck.deck.push(current_id);
		}

		// Remember previous card
		last_id = current_id;

		// Remove offset
		offset = false;
	}

	// Add priorities to the deck
	if (hash.indexOf('|')) {
		var hash_priorities = hash.split('|');
		hash_priorities = ''+hash_priorities[1];
		for (var i = 0; i < hash_priorities.length; i++) {
			if (parseInt(hash_priorities.substr(i,1)) > 0 && current_deck.deck[i]) {
				current_deck.deck[i] += ','+hash_priorities.substr(i,1);
			}
		}
	}

	return current_deck;
}

// Convert card list into an actual deck
// - assume that first card is always commander
// - possible delimiters include ; , :
// - sometimes name is not complete
// - include common abbreviations, such as EMP, BoD, EQG, etc.
// - case-insensitive
// - recognize multiple copies of cards
// - if can't figure out what card it is, ignore it and move on
// - support raid-only and mission-only cards by using Dracorex[1042] notation
function load_deck_from_cardlist(list) {

	//var delimiters = ';,:';
	var abbreviations = [];
//	abbreviations.aa = 'Acid Athenor';
	abbreviations.aa = 'Adamantite Armor';
	abbreviations.ab = 'Acidic Burst';
	abbreviations.ac = 'Annointed Chalice';
	abbreviations.ad = 'Arms Depot';
	abbreviations.ae = 'Aquatic Epicenter';
	abbreviations.ag = 'Armory Generator';
	abbreviations.ah = 'Abominable Horror';
//	abbreviations.ar = 'Azure Reaper';
	abbreviations.ar = 'Abominable Raksha';
	abbreviations.as = 'Absorption Shield';
//	abbreviations.as = 'Acid Spout';
	abbreviations.at = 'Auger Tank';
	abbreviations.bb = 'Beetle Bomber';
	abbreviations.bc = 'Beam Cannon';
	abbreviations.bd = 'Biowaste Disposer';
	abbreviations.bf = 'Balefire';
	abbreviations.bm = 'Bulging Mantis';
	abbreviations.bs = 'Bursting Spore';
	abbreviations.bw = 'Bolide Walker';
	abbreviations.bx = 'Bolster Xeno';
	abbreviations.cc = 'Command Center';
	abbreviations.ce = 'Core Excavator';
	abbreviations.ch = 'Clamber Husk';
	abbreviations.cm = 'Credo Master';
//	abbreviations.cm = 'Crusher Mandible';
	abbreviations.ct = 'Canker Tooth';
//	abbreviations.cw = 'Claw Wheeler';
	abbreviations.cw = 'Cannon Walker';
	abbreviations.db = 'Deadblow';
	abbreviations.dh = 'Dominating Hatchlings';
//	abbreviations.dh = 'Divine Hubris';
	abbreviations.dp = 'Drop Pod';
	abbreviations.dq = 'Draconian Queen';
	abbreviations.dr = 'Destructive Ram';
	abbreviations.ds = 'Damascus Blade';
	abbreviations.dt = 'Dozer Tank';
	abbreviations.dz = 'Daizon';
	abbreviations.ec = 'Engulfing Chasm';
	abbreviations.ed = 'Elite Diver';
	abbreviations.ee = 'Extinction Engine';
	abbreviations.eg = 'Earthquake Generator';
	abbreviations.eh = 'Engulfing Horror';
	abbreviations.ei = 'Egg Infector';
//	abbreviations.em = 'Enforcer Mech';
	abbreviations.em = 'Electro Marksman';
	abbreviations.ep = 'Elusive Panzer';
//	abbreviations.es = 'Energy Spiker';
	abbreviations.es = 'Energy Siegeship';
	abbreviations.ev = 'Enrichment Vial';
	abbreviations.fj = 'Fighter Jet';
	abbreviations.fp = 'Full Power';
	abbreviations.fr = 'Flesh Reaper';
	abbreviations.ft = 'Flux Track';
	abbreviations.gc = 'Gene Corrupter';
	abbreviations.gd = 'Gravity Distorter';
	abbreviations.gl = 'Guerilla Leader';
	abbreviations.gm = 'Gene Manipulator';
	abbreviations.gp = 'Genetics Pit';
	abbreviations.gr = 'Gun Raven';
	abbreviations.gs = 'Grim Specter';
//	abbreviations.gs = 'Gene Splice';
	abbreviations.gt = 'Gatling Tower';
	abbreviations.hm = 'Hope Mason';
	abbreviations.hp = 'Hover Pod';
	abbreviations.ic = 'Invasion Coordinator';
	abbreviations.ii = 'Irradiated Infantry';
	abbreviations.im = 'Iron Maiden';
	abbreviations.is = 'Ion Strykers';
	abbreviations.iw = 'Impulse Walker';
	abbreviations.js = 'Joltrek Skiff';
	abbreviations.lh = 'Lord Halcyon';
	abbreviations.lr = 'Lance Rider';
	abbreviations.ls = 'Longshot';
//	abbreviations.ls = 'Lord Silus';
//	abbreviations.ls = 'Lightning Strider';
//	abbreviations.ls = 'Landshark';
//	abbreviations.ma = 'Mech Aid';
	abbreviations.ma = 'Marrow Aileron';
//	abbreviations.mb = 'Mortar Bunker';
	abbreviations.mb = 'Mobile Base';
//	abbreviations.mc = 'Mind Controller';
	abbreviations.mc = 'Mobile Command';
	abbreviations.md = 'Maximum Damage';
	abbreviations.mf = 'Mobile Fortress';
	abbreviations.mo = 'Mystic Obelisk';
	abbreviations.ms = 'Membrane Shredder';
	abbreviations.mt = 'Muninn Tank';
//	abbreviations.mw = 'Mech Walker';
	abbreviations.mw = 'Metalworks';
	abbreviations.mx = 'Monsoon X';
	abbreviations.nd = 'Noxious Den';
	abbreviations.ob = 'Olins Blade';
//	abbreviations.ob = 'Ophanims Blade';
	abbreviations.pb = 'Plague Burster';
//	abbreviations.pc = 'Pyro Cannon';
//	abbreviations.pc = 'Purging Cannon';
//	abbreviations.pc = 'Procyon';
	abbreviations.pc = 'Patrol Cruiser';
//	abbreviations.pd = 'Plague Duster';
	abbreviations.pd = 'Photon Dish';
	abbreviations.pf = 'Plasma Field';
	abbreviations.pp = 'Pantheon Progeny';
	abbreviations.ps = 'Pantheon Shard';
//	abbreviations.ps = 'Power Surge';
	abbreviations.ra = 'Rolling Arsenal';
	abbreviations.rc = 'Rox Chainblade';
	abbreviations.rd = 'Radiant Dawnbringer';
	abbreviations.rf = 'Rift Fabricator';
	abbreviations.rh = 'Righteous Hold';
//	abbreviations.rh = 'Rams Head';
	abbreviations.rm = 'Revered Monk';
	abbreviations.rn = 'Rugged Nomad';
	abbreviations.ro = 'Radio Officer';
	abbreviations.rp = 'Relinquish Power';
//	abbreviations.rp = 'Rendering Plant';
	abbreviations.rr = 'Razogoth Reborn';
//	abbreviations.sb = 'Stag Beetle';
	abbreviations.sb = 'Shatter Bomb';
//	abbreviations.sc = 'Steadfast Cannon';
//	abbreviations.sc = 'Skull Core';
	abbreviations.sc = 'Support Carrier';
	abbreviations.sd = 'Spider Den';
//	abbreviations.se = 'Silver Edge';
	abbreviations.se = 'Severed Enlightenment';
	abbreviations.sh = 'Scale Hull';
//	abbreviations.sh = 'Shockwave Hammer';
	abbreviations.si = 'Scav Idol';
	abbreviations.sj = 'Splitjaw';
	abbreviations.sk = 'Shuddering Keep';
	abbreviations.sl = 'Soot Launcher';
	abbreviations.sm = 'Solitary Mech';
	abbreviations.sp = 'Solar Powerhouse';
	abbreviations.ss = 'Sulfuris Sentry';
	abbreviations.so = 'Sundering Ogre';
	abbreviations.su = 'Smog Unit';
	abbreviations.sv = 'Sound Virtue';
	abbreviations.sx = 'Sustainer Xolan';
	abbreviations.ti = 'Tactical Infiltrator';
//	abbreviations.tc = 'Tesla Cannon';
//	abbreviations.tc = 'Toxic Cannon';
	abbreviations.tc = 'Thunder Crag';
	abbreviations.to = 'Typhon\'s Orders';
	abbreviations.tw = 'Tremor Wyrm';
	abbreviations.wc = 'Whaleborne Colossal';
//	abbreviations.ws = 'Wasteland Skimmer';
	abbreviations.ws = 'Warp Sculptor';
	abbreviations.wq = 'World Quaker';
	abbreviations.ub = 'Utopia Beacon';
	abbreviations.ud = 'Unstable Dynamo';
	abbreviations.vr = 'Venomous Raptor';
	abbreviations.xf = 'Xeno Fortress';
	abbreviations.xi = 'Xeno Interceptor';
	abbreviations.xm = 'Xeno Mothership';
	abbreviations.yr = 'Yigirds Ruin';

	// abbreviations with at least 3 characters
	abbreviations.abductor = 'Abducter';
	abbreviations.acro = 'Acropolis';
	abbreviations.azr = 'Azure Reaper';
	abbreviations.bod = 'Bridge of Destiny';
	abbreviations.bwd = 'Biowaste Disposer';
	abbreviations.colossi = 'Colossus';
	abbreviations.collossus = 'Colossus';
	abbreviations.collossu = 'Colossus';
	abbreviations.collossi = 'Colossus';
	abbreviations.colloss = 'Colossus';
	abbreviations.collos = 'Colossus';
	abbreviations.convert = 'Converts';
	abbreviations.domhatch = 'Dominated Hatchlings';
	abbreviations.domhatches = 'Dominated Hatchlings';
	abbreviations.domhatchling = 'Dominated Hatchlings';
	abbreviations.domhatchlings = 'Dominated Hatchlings';
	abbreviations.dnaa = 'DNA Assimilator';
	abbreviations.dfa = 'Death From Above';
	abbreviations.drac = 'Dracorex';
	abbreviations.draco = 'Dracorex';
	abbreviations.dredge = 'Ravenous Dredge';
	abbreviations.emp = 'Electromagnetic Pulse';
	abbreviations.eqg = 'Earthquake Generator';
	abbreviations.ewg = 'Enclave Warp Gate';
	abbreviations.foc = 'Flare of Courage';
	abbreviations.fop = 'Folly of Pride';
	abbreviations.fst = 'Forge-Seared Tank';
	abbreviations.hades = 'Hades';
	abbreviations.hade = 'Hades';
	abbreviations.had = 'Hades';
	abbreviations.herc = 'Heracles';
	abbreviations.hercul = 'Heracles';
	abbreviations.hercule = 'Heracles';
	abbreviations.hercules = 'Heracles';
	abbreviations.hoc = 'Heart of Corruption';
	abbreviations.hospital = 'Asylum';
	abbreviations.hospitals = 'Asylum';
	abbreviations.hover = 'Hover Pod';
	abbreviations.htc = 'Halcyon the Corrupt';
	abbreviations.inject = 'Injection';
	abbreviations.kogoththeconsumer = 'Kogoth';
	abbreviations.kapakthedeceiver = 'Kapak';
	abbreviations.ktc = 'Kogoth';
	abbreviations.ktd = 'Kapak';
	abbreviations.kob = 'Kezerus of Blades';
	abbreviations.loki = 'Loki\'s Scion';
	abbreviations.lokis = 'Loki\'s Scion';
	abbreviations.lot = 'Lord of Tartarus';
	abbreviations.ltw = 'Lucina the Wicked';
	abbreviations.mortalbunker = 'Mortar Bunker';
	abbreviations.noxden = 'Noxious Den';
	abbreviations.ogre = 'Sundering Ogre';
	abbreviations.otw = 'Orbo the Wrathful';
	abbreviations.pea = 'Epic Arbiter';
	abbreviations.pip = 'Epic Arbiter';
	abbreviations.pipepicarbiter = 'Epic Arbiter';
	abbreviations.plasma = 'Plasma Field';
	abbreviations.pod = 'Hover Pod';
	abbreviations.pods = 'Hover Pod';
	abbreviations.pylo = 'Pylos Wagon';
	abbreviations.pylos = 'Pylos Wagon';
	abbreviations.ram = 'Destructive Ram';
	abbreviations.razer = 'Pathrazer';
	abbreviations.resiliantguardian = 'Resilient Guardian';
	abbreviations.scropinox = 'Scorpinox';
	abbreviations.severedenlightment = 'Severed Enlightenment';
	abbreviations.sfc = 'Steadfast Cannon';
	abbreviations.skimmer = 'Wasteland Skimmer';
	abbreviations.skim = 'Wasteland Skimmer';
	abbreviations.slutlana = 'Svetlana';
	abbreviations.smash = 'SmashandGrab';
	abbreviations.svetlanainfectioushost = 'infectioushost';
	abbreviations.sop = 'Shadow of Peace';
	abbreviations.grab = 'zzzzzzzzz';
	abbreviations.spells = 'Airstrike';
	abbreviations.spell = 'Airstrike';
	abbreviations.sundogre = 'Sundering Ogre';
	abbreviations.sunogre = 'Sundering Ogre';
	abbreviations.syco = 'Sycophant';
	abbreviations.thunder = 'G-60 Thunder';
	abbreviations.trolldozer = 'Dozer Tank';
	abbreviations.wwf = 'Warpway Fortress';
	abbreviations.zaraki = 'Zarak';

	// Safety mechanism to prevent long loops
	if (list.length > 300) list = list.substr(0,300);

	list = list.toLowerCase();
	list = list.toString().replace(/[\&\/]/g, ',');
	list = list.toString().replace(/[\+]/g, '*');
	list = list.toString().replace(/ and /g, ',');
	list = list.toString().replace(/[\.\!\?\']/g, '');
	list = list.toString().replace(/\s/g, '');
	list = list.toString().replace(/atlasplusspells/g, 'atlas,8xairstrike,2xemp');
	list = list.toString().replace(/atlas,spells/g, 'atlas,8xairstrike,2xemp');
	list = list.toString().replace(/-/g, '');
	list = list.toString().replace(/\'/g, '');
	list = list.toString().replace(/kogoth,theconsumer/g, 'kogoth');
	list = list.toString().replace(/kapak,thedeceiver/g, 'kapak');
	list = list.toString().replace(/svetlana,infectioushost/g, 'infectioushost');
	list = list.toString().replace(/pip,epicarbiter/g, 'epicarbiter');
	list = list.split(/[,;:]/);

	var current_deck = [];
	current_deck.deck = [];

	for (var i in list) {
		var current_card = list[i].toString();
		var unit_id = 0;
		var card_found = false;
		var current_card_upgraded = false;

		// Detect advanced prioritization
		var priority_id = 0;
		if (current_card.toString().length > 3 && current_card.toString().match(/=[1-9]$/)) {
			priority_id = parseInt(current_card.substr(current_card.length-1,1));
			current_card = current_card.substr(0,current_card.length-2);
		}

		// Detect upgraded cards
		if (current_card.indexOf('*') != -1 && current_card.toString().length > 2) {
			current_card = current_card.toString().replace(/\*/g, '');
			current_card_upgraded = true;
		}

		var copies = 1;
		// Detect multiple copies
		if (current_card.toString().length < 3) {
		} else if (current_card.indexOf('10x') == 0 && current_card.toString().length > 4) {
			copies = 10;
			current_card = current_card.toString().replace(/^10x/g, '');
		} else if ((current_card.indexOf('10') == 0 && current_card.toString().length > 3) || (current_card.indexOf('x10') == current_card.length-3 && current_card.toString().length > 4) || current_card.indexOf('(10)') != -1 || (current_card.indexOf('#10') == current_card.length-3 && current_card.toString().length > 4)) {
			copies = 10;
			current_card = current_card.toString().replace(/^10/g, '');
			current_card = current_card.toString().replace(/x10$/g, '');
			current_card = current_card.toString().replace(/#10$/g, '');
			current_card = current_card.toString().replace(/\(10\)/g, '');
		} else if (current_card.toString().match(/^[1-9]x/)) {
			copies = parseInt(current_card.substr(0,1));
			current_card = current_card.substr(2);
		} else if (current_card.toString().match(/^[1-9][^x]/)) {
			copies = parseInt(current_card.substr(0,1));
			current_card = current_card.substr(1);
		} else if (current_card.toString().match(/x[1-9]$/)) {
			copies = parseInt(current_card.substr(current_card.length-1,1));
			current_card = current_card.substr(0,current_card.length-2);
		} else if (current_card.toString().match(/#[1-9]$/)) {
			copies = parseInt(current_card.substr(current_card.length-1,1));
			current_card = current_card.substr(0,current_card.length-2);
		} else if (current_card.toString().match(/^\([1-9]\)/)) {
			copies = parseInt(current_card.substr(1,1));
			current_card = current_card.substr(3);
		} else if (current_card.toString().match(/\([1-9]\)$/)) {
			copies = parseInt(current_card.substr(current_card.length-2,1));
			current_card = current_card.substr(0,current_card.length-3);
		}

		// Remove trailing 'es' if any
		if (current_card.length > 6 && current_card.substr(current_card.length-2) == 'es') current_card = current_card.substr(0,current_card.length-2);

		// Remove trailing 's' if any
		if (current_card.length > 4 && current_card.substr(current_card.length-1) == 's') current_card = current_card.substr(0,current_card.length-1);

		// Use unit_id notation if available
		if (current_card.indexOf('[') != -1 && current_card.indexOf(']') != -1) {
			unit_id = current_card;
			unit_id = unit_id.substr(unit_id.indexOf('[') + 1);
			unit_id = unit_id.substr(0, unit_id.indexOf(']'));
			unit_id = parseInt(unit_id);
			if (is_commander(unit_id)) {
				current_deck.commander = unit_id;
			} else if (is_assault(unit_id) || is_structure(unit_id) || is_action(unit_id)) {
				current_deck.deck[current_deck.deck.length] = unit_id;
				while (copies > 1) {
					current_deck.deck[current_deck.deck.length] = unit_id;
					copies--;
				}
			}
			continue;
		}

		// Use abbreviation if available
		current_card = current_card.toLowerCase();
		current_card = current_card.toString().replace(/\s/g, '');
		current_card = current_card.toString().replace(/-/g, '');
		current_card = current_card.toString().replace(/\'/g, '');
		if (abbreviations[current_card.toString()]) current_card = abbreviations[current_card.toString()];
		current_card = current_card.toLowerCase();
		current_card = current_card.toString().replace(/\s/g, '');
		current_card = current_card.toString().replace(/-/g, '');
		current_card = current_card.toString().replace(/\'/g, '');

		// Match full name if available
		for (var k in CARDS.root.unit) {
			if (!CARDS.root.unit[k]['set'] || CARDS.root.unit[k]['set'] == '9999') continue;
			if (current_card_upgraded && CARDS.root.unit[k]['set'] != '5002') continue;
			if (!current_card_upgraded && CARDS.root.unit[k]['set'] == '5002') continue;
			unit_id = CARDS.root.unit[k]['id'];
			var current_name = CARDS.root.unit[k]['name'].toLowerCase();
			current_name = current_name.toString().replace(/[\&]/g, ',');
			current_name = current_name.toString().replace(/[\.\!\?]/g, '');
			current_name = current_name.toString().replace(/\s/g, '');
			current_name = current_name.toString().replace(/-/g, '');
			current_name = current_name.toString().replace(/\'/g, '');

			if (current_name == current_card) {
				unit_id = parseInt(unit_id);
				if (is_commander(unit_id) && copies == 1) {
					current_deck.commander = unit_id;
				} else {
					current_deck.deck[current_deck.deck.length] = unit_id;
					if (priority_id > 0) {
						current_deck.deck[current_deck.deck.length-1] += ','+priority_id;
					}
					while (copies > 1) {
						current_deck.deck[current_deck.deck.length] = unit_id;
						if (priority_id > 0) {
							current_deck.deck[current_deck.deck.length-1] += ','+priority_id;
						}
						copies--;
					}
				}
				card_found = true;
				break;
			}
		}
		if (card_found) continue;

		// If no commanders yet, match partial name to commanders if available
		if (!current_deck.commander && copies == 1) {
			for (var k in CARDS.root.unit) {
				if (!CARDS.root.unit[k]['set'] || CARDS.root.unit[k]['set'] == '9999') continue;
				if (current_card_upgraded && CARDS.root.unit[k]['set'] != '5002') continue;
				unit_id = CARDS.root.unit[k]['id'];
				if (!is_commander(unit_id)) continue;
				current_name = CARDS.root.unit[k]['name'].toLowerCase();
				current_name = current_name.toString().replace(/[\&]/g, ',');
				current_name = current_name.toString().replace(/[\.\!\?]/g, '');
				current_name = current_name.toString().replace(/\s/g, '');
				current_name = current_name.toString().replace(/-/g, '');
				current_name = current_name.toString().replace(/\'/g, '');
				if (current_name.indexOf(current_card) != -1) {
					current_deck.commander = unit_id;
					card_found = true;
					break;
				}
			}
		}
		if (card_found) continue;

		// Match partial name to non-commanders if available
		for (var k in CARDS.root.unit) {
			if (!CARDS.root.unit[k]['set'] || CARDS.root.unit[k]['set'] == '9999') continue;
			if (current_card_upgraded && CARDS.root.unit[k]['set'] != '5002') continue;
			unit_id = CARDS.root.unit[k]['id'];
			if (is_commander(unit_id)) continue;
			current_name = CARDS.root.unit[k]['name'].toLowerCase();
			current_name = current_name.toString().replace(/[\&]/g, ',');
			current_name = current_name.toString().replace(/[\.\!\?]/g, '');
			current_name = current_name.toString().replace(/\s/g, '');
			current_name = current_name.toString().replace(/-/g, '');
			current_name = current_name.toString().replace(/\'/g, '');
			if (current_name.indexOf(current_card) != -1) {
				current_deck.deck[current_deck.deck.length] = unit_id;
				if (priority_id > 0) {
					current_deck.deck[current_deck.deck.length-1] += ','+priority_id;
				}
				while (copies > 1) {
					current_deck.deck[current_deck.deck.length] = unit_id;
					if (priority_id > 0) {
						current_deck.deck[current_deck.deck.length-1] += ','+priority_id;
					}
					copies--;
				}
				card_found = true;
				break;
			}
		}
		if (card_found) continue;
	}

	// Default commander to Cyrus if none found
	if (!current_deck.commander) {
		current_deck.commander = 1000;
	}

	return current_deck;
}

// Load mission deck
function load_deck_mission(id) {
	if (!missions) return 0;
	if (!missions.root) return 0;
	if (!missions.root.mission) return 0;
	if (!missions.root.mission[id]) return 0;

	// Load battleground, if available
	if (missions.root.mission[id]['effect'] && !getbattleground) {
		battleground = quests.root.battleground[missions.root.mission[id]['effect']]['effect'];
		getbattleground = missions.root.mission[id]['effect'];
	}

	var current_deck = [];
	current_deck.deck = [];
	current_deck.commander = missions.root.mission[id]['commander'];
	for (var current_key in missions.root.mission[id]['deck']) {
		var current_card = missions.root.mission[id]['deck'][current_key];
		current_deck.deck[current_deck.deck.length] = current_card;
	}
	return current_deck;
}

// Load raid deck
// - randomize it as required
function load_deck_raid(id) {
	if (!raids) return 0;
	if (!raids.root) return 0;
	if (!raids.root.raid) return 0;
	if (!raids.root.raid[id]) return 0;

	// Load battleground, if available
	if (raids.root.raid[id]['effect'] && !getbattleground) {
		battleground = quests.root.battleground[raids.root.raid[id]['effect']]['effect'];
		getbattleground = raids.root.raid[id]['effect'];
	}

	var current_deck = [];
	current_deck.deck = [];
	current_deck.commander = raids.root.raid[id]['commander'];

	// Always included raid cards
	var current_pool = raids.root.raid[id]['deck']['always_include'];
	if (current_pool && current_pool.card) {
		current_pool = current_pool.card;
		for (var current_key in current_pool) {
			var current_card = current_pool[current_key];
			current_deck.deck[current_deck.deck.length] = current_card;
		}
	}

	// Variable Card Pools
	var parent_pool = raids.root.raid[id]['deck']['card_pool'];
	if (parent_pool) {
		for (var pool_key in parent_pool) {
			current_pool = parent_pool[pool_key];
			if (current_pool && current_pool.card) {
				var amount = current_pool.amount;
				var current_pool_cards = copy_card_list(current_pool.card);
				shuffle(current_pool_cards);
				for (var current_key in current_pool_cards) {
					if (amount < 1) break;
					var current_card = current_pool_cards[current_key];
					current_deck.deck[current_deck.deck.length] = current_card;
					amount--;
				}
			}
		}
	}
	return current_deck;
}

// Load quest deck
// - randomize it as required
function load_deck_quest(id) {
	if (!quests) return 0;
	if (!quests.root) return 0;
	if (!quests.root.step) return 0;
	if (!quests.root.step[id]) return 0;

	// Load battleground
	battleground = quests.root.battleground[quests.root.step[id]['battleground_id']]['effect'];

	var current_deck = [];
	current_deck.deck = [];
	current_deck.commander = quests.root.step[id]['commander'];

	// Always included quest cards
	var current_pool = quests.root.step[id]['deck']['always_include'];
	if (current_pool && current_pool.card) {
		current_pool = current_pool.card;
		for (var current_key in current_pool) {
			var current_card = current_pool[current_key];
			current_deck.deck[current_deck.deck.length] = current_card;
		}
	}

	// Variable Card Pools
	var parent_pool = quests.root.step[id]['deck']['card_pool'];
	if (parent_pool) {
		for (var pool_key in parent_pool) {
			current_pool = parent_pool[pool_key];
			if (current_pool && current_pool.card) {
				var amount = current_pool.amount;
				var current_pool_cards = copy_card_list(current_pool.card);
				shuffle(current_pool_cards);
				for (var current_key in current_pool_cards) {
					if (amount < 1) break;
					var current_card = current_pool_cards[current_key];
					current_deck.deck[current_deck.deck.length] = current_card;
					amount--;
				}
			}
		}
	}
	return current_deck;
}

// Output card array
function get_card_by_id(id) {

	var current_card = CARDS.root.unit[id];

	// Not a valid card
	if (!current_card) {
		current_card = [];
		current_card.id = undefined;
		current_card.name = undefined;
		current_card.health = undefined;
		current_card.skill = [];
		return current_card;
	} else {
		// Add empty skill array to prevent skill condition-checking errors
		if (!current_card.skill) {
			current_card.skill = [];
		}
		return copy_card(current_card);
	}
}

function get_slim_card_by_id(id, getSkills) {
	var current_card = CARDS.root.unit[id];
	var new_card = [];
	// Not a valid card
	if (!current_card) {
		new_card.id = undefined;
		new_card.name = undefined;
		new_card.set = undefined;
		new_card.type = undefined;
		new_card.rarity = undefined;
		if(getSkills) new_card.skill = [];
	} else {
		new_card.id = current_card.id;
		new_card.name = current_card.name;
		new_card.set = current_card.set;
		new_card.type = current_card.type;
		new_card.rarity = current_card.rarity;
		if(getSkills) new_card.skill = copy_skills(current_card.skill);
	}
	return new_card;
}

// Get achievement by ID
function get_achievement_by_id(id) {
	for (var achievement_key = 0, len = achievements.root.achievement.length; achievement_key < len; achievement_key++) {
		var achievement = achievements.root.achievement[achievement_key];
		if (achievement && achievement.id == id) {
			return achievement;
		}
	}
	return 0;
}

// Output card name
function get_card_name_by_id(id) {
	var card = CARDS.root.unit[id];
	if (!card) return 0;
	else if (card.set == 5002) return card.name + '*';
	else return card.name;
}


//Card ID is ...
function is_commander(id) {
	id = id % 4000;
	if (id >= 1000 && id < 2000) {
		return 1;
	}
	return 0;
}

function is_assault(id) {
	id = id % 4000;
	if (id >= 0 && id < 1000) {
		return 1;
	}
	return 0;
}

function is_structure(id) {
	id = id % 4000;
	if (id >= 2000 && id < 3000) {
		return 1;
	}
	return 0;
}

function is_action(id) {
	id = id % 4000;
	if (id >= 3000 && id < 4000) {
		return 1;
	}
	return 0;
}