﻿"use strict";
var CARD_GUI = {};
(function (){
    function clearCardSpace() {
        var cardSpace = document.getElementById("cardSpace");
        cardSpace.innerHTML = '';
    }

    function clearDeckSpace() {
        var cardSpace = document.getElementById("deck");
        cardSpace.innerHTML = '';
    }

    function draw_deck(deck, onclick, onrightclick) {
        var cardSpace = document.getElementById("deck");
        cardSpace.innerHTML = '';
        cardSpace.appendChild(makeDeckHTML(deck, onclick, onrightclick));
    }

    function makeDeckHTML(deck, onclick, onrightclick) {
        var deckHTML = createDiv("float-left");
        var commander = get_card_by_id(deck.commander);
        var htmlCard = create_card_html(commander, false, false, onclick, onrightclick);
        if (deck.commander.index !== undefined) {
            htmlCard.setAttribute("data-index", deck.commander.index);
        }
        deckHTML.appendChild(htmlCard);
        for (var i = 0, len = deck.deck.length; i < len; i++) {
            var deckEntry = deck.deck[i];
            var unit = get_card_by_id(deckEntry);
            var htmlCard = create_card_html(unit, false, false, onclick, onrightclick, i);
            if (deckEntry.index !== undefined) {
                htmlCard.setAttribute("data-index", deckEntry.index);
            }
            deckHTML.appendChild(htmlCard);
        }
        for (; i < 15; i++) {
            var htmlCard = createDiv("card");
            deckHTML.appendChild(htmlCard);
        }
        return deckHTML;
    }

    function draw_card_list(list, compactSkills, onclick, onrightclick) {
        var cardSpace = document.getElementById("cardSpace");
        cardSpace.innerHTML = '';
        var cards = createDiv("float-left");
        for (var i = 0, len = list.length; i < len; i++) {
            var listEntry = list[i];
            var unit = get_card_by_id(listEntry);
            var htmlCard = create_card_html(unit, compactSkills, false, onclick, onrightclick);
            if (listEntry.index !== undefined) {
                htmlCard.setAttribute("data-index", listEntry.index);
            }
            cards.appendChild(htmlCard);
        }
        cardSpace.appendChild(cards);
    }

    function draw_cards(field, drawableHand, callback, turn) {
        if (!drawableHand) drawableHand = [];
        var cardSpace = document.getElementById("cardSpace");
        cardSpace.innerHTML = '';
        if (turn) {
            var htmlTurnCounter = document.createElement("h1");
            htmlTurnCounter.innerHTML = "Turn: " + turn
            cardSpace.appendChild(htmlTurnCounter);
        }
        draw_fields(field);
        cardSpace.appendChild(draw_hand(drawableHand, callback, turn));
        cardSpace.appendChild(document.createElement('br'));
        cardSpace.appendChild(document.createElement('br'));
    }

    function draw_fields(field) {
        var cardSpace = document.getElementById("cardSpace");
        var divField = createDiv("field");
        divField.appendChild(draw_field(field.cpu));
        divField.appendChild(draw_field(field.player));
        cardSpace.appendChild(divField);
    }

    function draw_field(field) {
        var cards = createDiv("float-left");
        var commander = field.commander;
        cards.appendChild(create_card_html(commander, false, true));
        var units = field.assaults;
        if (units) for (var i = 0, len = units.length; i < len; i++) {
            var unit = units[i];
            var htmlCard = create_card_html(unit, false, true);
            if (unit.timer) htmlCard.classList.add("inactive");
            cards.appendChild(htmlCard);
        }
        return cards;
    }

    function draw_hand(hand, callback, state) {
        var cards = createDiv("float-left hand");
        for (var i = 0, len = hand.length; i < len; i++) {
            var unit = hand[i];
            if (!unit) continue;
            var htmlCard = create_card_html(unit, false);
            if (hand.choice == i) {
                htmlCard.style.outline = "5px solid LawnGreen";
            }
            if (i === 0) htmlCard.classList.add("left");
            else if (i === 2) htmlCard.classList.add("right");
            var cardidx = i;
            if (callback) {
                htmlCard.addEventListener("click", (function (inner) {
                    return function () {
                        choice = inner;
                        callback(state);
                    };
                })(i));
            }
            cards.appendChild(htmlCard);
        }
        return cards;
    }

    function create_card_html(card, compactSkills, onField, onclick, onrightclick, state) {
        var htmlCard = createDiv("card");
        // Add ID to card
        htmlCard.setAttribute("data-id", card.id);
        // Add level to card
        htmlCard.setAttribute("data-level", card.level);
        // Add Rune(s) to card
        var runes = card.runes;
        var runeIDs = [];
        var boosts = {};
        for (var i = 0, len = runes.length; i < len; i++) {
            var runeID = runes[i].id;
            runeIDs.push(runes[i].id);
            var rune = RUNES[runeID];
            for (var key in rune.stat_boost) {
                if (key == "skill") {
                    key = rune.stat_boost.skill.id;
                }
                boosts[key] = true;
            }
        }
        var highlighted = card.highlighted;
        if (highlighted) for (var i = 0; i < highlighted.length; i++) {
            var key = highlighted[i];
            boosts[key] = true;
        }
        htmlCard.setAttribute("data-runeids", runeIDs.join(","));

        if (card.picture) {
            var icon = document.createElement("i");
            if (card.picture.indexOf("portrait_") == 0) {
                icon.className = 'portrait portrait-' + card.picture;
            } else {
                icon.className = 'sprite sprite-' + card.picture;
            }
            htmlCard.appendChild(icon);
        }
        if (card.isCommander()) {
            htmlCard.classList.add("commander");
        }
        htmlCard.classList.add(factions.names[card.type].toLowerCase());
        var cardName = (card.uid !== undefined ? "(" + card.uid + ") " : "") + card.name;
        var divName = createDiv("card-name", cardName);
        htmlCard.appendChild(divName);
        if (!card.isCommander()) {
            if (onField) {
                if (!card.isUnjammed()) htmlCard.classList.add("frozen");
                var htmlAttack = createDiv("card-attack", card.adjustedAttack().toString());
                if (card.adjustedAttack() > card.attack) htmlAttack.classList.add("increased");
                else if (card.adjustedAttack() < card.attack) htmlAttack.classList.add("decreased");
                else if (boosts.attack) htmlAttack.classList.add("increased");
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
            else if (boosts.health) htmlHealth.classList.add("increased");
        } else {
            var htmlHealth = createDiv("card-health", card.health.toString());
            if (boosts.health) htmlHealth.classList.add("increased");
        }
        htmlCard.appendChild(createImg("res/cardAssets/Health.png", "health"));
        htmlCard.appendChild(htmlHealth);
        var divSkills = createDiv("card-skills");
        var skillsShort = createDiv("card-skills-short");
        getPassiveSkills(divSkills, skillsShort, card, onField, boosts);
        if (card.empowerSkills) getSkillsHtml(divSkills, skillsShort, card.empowerSkills, onField);
        getSkillsHtml(divSkills, skillsShort, card.skill, onField);
        getTriggeredSkills(divSkills, skillsShort, card, onField, boosts);
        var skillsDetail = divSkills.cloneNode(true);
        skillsDetail.className = "card-skills-detailed";
        if (skillsShort.hasChildNodes()) {
            if (compactSkills) {
                htmlCard.appendChild(skillsShort);
                htmlCard.appendChild(divSkills);
            } else {
                htmlCard.appendChild(skillsDetail);
            }
        }
        htmlCard.appendChild(createDiv("faction"));
        if (onField) {
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
        }
        if (card.set) {
            var htmlSet = getSetIcon(card.set);
            htmlSet.className = "set";
            htmlCard.appendChild(htmlSet);
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
        } else if (card.maxLevel > 1) {
            var htmlLevel = createImg('res/cardAssets/' + card.maxLevel + "_" + card.level + ".png");
            htmlLevel.className = "level";
            htmlCard.appendChild(htmlLevel);
        }
        if (onclick) {
            htmlCard.addEventListener("click", (function (inner) {
                return function () {
                    return onclick(htmlCard, state);
                };
            })(htmlCard, state));
        }
        if (onrightclick) {
            htmlCard.oncontextmenu = (function (inner) {
                return function () {
                    return onrightclick(htmlCard, state);
                };
            })(htmlCard, state);
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

    function getPassiveSkills(divSkills, skillsShort, card, onField, boosts) {
        getNonActivatedSkill(divSkills, skillsShort, onField, card, "evade", boosts);
        getNonActivatedSkill(divSkills, skillsShort, onField, card, "armored", boosts);
        getNonActivatedSkill(divSkills, skillsShort, onField, card, "counter", boosts);
    }

    function getTriggeredSkills(divSkills, skillsShort, card, onField, boosts) {
        getNonActivatedSkill(divSkills, skillsShort, onField, card, "pierce", boosts);
        getNonActivatedSkill(divSkills, skillsShort, onField, card, "burn", boosts);
        getNonActivatedSkill(divSkills, skillsShort, onField, card, "poison", boosts);
        getNonActivatedSkill(divSkills, skillsShort, onField, card, "leech", boosts);
        getNonActivatedSkill(divSkills, skillsShort, onField, card, "berserk", boosts);
        var flurry = card.flurry;
        if (flurry) {
            divSkills.appendChild(getSkillHtml(flurry, onField));
            divSkills.appendChild(document.createElement('br'));
            skillsShort.appendChild(getSkillIcon(flurry.id));
        }
    }

    function getNonActivatedSkill(divSkills, skillsShort, onField, card, skillName, boosts) {
        var value = card[skillName];
        if (value) {
            var skill = {
                id: skillName,
                x: value,
                boosted: boosts[skillName]
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
        if (skill.boosted) {
            htmlSkill.classList.add("increased");
        }
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
                iconName = 'Barrier.png';
                break;
            case 'protect_ice':
                iconName = "Iceshatter.png";
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
        /*
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
        */
        if (card.poisoned) {
            var status = createStatus("poison", card.poisoned);
            debuffs.push(status);
        }
        if (card.scorched && card.scorched.amount) {
            var status = createStatus("burn", card.scorched.amount);
            debuffs.push(status);
        }

        var buffs = [];
        /*
        if (card.attack_rally) {
            var status = createStatus("rally", card.attack_rally);
            buffs.push(status);
        }
        if (card.attack_berserk) {
            var status = createStatus("berserk", card.attack_berserk);
            buffs.push(status);
        }
        */
        if (card.protected) {
            var status = createStatus("protect", card.protected);
            buffs.push(status);
        }
        /*
        if (card.enhanced) {
            for (var key in card.enhanced) {
                if (key == 'counter' || key == 'armored' || key == 'evade') {
                    var status = createStatus(key, "+" + card.enhanced[key]);
                    buffs.push(status);
                }
            }
        }
        */

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

    function getSetIcon(set) {
        var setName = setNames[set];
        return createImg('res/cardAssets/' + setName + '.png');
    }

    function getFactionIcon(factionID) {
        var factionName = factions.names[factionID];
        return createImg('res/factions/' + factionName + '.png');
    }

    var setNames = {
        1000: "Basic",
        7000: "Basic",
        2000: "Reward",
        3000: "Premium",
        4000: "BoxOnly",
        9999: "StoryElements"
    }

    CARD_GUI.clearCardSpace = clearCardSpace;
    CARD_GUI.clearDeckSpace = clearDeckSpace;
    CARD_GUI.draw_deck = draw_deck;
    CARD_GUI.makeDeckHTML = makeDeckHTML;
    CARD_GUI.draw_card_list = draw_card_list;
    CARD_GUI.draw_cards = draw_cards;
})();

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