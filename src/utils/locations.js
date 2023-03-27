export function generateLocations(n, options) {
  const { center, radius } = options;
  var locations = [];
  for (var i = 0; i < n; i++) {
    locations.push([
      center[0] - Math.random() * radius,
      center[1] - Math.random() * radius,
    ]);
  }
  return locations;
}

export function findCenter(bounds) {
  return [(bounds[0][0] + bounds[1][0]) / 2, (bounds[0][1] + bounds[1][1]) / 2];
}

export function findCenterOfGravity(locations) {
  var center = [0, 0];
  for (var i = 0; i < locations.length; i++) {
    center[0] += locations[i][0];
    center[1] += locations[i][1];
  }
  center[0] /= locations.length;
  center[1] /= locations.length;
  return center;
}
