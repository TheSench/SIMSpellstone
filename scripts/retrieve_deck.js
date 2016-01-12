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
        getUserDeck(baseRequest.user_id, 'Deck', true);
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

    function getFactionMembers(draw, callback) {
        
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('updateFaction', null, function (response) {
                var members = response.faction.members;
                publicInfo.factionDecks = {};
                for (var key in members) {
                    getUserDeck(key, members[key].name, draw);
                }
                HideLoadingSplash();
                callback();
            });
        }, 1);
    }

    function getUserDeck(target_user_id, name, draw) {
        var params = {
            target_user_id: target_user_id
        }

        sendRequest('getProfileData',  params, function (response) {
            if (draw) {
                onGetUserDeck(response, name);
            } else {
                var deck_info = response.player_info.deck;
                var deck = getDeckFromDeckInfo(deck_info);
                publicInfo.factionDecks[name] = deck;
            }
        });
    }

    function onGetUserDeck(data, name) {
        var deck_info = data.player_info.deck;
        drawDeck(deck_info, name);
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
            deck.deck.push({ id: unit.unit_id, level: unit.level });
        }
        return deck;
    }

    function drawDeck(deck_info, name) {
        var deck = getDeckFromDeckInfo(deck_info);
        var div = doDrawDeck(deck, name);
        var hash = hash_encode(deck);
        div.appendChild($('<div><label style="float:left;" class="button" onclick="open_deck_builder(null, \'' + hash + '\');"><b>Deck Builder</b></label>')[0]);
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
        var cardSpace = document.getElementById("deck");
        var deck = getDeckFromDeckInfo(data.user_decks[1]);
        var div = doDrawDeck(deck, "Deck");
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
        div.appendChild($('<div><label style="float:left;" class="button" onclick="open_deck_builder(null, \'' + hash + '\');"><b>Deck Builder</b></label>')[0]);
        div.appendChild($('<div><label style="float:left;" class="button" onclick="open_deck_builder(null, \'' + hash + '\', \'' + inventory + '\');"><b>Deck Builder (w/ Inventory)</b></label>')[0]);
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
    }
    return publicInfo;
})();