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

var skillFiltersAdv = [];
var skillHiddenAdv = [];

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
var dialog;
var form;

var initDeckBuilder = function () {
    setupPopups();
    drawAllCards();
}

var setupPopups = function () {
    dialog = $("#dialog-form").dialog({
        autoOpen: false,
        width: 100,
        minHeight: 20,
        modal: true,
        buttons: {
            OK: function () {
                filterAdvanced(dialog.skill);
                dialog.dialog("close");
            },
            Cancel: function () {
                dialog.dialog("close");
            }
        },
    });
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
		" - $" + $("#slider-range").slider("values", 1));
}

var drawAllCards = function () {
    var hash = _GET('hash');
    if (hash) {
        deck = hash_decode(hash);
    } else if (_DEFINED('spoilers')) {
        deck = spoilers;
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

var filterAdvanced = function (skill) {

    var info = {
        id: skill,
        x: undefined,
        y: undefined,
        c: undefined,
        s: undefined,
        all: undefined,
    }

    for (var i = 0; i < skillFiltersAdv.length; i++) {
        if (skillFiltersAdv[i].id == skill) {
            skillFiltersAdv.splice(i, 1);
            break;
        }
    }

    if ($("div#amount")[0].style.display != "none") {
        var min = parseInt($("#amount-min")[0].value);
        var max = parseInt($("#amount-max")[0].value);
        if (isNaN(min)) min = 0;
        if (isNaN(max)) max = 99;
        info.x = { min: min, max: max };
    }
    if ($("div#timer")[0].style.display != "none") {
        var min = parseInt($("#timer-min")[0].value);
        var max = parseInt($("#timer-max")[0].value);
        if (isNaN(min)) min = 0;
        if (isNaN(max)) max = 99;
        info.c = { min: min, max: max };
    }
    if ($("div#faction")[0].style.display != "none") {
        var faction = $("select#faction")[0].value;
        info.y = (faction == "Generic") ? -1 : factions.IDs[faction];
    }
    if ($("div#skill")[0].style.display != "none") {
        if ($("select#skill")[0].value.length > 0) {
            info.s = $("select#skill")[0].value;
        }
    }
    if ($("label[for=all]")[0].style.display != "none") {
        info.all = $("select#all")[0].value;
    }

    $("input#" + skill)[0].classList.add("selected-advanced");
    skillFiltersAdv.push(info);

    checkAdvancedFilters();
}

var checkAdvancedFilters = function () {
    skillHiddenAdv = [];

    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        for (var s = 0; s < skillFiltersAdv.length; s++) {
            if (!hasSkillAdvanced(unit, skillFiltersAdv[s])) {
                skillHiddenAdv.push(unit.id);
            }
        }
    }
    for (var key in skillFiltersAdv) {
        var info = skillFiltersAdv[key];
    }
    applyFilters();
}

var filterSkill = function (button, skill) {
    skillHidden = [];
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        skillFilters.splice(skillFilters.indexOf(skill), 1);
    } else if (button.classList.contains("selected-advanced")) {
        button.classList.remove("selected-advanced");
        for (var i = 0; i < skillFiltersAdv.length; i++) {
            if (skillFiltersAdv[i].id == skill) {
                skillFiltersAdv.splice(i, 1);
                break;
            }
        }
        checkAdvancedFilters();
        return;
    } else {
        button.classList.add("selected");
        skillFilters.push(skill);
    }
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        for (var s = 0; s < skillFilters.length; s++) {
            if (!hasSkill(unit, skillFilters[s])) {
                skillHidden.push(unit.id);
                break;
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

var contextTest = function (skill) {

    $("label[for=all]").hide();
    $("div#amount").hide();
    $("div#faction").hide();
    $("div#skill").hide();
    $("div#timer").hide();

    $("#amount-min")[0].value = 0;
    $("#amount-max")[0].value = 99;
    $("#timer-min")[0].value = 0;
    $("#timer-max")[0].value = 99;
    $("select#faction")[0].value = '';
    $("select#skill")[0].value = '';
    $("select#all")[0].value = -1;
    for (var i = 0; i < skillFiltersAdv.length; i++) {
        var skillInfo = skillFiltersAdv[i];
        if (skillInfo.id == skill) {
            if (skillInfo.x) {
                $("#amount-min")[0].value = skillInfo.x.min;
                $("#amount-max")[0].value = skillInfo.x.max;
            }
            if (skillInfo.c) {
                $("#timer-min")[0].value = skillInfo.c.min;
                $("#timer-max")[0].value = skillInfo.c.max;
            }
            if (skillInfo.y) {
                if (skillInfo.y == -1)
                    $("select#faction")[0].value = "Generic";
            }
            if (skillInfo.s) $("select#skill")[0].value = skillInfo.s;
            if (skillInfo.all) $("select#all")[0].value = skillInfo.all;
            break;
        }
    }

    switch (skill) {
        // x="1" y="0" all="0" c="0" s="0"
        case 'evade':
        case 'armored':
        case 'counter':
        case 'burn':
        case 'frost':
        case 'pierce':
        case 'poison':
        case 'leech':
        case 'berserk':
            $("div#amount").show();
            break;
            // x="1" y="1" all="0" c="0" s="0"
        case 'legion':
        case 'fervor':
        case 'reanimate':
        case 'resurrect':
            $("div#amount").show();
            $("div#faction").show();
            break;
            // x="1" y="1" all="1" c="0" s="0"
        case 'rally':
        case 'heal':
        case 'protect':
            $("div#amount").show();
            $("label[for=all]").show();
            $("div#faction").show();
            break;
            // x="1" y="0" all="1" c="0" s="0"
        case 'enfeeble':
        case 'strike':
        case 'weaken':
            $("div#amount").show();
            $("label[for=all]").show();
            break;
            // x="1" y="1" all="1" c="1" s="1"
        case 'enhance':
            $("div#amount").show();
            $("label[for=all]").show();
            $("div#faction").show();
            $("div#skill").show();
            $("div#timer").show();
            break;
            // x="0" y="0" all="1" c="1" s="0"
        case 'jam':
            $("label[for=all]").show();
            $("div#timer").show();
            break;
            // x="0" y="0" all="0" c="1" s="0"
        case 'flurry':
            $("div#timer").show();
            break;
    }
    dialog.dialog("open");
    dialog.skill = skill;

    return false;
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
             || nameHidden.indexOf(id) > -1 || rarityHidden.indexOf(id) > -1 || skillHiddenAdv.indexOf(id) > -1) {
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

var hasSkillAdvanced = function (unit, skillInfo) {
    var card = get_slim_card_by_id(unit, true);
    var skills = card.skill;
    for (var i = 0, len = skills.length; i < len; i++) {
        var skill = skills[i];
        if (skillInfo.id == skill.id) {
            if (skillInfo.x && (skill.x < skillInfo.x.min || skill.x > skillInfo.x.max)) return false;
            if (skillInfo.c && (skill.c < skillInfo.c.min || skill.c > skillInfo.c.max)) return false;
            if (skillInfo.y == -1 && skill.y) return false;
            if (skillInfo.y > 0 && skill.y != skillInfo.y) return false;
            if (skillInfo.s && skill.s != skillInfo.s) return false;
            if (skillInfo.all > -1 && (skill.all | "0") != skillInfo.all) return false;
            return true;
        }
    }
    return false;
}

var clearFilters = function () {
    attackHidden = [];
    attackRanges = [];
    healthHidden = [];
    healthRanges = [];
    delayHidden = [];
    delayRanges = [];

    skillFilters = [];
    skillHidden = [];

    skillFiltersAdv = [];
    skillHiddenAdv = [];

    factionHidden = [];
    subfactionHidden = [];

    rarityFilters = [];
    rarityHidden = [];

    typeFilters = [];
    typeHidden = [];

    setFilters = [];
    setHidden = [];

    fusionFilters = [];
    fusionHidden = [];

    nameHidden = [];

    $(".selected").removeClass("selected");
    $(".selected-advanced").removeClass("selected-advanced");
    $("#nameFilter").val("");

    applyFilters();
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

var toggleSkillDetails = function (checkbox) {
    while (skillStyle.hasChildNodes()) {
        skillStyle.removeChild(skillStyle.firstChild);
    }
    if (checkbox.checked) {
        rules = document.createTextNode(
            '.card-skills-short { display: initial; } .card-skills-detailed { display: none; }'
        );
    } else {
        rules = document.createTextNode(
            '.card-skills-short { display: none; } .card-skills-detailed { display: initial; }'
        );
    }

    if (skillStyle.styleSheet) {
        skillStyle.styleSheet.cssText = rules.nodeValue;
    } else {
        skillStyle.appendChild(rules);
    }
}


var skillStyle = document.createElement('style');
(function () {
    skillStyle.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(skillStyle);
    toggleSkillDetails({ checked: false });
})();