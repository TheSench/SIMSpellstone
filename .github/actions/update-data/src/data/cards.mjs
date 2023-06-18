import { addToMap } from "./helpers.mjs";
import { getJsonFromSynapse } from "./getXmlFromSynapse.mjs";
import { stableStringify } from "./stableStringify.mjs";

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
    arrayRoots: {
      'upgrades': 'upgrades',
      'skill': 'skill',
      'sub_type': 'sub_type'
    },
    rootNodes: ['unit'],
    rawRootMaps: {
      unit: addCard(cards)
    }
  };

  await Promise.all([
    // "cards.xml",
    "cards_heroes.xml",
    "cards_premium_aether.xml",
    "cards_premium_chaos.xml",
    "cards_premium_wyld.xml",
    "cards_reward.xml",
    "cards_shard.xml",
    "cards_special.xml",
    "cards_standard.xml",
    "cards_story.xml"
  ].map(async function (cardFile) {
    await getJsonFromSynapse(cardFile, options);
  }));

  return cards;
}

function addPortraitPrefix(portrait) {
  return "portrait_" + portrait.toLowerCase().replace('portrait_', '');
}

function addPrefabPrefix(portrait) {
  return "prefab_" + portrait;
}

function addCard(cards) {
  const conversions = {
    attack: parseFloat,
    health: parseFloat,
    cost: parseFloat,
    x: parseFloat,
    c: parseFloat,
    rarity: parseFloat,
    shard_card: parseFloat,
    unit: cleanUpUnit,
    portrait: addPortraitPrefix,
    asset_prefab: addPrefabPrefix,
    hidden_until: convertTime,
    hidden_until_time: convertTime,
    card_type: String,
    type: String,
    sub_type: String,
    id: String,
    set: String,
    tower_card: String,
  };
  const filterProps = new Set(['asset_bundle', 'asset_bundle_alt', 'picture_alt', 'cannot_salvage', 'give_full_salvage', 'salvage_bonus', 'item_name', 'item_desc', 'item_icon', 'item_bundle_id', 'item_overflow_item_id', 'release_set', 'fusion_level', 'mythic']);
  const renames = {
    'hidden_until_time': 'hidden_until'
  };
  function convert(element, key) {
    if (Array.isArray(element)) {
      return element.map(convert);
    } else if (typeof element === "object") {
      const newElement = {};
      Object.entries(element).forEach(function ([key, value]) {
        if (key.startsWith('#')) {
          delete element[key];
          return;
        }
        if (key.startsWith('@')) {
          delete element[key];
          key = key.substring(1);
        }
        if (filterProps.has(key)) {
          delete element[key];
          return;
        }
        if (renames[key]) key = renames[key];

        if (Array.isArray(value)) {
          value = value.map(value => convert(value, key));
        } else if (typeof value === "object") {
          value = convert(value);
        } else {
          value = conversions[key] ? conversions[key](value) : value;
        }
        newElement[key] = value;
      });
      return newElement;
    } else {
      return conversions[key] ? conversions[key](element) : element;
    }
  }

  return function convertUnit([_, card]) {
    cards[card.id] = cleanUpUnit(convert(card));
  }
}

function cleanUpUnit(unit) {
  // Convert upgrades
  var oldUpgrades = unit.upgrade || [];
  delete unit.upgrade;
  unit.upgrades = {};
  oldUpgrades.forEach(function (upgrade) {
    unit.upgrades[upgrade.level] = upgrade;
    upgrade.skill = upgrade.skill || [];
    delete upgrade.level;
  });
  unit.maxLevel = oldUpgrades.length + 1;
  // Remove fields not relevant for commanders
  if (unit.card_type === "1") {
    delete unit.attack;
    delete unit.cost;
  }
  if (unit.hasOwnProperty('desc') && !unit.desc) {
    delete unit.desc;
  } else if (Array.isArray(unit.desc)) {
    unit.desc = unit.desc.filter(it => it).join(' ');
  }
  // Clean up picture
  unit.picture = unit.picture || unit.portrait || unit.asset_prefab;
  delete unit.portrait;
  delete unit.asset_prefab;
  return {
    'picture': '', // Save ordering of property
    'card_type': '2',
    'type': '0',
    'sub_type': [],
    'skill': [],
    'upgrades': [],
    ...unit
  };
}

function convertTime(time) {
  if (time) {
    return (parseInt(time) * 1000).toString();
  }
}
