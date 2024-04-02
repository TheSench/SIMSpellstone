import { XMLParser } from 'fast-xml-parser';
export function xmlDocToJson(xml, options) {
  options = Object.create(options);
  options.arrayRoots = options.arrayRoots || {};
  options.filteredProps = arrayToMap(options.filteredProps);
  options.rootNodes = options.rootNodes && arrayToMap(options.rootNodes);
  options.rawRootMaps = options.rawRootMaps || {};
  options.stopNodes = (options.stopNodes || []).map(el => `*.${el}`);

  const parser = new XMLParser({
    attributeNamePrefix: '@',
    ignoreAttributes: false,
    isArray: function (name) {
      return options.arrayRoots[name] || (options.rootNodes && options.rootNodes[name]);
    }
  });
  const parsed = parser.parse(xml);

  return xmlRootsToJson(parsed.root, options);
}

function arrayToMap(array) {
  return (array || []).reduce(function (acc, next) {
    acc[next] = true;
    return acc;
  }, {});
}

function xmlRootsToJson(xml, options) {
  var rawRootMaps = options.rawRootMaps;
  var collection = [];
  function addToCollection([name, element],) {
    collection.push(xmlToJson([name, element], options));
  }
  Object.entries(xml).forEach(function ([name, element]) {
    if (!options.rootNodes || options.rootNodes[name]) {
      element.forEach(entry => (rawRootMaps[name] || addToCollection)([name, entry]));
    }
  });

  return collection;
}

function xmlToJson([name, element], options, propName) {
  var value = xmlToJsonInner([name, element], options, propName);
  return convertedValue(name, value, options);
}

function xmlToJsonInner([nodeName, element], options, propName) {
  if (typeof element !== 'object') {
    return element;
  }

  var obj = {};
  if (propName) obj[propName] = nodeName;

  const convertEntry = function ([name, element]) {
    const normalizedName = name.replace('@', '');
    if (!options.filteredProps[normalizedName]) {
      obj[normalizedName] = convertedValue(normalizedName, element, options);
    }
  }

  if (Array.isArray(element)) {
    element.map((element) => convertEntry([nodeName, element]));
  } else {
    Object.entries(element).forEach(convertEntry);
  }

  return obj;
}

export function convertedValue(name, originalValue, options) {
  const normalizedName = name.replace('@', '');
  return xmlToJsonInner([normalizedName, originalValue], options);
}
