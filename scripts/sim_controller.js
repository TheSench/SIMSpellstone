"use strict";

var SIM_CONTROLLER = (function () {

    function getConfiguration() {
        getdeck = $('#deck1').val();
        getordered = $('#ordered').is(':checked');
        getexactorder = $('#exactorder').is(':checked');

        getdeck2 = $('#deck2').val();
        getcampaign = $('#campaign').val();
        getmission = $('#mission').val();
        missionlevel = $('#mission_level').val();
        getraid = $('#raid').val();
        raidlevel = $('#raid_level').val();
        getordered2 = $('#ordered2').is(':checked');
        getexactorder2 = $('#exactorder2').is(':checked');
        surge = $('#surge').is(':checked');

        getsiege = $('#siege').is(':checked');
        tower_level = $('#tower_level').val();
        tower_type = $('#tower_type').val();

        if (BATTLEGROUNDS) {
            getbattleground = getSelectedBattlegrounds();
            selfbges = getSelectedBattlegrounds("self-");
            enemybges = getSelectedBattlegrounds("enemy-");
            mapbges = (getmission ? getSelectedMapBattlegrounds() : "");
        }

        sims_left = $('#sims').val() || 1;

        debug = $('#debug').is(':checked');
        play_debug = debug && $('#play_debug').is(':checked');
        if (play_debug) debug = false;
        mass_debug = $('#mass_debug').is(':checked');
        win_debug = $('#win_debug').is(':checked');
        loss_debug = $('#loss_debug').is(':checked');
        showAnimations = $('#animations').is(':checked');

        if ($('#auto_mode').length) {
            auto_mode = $('#auto_mode').is(':checked');
            SIMULATOR.user_controlled = !auto_mode;
        }

        // Not currently in UI - attacker's first card has +1 delay
        tournament = $("#tournament").is(":checked");
    }

    // Loops through all simulations
    // - keeps track of number of simulations and outputs status
    function debug_end(result) {

        var result = SIM_CONTROLLER.processSimResult();

        sims_left = 0;
        matchTimer.stop();


        var msg;
        var points = "";
        if (getdeck2) {
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