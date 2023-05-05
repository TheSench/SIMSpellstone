"use strict";

var SIM_CONTROLLER = (function () {

    function getConfiguration() {
        var debug = $('#debug').is(':checked');
        var logPlaysOnly = debug && $('#play_debug').is(':checked');
        if (logPlaysOnly) debug = false;
        showAnimations = $('#animations').is(':checked');

        if ($('#auto_mode').length) {
            var auto_mode = $('#auto_mode').is(':checked');
            SIMULATOR.userControlled = !auto_mode;
        }

        // Not currently in UI - attacker's first card has +1 delay
        var tournament = $("#tournament").is(":checked");

        var missionID = $('#mission').val();
        var simsToRun = ($('#sims').val() || 1);

        return {
            enemybges: BATTLEGROUNDS ? getSelectedBattlegrounds("enemy-") : '',
            getbattleground: BATTLEGROUNDS ? getSelectedBattlegrounds() : '',
            selfbges: BATTLEGROUNDS ? getSelectedBattlegrounds("self-") : '',
            mapbges: BATTLEGROUNDS ? (missionID ? getSelectedMapBattlegrounds() : "") : '',

            playerDeck: $('#deck1').val(),
            playerOrdered: $('#ordered').is(':checked'),
            playerExactOrdered: $('#ordered2').is(':checked'),

            cpuDeck: $('#deck2').val(),
            cpuOrdered: $('#ordered2').is(':checked'),
            cpuExactOrdered: $('#exactorder2').is(':checked'),

            surge: $('#surge').is(':checked'),

            siegeMode: $('#siege').is(':checked'),
            towerType: $('#tower_type').val(),
            towerLevel: $('#tower_level').val(),

            campaignID: $('#campaign').val(),
            missionID: missionID,
            missionLevel: $('#mission_level').val(),
            raidID: $('#raid').val(),
            raidLevel: $('#raid_level').val(),

            showAnimations: showAnimations,
            simsToRun: simsToRun,
            tournament: tournament,

            debug: debug,
            logPlaysOnly: logPlaysOnly,
            massDebug: $('#mass_debug').is(':checked'),
            findFirstWin: $('#win_debug').is(':checked'),
            findFirstLoss: $('#loss_debug').is(':checked'),
        };
    }

    // Loops through all simulations
    // - keeps track of number of simulations and outputs status
    function debug_end(result) {

        var result = SIM_CONTROLLER.processSimResult();

        SIMULATOR.simsLeft = 0;
        matchTimer.stop();


        var msg;
        var points = "";
        if (SIMULATOR.config.cpuDeck) {
            points = " (" + SIMULATOR.calculatePoints() + " points)";
        }
        if (result == 'draw') {
            msg = '<br><h1>DRAW' + points + '</h1><br>';
        } else if (result) {
            msg = '<br><h1>WIN' + points + '</h1><br>';
        } else {
            msg = '<br><h1>LOSS' + points + '</h1><br>';
        }

        if (echo) {
            outputTurns(echo, true);
        }
        setSimStatus(msg);

        showUI();

        if (SIMULATOR.sendBattleUpdate) SIMULATOR.sendBattleUpdate(SIMULATOR.simulation_turns);

        if (SIM_CONTROLLER.end_sims_callback) SIM_CONTROLLER.end_sims_callback();
    }

    return {
        getConfiguration: getConfiguration,
        debug_end: debug_end,

        end_sims_callback: null,
        stop_sims_callback: null
    };
})();