import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import L from 'leaflet';
import 'leaflet.markercluster';
import {
  createElementObject,
  createLayerComponent,
  extendContext,
} from '@react-leaflet/core';
import { Cluster, Popup } from '..';

function createMarkerClusterGroup(props, context) {
  const clusterProps = {};
  const clusterEvents = {};

  Object.entries(props).forEach(([key, value]) => {
    if (key.startsWith('on')) {
      clusterEvents[key] = value;
    } else {
      clusterProps[key] = value;
    }
  });

  const markers = new L.MarkerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: false,
    ...clusterProps,
  });

  // Bind events to markers
  Object.entries(clusterEvents).forEach(([key, value]) => {
    const event = `cluster${key.substring(2).toLowerCase()}`;
    markers.on(event, value);
  });

  return createElementObject(
    markers,
    extendContext(context, {
      layerContainer: markers,
    }),
  );
}

const LeafletMarkerCluster = createLayerComponent(createMarkerClusterGroup);

const MarkerCluster = props => {
  const { children, icon: iconProp, popup: popupProp, ...rest } = props;
  const theme = React.useContext(ThemeContext);

  const createIcon = cluster => {
    // Only bind popup if popupProp is defined
    if (popupProp && popupProp({ cluster })) {
      const popupId = `grommet-leaflet-popup-${uuidv4()}`;
      const popupContent = (
        <ThemeContext.Provider value={theme}>
          <Popup>{popupProp({ cluster })}</Popup>
        </ThemeContext.Provider>
      );

      // In order to take advantage of Leaflet's automatic popup placement
      // and panning we first need to bind the popup's static content.
      // This establishes the popup's dimensions so that the map will pan if the
      // marker is close to the map's bounds.
      const popup = cluster.bindPopup(
        ReactDOMServer.renderToString(<div id={popupId}>{popupContent}</div>),
      );

      cluster.on('click keypress', () => {
        popup.openPopup();
        // We then render the popup's contents dynamically and replace the
        // static content with an interactive ReactNode.
        const domNode = document.getElementById(popupId);
        if (domNode) {
          const root = createRoot(domNode);
          root.render(popupContent);
        }
      });
    }

    return L.divIcon({
      // 'grommet-cluster-group' class prevents
      // leaflet default divIcon styles
      className: 'grommet-cluster-group',
      html: ReactDOMServer.renderToString(
        <ThemeContext.Provider value={theme}>
          {iconProp ? (
            React.cloneElement(iconProp({ cluster }), {
              cluster,
            })
          ) : (
            <Cluster cluster={cluster} />
          )}
        </ThemeContext.Provider>,
      ),
    });
  };

  return (
    <LeafletMarkerCluster iconCreateFunction={createIcon} {...rest}>
      {children}
    </LeafletMarkerCluster>
  );
};

MarkerCluster.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.func,
  popup: PropTypes.func,
};

export { MarkerCluster };
