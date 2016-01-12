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

// GET variables
function _GET(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1] ? pair[1] : '');
        }
    }
    return undefined;
}

function _DEFINED(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return true;
        }
    }
    return false;
}

function shuffle(this_array) {
    var i = this_array.length, j, tempi, tempj;
    if (i == 0) return false;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        tempi = this_array[i];
        tempj = this_array[j];
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

function cloneCard(original) {
    var copy = original.constructor();
    copy.__proto__ = original.__proto__;
    copy.id = original.id;
    copy.name = original.name;
    copy.picture = original.picture;
    copy.attack = original.attack;
    copy.health = original.health;
    copy.maxLevel = original.maxLevel;
    copy.level = original.level;
    copy.cost = original.cost;
    copy.rarity = original.rarity;
    copy.card_type = original.card_type;
    copy.type = original.type;
    copy.sub_type = original.sub_type;
    copy.set = original.set;
    // Passives
    copy.armored = original.armored;
    copy.berserk = original.berserk;
    copy.burn = original.burn;
    copy.counter = original.counter;
    copy.evade = original.evade;
    copy.leech = original.leech;
    copy.pierce = original.pierce;
    copy.poison = original.poison;
    if (original.flurry) copy.flurry = copy_skill(original.flurry);
    // Other skills
    if (original.reusableSkills) {
        copy.skill = original.skill;
        copy.empowerSkills = original.empowerSkills;
    } else {
        copy_skills(copy, original.skill, original.empowerSkills);
    }
    copy.timer = copy.cost;
    copy.health_left = copy.health;
    return copy;
}

var MakeAssault = (function () {
    var Card = function (original_card, unit_level, skillModifiers) {
        this.id = original_card.id;
        this.name = original_card.name;
        // TODO: Remove this
        this.picture = original_card.picture;
        this.attack = original_card.attack;
        this.health = original_card.health;
        this.maxLevel = GetMaxLevel(original_card);
        this.level = ((unit_level > this.maxLevel) ? this.maxLevel : unit_level);
        this.cost = original_card.cost;
        this.rarity = original_card.rarity;
        this.card_type = original_card.card_type;
        this.type = original_card.type;
        this.sub_type = original_card.sub_type;
        this.set = original_card.set;
        var original_skills = original_card.skill.slice();
        if (this.level > 1) {
            var upgrade;
            for (var key in original_card.upgrades) {
                upgrade = original_card.upgrades[key];
                // Upgrade levels only contain attack/health/delay if they changed at that level.
                if (upgrade.cost !== undefined) this.cost = upgrade.cost;
                if (upgrade.health !== undefined) this.health = upgrade.health;
                if (upgrade.attack !== undefined) this.attack = upgrade.attack;
                if (upgrade.skill.length > 0) original_skills = upgrade.skill;
                if (key == this.level) break;
            }
        }

        if (skillModifiers) {
            original_skills = original_skills.slice();
            modifySkills(this, original_skills, skillModifiers);
        }
        copy_skills_2(this, original_skills)
        this.timer = this.cost;
        this.health_left = this.health;

        card_cache[original_card.id + "-" + unit_level] = this;

        return this;
    }

    function modifySkills(new_card, original_skills, skillModifiers) {
        for (var i = 0; i < skillModifiers.length; i++) {
            var skillModifier = skillModifiers[i];
            if (skillModifier.modifierType == "evolve") {
                for (var j = 0; j < skillModifier.effects.length; j++) {
                    var evolution = skillModifier.effects[j];
                    for (var key in original_skills) {
                        var skill = original_skills[key];
                        if (skill.id == evolution.id && skill.all == evolution.all) {
                            skill = copy_skill(skill);
                            skill.id = evolution.s;
                            original_skills[key] = skill;
                        }
                    }
                }
            } else if (skillModifier.modifierType == "add") {
                for (var j = 0; j < skillModifier.effects.length; j++) {
                    var addedSkill = skillModifier.effects[j];
                    if (new_card.isInFaction(addedSkill.y)) {
                        var new_skill = {};
                        new_skill.id = addedSkill.id;
                        if (addedSkill.mult && addedSkill.base) {
                            new_skill.x = Math.ceil(addedSkill.mult * new_card[addedSkill.base]);
                        } else {
                            new_skill.x = addedSkill.x;
                        }
                        new_skill.y = addedSkill.y;
                        new_skill.z = addedSkill.z;
                        new_skill.c = addedSkill.c;
                        new_skill.s = addedSkill.s;
                        new_skill.all = addedSkill.all;
                        if (addedSkill.mult && addedSkill.base && new_skill.x == 0) continue;
                        original_skills.push(new_skill);
                    }
                }
            }
        }
    }

    Card.prototype = {
        p: null,
        health_left: 0,
        timer: 0,
        attack_rally: 0,
        attack_berserk: 0,
        attack_weaken: 0,
        key: undefined,
        // Passives
        armored: 0,
        burn: 0,
        counter: 0,
        evade: 0,
        leech: 0,
        pierce: 0,
        poison: 0,
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
        // -.health_left > 0
        isAlive: function () {
            return (this.health_left > 0);
        },

        // Alive
        // -.health_left > 0
        isDamaged: function () {
            return (this.health_left < this.health);
        },

        // Active
        // - timer = 0
        isActive: function () {
            return (this.timer == 0);
        },

        // Active Next Turn
        // - timer <=1
        isActiveNextTurn: function () {
            return (this.timer <= 1);
        },

        // Inactive
        // - timer >=1
        isInactive: function () {
            return this.timer >= 1;
        },

        // Unjammed
        isUnjammed: function () {
            return !(this.jammed);
        },

        // Has at least one Augmentable Activation Skill
        // - strike, protect, enfeeble, rally, repair, supply, siege, heal, weaken (unless they have on play/death/attacked/kill)
        hasSkill: function (s) {
            var target_skills = this.skill;
            switch (s) {
                case 'armored':
                case 'counter':
                case 'evade':
                case 'pierce':
                    return this[s];
                    break;
                case 'empower':
                case 'legion':
                case 'fervor':
                    target_skills = this.empowerSkills;
                    break;
                default:
                    target_skills = this.skill
                    break;
            }
            for (var key in target_skills) {
                var skill = target_skills[key];
                if (skill.id === s && !skill.all) {
                    return true;
                }
            }
            return false;
        },

        // Damaged
        // -.health_left < health
        isDamaged: function () {
            if (this.health_left < this.health) return true;
            return false;
        },

        // Has Attack power
        // - attack > 0
        hasAttack: function () {
            return (this.adjustedAttack() > 0);
        },

        adjustedAttack: function () {
            return ((this.attack + this.attack_rally + this.attack_berserk - this.attack_weaken));
        },

        // Filters by faction
        isInFaction: function (faction) {
            if (faction === undefined) return 1;
            if (this.type == faction) return 1;
            if (this.sub_type == faction) return 1;
            return 0;
        },
    }

    return (function (original_card, unit_level, skillModifiers) {
        if (!unit_level) unit_level = 1;
        return new Card(original_card, unit_level, skillModifiers);
    })
}());

var MakeSkillModifier = (function () {
    var Modifier = function (name, effects) {
        this.name = name;
        if (effects.add_skill) {
            this.modifierType = "add";
            this.effects = effects.add_skill;
        } else if (effects.evolve_skill) {
            this.modifierType = "evolve";
            this.effects = effects.evolve_skill;
        }
    }

    return (function (name, effects) {
        return new Modifier(name, effects);
    })
}());

var MakeBattleground = (function () {
    var Battleground = function (name, original_skills) {
        this.name = name;
        copy_skills_2(this, original_skills);
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

function copy_skills_2(new_card, original_skills) {
    new_card.skill = [];
    new_card.empowerSkills = [];
    var reusable = true;
    for (var key in original_skills) {
        var newSkill = original_skills[key];
        if (newSkill.c) {   // If skill has a timer, we need to clone it
            setSkill_2(new_card, copy_skill(newSkill));
            reusable = false;
        } else {            // If skill has no timer, we can use the same instance
            setSkill_2(new_card, newSkill);
        }
    }
    new_card.reusableSkills = reusable;
}

function setSkill_2(new_card, skill) {
    // These skills could have multiple instances
    switch (skill.id) {
        // Passives
        case 'armored':
        case 'berserk':
        case 'burn':
        case 'counter':
        case 'evade':
        case 'leech':
        case 'pierce':
        case 'poison':
            new_card[skill.id] = skill.x;
            break;
            // Empower Skills
        case 'fervor':
        case 'rally':
        case 'legion':
            new_card.empowerSkills.push(skill);
            break;
            // Activation skills (can occur twice on a card)
        case 'enfeeble':
        case 'enhance':
        case 'frost':
        case 'heal':
        case 'jam':
        case 'protect':
        case 'protect_ice':
        case 'strike':
        case 'weaken':
            new_card.skill.push(skill);
            break;
            // All other skills
        case 'flurry':
        default:
            new_card[skill.id] = skill;
            break;
    }
}

function copy_skills(new_card, skills, empower_skills) {
    new_card.skill = [];
    new_card.empowerSkills = [];
    new_card.reusableSkills = true;

    copy_Skill_lists(new_card, skills);
    copy_Skill_lists(new_card, empower_skills);
}

function copy_Skill_lists(new_card, original_skills) {
    for (var i = 0; i < original_skills.length; i++) {
        var newSkill = original_skills[i];
        if (newSkill.c) {   // If skill has a timer, we need to clone it
            setSkill_2(new_card, copy_skill(newSkill));
            new_card.reusableSkills = false;
        } else {            // If skill has no timer, we can use the same instance
            setSkill_2(new_card, newSkill);
        }
    }
}

function copy_skill(original_skill) {
    var new_skill = {};
    new_skill.id = original_skill.id;
    new_skill.x = original_skill.x;
    new_skill.mult = original_skill.mult;
    new_skill.all = original_skill.all;
    new_skill.y = original_skill.y;
    new_skill.z = original_skill.z;
    new_skill.c = original_skill.c;
    new_skill.s = original_skill.s;
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
        output += convertName(skill.id);
        if (skill.all) output += ' all';
        if (skill.y) output += ' ' + factions.names[skill.y];
        if (skill.s) output += ' ' + convertName(skill.s);
        if (skill.c) output += ' every ' + skill.c + ' turns';
        else if (skill.x) output += ' ' + skill.x;
    }
    if (!first_skill) output += ' )</u>';

    return output;
}

function convertName(oldName) {
    switch (oldName) {
        case "burn":
            return "scorch";
        case "counter":
            return "vengeance";
        case "enfeeble":
            return "hex";
        case "evade":
            return "invisibility";
        case "flurry":
            return "dualstrike";
        case "jam":
            return "freeze";
        case "leech":
            return "siphon";
        case "protect":
            return "barrier";
        case "protect_ice":
            return "iceshatter barrier";
        case "rally":
            return "empower";
        case "strike":
            return "bolt";
        default:
            return oldName;
    }
}

// Dump deck contents
function debug_dump_decks() {
    //	if (!debug) return;

    echo += '<br><hr><br>';
    echo += '<b>Deck Hash:</b>';
    echo += '<br>';
    echo += '<input type="text" value="';
    echo += hash_encode(cache_player_deck);
    echo += '" onclick="this.select()" size="100">';
    echo += '<br><br>';
    echo += '<b>Card List:</b>';
    echo += '<br>';
    echo += '<input type="text" value="';
    echo += generate_card_list(cache_player_deck);
    echo += '" onclick="this.select()" size="100">';
    echo += '<br><br>';
    var current_card = get_slim_card_by_id(cache_player_deck.commander, true);
    current_card.owner = 'player';
    current_card.health_left = current_card.health;
    echo += debug_name(current_card) + debug_skills(current_card.skill) + '<br>';

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
    echo += '" onclick="this.select()" size="100">';
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
    var current_card = get_slim_card_by_id(debug_cpu_deck.commander, true);
    current_card.owner = 'cpu';
    current_card.health_left = current_card.health;
    echo += debug_name(current_card) + debug_skills(current_card.skill) + '<br>';
    debug_dump_cards(debug_cpu_deck, 'cpu');
    echo += '<br><hr><br>';
}

function debug_dump_cards(deck, player) {
    for (var key in deck.deck) {
        // Get cardID
        var card_id = deck.deck[key];
        // Setup card for printing
        current_card = get_slim_card_by_id(card_id, true);
        current_card.owner = player;
        current_card.key = undefined;
        // Echo card info
        echo += debug_name(current_card) + debug_skills(current_card.skill);
        if (current_card.type) echo += ' <u>' + factions.names[current_card.type] + '</u>';
        if (current_card.sub_type) echo += ' <u>' + factions.names[current_card.sub_type] + '</u>';
        echo += '<br>';
    }
}

// Dump field contents
function debug_dump_field() {
    if (!debug) return;

    echo += '<font color="#666666">';

    var players = ['player', 'cpu'];

    for (var player_key = 0, p_len = players.length; player_key < p_len; player_key++) {
        var player_val = players[player_key];
        echo += '<br>';
        echo += player_val + '\'s assaults:<br>';
        var field_x_units = field[player_val].assaults;
        for (var card_key = 0, unit_len = field_x_units.length; card_key < unit_len; card_key++) {
            var current_card = field_x_units[card_key];
            echo += debug_name(current_card);
            echo += '(' + key + ')';
            echo += '<br>';
        }
        if (!field[player_val].assaults.length) echo += 'None<br>';
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
    output += card.name;
    if (card.maxLevel > 1) output += '{' + card.level + '/' + card.maxLevel + '}';
    if (card.key !== undefined) output += ' (' + card.key + ')';
    output += '</' + tag + '>';
    if (!hideStats) {
        output += '<u>';
        if (card.isCommander()) {
            output += ' [';
            if (card.health_left !== undefined) output += card.health_left;
            else output += card.health;
            output += ' HP]';
        } else if (card.isAssault()) {
            output += ' [';
            var atk = parseInt(card.attack) + parseInt(card.attack_rally) + parseInt(card.attack_berserk) - parseInt(card.attack_weaken);
            if (isNaN(atk) || atk == undefined) atk = card.attack;
            output += atk;
            output += '/';
            if (card.health_left !== undefined) output += card.health_left;
            else output += card.health;
            output += '/';
            if (card.timer !== undefined) output += card.timer;
            else output += card.cost;
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

    var cardlist = [];
    var copies = [];
    var priorities = [];

    var commander = get_slim_card_by_id(deck.commander);
    cardlist.push(commander.name + "(" + commander.level + ")");
    copies.push(1);
    priorities.push(0);
    var lastidx = 0;
    for (var key in deck.deck) {
        var unit = deck.deck[key];
        var card = get_slim_card_by_id(unit);

        if (!card) continue;

        var card_name = card.name + "(" + card.level + ")";

        if (cardlist[lastidx] == card_name) {
            copies[lastidx]++;
        } else {
            cardlist.push(card_name);
            copies.push(1);
            priorities.push(unit.priority);
            lastidx++;
        }
    }

    for (var i = copies.length - 1; i >= 0; i--) {
        var numCopies = copies[i];
        var priority = priorities[i];
        if (numCopies > 1) {
            cardlist[i] += "x" + numCopies;
        }
        if (priority > 0) {
            cardlist[i] += "=" + priority;
        }
    }

    cardlist = cardlist.join("; ");

    return cardlist;
}

var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!~";
var multiplierChars = "_*.'";

function base64triplet_to_unitInfo(triplet) {

    if (triplet.length != 3) return false;

    var dec1 = base64chars.indexOf(triplet[0]);
    var level = (dec1 % 7) + 1;
    dec1 = Math.floor(dec1 / 7);
    var fusion = (dec1 % 3) * 10000;
    dec1 = Math.floor(dec1 / 3) * 4096;

    var dec2 = base64chars.indexOf(triplet[1]) * 64;
    var dec3 = base64chars.indexOf(triplet[2]);

    return { id: (fusion + dec1 + dec2 + dec3), level: level };;
}

function unitInfo_to_base64triplet(unit_info) {

    var baseID = parseInt(unit_info.id);
    var level = (parseInt(unit_info.level) - 1);

    var fusion = Math.floor(baseID / 10000);
    baseID %= 10000;

    var char1 = base64chars[(Math.floor(baseID / 4096) * 3 + fusion) * 7 + level];
    baseID %= 4096;

    var char2 = base64chars[Math.floor(baseID / 64)];
    var char3 = base64chars[baseID % 64];

    return char1 + char2 + char3;
}

function numberToBase64(decimal) {
    var char1 = base64chars[Math.floor(decimal / 64)];
    var char2 = base64chars[decimal % 64];
    return char1 + char2;
}

function base64ToNumber(base64) {
    var dec1 = base64chars.indexOf(base64[0]) * 64;
    var dec2 = base64chars.indexOf(base64[1]);
    return dec1 + dec2;
}

function encode_multiplier(copies) {
    copies = copies - 2;    // Encoded as "2 + value"
    if (copies > 256) {
        return "";
    }
    var char1 = multiplierChars[Math.floor(copies / 64)];
    var char2 = base64chars[copies % 64];
    return char1 + char2;
}

function decode_multiplier(encoded) {
    var dec1 = multiplierChars.indexOf(encoded[0]) * 64;
    var dec2 = base64chars.indexOf(encoded[1]);
    return dec1 + dec2;
}


//Returns hash built from deck array
function hash_encode(deck) {

    var current_hash = [];
    var has_priorities = false;
    var has_indexes = false;
    var indexes = [];

    if (deck.commander) {
        current_hash.push(unitInfo_to_base64triplet(deck.commander));
    }
    var copies = [1];
    var lastIndex = 0;
    for (var k in deck.deck) {
        var current_card = deck.deck[k];
        if (current_card.priority) {
            has_priorities = true;
        }
        if (current_card.index) {
            indexes.push(numberToBase64(current_card.index));
            has_indexes = true;
        }
        var triplet = unitInfo_to_base64triplet(current_card);
        if (triplet == current_hash[lastIndex]) {
            copies[lastIndex]++;
        } else {
            current_hash.push(triplet);
            copies.push(1);
            lastIndex++;
        }
    }

    if (has_priorities) {
        var priorities = '|';
        for (var k in deck.deck) {
            var current_card = deck.deck[k];
            if (current_card.priority) {
                priorities += current_card.priority;
            } else {
                priorities += '0';
            }
        }
        current_hash.push(priorities);
    }

    if (has_indexes) {
        indexes = '-' + indexes.join('');
        current_hash.push(indexes);
    }

    for (var i = 0; i < copies.length; i++) {
        var num = copies[i];
        if (num > 1) {
            current_hash[i] += encode_multiplier(num);
        }
    }
    current_hash = current_hash.join("");

    return current_hash;
}

//Returns deck array built from hash
function hash_decode(hash) {

    var current_deck = [];
    current_deck.deck = [];
    var unitInfo;
    var priorities;
    var indexes;
    if (hash.indexOf('-') > 0) {
        // Ignore priorities for now
        indexes = hash.substr(hash.indexOf('-') + 1).match(/.{1,2}/g);
        hash = hash.substr(0, hash.indexOf('-'));
    }
    if (hash.indexOf('|') > 0) {
        // Ignore priorities for now
        priorities = hash.substr(hash.indexOf('|') + 1);
        hash = hash.substr(0, hash.indexOf('|'));
    }
    var unitidx = 0;
    for (var i = 0; i < hash.length; i += 3) {
        if (multiplierChars.indexOf(hash[i]) == -1) {
            // Make sure we have valid characters
            unitInfo = base64triplet_to_unitInfo(hash.substr(i, 3));
            if (priorities) unitInfo.priority = priorities[unitidx];
            if(unitidx > 0 && indexes) unitInfo.index = base64ToNumber(indexes[unitidx-1]); // Skip commander

            if (unitInfo) {
                if (CARDS[unitInfo.id]) {
                    // Repeat previous card multiple times
                    if (!current_deck.commander && is_commander(unitInfo.id)) {
                        current_deck.commander = unitInfo;
                        unitidx++;
                        // Add to deck
                    } else {
                        current_deck.deck.push(unitInfo);
                        unitidx++;
                    }
                }
            }
        } else {
            var multiplier = decode_multiplier(hash.substr(i, 2)) + 1;
            for (var n = 0; n < multiplier; n++) {
                if (indexes) {
                    unitInfo = $.extend({}, unitInfo);
                    unitInfo.index = base64ToNumber(indexes[unitidx - 1]); // Skip commander
                }
                current_deck.deck.push(unitInfo);
                unitidx++;
            }
            i -= 1; // Offset i so that the += 3 in the loop sets it to the correct next index
        }
    }

    // Default commander to Elaria Captain if none found
    if (!current_deck.commander) {
        current_deck.commander = elariaCaptain;
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
    current_deck.deck = [];

    if (list) {
        //var delimiters = ';,:';
        var abbreviations = [];
        // Safety mechanism to prevent long loops
        if (list.length > 300) list = list.substr(0, 300);

        list = list.toString().toLowerCase();
        list = list.replace(/[\&\/\.\!\?\'-]/g, ''); // Replace random punctuation characters
        list = list.replace(/\s/g, '');              // Remove all whitespace
        list = list.split(/[,;:]/);

        var unit_definitions = CARDS;

        for (var i in list) {
            var current_card = list[i].toString();
            var unit = { id: 1, level: 7, priority: 0 }; // Default all cards to max level if none is specified
            var card_found = false;
            var current_card_upgraded = false;

            // Detect advanced prioritization
            if (current_card.toString().length > 3 && current_card.toString().match(/=[1-9][0-9]*$/)) {
                unit.priority = parseInt(current_card.substr(current_card.length - 1, 1));
                current_card = current_card.substr(0, current_card.length - 2);
            }

            var copies = 1;
            // Detect multiple copies
            var match;
            // Look for Nx at the beginning of the card name
            if (match = current_card.toString().match(/^[1-9]+x/)) {
                copies = parseInt(match[0]);
                current_card = current_card.substr(match[0].length);
                // Look for Nx at the end of the card name
            } else if (match = current_card.toString().match(/x[1-9]+$/)) {
                copies = parseInt(match[0].substr(1));
                current_card = current_card.substr(0, current_card.length - match[0].length);
            }

            // Look for (N) at the end to denote level
            if (match = current_card.toString().match(/\(([1-9]+)\).*/)) {
                unit.level = match[1];
                current_card = current_card.substr(0, current_card.length - match[0].length);
            }

            current_card = current_card.trim();

            // Use unit_id notation if available
            if (match = current_card.toString().match(/\[[1-9]+\]/)) {
                unit.id = match[0];
                if (is_commander(unit.id)) {
                    current_deck.commander = unit;
                } else {
                    while (copies > 0) {
                        current_deck.deck.push(unit);
                        copies--;
                    }
                }
                continue;
            }

            // Use abbreviation if available
            current_card = clean_name_for_matching(current_card);
            if (abbreviations[current_card]) current_card = abbreviations[current_card];
            current_card = clean_name_for_matching(current_card);

            // Match full name if available
            for (var k in unit_definitions) {
                var card = unit_definitions[k];
                unit.id = card.id;
                var current_name = clean_name_for_matching(card.name);

                if (current_name == current_card) {
                    if (is_commander(unit.id) && copies == 1) {
                        current_deck.commander = unit;
                    } else {
                        current_deck.deck.push(unit);
                        while (copies > 1) {
                            current_deck.deck.push(unit);
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
                for (var k in unit_definitions) {
                    var card = unit_definitions[k];
                    unit.id = card.id;
                    if (!is_commander(unit.id)) continue;
                    var current_name = clean_name_for_matching(card.name);
                    if (current_name.indexOf(current_card) != -1) {
                        current_deck.commander = unit;
                        card_found = true;
                        break;
                    }
                }
            }
            if (card_found) continue;

            // Match partial name to non-commanders if available
            for (var k in unit_definitions) {
                var card = unit_definitions[k];
                unit.id = card.id;
                if (is_commander(unit.id)) continue;
                var current_name = clean_name_for_matching(card.name);
                if (current_name.indexOf(current_card) != -1) {
                    current_deck.deck.push(unit);
                    while (copies > 1) {
                        current_deck.deck.push(unit);
                        copies--;
                    }
                    card_found = true;
                    break;
                }
            }
            if (card_found) continue;
        }
    }

    // Default commander to Elaria Captain if none found
    if (!current_deck.commander) {
        current_deck.commander = elariaCaptain;
    }

    return current_deck;
}

function clean_name_for_matching(name) {
    name = name.toLowerCase();
    name = name.toString().replace(/[\&]/g, ',');
    name = name.toString().replace(/[\.\!\?]/g, '');
    name = name.toString().replace(/\s/g, '');
    name = name.toString().replace(/-/g, '');
    name = name.toString().replace(/\'/g, '');
    return name;
}

// Load mission deck
var DoNotFuse = ["8005", "8006", "8007", "8008", "8009", "8010"];
function load_deck_mission(id) {

    var missionInfo = MISSIONS[id];
    if (!missionInfo) return 0;

    var current_deck = [];
    current_deck.deck = [];
    current_deck.commander = { id: missionInfo.commander, level: 7 };   // Set commander to max level
    var missionDeck = missionInfo.deck;
    for (var current_key in missionDeck) {
        var unit = { id: 0, level: 7 };
        var current_card = missionDeck[current_key];
        // Upgrade all cards to max fusion/level
        if (DoNotFuse.indexOf(current_card) == -1) {
            if (current_card.length > 4) {
                current_card[0] = '2';
            } else {
                current_card = '2' + current_card;
            }
        }
        unit.id = current_card;
        current_deck.deck.push(unit);
    }
    return current_deck;
}

// Load raid deck
// - randomize it as required
function load_deck_raid(id) {

    var raid = raids[id];
    if (!raid) return 0;

    // Load battleground, if available
    if (raid.effect && !getbattleground) {
        battleground = BATTLEGROUNDS[raid.effect.effect];
        getbattleground = raid.effect;
    }

    var current_deck = [];
    current_deck.deck = [];
    current_deck.commander = raid.commander;

    // Always included raid cards
    var current_pool = raid.deck.always_include;
    if (current_pool && current_pool.card) {
        current_pool = current_pool.card;
        for (var current_key in current_pool) {
            var current_card = current_pool[current_key];
            current_deck.deck.push(current_card);
        }
    }

    // Variable Card Pools
    var parent_pool = raid.deck.card_pool;
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
                    current_deck.deck.push(current_card);
                    amount--;
                }
            }
        }
    }
    return current_deck;
}


// Output card array
function get_card_by_id(unit, skillModifiers) {

    var cached = card_cache[unit.id + "-" + unit.level]
    if (cached) {
        return cloneCard(cached);
    }

    var current_card = CARDS[unit.id];

    // Not a valid card
    if (!current_card) {
        current_card = {};
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
        return MakeAssault(current_card, unit.level, skillModifiers);
    }
}

function get_slim_card_by_id(unit, getDetails) {

    var current_card = CARDS[unit.id];
    var new_card = {};
    if (current_card.card_type == "1") {
        new_card.isCommander = function () { return true; };
        new_card.isAssault = function () { return false; };
    } else {
        new_card.isCommander = function () { return false; };
        new_card.isAssault = function () { return true; };
    }
    // Not a valid card
    if (!current_card) {
        new_card.id = undefined;
        new_card.name = undefined;
        new_card.card_type = undefined;
        new_card.set = undefined;
        new_card.type = undefined;
        new_card.sub_type = undefined;
        new_card.level = undefined;
        new_card.maxLevel = undefined;
        if (getSkills) new_card.skill = [];
    } else {
        new_card.id = current_card.id;
        new_card.name = current_card.name;
        new_card.rarity = current_card.rarity;
        new_card.picture = current_card.picture;
        new_card.maxLevel = GetMaxLevel(current_card);
        if (unit.level) {
            new_card.level = unit.level;
            if (new_card.level > new_card.maxLevel) new_card.level = new_card.maxLevel;
        } else new_card.level = 1;
        if (getDetails) {
            new_card.attack = current_card.attack;
            new_card.health = current_card.health;
            new_card.cost = current_card.cost;
            new_card.set = current_card.set;
            new_card.card_type = current_card.card_type;
            new_card.type = current_card.type;
            new_card.sub_type = current_card.sub_type;
            new_card.skill = current_card.skill;
            if (new_card.level > 1) {
                for (var key in current_card.upgrades) {
                    var upgrade = current_card.upgrades[key];
                    if (upgrade.cost !== undefined) new_card.cost = upgrade.cost;
                    if (upgrade.health !== undefined) new_card.health = upgrade.health;
                    if (upgrade.attack !== undefined) new_card.attack = upgrade.attack;
                    if (upgrade.skill.length > 0) new_card.skill = upgrade.skill;
                    if (key == new_card.level) break;
                }
            }
        }
    }
    return new_card;
}

function GetMaxLevel(original_card) {
    if (original_card.maxLevel) return original_card.maxLevel;
    original_card.maxLevel = 1;
    var upgrades = original_card.upgrades;
    if (upgrades) for (key in upgrades) {
        if (upgrades.hasOwnProperty(key)) original_card.maxLevel++;
    }
    return original_card.maxLevel;
}

// Output card name
function get_card_name_by_id(id) {
    var card = CARDS[id];
    if (!card) return 0;
    else if (card.set == 5002) return card.name + '*';
    else return card.name;
}


//Card ID is ...
function is_commander(id) {
    var card = CARDS[id];
    return (card && card.card_type == '1');
}

var elariaCaptain = { id: 202, level: 7 };
var card_cache = {};


// Global arrays
var factions = {
    names: [
        'Factionless',
        'Aether',
        'Chaos',
        'Wyld',
        'Frog',
        'Elemental',
        'Angel',
        'Undead',
        'Void',
        'Dragon',
    ],
    IDs: {
        Factionless: 0,
        Aether: 1,
        Chaos: 2,
        Wyld: 3,
        Frog: 4,
        Elemental: 5,
        Angel: 6,
        Undead: 7,
        Void: 8,
        Dragon: 9
    }
};