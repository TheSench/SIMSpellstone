var DeckRetriever = (function () {

    var baseURL = "https://crossorigin.me/https://spellstone.synapse-games.com/api.php?";
    var baseRequest = {};
    var form;

    function HideLoadingSplash() {
        $("body").removeClass("loading");
    }

    function DisplayLoadingSplash() {
        $("body").addClass("loading");
    }

    function getFieldsFromRequest() {
        var existingRequest = document.getElementById("request_json").value;
        if (existingRequest.length > 0) {
            existingRequest = JSON.parse(existingRequest);
            existingRequest = existingRequest.request;

            baseRequest.user_id = existingRequest.user_id;
            baseRequest.password = existingRequest.password;
        }
    }

    function retrieveGuildDecks(draw, callback) {
        clearDeckSpace();
        getFactionMembers(draw, callback);
    }

    function getRequestParams(messageType, additionalParams) {
        var request = { message: messageType };
        if (!baseRequest.user_id) baseRequest = requestFields
        request = $.extend(request, baseRequest);
        if (additionalParams) request = $.extend(request, additionalParams);

        var str = [];
        for (var param in request) {
            if (request.hasOwnProperty(param)) {
                str.push(encodeURIComponent(param) + "=" + encodeURIComponent(request[param]));
            }
        }
        return str.join("&");
    }


    function sendRequest(messageType, params, callback) {
        if (!baseRequest.user_id) {
            throw "Missing user id";
        }
        var params = getRequestParams(messageType, params);
        $.ajax({
            url: baseURL + params,
            async: false,
            cache: false,
            dataType: 'json', /* Optional - jQuery autodetects this by default */
            success: function (response) {
                callback(response);
                HideLoadingSplash();
            },
            failure: HideLoadingSplash,
        });
    }

    function retrieveMyDeck() {
        clearDeckSpace();
        getUserDeck(baseRequest.user_id, true);
    }

    function updateMyDeck(newCommander, newDeck) {
        var params = {
            deck_id: "1",
            cards: newDeck,
            commander_index: newCommander,
            activeYN: "0",
        }

        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('setDeckCards', params, function (response) {
                alert("Deck has been updated - refresh Spellstone before using in-game Deck Editor.");
                HideLoadingSplash();
            });
        }, 1);
    }

    function upgradeCard(index) {
        var params = {
            unit_index: index,
        }

        DisplayLoadingSplash(); 
        setTimeout(function () {
            sendRequest('upgradeUnit', params, function (response) {
                HideLoadingSplash();
            });
        }, 1);
    }

    function fuseCards(fusion, index1, index2) {
        var params = {
            fusion_id: fusion,
            components: [index1, index2]
        }

        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('startFusion', params, function (response) {
                HideLoadingSplash();
            });
        }, 1);
    }

    function getFullUserData() {
        clearDeckSpace();
        
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('init', null, function (response) {
                getInventory(response);
                HideLoadingSplash();
            });
        }, 1);
    }

    function startCampaignBattle(mission_id) {
        var params = {
            campaign: mission_id
        }

        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('startCampaign', params, function (response) {
                beginBattle(response);
                HideLoadingSplash();
            });
        }, 1);
    }

    function startBountyBattle(target_user_id) {
        var params = {
            rival_id: target_user_id
        }

        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('startHuntingBattle', params, function (response) {
                beginBattle(response);
                HideLoadingSplash();
            });
        }, 1);
    }

    function startGuildWarBattle() {
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('fightGuildWar', null, function (response) {
                beginBattle(response);
                HideLoadingSplash();
            });
        }, 1);
    }

    function startClashBattle() {
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('startClashBattle', null, function (response) {
                beginBattle(response);
                HideLoadingSplash();
            });
        }, 1);
    }

    function fightGuildMember(target_user_id) {
        var params = {
            target_user_id: target_user_id
        }

        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('startHuntingBattle', params, function (response) {
                beginBattle(response);
                HideLoadingSplash();
            });
        }, 1);
    }

    function playCard(card_index) {
        var params = {
            battle_id: 0,
            skip: 0,
            card_uid: card_index,
            host_id: baseRequest.user_id
        }

        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('playCard', params, function (response) {
                continueBattle(response);
                HideLoadingSplash();
            });
        }, 1);
    }

    function forfeitBattle() {
        var params = {
            battle_id: 0,
            skip: 0,
            hist_id: baseRequest.user_id
        }

        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('forfeitBattle', params, function (response) {
                continueBattle(response);
                HideLoadingSplash();
            });
        }, 1);
    }

    function getFactionMembers(draw, callback) {
        
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('updateFaction', null, function (response) {
                var members = response.faction.members;
                publicInfo.factionDecks = {};
                for (var key in members) {
                    getUserDeck(key, draw);
                }
                HideLoadingSplash();
                callback();
            });
        }, 1);
    }

    function getUserDeck(target_user_id, draw) {
        var params = {
            target_user_id: target_user_id
        }

        sendRequest('getProfileData',  params, function (response) {
            if (draw) {
                onGetUserDeck(response);
            } else {
                var name = response.player_info.name;
                var deck_info = response.player_info.deck;
                var deck = getDeckFromDeckInfo(deck_info);
                publicInfo.factionDecks[name] = deck;
            }
        });
    }

    function getDecksFromJSON(field) {
        var data = JSON.parse(field.value);
        var deck_player = { deck: [] };
        var deck_cpu = { deck: [] };
        var card_map = data.battle_data.card_map;
        
        try
        {
            var commander = data.battle_data.attack_commander;
            deck_player.commander = { id: commander.unit_id, level: commander.level };
            commander = data.battle_data.defend_commander;
            deck_cpu.commander = { id: commander.unit_id, level: commander.level };

            for (var key in card_map) {
                var unit = card_map[key];
                unit = { id: unit.unit_id, level: unit.level };
                if (key <= 15) {
                    deck_player.deck.push(unit);
                } else {
                    deck_cpu.deck.push(unit);
                }
            }
        }
        catch(err)
        {
        }

        deck_player = hash_encode(deck_player);
        deck_cpu = hash_encode(deck_cpu);
        document.getElementById("deck").value = deck_player;
        document.getElementById("deck2").value = deck_cpu;
        var d = document.getElementById("exactorder");
        if (d) d.checked = true;
        d = document.getElementById("ordered2");
        if (d) d.checked = true;
        d = document.getElementById("exactorder2");
        if (d) d.checked = true;
    }

    function onGetUserDeck(data) {
        var deck_info = data.player_info.deck;
        drawDeck(deck_info, data.player_info.name);
    }

    function getDeckFromDeckInfo(deck_info) {
        var commander = deck_info.commander;
        var deck = {
            commander: { id: commander.unit_id, level: commander.level },
            deck: [],
        }

        var units = deck_info.units
        for (var i = 0; i < units.length; i++) {
            var unit = units[i];
            var runes = unit.runes;
            unit = { id: unit.unit_id, level: unit.level, runes: [] };
            for(var key in runes) {
                unit.runes.push({ id: runes[key].item_id });
            }
            deck.deck.push(unit);
        }
        return deck;
    }

    function drawDeck(deck_info, name) {
        var deck = getDeckFromDeckInfo(deck_info);
        var div = doDrawDeck(deck, name);
        var hash = hash_encode(deck);
        div.appendChild($('<div><label style="float:left;" class="button" onclick="open_deck_builder(\'' + name + '\', \'' + hash + '\');"><b>Deck Builder</b></label>')[0]);
        div.appendChild(
            $('<input>').attr('type', 'text').attr('value', hash).width(500)[0]
        );
        div.appendChild(document.createElement("br"));
        div.appendChild(document.createElement("hr"));
        var cardSpace = document.getElementById("deck");
        cardSpace.appendChild(div);
    }

    function doDrawDeck(deck, name) {
        var nameDiv = createDiv("float-left", name);
        nameDiv.style.fontSize = "xx-large";
        nameDiv.style.fontWeight = "bold";
        var div = document.createElement("div");
        div.appendChild(document.createElement("br"));
        div.appendChild(nameDiv);
        div.appendChild(makeDeckHTML(deck));
        div.appendChild(document.createElement("br"));
        return div;
    }

    function getInventory(data) {
        var name = data.user_data.name;
        var cardSpace = document.getElementById("deck");
        var deck = getDeckFromDeckInfo(data.user_decks[1]);
        var div = doDrawDeck(deck, name);
        cardSpace.appendChild(div);
        var hash = hash_encode(deck);

        var deck = {
            commander: elariaCaptain,
            deck: [],
        }
        var units = data.user_units;
        for (var i in units) {
            var unit = units[i];
            deck.deck.push({ id: unit.unit_id, level: unit.level, index: unit.unit_index });
        }
        deck.deck.sort(function (unit1, unit2) {
            if (unit1.id < unit2.id) return -1;
            if (unit1.id > unit2.id) return 1;
            if (unit1.level < unit2.level) return -1;
            if (unit1.level > unit2.level) return 1;
            if (unit1.id < unit2.id) return 0;
        });
        var inventory = hash_encode(deck);


        var nameDiv = createDiv("float-left", "Inventory");
        nameDiv.style.fontSize = "xx-large";
        nameDiv.style.fontWeight = "bold";
        var div = document.createElement("div");
        div.appendChild($('<div><label style="float:left;" class="button" onclick="open_deck_builder(\'' + name + '\', \'' + hash + '\');"><b>Deck Builder</b></label>')[0]);
        div.appendChild($('<div><label style="float:left;" class="button" onclick="open_deck_builder(\'' + name + '\', \'' + hash + '\', \'' + inventory + '\');"><b>Deck Builder (w/ Inventory)</b></label>')[0]);
        div.appendChild(document.createElement("br"));
        div.appendChild(
            $('<input>').attr('type', 'text').attr('value', hash).width(500)[0]
        );
        div.appendChild(document.createElement("br"));
        div.appendChild(document.createElement("br"));
        div.appendChild(nameDiv);
        div.appendChild(makeDeckHTML(deck));
        div.appendChild(document.createElement("hr"));
        cardSpace.appendChild(div);
    }

    var publicInfo = {
        getFieldsFromRequest: getFieldsFromRequest,
        retrieveGuildDecks: retrieveGuildDecks,
        retrieveMyDeck: retrieveMyDeck,
        getFullUserData: getFullUserData,
        updateMyDeck: updateMyDeck,
        factionDecks: {},
        baseRequest: baseRequest,
        getDecksFromJSON: getDecksFromJSON,
    }
    return publicInfo;
})();