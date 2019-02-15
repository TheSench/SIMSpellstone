define('debugMessages', [
    'debugLog',
    'skillApi',
    'log'
], function (
    debugLog,
    skillApi,
    log
) {
    'use strict';

    var api = {
        logDead: logDead,
        logCardPlayed: logCardPlayed,
        logDamage: logDamage,
        logNotImplemented: logNotImplemented,
        logDualstrike: logDualstrike,
        logCannotValor: logCannotValor,
        logSilenced: _logCannotUseSkills('silenced'),
        logFrozen: _logCannotAttack('frozen'),
        logWeakened: _logCannotAttack('weakened'),
        logImbuesNew: logImbuesNew,
        logImbuesExisting: logImbuesExisting,
        logScorch: logScorch,
        logNullified: logNullified,
        logInvisibile: logInvisibile,
        logStatusEffect: logStatusEffect,
        logInflicts: logInflicts,
        logGainAttack: logGainAttack,
        logGainHealth: logGainHealth,
        logChargeSkill: logChargeSkill,
        logReanimate: logReanimate,
        logAction: logAction,
        logOutcome: logOutcome,
        logStartBattle: logStartBattle,
        logTurnStart: logTurnStart,
        logTurnEnd: logTurnEnd
    };

    function logDead(unit) {
        debugLog.appendLines(log.name(unit) + ' <strong>is removed from field</strong>');
    }

    function logCardPlayed(commander, card) {
        if ((debugLog.enabled || debugLog.cardsPlayedOnly)) {
            debugLog.appendLines(log.name(commander) + ' plays ' + _getTargetName(card));
        }
    }

    function logDamage(sourceUnit, targetUnit, skillName, skillVerb, damageInfo, logFn) {
        debugLog.append('<u>(' + skillName + ': +' + damageInfo.originalDamage);
        if (damageInfo.modifiers) {
            Object.keys(damageInfo.modifiers).forEach(function (name) {
                var value = damageInfo.modifiers[name];
                if (value) {
                    debugLog.append(' ' + name + ': ' + (value > 0 ? '+' : '') + value);
                }
            });
        }
        debugLog.appendLines(') = ' + (damageInfo.damage || damageInfo.originalDamage) + ' damage</u>');

        if (sourceUnit) {
            debugLog.append(log.name(sourceUnit) + ' ' + skillVerb + ' ' + _getTargetName(targetUnit, sourceUnit) + ' for ' + damageInfo.damage + ' damage');
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

    function logNotImplemented(skillID, unit) {
        var skillName = (SKILL_DATA[skillID] ? SKILL_DATA[skillID].name : skillID);
        debugLog.appendLines(log.name(unit) + ' attempts to use ' + skillName + ', but it is not implemented.');
    }

    function _logCannotUseSkills(reason) {
        return _logCannotDo(reason, 'use skills');
    }

    function logReanimate(unit) {
        debugLog.appendLines(log.name(unit) + ' is reanimated</br>');
    }

    function logImbuesNew(sourceUnit, targetUnit, imbuedSkill, amount) {
        debugLog.appendLines(log.name(sourceUnit) + ' imbues ' + log.name(targetUnit, false) + ' existing ' + log.skill(imbuedSkill) + ' by ' + amount);
    }

    function logImbuesExisting(sourceUnit, targetUnit, imbuedSkill, amount) {
        debugLog.appendLines(log.name(sourceUnit) + ' imbues ' + log.name(targetUnit, false) + ' with ' + log.skill(imbuedSkill) + '(' + amount + ')');
    }

    function logCannotValor(unit, enemy) {
        debugLog.appendLines(log.name(unit) + ' activates valor but ');
        if (!enemy) {
            debugLog.appendLines('there is no opposing enemy.');
        } else {
            debugLog.appendLines('enemy is not strong enough.');
        }
    }

    function _logCannotAttack(reason) {
        return _logCannotDo(reason, 'attack');
    }

    function _logCannotDo(reason, action) {
        return function logCannotDoAction(unit) {
            debugLog.appendLines(log.name(unit) + ' is ' + reason + ' and cannot ' + action);
        };
    }

    function logDualstrike(unit) {
        debugLog.appendLines(log.name(unit) + ' activates dualstrike');
    }

    function logScorch(sourceUnit, amount, targetUnit) {
        debugLog.appendLines(log.name(sourceUnit) + ' inflicts scorch(' + amount + ') on ' + _getTargetName(targetUnit, sourceUnit));
    }

    function logNullified(sourceUnit, skillVerb, target) {
        logSkillStopped(sourceUnit, skillVerb, target, 'nullified');
    }

    function logInvisibile(sourceUnit, skillVerb, target) {
        logSkillStopped(sourceUnit, skillVerb, target, 'invisible');
    }

    function logSkillStopped(sourceUnit, skillVerb, target, reason) {
        debugLog.appendLines(log.name(sourceUnit) + ' ' + skillVerb + ' ' + _getTargetName(target, sourceUnit) + ' but it is ' + reason + '!');
    }

    function logStatusEffect(sourceUnit, skillVerb, target, enhanced, amount, additionalDebug) {
        if (enhanced) debugLog.appendLines('<u>(Enhance: +' + enhanced + ')</u>');
        var line = log.name(sourceUnit) + ' ' + skillVerb + ' ' + _getTargetName(target, sourceUnit) + (amount ? ' by ' + amount : '');
        if (additionalDebug) {
            line += additionalDebug(target, amount);
        }
        debugLog.appendLines(line);
    }

    function logGainAttack(unit, skillVerb, amount) {
        debugLog.appendLines(log.name(unit) + ' ' + skillVerb + ' and gains ' + amount + " attack!</br>");
    }

    function logGainHealth(unit, verb, amount) {
        debugLog.appendLines(log.name(unit) + ' ' + verb + ' ' + amount + ' health');
    }

    function logChargeSkill(unit, skill) {
        if (skill.countdown) {
            debugLog.appendLines(log.name(unit) + ' charges ' + skillApi.nameFromId(skill.id) + ' (ready in ' + skill.countdown + ' turns)');
        } else {
            debugLog.appendLines(log.name(unit) + ' readies ' + skillApi.nameFromId(skill.id));
        }
    }

    function logInflicts(sourceUnit, statusName, statusValue, target) {
        debugLog.appendLines(log.name(sourceUnit) + ' inflicts ' + statusName + (statusValue ? '(' + statusValue + ')' : '') + ' on ' + _getTargetName(target, sourceUnit));
    }

    function logAction(sourceUnit, skillVerb, target) {
        debugLog.appendLines(log.name(sourceUnit) + '  ' + skillVerb + (target ? ' ' + _getTargetName(target, sourceUnit) : ''));
    }

    function logStartBattle(remainingSims) {
        if (debugLog.massDebug && remainingSims) {
            debugLog.appendLines('', '<hr>NEW BATTLE BEGINS<hr>');
        }
    }

    function logTurnStart(turn, activePlayer, field, deck) {
        var commander = log.name(field[activePlayer]['commander']);
        var deck = deck[activePlayer].deck;
        debugLog.appendLines('<div id="turn_' + turn + '" class="turn-info"><hr/><br/><u>Turn ' + turn + ' begins for ' + commander + '</u>');

        if (turn <= 2) {
            debugLog.appendLines(_logDrawCard(commander, deck, 0));
            debugLog.appendLines(_logDrawCard(commander, deck, 1));
        }
        debugLog.appendLines(_logDrawCard(commander, deck, 2));
    }

    function logTurnEnd(turn) {
        if (debugLog.massDebug) {
            debugLog.append('<u>Turn ' + turn + ' ends</u></br></br></div>');
        }
    }

    function _logOutcomeFound(desiredOutcome, matchesPlayed) {
        debugLog.prependLines(desiredOutcome + ' found after ' + matchesPlayed + ' games. Displaying debug output...', '');
        debugLog.appendLines('', '<h1>' + desiredOutcome.toUpperCase() + '</h1>');
    }

    function _logOutcomeNotFound(desiredOutcome, matchesPlayed) {
        debugLog.appendLines('No ' + desiredOutcome + ' found after ' + matchesPlayed + ' games. No debug output to display.');
    }

    function _logOutcome(result) {
        debugLog.appendLines('');
        if (result === 'draw') {
            debugLog.appendLines('<h1>DRAW</h1>');
        } else if (result) {
            debugLog.appendLines('<h1>WIN</h1>');
        } else {
            debugLog.appendLines('<h1>LOSS</h1>');
        }
    }

    function logOutcome(result, matchesPlayed, remainingSims) {
        if (debugLog.firstLoss) {
            if (result === 'draw') {
                _logOutcomeFound('Draw', matchesPlayed);
            } else if (result) {
                debugLog.clear();
                if (!remainingSims) {
                    _logOutcomeNotFound('losses', matchesPlayed);
                }
            } else {
                _logOutcomeFound('Loss', matchesPlayed);
            }
        } else if (debugLog.firstWin) {
            if (result && result !== 'draw') {
                _logOutcomeFound('Win', matchesPlayed);
            } else {
                debugLog.clear();
                if (!remainingSims) {
                    _logOutcomeNotFound('wins', matchesPlayed);
                }
            }
        } else if (debugLog.massDebug) {
            _logOutcome(result);
        }
    }
    

    function _getTargetName(target, source) {
        return (target === source ? 'itself' : log.name(target));
    }

    function _logDrawCard(commander, deck, i) {
        var card = deck[i];
        if (card) {
            return commander + ' draws ' + log.name(card, true) + '';
        } else {
            return '';
        }
    }

    return api;
});