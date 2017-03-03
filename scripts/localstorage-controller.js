var storageAPI = {};

(function (angular) {
    'use strict';

    var DeckStorageCtrl = function ($scope, $window) {
        $scope.getSavedDecks = $window.storageAPI.getSavedDecks;

        $scope.keys = function (obj) {
            return (obj ? Object.keys(obj) : []);
        };
    };
    var module;
    try {
        module = angular.module('simulatorApp');
    }
    catch (loadError) {
        module = angular.module('simulatorApp', []);
    }

    module.controller('DeckStorageCtrl', ['$scope', '$window', DeckStorageCtrl]);

}(angular));

// Set up StorageAPI based on feature availability
if (function (type) {
    // LocalStorage Suppotr Check : https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
} catch (e) {
        return false;
}
}('localStorage')) {
    (function () {
        var SaveFields = {
            decks: "SavedDecks",
            tutorial: "Tutorial"
        }

        storageAPI.initialize = function () {
            var currentPage = getCurrentPage();

            convertSavedDecks();

            storageAPI.getField(SaveFields.decks, "savedDecks", {});
            storageAPI.shouldShowTutorial = storageAPI.getField(SaveFields.tutorial, currentPage, true)[currentPage];

            var cachedOnUpdate = storageAPI.onUpdateDecks;
            storageAPI.onUpdateDecks = function (savedDecks) {
                cachedOnUpdate();
                storageAPI.setField(SaveFields.decks, "savedDecks", savedDecks);
            };

            var cachedSetShowTutorial = storageAPI.setShowTutorial;
            storageAPI.setShowTutorial = function (value) {
                cachedSetShowTutorial(value);
                storageAPI.setField(SaveFields.tutorial, currentPage, value);
            };
        };

        storageAPI.getField = function (storageName, fieldName, defaultValue) {

            var storage = getStorage(storageName);
    
            var value = storage[fieldName];
            if (typeof value === 'undefined') {
                value = defaultValue;
                storageAPI.setField(storageName, fieldName, value);
            }

            return value;
        }

        storageAPI.setField = function (storageName, fieldName, newValue) {
            var storage = getStorage(storageName);
            storage[fieldName] = newValue;
            localStorage.setItem(storageName, JSON.stringify(storage));
        }

        function getStorage(storageName) {
            var storage = localStorage.getItem(storageName);
            if (storage) {
                try {
                    storage = JSON.parse(storage);
                } catch (err) {
                    storage = {}
                }
            } else {
                storage = {};
            }
            storageAPI.data[storageName] = storage;
            return storage;
        }

        function convertSavedDecks() {
            var storage = getStorage(SaveFields.decks);
            if (typeof storage.savedDecks === 'undefined') {
                storageAPI.setField(SaveFields.decks, "savedDecks", storage);
            }
        }
    }());
} else {
    (function () {
        storageAPI.initialize = function () {
            storageAPI.getSavedDecks = function () { return {} };
            storageAPI.loadDeck = notSupported;
            storageAPI.deleteDeck = notSupported;
            storageAPI.clearDecks = notSupported;
            storageAPI.getField = function (storageName, fieldName, defaultValue) {
                return defaultValue;
            }
            storageAPI.setField = function () { };

            storageAPI.savedDecks = {};
            storageAPI.shouldShowTutorial = true;
        };

        var notSupported = function (name, hash) {
            alert("Your browser does not support this feature.");
        };
    }());
}

(function () {
    var SaveFields = {
        decks: "SavedDecks"
    }

    storageAPI.data = {};

    storageAPI.getSavedDecks = function () {
        return storageAPI.getField(SaveFields.decks, "savedDecks", {});
    }

    storageAPI.saveDeck = function (name, hash) {
        var savedDecks = storageAPI.getSavedDecks();
        savedDecks[name] = hash;
        storageAPI.onUpdateDecks(savedDecks);
    };

    storageAPI.loadDeck = function (name) {
        return storageAPI.getSavedDecks()[name];
    };

    storageAPI.deleteDeck = function (name) {
        var savedDecks = storageAPI.getSavedDecks();
        delete savedDecks[name];
        storageAPI.onUpdateDecks(savedDecks);
    };

    storageAPI.clearDecks = function (name) {
        var savedDecks = storageAPI.getSavedDecks();
        for (var name in savedDecks) {
            delete savedDecks[name];
        }
        storageAPI.onUpdateDecks(savedDecks);
    };

    storageAPI.onUpdateDecks = function () {
        if (!$loadDialogScope) {
            $loadDialogScope = angular.element('#loadDeckDialog').scope();
        }
        $loadDialogScope.$apply();
    };

    storageAPI.setShowTutorial = function (value) {
        shouldShowTutorial = value;
    }

    storageAPI.initialize();

    var $loadDialogScope;
}());