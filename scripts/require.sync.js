(function () {
    var modules = {};

    function getModule(name) {
        var module = modules[name];
        if (module) {
            return module;
        } else {
            throw "Module '" + name + "' is not defined yet.";
        }
    }
        
    window.define = function define(name, dependencies, moduleDefinition) {
        var injectables = dependencies.map(function loadDependency(name) {
            return getModule(name);
        });

        modules[name] = moduleDefinition.apply(this, injectables);
    };

    window.require = function require(name) {
        return getModule(name);
    };
})();