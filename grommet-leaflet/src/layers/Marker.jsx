import React, { useContext, isValidElement } from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';
import { ThemeContext } from 'styled-components';
import { Marker as LeafletMarker, Popup as LeafletPopup } from 'react-leaflet';
import L from 'leaflet';
import { Pin, Popup } from '.';

const Marker = ({ children, icon, popup: popupProp, ...rest }) => {
  const theme = useContext(ThemeContext);
  const kind = icon?.props?.kind;

  let popup;
  if (popupProp) {
    let content;
    if (isValidElement(popupProp)) content = popupProp;
    else if (popupProp.render) content = popupProp.render();
    popup = (
      <LeafletPopup {...popupProp.leafletProps}>
        <Popup {...popupProp.boxProps}>{content}</Popup>
      </LeafletPopup>
    );
  }

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
      {popup}
    </LeafletMarker>
  );
};

Marker.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.node,
};

export { Marker };
