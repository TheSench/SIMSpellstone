import { getRunesJs } from './runes.mjs';
import { getBgesJs } from './bges.mjs';
import { getCampaignJs } from './data/campaign.mjs';
import { getFusionsJs } from './fusions.mjs';
import { getMapBgesJs } from './mapBges.mjs';
import { getSkillsJs } from './skills.mjs';
import { getCardsJs } from './cards.mjs';
import { getSpoilersJs } from './spoilers.mjs';
import { getRaidsJs } from './raids.mjs';
import { getCommonJs } from './common.mjs';
import { getXmlFromSynapse } from './getXmlFromSynapse.mjs';
import { getScriptFromGithub } from './getScriptFromGithub.mjs';

export async function updateData() {
  const changes = [];
  await compareFile(changes, 'runes.js', getRunesJs);
  await compareFile(changes, 'bges.js', getBgesJs);
  await compareFile(changes, 'campaign.js', getCampaignJs);
  await compareFile(changes, 'fusions.js', getFusionsJs);
  await compareFile(changes, 'mapBGEs.js', getMapBgesJs);
  await compareFile(changes, 'skills.js', getSkillsJs);

  const cardChanges = await compareFile(changes, 'cards.js', getCardsJs);
  if (cardChanges) {
    const spoilersJs = await getSpoilersJs(cardChanges);
    changes.push({
      folder: 'scripts/data/',
      filename: 'spoilers.js',
      contents: spoilersJs
    });
  }

  const raidsJs = await getRaidsJs();
  if (raidsJs) {
    changes.push({
      folder: 'scripts/data/',
      filename: 'raids.js',
      contents: raidsJs
    });
  }

  const commonJs = await getCommonJs(changes.length);
  if (commonJs) {
    changes.push({
      folder: 'scripts/data/',
      filename: 'common.js',
      contents: commonJs
    });
  }
}

async function getXmlChanges() {
  return (await Promise.all([
    'achievements.xml',
    'arena.xml',
    'battleground_effects.xml',
    'campaigns.xml',
    'cards.xml',
    'cards_config.xml',
    'cards_heroes.xml',
    'cards_premium_aether.xml',
    'cards_premium_chaos.xml',
    'cards_premium_wyld.xml',
    'cards_reward.xml',
    'cards_shard.xml',
    'cards_special.xml',
    'cards_standard.xml',
    'cards_story.xml',
    'fusion_recipes_cj2.xml',
    'guide.xml',
    'guilds.xml',
    'levels.xml',
    'market.xml',
    'missions.xml',
    'missions_event.xml',
    'passive_missions.xml',
    'tutorial1.xml'
  ].map(getXmlChanges)))
    .filter(it => it !== null);
}

function updateXmlFiles() {
  var changes = getXmlChanges();

  if (changes.length) {
    commitMultipleFilesToGithub_("XML", changes);
  }
}

async function compareFile(changes, scriptPath, scriptFunction, folder) {
  if (!folder) {
    folder = 'scripts/data/';
  }
  var oldScript = getScriptFromGithub(scriptPath);
  var newScript = await scriptFunction();

  if (oldScript !== newScript) {
    changes.push({
      folder: folder,
      filename: scriptPath,
      contents: newScript
    });
    return {
      oldScript: oldScript,
      newScript: newScript
    };
  }
}

async function getXmlChanges(xmlFile) {
  var oldXml = getXmlFromGithub_(xmlFile);
  var newXml = await normalizeXml(xmlFile);
  if (oldXml !== newXml) {
    return {
      folder: 'cards/',
      filename: xmlFile,
      contents: newXml
    };
  }

  return null;
}

async function normalizeXml(xmlFile) {
  var xml = await getXmlFromSynapse(xmlFile);
  return XmlService.getPrettyFormat().format(xml);
}
