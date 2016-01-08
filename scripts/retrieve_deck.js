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
            baseRequest.kong_id = existingRequest.kong_id;
            baseRequest.password = existingRequest.password;
            baseRequest.kong_token = existingRequest.kong_token;
            baseRequest.kong_name = existingRequest.kong_name;
            baseRequest.client_version = existingRequest.client_version;
            baseRequest.unity = existingRequest.unity;
        }
    }

    function retrieveGuildDecks(draw) {
        clearDeckSpace();
        getFactionMembers(draw);
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

    function sendRequest(form, callback) {
        $.ajax({
            url: baseURL + form.serialize(),
            async: false,
            dataType: 'json', /* Optional - jQuery autodetects this by default */
            success: callback,
        });
    }

    function appendInput(form, name, value) {
        form.append($('<input>').attr('name', name).attr('value', value));
    }

    function retrieveMyDeck() {
        clearDeckSpace();
        getUserDeck(baseRequest.user_id);
    }

    function retrieveMyCards() {
        clearDeckSpace();
        getUserDeck(baseRequest.user_id);
    }

    function getFullUserData() {
        clearDeckSpace();
        var form = getBaseRequestForm('init');

        sendRequest(form, function (response) {
            getInventory(response);
        });
    }

    function getFactionMembers(draw) {

        var form = getBaseRequestForm('updateFaction');
        appendInput(form, 'last_activity_id', '0');
        appendInput(form, 'api_stat_name', 'getChat');
        appendInput(form, 'api_stat_time', '84');
        appendInput(form, 'data_usage', '793766');

        sendRequest(form, function (response) {
            var members = response.faction.members;
            publicInfo.factionDecks = {};
            for (var key in members) {
                loadUserDeck(key, members[key].name, draw);
            }
        });
    }

    function loadUserDeck(target_user_id, name, draw) {

        var form = getBaseRequestForm('getProfileData');
        appendInput(form, 'target_user_id', target_user_id);

        sendRequest(form, function (response) {
            if (draw) {
                onGetUserDeck(response, name);
            } else {
                var deck_info = response.player_info.deck;
                var deck = getDeckFromDeckInfo(deck_info);
                publicInfo.factionDecks[name] = deck;
            }
        });
    }

    function getUserDeck(target_user_id, name) {

        var form = getBaseRequestForm('getProfileData');
        appendInput(form, 'target_user_id', target_user_id);

        sendRequest(form, function (response) {
            onGetUserDeck(response, name);
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
var card_cache = {};