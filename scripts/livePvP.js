var emptyFunction = SIMULATOR.sendBattleUpdate = function () { };

$(document).ready(function () {
    // Connect to PeerJS, have server assign an ID instead of providing one
    // Showing off some of the configs available with PeerJS :).
    var peer = new Peer({
        // Set API key for cloud server (you don't need this if you're running your
        // own.
        key: '12gvgzijkheka9k9',
        // Set a logging function:
        logFunction: function () {
            var copy = Array.prototype.slice.call(arguments).join(' ');
            log(copy);
        }
    });
    var connectedPeer = null;
    var ready = false;

    // Show this peer's ID.
    peer.on('open', function (id) {
        $('#myPeerID').val(id);
    });

    // Await connections from others
    peer.on('connection', receiveConnection);

    peer.on('error', function (err) {
        console.log(err);
    });

    function sendConnection(c) {
        $("#surge").prop("checked", false);
        connect(c);
        var message = {
            type: 'requestFight',
            data: $("#deck1").val()
        };
        c.send(JSON.stringify(message));
    }

    function receiveConnection(c) {
        connect(c);
    }

    // Handle a connection object.
    function connect(c) {
        c.on('data', function (data) {
            processMessage(c, data);
        });
        c.on('close', function () {
            SIMULATOR.sendBattleUpdate = emptyFunction;
            SIMULATOR.livePvP = false;
            endFight();
        });
        connectedPeer = c.peer;
    }

    function sendBattleUpdate(turn) {
        var message = {
            type: 'updateField',
            data: {
                field: SIMULATOR.field,
                turn: turn
            }
        };
        activeConnection().send(JSON.stringify(message));
    }

    function processMessage(c, json) {
        var message = JSON.parse(json);
        switch (message.type) {
            case 'requestFight':
                fightRequested(c, message.data);
                break;

            case 'accepted':
                startFight(message.data);
                break;

            case 'rejected':
                CARD_GUI.clearCardSpace();
                outp('Opponent is not ready');
                disconnect();
                break;

            case 'updateField':
                updateField(message.data);
                break;
        }
    }

    function fightRequested(c, enemyHash) {
        var message;

        if (ready) {
            message = {
                type: 'accepted',
                data: $("#deck1").val()
            };
            $("#deck2").val(enemyHash);
            $("#surge").prop("checked", true);
            SIMULATOR.sendBattleUpdate = sendBattleUpdate;
            SIMULATOR.waiting = true;
            SIMULATOR.livePvP = true;
            SIM_CONTROLLER.startsim();
            SIM_CONTROLLER.end_sims_callback = endFight;
            $("#btnStop").off("click").on("click", endFight);
        } else {
            message = {
                type: 'rejected'
            };
        }

        c.send(JSON.stringify(message));
    }

    function startFight(enemyHash) {
        $("#deck2").val(enemyHash);
        $('#btnStop').off("click").on("click", endFight);
        SIMULATOR.livePvP = true;
        SIMULATOR.sendBattleUpdate = sendBattleUpdate;
        SIM_CONTROLLER.startsim();
        SIM_CONTROLLER.end_sims_callback = endFight;
    }

    function endFight() {
        setTimeout(disconnect, 1);
        if (SIMULATOR.simulating) {
            SIM_CONTROLLER.stopsim();
        }
    }

    function updateField(data) {
        if (SIMULATOR.waiting) {
            var field = SIMULATOR.field = data.field;
            var turn = data.turn;

            // Convert JSON cards to actual Units
            convert(field.player.commander);
            var assaults = field.player.assaults;
            for (var i = 0; i < assaults.length; i++) {
                convert(assaults[i]);
            }

            convert(field.cpu.commander);
            var assaults = field.cpu.assaults;
            for (var i = 0; i < assaults.length; i++) {
                convert(assaults[i]);
            }

            // Swap player/cpu
            var player = field.player;
            field.player = field.cpu;
            field.cpu = player;

            CARD_GUI.draw_cards(field);

            if(SIMULATOR.onFieldUpdated) SIMULATOR.onFieldUpdated(turn);
        }
    }

    function convert(cardInfo) {
        cardInfo.__proto__ = CardPrototype;
    }

    function log(msg) { 
        $('.log').append(msg + '<br/>');
        console.log(msg);
    }

    // Connect to a peer
    $('#btn_simulate').off("click").on("click", setReady);

    $("#enemyPeerID").on("change", function () {
        var peerID = $("#enemyPeerID").val();
        if (peerID) {
            $('#btn_simulate').off("click")
                .on("click", requestFight)
                .val("Connect!");
        } else {
            $('#btn_simulate').off("click")
                .on("click", setReady)
                .val("Ready!");
        }
    });

    function setReady() {
        hideUI();

        wins = 0;
        losses = 0;
        draws = 0;

        outp(""); // Clear display
        setSimStatus("");
        CARD_GUI.clearCardSpace();

        ready = true;

        $("#btnStop").off("click").on("click", setUnready);
    }

    function setUnready() {
        ready = false;
        showUI();
    }

    function requestFight() {
        var requestedPeer = $('#enemyPeerID').val();
        if (!connectedPeer) {
            // Create 2 connections, one labelled chat and another labelled file.
            var c = peer.connect(requestedPeer, {
                label: 'chat',
                serialization: 'none',
                metadata: { message: 'hi i want to chat with you!' }
            });
            c.on('open', function () {
                sendConnection(c);
            });
            c.on('error', function (err) { alert(err); });
            connectedPeer = requestedPeer;
        }
    }

    // Send a chat message to all active connections.
    $('#send').submit(function (e) {
        e.preventDefault();
        sendMsg();
    });

    function activeConnection() {
        return peer.connections[connectedPeer][0];
    }

    function disconnect() {
        if (connectedPeer !== null) {
            activeConnection().close();
            delete peer.connections[connectedPeer];
            connectedPeer = null;
        }
        $("#surge").prop("checked", false);
        ready = false;
    }

    // Make sure things clean up properly.

    window.onunload = window.onbeforeunload = function (e) {
        if (!!peer && !peer.destroyed) {
            peer.destroy();
        }
    };
});