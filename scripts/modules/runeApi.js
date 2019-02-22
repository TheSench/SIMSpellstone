define('runeApi', [], function () {
    var api = {
        addRunes: addRunes,
        canUseRune: canUseRune,
        getRune: getRune
    };

    function getRune(rune_id) {
        return RUNES[rune_id];
    }

    function canUseRune(card, rune) {    
        var statBoost = rune.stat_boost;
        if (rune.faction_req) {
            if (!card.isInFaction(rune.faction_req)) {
                return false;
            }
        }
        for (var key in statBoost) {
            if (key === "skill") {
                var skillBoost = statBoost[key];
                var all = (skillBoost.all || '0');
                if (!card.hasSkill(skillBoost.id, all)) return false;
            }
        }
        return true;
    }

    function addRunes(card, runes) {
        if (!card.runes) card.runes = [];
        for (var i = 0, len = runes.length; i < len; i++) {
            var runeID = runes[i].id;
            var statBoost = getRune(runeID).stat_boost;
            card.runes.push({
                id: runeID,
                stat_boost: statBoost
            });

            for (var key in statBoost) {
                var boost = statBoost[key];
                if (key === "skill") {
                    // Will be handled later
                } else {
                    if (isNaN(boost)) {
                        boost = Math.max(Math.ceil(card[key] * boost.mult), (boost.min_bonus || 1));
                    }
                    card[key] += parseInt(boost);
                }
            }
        }
    }

    return api;
});