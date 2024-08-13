import * as React from 'react';
import * as L from 'leaflet';
import 'leaflet.markercluster';

export interface MarkerClusterProps {
  icon?: ({ cluster }: { cluster: any }) => JSX.Element;
  popup?: ({ cluster }: { cluster: any }) => JSX.Element | null | false | undefined;
}

export interface MarkerClusterExtendedProps
  extends MarkerClusterProps,
  L.MarkerClusterGroupOptions,
  Omit<JSX.IntrinsicElements['div'], keyof MarkerClusterProps> { }

declare const MarkerCluster: React.FC<MarkerClusterExtendedProps>;

export { MarkerCluster };
