
function draw_cards(drawableHand, performTurns, turn) {
    cardSpace.innerHTML = '';
    cardSpace.appendChild(draw_field(field['cpu']));
    cardSpace.appendChild(document.createElement('br'));
    cardSpace.appendChild(document.createElement('br'));
    cardSpace.appendChild(draw_field(field['player']));
    cardSpace.appendChild(document.createElement('br'));
    cardSpace.appendChild(document.createElement('br'));
    cardSpace.appendChild(draw_hand(drawableHand, performTurns, turn));
}

function draw_field(field) {
    var cards = document.createElement("div");
    cards.className = "float-left";
    var commander = field.commander;
    cards.appendChild(create_card_html(commander, false));
    var units = field.assaults;
    if (units) for (var i = 0, len = units.length; i < len; i++) {
        var unit = units[i];
        cards.appendChild(create_card_html(unit, false));
    }
    return cards;
}

function draw_hand(hand, callback, state) {
    var cards = document.createElement("div");
    cards.className = "float-left";
    var units = field.assaults;
    for (var i = 0, len = hand.length; i < len; i++) {
        var unit = hand[i];
        var htmlCard = create_card_html(unit, true);
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
    var html = document.createElement("div");
    html.className = "card";
    var divName = createDiv("card-name", card.name);
    //divName.classList.add(card.factionName);
    html.appendChild(divName);
    if (!card.isCommander()) {
        var htmlAttack = createDiv("card-attack", card.adjustedAttack().toString());
        if (card.adjustedAttack() > card.attack) htmlAttack.classList.add("increased");
        else if (card.adjustedAttack() < card.attack) htmlAttack.classList.add("decreased");
        html.appendChild(htmlAttack);
        if (card.timer) {
            if (inHand) html.appendChild(createDiv("hand-delay", card.timer));
            else html.appendChild(createDiv("card-delay", card.timer));
        }
    }
    var htmlHealth = createDiv("card-health", card.health_left.toString());
    if (card.health_left < card.health) htmlHealth.classList.add("decreased");
    html.appendChild(htmlHealth);
    var divSkills = createDiv("card-skills");
    var skillsShort = createDiv("card-skills-short");
    var skills = card.skill;
    for (var i in skills) {
        var skill = skills[i];
        divSkills.appendChild(getSkillHtml(skill));
        divSkills.appendChild(document.createElement('br'));
        skillsShort.appendChild(getSkillIcon(skill.id));
    }
    html.appendChild(skillsShort);
    html.appendChild(divSkills);
    if (!inHand) {
        var statuses = getStatuses(card);
        if (statuses.length > 0) {
            html.appendChild(createDiv("hidden", "..."));
            var divStatuses = createDiv("card-statuses")
            for (var i = 0, len = statuses.length; i < len; i++) {
                divStatuses.appendChild(statuses[i]);
            }
            html.appendChild(divStatuses);
        }
    }
    var faction = factions.names[card.type].toLowerCase();
    html.appendChild(createDiv(faction));
    if (card.sub_type) {
        var htmlSubfaction = getFactionIcon(card.sub_type);
        htmlSubfaction.className = "subfaction";
        html.appendChild(htmlSubfaction);
    }
    return html;
}

function getSkillHtml(skill) {
    var htmlSkill = document.createElement("span");
    htmlSkill.className = "skill";
    htmlSkill.appendChild(getSkillIcon(skill.id));
    if (skill.all) htmlSkill.innerHTML += ("All");
    if (skill.s) htmlSkill.appendChild(getSkillIcon(skill.s));
    if (skill.y) htmlSkill.appendChild(getFactionIcon(skill.y));
    if (skill.x) htmlSkill.innerHTML += (skill.x);
    if (skill.c) htmlSkill.innerHTML += (skill.c);
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