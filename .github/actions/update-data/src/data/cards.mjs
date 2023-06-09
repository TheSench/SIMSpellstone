import { addToMap } from "./helpers.mjs";
import { getJsonFromSynapse } from "./getJsonFromSynapse.mjs";

var cardsJson;

export async function getCardsJs() {
  cardsJson = await getCardsJson();

  var jsFile = '"use strict"\n\n' +
    'var CARDS = ' + stableStringify(cardsJson, null, '\t') + ';';

  return jsFile;
}

async function getCardsJson() {
  var cards = {};

  var options = {
    arrayProps: {
      'upgrade': 'upgrades',
      'skill': null,
      'sub_type': null
    },
    calculatedProps: {
      'unit': {
        'maxLevel': getMaxLevel
      }
    },
    conversions: {
      attack: parseFloat,
      health: parseFloat,
      cost: parseFloat,
      x: parseFloat,
      c: parseFloat,
      rarity: parseFloat,
      shard_card: parseFloat,
      unit: cleanUpUnit(cards),
      portrait: addPortraitPrefix,
      asset_prefab: addPrefabPrefix,
      hidden_until: convertTime,
      hidden_until_time: convertTime
    },
    defaults: {
      'unit': function () {
        return {
          'picture': '', // Save ordering of property
          'card_type': '2',
          'type': '0',
          'sub_type': [],
          'skill': [],
          'upgrades': []
        };
      }
    },
    filteredProps: ['asset_bundle', 'asset_bundle_alt', 'picture_alt', 'cannot_salvage', 'give_full_salvage', 'salvage_bonus', 'item_name', 'item_desc', 'item_icon', 'item_bundle_id', 'item_overflow_item_id', 'release_set', 'fusion_level', 'mythic'],
    renames: {
      'hidden_until_time': 'hidden_until'
    },
    rootNodes: ['unit']
  };

  await Promise.all([
    //"cards.xml"
    "cards_heroes.xml",
    "cards_premium_aether.xml",
    "cards_premium_chaos.xml",
    "cards_premium_wyld.xml",
    "cards_reward.xml",
    "cards_shard.xml",
    "cards_special.xml",
    "cards_standard.xml",
    "cards_story.xml"
  ].map(function (cardFile) {
    getJsonFromSynapse(cardFile, options);
  }));

  return cards;
}

function addPortraitPrefix(portrait) {
  return "portrait_" + portrait.toLowerCase().replace('portrait_', '');
}

function addPrefabPrefix(portrait) {
  return "prefab_" + portrait;
}

function cleanUpUnit(cards) {
  var addToCards = addToMap(cards);
  return function (unit) {
    // Convert upgrades
    var oldUpgrades = unit.upgrades;
    unit.upgrades = {};
    oldUpgrades.forEach(function (upgrade) {
      unit.upgrades[upgrade.level] = upgrade;
      upgrade.skill = upgrade.skill || [];
      delete upgrade.level;
    });
    // Remove fields not relevant for commanders
    if (unit.card_type === "1") {
      delete unit.attack;
      delete unit.cost;
    }
    // Clean up picture
    unit.picture = unit.picture || unit.portrait || unit.asset_prefab;
    delete unit.portrait;
    delete unit.asset_prefab;

    addToCards(unit);
  }
}

function getMaxLevel(unit) {
  return unit.upgrades.length + 1;
}

function convertTime(time) {
  if (time) {
    return (parseInt(time) * 1000).toString();
  }
}