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
        logStatusEffect: logStatusEffect,
        logInflicts: logInflicts,
        logGainAttack: logGainAttack,
        logSkillVerb: logSkillVerb,
        logOutcome: logOutcome,
        logStartBattle: logStartBattle,
        logOutcomeFound: logOutcomeFound,
        logOutcomeNotFound: logOutcomeNotFound
    };

    function logDead(unit) {
        if(debugLog.enabled) {
            debugLog.appendLines(log.name(unit) + ' <strong>is removed from field</strong>');
        }
    }

    function logCardPlayed(commander, card) {
        if ((debugLog.enabled || debugLog.cardsPlayedOnly)) {
            debugLog.appendLines(log.name(commander) + ' plays ' + getTargetName(card));
        }
    }

    function logDamage(sourceUnit, targetUnit, skillName, skillVerb, damageInfo, logFn) {
        if (debugLog.enabled) {
            debugLog.append('<u>(' + skillName + ': +' + damageInfo.originalDamage);
            if(damageInfo.modifiers) {
                Object.keys(damageInfo.modifiers).forEach(function (name) {
                    var value = damageInfo.modifiers[name];
                    if(value) {
                        debugLog.append(' ' + name + ': ' + (value > 0 ? '+' : '') + value);
                    }
                });
            }
            debugLog.appendLines(') = ' + (damageInfo.damage || damageInfo.originalDamage) + ' damage</u>');

            if(sourceUnit) {
                debugLog.append(log.name(sourceUnit) + ' ' + skillVerb + ' ' + getTargetName(targetUnit, sourceUnit) + ' for ' + damageInfo.damage + ' damage');
            } else {
                debugLog.append(log.name(targetUnit) + ' takes ' + skillVerb + ' damage');
            }
           
            debugLog.append(!targetUnit.isAlive() ? ' and it dies' : '');

            var additionalDebug = logFn && logFn();
            if (additionalDebug) {
                debugLog.append(additionalDebug);
            }

            debugLog.appendLines();
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
            debugLog.appendLines(log.name(sourceUnit) + ' inflicts scorch(' + amount + ') on ' + getTargetName(targetUnit, sourceUnit));
        }
    }

    function logNullified(sourceUnit, skillVerb, target) {
        if (debugLog.enabled) {
            logSkillStopped(sourceUnit, skillVerb, target, 'nullified');
        }
    }

    function logInvisibile(sourceUnit, skillVerb, target) {
        if (debugLog.enabled) {
            logSkillStopped(sourceUnit, skillVerb, target, 'invisible');
        }
    }

    function logSkillStopped(sourceUnit, skillVerb, target, reason) {
        debugLog.appendLines(log.name(sourceUnit) + ' ' + skillVerb + ' ' + getTargetName(target, sourceUnit) + ' but it is ' + reason + '!');
    }

    function logStatusEffect(sourceUnit, skillVerb, target, enhanced, amount, additionalDebug) {
        if (debugLog.enabled) {
            if (enhanced) debugLog.appendLines('<u>(Enhance: +' + enhanced + ')</u>');
            var line = log.name(sourceUnit) + ' ' + skillVerb + ' ' + getTargetName(target, sourceUnit) + (amount ? ' by ' + amount : '');
            if (additionalDebug) {
                line += additionalDebug(target, amount);
            }
            debugLog.appendLines(line);
        }
    }

    function logGainAttack(unit, skillVerb, amount) {
        if (debugLog.enabled) {
            debugLog.appendLines(log.name(unit) + ' ' + skillVerb + ' and gains ' + amount + " attack!</br>");
        }
    }

    function logInflicts(sourceUnit, statusName, statusValue, target) {
        if (debugLog.enabled) {
            debugLog.appendLines(log.name(sourceUnit) + ' inflicts ' + statusName + (statusValue ? '(' + statusValue + ')' : '') + ' on ' + getTargetName(target, sourceUnit));
        }
    }

    function logSkillVerb(sourceUnit, skillVerb, target) {
        if (debugLog.enabled) {
            debugLog.appendLines(log.name(sourceUnit) + '  ' + skillVerb + ' ' + getTargetName(target, sourceUnit));
        }
    }

    function logStartBattle(remainingSims) {
        if(debugLog.massDebug && remainingSims) {
        debugLog.appendLines('', '<hr>NEW BATTLE BEGINS<hr>');
        }
    }

    function logOutcomeFound(desiredOutcome, matchesPlayed) {
        debugLog.prependLines(desiredOutcome + ' found after ' + matchesPlayed + ' games. Displaying debug output...', '');
        debugLog.appendLines('', '<h1>' + desiredOutcome.toUpperCase() + '</h1>');
    }

    function logOutcomeNotFound(desiredOutcome, matchesPlayed) {
        debugLog.appendLines('No ' + desiredOutcome + ' found after ' + matchesPlayed + ' games. No debug output to display.');
    }

    function logOutcome(result) {
        debugLog.appendLines('');
        if (result === 'draw') {
            debugLog.appendLines('<h1>DRAW</h1>');
        } else if (result) {
            debugLog.appendLines('<h1>WIN</h1>');
        } else {
            debugLog.appendLines('<h1>LOSS</h1>');
        }
    }

    function getTargetName(target, source) {
        return (target === source ? 'itself' : log.name(target));
    }

    return api;
});