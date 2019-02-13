define('debugMessages', [
    'debugLog',
    'log'
], function(
    debugLog,
    log
) {
    'use strict';

    var api = {
        logDead: logDead,
        logCardPlayed: logCardPlayed,
        logDamage: logDamage,
        logNotImplemented: logNotImplemented,
        logDualstrike: logDualstrike,
        logSilenced: logSilenced,
        logScorch: logScorch,
        logNullified: logNullified,
        logInvisibile: logInvisibile,
        logBuff: logBuff
    };

    function logDead(unit) {
        if(debugLog.enabled) {
            debugLog.appendLines(log.name(unit) + ' <strong>is removed from field</strong>');
        }
    }

    function logCardPlayed(commander, card) {
        if ((debugLog.enabled || debugLog.cardsPlayedOnly)) {
            debugLog.appendLines(log.name(commander) + ' plays ' + log.name(card));
        }
    }

    function logDamage(sourceUnit, targetUnit, damage, logFn) {
        if (debugLog.enabled) {
            logFn(sourceUnit, targetUnit, damage);
        }
    }

    function logNotImplemented(skillID, unit) {
		if (debugLog.enabled) {
			var skillName = (SKILL_DATA[skillID] ? SKILL_DATA[skillID].name : skillID);
			debugLog.appendLines(log.name(unit) + ' attempts to use ' + skillName + ', but it is not implemented.');
		}
    }

    function logSilenced(unit) {
        if (debugLog.enabled) {
            debugLog.appendLines(log.name(unit) + " is silenced and cannot use skills");
        }
    }
    
    function logDualstrike(unit) {
        if (debugLog.enabled) {
            debugLog.appendLines(log.name(unit) + ' activates dualstrike');
        }
    }

    function logScorch(sourceUnit, amount, targetUnit) {
        if (debugLog.enabled) {
            var targetName = (targetUnit ? log.name(targetUnit) : 'itself');
            debugLog.appendLines(log.name(sourceUnit) + ' inflicts scorch(' + amount + ') on ' + targetName);
        }
    }

    function logNullified(sourceUnit, skillVerb, target) {
        if (debugLog.enabled) {
            debugLog.appendLines(log.name(sourceUnit) + ' ' + skillVerb + ' ' + getTargetName(target) + ' but it is nullified!');
        }
    }

    function logInvisibile(sourceUnit, skillVerb, target) {
        if (debugLog.enabled) {
            debugLog.appendLines(log.name(sourceUnit) + ' ' + skillVerb + ' ' + getTargetName(target) + ' but it is invisible!');
        }
    }

    function logBuff(sourceUnit, skillVerb, target, enhanced, amount, additionalDebug) {
        if (debugLog.enabled) {
            if (enhanced) debugLog.appendLines('<u>(Enhance: +' + enhanced + ')</u>');
            var line = log.name(sourceUnit) + ' ' + skillVerb + ' ' + log.name(target) + ' by ' + amount;
            if (additionalDebug) {
                line += additionalDebug(target, amount);
            }
            debugLog.appendLines(line);
        }
    }

    function getTargetName(source, target) {
        return (source === target ? 'itself' : log.name(target));
    }

    return api;
});