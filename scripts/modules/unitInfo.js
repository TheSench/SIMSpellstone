define('unitInfo', function () {
    var api = {
        areEqual: areEqual,
        getEnhancement: getEnhancement,
        initializeUnit: initializeUnit,
        isImbued: isImbued,
        create: makeUnitInfo,
        elariaCaptain: makeUnitInfo(202, 1)
    };
    
    var base64 = require('base64');
    var cardApi = require('cardApi');

    function makeUnitInfo(id, level, runes) {
        var unit = {
            id: Number(id),
            level: Number(level),
            runes: []
        };
        if (runes) unit.runes = runes;
        return unit;
    }

    function areEqual(unitInfo1, unitInfo2) {
        if ((!unitInfo1) !== (!unitInfo2)) return false; // Silly null-check
        var hash1 = base64.fromUnitInfo(unitInfo1);
        var hash2 = base64.fromUnitInfo(unitInfo2);
        return (hash1 === hash2);
    }

    function initializeUnit(unit, p, newKey) {
        unit.owner = p;
        unit.timer = unit.cost;
        unit.health_left = unit.health;
        // Setup status effects
        cardApi.applyDefaultStatuses(unit);
        unit.key = newKey;
        if (!unit.reusableSkills) unit.resetTimers();
    }

    function getEnhancement(unit, s, base) {
        var enhancements = unit.enhanced;
        var enhanced = (enhancements ? (enhancements[s] || 0) : 0);
        if (enhanced < 0) {
            enhanced = Math.ceil(base * -enhanced);
        }
        return enhanced;
    }

    function isImbued(unit, skillID, i) {
        var imbueSkillsKey;
        var skillType = SKILL_DATA[skillID].type;
        switch (skillType) {
            case 'flurry':
            case 'toggle':
                return unit.imbued[skillID];
    
            case 'passive':
                return (unit[skillID] === unit.imbued[skillID]);
    
            case 'onDeath':
                imbueSkillsKey = 'onDeathSkills';
                break;
    
            case 'earlyActivation':
                imbueSkillsKey = 'earlyActivationSkills';
                break;
    
            case 'activation':
            default:
                imbueSkillsKey = 'skill';
                break;
        }
    
    
        // Mark the first added skill index
        if (unit.imbued[imbueSkillsKey] !== undefined) {
            return (i >= unit.imbued[imbueSkillsKey]);
        } else {
            return false;
        }
    }
    
    return api;
});