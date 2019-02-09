define('storageAPI', [
    'urlHelpers'
], function (
    urlHelpers
) {
    "use strict";

    var storageAPI = {};
    var SaveFields = {
        decks: "SavedDecks"
    };
    var $loadDialogScope;

    function localStorageSupported() {
        // LocalStorage Support Check : https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
        try {
            var storage = window.localStorage,
                x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return false;
        }
    }

    function fullAPI() {
        var SaveFields = {
            decks: "SavedDecks",
            tutorial: "Tutorial"
        };

        storageAPI.initialize = function () {
            var currentPage = urlHelpers.getCurrentPage();

            convertSavedDecks();

            storageAPI.getField(SaveFields.decks, "savedDecks", {});
            storageAPI.shouldShowTutorial = storageAPI.getField(SaveFields.tutorial, currentPage, true)[currentPage];

            var cachedOnUpdate = storageAPI.onUpdateDecks;
            storageAPI.onUpdateDecks = function (savedDecks) {
                cachedOnUpdate();
                storageAPI.setField(SaveFields.decks, "savedDecks", savedDecks);
            };

            storageAPI.setShowTutorial = function (value) {
                storageAPI.shouldShowTutorial = value;
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
        };

        storageAPI.setField = function (storageName, fieldName, newValue) {
            var storage = getStorage(storageName);
            storage[fieldName] = newValue;
            localStorage.setItem(storageName, JSON.stringify(storage));
        };

        function getStorage(storageName) {
            var storage = localStorage.getItem(storageName);
            if (storage) {
                try {
                    storage = JSON.parse(storage);
                } catch (err) {
                    storage = {};
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

        window.addEventListener('storage', function (e) {
            if (e.key !== '__storage_test__') {
                var oldValue = localStorage.getItem(e.key);
                if (oldValue !== e.newValue) {
                    angular.element('#loadDeckDialog').scope().$apply(
                        localStorage.setItem(e.key, e.newValue)
                    );
                }
            }
        });
    }

    function limitedAPI() {
        storageAPI.initialize = function () {
            storageAPI.getSavedDecks = function () { return {}; };
            storageAPI.loadDeck = notSupported;
            storageAPI.deleteDeck = notSupported;
            storageAPI.clearDecks = notSupported;
            storageAPI.getField = function (storageName, fieldName, defaultValue) {
                return defaultValue;
            };
            storageAPI.setField = function () { };

            storageAPI.savedDecks = {};

            storageAPI.setShowTutorial = function (value) {
                storageAPI.shouldShowTutorial = value;
            };
            storageAPI.shouldShowTutorial = true;
        };

        var notSupported = function () {
            alert("Your browser does not support this feature.");
        };
    }

    // Set up StorageAPI based on feature availability
    if (localStorageSupported()) {
        fullAPI();
    } else {
        limitedAPI();
    }

    storageAPI.data = {};

    storageAPI.getSavedDecks = function () {
        return storageAPI.getField(SaveFields.decks, "savedDecks", {});
    };

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

    storageAPI.initialize();

    return storageAPI;
});