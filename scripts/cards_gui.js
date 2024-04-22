﻿"use strict";
var CARD_GUI = {};
(function() {
    var assetsRoot = '';

    function clearCardSpace() {
        var cardSpace = $("#cardSpace").empty();
    }

    function clearDeckSpace() {
        var cardSpace = document.getElementById("deck");
        cardSpace.innerHTML = '';
    }

    function draw_deck(deck, noblanks) {
        var $deck = $("#deck");
        $deck.children().remove();
        $deck.append(makeDeckHTML(deck, noblanks));
        return $deck;
    }

    function makeDeckHTML(deck, noblanks, battlegrounds) {
        var cards = [];
        var commander = getCardByID(deck.commander);
        cards.push(create_card_html(commander, false, false));
        for (var i = 0, len = deck.deck.length; i < len; i++) {
            var deckEntry = deck.deck[i];
            if (battlegrounds) {
                var unit = get_card_apply_battlegrounds(deckEntry, battlegrounds);
            } else {
                var unit = getCardByID(deckEntry);
            }
            cards.push(create_card_html(unit, false, false));
        }
        if (!noblanks)
            for (; i < 15; i++) {
                cards.push(createDiv("card blank"));
            }
        return cards;
    }

    function draw_card_list(list, compactSkills, onclick, onrightclick, skip, end) {
        var cards = make_card_list(list, compactSkills, null, null, /*onclick, onrightclick,*/ skip, end);
        var $cardSpace = $("#cardSpace");
        $cardSpace.empty();
        $cardSpace.append(cards);

        return $cardSpace;
    }

    function draw_inventory(list) {
        var cards = make_card_list(list);
        var $cardSpace = $("#deck");
        $cardSpace.children().remove();
        $cardSpace.append(cards);
        return $cardSpace;
    }

    function draw_inventory(deck) {
        var cards = make_card_list(deck.deck);
        var $cardSpace = $("#deck");
        $cardSpace.children().remove();
        $cardSpace.append(make_card_list([deck.commander]));
        //$deck.find(".card").hide();
        $cardSpace.append(cards);
        return $cardSpace;
    }

    function make_card_list(list, compactSkills, onclick, onrightclick, skip, end) {
        skip = skip || 0;
        var htmlCard;
        var lastUnit;
        var multiplier;
        var uniqueCard = 0;
        var cards = [];
        for (var i = 0, len = list.length; i < len && (!end || uniqueCard < end); i++) {
            var listEntry = list[i];
            var unit = getCardByID(listEntry);
            if (areEqual(unit, lastUnit)) {
                multiplier++;
            } else {
                if ((uniqueCard >= skip)) {
                    addMult(htmlCard, multiplier);
                    multiplier = 1;
                    htmlCard = create_card_html(unit, compactSkills, false, onclick, onrightclick, null, i);
                    htmlCard.setAttribute("data-i", i);
                    if (listEntry.index !== undefined) {
                        htmlCard.setAttribute("data-index", listEntry.index);
                    }
                    cards.push(htmlCard);
                }
                lastUnit = unit;
                uniqueCard++;
            }
        }
        addMult(htmlCard, multiplier);
        return cards;
    }

    function doDrawField(field, drawableHand, callback, turn, activeUnit) {
        if (!drawableHand) drawableHand = [];
        var fieldHTML = [];
        if (turn) {
            var htmlTurnCounter = document.createElement("h1");
            htmlTurnCounter.innerHTML = "Turn: " + turn + " (Currently at " + SIMULATOR.calculatePoints(true) + " points)";
            fieldHTML.push(htmlTurnCounter);
        }

        var divField = createDiv("field");
        var activeUnitOwner = null;
        if (activeUnit) {
            var activeUnitOwner = activeUnit.owner;
            if (activeUnit.isCommander()) {
                activeUnit = -1;
            } else {
                activeUnit = activeUnit.key;
            }
        }
        if (activeUnitOwner === 'player') {
            divField.appendChild(draw_field(field.cpu));
            divField.appendChild(draw_field(field.player, activeUnit));
        } else {
            divField.appendChild(draw_field(field.cpu, activeUnit));
            divField.appendChild(draw_field(field.player));
        }
        fieldHTML.push(divField);
        fieldHTML.push(draw_hand(drawableHand, callback, turn));
        fieldHTML.push(document.createElement('br'));
        fieldHTML.push(document.createElement('br'));
        return fieldHTML;
    }

    function draw_cards(field, drawableHand, callback, turn) {
        var fieldHTML = doDrawField(field, drawableHand, callback, turn);
        $("#cardSpace").children().remove().end().append(fieldHTML);
    }

    function draw_field(field, activeUnit) {
        var cards = createDiv("float-left");
        var commander = field.commander;
        var htmlCard = create_card_html(commander, false, true);
        if (activeUnit === -1) {
            highlightCard(htmlCard);
        }
        cards.appendChild(htmlCard);
        var units = field.assaults;
        if (units)
            for (var i = 0, len = units.length; i < len; i++) {
                var unit = units[i];
                var htmlCard = create_card_html(unit, false, true);
                if (unit.timer) htmlCard.classList.add("inactive");
                if (activeUnit === i) {
                    highlightCard(htmlCard);
                }
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
            if (i === 0) htmlCard.classList.add("left");
            else if (i === 2) htmlCard.classList.add("right");
            else if (i > 2) htmlCard.classList.add("inactive");
            var cardidx = i;
            if (callback) {
                htmlCard.addEventListener("click", (function(inner) {
                    return function() {
                        SIMULATOR.choice = inner;
                        callback(state);
                    };
                })(i));
            }
            cards.appendChild(htmlCard);
        }
        return cards;
    }

    function highlightCard(htmlCard) {
        htmlCard.style.outline = "5px solid LawnGreen";
    }

    function addMult(htmlCard, multiplier) {
        // Handle range values
        var iMult = parseInt(multiplier);
        if (iMult == multiplier) {
            multiplier = (iMult > 1 ? iMult : null);
        }
        if (multiplier) {
            var multDiv = createDiv("multiplier", "x" + multiplier);
            multDiv.setAttribute("data-count", multiplier);
            var multIcon = createImg(getAssetPath("cardAssets") + "multiplier.png", "multiplier");
            htmlCard.appendChild(multIcon);
            htmlCard.appendChild(multDiv);
        }
    }

    function addWeight(htmlCard, weight) {
        if (weight > 0) {
            var weightDiv = createDiv("weight", (weight * 100).toFixed(2) + "%");
            weightDiv.setAttribute("data-count", weight);
            var weightIcon = createImg(getAssetPath("cardAssets") + "multiplier.png", "weight");
            htmlCard.appendChild(weightIcon);
            htmlCard.appendChild(weightDiv);
        }
    }

    function createItemHTML(name, quantity, image) {
        var htmlCard = createDiv("card item");

        var background = document.createElement("i");
        background.className = 'sprite sprite-Item';
        htmlCard.appendChild(background);
        if (image) {
            image = createImg(getAssetPath("items") + image + ".png");
            image.className = 'item-image';
            htmlCard.appendChild(image);
        }
        var divName = createDiv("card-name", name);
        htmlCard.appendChild(divName);
        htmlCard.classList.add('factionless');
        htmlCard.appendChild(createDiv("faction"));
        addMult(htmlCard, quantity);
        return htmlCard;
    }

    function create_card_html(card, compactSkills, onField, onclick, onrightclick, onmouseover, state) {
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
            var rune = getRune(runeID);
            for (var key in rune.stat_boost) {
                if (key == "skill") {
                    key = rune.stat_boost.skill.id;
                }
                boosts[key] = true;
            }
        }
        var highlighted = card.highlighted;
        if (highlighted)
            for (var i = 0; i < highlighted.length; i++) {
                var key = highlighted[i];
                boosts[key] = true;
            }
        htmlCard.setAttribute("data-runeids", runeIDs.join(","));

        var picture = loadCard(card.id).picture;
        if (picture) {
            var icon = document.createElement("i");
            if (picture.indexOf("portrait_") == 0) {
                icon.className = 'portrait portrait-' + picture;
            } else {
                icon.className = 'sprite sprite-' + picture;
            }
            htmlCard.appendChild(icon);
        }
        if (card.isCommander()) {
            htmlCard.classList.add("commander");
        }
        htmlCard.classList.add(factions.names[card.type].toLowerCase());
        var cardName = (card.uid !== undefined ? "(" + card.uid + ") " : "") + card.name;
        var divName = createDiv("card-name", cardName);
        var divID = createDiv("card-id", "(" + card.id + ")");
        divName.appendChild(divID);
        htmlCard.appendChild(divName);
        if (!card.isCommander()) {
            if (card.attack >= 0) {
                if (onField) {
                    if (!card.isUnjammed()) htmlCard.classList.add("frozen");
                    var htmlAttack = createDiv("card-attack", card.adjustedAttack().toString());
                    if (card.adjustedAttack() > card.attack) htmlAttack.classList.add("increased");
                    else if (card.adjustedAttack() < card.attack) htmlAttack.classList.add("decreased");
                    else if (boosts.attack) htmlAttack.classList.add("increased");
                } else {
                    var htmlAttack = createDiv("card-attack", card.attack.toString());
                    if (boosts.attack) htmlAttack.classList.add("increased");
                }
                htmlCard.appendChild(createImg(getAssetPath("cardAssets") + "Attack.png", "attack"));
                htmlCard.appendChild(htmlAttack);
            }

            if (card.cost >= 0) {
                if (onField) {
                    if (card.timer) {
                        htmlCard.appendChild(createDiv("delay", card.timer));
                        htmlCard.appendChild(createImg(getAssetPath("cardAssets") + "Timer.png", "timer"));
                    }
                } else {
                    htmlCard.appendChild(createDiv("delay", card.cost));
                    htmlCard.appendChild(createImg(getAssetPath("cardAssets") + "Timer.png", "timer"));
                }
            }
        }
        if (card.health >= 0) {
            if (onField) {
                var htmlHealth = createDiv("card-health", card.health_left.toString());
                if (card.health_left < card.health) htmlHealth.classList.add("decreased");
                else if (boosts.health) htmlHealth.classList.add("increased");
            } else {
                var htmlHealth = createDiv("card-health", card.health.toString());
                if (boosts.health) htmlHealth.classList.add("increased");
            }
            htmlCard.appendChild(createImg(getAssetPath("cardAssets") + "Health.png", "health"));
            htmlCard.appendChild(htmlHealth);
        }
        var divSkills = createDiv("card-skills");
        var skillsShort = createDiv("card-skills-short");
        if (card.earlyActivationSkills) getSkillsHtml(card, divSkills, skillsShort, card.earlyActivationSkills, onField, boosts);
        getSkillsHtml(card, divSkills, skillsShort, card.skill, onField, boosts);
        if (card.onDeathSkills) getSkillsHtml(card, divSkills, skillsShort, card.onDeathSkills, onField, boosts);
        getPassiveSkills(divSkills, skillsShort, card, onField, boosts);
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
        var subFactions = card.sub_type;
        if (subFactions.length) {
            var subFactionsDiv = createDiv("subfaction");
            for (var i = 0; i < subFactions.length; i++) {
                var subFactionID = subFactions[i];
                if (subFactionID) {
                    var htmlSubfaction = getFactionIcon(subFactionID);
                    subFactionsDiv.appendChild(htmlSubfaction);
                }
            }
            htmlCard.appendChild(subFactionsDiv);
        }
        if (card.rarity > 0) {
            if (card.maxLevel > Number(card.rarity) + 2) {
                var htmlLevel = createImg(getAssetPath("cardAssets") + "Level_" + card.rarity + "_" + card.maxLevel + "_" + card.level + ".png");
            } else {
                var htmlLevel = createImg(getAssetPath("cardAssets") + "Level_" + card.rarity + "_" + card.level + ".png");
            }
            htmlLevel.className = "level";
            if (card.id > 9999) {
                var fusion = ((card.id.toString()[0] == "1") ? "Dualfuse" : "Quadfuse");
                fusion = createImg(getAssetPath("cardAssets") + fusion + ".png");
                fusion.className = "fusion";
                htmlCard.appendChild(fusion);
            }
            htmlCard.appendChild(htmlLevel);
        } else if (card.maxLevel > 1) {
            var htmlLevel = createImg(getAssetPath("cardAssets") + card.maxLevel + "_" + card.level + ".png");
            htmlLevel.className = "level";
            htmlCard.appendChild(htmlLevel);
        }
        if (onclick) {
            htmlCard.addEventListener("click", (function(inner) {
                return function() {
                    return onclick(htmlCard, state);
                };
            })(htmlCard, state));
        }
        if (onrightclick) {
            htmlCard.oncontextmenu = (function(inner) {
                return function() {
                    return onrightclick(htmlCard, state);
                };
            })(htmlCard, state);
        }
        if (onmouseover) {
            htmlCard.onmouseover = (function(inner) {
                return function() {
                    return onmouseover(htmlCard, state);
                };
            })(htmlCard, state);
        }
        return htmlCard;
    }

    function getSkillsHtml(card, divSkills, skillsShort, skills, onField, boosts) {
        for (var i = 0; i < skills.length; i++) {
            var origSkill = skills[i];
            var skill = {
                all: origSkill.all,
                boosted: origSkill.boosted,
                c: origSkill.c,
                countdown: origSkill.countdown,
                id: origSkill.id,
                s: origSkill.s,
                x: origSkill.x,
                y: origSkill.y,
                boosted: boosts[origSkill.id]
            };
            divSkills.appendChild(getSkillHtml(card, skill, onField, i));
            divSkills.appendChild(document.createElement('br'));
            skillsShort.appendChild(getSkillIcon(skill.id));
        }
    }

    function getPassiveSkills(divSkills, skillsShort, card, onField, boosts) {
        var passiveSkills = Object.getOwnPropertyNames(SKILL_DATA).filter(function(skillID) {
            return ["passive", "toggle"].indexOf(SKILL_DATA[skillID].type) >= 0;
        }).forEach(function(skill) {
            getNonActivatedSkill(divSkills, skillsShort, onField, card, skill, boosts);
        });
        var flurry = card.flurry;
        if (flurry) {
            divSkills.appendChild(getSkillHtml(card, flurry, onField));
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
            divSkills.appendChild(getSkillHtml(card, skill, onField));
            divSkills.appendChild(document.createElement('br'));
            skillsShort.appendChild(getSkillIcon(skill.id));
        }
    }

    function getSkillHtml(card, skill, onField, i) {
        var htmlSkill = document.createElement("span");
        htmlSkill.className = "skill";
        htmlSkill.appendChild(getSkillIcon(skill.id));
        htmlSkill.innerHTML += ' ';
        var imbued = isImbued(card, skill.id, i);
        var enhancement = getEnhancement(card, skill.id, skill.x);
        if (imbued) {
            htmlSkill.classList.add("imbued");
        } else if (skill.boosted || enhancement) {
            htmlSkill.classList.add("increased");
        }
        if (skill.all) htmlSkill.innerHTML += ('All ');
        if (skill.y) {
            htmlSkill.appendChild(getFactionIcon(skill.y));
            htmlSkill.innerHTML += ' ';
        }
        if (skill.s) {
            htmlSkill.appendChild(getSkillIcon(skill.s));
            htmlSkill.innerHTML += ' ';
        }
        var x = (skill.x | 0) + enhancement;
        if (x) htmlSkill.innerHTML += (x + ' ');
        if (skill.c) {
            htmlSkill.innerHTML += (skill.c);
            if (onField) htmlSkill.innerHTML += " (" + (skill.countdown ? skill.countdown : "0") + ")";
        }
        return htmlSkill;
    }

    function getSkillIcon(skillID) {
        var src = getAssetPath("skills");

        var skillData = SKILL_DATA[skillID];
        var iconName = (skillData ? skillData.icon : skillID) + ".png";
        src += iconName;
        var icon = createImg(src);
        switch (skillID) {
            case 'weakenself':
            case 'enlarge':
                icon.classList.add("affect-self");
                break;
            default:
                break;
        }
        icon.title = (skillData ? skillData.name : skillID);
        return icon;
    }

    function getStatuses(card) {
        var debuffs = [];
        /*
        if (card.attack_weaken) {
        	var status = createStatus("weaken", card.attack_weaken);
        	debuffs.push(status);
        }
        */
        if (card.enfeebled) {
            var status = createStatus("enfeeble", card.enfeebled);
            debuffs.push(status);
        }
        if (card.envenomed) {
            var status = createStatus("venom", card.envenomed);
            debuffs.push(status);
        }
        if (card.marked) {
            var status = createStatus("enfeeble", card.marked);
            debuffs.push(status);
        }
        /*
        if (card.jammed) {
        	var status = createStatus("jam");
        	debuffs.push(status);
        }
        */
        if (card.nullified) {
            var status = createStatus("nullify", card.nullified);
            debuffs.push(status);
        }
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
        if (card.enraged) {
            var status = createStatus("enrage", card.enraged);
            debuffs.push(status);
        }
        if (card.protected) {
            var status = createStatus("protect", card.protected);
            buffs.push(status);
        }
        if (card.invisible) {
            var status = createStatus("evade", card.invisible);
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

    function getSetIcon(set) {
        var setName = setNames[set];
        return createImg(getAssetPath('cardAssets') + setName + '.png');
    }

    function getFactionIcon(factionID) {
        var factionName = factions.names[factionID];
        return createImg(getAssetPath('factions') + factionName + '.png');
    }

    function getAssetPath(subpath) {
        return assetsRoot + 'res/' + subpath + '/';
    }

    var setNames = {
        1000: "Basic",
        1100: "Legacy",
        7000: "Basic",
        2000: "Reward",
        2100: "Reward",
        3000: "Premium",
        4000: "BoxOnly",
        5000: "Champion",
        5100: "PremiumChampion",
        5200: "Champion",
        9999: "StoryElements"
    };

    CARD_GUI.clearCardSpace = clearCardSpace;
    CARD_GUI.clearDeckSpace = clearDeckSpace;
    CARD_GUI.draw_deck = draw_deck;
    CARD_GUI.create_card_html = create_card_html;
    CARD_GUI.makeDeckHTML = makeDeckHTML;
    CARD_GUI.draw_card_list = draw_card_list;
    CARD_GUI.draw_cards = draw_cards;
    CARD_GUI.doDrawField = doDrawField;
    CARD_GUI.draw_inventory = draw_inventory;
    CARD_GUI.draw_hand = draw_hand;
    CARD_GUI.createItemHTML = createItemHTML;
    CARD_GUI.addMult = addMult;
    CARD_GUI.addWeight = addWeight;
    CARD_GUI.setNames = setNames;

    Object.defineProperties(CARD_GUI, {
        assetsRoot: {
            get: function() {
                return assetsRoot;
            },
            set: function(value) {
                assetsRoot = value;
            }
        }
    });
})();

function createImg(src, className) {
    return $("<img>").addClass(className).attr("src", src)[0];
}

function createDiv(className, value) {
    return $("<div>").addClass(className).html(value)[0];
}

function createSpan(className, value) {
    return $("<span>").addClass(className).html(value)[0];
}