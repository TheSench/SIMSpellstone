import { writeFileSync } from 'fs';
import { join } from 'path';
import { getBgesJs } from './bges.mjs';
import { getCardsJs } from './cards.mjs';
import { getCommonJs } from './common.mjs';
import { getFusionsJs } from './fusions.mjs';
import { getScriptFromGithub } from './getScriptFromGithub.mjs';
import { getXmlFromSynapse } from './getXmlFromSynapse.mjs';
import { getMapBgesJs } from './mapBges.mjs';
import { getCampaignJs } from './missionsAndLocations.mjs';
import { getRaidsJs } from './raids.mjs';
import { getRunesJs } from './runes.mjs';
import { getSkillsJs } from './skills.mjs';
import { getSpoilersJs } from './spoilers.mjs';

export async function updateData() {
  await updateFile('runes.js', getRunesJs);
  await updateFile('bges.js', getBgesJs);
  await updateFile('campaign.js', getCampaignJs);
  await updateFile('fusions.js', getFusionsJs);
  await updateFile('mapBGEs.js', getMapBgesJs);
  await updateFile('skills.js', getSkillsJs);

  const cardChanges = await compareFile('cards.js', getCardsJs);
  if (cardChanges) {
    await updateFile('spoilers.js', () => getSpoilersJs(cardChanges));
  }

  await updateFile('raids.js', getRaidsJs);
  await updateFile('common.js', getCommonJs);
}

export async function getXmlChanges() {
  await Promise.all(
    [
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
    ].map(getXmlFromSynapse)
  );
}

async function updateFile(scriptPath, scriptFunction) {
  var newScript = await scriptFunction();
  if (newScript) {
    writeFileSync(join('scripts/data/', scriptPath), newScript);
  }
}

async function compareFile(scriptPath, scriptFunction) {
  var oldScript = getScriptFromGithub(scriptPath);
  var newScript = await scriptFunction();
  if (!newScript) {
    return;
  }
  writeFileSync(join('scripts/data/', scriptPath), newScript);

  if (oldScript !== newScript) {
    return {
      oldScript: oldScript,
      newScript: newScript
    };
  }
}
