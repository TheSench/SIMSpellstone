var card_cache = {};

var deck = [];
deck.commander = elariaCaptain;
deck.deck = [];

var attackHidden = [];
var attackRanges = [];
var healthHidden = [];
var healthRanges = [];
var delayHidden = [];
var delayRanges = [];

var skillFilters = [];
var skillHidden = [];

var factionHidden = [];
var subfactionHidden = [];

var rarityFilters = [];
var rarityHidden = [];

var typeFilters = [];
var typeHidden = [];

var setFilters = [];
var setHidden = [];

var fusionFilters = [];
var fusionHidden = [];

var nameHidden = [];

var allCards = CARDS.root.unit;

var units = [];

var drawAllCards = function () {
    var hash = _GET('hash');
    if (hash) {
        deck = hash_decode(hash);
    } else {
        hash = _GET('spoilers');
        if (hash) {
            deck = spoilers;
        }
    }
    for (var id in allCards) {
        if (id < 10000) {
            units.push({ id: id, level: 7 });
            if (id > 999 && allCards["1" + id]) {
                units.push({ id: "1" + id, level: 7 });
                units.push({ id: "2" + id, level: 7 });
            }
        }
    }
    draw_deck(deck, removeFromDeck);
    draw_card_list(units, addToDeck);
    updateHash();
};

var hash_changed = function () {
    deck = hash_decode(document.getElementById("hash").value);
    draw_deck(deck, removeFromDeck);
}

var addToDeck = function (unit) {
    if (is_commander(unit.id)) {
        deck.commander = unit;
    } else {
        deck.deck.push(unit);
    }
    draw_deck(deck, removeFromDeck);
    updateHash();
};

var removeFromDeck = function (unit) {
    if (is_commander(unit.id)) {
        deck.commander = elariaCaptain;
    } else {
        deck.deck.splice(deck.indexOf(unit), 1);
    }
    draw_deck(deck, removeFromDeck);
    updateHash();
};

var updateHash = function () {
    document.getElementById("hash").value = hash_encode(deck);
}

var filterSkill = function (button, skill) {
    skillHidden = [];
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        skillFilters.splice(skillFilters.indexOf(skill), 1);
    } else {
        button.classList.add("selected");
        skillFilters.push(skill);
    }
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        for (var s = 0; s < skillFilters.length; s++) {
            if (!hasSkill(unit, skillFilters[s])) {
                skillHidden.push(unit.id);
            }
        }
    }
    applyFilters();
}

var filterFaction = function (button, faction) {
    factionHidden = [];
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
    } else {
        button.classList.add("selected");
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            if (!isInFaction(unit, faction)) {
                factionHidden.push(unit.id);
            }
        }
    }
    var filters = document.getElementsByName("faction");
    for (var i = 0; i < filters.length; i++) {
        var filter = filters[i];
        if (filter != button) {
            filter.classList.remove("selected");
        }
    }
    applyFilters();
}

var filterName = function (field) {
    nameHidden = [];
    var filter = field.value.toLowerCase();
    if (filter) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var card = get_slim_card_by_id(unit, true);
            if (card.name.toLowerCase().indexOf(filter) == -1) {
                nameHidden.push(unit.id);
            }
        }
    }
    applyFilters();
}

var filterSubfaction = function (button, faction) {
    subfactionHidden = [];
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
    } else {
        button.classList.add("selected");
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            if (!isInSubfaction(unit, faction)) {
                subfactionHidden.push(unit.id);
            }
        }
    }
    var filters = document.getElementsByName("subfaction");
    for (var i = 0; i < filters.length; i++) {
        var filter = filters[i];
        if (filter != button) {
            filter.classList.remove("selected");
        }
    }
    applyFilters();
}

var filterAttack = function (button, min, max) {
    attackHidden = [];
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
        for (var i = 0; i < attackRanges.length; i++) {
            if (attackRanges[i][0] == min) {
                attackRanges.splice(i, 1);
                break;
            }
        }
    } else {
        button.classList.add("selected");
        attackRanges.push([min, max]);
    }
    if (attackRanges.length > 0) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var hide = true;
            for (var j = 0; j < attackRanges.length; j++) {
                var range = attackRanges[j];
                if (isInRange(unit, "attack", range[0], range[1])) {
                    hide = false;
                    break;
                }
            }
            if (hide) attackHidden.push(unit.id);
        }
    }
    applyFilters();
}

var filterHealth = function (button, min, max) {
    healthHidden = [];
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
        for (var i = 0; i < healthRanges.length; i++) {
            if (healthRanges[i][0] == min) {
                healthRanges.splice(i, 1);
                break;
            }
        }
    } else {
        button.classList.add("selected");
        healthRanges.push([min, max]);
    }
    if (healthRanges.length > 0) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var hide = true;
            for (var j = 0; j < healthRanges.length; j++) {
                var range = healthRanges[j];
                if (isInRange(unit, "health", range[0], range[1])) {
                    hide = false;
                    break;
                }
            }
            if (hide) healthHidden.push(unit.id);
        }
    }
    applyFilters();
}

var filterDelay = function (button, delay) {
    delayHidden = [];
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
        for (var i = 0; i < delayRanges.length; i++) {
            if (delayRanges[i] == delay) {
                delayRanges.splice(i, 1);
                break;
            }
        }
    } else {
        button.classList.add("selected");
        delayRanges.push(delay);
    }
    if (delayRanges.length > 0) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var hide = true;
            for (var j = 0; j < delayRanges.length; j++) {
                var delay = delayRanges[j];
                if (isInRange(unit, "cost", delay, delay)) {
                    hide = false;
                    break;
                }
            }
            if (hide) delayHidden.push(unit.id);
        }
    }
    applyFilters();
}

var filterType = function (button, type) {
    typeHidden = [];
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
        for (var i = 0; i < typeFilters.length; i++) {
            if (typeFilters[i] == type) {
                typeFilters.splice(i, 1);
                break;
            }
        }
    } else {
        button.classList.add("selected");
        typeFilters.push(type);
    }
    if (typeFilters.length > 0) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var hide = true;
            for (var j = 0; j < typeFilters.length; j++) {
                var type = typeFilters[j];
                if (isInRange(unit, "card_type", type, type)) {
                    hide = false;
                    break;
                }
            }
            if (hide) typeHidden.push(unit.id);
        }
    }
    applyFilters();
}

var filterFusion = function (button, fusion) {
    fusionHidden = [];
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
        for (var i = 0; i < fusionFilters.length; i++) {
            if (fusionFilters[i] == fusion) {
                fusionFilters.splice(i, 1);
                break;
            }
        }
    } else {
        button.classList.add("selected");
        fusionFilters.push(fusion);
    }
    if (fusionFilters.length > 0) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var fusion = (unit.id.length > 4 ? unit.id[0] : '');
            var hide = true;
            for (var j = 0; j < fusionFilters.length; j++) {
                if (fusion == fusionFilters[j]) {
                    hide = false;
                    break;
                }
            }
            if (hide) fusionHidden.push(unit.id);
        }
    }
    applyFilters();
}

var filterSet = function (button, set) {
    setHidden = [];
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
        for (var i = 0; i < setFilters.length; i++) {
            if (setFilters[i] == set) {
                setFilters.splice(i, 1);
                break;
            }
        }
    } else {
        button.classList.add("selected");
        setFilters.push(set);
    }
    if (setFilters.length > 0) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var hide = true;
            for (var j = 0; j < setFilters.length; j++) {
                var set = setFilters[j];
                if (isInRange(unit, "set", set, set)) {
                    hide = false;
                    break;
                }
            }
            if (hide) setHidden.push(unit.id);
        }
    }
    applyFilters();
}

var filterRarity = function (button, rarity) {
    rarityHidden = [];
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        button.checked = false;
        for (var i = 0; i < rarityFilters.length; i++) {
            if (rarityFilters[i] == rarity) {
                rarityFilters.splice(i, 1);
                break;
            }
        }
    } else {
        button.classList.add("selected");
        rarityFilters.push(rarity);
    }
    if (rarityFilters.length > 0) {
        for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var hide = true;
            for (var j = 0; j < rarityFilters.length; j++) {
                var rarity = rarityFilters[j];
                if (isInRange(unit, "rarity", rarity, rarity)) {
                    hide = false;
                    break;
                }
            }
            if (hide) rarityHidden.push(unit.id);
        }
    }
    applyFilters();
}

var applyFilters = function () {
    var cards = document.getElementById("cardSpace").getElementsByClassName("card");
    for (var i = 0, len = cards.length; i < len; i++) {
        var card = cards[i];
        var id = card.id.replace("Card_", "");
        if (skillHidden.indexOf(id) > -1 || factionHidden.indexOf(id) > -1 || subfactionHidden.indexOf(id) > -1
             || attackHidden.indexOf(id) > -1 || healthHidden.indexOf(id) > -1 || delayHidden.indexOf(id) > -1
             || typeHidden.indexOf(id) > -1 || fusionHidden.indexOf(id) > -1 || setHidden.indexOf(id) > -1
             || nameHidden.indexOf(id) > -1 || rarityHidden.indexOf(id) > -1) {
            card.style.display = "none";
        } else {
            card.style.display = "";
        }
    }
}

var hasSkill = function (unit, skill) {
    var card = get_slim_card_by_id(unit, true);
    var skills = card.skill;
    for (var i = 0, len = skills.length; i < len; i++) {
        if (skill == skills[i].id) return true;
    }
    return false;
}

var isInFaction = function (unit, faction) {
    var factionID = factions.IDs[faction];
    var card = get_slim_card_by_id(unit, true);
    return (card.type == factionID);
}

var isInSubfaction = function (unit, faction) {
    var factionID = factions.IDs[faction];
    var card = get_slim_card_by_id(unit, true);
    return (card.sub_type == factionID);
}

var isInRange = function (unit, field, min, max) {
    var card = get_slim_card_by_id(unit, true);
    var value = card[field];
    if (min >= 0 && value < min) return false;
    if (max >= 0 && value > max) return false;
    return true;
}