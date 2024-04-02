import { addToMap } from './helpers.mjs';
import { makeAPICall } from './spellstoneAPI.mjs';
import { getJsonFromSynapse } from './getXmlFromSynapse.mjs';
import { stableStringify } from './stableStringify.mjs';

var campaignDataJson;

export async function getCampaignJs() {
  campaignDataJson = await getCampaignsJson();
  await mergeLocationsFromAPI_();
  var jsFile = '"use strict"\n\n' +
    'var LOCATIONS = ' + stableStringify(campaignDataJson.locations, null, '\t') + ';\n' +
    'var CAMPAIGNS = ' + stableStringify(campaignDataJson.campaigns, null, '\t') + ';\n' +
    'var MISSIONS = ' + stableStringify(campaignDataJson.missions, null, '\t') + ';';

  return jsFile;
}

async function getLocationsJson() {
  var locations = (await makeAPICall("init")).locations;
  for (var id in locations) {
    var location = locations[id];
    locations[id] = {
      id: location.id,
      name: location.name
    }
  }
  return locations;
}

async function mergeLocationsFromAPI_() {
  var apiLocations = await getLocationsJson();
  for (var id in apiLocations) {
    campaignDataJson.locations[id] = apiLocations[id];
  }
}

async function getCampaignsJson() {
  var campaigns = {};
  var missions = {};
  var locations = {
    "0": {
      "id": "0",
      "name": "Hero Upgrades"
    }
  };
  var options = {
    rootNodes: ['location', 'mission', 'campaign'],
    arrayRoots: { 'find_item': 'find_item', 'mission_id': 'mission_id', 'card': 'card' },
    rawRootMaps: {
      location: addLocation(locations),
      campaign: addCampaign(campaigns),
      mission: addMission(missions)
    }
  };
  await getJsonFromSynapse('missions.xml', options);
  await getJsonFromSynapse('missions_event.xml', options);
  await getJsonFromSynapse('campaigns.xml', options);

  return {
    campaigns: campaigns,
    missions: missions,
    locations: locations
  };
}

function addMission(missions) {
  const addToMissions = addToMap(missions);
  return function ([name, element]) {
    addToMissions({
      id: element.id.toString(),
      name: element.name,
      commander: {
        id: element.commander['@id'],
        level: element.commander['@level']
      },
      deck: element.deck.card.map(function (card) {
        const level = card['@level'];
        const mastery_level = card['@mastery_level'];
        const remove_mastery_level = card['@remove_mastery_level'];
        const result = {
          id: card['@id']
        }
        if (level) result.level = level;
        if (mastery_level) result.mastery_level = mastery_level;
        if (remove_mastery_level) result.remove_mastery_level = remove_mastery_level;
        return result;
      })
    });
  };
}

function getAttributeValue(element, name) {
  var attribute = element.getAttribute(name);
  return attribute && attribute.getValue();
}

function addCampaign(campaigns) {
  var addToCampaigns = addToMap(campaigns);
  return function ([name, element]) {
    addToCampaigns({
      id: element.id.toString(),
      name: element.name,
      location_id: element.location_id.toString(),
      side_mission: element.side_mission?.toString(),// && element.side_mission === "1",
      battleground_id: element.battleground_id?.toString(),
      missions: element.missions.mission_id?.map(it => it.toString()),
      items: (element.find_item || []).reduce(function (items, item) {
        items[item['@id']] = parseFloat(item['@drop_per_energy']);
        return items;
      }, {})
    });
  }
}

function addLocation(locations) {
  var addToLocations = addToMap(locations);
  return function ([name, element]) {
    addToLocations({
      id: element.id.toString(),
      name: element.name
    });
  }
}
