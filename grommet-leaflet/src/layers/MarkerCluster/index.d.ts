import * as React from 'react';
import * as L from 'leaflet';
import 'leaflet.markercluster';

export interface MarkerClusterProps {
  icon?: (any) => JSX.Element;
  popup?: (any) => JSX.Element;
}

export interface MarkerClusterExtendedProps
  extends MarkerClusterProps,
    L.MarkerClusterGroupOptions,
    Omit<JSX.IntrinsicElements['div'], keyof MarkerClusterProps> {}

declare const MarkerCluster: React.FC<MarkerClusterExtendedProps>;

export { MarkerCluster };
