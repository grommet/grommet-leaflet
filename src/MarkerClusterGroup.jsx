import React, { useContext } from 'react'
import  { ThemeContext } from 'styled-components';
import {
  createElementObject,
  createPathComponent,
  extendContext,
} from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet.markercluster';
import ReactDOMServer from 'react-dom/server';
import { Cluster } from './markers';

const createMarkerClusterGroup = (props, context) => {
  const theme = useContext(ThemeContext)
  const markerClusterGroup = new L.MarkerClusterGroup({
    iconCreateFunction: (cluster) => {
		  return L.divIcon({ 
        // 'grommet-cluster-group' class prevents leaflet default divIcon styles
        className: 'grommet-cluster-group',
        html:  ReactDOMServer.renderToString(<Cluster cluster={cluster} theme={theme} />) });
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
