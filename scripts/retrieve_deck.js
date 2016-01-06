function retrieveDecks() {
    var existingRequest = document.getElementById("request_json").value;
    if (existingRequest.length > 0) {
        existingRequest = JSON.parse(existingRequest);
        existingRequest = existingRequest.request;
        document.getElementById("user_id").value = existingRequest.user_id;
        document.getElementById("kong_id").value = existingRequest.kong_id;
        document.getElementById("password").value = existingRequest.password;
        document.getElementById("kong_token").value = existingRequest.kong_token;
        document.getElementById("kong_name").value = existingRequest.kong_name;
        document.getElementById("client_version").value = existingRequest.client_version;
        document.getElementById("unity").value = existingRequest.unity;
        if (!document.getElementById("target_user_id").value) document.getElementById("target_user_id").value = existingRequest.user_id;
    }
    clearDeckSpace();
    getFactionMembers();
    //retrieveDeck();
}

function getFactionMembers() {

    var user_id = document.getElementById("user_id").value;
    var form = $('<form>')
        .append($('#kong_id').clone())
        .append($('#password').clone())
        .append($('#kong_token').clone())
        .append($('#kong_name').clone())
        .append($('#client_version').clone())
        .append($('#unity').clone())
        .append($('#platform').clone())
        .append($('<input>').attr('name', 'last_activity_id').attr('value', '0'))
        .append($('<input>').attr('name', 'api_stat_name').attr('value', 'getChat'))
        .append($('<input>').attr('name', 'api_stat_time').attr('value', '84'))
        .append($('<input>').attr('name', 'data_usage').attr('value', '793766'))

    var url = ("https://crossorigin.me/https://spellstone.synapse-games.com/api.php?message=updateFaction&user_id=" + user_id + "&" + form.serialize());
    $.ajax({
        url: url,
        dataType: 'json', /* Optional - jQuery autodetects this by default */
        success: function (response) {
            onGetFactionMembers(response);
        }
    });
}

function onGetFactionMembers(data) {
    guildMemberIDs = [];
    var resp = /*JSON.parse*/(data);
    var members = resp.faction.members;
    for(var key in members) {
        //guildMemberIDs.push(key);
        getUserDeck(key, members[key].name);
    }
}

function retrieveDeck() {
    var user_id = document.getElementById("user_id").value;
    var kong_id = document.getElementById("kong_id").value;
    var password = document.getElementById("password").value;
    var kong_token = document.getElementById("kong_token").value;
    var client_version = document.getElementById("client_version").value;
    var unity = document.getElementById("unity").value;
    var target_user_id = document.getElementById("target_user_id").value;
    var platform = document.getElementById("platform").value;

    if (user_id && kong_id && password && kong_token && target_user_id) {
        getUserDeck(target_user_id);
    }
}

function getUserDeck(target_user_id, name) {
    var user_id = document.getElementById("user_id").value;

    var form = $('<form>')
        .append($('#kong_id').clone())
        .append($('#password').clone())
        .append($('#kong_token').clone())
        .append($('#kong_name').clone())
        .append($('#client_version').clone())
        .append($('#unity').clone())
        .append($('#platform').clone())
        .append($('<input>').attr('name', 'target_user_id').attr('value', target_user_id))

    var url = ("https://crossorigin.me/https://spellstone.synapse-games.com/api.php?message=getProfileData&user_id=" + user_id + "&" + form.serialize());

    $.ajax({
        url: url,
        dataType: 'json', /* Optional - jQuery autodetects this by default */
        success: function (response) {
            onGetUserDeck(response, name);
        }
    });
}

function onGetUserDeck(data, name) {
    var resp = /*JSON.parse*/(data);
    var deck_info = resp.player_info.deck;
    var commander = deck_info.commander;
    var deck = [];
    deck.commander = { id: commander.unit_id, level: commander.level };
    deck.deck = [];
    var units = deck_info.units
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        deck.deck.push({ id: unit.unit_id, level: unit.level });
    }
    var cardSpace = document.getElementById("deck");
    var nameDiv = createDiv("float-left", name);
    nameDiv.style.fontSize = "xx-large";
    nameDiv.style.fontWeight = "bold";
    cardSpace.appendChild(nameDiv);
    cardSpace.appendChild(makeDeckHTML(deck));
    cardSpace.appendChild(document.createElement("br"));
    cardSpace.appendChild(
        $('<input>').attr('type', 'text').attr('value', hash_encode(deck)).width(500)[0]
    );
    cardSpace.appendChild(document.createElement("br"));
    cardSpace.appendChild(document.createElement("hr"));
}

var card_cache = {};
var guildMemberIDs = [];