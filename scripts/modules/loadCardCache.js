define('loadCardCache', [
    'storageAPI'
], function (
    storageAPI
) {
    "use strict";

    return function loadCardCache() {
        var cardData = storageAPI.getField("GameData", "CardCache");
        if (cardData && cardData.lastUpdated > DataUpdated) {
            if (cardData.newCards) {
                $.extend(CARDS, cardData.newCards);
                $.extend(FUSIONS, cardData.newFusions);
            }
            DataUpdated = cardData.lastUpdated;
        } else {
            // Clear cached info to reduce storage used
            var CARDS_cache = {
                newCards: {},
                newFusions: {},
                lastUpdated: Date.now()
            };
            storageAPI.setField("GameData", "CardCache", CARDS_cache);
        }
    };
});