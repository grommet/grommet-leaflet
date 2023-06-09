import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'
import ReactDOMServer from 'react-dom/server';
import {
  createElementObject,
  createPathComponent,
  extendContext,
} from '@react-leaflet/core';
import L from 'leaflet';
import { Pin } from './markers';

const createGrommetMarker = (
  { position, title, alt, icon: iconProp },
  context,
) => {
  const theme = useContext(ThemeContext)
  const icon = L.divIcon({
    // 'grommet-marker' class prevents leaflet default divIcon styles
    className: 'grommet-marker',
    html: ReactDOMServer.renderToString(iconProp || <Pin status="unknown" theme={theme} />),
  });

  const status = iconProp ? iconProp.props.status : 'unknown';
  const options = { title, alt, icon, status };
  const marker = new L.Marker(position, options);
  return createElementObject(
    marker,
    extendContext(context, { overlayContainer: marker }),
  );
};

const updateGrommetMarker = (instance, props, prevProps) => {
  if (props.position !== prevProps.position) {
    instance.setLatLng(props.position);
  }
};

const GrommetMarker = createPathComponent(
  createGrommetMarker,
  updateGrommetMarker,
);

export default GrommetMarker;
