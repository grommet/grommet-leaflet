import React, { useContext } from 'react';
import ReactDOMServer from 'react-dom/server';
import { ThemeContext } from 'styled-components';
import { Marker as LeafletMarker, Popup as LeafletPopup } from 'react-leaflet';
import L from 'leaflet';
import { Pin, Popup } from '.';

const Marker = ({ children, icon, popup: popupProp, ...rest }) => {
  const theme = useContext(ThemeContext);
  const kind = icon?.props?.kind;

  const popup = (
    <LeafletPopup {...popupProp.leafletProps}>
      <Popup {...popupProp.boxProps}>
        {typeof popupProp === 'function' ? popupProp() : popupProp.render()}
      </Popup>
    </LeafletPopup>
  );

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
      {popupProp ? popup : undefined}
    </LeafletMarker>
  );
};
export { Marker };
