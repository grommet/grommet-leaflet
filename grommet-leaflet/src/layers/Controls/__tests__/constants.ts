const TILE_LAYER = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}

const LAT_LNG_PAIRS = [
  [0, 0],
  [10, -10],
  [-10, -10],
  [5, -8],
  [2, 2],
  [-5, 5],
  [39.397, -100.644],
  [39.897, -104.644]
];

const GEO_JSON = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [0, 0]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [10, -10]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-10, -10]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [5, -8]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [2, 2]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-5, 5]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [39.397, -100.644]
    }
  }, {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [39.897, -104.644]
    }
  }]
};

const LAT_LNG_OBJECTS = LAT_LNG_PAIRS.map(([lat, lng]) => ({ lat, lng }));

export {
  TILE_LAYER,
  LAT_LNG_PAIRS,
  GEO_JSON,
  LAT_LNG_OBJECTS
}