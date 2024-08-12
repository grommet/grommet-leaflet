import * as React from 'react';
import * as L from 'leaflet';
import { GrommetLeafletThemeType } from 'grommet-leaflet';
import { TileLayerExtendedProps } from '../TileLayer';

export interface MapProps {
  children?: any;
  theme?: GrommetLeafletThemeType;
  tileLayer: TileLayerExtendedProps
}

export interface MapExtendedProps
  extends MapProps,
  L.MapOptions,
  Omit<JSX.IntrinsicElements['div'], keyof MapProps> { }

declare const Map: React.FC<MapExtendedProps>;

export { Map };
