export function stableStringify(obj, replacer, space) {
  var opts = {
    replacer: replacer,
    space: space,
    cmp: function (left, right) {
      if (isNaN(left.key) || isNaN(right.key)) {
        return left.key.toLowerCase().localeCompare(right.key.toLowerCase());
      } else {
        return parseFloat(left.key) - parseFloat(right.key);
      }
    }
  };
  if (typeof opts === 'function') opts = { cmp: opts };
  var space = opts.space || '';
  if (typeof space === 'number') space = Array(space + 1).join(' ');
  var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
  var replacer = opts.replacer || function (key, value) { return value; };

  var cmp = opts.cmp && (function (f) {
    return function (node) {
      return function (a, b) {
        var aobj = { key: a, value: node[a] };
        var bobj = { key: b, value: node[b] };
        return f(aobj, bobj);
      };
    };
  })(opts.cmp);

  var seen = [];
  return (function stringify(parent, key, node, level) {
    var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
    var colonSeparator = space ? ': ' : ':';

    if (node && node.toJSON && typeof node.toJSON === 'function') {
      node = node.toJSON();
    }

    node = replacer.call(parent, key, node);

    if (node === undefined) {
      return;
    }
    if (typeof node !== 'object' || node === null) {
      return JSON.stringify(node);
    }
    if (isArray(node)) {
      var out = [];
      for (var i = 0; i < node.length; i++) {
        var item = stringify(node, i, node[i], level + 1) || JSON.stringify(null);
        out.push(indent + space + item);
      }
      return '[' + out.join(',') + (out.length ? indent : '') + ']';
    } else {
      if (seen.indexOf(node) !== -1) {
        if (cycles) return JSON.stringify('__cycle__');
        throw new TypeError('Converting circular structure to JSON');
      }
      else seen.push(node);

      var keys = objectKeys(node).sort(cmp && cmp(node));
      var out = [];
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = stringify(node, key, node[key], level + 1);

        if (!value) continue;

        var keyValue = JSON.stringify(key)
          + colonSeparator
          + value;

        out.push(indent + space + keyValue);
      }
      seen.splice(seen.indexOf(node), 1);
      return '{' + out.join(',') + (out.length ? indent : '') + '}';
    }
  })({ '': obj }, '', obj, 0);
};

var isArray = Array.isArray || function (x) {
  return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
  var has = Object.prototype.hasOwnProperty || function () { return true };
  var keys = [];
  for (var key in obj) {
    if (has.call(obj, key)) keys.push(key);
  }
  return keys;
};
