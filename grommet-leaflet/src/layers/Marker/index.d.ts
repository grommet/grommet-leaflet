import * as React from 'react';
import * as L from 'leaflet';
import { MarkerProps as ReactMarkerProps } from 'react-leaflet';

export interface MarkerProps {
  children?: any;
  icon?: React.ReactNode;
}

export interface MarkerExtendedProps
  extends MarkerProps,
    Omit<L.MarkerOptions, 'icon'>,
    Omit<ReactMarkerProps, 'icon' | 'children'>,
    Omit<JSX.IntrinsicElements['div'], keyof MarkerProps | 'draggable'> {}

declare const Marker: React.FC<MarkerExtendedProps>;

export { Marker };
