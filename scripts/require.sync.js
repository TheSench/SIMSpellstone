(function () {
    var modules = {};
    
    function defineWithoutDependencies(name, moduleDefinition) {
        if (typeof moduleDefinition === "function") {
            modules[name] = moduleDefinition();
        } else {
            modules[name] = moduleDefinition;
        }
    }
    
    function defineWithDependencies(name, dependencies, moduleDefinition) {
        var injectables = dependencies.map(function loadDependency(name) {
            return modules[name];
        });

        modules[name] = moduleDefinition.apply(this, injectables);
    }

    window.define = function whichDefine() {
        if(arguments.length === 2) {
            defineWithoutDependencies.apply(this, arguments);
        } else {
            defineWithDependencies.apply(this, arguments);
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