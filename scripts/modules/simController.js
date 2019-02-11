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
        var playerHash = $('#deck1').val();
        var playerOrdered = $('#ordered').is(':checked');
        var playerExactOrder = $('#exactorder').is(':checked');

        var cpuHash = $('#deck2').val();
        var selectedCampaign = $('#campaign').val();
        var selectedMission = $('#mission').val();
        var missionLevel = $('#mission_level').val();
        var selectedRaid = $('#raid').val();
        var raidLevel = $('#raid_level').val();
        var cpuOrdered = $('#ordered2').is(':checked');
        var cpuExactOrder = $('#exactorder2').is(':checked');
        var surgeMode = $('#surge').is(':checked');

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

        var simsToRun = $('#sims').val() || 1;

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
        var tournamentMode = $("#tournament").is(":checked");

        return {
            playerHash: playerHash,
            playerOrdered: playerOrdered,
            playerExactOrder: playerExactOrder,
            cpuHash: cpuHash,
            selectedCampaign: selectedCampaign,
            selectedMission: selectedMission,
            missionLevel: missionLevel,
            selectedRaid: selectedRaid,
            raidLevel: raidLevel,
            cpuOrdered: cpuOrdered,
            cpuExactOrder: cpuExactOrder,
            surgeMode: surgeMode,
            siegeMode: siegeMode,
            towerLevel: towerLevel,
            towerType: towerType,
            selectedBges: selectedBges,
            selfbges: selfbges,
            enemybges: enemybges,
            mapbges: mapbges,
            simsToRun: simsToRun,
            play_debug: play_debug,
            mass_debug: mass_debug,
            win_debug: win_debug,
            loss_debug: loss_debug,
            auto_mode: auto_mode,
            tournamentMode: tournamentMode,
            pvpAI: false // TODO: Define this
        };
    }

    // Loops through all simulations
    // - keeps track of number of simulations and outputs status
    function debug_end(result) {

        var result = SIM_CONTROLLER.processSimResult();

        SIMULATOR.remainingSims = 0;
        matchTimer.stop();

        var msg;
        var matchPoints = "";
        if (SIMULATOR.config.cpuHash) {
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