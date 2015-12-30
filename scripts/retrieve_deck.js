function retrieveDeck() {
    clearDeckSpace();

    var existingRequest = document.getElementById("request_json").value;
    if (existingRequest.length > 0) {
        existingRequest = JSON.parse(existingRequest);
        existingRequest = existingRequest.request;
        document.getElementById("user_id").value = existingRequest.user_id;
        document.getElementById("kong_id").value = existingRequest.kong_id;
        document.getElementById("password").value = existingRequest.password;
        document.getElementById("kong_token").value = existingRequest.kong_token;
        document.getElementById("client_version").value = existingRequest.client_version;
        document.getElementById("unity").value = existingRequest.unity;
        if (!document.getElementById("target_user_id").value) document.getElementById("target_user_id").value = existingRequest.user_id;
    }
    var user_id = document.getElementById("user_id").value;
    var kong_id = document.getElementById("kong_id").value;
    var password = document.getElementById("password").value;
    var kong_token = document.getElementById("kong_token").value;
    var client_version = document.getElementById("client_version").value;
    var unity = document.getElementById("unity").value;
    var target_user_id = document.getElementById("target_user_id").value;
    var platform = document.getElementById("platform").value;

    if (user_id && kong_id && password && kong_token) {
        var url = "https://spellstone.synapse-games.com/api.php?message=getProfileData&user_id=" + user_id;
        var params = [kong_id, password, kong_token, target_user_id]
        var data = {
            "kong_id": kong_id,
            "password": password,
            "kong_token": kong_token,
            "target_user_id": target_user_id,
            "unity": unity,
            "client_version": client_version,
            "platform": platform,
        };

        yqlPost(url, data);
    }
}

function myCallback(data) {
    var resp = JSON.parse(data);
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
    draw_deck(deck);
}

function yqlPost(url) {
    var postdata = encodeURIComponent($('#form-post').serialize());

    var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20htmlpost%20where%0Aurl%3D%22' +
    encodeURIComponent(url) + '%22%20%0Aand%20postdata%3D%22' + postdata +
    '%22%20and%20xpath%3D%22%2F%2F*%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';//&callback=myCallback';

    $.ajax({
        url: url,
        dataType: 'json', /* Optional - jQuery autodetects this by default */
        success: function (response) {
            var result = response.query.results.postresult.body;
            myCallback(result);
        }
    });
}

var card_cache = {};