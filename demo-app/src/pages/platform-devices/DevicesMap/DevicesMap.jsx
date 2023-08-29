import React, { useContext } from 'react';
import { Controls, Map, Marker, MarkerCluster } from 'grommet-leaflet';
import {
  Anchor,
  Box,
  DataContext,
  NameValueList,
  NameValuePair,
  Text,
} from 'grommet';

const ClusterDetail = ({ cluster }) => {
  const childMarkers = cluster.getAllChildMarkers();
  const locations = {};
  const deviceTypes = {};
  const parts = {};
  childMarkers.forEach(marker => {
    if (locations[marker.options.detail.properties.location]) {
      locations[marker.options.detail.properties.location] += 1;
    } else {
      locations[marker.options.detail.properties.location] = 1;
    }
    if (deviceTypes[marker.options.detail.properties.device_type]) {
      deviceTypes[marker.options.detail.properties.device_type] += 1;
    } else {
      deviceTypes[marker.options.detail.properties.device_type] = 1;
    }
    if (parts[marker.options.detail.properties.part]) {
      parts[marker.options.detail.properties.part] += 1;
    } else {
      parts[marker.options.detail.properties.part] = 1;
    }
  });

  return (
    <Box gap="small">
      <Box gap="xsmall">
        <Text>{childMarkers.length} devices</Text>
        <NameValueList nameProps={{ width: 'xsmall' }}>
          <NameValuePair name="Locations">
            {Object.entries(locations).length}
          </NameValuePair>
          <NameValuePair name="Device types">
            {Object.entries(deviceTypes).length}
          </NameValuePair>
          <NameValuePair name="Parts">
            {Object.entries(parts).length}
          </NameValuePair>
        </NameValueList>
      </Box>
      <Anchor alignSelf="end" label="View details" />
    </Box>
  );
};

export const DevicesMap = () => {
  const mapContainerRef = React.useRef();
  const dataContext = useContext(DataContext);
  const { data } = dataContext;
  const locations = data.map(device => {
    return device.geometry.coordinates;
  });

  return (
    <Map id="map" ref={mapContainerRef}>
      {data.length >= 1 ? (
        <>
          <Controls locations={locations} />
          <MarkerCluster popup={cluster => <ClusterDetail cluster={cluster} />}>
            {data.map(device => {
              return (
                <Marker
                  key={device.properties.serial_number}
                  position={device.geometry.coordinates}
                  // popup={device.properties.serial_number}
                  detail={device}
                />
              );
            })}
          </MarkerCluster>
        </>
      ) : null}
    </Map>
  );
};
