QUnit.module("UnitHelpers", {
    beforeEach: function (assert) {
    }, afterEach: function (assert) {
    }
});
QUnit.test("isAlive_5health_yes", function (assert) {
    assert.expect(1);
    var unit = { health: 5 }
    var alive = UnitHelpers.isAlive(unit);
    assert.deepEqual(alive, true, "Passed!");
});
QUnit.test("isAlive_0health_no", function (assert) {
    assert.expect(1);
    var unit = { health: 0 }
    var alive = UnitHelpers.isAlive(unit);
    assert.deepEqual(alive, false, "Passed!");
});
QUnit.test("isAlive_-5health_no", function (assert) {
    assert.expect(1);
    var unit = { health: -5 }
    var alive = UnitHelpers.isAlive(unit);
    assert.deepEqual(alive, false, "Passed!");
});