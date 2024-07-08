const statuses = ['good', 'warning', 'critical', 'unknown'];

// get user location
export function userLocation() {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(
      position => {
        resolve([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        const stored = localStorage.getItem('geolocation');
        if (stored) resolve(JSON.parse(stored));
      },
    );
  });
}

export function generateLocations(n, options) {
  const { center, radius } = options;
  const locations = [];
  for (let i = 0; i < n; i += 1) {
    locations.push({
      coord: [
        center[0] - (Math.random() - 0.5) * radius,
        center[1] - (Math.random() - 0.5) * radius,
      ],
      status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }
  return locations;
}

export function formatLocationsToLatLng(locations) {
  return locations?.map(location => location.coord);
}

export function findCenter(bounds) {
  return [(bounds[0][0] + bounds[1][0]) / 2, (bounds[0][1] + bounds[1][1]) / 2];
}

export function findCenterOfGravity(locations) {
  const center = [0, 0];
  for (let i = 0; i < locations.length; i += 1) {
    center[0] += locations[i][0];
    center[1] += locations[i][1];
  }
  center[0] /= locations.length;
  center[1] /= locations.length;
  return center;
}
