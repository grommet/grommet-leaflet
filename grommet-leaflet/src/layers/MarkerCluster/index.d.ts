import * as React from 'react';

export interface MarkerClusterProps {
  icon?: () => any;
  popup?: any;
}

export interface MarkerClusterExtendedProps
  extends MarkerClusterProps,
    Omit<JSX.IntrinsicElements['div'], keyof MarkerClusterProps> {}

declare const MarkerCluster: React.FC<MarkerClusterExtendedProps>;

export { MarkerCluster };
