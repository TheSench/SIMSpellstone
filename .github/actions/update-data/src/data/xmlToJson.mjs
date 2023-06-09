export function xmlDocToJson(xmlDoc, options) {
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
    return xmlRootsToJson(xmlDoc.getRootElement(), options);
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
      collection.push(xmlToJson(element, options));
    }
    xml.getChildren().forEach(function (element) {
      const name = element.getName();
      if (!options.rootNodes || options.rootNodes[name]) {
        (rawRootMaps[name] || addToCollection)(element);
      }
    });
  
    return convertedValue(xml.getName(),
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
  
  function xmlToJson(xml, options, propName) {
    var value = xmlToJsonInner(xml, options, propName);
    return convertedValue(xml.getName(), value, options);
  }
  
  function emptyObject() {
    return {};
  }
  
  function xmlToJsonInner(xml, options, propName) {
    if (!xml.getChildren().length && !xml.getAttributes().length) {
      return xml.getText() || undefined;
    }
  
    var nodeName = xml.getName();
    var obj = (options.defaults[nodeName] || emptyObject)();
    if (propName) obj[propName] = nodeName;
  
    xml.getAttributes().forEach(function (attribute) {
      var attrName = attribute.getName();
      if (!options.filteredProps[attrName]) {
        var savedAsName = (options.renames[attrName] || attrName);
        obj[savedAsName] = convertedValue(attrName, attribute.getValue(), options);
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