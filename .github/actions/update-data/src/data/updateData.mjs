import { writeFileSync } from 'fs';
import { join } from 'path';
import { getBgesJs } from './bges.mjs';
import { getCardsJs } from './cards.mjs';
import { getCommonJs } from './common.mjs';
import { getFusionsJs } from './fusions.mjs';
import { getScriptFromGithub, getXmlFromGithub } from './getScriptFromGithub.mjs';
import { getXmlFromSynapse } from './getXmlFromSynapse.mjs';
import { getMapBgesJs } from './mapBges.mjs';
import { getCampaignJs } from './missionsAndLocations.mjs';
import { getRaidsJs } from './raids.mjs';
import { getRunesJs } from './runes.mjs';
import { getSkillsJs } from './skills.mjs';
import { getSpoilersJs } from './spoilers.mjs';

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
  ].map(getXmlChangesInner)))
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
  writeFileSync(join(folder, scriptPath), newScript);

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

async function getXmlChangesInner(xmlFile) {
  var oldXml = getXmlFromGithub(xmlFile);
  var newXml = await getXmlFromSynapse(xmlFile);
  if (oldXml !== newXml) {
    return {
      folder: 'cards/',
      filename: xmlFile,
      contents: newXml
    };
  }

  return null;
}
