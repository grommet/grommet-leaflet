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
  { position, title, alt, icon: iconProp, status },
  context,
) => {
  const theme = useContext(ThemeContext)
  const icon = L.divIcon({
    // 'grommet-marker' class prevents leaflet default divIcon styles
    className: 'grommet-marker',
    html: ReactDOMServer.renderToString(React.cloneElement(iconProp, {
      // necessary to pass theme prop for StyledBox in Pi
      theme: theme
    }) || <Pin status="unknown" theme={theme} />),
  });
  const options = { title, alt, icon };
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
