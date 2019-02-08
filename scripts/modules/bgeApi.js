define('bgeApi', function () {
    var api = {
        getBattlegrounds: getBattlegrounds
    };

    var log = require('log');
    var cardApi = require('cardApi');
    var debugLog = require('debugLog');

    function MakeSkillModifier(name, effect) {
        return {
            name: name,
            modifierType: effect.effect_type,
            effects: [effect]
        };
    }
    
    function MakeStatScalar(name, effect) {
        return {
            name: name,
            modifierType: "scale_stat",
            scaledStat: effect.effect_type.replace("scale_", ""),
            effects: [effect]
        };
    }
    
    var MakeOnPlayBGE = (function () {
        var OnPlayBGE = function (name, effect) {
            this.p = null;
            this.name = name;
            this.effect = effect;
            this.runes = [];
        };
    
        OnPlayBGE.prototype = {
            onCardPlayed: function (card) {
                SIMULATOR.onPlaySkills[this.effect.id](this, card, this.effect);
            },
    
            //Card ID is ...
            isCommander: function () {
                return false;
            },
    
            isAssault: function () {
                return false;
            }
    
        };
    
        return (function (name, effects) {
            return new OnPlayBGE(name, effects);
        });
    }());
    
    var MakeTrap = (function () {
        var Trap = function (name, trap_card) {
            this.name = name;
            this.id = trap_card.id;
            this.base = trap_card.base;
            this.mult = trap_card.mult;
            this.target_deck = trap_card.target_deck;
            this.y = trap_card.y;
        };
    
        Trap.prototype = {
            onCardPlayed: function (card, p_deck, o_deck) {
                var deck = (this.target_deck === "opponent" ? o_deck : p_deck);
                if (card.isInFaction(this.y)) {
    
                    var targets = [];
                    for (var t = 0; t < deck.length; t++) {
                        var card = deck[t];
                        if (!card.trap) {
                            targets.push(card);
                        }
                    }
    
                    if (targets.length) {
                        // Create a trap card
                        var trapLevel = Math.ceil(card[this.base] * this.mult);
                        var trapInfo = unitInfo.create(this.id, trapLevel);
                        var trap = cardApi.byId(trapInfo);
    
                        // Shuffle the trap into opponent's deck
                        var index = (~~(Math.random() * targets.length));
                        targets[index].trap = trap;
    
                        if (debugLog.enabled) {
                            debugLog.appendLines(this.name + ' inserts ' + log.name(trap) + ' into the opposing deck.');
                        }
                    }
                }
            }
        };
    
        return (function (name, effects) {
            return new Trap(name, effects);
        });
    }());

    function addBgeFromList(battlegrounds, battleground, player) {
        for (var j = 0; j < battleground.effect.length; j++) {
            var effect = battleground.effect[j];
            var effect_type = effect.effect_type;
            if (effect_type === "skill") {
                var bge = cardApi.makeBattleground(battleground.name, effect);
                if (player === 'player') bge.ally_only = true;
                if (player === 'cpu') bge.enemy_only = true;
                battlegrounds.onTurn.push(bge);
            } else if (["evolve_skill", "add_skill", "scale_attributes", "statChange", "runeMultiplier"].indexOf(effect_type) >= 0) {
                var bge = MakeSkillModifier(battleground.name, effect);
                if (player === 'player') bge.ally_only = true;
                if (player === 'cpu') bge.enemy_only = true;
                battlegrounds.onCreate.push(bge);
            } else if (["scale_attack", "scale_health"].indexOf(effect_type) >= 0) {
                var bge = MakeStatScalar(battleground.name, effect);
                if (player === 'player') bge.ally_only = true;
                if (player === 'cpu') bge.enemy_only = true;
                battlegrounds.onCreate.push(bge);
            } else if (effect_type === "trap_card") {
                var bge = MakeTrap(battleground.name, effect);
                if (player === 'player') bge.ally_only = true;
                if (player === 'cpu') bge.enemy_only = true;
                battlegrounds.onCardPlayed.push(bge);
            } else if (effect_type === "on_play") {
                var bge = MakeOnPlayBGE(battleground.name, effect.effect);
                bge.attacker = effect.attacker;
                bge.defender = effect.defender;
                bge.first_play = effect.first_play;
                if (player === 'player') bge.ally_only = true;
                if (player === 'cpu') bge.enemy_only = true;
                battlegrounds.onCardPlayed.push(bge);
            }
        }
    }

    function addBgesFromList(battlegrounds, getbattleground, player) {
        if (!getbattleground) return null;
        var selected = getbattleground.split(",");
        for (var i = 0; i < selected.length; i++) {
            var id = selected[i];
            var battleground = BATTLEGROUNDS[id];
            addBgeFromList(battlegrounds, battleground, player);
        }
    }

    function addMissionBGE(battlegrounds, campaignID, missionLevel) {
        var campaign = CAMPAIGNS[campaignID];
        if (campaign) {
            var id = campaign.battleground_id;
            if (id) {
                var battleground = BATTLEGROUNDS[id];
                missionLevel = Number(missionLevel) - 1; // Convert to 0-based
                if (!battleground.starting_level || Number(battleground.starting_level) <= missionLevel) {
                    if (battleground.scale_with_level) {
                        battleground = JSON.parse(JSON.stringify(battleground));
                        var levelsToScale = missionLevel - Number(battleground.starting_level);
                        for (var i = 0; i < battleground.effect.length; i++) {
                            var effect = battleground.effect[i];
                            effect.mult = effect.base_mult + effect.mult * levelsToScale;
                        }
                    }
                    addBgeFromList(battlegrounds, battleground, 'cpu');
                }
            }
        }
    }

    function addRaidBGE(battlegrounds, raidID, raidLevel) {
        var bge_id = RAIDS[raidID].bge;
        if (bge_id) {
            var battleground = BATTLEGROUNDS[bge_id];
            if (battleground && Number(raidLevel) >= Number(battleground.starting_level)) {
                var enemy_only = battleground.enemy_only;

                for (var j = 0; j < battleground.effect.length; j++) {
                    var effect = battleground.effect[j];
                    var effect_type = effect.effect_type;
                    if (effect_type === "skill") {
                        if (battleground.scale_with_level) {
                            var mult = battleground.scale_with_level * (raidLevel - battleground.starting_level + 1);
                        } else {
                            var mult = 1;
                        }
                        var bge = cardApi.makeBattleground(battleground.name, effect, mult);
                        bge.enemy_only = enemy_only;
                        battlegrounds.onTurn.push(bge);
                    } else if (["evolve_skill", "add_skill", "scale_attributes", "statChange", "runeMultiplier"].indexOf(effect_type) >= 0) {
                        var bge = MakeSkillModifier(battleground.name, effect);
                        bge.enemy_only = enemy_only;
                        battlegrounds.onCreate.push(bge);
                    } else if (["scale_attack", "scale_health"].indexOf(effect_type) >= 0) {
                        var bge = MakeStatScalar(battleground.name, effect);
                        bge.enemy_only = enemy_only;
                        battlegrounds.onCreate.push(bge);
                    } else if (effect_type === "trap_card") {
                        var bge = MakeTrap(battleground.name, effect);
                        bge.enemy_only = enemy_only;
                        battlegrounds.onCardPlayed.push(bge);
                    }
                }
            }
        }
    }

    function addMapBGEs(battlegrounds, mapbges, player) {
        if (!mapbges) return null;
        var selected = mapbges.split(",");
        for (var i = 0; i < selected.length; i++) {
            var parts = selected[i].split("-");
            var location = parts[0];
            var index = parts[1];
            var value = parts[2];
            var mapBGE = Object.keys(MAP_BATTLEGROUNDS).filter(function (id) {
                return MAP_BATTLEGROUNDS[id].location_id == location;
            })[0];
            mapBGE = MAP_BATTLEGROUNDS[mapBGE];
            var battleground = mapBGE.effects[index].upgrades[value];
            addBgeFromList(battlegrounds, battleground, player);
        }
    }

    function getBattlegrounds(getbattleground, selfbges, enemybges, mapbges, campaignID, missionlevel, raidID, raidlevel) {

        // Set up battleground effects, if any
        var battlegrounds = {
            onCreate: [],
            onTurn: [],
            onCardPlayed: []
        };

        addBgesFromList(battlegrounds, getbattleground);
        addBgesFromList(battlegrounds, selfbges, 'player');
        addBgesFromList(battlegrounds, enemybges, 'cpu');
        addMapBGEs(battlegrounds, mapbges, 'player');

        if (campaignID) {
            addMissionBGE(battlegrounds, campaignID, missionlevel);
        } else if (raidID) {
            addRaidBGE(battlegrounds, raidID, raidlevel);
        }
        return battlegrounds;
    }

    return api;
});