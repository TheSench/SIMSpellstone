var TurnManager = (function () {
    var logger;

    var TurnManager = function (logger) {
        this.logger = logger;
    };

    var playTurn = TurnManager.prototype.playTurn = function (player, opponent) {
        var field_p = player.field;
        var field_o = opponent.field;

        // Upkeep (currently only Valor)
        this.upkeep(field_p, field_o);

        // Begin (Clear statuses)
        this.startTurn(field_p, field_o);

        // Draws
        this.drawCard(player);

        // Plays
        this.playCard(field_p, field_o);

        // Actions
            // BGE's
            // Commander
            // Empower
            // Units
        this.activateUnits(field_p, field_o);

        // End 
            // DoT from Poison/Scorch
            // Clear statuses
            // Remove Dead
        this.endTurn(field_p, field_o);
    };

    var upkeep = TurnManager.prototype.upkeep = function (field_p, field_o) {
        for (let i = 0, len = field_p.length; i < len; i++) {
            let unit = field_p[i];
            unit.onUpkeep(field_p, field_o, i);
        }
    };

    var startTurn = TurnManager.prototype.begin = function (field_p, field_o) {
        for (let i = 0, len = field_p.length; i < len; i++) {
            let unit = field_p[i];
            unit.onStartTurn(field_p, field_o, i);
        }
    };

    var drawCard = TurnManager.prototype.drawCard = function (player) {
        var handIndex = player.handIndex;
        var deck = player.deck;
        var hand = player.hand;
        while (hand.length < 3) {
            if (handIndex < deck.length) {
                var newCard = deck[handIndex++];
                // TODO: Check for trap
                hand.push(newCard);
            } else {
                this.drawCard = emptyDeck;
                break;
            }
        }
        player.handIndex = handIndex;
    };

    var emptyDeck = function () { };

    var playCard = TurnManager.prototype.playCard = function (hand, field) {
        var card = this.popCard(hand);
        card.index = field.length;
        field.push(card);
    };

    var activateUnits = TurnManager.prototype.activations = function (field_p, field_o) {
        for (let i = 0, len = field_p.length; i < len; i++) {
            let unit = field_p[i];
            unit.onEarlyActivation(field_p, field_o, i);
        }
        for (let i = 0, len = field_p.length; i < len; i++) {
            let unit = field_p[i];
            unit.onActivation(field_p, field_o, i);
        }
    };
    
    // - Clear statuses that wear off at end of turn
    // - Handle DoT (Poison/Scorch)
    // - Shift over to the left if there are any gaps.
    var endTurn = TurnManager.prototype.removeDead = function (field) {
        // Find first dead unit
        for (let currentIndex = 0, len = field.length; currentIndex < len; currentIndex++) {
            let unit = field[currentIndex];
            // Starting at the first dead unit, start shifting.
            unit.onEndTurn();
            if (!unit.isAlive()) {
                if (logger) logger.log(debug_name(unit) + ' is removed from field<br>');
                let newIndex = currentIndex;	// Store the new position value for the next living unit
                for (currentIndex++; currentIndex < len; currentIndex++) {
                    unit = field[currentIndex];
                    unit.onEndTurn();

                    if (!unit.isAlive()) {
                        // If this unit is dead, don't update newPosition, we still need to fill that slot
                        if (logger) logger.log(debug_name(unit) + ' is removed from field<br>');
                    } else {
                        // If this unit is alive, set its position to newPosition, and then update newPosition to be the next slot
                        unit.index = newIndex;
                        field[newIndex] = unit;
                        newIndex++;
                    }
                }
                // We are done shifting slots, so set the length of the array (to get rid of the extra indices on the end)
                // and break out of the for-loop.
                field.length = newIndex;
                break;
            }
        }
    };

    var reset = TurnManager.prototype.reset = function () {
        this.drawCard = drawCard;
    }

    return TurnManager;
})();