import { leafletLayer } from 'protomaps';

import {
  createElementObject,
  createTileLayerComponent,
  updateGridLayer,
} from '@react-leaflet/core';

export const ProtomapsTileLayer = createTileLayerComponent(
  ({ ...options }, context) => {
    const layer = leafletLayer(options);
    return createElementObject(layer, context);
  },
  updateGridLayer,
);
