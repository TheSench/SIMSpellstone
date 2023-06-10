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
    attributeNamePrefix: '',
    isArray:  function (name) {
      return options.arrayRoots[name];
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
  function addToCollection(element) {
    collection.push(xmlToJson([name, element], options));
  }
  Object.entries(xml).forEach(function ([name, element]) {
    if (!options.rootNodes || options.rootNodes[name]) {
      (rawRootMaps[name] || addToCollection)(element);
    }
  });

  return convertedValue("root",
    collection,
    options);
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

  Object.entries(element).forEach(function ([name, element]) {
    if (!options.filteredProps[name]) {
      var savedAsName = (options.renames[name] || name);
      obj[savedAsName] = convertedValue(name, element, options);
    }
  });

  xml.getChildren().forEach(function (element) {
    var elName = element.getName();
    if (!options.filteredProps[elName]) {
      var savedAsName = (options.renames[elName] || elName);
      if (options.arrayRoots[elName]) {
        obj[elName] = xmlCollectionToJson(element, options, options.arrayRoots[elName]);
      } else if (options.arrayProps[elName]) {
        savedAsName = (options.arrayProps[elName] || savedAsName);
        obj[savedAsName] = (obj[savedAsName] || []);
        obj[savedAsName].push(xmlToJson(element, options));
      } else {
        obj[savedAsName] = xmlToJson(element, options);
      }
    }
  });

  var calculatedProps = options.calculatedProps[nodeName];
  if (calculatedProps) {
    Object.keys(calculatedProps).forEach(function (prop) {
      obj[prop] = calculatedProps[prop](obj);
    });
  }

  return obj;
}

export function convertedValue(name, originalValue, options) {
  return (options.conversions[name] || identity_)(originalValue, options);
}