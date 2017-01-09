QUnit.module("Logger", {
    beforeEach: function (assert) {
        this.logger = new Logger();
    }, afterEach: function (assert) {
    }
});
QUnit.test("logger_startingLog_isEmpty", function (assert) {
    assert.expect(2);
    var startingLog = this.logger.toString();
    assert.deepEqual(startingLog, "", "Passed!");
    assert.deepEqual(startingLog.length, 0, "Passed!");
});
QUnit.test("log_singleMessage", function (assert) {
    assert.expect(2);
    var logger = this.logger;
    var testMsg = "Test Message";
    logger.log(testMsg);
    var result = logger.toString();
    assert.deepEqual(result, testMsg, "Passed!");
    assert.deepEqual(result.length, testMsg.length, "Passed!");
});
QUnit.test("log_multipleMessages", function (assert) {
    assert.expect(2);
    var logger = this.logger;
    var testMsg1 = "Test Message";
    var testMsg2 = "Message Test";
    logger.log(testMsg1);
    logger.log(testMsg2);

    var result = logger.toString();
    var expected = testMsg1 + testMsg2;

    assert.deepEqual(result, expected, "Passed!");
    assert.deepEqual(result.length, expected.length, "Passed!");
});