var UnitHelpers = (function () {

    function isAlive(unit) {
        return unit.statuses.health > 0;
    }

    function adjustedAttack(unit) {
        var buffs = unit.statuses;
        return (unit.stats.attack + buffs.tempAttack + buffs.berserk + buffs.valor);
    }

    return {
        isAlive: isAlive
    };
}());