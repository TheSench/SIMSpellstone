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
	new_deck['commander'] = original_deck['commander'];
	new_deck['deck'] = copy_card_list(original_deck['deck']);
	return new_deck;
}

function copy_card_list(original_card_list) {
	var new_card_list = [];
	for (var key = 0, len = original_card_list.length; key < len; key++) {
		new_card_list[key] = original_card_list[key];
	}
	return new_card_list;
}

function copy_card(original_card, unit_level) {
    return MakeAssault(original_card, unit_level);
}

var MakeAssault = (function () {
    var Card = function (original_card, unit_level) {
		this.id = original_card.id;
		this.name = original_card.name;
		this.attack = original_card.attack;
		this.health = original_card.health;
		this.level = "1";
		this.maxLevel = GetMaxLevel(original_card);
		this.cost = original_card.cost;
		this.rarity = original_card.rarity;
		this.card_type = original_card.card_type;
		this.type = original_card.type;
		this.sub_type = original_card.sub_type;
		this.set = original_card.set;
		this.skill = copy_skills(original_card.skill);
		this.timer = this.cost;
		if (unit_level) {
		    this.level = unit_level.replace(/[\(\)]/g, '');
            if(this.level > this.maxLevel) this.level = this.maxLevel
		    if (this.level > 1) {
		        for (var key in original_card.upgrades) {
		            var upgrade = original_card.upgrades[key];
		            if (upgrade.cost !== undefined) this.cost = upgrade.cost;
		            if (upgrade.health !== undefined) this.health = upgrade.health;
		            if (upgrade.attack !== undefined) this.attack = upgrade.attack;
		            update_skills(this.skill, upgrade.skill);
		            if (key == this.level) break;
		        }
		    }
		}
		this.health_left = this.health;
		return this;
    }

    function GetMaxLevel(original_card) {
        var upgrades = original_card.upgrades;
        var size = 1;
        if(upgrades) for (key in upgrades) {
            if (upgrades.hasOwnProperty(key)) size++;
        }
        return size;
    }
	
	Card.prototype = {
		p: null,
		health_left: 0,
		timer: 0,
		attack_rally: 0,
		attack_weaken: 0,
		key: undefined,
		// Statuses
		poisoned: 0,
	    scorched: 0,
		enfeebled: 0,
		protected: 0,
		augmented: 0,
		jammed: false,

		//Card ID is ...
		isCommander: function () {
			return (this.card_type == "1");
		},

		isAssault: function () {
		    return (!this.isCommander());
		},

		isBattleground: function () {
		    return false;
		},

		// Alive
		// -['health_left'] > 0
		isAlive: function () {
			return (this['health_left'] > 0);
		},
		
		// Active
		// - timer = 0
		isActive: function () {
			return (this['timer'] == 0);
		},
		
		// Active Next Turn
		// - timer <=1
		isActiveNextTurn: function () {
			return (this['timer'] <= 1);
		},

		// Inactive
		// - timer >=1
		isInactive: function () {
			return this['timer'] >= 1;
		},

		// Unjammed
		isUnjammed: function () {
			return !(this['jammed']);
		},

		// Has at least one Augmentable Activation Skill
		// - strike, protect, enfeeble, rally, repair, supply, siege, heal, weaken (unless they have on play/death/attacked/kill)
		isAugmentable: function (s) {
			var target_skills = this['skill'];
			for (var key in target_skills) {
			    var skill = target_skills[key];
			    if (skill.id == s) {
			        return true;
				}
			}
			return false;
		},
		
		// Damaged
		// -['health_left'] < health
		isDamaged: function () {
			if (this['health_left'] < this['health']) return true;
			return false;
		},
		
		// Has Attack power
		// - attack > 0
		hasAttack: function () {
			return ( (this['attack'] + this['attack_rally']
					- this['attack_weaken']) > 0);
		},

		// Targets that are opposite of the source or to the right of it
		// - only use this function for Chaos on Death, Jam on Death, and Weaken on Death
		hasNotAttackedAlready2: function (relative_source) {
			if (!relative_source.isAssault()) return true; // If source is not an assault, assume that the target has not attacked already
			return (this['key'] >= relative_source['key']); // If source is an assault, check its relative position
		},

		// Targets that are opposite of the source or to the right of it
		// - only use this function for Chaos on Attacked, Jam on Attacked, and Weaken on Attacked
		hasNotAttackedAlready3: function (attacker) {
			if (!attacker.isAssault()) return true; // If source is not an assault, assume that the target has not attacked already
			return (this['key'] > attacker['key']); // If source is an assault, check its relative position
		},
		
		// Currently attacking
		// - only use this function for Chaos on Death, Jam on Death, and Weaken on Death
		isAttacking2: function (relative_source) {
			if (!relative_source.isAssault()) return false; // If source is not an assault, assume that the target is not attacking
			return (this['key'] == relative_source['key']);
		},

		isAdjacent: function (src) {
			var thisKey = this['key'];
			var left = src['key'] - 1;
			var right = left + 2;

			return (thisKey >= left && thisKey <= right);
		},

		// Filters by faction
		isInFaction: function (faction) {
			if (faction === undefined) return 1;
			if (this['type'] == faction) return 1;
			if (this['sub_type'] == faction) return 1;
			return 0;
		},
	}
	
	return (function (original_card, unit_level) {
	    return new Card(original_card, unit_level);
	})
}());

var MakeBattleground = (function () {
    var Battleground = function (name, skill) {
        this.name = name;
        this.skill = skill;
    }

    Battleground.prototype = {
        p: null,
        name: null,
        skill: null,

        //Card ID is ...
        isCommander: function () {
            return false;
        },

        isAssault: function () {
            return false;
        },

        isBattleground: function () {
            return true;
        },
    }

    return (function (name, skill) {
        return new Battleground(name, skill);
    })
}());

function copy_skills(original_skills) {
    var new_skills = {};
    for (var key in original_skills) {
        setSkill(new_skills, key, copy_skill(original_skills[key]));
	}
	return new_skills;
}

function update_skills(current_skills, upgrades) {
    for (var key in upgrades) {
        var name = upgrades[key].id;
        for (var key2 in current_skills) {
            var current_skill = current_skills[key2];
            if (current_skill && current_skill.id == name) delete current_skills[key2];
        }
    }
    for (var key in upgrades) {
        setSkill(current_skills, key, copy_skill(upgrades[key]));
    }
    return current_skills;
}

function setSkill(current_skills, key, skill) {
    var name = skill.id;
    // These skills could have multiple instances
    if (name == 'protect' || name == 'strike' || name == 'rally' || name == 'enhance' | name == 'fervor' || name == 'freeze' || name == 'heal'
        || name == 'enfeeble' || name == 'legion' || name == 'weaken') {
        current_skills[key.toString()] = skill;
    } else {
        current_skills[name] = skill;
    }
}

function copy_skill(original_skill) {
	var new_skill = {};
	new_skill['id'] = original_skill['id'];
	new_skill['x'] = original_skill['x'];
	new_skill['all'] = original_skill['all'];
	new_skill['y'] = original_skill['y'];
	new_skill['z'] = original_skill['z'];
	new_skill['c'] = original_skill['c'];
	new_skill['s'] = original_skill['s'];
	new_skill['attacked'] = original_skill['attacked'];
	new_skill['died'] = original_skill['died'];
	new_skill['played'] = original_skill['played'];
	new_skill['kill'] = original_skill['kill'];
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
		output += skill['id'];
		if (skill['all']) output += ' all';
		if (skill['y']) output += ' ' + factions.names[skill['y']];
		if (skill['s']) output += ' ' + skill['s'];
		if (skill['c']) output += ' every ' + skill['c'] + ' turns';
		else if (skill['x']) output += ' ' + skill['x'];
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
	var current_card = get_card_by_id(cache_player_deck['commander']);
	current_card.owner = 'player';
	current_card['health_left'] = current_card['health'];
	echo += debug_name(current_card) + debug_skills(current_card['skill']) + '<br>';

	debug_dump_cards(cache_player_deck, 'player');
	
	var debug_cpu_deck;
	if (cache_cpu_deck) {
		debug_cpu_deck = cache_cpu_deck;
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
	var current_card = get_card_by_id(debug_cpu_deck['commander']);
	current_card.owner = 'cpu';
	current_card['health_left'] = current_card['health'];
	echo += debug_name(current_card) + debug_skills(current_card['skill']) + '<br>';
	debug_dump_cards(debug_cpu_deck, 'cpu');
	echo += '<br><hr><br>';
}

function debug_dump_cards(deck, player) {
    for (var key in deck['deck']) {
        // Get cardID
        var card_id = deck['deck'][key];
        if (isNaN(card_id) && card_id.indexOf(',') != -1) {
            card_id = card_id.split(',');
            card_id = card_id[0];
        }
        // Setup card for printing
        current_card = get_card_by_id(card_id);
        current_card.owner = player;
        current_card['key'] = undefined;
        // Echo card info
        echo += debug_name(current_card) + debug_skills(current_card['skill']);
        if (current_card['type']) echo += ' <u>' + factions.names[current_card['type']] + '</u>';
        if (current_card['sub_type']) echo += ' <u>' + factions.names[current_card['sub_type']] + '</u>';
        echo += '<br>';
    }
}

// Dump field contents
function debug_dump_field() {
	if (!debug) return;

	echo += '<font color="#666666">';

	var players = ['player','cpu'];

	for (var player_key = 0, p_len = players.length; player_key < p_len; player_key++) {
		var player_val = players[player_key];
		echo += '<br>';
		echo += player_val + '\'s assaults:<br>';
		var field_x_units = field[player_val]['assaults'];
		for (var card_key = 0, unit_len = field_x_units.length; card_key < unit_len; card_key++) {
			var current_card = field_x_units[card_key];
			echo += debug_name(current_card);
			echo += '('+key+')';
			echo += '<br>';
		}
		if (!field[player_val]['assaults'].length) echo += 'None<br>';
	}
	echo += '</font>';
	echo += '<br>';
}

// Output formatted name of card
function debug_name(card, hideStats) {
	if (card.owner == 'cpu') {
		var tag = 'i';
	} else {
		var tag = 'b';
	}
	var output = '<' + tag + '>';
	output += card['name'];
	if (card.maxLevel > 1) output += '{' + card.level + '/' + card.maxLevel + '}';
	if (card['key'] !== undefined) output += ' (' + card['key'] + ')';
	output += '</' + tag + '>';
	if (!hideStats) {
	    output += '<u>';
	    if (card.isCommander()) {
	        output += ' [';
	        if (card['health_left'] !== undefined) output += card['health_left'];
	        else output += card['health'];
	        output += ' HP]';
	    } else if (card.isAssault()) {
	        output += ' [';
	        var atk = parseInt(card['attack']) + parseInt(card['attack_rally']) - parseInt(card['attack_weaken']);
	        if (isNaN(atk) || atk == undefined) atk = card['attack'];
	        output += atk;
	        output += '/';
	        if (card['health_left'] !== undefined) output += card['health_left'];
	        else output += card['health'];
	        output += '/';
	        if (card['timer'] !== undefined) output += card['timer'];
	        else output += card['cost'];
	        output += ']';
	    }
	    output += '</u>';
	}

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

	var commander = get_slim_card_by_id(deck['commander']);
	cardlist += commander['name'];
	if (commander['set'] == '5002') cardlist += '*';
	if (!commander['set'] || commander['set'] == '9999') cardlist += '['+commander['id']+']';
	for (var key in deck['deck']) {
		var card = get_slim_card_by_id(deck['deck'][key]);
		var priority = 0;
		if (isNaN(deck['deck'][key]) && deck['deck'][key].indexOf(',') != -1) {
			card = deck['deck'][key].split(',');
			priority = parseInt(card[1]);
			card = card[0];//parseInt(card[0]);
			card = get_slim_card_by_id(card);
		}
		if (!card) continue;
		var current_card = ', ' + card['name'];
		if (card['set'] == '5002') current_card += '*';
		if (!card['set'] || card['set'] == '9999') current_card += '['+card['id']+']';

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

	if (deck['commander']) {
		var current_card = deck['commander'];
		// Card ID
		var pair = decimal_to_base64pair(current_card);
		if (pair) current_hash += pair;
	}

	for (var k in deck['deck']) {
		var current_card = deck['deck'][k];
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
		for (var k in deck['deck']) {
			var current_card = deck['deck'][k];
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
	current_deck['deck'] = [];
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
				current_deck['deck'].push(last_id);
			}
		// Change commander
		} else if (is_commander(current_id)) {
			current_deck['commander'] = current_id;
		// Add to deck
		} else {
			current_deck['deck'].push(current_id);
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
			if (parseInt(hash_priorities.substr(i,1)) > 0 && current_deck['deck'][i]) {
				current_deck['deck'][i] += ','+hash_priorities.substr(i,1);
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

    var current_deck = [];
    current_deck['deck'] = [];

    if (list) {
        //var delimiters = ';,:';
        var abbreviations = [];
        // Safety mechanism to prevent long loops
        if (list.length > 300) list = list.substr(0, 300);

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

        var unit_definitions = CARDS['root']['unit'];

        for (var i in list) {
            var current_card = list[i].toString();
            var unit_id = 0;
            var unit_level = '';
            var card_found = false;
            var current_card_upgraded = false;

            // Detect advanced prioritization
            var priority_id = 0;
            if (current_card.toString().length > 3 && current_card.toString().match(/=[1-9]$/)) {
                priority_id = parseInt(current_card.substr(current_card.length - 1, 1));
                current_card = current_card.substr(0, current_card.length - 2);
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
            } else if ((current_card.indexOf('10') == 0 && current_card.toString().length > 3) || (current_card.indexOf('x10') == current_card.length - 3 && current_card.toString().length > 4) || current_card.indexOf('(10)') != -1 || (current_card.indexOf('#10') == current_card.length - 3 && current_card.toString().length > 4)) {
                copies = 10;
                current_card = current_card.toString().replace(/^10/g, '');
                current_card = current_card.toString().replace(/x10$/g, '');
                current_card = current_card.toString().replace(/#10$/g, '');
                current_card = current_card.toString().replace(/\(10\)/g, '');
            } else if (current_card.toString().match(/^[1-9]x/)) {
                copies = parseInt(current_card.substr(0, 1));
                current_card = current_card.substr(2);
            } else if (current_card.toString().match(/^[1-9][^x]/)) {
                copies = parseInt(current_card.substr(0, 1));
                current_card = current_card.substr(1);
            } else if (current_card.toString().match(/x[1-9]$/)) {
                copies = parseInt(current_card.substr(current_card.length - 1, 1));
                current_card = current_card.substr(0, current_card.length - 2);
            } else if (current_card.toString().match(/#[1-9]$/)) {
                copies = parseInt(current_card.substr(current_card.length - 1, 1));
                current_card = current_card.substr(0, current_card.length - 2);
            } else if (current_card.toString().match(/^\([1-9]\)/)) {
                copies = parseInt(current_card.substr(1, 1));
                current_card = current_card.substr(3);
            }

            // Remove trailing 'es' if any
            if (current_card.length > 6 && current_card.substr(current_card.length - 2) == 'es') current_card = current_card.substr(0, current_card.length - 2);

            // Remove trailing 's' if any
            if (current_card.length > 4 && current_card.substr(current_card.length - 1) == 's') current_card = current_card.substr(0, current_card.length - 1);

            // Use unit_id notation if available
            if (current_card.indexOf('(') != -1 && current_card.indexOf(')') != -1) {
                unit_level = current_card.substr(current_card.indexOf('('));
                unit_level = unit_level.substr(0, unit_level.indexOf(')') + 1);
                current_card = current_card.substr(0, current_card.indexOf('('));
            }

            current_card = current_card.trim();

            // Use unit_id notation if available
            if (current_card.indexOf('[') != -1 && current_card.indexOf(']') != -1) {
                unit_id = current_card.substr(current_card.indexOf('[') + 1);
                unit_id = unit_id.substr(0, unit_id.indexOf(']'));
                if (unit_level) unit_id += unit_level;
                if (is_commander(unit_id)) {
                    current_deck['commander'] = unit_id + unit_level;
                } else {
                    current_deck['deck'].push(unit_id);
                    while (copies > 1) {
                        current_deck['deck'].push(unit_id);
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
            if (abbreviations[current_card]) current_card = abbreviations[current_card];
            current_card = current_card.toLowerCase();
            current_card = current_card.toString().replace(/\s/g, '');
            current_card = current_card.toString().replace(/-/g, '');
            current_card = current_card.toString().replace(/\'/g, '');

            // Match full name if available
            for (var k in unit_definitions) {
                var card = unit_definitions[k];
                unit_id = card['id'];
                var current_name = card['name'].toLowerCase();
                current_name = current_name.toString().replace(/[\&]/g, ',');
                current_name = current_name.toString().replace(/[\.\!\?]/g, '');
                current_name = current_name.toString().replace(/\s/g, '');
                current_name = current_name.toString().replace(/-/g, '');
                current_name = current_name.toString().replace(/\'/g, '');

                if (current_name == current_card) {
                    var fullID = unit_id + unit_level;
                    if (is_commander(unit_id) && copies == 1) {
                        current_deck['commander'] = fullID;
                    } else {
                        if (priority_id > 0) {
                            fullID += ',' + priority_id;
                        }
                        current_deck['deck'].push(fullID);
                        while (copies > 1) {
                            current_deck['deck'].push(fullID);
                            copies--;
                        }
                    }
                    card_found = true;
                    break;
                }
            }
            if (card_found) continue;

            // If no commanders yet, match partial name to commanders if available
            if (!current_deck['commander'] && copies == 1) {
                for (var k in unit_definitions) {
                    var card = unit_definitions[k];
                    unit_id = card['id'];
                    if (!is_commander(unit_id)) continue;
                    current_name = card['name'].toLowerCase();
                    current_name = current_name.toString().replace(/[\&]/g, ',');
                    current_name = current_name.toString().replace(/[\.\!\?]/g, '');
                    current_name = current_name.toString().replace(/\s/g, '');
                    current_name = current_name.toString().replace(/-/g, '');
                    current_name = current_name.toString().replace(/\'/g, '');
                    if (current_name.indexOf(current_card) != -1) {
                        current_deck['commander'] = unit_id + unit_level;
                        card_found = true;
                        break;
                    }
                }
            }
            if (card_found) continue;

            // Match partial name to non-commanders if available
            for (var k in unit_definitions) {
                var card = unit_definitions[k];
                unit_id = card['id'];
                if (is_commander(unit_id)) continue;
                current_name = card['name'].toLowerCase();
                current_name = current_name.toString().replace(/[\&]/g, ',');
                current_name = current_name.toString().replace(/[\.\!\?]/g, '');
                current_name = current_name.toString().replace(/\s/g, '');
                current_name = current_name.toString().replace(/-/g, '');
                current_name = current_name.toString().replace(/\'/g, '');
                if (current_name.indexOf(current_card) != -1) {
                    var fullID = unit_id + unit_level + ((priority_id > 0) ? ',' + priority_id : '');
                    current_deck['deck'].push(fullID);
                    while (copies > 1) {
                        current_deck['deck'].push(fullID);
                        copies--;
                    }
                    card_found = true;
                    break;
                }
            }
            if (card_found) continue;
        }
    }

	// Default commander to Cyrus if none found
	if (!current_deck['commander']) {
	    current_deck['commander'] = "202"; // Elaria Captain
	}

	return current_deck;
}

// Load mission deck
function load_deck_mission(id) {
	if (!missions) return 0;
	if (!missions['root']) return 0;
	if (!missions['root']['mission']) return 0;
	if (!missions['root']['mission'][id]) return 0;

	var missionInfo = missions['root']['mission'][id];

	var current_deck = [];
	current_deck['deck'] = [];
	current_deck['commander'] = missionInfo['commander'] + "(6)";   // Set commander to max level
	var missionDeck = missionInfo['deck'];
	for (var current_key in missionDeck) {
	    var current_card = missionDeck[current_key];
        // Upgrade all cards to max fusion/level
	    if (current_card.length > 4) {
	        current_card[0] = '2';
	    } else {
	        current_card = '2' + current_card;
	    }
	    current_deck['deck'].push(current_card + "(6)");
	}
	return current_deck;
}

// Load raid deck
// - randomize it as required
function load_deck_raid(id) {
	if (!raids) return 0;
	if (!raids['root']) return 0;
	if (!raids['root']['raid']) return 0;
	if (!raids['root']['raid'][id]) return 0;

	// Load battleground, if available
	if (raids['root']['raid'][id]['effect'] && !getbattleground) {
		battleground = quests['root']['battleground'][raids['root']['raid'][id]['effect']]['effect'];
		getbattleground = raids['root']['raid'][id]['effect'];
	}

	var current_deck = [];
	current_deck['deck'] = [];
	current_deck['commander'] = raids['root']['raid'][id]['commander'];

	// Always included raid cards
	var current_pool = raids['root']['raid'][id]['deck']['always_include'];
	if (current_pool && current_pool['card']) {
		current_pool = current_pool['card'];
		for (var current_key in current_pool) {
			var current_card = current_pool[current_key];
			current_deck['deck'].push(current_card);
		}
	}

	// Variable Card Pools
	var parent_pool = raids['root']['raid'][id]['deck']['card_pool'];
	if (parent_pool) {
		for (var pool_key in parent_pool) {
			current_pool = parent_pool[pool_key];
			if (current_pool && current_pool['card']) {
				var amount = current_pool['amount'];
				var current_pool_cards = copy_card_list(current_pool['card']);
				shuffle(current_pool_cards);
				for (var current_key in current_pool_cards) {
					if (amount < 1) break;
					var current_card = current_pool_cards[current_key];
					current_deck['deck'].push(current_card);
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
	if (!quests['root']) return 0;
	if (!quests['root']['step']) return 0;
	if (!quests['root']['step'][id]) return 0;

	// Load battleground
	battleground = quests['root']['battleground'][quests['root']['step'][id]['battleground_id']]['effect'];

	var current_deck = [];
	current_deck['deck'] = [];
	current_deck['commander'] = quests['root']['step'][id]['commander'];

	// Always included quest cards
	var current_pool = quests['root']['step'][id]['deck']['always_include'];
	if (current_pool && current_pool['card']) {
		current_pool = current_pool['card'];
		for (var current_key in current_pool) {
			var current_card = current_pool[current_key];
			current_deck['deck'].push(current_card);
		}
	}

	// Variable Card Pools
	var parent_pool = quests['root']['step'][id]['deck']['card_pool'];
	if (parent_pool) {
		for (var pool_key in parent_pool) {
			current_pool = parent_pool[pool_key];
			if (current_pool && current_pool['card']) {
				var amount = current_pool['amount'];
				var current_pool_cards = copy_card_list(current_pool['card']);
				shuffle(current_pool_cards);
				for (var current_key in current_pool_cards) {
					if (amount < 1) break;
					var current_card = current_pool_cards[current_key];
					current_deck['deck'].push(current_card);
					amount--;
				}
			}
		}
	}
	return current_deck;
}


// Output card array
function get_card_by_id(id, unit_level) {

    if (typeof unit_level === 'undefined') { unit_level = 0; }
    var levelStart = 0;
    if (isNaN(id)) {
        levelStart = id.indexOf('(');
        if (levelStart != -1 && id.indexOf(')') != -1) {
            unit_level = id.substr(levelStart);
            unit_level = unit_level.substr(0, unit_level.indexOf(')') + 1);
            id = id.substr(0, levelStart)
        }
    }

	var current_card = CARDS['root']['unit'][id];

	// Not a valid card
	if (!current_card) {
		current_card = [];
		current_card['id'] = undefined;
		current_card['name'] = undefined;
		current_card['health'] = undefined;
		current_card['skill'] = [];
		return current_card;
	} else {
		// Add empty skill array to prevent skill condition-checking errors
		if (!current_card['skill']) {
			current_card['skill'] = [];
		}
		return copy_card(current_card, unit_level);
	}
}

function get_slim_card_by_id(id, getSkills) {

    var unit_level = 0;
    var levelStart = 0;
    if (isNaN(id)) {
        levelStart = id.indexOf('(');
        if (levelStart != -1 && id.indexOf(')') != -1) {
            unit_level = id.substr(levelStart);
            unit_level = unit_level.substr(0, unit_level.indexOf(')') + 1);
            id = id.substr(0, levelStart)
        }
    }

	var current_card = CARDS['root']['unit'][id];
	var new_card = [];
	// Not a valid card
	if (!current_card) {
		new_card.id = undefined;
		new_card.name = undefined;
		new_card.set = undefined;
		new_card.card_type = undefined;
		new_card.type = undefined;
		new_card.sub_type = undefined;
		new_card.rarity = undefined;
		new_card.level = undefined;
		new_card.maxLevel = undefined;
		if(getSkills) new_card['skill'] = [];
	} else {
		new_card.id = current_card.id;
		new_card.name = current_card.name;
		new_card.set = current_card.set;
		new_card.card_type = current_card.card_type;
		new_card.type = current_card.type;
		new_card.sub_type = current_card.sub_type;
		new_card.maxLevel = current_card.maxLevel;
		if (unit_level) {
		    new_card.level = unit_level.replace(/[\(\)]/g, '');
		    if (new_card.level > new_card.maxLevel) new_card.level = new_card.maxLevel;
		} else new_card.level = 1;
		if (getSkills) {
		    new_card.skill = copy_skills(current_card.skill);
		    if (new_card.level > 1) {
		        for (var key in current_card.upgrades) {
		            var upgrade = current_card.upgrades[key];
		            update_skills(this.skill, upgrade.skill);
		            if (key == new_card.level) break;
		        }
		    }
		}
	}
	return new_card;
}

// Output card name
function get_card_name_by_id(id) {
	var card = CARDS['root']['unit'][id];
	if (!card) return 0;
	else if (card['set'] == 5002) return card['name'] + '*';
	else return card['name'];
}


//Card ID is ...
function is_commander(id) {
    var card = CARDS['root']['unit'][id];
    return (card && card.card_type == '1');
}