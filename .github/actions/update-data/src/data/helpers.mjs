export function addToMap(map) {
  return function(object) {
    map[object.id] = object;
  }
}