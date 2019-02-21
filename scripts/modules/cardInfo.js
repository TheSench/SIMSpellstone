define('cardInfo', [], function() {
    var api = {
        loadCard: loadCard,
        isCommander: isCommander,
        isAssault: isAssault,
        isTrap: isTrap
    };

    function loadCard(id) {
        var card = CARDS[id];
        return card;
    }

    function isCommander(id) {
        var card = loadCard(id);
        return (card && card.card_type === '1');
    }
    
    function isAssault(id) {
        var card = loadCard(id);
        return (card && card.card_type === '2');
    }
    
    function isTrap(id) {
        var card = loadCard(id);
        return (card && card.card_type === '3');
    }

    return api;
});