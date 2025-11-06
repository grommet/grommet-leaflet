import * as React from 'react';
import * as L from 'leaflet';
import { GrommetLeafletThemeType } from 'grommet-leaflet';
import { TileLayerProps } from '../TileLayer';

export interface MapProps {
  children?: any;
  ref?: React.Ref<L.Map>;
  theme?: GrommetLeafletThemeType;
  tileLayer: TileLayerProps;
}

export interface MapExtendedProps
  extends MapProps,
    L.MapOptions,
    Omit<JSX.IntrinsicElements['div'], keyof MapProps> {}

declare const Map: React.FC<MapExtendedProps>;

export { Map };
