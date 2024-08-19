import React from "react";
import { expect, test } from "vitest";
import { render } from '@testing-library/react';
import { Map } from '../Map/index.js';
import { Controls } from './index.js';
import { Grommet } from "grommet-icons";

const TILE_LAYER = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
}

test('Controls renders', async () => {
  render(
    <Grommet>
      <Map tileLayer={TILE_LAYER}>
        <Controls />
      </Map>
    </Grommet>
  );
  expect(1 + 1).toBe(2);
});