define('log', [
    'factions',
    'skillApi'
],
function(
    factions,
    skillApi
) {
    "use strict";

    var api = {
        skill: logSkill,
        name: logCardName
    };
    
    function truncate(value) {
        if (value > Math.floor(value)) {
            value = value.toFixed(1);
        }
        return value;
    }

    function logSkill(skill) {
        var output = skillApi.nameFromId(skill.id);
        if (skill.all) output += ' all';
        if (skill.y) output += ' ' + factions.names[skill.y];
        if (skill.s) output += ' ' + skillApi.nameFromId(skill.s);
        if (skill.c) output += ' every ' + skill.c + ' turns';
        else if (skill.x) output += ' ' + skill.x;
        return output;
    }

    function logCardName(card, hideStats) {
        if (card.owner === 'cpu') {
            var tag = 'i';
        } else {
            var tag = 'b';
        }
        var output = '<' + tag + '>';
        output += card.name;
        if (card.runes.length) output += "*";
        if (card.maxLevel > 1) output += '{' + card.level + '/' + card.maxLevel + '}';
        if (card.key !== undefined) output += ' (' + card.key + ')';
        output += '</' + tag + '>';
        if (!hideStats) {
            output += '<u>';
            if (card.isCommander()) {
                output += ' [';
                if (card.health_left !== undefined) output += truncate(card.health_left);
                else output += card.health;
                output += ' HP]';
            } else if (card.isAssault()) {
                output += ' [';
                var atk = card.adjustedAttack();
                if (isNaN(atk) || atk == undefined) atk = card.attack;
                output += atk;
                output += '/';
                if (card.health_left !== undefined) output += truncate(card.health_left);
                else output += card.health;
                output += '/';
                if (card.timer !== undefined) output += card.timer;
                else output += card.cost;
                output += ']';
            }
            output += '</u>';
        }
    
        return output;
    }

    return api;
});