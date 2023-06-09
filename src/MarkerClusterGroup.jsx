import React from 'react'
import {
  createElementObject,
  createPathComponent,
  extendContext,
} from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet.markercluster';
import ReactDOMServer from 'react-dom/server';
import { Cluster, Tip } from './markers';

const createMarkerClusterGroup = (props, context) => {
  const markerClusterGroup = new L.MarkerClusterGroup({
    iconCreateFunction: (cluster) => {
      cluster.on('mouseover', (layer) => {
        layer.sourceTarget
          // because we are rendering on the server, it seems the hpe theme hasn't been fed through yet.
          // try passing hpe directly?
          .bindPopup(ReactDOMServer.renderToString(<Tip cluster={cluster} />), { closeButton: false })
          .openPopup();
      });

      cluster.on('mouseout', (layer) => {
        layer.sourceTarget.closePopup();
      });

      return L.divIcon({ 
        // 'grommet-cluster-group' class prevents leaflet default divIcon styles
        className: 'grommet-cluster-group',
        html:  ReactDOMServer.renderToString(<Cluster cluster={cluster} />) });
      },
    ...props});
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

const MarkerClusterGroup = createPathComponent(
  createMarkerClusterGroup,
  updateMarkerClusterGroup,
);

export default MarkerClusterGroup;
