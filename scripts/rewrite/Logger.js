var Logger = (function () {

    var Logger = function () {
        this.buffer = [];
    };

    var log = Logger.prototype.log = function (message) {
        this.buffer.push(message);
    }

    var clear = Logger.prototype.clear = function () {
        this.buffer.length = 0;
    }

    var toString = Logger.prototype.toString = function () {
        return this.buffer.join("");
    }

    return Logger;
}());