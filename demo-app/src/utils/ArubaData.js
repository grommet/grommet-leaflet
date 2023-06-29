const type = ['Branch', 'Campus', 'Main', 'Data center'];

export function generateArubaLocations(n, options) {
  const { center, radius } = options;
  const locations = [];
  for (let i = 0; i < n; i += 1) {
    locations.push({
      coord: [
        center[0] - Math.random() * radius,
        center[1] - Math.random() * radius,
      ],
      status: {
        good: Math.floor(Math.random() * 130),
        warning: Math.floor(Math.random() * 20),
        critical: Math.floor(Math.random() * 20),
      },
      type: type[Math.floor(Math.random() * type.length)],
    });
  }
  return locations;
}
