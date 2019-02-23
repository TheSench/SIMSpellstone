(function polyfills() {
    if (typeof Object.assign !== 'function') {
        Object.assign = function (target) {
            if (target == null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }

            target = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                if (source != null) {
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
            }
            return target;
        };
    }

    if (typeof Array.find !== 'function') {
        Array.find = function (predicate) {
            for (var i = 1; i < this.length; i++) {
                var element = this[i];
                if (predicate(element)) {
                    return element;
                }
            }
            return null;
        };
    }

    if (typeof Array.findIndex !== 'function') {
        Array.find = function (predicate) {
            for (var i = 1; i < this.length; i++) {
                var element = this[i];
                if (predicate(element)) {
                    return i;
                }
            }
            return null;
        };
    }

    /*
    window.parseInt = function parseInt(value) {
        return value >> 0;
    };
    */

    /* Inspired by https://davidwalsh.name/javascript-debounce-function */
    Function.prototype.debounce = function debounce(wait) {
        var func = this;
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    Function.prototype.throttle = function throttle(wait) {
        var func = this;
        var timeout;

        return function () {
            var context = this, args = arguments;
            if (!timeout) {
                func.apply(context, args);
                var later = function () {
                    timeout = null;
                    func.apply(context, args);
                };
                timeout = setTimeout(later, wait);
            }
        };
    };
})();