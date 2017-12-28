var UnitHelpers = (function () {

    function isAlive(unit) {
        return (unit.statuses.health > 0);
    }

    function isActive(unit) {
        return (unit.timer === 0);
    }

    function adjustedAttack(unit) {
        var buffs = unit.statuses;
        return (unit.stats.attack + buffs.tempAttack + buffs.berserk + buffs.valor);
    }

    function permanentAttack(unit) {
        var buffs = unit.statuses;
        return (unit.stats.attack + buffs.berserk + buffs.valor);
    }

    return {
        isAlive: isAlive,
        isActive: isActive,
        adjustedAttack: adjustedAttack,
        permanentAttack: permanentAttack
    };
}());