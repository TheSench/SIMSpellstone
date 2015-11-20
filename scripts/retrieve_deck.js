function retrieveDeck() {
    clearCardSpace();

    var user_id = document.getElementById("user_id").value;
    var kong_id = document.getElementById("kong_id").value;
    var password = document.getElementById("password").value;
    var kong_token = document.getElementById("kong_token").value;
    var target_user_id = document.getElementById("target_user_id").value;

    var url = "https://spellstone.synapse-games.com/api.php?message=getProfileData&user_id=" + user_id;
    var params = [kong_id, password, kong_token, target_user_id]
    var data = {
        "kong_id": kong_id,
        "password": password,
        "kong_token": kong_token,
        "target_user_id": target_user_id,
        "unity": "Unity4_6_6",
        "client_version": "15",
        "platform": "web",
    };

    yqlPost(url, data);
}

function myCallback(data) {
    var resp = JSON.parse(data);
    var deck_info = resp.player_info.deck;
    var commander = deck_info.commander;
    var deck = [];
    deck.commander = commander.unit_id + "(" + commander.level + ")";
    var units = deck_info.units
    for (var i = 0; i < units.length; i++) {
        var unit = units[i];
        deck.push(unit.unit_id + "(" + unit.level + ")");
    }
    draw_deck(deck);
}

function yqlPost(url, data) {
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