import * as React from 'react';
import * as L from 'leaflet';

export interface TileLayerProps {
  attribution?: string;
  url: string;
  format?: boolean | 'pmtiles';
}

export interface MapExtendedProps
  extends TileLayerProps,
    L.TileLayer,
    Omit<JSX.IntrinsicElements['div'], keyof TileLayerProps> {}

declare const TileLayer: React.FC<TileLayerExtendedProps>;

export { TileLayer };
