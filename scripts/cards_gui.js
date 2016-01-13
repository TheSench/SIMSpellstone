
function clearCardSpace() {
    var cardSpace = document.getElementById("cardSpace");
    cardSpace.innerHTML = '';
}

function clearDeckSpace() {
    var cardSpace = document.getElementById("deck");
    cardSpace.innerHTML = '';
}

function draw_deck(deck, onclick) {
    var cardSpace = document.getElementById("deck");
    cardSpace.innerHTML = '';
    cardSpace.appendChild(makeDeckHTML(deck, onclick));
}

function makeDeckHTML(deck, onclick) {
    var deckHTML = createDiv("float-left");
    var commander = get_card_by_id(deck.commander);
    var htmlCard = create_card_html(commander, false, onclick);
    if (deck.commander.index !== undefined) {
        attr = document.createAttribute("data-index");
        attr.value = deck.commander.index;
        htmlCard.attributes.setNamedItem(attr);
    }
    deckHTML.appendChild(htmlCard);
    for (var i = 0, len = deck.deck.length; i < len; i++) {
        var deckEntry = deck.deck[i];
        var unit = get_card_by_id(deckEntry);
        var htmlCard = create_card_html(unit, false, onclick, i);
        if (deckEntry.index !== undefined) {
            attr = document.createAttribute("data-index");
            attr.value = deckEntry.index;
            htmlCard.attributes.setNamedItem(attr);
        }
        deckHTML.appendChild(htmlCard);
    }
    for (; i < 15; i++) {
        var htmlCard = createDiv("card");
        deckHTML.appendChild(htmlCard);
    }
    return deckHTML;
}

function draw_card_list(list, onclick) {
    var cardSpace = document.getElementById("cardSpace");
    cardSpace.innerHTML = '';
    var cards = createDiv("float-left");
    for (var i = 0, len = list.length; i < len; i++) {
        var listEntry = list[i];
        var unit = get_card_by_id(listEntry);
        var htmlCard = create_card_html(unit, false, onclick);
        if (listEntry.index !== undefined) {
            attr = document.createAttribute("data-index");
            attr.value = listEntry.index;
            htmlCard.attributes.setNamedItem(attr);
        }
        cards.appendChild(htmlCard);
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
    var divField = createDiv("field");
    divField.appendChild(draw_field(field.cpu));
    divField.appendChild(draw_field(field.player));
    cardSpace.appendChild(divField);
    cardSpace.appendChild(draw_hand(drawableHand, performTurns, turn));
    cardSpace.appendChild(document.createElement('br'));
    cardSpace.appendChild(document.createElement('br'));
}

function draw_field(field) {
    var cards = createDiv("float-left");
    var commander = field.commander;
    cards.appendChild(create_card_html(commander, true));
    var units = field.assaults;
    if (units) for (var i = 0, len = units.length; i < len; i++) {
        var unit = units[i];
        var htmlCard = create_card_html(unit, true);
        if (unit.timer) htmlCard.classList.add("inactive");
        cards.appendChild(htmlCard);
    }
    return cards;
}

function draw_hand(hand, callback, state) {
    var cards = createDiv("float-left hand");
    var units = field.assaults;
    for (var i = 0, len = hand.length; i < len; i++) {
        var unit = hand[i];
        if (!unit) continue;
        var htmlCard = create_card_html(unit);
        if (i === 0) htmlCard.classList.add("left");
        else if (i === 2) htmlCard.classList.add("right");
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

function create_card_html(card, onField, onclick, state) {
    var htmlCard = createDiv("card");
    var attr = document.createAttribute("data-id");
    attr.value = card.id;
    htmlCard.attributes.setNamedItem(attr);
    attr = document.createAttribute("data-level");
    attr.value = card.level;
    htmlCard.attributes.setNamedItem(attr);
    if (card.picture) {
        var imageUrl = 'res/cardImages/' + card.picture + '.jpg';
        var img = createImg(imageUrl);
        img.className = "card-image";
        htmlCard.appendChild(img);
    }
    if (card.isCommander()) {
        htmlCard.classList.add("commander");
    }
    htmlCard.classList.add(factions.names[card.type].toLowerCase());
    var divName = createDiv("card-name", card.name);
    htmlCard.appendChild(divName);
    if (!card.isCommander()) {
        if (onField) {
            if (!card.isUnjammed()) htmlCard.classList.add("frozen");
            var htmlAttack = createDiv("card-attack", card.adjustedAttack().toString());
            if (card.adjustedAttack() > card.attack) htmlAttack.classList.add("increased");
            else if (card.adjustedAttack() < card.attack) htmlAttack.classList.add("decreased");
        } else {
            var htmlAttack = createDiv("card-attack", card.attack.toString());
        }
        htmlCard.appendChild(createImg("res/cardAssets/Attack.png", "attack"));
        htmlCard.appendChild(htmlAttack);
        if (onField) {
            if (card.timer) {
                htmlCard.appendChild(createDiv("delay", card.timer));
                htmlCard.appendChild(createImg("res/cardAssets/Timer.png", "timer"));
            }
        } else {
            htmlCard.appendChild(createDiv("delay", card.cost));
            htmlCard.appendChild(createImg("res/cardAssets/Timer.png", "timer"));
        }
    }
    if (onField) {
        var htmlHealth = createDiv("card-health", card.health_left.toString());
        if (card.health_left < card.health) htmlHealth.classList.add("decreased");
    } else {
        var htmlHealth = createDiv("card-health", card.health.toString());
    }
    htmlCard.appendChild(createImg("res/cardAssets/Health.png", "health"));
    htmlCard.appendChild(htmlHealth);
    var divSkills = createDiv("card-skills");
    var skillsShort = createDiv("card-skills-short");
    getPassiveSkills(divSkills, skillsShort, card, onField);
    getSkillsHtml(divSkills, skillsShort, card.skill, onField);
    if (card.empowerSkills) getSkillsHtml(divSkills, skillsShort, card.empowerSkills, onField);
    getTriggeredSkills(divSkills, skillsShort, card, onField);
    var skillsDetail = divSkills.cloneNode(true);
    skillsDetail.className = "card-skills-detailed";
    if (skillsShort.hasChildNodes()) {
        htmlCard.appendChild(skillsShort);
        htmlCard.appendChild(divSkills);
        htmlCard.appendChild(skillsDetail);
    }
    //var faction = factions.names[card.type].toLowerCase();
    if (false) {
        var img = createImg('res/cardAssets/Frame_Aether_01.png');
        img.className = "card-image";
        htmlCard.insertBefore(img, divName);
    } else {
        htmlCard.appendChild(createDiv("faction"));
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
    if (card.rarity > 0) {
        var htmlLevel = createImg('res/cardAssets/' + "Level_" + card.rarity + "_" + card.level + ".png");
        htmlLevel.className = "level";
        if (card.id > 9999) {
            var fusion = ((card.id.toString()[0] == "1") ? "Dualfuse" : "Quadfuse");
            fusion = createImg('res/cardAssets/' + fusion + ".png");
            fusion.className = "fusion";
            htmlCard.appendChild(fusion);
        }
        htmlCard.appendChild(htmlLevel);
    }
    if (onclick) {
        htmlCard.addEventListener("click", (function (inner) {
            return function () {
                onclick(htmlCard, state);
            };
        })(htmlCard, state));
    }
    return htmlCard;
}

function getSkillsHtml(divSkills, skillsShort, skills, onField) {
    for (var i in skills) {
        var skill = skills[i];
        divSkills.appendChild(getSkillHtml(skill, onField));
        divSkills.appendChild(document.createElement('br'));
        skillsShort.appendChild(getSkillIcon(skill.id));
    }
}

function getPassiveSkills(divSkills, skillsShort, card, onField)
{
    getNonActivatedSkill(divSkills, skillsShort, onField, card, "evade");
    getNonActivatedSkill(divSkills, skillsShort, onField, card, "armored");
    getNonActivatedSkill(divSkills, skillsShort, onField, card, "counter");
}

function getTriggeredSkills(divSkills, skillsShort, card, onField) {
    getNonActivatedSkill(divSkills, skillsShort, onField, card, "pierce");
    getNonActivatedSkill(divSkills, skillsShort, onField, card, "burn");
    getNonActivatedSkill(divSkills, skillsShort, onField, card, "poison");
    getNonActivatedSkill(divSkills, skillsShort, onField, card, "leech");
    getNonActivatedSkill(divSkills, skillsShort, onField, card, "berserk");
    var flurry = card.flurry;
    if (flurry) {
        divSkills.appendChild(getSkillHtml(flurry, onField));
        divSkills.appendChild(document.createElement('br'));
        skillsShort.appendChild(getSkillIcon(flurry.id));
    }
}

function getNonActivatedSkill(divSkills, skillsShort, onField, card, skillName)
{
    var value = card[skillName];
    if (value) {
        var skill = {
            id: skillName,
            x: value
        };
        divSkills.appendChild(getSkillHtml(skill, onField));
        divSkills.appendChild(document.createElement('br'));
        skillsShort.appendChild(getSkillIcon(skill.id));
    }
}

function getSkillHtml(skill, onField) {
    var htmlSkill = document.createElement("span");
    htmlSkill.className = "skill";
    htmlSkill.appendChild(getSkillIcon(skill.id));
    if (skill.all) htmlSkill.innerHTML += (" All ");
    if (skill.s) htmlSkill.appendChild(getSkillIcon(skill.s));
    if (skill.y) htmlSkill.appendChild(getFactionIcon(skill.y));
    if (skill.x) htmlSkill.innerHTML += (" " + skill.x + " ");
    if (skill.c) {
        htmlSkill.innerHTML += (skill.c);
        if (onField) htmlSkill.innerHTML += " (" + (skill.countdown ? skill.countdown : "0") + ")";
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
        case 'protect_ice':
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
    if (card.attack_berserk) {
        var status = createStatus("berserk", card.attack_berserk);
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

function createImg(src, className) {
    var html = document.createElement("img");
    html.setAttribute("src", src);
    if (className) html.className = className;
    return html;
}

function createDiv(className, value) {
    var div = document.createElement("div");
    if (className) div.className = className;
    if (value !== undefined) div.innerHTML = value;
    return div;
}