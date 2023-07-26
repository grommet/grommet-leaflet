import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {
  createElementObject,
  createPathComponent,
  extendContext,
} from '@react-leaflet/core';
import L from 'leaflet';
import { ThemeContext } from 'grommet';
import { Pin } from './markers';

const createGrommetMarker = (
  { position, title, alt, icon: iconProp },
  context,
) => {
  const theme = React.useContext(ThemeContext);

  const icon = L.divIcon({
    // 'grommet-marker' class prevents leaflet default divIcon styles
    className: 'grommet-marker',
    html: ReactDOMServer.renderToString(
      <ThemeContext.Provider value={theme}>
        {iconProp || <Pin />}
      </ThemeContext.Provider>,
    ),
  });

  const kind = iconProp ? iconProp.props.kind : 'default';
  const options = { title, alt, icon, kind };
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

const Marker = createPathComponent(createGrommetMarker, updateGrommetMarker);

export { Marker };
