import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';
import { ThemeContext } from 'styled-components';
import {
  createElementObject,
  createPathComponent,
  extendContext,
} from '@react-leaflet/core';
import { Popup as LeafletPopup } from 'react-leaflet';
import L from 'leaflet';
import { Pin, Popup } from '.';

const createGrommetMarker = ({ position, icon, kind, ...rest }, context) => {
  const options = { icon, kind, ...rest };
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

const LeafletMarker = createPathComponent(
  createGrommetMarker,
  updateGrommetMarker,
);

const Marker = ({ children, icon, ...rest }) => {
  const theme = useContext(ThemeContext);
  const kind = icon?.props?.kind;

  return (
    <LeafletMarker
      icon={L.divIcon({
        // 'grommet-marker' class prevents leaflet default divIcon styles
        className: 'grommet-marker',
        html: ReactDOMServer.renderToString(
          <ThemeContext.Provider value={theme}>
            {icon || <Pin />}
          </ThemeContext.Provider>,
        ),
      })}
      kind={kind}
      {...rest}
    >
      {children && (
        <LeafletPopup>
          <Popup>{children}</Popup>
        </LeafletPopup>
      )}
    </LeafletMarker>
  );
};

Marker.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.node,
};

export { Marker };
