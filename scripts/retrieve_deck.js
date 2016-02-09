var BattleAPI;

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

    function getFieldsFromRequest(existingRequest) {
        if (!existingRequest) existingRequest = document.getElementById("request_json").value;
        if (existingRequest.length > 0) {
            existingRequest = JSON.parse(existingRequest);
            existingRequest = existingRequest.request;

            baseRequest.user_id = existingRequest.user_id;
            baseRequest.password = existingRequest.password;
            baseRequest.unity = existingRequest.unity;
            baseRequest.client_version = existingRequest.client_version;
            baseRequest.kong_id = existingRequest.kong_id;
            baseRequest.kong_token = existingRequest.kong_token;
            baseRequest.kong_name = existingRequest.kong_name;
            baseRequest.platform = existingRequest.platform;
        }
    }

    function retrieveGuildDecks(draw, callback) {
        clearDeckSpace();
        getFactionMembers(draw, callback);
    }

    function loadDeckFile(draw, callback) {
        clearDeckSpace();
        getDecksfromFile(draw, callback);
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
        var startTime = new Date().getTime();
        $.ajax({
            url: baseURL + params,
            async: false,
            cache: false,
            dataType: 'json', /* Optional - jQuery autodetects this by default */
            success: function (response) {
                baseRequest.api_stat_name = messageType;
                baseRequest.api_stat_time = (new Date().getTime() - startTime);
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
        if (!mission_id) mission_id = 1034; //Lost Labratory
        var params = {
            campaign: mission_id
        }

        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('startCampaign', params, function (response) {
                checkResponse(response, BattleAPI.beginBattle);
                HideLoadingSplash();
            });
        }, 1);
    }

    function checkResponse(response, callback) {
        if (response.result) {
            callback(response);
        } else {
            alert(response.result_message[0]);
        }
    }

    //-- Bounties
    var huntingTargets = {};

    function startBountyBattle() {
        if (!startFirstBountyBattle()) {
            getHuntingTargets(true);
        }
    }

    function getHuntingTargets(fightFirst) {
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('getHuntingTargets', null, function (response) {
                processHuntingTargets(response);
                if (fightFirst && !startFirstBountyBattle()) {
                    alert("No targets at this time");
                }
                HideLoadingSplash();
            });
        }, 1);
    }

    function processHuntingTargets(data) {
        huntingTargets = data.hunting_targets;
    }

    function startFirstBountyBattle() {
        for (var key in huntingTargets) {
            target_user_id = key;
            doStartBountyBattle(target_user_id);
            return true;
            break;
        }
        return false;
    }

    function doStartBountyBattle(target_user_id, skipGetTargets) {
        var params = {
            rival_id: target_user_id
        }
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('startHuntingBattle', params, function (response) {
                BattleAPI.beginBattle(response);
                HideLoadingSplash();
            });
        }, 1);
    }
    //-- End Bounties

    //-- Guild War
    function startGuildWarBattle() {
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('fightGuildWar', null, function (response) {
                BattleAPI.beginBattle(response);
                HideLoadingSplash();
            });
        }, 1);
    }
    //-- End Guild War

    //-- Clash
    function startClashBattle() {
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('startClashBattle', null, function (response) {
                BattleAPI.beginBattle(response);
                HideLoadingSplash();
            });
        }, 1);
    }
    //-- End Clash

    //-- Raid
    var raidEnergy = 0;

    function startRaidBattle() {
        getRaidStatus(true);
    }

    function getRaidStatus(doFight) {
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('getRaidStatus', null, function (response) {
                processGetRaidStatus(response);
                if (doFight) {
                    if (raidEnergy > 0) {
                        doStartRaidBattle();
                    } else {
                        alert("No fights left");
                    }
                }
                HideLoadingSplash();
            });
        }, 1);
    }

    function processGetRaidStatus(data) {
        raidEnergy = data.raid_status.energy;
    }

    function doStartRaidBattle() {
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('startRaidBattle', null, function (response) {
                BattleAPI.beginBattle(response);
                HideLoadingSplash();
            });
        }, 1);
    }
    //-- End Raid

    //-- Practice Battle
    function fightGuildMember(target_user_id) {
        var params = {
            target_user_id: target_user_id
        }

        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('fightGuildMember', params, function (response) {
                checkResponse(response, BattleAPI.beginBattle);
                HideLoadingSplash();
            });
        }, 1);
    }
    //-- End  Practice Battle

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
                BattleAPI.continueBattle(response);
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
                BattleAPI.continueBattle(response);
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
                publicInfo.allDecks = {};
                for (var key in members) {
                    getUserDeck(key, draw);
                }
                HideLoadingSplash();
                if(callback) callback();
            });
        }, 1);
    }

    function getDecksfromFile(file, draw, callback) {

        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            var decks = JSON.parse(e.target.result);
            publicInfo.factionDecks = {};
            publicInfo.allDecks = {};
            for (var key in decks) {
                getDeckFromFile(key, decks[key], draw);
            }
            if(callback) callback();
        };
        reader.readAsText(file);
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
                publicInfo.allDecks[name] = deck;
            }
        });
    }

    function getDeckFromFile(name, hash, draw) {
        var deck = hash_decode(hash);
        if (draw) {
            drawDeck(deck, data);
        } else {
            publicInfo.factionDecks[name] = deck;
            publicInfo.allDecks[name] = deck;
        }
    }

    function onGetUserDeck(data) {
        var deck_info = data.player_info.deck;
        var deck = getDeckFromDeckInfo(deck_info);
        drawDeck(deck, data.player_info);
    }

    function getDeckFromDeckInfo(deck_info) {
        var commander = deck_info.commander;
        var deck = {
            commander: makeUnitInfo(commander.unit_id, commander.level),
            deck: [],
        }

        var units = deck_info.units
        for (var i = 0; i < units.length; i++) {
            var unit = units[i];
            var runes = unit.runes;
            unit = makeUnitInfo(unit.unit_id, unit.level);
            for(var key in runes) {
                unit.runes.push({ id: runes[key].item_id });
            }
            deck.deck.push(unit);
        }
        return deck;
    }

    function drawDeck(deck, player_info) {
        var name = player_info.name;
        var user_id = player_info.user_id;
        var div = doDrawDeck(deck, user_id, name);
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

    function doDrawDeck(deck, user_id, name) {
        var div = document.createElement("div");
        div.appendChild(document.createElement("br"));

        var nameDiv = createDiv("float-left", name);
        nameDiv.style.fontSize = "xx-large";
        nameDiv.style.fontWeight = "bold";
        div.appendChild(nameDiv);

        var useridDiv = createDiv("float-left", "(" + user_id + ")");
        useridDiv.style.fontSize = "xx-large";
        useridDiv.style.fontWeight = "bold";
        div.appendChild(useridDiv);

        div.appendChild(makeDeckHTML(deck));
        div.appendChild(document.createElement("br"));
        return div;
    }

    function getInventory(data) {
        var name = data.user_data.name;
        var user_id = data.user_data.user_id;
        var cardSpace = document.getElementById("deck");
        var deck = getDeckFromDeckInfo(data.user_decks[1]);
        var div = doDrawDeck(deck, user_id, name);
        cardSpace.appendChild(div);
        var hash = hash_encode(deck);

        var deck = {
            commander: elariaCaptain,
            deck: [],
        }
        var units = data.user_units;
        for (var i in units) {
            var unit = units[i];
            var unit_info = makeUnitInfo(unit.unit_id, unit.level);
            unit_info.index = unit.unit_index;
            deck.deck.push(unit_info);
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

    BattleAPI = {
        startCampaignBattle: startCampaignBattle,
        startBountyBattle: startBountyBattle,
        startGuildWarBattle: startGuildWarBattle,
        startClashBattle: startClashBattle,
        fightGuildMember: fightGuildMember,
        startRaidBattle: startRaidBattle,
        playCard: playCard,
        forfeitBattle: forfeitBattle,
    }

    var publicInfo = {
        getFieldsFromRequest: getFieldsFromRequest,
        retrieveGuildDecks: retrieveGuildDecks,
        getDecksfromFile: getDecksfromFile,
        retrieveMyDeck: retrieveMyDeck,
        getFullUserData: getFullUserData,
        updateMyDeck: updateMyDeck,
        factionDecks: {},
        allDecks: {},
        baseRequest: baseRequest,
    }
    return publicInfo;
})();