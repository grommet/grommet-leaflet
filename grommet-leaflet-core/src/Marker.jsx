import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {
  createElementObject,
  createPathComponent,
  extendContext,
} from '@react-leaflet/core';
import L from 'leaflet';
import { Pin, Popup } from './markers';

const createGrommetMarker = (
  { position, title, alt, icon: iconProp, popup },
  context,
) => {
  const icon = L.divIcon({
    // 'grommet-marker' class prevents leaflet default divIcon styles
    className: 'grommet-marker',
    html: ReactDOMServer.renderToString(iconProp || <Pin status="unknown" />),
  });

  const status = iconProp ? iconProp.props.status : 'unknown';
  const options = {
    title,
    alt,
    icon,
    status,
  };
  const marker = new L.Marker(position, options);
  if (popup)
    marker.bindPopup(ReactDOMServer.renderToString(<Popup>{popup}</Popup>));

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

const Marker = createPathComponent(createGrommetMarker, updateGrommetMarker);

export { Marker };
