import { writeFileSync } from 'fs';
import https from 'https';
import { join } from 'path';
import xmlFormat from 'xml-formatter';
import { getRootDir } from '../../../common/rootDir.mjs';
import { xmlDocToJson } from './xmlToJson.mjs';
import { getXmlFromGithub } from './getScriptFromGithub.mjs';


const xmlDir = join(getRootDir(), './cards/');

export async function getJsonFromSynapse(filename, options) {
  console.log('Processing XML file: ' + filename);
  var xml = await getXmlFromSynapse(filename);
  console.time('Processing ' + filename);
  const results = xmlDocToJson(xml, options);
  console.timeEnd('Processing ' + filename);
  return results;
}

export async function getXmlFromSynapse(filename) {
  return getXmlFromGithub(filename);
  console.time('Retrieving ' + filename);
  const options = {
    hostname: 'spellstone.synapse-games.com',
    port: 443,
    path: `/assets/${filename}`,
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0',
    }
  };
  return await new Promise((resolve, reject) => {
    const request = https.request(options, function (response) {
      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });

      response.on('end', () => {
        const xml = xmlFormat(data, {
          collapseContent: true,
          indentation: '  ',
          whiteSpaceAtEndOfSelfclosingTag: true,
        });
        writeFileSync(join(xmlDir, filename), xml);
        console.timeEnd('Retrieving ' + filename);
        resolve(xml);
      });
    }).on('error', err => {
      reject(err);
    });
    request.on('error', error => {
      reject(error);
    });
    request.end();
  });
}