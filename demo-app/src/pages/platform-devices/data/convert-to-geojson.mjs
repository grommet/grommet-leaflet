import FileSystem from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import devices from './1073-devices-customer.json' assert { type: 'json' };

const convertToGeoJSON = data => {
  const features = data.map(item => {
    const { geo, ...properties } = item;
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          geo?.location?.coordinates[0],
          geo?.location?.coordinates[1],
        ],
      },
      properties: {
        ...properties,
        geo,
      },
    };
  });

  return {
    type: 'FeatureCollection',
    features,
  };
};

const geoJSON = convertToGeoJSON(devices);

const __dirname = dirname(fileURLToPath(import.meta.url));

FileSystem.writeFileSync(
  `${__dirname}/1073-devices-customer.geojson.json`,
  JSON.stringify(geoJSON, null, 2),
);
