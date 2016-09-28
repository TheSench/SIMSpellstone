var storageAPI = {};

(function (angular) {
    'use strict';

    var DeckStorageCtrl = function ($scope, $window) {
        $scope.savedDecks = $window.storageAPI.savedDecks;

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
            decks: "SavedDecks"
        }

        storageAPI.initialize = function () {
            SaveFields.tutorial = "Tutorial-" + getCurrentPage();

            loadField("savedDecks", SaveFields.decks, {}, true);
            loadField("shouldShowTutorial", SaveFields.tutorial, true);

            var cachedOnUpdate = storageAPI.onUpdateDecks;
            storageAPI.onUpdateDecks = function () {
                cachedOnUpdate();
                localStorage.setItem(SaveFields.decks, JSON.stringify(storageAPI.savedDecks));
            };

            var cachedSetShowTutorial = storageAPI.setShowTutorial;
            storageAPI.setShowTutorial = function (value) {
                cachedSetShowTutorial(value);
                localStorage.setItem(SaveFields.tutorial, JSON.stringify(storageAPI.shouldShowTutorial));
            };
        };

        function loadField(fieldName, storageName, defaultValue) {

            var value = localStorage.getItem(storageName);
            if (value) {
                try {
                    value = JSON.parse(value);
                } catch (e) {
                    value = defaultValue;
                }
            } else {
                value = defaultValue;
            }
            storageAPI[fieldName] = value;
        }
    }());
} else {
    (function () {
        storageAPI.initialize = function () {
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

    storageAPI.saveDeck = function (name, hash) {
        storageAPI.savedDecks[name] = hash;
        storageAPI.onUpdateDecks();
    };

    storageAPI.loadDeck = function (name) {
        return storageAPI.savedDecks[name];
    };

    storageAPI.deleteDeck = function (name) {
        delete storageAPI.savedDecks[name];
        storageAPI.onUpdateDecks();
    };

    storageAPI.clearDecks = function (name) {
        var savedDecks = storageAPI.savedDecks;
        for (var name in savedDecks) {
            delete savedDecks[name];
        }
        storageAPI.onUpdateDecks();
    };

    storageAPI.onUpdateDecks = function () {
        if (!$loadDialogScope) {
            $loadDialogScope = angular.element('#loadDeckDialog').scope();
        }
        $loadDialogScope.$apply();
    };

    storageAPI.setShowTutorial = function (value) {
        storageAPI.shouldShowTutorial = value;
    }

    storageAPI.initialize();

    var $loadDialogScope;
}());