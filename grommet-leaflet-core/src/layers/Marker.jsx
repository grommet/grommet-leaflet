import React, { useContext } from 'react';
import ReactDOMServer from 'react-dom/server';
import { ThemeContext } from 'styled-components';
import { Popup as LeafletPopup, Marker as LeafletMarker } from 'react-leaflet';
import L from 'leaflet';
import { Pin, Popup } from '.';

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
export { Marker };
