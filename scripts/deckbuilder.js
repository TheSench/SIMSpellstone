var card_cache = {};

var elariaCaptain = { id: 202, level: 1 };

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

var allCards = CARDS.root.unit;

var units = [];

var drawAllCards = function () {
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
            if(hide) attackHidden.push(unit.id);
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

var applyFilters = function () {
    var cards = document.getElementById("cardSpace").getElementsByClassName("card");
    for (var i = 0, len = cards.length; i < len; i++) {
        var card = cards[i];
        var id = card.id.replace("Card_", "");
        if (skillHidden.indexOf(id) > -1 || factionHidden.indexOf(id) > -1 || subfactionHidden.indexOf(id) > -1
             || attackHidden.indexOf(id) > -1 || healthHidden.indexOf(id) > -1 || delayHidden.indexOf(id) > -1) {
            card.style.display = "none";
        } else {
            card.style.display = "";
        }
    }
}

var hasSkill = function (unit, skill) {
    var card = get_slim_card_by_id(unit, true);
    var skills = card.skill;
    for(var i = 0, len = skills.length; i < len; i++) {
        if(skill == skills[i].id) return true;
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
    return (value >= min && value <= max);
}