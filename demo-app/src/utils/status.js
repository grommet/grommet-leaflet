export const STATUS_MAP = {
  critical: {
    state: 'Disconnected',
  },
  warning: {
    state: 'Warning',
  },
  good: {
    state: 'Connected',
  },
  unknown: {
    state: 'Unknown',
  },
};

export const getClusterStatus = childMarkers => {
  let mostSevere;
  let index = 0;
  const geoJSON = childMarkers[0]?.feature;
  while (mostSevere !== 'critical' && index <= childMarkers.length - 1) {
    const status = geoJSON
      ? childMarkers[index].feature.grommet.kind
      : childMarkers[index].options.kind;
    if (status === 'critical') mostSevere = 'critical';
    else if (status === 'warning') mostSevere = 'warning';
    else if (status === 'unknown') mostSevere = 'unknown';
    else if (status === 'good') mostSevere = 'good';
    index += 1;
  }
  return mostSevere;
};

export const getStatusCounts = markers => {
  const geoJSON = markers[0]?.feature;
  let critical = 0;
  let warning = 0;
  let good = 0;
  let unknown = 0;
  markers.forEach(marker => {
    const status = geoJSON ? marker.feature.grommet?.kind : marker.options.kind;
    if (status === 'critical') critical += 1;
    else if (status === 'warning') warning += 1;
    else if (status === 'good') good += 1;
    else unknown += 1;
  });

  return { critical, warning, good, unknown };
};

// TO DO in production, this threshold should be set to 1000
// using 10 since our data set is small and I want to demo the
// different cluster flavors
const threshold = 10;

export const getClusterSize = cluster => {
  const count = cluster.getChildCount();

  if (count >= 2 * threshold) return 'large';
  else if (count >= threshold) return 'medium';
  return 'small';
};
