import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import { Pin } from './markers';

const GrommetGeoJSON = ({ data, ...rest }) => {
  const pointToLayer = (feature, latlng) => {
    const { coordinates } = feature.geometry;

    return L.marker(L.latLng(coordinates[0], coordinates[1]), {
      icon: L.divIcon({
        // 'grommet-marker' class prevents leaflet default divIcon styles
        className: 'grommet-marker',
        html: ReactDOMServer.renderToString(
          <Pin status={feature?.grommet?.status} />,
        ),
      }),
    });
  };

  return <GeoJSON data={data} pointToLayer={pointToLayer} {...rest} />;
};

export { GrommetGeoJSON as GeoJSON };
