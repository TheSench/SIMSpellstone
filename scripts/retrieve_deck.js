"use strict";

var BattleAPI;
var HandleJSONPResponse;

var DeckRetriever = (function () {
    var baseURL = "https://crossorigin.me/"
    baseURL = "https://script.google.com/macros/s/AKfycby8KJvYjt3swV3nLAHKtsOSvPyrMHdYOTWGAs-yb8I0BqihqhqV/exec?";
    var baseRequest = {};
    var form;
    var factionMemberIDs = [];

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

    var lastAPICall = 0;
    var makingAPICall = false;
    function sendRequest(messageType, params, callback) {
        var now = Date.now();
        var ellapsed = now - lastAPICall;
        if (messageType == "playCard" && ellapsed < 1000) {
            setTimeout(sendRequest, ellapsed, messageType, params, callback);
            return;
        } else if (makingAPICall) {
            setTimeout(sendRequest, 1, messageType, params, callback);
            return;
        }
        makingAPICall = true;
        lastAPICall = now;
        if (!baseRequest.user_id) {
            throw "Missing user id";
        }
        var params = getRequestParams(messageType, params);
        var startTime = new Date().getTime();
        var url = baseURL + params;

        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.id = "jsonpResponse";
        script.src = url;
        script.onload = function (response) {
            makingAPICall = false;
            head.removeChild(script);
            var response = JSONPResponse;
            console.log('callback success');
            baseRequest.api_stat_name = messageType;
            baseRequest.api_stat_time = (new Date().getTime() - startTime);
            if (response.result === false) {
                if (response.result_message[0] == "Please try again in a moment.") {
                    setTimeout(sendRequest, 1, messageType, params, callback);
                    return null;
                }
            }
            callback(response);
            HideLoadingSplash();
        }
        head.appendChild(script);

        return;

        $.ajax({
            url: url,
            async: false,
            cache: false,
            dataType: 'jsonp',
            jsonpCallback: "myCallback",
            success: function (response) {
                console.log('callback success');
                baseRequest.api_stat_name = messageType;
                baseRequest.api_stat_time = (new Date().getTime() - startTime);
                if (response.result === false) {
                    if (response.result_message[0] == "Please try again in a moment.") {
                        setTimeout(sendRequest, 1, messageType, params, callback);
                        return null;
                    }
                }
                callback(response);
                HideLoadingSplash();
            },
            error: function (xhr, status, error) {
                HideLoadingSplash();
                console.log(status + '; ' + error);
            },
            failure: function () {
                console.log('callback error');
                HideLoadingSplash();
            }
        });
    }

    function checkResponse(response, callback, failureCallback) {
        if (response.result || response.result === undefined) {
            callback(response);
        } else {
            if (failureCallback) {
                failureCallback(response);
            } else {
                alert(response.result_message[0]);
            }
        }
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
            });
        }, 1);
    }

    function upgradeCard(index) {
        var params = {
            unit_index: index,
        }

        DisplayLoadingSplash(); 
        setTimeout(function () {
            sendRequest('upgradeUnit', params);
        }, 1);
    }

    function fuseCards(fusion, index1, index2) {
        var params = {
            fusion_id: fusion,
            components: [index1, index2]
        }

        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('startFusion');
        }, 1);
    }

    function getFullUserData() {
        clearDeckSpace();
        
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('init', null, function (response) {
                getInventory(response);
            });
        }, 1);
    }

    var energy = {
        campaign: 0,
        clash: 0,
        raid: 0,
    };
    //-- Campaign
    function startCampaignBattle(mission_id) {
        smartAI = false;
        if (!mission_id) mission_id = 1037; // Flight Delays
        var params = {
            campaign: mission_id
        }

        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('startCampaign', params, function (response) {
                checkResponse(response, BattleAPI.beginBattle, BattleAPI.noEnergy);
            });
        }, 1);
    }
    //-- End Campaign

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
                    setTimeout(BattleAPI.noEnergy, 2000);
                }
            });
        }, 1);
    }

    function processHuntingTargets(data) {
        huntingTargets = [];
        for (var key in data.hunting_targets) {
            huntingTargets.push(key);
        }
    }

    function startFirstBountyBattle() {
        if (huntingTargets.length) {
            var target_user_id = huntingTargets[0];
            huntingTargets.splice(0, 1);
            doStartBountyBattle(target_user_id);
            return true;
        }
        return false;
    }

    function doStartBountyBattle(target_user_id, skipGetTargets) {
        smartAI = true;
        var params = {
            rival_id: target_user_id
        }
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('startHuntingBattle', params, function (response) {
                checkResponse(response, BattleAPI.beginBattle);
            });
        }, 1);
    }
    //-- End Bounties

    //-- Guild War
    function startGuildWarBattle() {
        smartAI = true;
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('fightGuildWar', null, function (response) {
                checkResponse(response, BattleAPI.beginBattle, BattleAPI.noEnergy);
            });
        }, 1);
    }
    //-- End Guild War

    //-- Clash
    function startClashBattle() {
        if (energy.clash > 0) {
            doStartClashBattle();
        } else {
            getClashStatus(true);
        }
    }

    function getClashStatus(fight) {
        var callback = (fight ? setClashEnergyAndFight : setClashEnergy);
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('getClashStatus', null, function (response) {
                checkResponse(response, callback);
            });
        }, 1);
    }

    function setClashEnergy(response) {
        energy.clash = response.clash_status.energy;
    }

    function setClashEnergyAndFight(response) {
        setClashEnergy(response);
        if (energy.clash > 0) {
            doStartClashBattle();
        } else {
            alert("No targets at this time");
            setTimeout(BattleAPI.noEnergy, 2000);
        }
    }
    
    function doStartClashBattle() {
        smartAI = true;
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('startClashBattle', null, function (response) {
                checkResponse(response, BattleAPI.beginBattle, BattleAPI.noEnergy);
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
            });
        }, 1);
    }

    function processGetRaidStatus(data) {
        raidEnergy = data.raid_status.energy;
    }

    function doStartRaidBattle() {
        smartAI = false;
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('startRaidBattle', null, function (response) {
                checkResponse(response, BattleAPI.beginBattle);
            });
        }, 1);
    }
    //-- End Raid

    //-- Practice Battle
    function fightGuildMember(target_user_id, include_tower) {
        smartAI = true;
        if (!target_user_id) target_user_id = baseRequest.user_id;
        var params = {
            target_user_id: target_user_id
        }
        if (include_tower) params.include_tower = 1;

        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('fightGuildMember', params, function (response) {
                checkResponse(response, BattleAPI.beginBattle);
            });
        }, 1);
    }
    //-- End  Practice Battle

    function resumeBattle() {
        var params = {
            battle_id: 0,
        }

        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('getBattleResults', null, function (response) {
                BattleAPI.continueBattle(response);
            });
        }, 1);
    }

    function playCard(card_index, skip) {
        var params = {
            battle_id: 0,
            skip: 0,
            card_uid: card_index,
            host_id: baseRequest.user_id
        }
        if (skip) {
            params.skip = 1;
        }

        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('playCard', params, function (response) {
                BattleAPI.continueBattle(response);
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
                var memberIDs = [];
                if (draw) {
                    for (var key in members) {
                        memberIDs.push(key);
                    }
                    getDecksForMemebers(0, memberIDs, draw, callback);
                } else {
                    for (var key in members) {
                        getUserDeck(key, draw);
                    }
                }
            });
        }, 1);
    }

    function getDecksForMemebers(current, members, draw, callback) {
        if (current < members.length) {
            var key = members[current];
            getUserDeck(key, draw);
            current++;
            setTimeout(getDecksForMemebers, 1, current, members, draw, callback);
        } else {
            if (callback) callback();
        }
    }

    function getFactionMemberIDs(callback) {
        DisplayLoadingSplash();
        setTimeout(function () {
            sendRequest('updateFaction', null, function (response) {
                var members = response.faction.members;
                factionMemberIDs.length = 0;
                for (var key in members) {
                    factionMemberIDs.push(key);
                }
                if (callback) callback();
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

    function getUserDeck(target_user_id, draw, callback) {
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
            if (callback) callback;
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
        resumeBattle: resumeBattle,
        playCard: playCard,
        forfeitBattle: forfeitBattle,
    }

    var publicInfo = {
        getFieldsFromRequest: getFieldsFromRequest,
        getFactionMemberIDs: getFactionMemberIDs,
        retrieveGuildDecks: retrieveGuildDecks,
        getDecksfromFile: getDecksfromFile,
        retrieveMyDeck: retrieveMyDeck,
        getFullUserData: getFullUserData,
        updateMyDeck: updateMyDeck,
        factionDecks: {},
        allDecks: {},
        baseRequest: baseRequest,
        factionMemberIDs: factionMemberIDs,
    }
    return publicInfo;
})();