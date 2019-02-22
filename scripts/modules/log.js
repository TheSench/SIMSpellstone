define('log', [
    'factions',
    'skillApi'
],
function(
    factions,
    skillApi
) {
    'use strict';

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
                output += truncate(card.health_left);
                output += ' HP]';
            } else if (card.isAssault()) {
                output += ' [';
                output += card.adjustedAttack();
                output += '/';
                output += truncate(card.health_left);
                output += '/';
                output += card.timer;
                output += ']';
            }
            output += '</u>';
        }
    
        return output;
    }

    return api;
});