var emptyFunction = SIMULATOR.sendBattleUpdate = function () { };

$(document).ready(function () {
    // Connect to PeerJS, have server assign an ID instead of providing one
    // Showing off some of the configs available with PeerJS :).
    var peer = new Peer({
        // Set API key for cloud server (you don't need this if you're running your
        // own.
        key: '12gvgzijkheka9k9',

        debug: 3,

        // Set a logging function:
        logFunction: function () {
            var copy = Array.prototype.slice.call(arguments).join(' ');
            log(copy);
        }
    });
    var connectedPeer = null;
    var ready = false;
    var origSurge = false;

    $("#debug").prop("checked", true);

    // Show this peer's ID.
    peer.on('open', function (id) {
        $('#myPeerID').val(id);
    });

    // Await connections from others
    peer.on('connection', receiveConnection);

    peer.on('error', function (err) {
        console.log(err);
        disconnect();
    });

    function sendConnection(c) {
        connect(c);
        origSurge = $("#surge").is(":checked");


        var message = {
            type: 'requestFight',
            data: {
                hash: $("#deck1").val(),
                bges: getBGEs(),
                tournament: $("#tournament").is(":checked"),
                surge: !origSurge
            }
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
                turn: turn,
                echo: echo
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

    function fightRequested(c, data) {
        var message;

        if (ready) {
            message = {
                type: 'accepted',
                data: $("#deck1").val()
            };
            $("#deck2").val(data.hash);
            setBGEs(data.bges);
            origSurge = $("#surge").prop("checked");
            $("#surge").prop("checked", data.surge);
            $("#tournament").prop("checked", data.tournament);
            SIMULATOR.sendBattleUpdate = sendBattleUpdate;
            SIMULATOR.waiting = true;
            SIMULATOR.pause = true;//$("#surge").is(":checked");
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
        $("#surge").prop("checked", origSurge);
    }

    function updateField(data) {
        if (SIMULATOR.waiting) {
            var field = SIMULATOR.field = data.field;
            var turn = SIMULATOR.simulation_turns = data.turn;
            echo = data.echo;
            echo = echo.replace(/<b>/g, '<z>').replace(/<\/b>/g, '<\/z>');
            echo = echo.replace(/<i>/g, '<b>').replace(/<\/i>/g, '<\/b>');
            echo = echo.replace(/<z>/g, '<i>').replace(/<\/z>/g, '<\/i>');

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

            SIMULATOR.performTurns(turn, true);
        }
    }

    function convert(cardInfo) {
        cardInfo.__proto__ = CardPrototype;
        // Swap ownership
        cardInfo.owner = (cardInfo.owner === "player" ? "cpu" : "player");
    }

    function log(msg) {
        $('.log').append(msg + '<br/>');
        console.log(msg);
    }

    // Connect to a peer
    $('#btn_simulate').off("click").on("click", setReady);

    $("#enemyPeerID").on("change", setStartButton).on("keyup", setStartButton.debounce(50));

    function setStartButton() {
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
    }

    function setReady() {
        hideUI();

        wins = 0;
        losses = 0;
        draws = 0;
        points = 0;

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
        ready = false;
    }

    function getBGEs() {
        var bges = '';
        var bgCheckBoxes = document.getElementsByName("battleground");
        for (var i = 0; i < bgCheckBoxes.length; i++) {
            d = bgCheckBoxes[i];
            if (d.checked) bges += decimal_to_base64(d.value, 2);
        }
        return bges;
    }

    function setBGEs(bges) {
        $("#battleground input").prop("checked", false);
        for (var i = 0; i < bges.length; i += 2) {
            var bge = base64_to_decimal(bges.substring(i, i + 2));
            $("#battleground_" + bge).prop('checked', true);
        }
    }

    // Make sure things clean up properly.

    window.onunload = window.onbeforeunload = function (e) {
        if (!!peer && !peer.destroyed) {
            peer.destroy();
        }
    };
});