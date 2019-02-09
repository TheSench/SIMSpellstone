define('simController', [
    'matchTimer',
    'debugLog',
    'animations',
    'ui'
], function (
    matchTimer,
    debugLog,
    animations,
    ui
) {
    "use strict";

    var SIM_CONTROLLER = {
        getConfiguration: getConfiguration,
        debug_end: debug_end,

        endSimsCallback: null,
        stop_sims_callback: null
    };

    function getConfiguration() {
        getdeck = $('#deck1').val();
        getordered = $('#ordered').is(':checked');
        getexactorder = $('#exactorder').is(':checked');

        getdeck2 = $('#deck2').val();
        var selectedCampaign = $('#campaign').val();
        var selectedMission = $('#mission').val();
        var missionLevel = $('#mission_level').val();
        var selectedRaid = $('#raid').val();
        var raidLevel = $('#raid_level').val();
        getordered2 = $('#ordered2').is(':checked');
        getexactorder2 = $('#exactorder2').is(':checked');
        surge = $('#surge').is(':checked');

        var siegeMode = $('#siege').is(':checked');
        var towerLevel = $('#tower_level').val();
        var towerType = $('#tower_type').val();

        var selectedBges = '';
        var selfbges = '';
        var enemybges = '';
        var mapbges = '';
        if (BATTLEGROUNDS) {
            selectedBges = ui.getSelectedBattlegrounds();
            selfbges = ui.getSelectedBattlegrounds("self-");
            enemybges = ui.getSelectedBattlegrounds("enemy-");
            mapbges = (selectedMission ? ui.getSelectedMapBattlegrounds() : "");
        }

        sims_left = $('#sims').val() || 1;

        debugLog.enabled = $('#debug').is(':checked');
        play_debug = debugLog.enabled && $('#play_debug').is(':checked');
        if (play_debug) debugLog.enabled = false;
        mass_debug = $('#mass_debug').is(':checked');
        win_debug = $('#win_debug').is(':checked');
        loss_debug = $('#loss_debug').is(':checked');
        animations.areShown = $('#animations').is(':checked');

        if ($('#auto_mode').length) {
            var auto_mode = $('#auto_mode').is(':checked');
            SIMULATOR.user_controlled = !auto_mode;
        }

        // Not currently in UI - attacker's first card has +1 delay
        tournament = $("#tournament").is(":checked");

        return {
            getdeck: getdeck,
            getordered: getordered,
            getexactorder: getexactorder,
            getdeck2: getdeck2,
            selectedCampaign: selectedCampaign,
            selectedMission: selectedMission,
            missionLevel: missionLevel,
            selectedRaid: selectedRaid,
            raidLevel: raidLevel,
            getordered2: getordered2,
            getexactorder2: getexactorder2,
            surge: surge,
            siegeMode: siegeMode,
            towerLevel: towerLevel,
            towerType: towerType,
            selectedBges: selectedBges,
            selfbges: selfbges,
            enemybges: enemybges,
            mapbges: mapbges,
            sims_left: sims_left,
            play_debug: play_debug,
            mass_debug: mass_debug,
            win_debug: win_debug,
            loss_debug: loss_debug,
            auto_mode: auto_mode,
            tournament: tournament
        };
    }

    // Loops through all simulations
    // - keeps track of number of simulations and outputs status
    function debug_end(result) {

        var result = SIM_CONTROLLER.processSimResult();

        sims_left = 0;
        matchTimer.stop();

        var msg;
        var matchPoints = "";
        if (getdeck2) {
            matchPoints = " (" + SIMULATOR.calculatePoints() + " points)";
        }
        if (result == 'draw') {
            msg = '<br><h1>DRAW' + matchPoints + '</h1><br>';
        } else if (result) {
            msg = '<br><h1>WIN' + matchPoints + '</h1><br>';
        } else {
            msg = '<br><h1>LOSS' + matchPoints + '</h1><br>';
        }

        ui.displayTurns();
        ui.setSimStatus(msg);

        ui.show();

        if (SIMULATOR.sendBattleUpdate) SIMULATOR.sendBattleUpdate(SIMULATOR.simulation_turns);

        if (SIM_CONTROLLER.endSimsCallback) SIM_CONTROLLER.endSimsCallback();
    }

    // temporary stop-gap so HTML files can reference this module
    window.SIM_CONTROLLER = SIM_CONTROLLER;

    return SIM_CONTROLLER;
});