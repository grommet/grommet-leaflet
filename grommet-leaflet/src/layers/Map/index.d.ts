import * as React from 'react';
import * as L from 'leaflet';
import { GrommetLeafletThemeType } from 'grommet-leaflet';

export interface MapProps {
  children?: any;
  theme?: GrommetLeafletThemeType;
}

export interface MapExtendedProps
  extends MapProps,
    L.MapOptions,
    Omit<JSX.IntrinsicElements['div'], keyof MapProps> {}

declare const Map: React.FC<MapExtendedProps>;

export { Map };
