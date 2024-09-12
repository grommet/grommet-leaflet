import { expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import { Grommet } from 'grommet';
import { Map } from '../../Map/index.js';
import { Controls } from '../index.js';
import { GEO_JSON, LAT_LNG_PAIRS, LAT_LNG_OBJECTS, TILE_LAYER } from './constants.js';

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
