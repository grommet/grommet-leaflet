import {
  createElementObject,
  createPathComponent,
  extendContext,
} from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet.markercluster';

const createMarkerClusterGroup = (props, context) => {
  const markerClusterGroup = new L.MarkerClusterGroup(props);
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
