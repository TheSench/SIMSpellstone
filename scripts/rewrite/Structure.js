// Player:
//  - field: Field
//  - hand: Unit[]
//  - deck: Unit[]

// Field:
// - commander: Commander
// - units: Unit[]

// Commander:
//  -

// UnitKey
//  - ID
//  - Level
//  - RuneID

var CardFactory = (function () {

    var makeUnitKey = (function () {
        var baseKey = {
            get cardKey() {
                return (this.id + "-" + this.level);
            },
            get hasRune() {
                return (this.runeID !== null);
            },
            toString: function () {
                var string = this.cardKey;
                if (this.hasRune) {
                    string += ("-" + runeID);
                }
                return string;
            }
        };

        return function (id, level, runeID) {
            if (typeof runeID === 'undefined') {
                runeID = null;
            }

            var unitKey = Object.create(baseKey, {
                id: id,
                level: level,
                runeID: runeID,
            });

            return unitKey;
        };
    }());

    // Unit:
    //  - BasicInfo (basic info - faction, type, stuff that doesn't change with level)
    //  - Stats/Skills (stuff that changes with level/rune)
    //  - Statuses (stuff that changes during match)
    var makeUnit = (function () {
        var unitProto = {
            onUpkeep: function(field_p, field_o, i) {
                this.statuses.onUpkeep();
            },
            onStartTurn: function (field_p, field_o, i) {
                this.statuses.onStartTurn();
            },
            onEarlyActivation: function (field_p, field_o, i) {

            },
            onActivation: function (field_p, field_o, i) {

            },
            onEndTurn: function (field_p, field_o, i) {
                this.statuses.onEndTurn();
            },

            // Status functions
            get isAlive() {
                return (this.statuses.health > 0);
            },
            get isDamaged() {
                return (this.statuses.health < this.stats.health);
            },
            get isActive() {
                return (this.statuses.timer === 0);
            },
            get willActivate() {
                return (this.statuses.timer <= 1);
            },
            get attack() {
                var buffs = this.statuses;
                return (this.stats.attack + buffs.tempAttack + buffs.berserk + buffs.valor);
            }
        }

        return function (unitKey) {
            var unitData = getCardData(unitKey);
            unitData.statuses = makeCardStatus();

            Object.create(unitProto, unitData);

            return newCard;
        }
    }());

    // CardData:
    //  - BasicInfo (basic info - faction, type, stuff that doesn't change with level)
    //  - Stats (attack, health, and delay - may change with level/rune)
    //  - Skills (may change with level/rune)
    var getCardData = (function () {

        var cardDataCache = {};

        var fn = function (unitKey) {
            var cardData;

            cardData = cardDataCache[unitKey.toString()];

            if (typeof cardData === "undefined") {

                let baseCard = cardDataCache[unitKey.cardKey];
                if (typeof baseCard === "undefined") {
                    cardStats = getCardStats(unitKey.id, unitKey.level);
                    skills = cardStats.skills;

                    baseCard = {
                        basicInfo: getBasicInfo(id),
                        stats: cardStats.stats,
                        skills: skills
                    }

                    cardDataCache[unitKey.cardKey] = baseCard;
                }

                if (unitKey.hasRune) {
                    let baseStats = baseCard.stats;

                    cardData = {
                        basicInfo: baseCard.basicInfo,
                        stats: {
                            attack: baseStats.attack,
                            health: baseStats.health,
                            delay: baseStats.delay
                        },
                        skills: skills
                    };

                    cardDataCache[unitKey.toString()] = cardData;
                } else {
                    cardData = baseCard;
                }
            }
            return cardData;
        }

        fn.clearCache = function () {
            cardDataCache = {};
        }

        return fn;
    }());

    // BasicInfo (information that does NOT change with level):
    //  - ID
    //  - Name
    //  - Rarity
    //  - Set
    //  - Type (Unit/Commander)
    //  - Faction
    //  - SubFaction
    function getBasicInfo(id) {
        var card = CARDS[id];
        if (typeof card !== "undefined") {
            var basicInfo = {
                id: id,
                name: card.name,
                rarity: card.rarity,
                set: card.set,
                type: card.card_type,
                faction: card.type,
                subFactions: card.sub_type
            }
        }
    }

    // CardStats (information that does change with level):
    //  - Attack
    //  - Health
    //  - Delay
    //  - Skills
    function getCardStats(id, level) {
        var card = CARDS[id],
            attack = card.attack,
            health = card.health,
            delay = card.cost,
            skills = card.skill;

        for (var i = 2; i < level; i++) {
            var upgrade = card.upgrades[i];
            if (typeof upgrade !== "undefined") {
                attack = upgrade.attack || attack;
                health = upgrade.health || health;
                delay = upgrade.cost || delay;
                if (upgrade.skill.length > 0) {
                    skills = upgrade.skill;
                }
            }
        }

        var cardStats = {
            stats: {
                attack: attack,
                health: health,
                delay: delay
            },
            skills: skills
        };

        return cardStats;
    }

    // CardStatus (various status effects)
    var makeCardStatus = (function () {
        var onUpkeep = function () { };
        
        var onUpkeepTimer = function () {
            timer--;
            onUpkeep();
            if (timer === 0) {
                this.onUpkeep = onUpkeep;
            }
        };

        var cardStatus = {
            reset: function (health, timer) {
                this.health = health;
                this.timer = timer;

                if (this.timer > 0) {
                    this.onUpkeep = onUpkeepTimer;
                } else {
                    this.onUpkeep = onUpkeep;
                }

                // Damage Modifiers:
                this.armor = 0;
                this.barrier = 0;
                this.hex = 0;

                // Attack Modifiers
                this.tempAttack = 0;
                this.berserk = 0;
                this.valor = 0;

                // Other status effects
                this.iceshatter = 0;
                this.frozen = false;
                this.invisible = 0;
                this.nullified = 0;
                this.poisoned = 0;
                this.burned = 0;
                this.silenced = 0;

                return this;
            },

            onUpkeep: onUpkeep,

            onStartTurn: function () {
                this.iceshatter = 0;
                this.barrier = 0;
                this.hex = 0;
                this.invisible = 0;
            },

            onEndTurn: function () {
                this.frozen = false;
                this.nullified = 0;
                this.silenced = 0;
                this.tempAttack = 0;
            }
        }

        return function (health, timer) {
            var newCardStatus = Object.create(cardStatus);
            return newCardStatus.reset(health, timer);
        }
    }());

    return {
        makeUnitKey: makeUnitKey,
        makeUnit: makeUnit,
        getCardData: getCardData
    }
}());