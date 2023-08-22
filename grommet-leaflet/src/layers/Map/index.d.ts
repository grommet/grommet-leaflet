import * as React from 'react';
import * as L from 'leaflet';

export interface MapProps {
  center?: number[];
  children?: any;
  scrollWheelZoom?: string | boolean;
  theme?: any;
  zoom?: number;
  zoomControl?: boolean;
}

export interface MapExtendedProps
  extends MapProps,
    L.MapOptions,
    Omit<JSX.IntrinsicElements['div'], keyof MapProps> {}

declare const Map: React.FC<MapExtendedProps>;

export { Map };
