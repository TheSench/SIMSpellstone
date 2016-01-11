var DeckRetriever = (function () {
    var baseURL = "https://crossorigin.me/https://spellstone.synapse-games.com/api.php?";
    var baseRequest = {};
    var form;

    function getFieldsFromRequest() {
        var existingRequest = document.getElementById("request_json").value;
        if (existingRequest.length > 0) {
            existingRequest = JSON.parse(existingRequest);
            existingRequest = existingRequest.request;
            baseRequest.user_id = existingRequest.user_id;
            baseRequest.password = existingRequest.password;
        }
    }

    function retrieveGuildDecks(draw) {
        clearDeckSpace();
        getFactionMembers(draw);
    }

    function getBaseRequest(messageType) {

        var request = {
            message: messageType,
            user_id: baseRequest.user_id,
            password: baseRequest.password
        }

        return request;
    }

    function getBaseRequestForm(messageType) {

        var form = $('<form>');

        appendInput(form, 'message', messageType);
        appendInput(form, 'user_id', baseRequest.user_id);
        appendInput(form, 'kong_id', baseRequest.kong_id);
        appendInput(form, 'password', baseRequest.password);
        appendInput(form, 'kong_token', baseRequest.kong_token);
        appendInput(form, 'kong_name', baseRequest.kong_name);
        appendInput(form, 'client_version', baseRequest.client_version);
        appendInput(form, 'unity', baseRequest.unity);
        appendInput(form, 'platform', baseRequest.platform);

        return form;
    }

    function sendRequest(request, callback) {
        $.ajax({
            url: baseURL + EncodeQueryData(request),//form.serialize(),
            async: false,
            dataType: 'json', /* Optional - jQuery autodetects this by default */
            success: callback,
        });
    }

    function EncodeQueryData(data) {
        var ret = [];
        for (var d in data)
            ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        return ret.join("&");
    }

    function appendInput(form, name, value) {
        form.append($('<input>').attr('name', name).attr('value', value));
    }

    function retrieveMyDeck() {
        clearDeckSpace();
        getUserDeck(baseRequest.user_id, 'My Deck', true);
    }

    function getFullUserData() {
        clearDeckSpace();
        var request = getBaseRequest('init');

        sendRequest(request, function (response) {
            getInventory(response);
        });
    }

    function getFactionMembers(draw) {

        var request = getBaseRequest('updateFaction');

        sendRequest(request, function (response) {
            var members = response.faction.members;
            publicInfo.factionDecks = {};
            for (var key in members) {
                getUserDeck(key, members[key].name, draw);
            }
        });
    }

    function getUserDeck(target_user_id, name, draw) {

        var request = getBaseRequest('getProfileData');
        request.target_user_id = target_user_id;

        sendRequest(request, function (response) {
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
            deck.deck.push({ id: unit.unit_id, level: unit.level });
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
        div.appendChild(document.createElement("br"));
        div.appendChild(nameDiv);
        div.appendChild(makeDeckHTML(deck));
        div.appendChild(document.createElement("br"));
        div.appendChild($('<div><label style="float:left;" class="button" onclick="open_deck_builder(null, \'' + hash + '\');"><b>Deck Builder</b></label>')[0]);
        div.appendChild($('<div><label style="float:left;" class="button" onclick="open_deck_builder(null, \'' + hash + '\', \'' + inventory + '\');"><b>Deck Builder (w/ Inventory)</b></label>')[0]);
        div.appendChild(
            $('<input>').attr('type', 'text').attr('value', hash).width(500)[0]
        );
        div.appendChild(document.createElement("br"));
        div.appendChild(document.createElement("hr"));
        cardSpace.appendChild(div);
    }

    var publicInfo = {
        getFieldsFromRequest: getFieldsFromRequest,
        retrieveGuildDecks: retrieveGuildDecks,
        retrieveMyDeck: retrieveMyDeck,
        getFullUserData: getFullUserData,
        factionDecks: {},
    }
    return publicInfo;
})();