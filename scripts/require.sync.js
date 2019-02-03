(function () {
    var modules = {};

    window.define = function define(name, moduleDefinition) {
        if (typeof moduleDefinition === "function") {
            modules[name] = moduleDefinition();
        } else {
            modules[name] = moduleDefinition;
        }
    };

    window.require = function require(name) {
        var module = modules[name];
        if (module) {
            return module;
        } else {
            throw "Module '" + name + "' is not defined yet.";
        }
    };
})();