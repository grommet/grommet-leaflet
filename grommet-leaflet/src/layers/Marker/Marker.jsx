import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';
import { v4 as uuidv4 } from 'uuid';
import { ThemeContext } from 'styled-components';
import { Marker as LeafletMarker, Popup as LeafletPopup } from 'react-leaflet';
import L from 'leaflet';
import { Pin, Popup } from '..';

const Marker = ({ icon, popup: popupProp, ...rest }) => {
  const theme = useContext(ThemeContext);
  const kind = icon?.props?.kind;

  const popup = popupProp ? (
    <LeafletPopup>
      <Popup>{popupProp}</Popup>
    </LeafletPopup>
  ) : undefined;

  return (
    <LeafletMarker
      // https://react-leaflet.js.org/docs/start-introduction/#limitations
      // The components exposed are abstractions for Leaflet layers, not DOM
      // elements. Some of them have properties that can be updated directly
      // by calling the setters exposed by Leaflet while others should be
      // completely replaced, by setting an unique value on their key property
      // so they are properly handled by React's algorithm.
      key={uuidv4()}
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
      {popup}
    </LeafletMarker>
  );
};

Marker.propTypes = {
  icon: PropTypes.node,
  popup: PropTypes.node,
};

export { Marker };
