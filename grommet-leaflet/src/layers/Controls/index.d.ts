import * as React from 'react';
import * as L from 'leaflet';

export interface ControlsProps {
  locations?: L.LatLngExpression[] | number[][] | GeoJSON;
}

declare const Controls: React.FC<ControlsProps>;

export { Controls };
