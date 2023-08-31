import * as React from 'react';
import * as L from 'leaflet';

export interface ControlsProps {
  locations?: L.LatLngExpression[];
}

declare const Controls: React.FC<ControlsProps>;

export { Controls };
