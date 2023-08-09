import React, { useContext } from 'react';
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

const createMarkerClusterGroup = ({ ...rest }, context) => {
  const markerClusterGroup = new L.MarkerClusterGroup({
    showCoverageOnHover: false,
    zoomToBoundsOnClick: false,
    ...rest,
  });
  return {
    instance: markerClusterGroup,
    context: extendContext(context, { layerContainer: markerClusterGroup }),
  };
};

// The addLayers function here is expecting an array of Marker class elements,
// but children is an array of React elements
const updateMarkerClusterGroup = (instance, props, prevProps) => {
  if (props.children !== prevProps.children) {
    // TO DO revisit proper approach to update marker cluster group.
    // https://github.com/grommet/grommet-leaflet/issues/21
    // instance.clearLayers();
    // instance.addLayers(props.children);
  }
};

const LeafletMarkerCluster = createPathComponent(
  createMarkerClusterGroup,
  updateMarkerClusterGroup,
);

const MarkerCluster = ({ icon: iconProp, popup: popupProp, ...rest }) => {
  const theme = useContext(ThemeContext);
  return (
    <LeafletMarkerCluster
      iconCreateFunction={cluster => {
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
      }}
      {...rest}
    />
  );
};

export { MarkerCluster };
