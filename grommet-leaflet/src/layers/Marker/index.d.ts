import * as React from 'react';
import * as L from 'leaflet';
import { MarkerProps as ReactMarkerProps } from 'react-leaflet';

export interface MarkerProps {
  children?: any;
  icon?: React.ReactNode;
}

export interface MarkerExtendedProps
  extends MarkerProps,
    L.MarkerOptions,
    ReactMarkerProps,
    Omit<JSX.IntrinsicElements['div'], keyof MarkerProps> {}

declare const Marker: React.FC<MarkerExtendedProps>;

export { Marker };
