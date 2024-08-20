import { expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import { Grommet } from 'grommet';
import { Map } from '../Map/index.js';
import { Controls } from './index.js';

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

const LAT_LNG_OBJECTS = LAT_LNG_PAIRS.map(([lat, lng]) => ({ lat, lng }))

test('Controls renders', async () => {
  render(
    <Grommet>
      <Map tileLayer={TILE_LAYER}>
        <Controls />
      </Map>
    </Grommet>
  );

  const zoomIn = screen.getByRole('button', { name: /zoom in/i });
  const zoomOut = screen.getByRole('button', { name: /zoom out/i });
  expect(zoomIn).toBeTruthy();
  expect(zoomOut).toBeTruthy();
});

test('displays zoom to data control', async () => {
  render(
    <Grommet>
      <Map tileLayer={TILE_LAYER}>
        <Controls locations={[[-34.397, 150.644]]} />
      </Map>
    </Grommet>
  );

  const zoomToData = screen.getByRole('button', { name: /zoom to data/i });
  expect(zoomToData).toBeTruthy();
});

test('locations accepts array of lat/lng pairs', async () => {
  render(
    <Grommet>
      <Map tileLayer={TILE_LAYER}>
        <Controls locations={LAT_LNG_PAIRS} />
      </Map>
    </Grommet>
  );

  const zoomToData = screen.getByRole('button', { name: /zoom to data/i });
  expect(zoomToData).toBeTruthy();
});

test('locations accepts array of lat/lng objects', async () => {
  render(
    <Grommet>
      <Map tileLayer={TILE_LAYER}>
        <Controls locations={LAT_LNG_OBJECTS} />
      </Map>
    </Grommet>
  );

  const zoomToData = screen.getByRole('button', { name: /zoom to data/i });
  expect(zoomToData).toBeTruthy();
});

test('locations accepts GeoJSON', async () => {
  render(
    <Grommet>
      <Map tileLayer={TILE_LAYER}>
        <Controls locations={GEO_JSON} />
      </Map>
    </Grommet>
  );

  const zoomToData = screen.getByRole('button', { name: /zoom to data/i });
  expect(zoomToData).toBeTruthy();
});

// ToDo: Add test for zooming to data
