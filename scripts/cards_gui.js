
function clearCardSpace() {
    var cardSpace = document.getElementById("cardSpace");
    cardSpace.innerHTML = '';
}

function draw_deck(deck) {
    var cardSpace = document.getElementById("cardSpace");
    cardSpace.innerHTML = '';
    var cards = createDiv("float-left");
    var commander = get_card_by_id(deck.commander);
    cards.appendChild(create_card_html(commander, false));
    cards.appendChild(createDiv("spacer"));
    for (var i = 0, len = deck.length; i < len; i++) {
        var unit = get_card_by_id(deck[i]);
        cards.appendChild(create_card_html(unit, false));
    }
    cardSpace.appendChild(cards);
}

function draw_cards(drawableHand, performTurns, turn) {
    if (!drawableHand) drawableHand = [];
    var cardSpace = document.getElementById("cardSpace");
    cardSpace.innerHTML = '';
    if (turn) {
        var htmlTurnCounter = document.createElement("h1");
        htmlTurnCounter.innerHTML = "Turn: " + turn
        cardSpace.appendChild(htmlTurnCounter);
    }
    cardSpace.appendChild(draw_field(field.cpu));
    cardSpace.appendChild(draw_field(field.player));
    cardSpace.appendChild(draw_hand(drawableHand, performTurns, turn));
    cardSpace.appendChild(document.createElement('br'));
    cardSpace.appendChild(document.createElement('br'));
}

function draw_field(field) {
    var cards = createDiv("float-left");
    var commander = field.commander;
    cards.appendChild(create_card_html(commander, false));
    cards.appendChild(createDiv("spacer"));
    var units = field.assaults;
    if (units) for (var i = 0, len = units.length; i < len; i++) {
        var unit = units[i];
        cards.appendChild(create_card_html(unit, false));
    }
    return cards;
}

function draw_hand(hand, callback, state) {
    var cards = createDiv("float-left hand");
    var units = field.assaults;
    for (var i = 0, len = hand.length; i < len; i++) {
        var unit = hand[i];
        if (!unit) continue;
        var htmlCard = create_card_html(unit, true);
        if (i === 0) htmlCard.classList.add("hand-left");
        else if (i === 2) htmlCard.classList.add("hand-right");
        var cardidx = i;
        htmlCard.addEventListener("click", (function (inner) {
            return function () {
                choice = inner;
                callback(state);
                debug_end();
            };
        })(i));
        cards.appendChild(htmlCard);
    }
    return cards;
}

function create_card_html(card, inHand) {
    var htmlCard = createDiv("card");
    var divName = createDiv("card-name", card.name);
    htmlCard.appendChild(divName);
    if (!card.isCommander()) {
        if (inHand) {
            var htmlAttack = createDiv("card-attack", card.attack.toString());
        } else {
            if (!card.isUnjammed()) htmlCard.classList.add("frozen");
            var htmlAttack = createDiv("card-attack", card.adjustedAttack().toString());
            if (card.adjustedAttack() > card.attack) htmlAttack.classList.add("increased");
            else if (card.adjustedAttack() < card.attack) htmlAttack.classList.add("decreased");
        }
        htmlCard.appendChild(htmlAttack);
        if (card.timer) htmlCard.appendChild(createDiv("card-delay", card.timer));
    }
    if (inHand) {
        var htmlHealth = createDiv("card-health", card.health.toString());
    } else {
        var htmlHealth = createDiv("card-health", card.health_left.toString());
        if (card.health_left < card.health) htmlHealth.classList.add("decreased");
    }
    htmlCard.appendChild(htmlHealth);
    var divSkills = createDiv("card-skills");
    var skillsShort = createDiv("card-skills-short");
    var skills = card.skill;
    for (var i in skills) {
        var skill = skills[i];
        divSkills.appendChild(getSkillHtml(skill, inHand));
        divSkills.appendChild(document.createElement('br'));
        skillsShort.appendChild(getSkillIcon(skill.id));
    }
    htmlCard.appendChild(skillsShort);
    htmlCard.appendChild(divSkills);
    if (card.type > 0) {
        var faction = factions.names[card.type].toLowerCase();
        htmlCard.appendChild(createDiv(faction));
    }
    var statuses = getStatuses(card);
    if (statuses.length > 0) {
        htmlCard.appendChild(createDiv("hidden", "..."));
        var divStatuses = createDiv("card-statuses");
        for (var i = 0; i < statuses.length; i++) {
            var status = statuses[i];
            divStatuses.appendChild(status);
        }
        htmlCard.appendChild(divStatuses);
    }
    if (card.sub_type) {
        var htmlSubfaction = getFactionIcon(card.sub_type);
        htmlSubfaction.className = "subfaction";
        htmlCard.appendChild(htmlSubfaction);
    }
    return htmlCard;
}

function getSkillHtml(skill, inHand) {
    var htmlSkill = document.createElement("span");
    htmlSkill.className = "skill";
    htmlSkill.appendChild(getSkillIcon(skill.id));
    if (skill.all) htmlSkill.innerHTML += ("All");
    if (skill.s) htmlSkill.appendChild(getSkillIcon(skill.s));
    if (skill.y) htmlSkill.appendChild(getFactionIcon(skill.y));
    if (skill.x) htmlSkill.innerHTML += (skill.x);
    if (skill.c) {
        htmlSkill.innerHTML += (skill.c);
        if (!inHand) htmlSkill.innerHTML += " (" + (skill.coundown ? skill.coundown : "0") + ")";
    }
    return htmlSkill;
}

function getSkillIcon(skillName) {
    var src = 'res/skills/';
    var iconName = skillName.charAt(0).toUpperCase() + skillName.slice(1) + '.png';
    switch (skillName) {
        case 'armored':
            iconName = 'Armor.png';
            break;
        case 'strike':
            iconName = 'Bolt.png';
            break;
        case 'burn':
            iconName = 'Scorch.png';
            break;
        case 'flurry':
            iconName = 'Dualstrike.png';
            break;
        case 'enfeeble':
            iconName = 'Hex.png';
            break;
        case 'enhance':
            iconName = 'Enhance.png';
            break;
        case 'jam':
            iconName = 'Freeze.png';
            break;
        case 'leech':
            iconName = 'Siphon.png';
            break;
        case 'evade':
            iconName = 'Invisibility.png';
            break;
        case 'counter':
            iconName = 'Vengeance.png';
            break;
        case 'protect':
            iconName = 'Barrier.png';
            break;
        case 'rally':
            iconName = 'Empower.png';
            break;
    }
    src += iconName;
    return createImg(src);
}

function getStatuses(card) {
    var debuffs = [];
    if (card.attack_weaken) {
        var status = createStatus("weaken", card.attack_weaken);
        debuffs.push(status);
    }
    if (card.enfeebled) {
        var status = createStatus("enfeeble", card.enfeebled);
        debuffs.push(status);
    }
    if (card.jammed) {
        var status = createStatus("jam");
        debuffs.push(status);
    }
    if (card.poisoned) {
        var status = createStatus("poison", card.poisoned);
        debuffs.push(status);
    }
    if (card.scorched) {
        var status = createStatus("burn", card.scorched.amount);
        debuffs.push(status);
    }

    var buffs = [];
    if (card.attack_rally) {
        var status = createStatus("rally", card.attack_rally);
        buffs.push(status);
    }
    if (card.protected) {
        var status = createStatus("protect", card.protected);
        buffs.push(status);
    }
    if (card.augmented) {
        for (var key in card.augmented) {
            if (key == 'counter' || key == 'armored' || key == 'evade') {
                var status = createStatus(key, "+" + card.augmented[key]);
                buffs.push(status);
            }
        }
    }

    var statuses = [];
    if (debuffs.length > 0) {
        var divDebuffs = createDiv("card-debuffs");
        for (var i = 0, len = debuffs.length; i < len; i++) {
            divDebuffs.appendChild(debuffs[i]);
        }
        statuses.push(divDebuffs);
    }
    if (buffs.length > 0) {
        var divBuffs = createDiv("card-buffs");
        for (var i = 0, len = buffs.length; i < len; i++) {
            divBuffs.appendChild(buffs[i]);
        }
        statuses.push(divBuffs);
    }

    return statuses;
}

function createStatus(name, value) {
    var spanStatus = document.createElement("span");
    spanStatus.appendChild(getSkillIcon(name));
    if (value) spanStatus.innerHTML += (value);
    return spanStatus;
}

function getFactionIcon(factionID) {
    var factionName = factions.names[factionID];
    return createImg('res/factions/' + factionName + '.png');
}

function createImg(src) {
    var html = document.createElement("img");
    html.setAttribute("src", src);
    return html;
}

function createDiv(className, value) {
    var div = document.createElement("div");
    if (className) div.className = className;
    if (value) div.innerHTML = value;
    return div;
}