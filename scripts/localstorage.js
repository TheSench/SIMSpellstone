var storageAPI = {};
if(function(type) {
    // LocalStorage Suppotr Check : https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch(e) {
        return false;
    }
}('localStorage')) {
    (function () {
        var SaveFields = {
            decks: "SavedDecks"
        }

        storageAPI.initialize = function () {
            var saved = localStorage.getItem(SaveFields.decks);
            if (saved) {
                try {
                    storageAPI.savedDecks = JSON.parse(saved);
                } catch (e) {
                    storageAPI.savedDecks = {};
                }
            } else {
                storageAPI.savedDecks = {};
            }
        };

        storageAPI.initialize = function () {
            var saved = localStorage.getItem(SaveFields.decks);
            if (saved) {
                try {
                    storageAPI.savedDecks = JSON.parse(saved);
                } catch (e) {
                    storageAPI.savedDecks = {};
                }
            } else {
                storageAPI.savedDecks = {};
            }
        };

        storageAPI.onUpdate = function () {
            localStorage.setItem(SaveFields.decks, JSON.stringify(storageAPI.savedDecks));
        };
    }());
} else {
    (function () {
        storageAPI.initialize = function () {
            storageAPI.savedDecks = {};
        };

        storageAPI.onUpdate = function () {
            // Nothing to do, just make sure function call doesn't blow up
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
        storageAPI.onUpdate();
    };

    storageAPI.loadDeck = function (name) {
        return storageAPI.savedDecks[name];
        storageAPI.onUpdate();
    };

    storageAPI.deleteDeck = function (name) {
        delete storageAPI.savedDecks[name];
        storageAPI.onUpdate();
    };

    storageAPI.clearDecks = function (name) {
        var savedDecks = storageAPI.savedDecks;
        for (var name in savedDecks) {
            delete savedDecks[name];
        }
        storageAPI.onUpdate();
    };

    storageAPI.initialize();
}());

(function (angular) {
    'use strict';

    angular.module('deckStorageApp', [])
        .controller('DeckStorageCtrl', ['$scope', '$window', DeckStorageCtrl]);

    function DeckStorageCtrl($scope, $window) {
        $scope.savedDecks = $window.storageAPI.savedDecks;
    }
}(angular));
