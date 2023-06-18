import { XMLParser } from 'fast-xml-parser';
export function xmlDocToJson(xml, options) {
  options = Object.create(options);
  options.arrayRoots = options.arrayRoots || {};
  options.arrayProps = options.arrayProps || {};
  options.calculatedProps = options.calculatedProps || {};
  options.conversions = options.conversions || {};
  options.defaults = options.defaults || {};
  options.element = options.renames || {};
  options.filteredProps = arrayToMap(options.filteredProps);
  options.renames = options.renames || {};
  options.rootNodes = options.rootNodes && arrayToMap(options.rootNodes);
  options.rawRootMaps = options.rawRootMaps || {};

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
  // return convertedValue("root",
  //   collection,
  //   options);
}

function xmlCollectionToJson(xml, options, propName) {
  var collection = [];
  xml.getChildren().forEach(function (element) {
    if (!options.filteredProps[element.getName()]) {
      collection.push(xmlToJson(element, options, propName));
    }
  });

  return convertedValue(xml.getName(),
    collection,
    options);
}

function xmlToJson([name, element], options, propName) {
  var value = xmlToJsonInner([name, element], options, propName);
  return convertedValue(name, value, options);
}

function emptyObject() {
  return {};
}

function xmlToJsonInner([nodeName, element], options, propName) {
  if (typeof element !== 'object') {
    return element;
  }

  var obj = (options.defaults[nodeName] || emptyObject)();
  if (propName) obj[propName] = nodeName;

  const convertEntry = function ([name, element]) {
    const normalizedName = name.replace('@', '');
    if (!options.filteredProps[normalizedName]) {
      var savedAsName = (options.renames[normalizedName] || normalizedName);
      obj[savedAsName] = convertedValue(normalizedName, element, options);
    }
  }

  if (Array.isArray(element)) {
    element.map((element) => convertEntry([nodeName, element]));
  } else {
    Object.entries(element).forEach(convertEntry);
  }

  var calculatedProps = options.calculatedProps[nodeName];
  if (calculatedProps) {
    Object.keys(calculatedProps).forEach(function (prop) {
      obj[prop] = calculatedProps[prop](obj);
    });
  }

  return obj;
}

export function convertedValue(name, originalValue, options) {
  const normalizedName = name.replace('@', '');
  return (options.conversions[normalizedName] || defaultConversion(normalizedName))(originalValue, options);
}

function defaultConversion(name) {
  return function (originalValue, options) {
    xmlToJsonInner([name, originalValue], options, options.arrayRoots[name]);
  }
}