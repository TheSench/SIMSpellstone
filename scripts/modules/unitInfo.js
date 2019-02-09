define('unitInfo', [
    'cardApi'
], function (
    cardApi
) {
    "use strict";
    
    var api = {
        areEqual: areEqual,
        getEnhancement: getEnhancement,
        initializeUnit: initializeUnit,
        isImbued: isImbued,
        create: makeUnitInfo,
        defaultCommander: makeUnitInfo(202, 1) // Elaria Captain
    };

    function makeUnitInfo(id, level, runes) {
        var unit = {
            id: Number(id),
            level: Number(level),
            runes: []
        };
        if (runes) unit.runes = runes;
        return unit;
    }

    function getRuneID(unit) {
        return (unit.runes.length && unit.runes[0].id) || 0;
    }

    function areEqual(unitInfo1, unitInfo2) {
        return (!unitInfo1) === (!unitInfo2) // Silly null-check
            && unitInfo1.id === unitInfo2.id
            && unitInfo1.level === unitInfo2.level
            && getRuneID(unitInfo1) === getRuneID(unitInfo2);
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