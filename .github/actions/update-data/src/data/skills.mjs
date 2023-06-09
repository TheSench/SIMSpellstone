import { getScriptFromGithub } from './data/getScriptFromGithub.mjs';
import { getJsonFromSynapse } from './getXmlFromSynapse.mjs';

var skillSeedData = {
  "protect_seafolk": {
    name: "Barrier",
    desc: "Reduces the next Damage dealt to a random allied creature",
    icon: "mystic_barrier",
    type: "activation",
  }
};
var json = getScriptFromGithub('skillTypes.jsonc');
json = json.replace(/\/\/.*/g, '').replace(/^\w+$/g, '');
var skillTypes = JSON.parse(json);

var skillRenames = {
};
var iconRemappings = {
  'reinforce': 'reinforce',
  'mark': 'eagle_eye',
  'barrage': 'barrage',
  'protect_ice': 'iceshatter',
  'counterburn': 'counterburn',
  'counterpoison': 'poisonhide',
  'slow': 'bind',
  'enlarge': 'empower',
  'unearth': 'reanimate',
  'magicfield': 'antimagicfield'
};

var skillsJson;

export async function getSkillsJs() {
  skillsJson = await getSkillsJson();
  var jsFile = '"use strict"\n\n' +
    'var SKILL_DATA = ' + stableStringify(skillsJson, null, '\t') + ';';
  return jsFile;
}

async function getSkillsJson() {
  var skills = await getJsonFromSynapse('cards_config.xml', {
    rootNodes: ['skillType']
  });
  var json = skillSeedData;
  skills.forEach(function (skill) {
    var id = skill.id;
    if (skill.desc) {
      json[skill.id] = {
        desc: skill.desc,
        icon: (iconRemappings[id] || skill.icon),
        name: (skillRenames[id] || skill.name),
        type: (skillTypes[id] || (skill.upkeep ? 'earlyActivation' : 'activation'))
      };
    }
  });
  return json;
}