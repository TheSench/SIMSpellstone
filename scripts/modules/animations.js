define('animations', function () {
    var api = {
        drawField: drawField,
        clearFrames: clearFrames
    };

    var frames = [];
    var frameInterval = null;
    var disabledInterval = false;

    function drawField(field, hand, callback, turn, activeUnit) {
        var newFrame = CARD_GUI.doDrawField(field, hand, callback, turn, activeUnit);
        frames.push(newFrame);
        if (!frameInterval) {
            drawFrames();
            frameInterval = setInterval(drawFrames, 500);
        }
    }

    function clearFrames() {
        frames = [];
        clearInterval(frameInterval);
        frameInterval = null;
    }

    function drawFrames() {
        if (frames.length === 0) {
            if (disabledInterval) {
                clearInterval(frameInterval);
                frameInterval = null;
            } else {
                disabledInterval = true;
            }
        } else {
            var frame = frames.splice(0, 1)[0];
            $("#cardSpace").children().remove().end().append(frame);
            disabledInterval = false;
        }
    }

    return api;
});