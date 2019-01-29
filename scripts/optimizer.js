var origStartSim = SIM_CONTROLLER.startsim;
SIM_CONTROLLER.startsim = function () {
    var deck = $("#deck1").val();
    var deck2 = $("#deck2").val();
    var inv = $("#inv1").val();
    if (deck && inv && deck2) {
        $("#deck1").val(spliceAndReturn(deck.split(""), Math.ceil(Math.random() * 5) * 5, 5, inv.split("").splice(Math.ceil(Math.random() * (inv.length / 5)) * 5, 5).join("")).join(""));
    }

    origStartSim();
    SIM_CONTROLLER.end_sims_callback = function () { hideUI(); setTimeout(SIM_CONTROLLER.startsim, Math.random() * 3000 + 1000, setSimStatus("Substituting next card...")); };
};

function spliceAndReturn(array, start, deleteCount, add) {
    array.splice(start, deleteCount, add);
    return array;
}