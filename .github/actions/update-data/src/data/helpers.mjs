export function addToMap(map) {
  return function(object) {
    map[object.id] = object;
  }
}

export function identity(input) {
  return input;
}