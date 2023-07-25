import React from 'react';
import {
  createElementObject,
  createPathComponent,
  extendContext,
} from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet.markercluster';
import ReactDOMServer from 'react-dom/server';
import { Cluster, Popup } from './markers';

const createMarkerClusterGroup = ({ popup: popupProp, ...rest }, context) => {
  const markerClusterGroup = new L.MarkerClusterGroup({
    zoomToBoundsOnClick: false,
    iconCreateFunction: cluster => {
      if (popupProp) {
        const popup = cluster.bindPopup(
          ReactDOMServer.renderToString(<Popup>{popupProp(cluster)}</Popup>),
        );

        cluster.on('click', () => {
          popup.openPopup();
        });
      }

      return L.divIcon({
        // 'grommet-cluster-group' class prevents leaflet default divIcon styles
        className: 'grommet-cluster-group',
        html: ReactDOMServer.renderToString(<Cluster cluster={cluster} />),
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
    instance.clearLayers();
    instance.addLayers(props.children);
  }
};

const MarkerCluster = createPathComponent(
  createMarkerClusterGroup,
  updateMarkerClusterGroup,
);

export { MarkerCluster };
