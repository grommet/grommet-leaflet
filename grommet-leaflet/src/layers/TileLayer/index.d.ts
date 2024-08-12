import * as React from 'react';
import * as L from 'leaflet';

export interface TileLayerProps {
  attribution?: string;
  format?: 'pmtiles';
  url: string;
}

export interface TileLayerExtendedProps
  extends TileLayerProps,
  L.TileLayer,
  Omit<JSX.IntrinsicElements['div'], keyof TileLayerProps> { }

declare const TileLayer: React.FC<TileLayerExtendedProps>;

export { TileLayer };
