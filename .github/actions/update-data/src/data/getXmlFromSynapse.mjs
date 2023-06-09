import { writeFileSync } from 'fs';
import { join } from 'path';
import { xmlDocToJson } from './xmlToJson.mjs';

const xmlDir = join(getRootDir(), './cards/');

export async function getJsonFromSynapse(filename, options) {
  Logger.log('Processing XML file: ' + filename);
  console.time('Retrieving ' + filename);
  var xml = await getXmlFromSynapse(filename);
  console.timeEnd('Retrieving ' + filename);
  console.time('Processing ' + filename);
  const results = xmlDocToJson(xml, options);
  console.timeEnd('Processing ' + filename);
  return results;
}

export async function getXmlFromSynapse(filename) {
  var baseUrl = 'https://spellstone.synapse-games.com/assets/';
  var text = UrlFetchApp.fetch(baseUrl + filename).getContentText();
  writeFileSync(join(xmlDir, filename), text);
  var xml = XmlService.parse(text);
  return xml;
}