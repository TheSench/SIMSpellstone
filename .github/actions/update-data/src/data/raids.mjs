import { getScriptFromGithub } from './data/getScriptFromGithub.mjs';
import { makeAPICall } from "./spellstoneAPI.mjs";
import { stableStringify } from "./stableStringify.mjs";

var raidsJson;

export async function getRaidsJs() {
  var newRaids = await getRaidsJson();
  var newRaidIds = Object.keys(newRaids);
  
  var oldRaidsScript = getScriptFromGithub('raids.js');
  var oldRaidsJson = oldRaidsScript
    .replace(/^"use strict"/, '')
    .replace('var RAIDS = ', '')
    .replace(/;$/g, '')
    .split('\n')
    .map(function(line) { return line.replace(/^\s+/, '').replace(/\r/g, ''); })
    .join('');
  
  raidsJson = JSON.parse(oldRaidsJson);
  newRaidIds.forEach(function(raidId) {
    raidsJson[raidId] = newRaids[raidId];
  });
  
  var newRaidsScript = '"use strict"\n\n' + 
    'var RAIDS = ' + stableStringify(raidsJson, null, '\t') + ';';
  if(oldRaidsScript !== newRaidsScript) {
    return newRaidsScript;
  }
}

async function getRaidsJson() {
  var raid = null;
  var events = await makeAPICall("updateEvents").upcoming_events;
  var raids = {};
  for(var id in events) {
    var event = events[id];
    if(event.type == 5 || event.type == 8) {
      var raid = getRaidInfo(event);
      raids[raid.id] = raid;
    }
  }
  var events = await makeAPICall("updateEvents").active_events;
  for(var id in events) {
    var event = events[id];
    if(event.type == 5 || event.type == 8) {
      var raid = getRaidInfo(event);
      raids[raid.id] = raid;
    }
  }
  
  return raids;
}

function getRaidInfo(raid) {
  var raid = {
    id: raid.id,
    type: getEventType(raid),
    name: raid.name,
    bge: raid.enemy_bge,
    upgradeLevels: (raid.dungeon_upgrade_levels || raid.raid_upgrade_levels),
    commander: raid.commander,
    deck: raid.deck
  };
  return raid
}

function getEventType(event, includeChallenges) {
  var type = event.type;
  if(typeof type !== "undefined") {
    if(type) type = type.toString();
    switch (type) {
      case '2':
        return "Brawl";
      case '3':
        return "Guild War";
      case '4':
        return "Guild Clash";
      case '5':
        return "Raid";
      case '6':
        return "Expedition";
      case '8':
        return "Dungeon";
      case '11':
        if(includeChallenges) {
          return "Challenge";
        }
        break;
    }
  }
  return null;
}