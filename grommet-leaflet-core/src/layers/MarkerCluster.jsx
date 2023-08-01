import React from 'react';
import { ThemeContext } from 'styled-components';
import {
  createElementObject,
  createPathComponent,
  extendContext,
} from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet.markercluster';
import ReactDOMServer from 'react-dom/server';
import { Cluster, Popup } from '.';

const createMarkerClusterGroup = (
  { icon: iconProp, popup: popupProp, ...rest },
  context,
) => {
  const theme = React.useContext(ThemeContext);

  const markerClusterGroup = new L.MarkerClusterGroup({
    zoomToBoundsOnClick: false,
    iconCreateFunction: cluster => {
      if (popupProp) {
        const popup = cluster.bindPopup(
          ReactDOMServer.renderToString(
            <ThemeContext.Provider value={theme}>
              <Popup>{popupProp(cluster)}</Popup>
            </ThemeContext.Provider>,
          ),
        );

        cluster.on('click', () => {
          popup.openPopup();
        });
      }

      return L.divIcon({
        // 'grommet-cluster-group' class prevents leaflet default divIcon styles
        className: 'grommet-cluster-group',
        html: ReactDOMServer.renderToString(
          <ThemeContext.Provider value={theme}>
            {iconProp ? (
              React.cloneElement(iconProp(cluster), {
                cluster,
              })
            ) : (
              <Cluster cluster={cluster} />
            )}
          </ThemeContext.Provider>,
        ),
      });
    },
    ...rest,
  });
  return createElementObject(
    markerClusterGroup,
    extendContext(context, { layerContainer: markerClusterGroup }),
  );
};

const updateMarkerClusterGroup = (instance, props, prevProps) => {
  if (props.children !== prevProps.children) {
    // TO DO revisit proper approach to update marker cluster group.
    // https://github.com/grommet/grommet-leaflet/issues/21
    // instance.clearLayers();
    // instance.addLayers(props.children);
  }
};

const MarkerCluster = createPathComponent(
  createMarkerClusterGroup,
  updateMarkerClusterGroup,
);

export { MarkerCluster };
