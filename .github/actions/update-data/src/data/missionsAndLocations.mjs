import { addToMap } from './helpers.mjs';
import { makeAPICall } from './spellstoneAPI.mjs';
import { getJsonFromSynapse } from './getXmlFromSynapse.mjs';

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
  var locations = await makeAPICall("updateEvents").locations;
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
  return function (element) {
    addToMissions({
      id: element.getChildText("id"),
      name: element.getChildText("name"),
      commander: {
        id: element.getChild("commander").getAttribute("id").getValue()
      },
      deck: element.getChild("deck").getChildren("card").map(function (card) {
        const level = getAttributeValue(card, "level");
        const mastery_level = getAttributeValue(card, "mastery_level");
        const remove_mastery_level = getAttributeValue(card, "remove_mastery_level");
        const result = {
          id: card.getAttribute("id").getValue()
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
  return function (element) {
    addToCampaigns({
      id: element.getChildText('id'),
      name: element.getChildText('name'),
      location_id: element.getChildText('location_id'),
      side_mission: element.getChildText('side_mission'),
      battleground_id: element.getChildText('battleground_id'),
      missions: element.getChild('missions').getChildren("mission_id").map(function (child) { return child.getText(); }),
      items: element.getChildren('find_item').reduce(function (items, item) {
        items[item.getAttribute("id").getValue()] = parseFloat(item.getAttribute("drop_per_energy").getValue());
        return items;
      }, {})
    });
  }
}

function addLocation(locations) {
  var addToLocations = addToMap(locations);
  return function (element) {
    addToLocations({
      id: element.getChildText("id"),
      name: element.getChildText("name")
    });
  }
}
