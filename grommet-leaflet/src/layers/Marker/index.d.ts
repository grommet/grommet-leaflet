import * as React from 'react';
import * as L from 'leaflet';

export interface MarkerProps {
  children?: any;
  icon?: React.ReactNode;
  position?: number[];
}

export interface MarkerExtendedProps
  extends MarkerProps,
    L.MarkerOptions,
    Omit<JSX.IntrinsicElements['div'], keyof MarkerProps> {}

declare const Marker: React.FC<MarkerExtendedProps>;

export { Marker };
