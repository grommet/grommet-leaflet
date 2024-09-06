import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import {
  createElementObject,
  createLayerComponent,
  extendContext,
} from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet.markercluster';
import ReactDOMServer from 'react-dom/server';
import { Cluster, Popup } from '..';

// const createElementObject = (instance, context, container) =>
//   Object.freeze({ instance, context, container });

// const extendContext = (source, extra) => Object.freeze({ ...source, ...extra });

const createMarkerClusterGroup = (props, context) => {
  const clusterProps = {};
  const clusterEvents = {};

  Object.entries(props).forEach(([key, value]) => {
    if (key.startsWith('on')) {
      clusterEvents[key] = value;
    } else {
      clusterProps[key] = value;
    }
  });

  const markerClusterGroup = new L.MarkerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: false,
    ...clusterProps,
  });

  // Bind events to markerClusterGroup
  Object.entries(clusterEvents).forEach(([key, value]) => {
    const event = `cluster${key.substring(2).toLowerCase()}`;
    markerClusterGroup.on(event, value);
  });

  return createElementObject(
    markerClusterGroup,
    extendContext(context, { layerContainer: markerClusterGroup }),
  );
};

const LeafletMarkerCluster = createLayerComponent(createMarkerClusterGroup);

const MarkerCluster = ({
  children,
  icon: iconProp,
  popup: popupProp,
  ...rest
}) => {
  const theme = useContext(ThemeContext);

  return (
    <LeafletMarkerCluster
      iconCreateFunction={cluster => {
        let popup;

        // only bind popup if popupProp is defined
        if (popupProp && popupProp({ cluster })) {
          popup = cluster.bindPopup(
            ReactDOMServer.renderToString(
              <ThemeContext.Provider value={theme}>
                <Popup>{popupProp({ cluster })}</Popup>
              </ThemeContext.Provider>,
            ),
          );

          cluster.on('click', () => {
            popup.openPopup();
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
      }}
      {...rest}
    >
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
