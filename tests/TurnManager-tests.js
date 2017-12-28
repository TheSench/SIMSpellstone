QUnit.module("TurnManager", {
    beforeEach: function (assert) {
    }, afterEach: function (assert) {
    }
});
QUnit.test("removeDead_2in4_2", function (assert) {
    assert.expect(1);
    var field = [
        { health: 0 },
        { health: 5 },
        { health: 2 },
        { health: 0 },
    ];
    var mgr = new TurnManager();
    mgr.removeDead(field);
    var remaining = field.length;
    assert.deepEqual(remaining, 2, "Passed!");
});