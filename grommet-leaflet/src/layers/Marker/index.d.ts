import * as React from 'react';

export interface MarkerProps {
  children?: any;
  icon?: React.ReactNode;
  position?: number[];
}

export interface MarkerExtendedProps
  extends MarkerProps,
    Omit<JSX.IntrinsicElements['div'], keyof MarkerProps> {}

declare const Marker: React.FC<MarkerExtendedProps>;

export { Marker };
