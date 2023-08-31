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
  const clusterSummary = React.useMemo(() =>
    childMarkers.reduce(
      (summary, marker) => {
        const { device_type, location, part } = marker.options.data.properties;
        summary.device_types.add(device_type);
        summary.locations.add(location);
        summary.parts.add(part);
        return summary;
      },
      {
        device_types: new Set(),
        locations: new Set(),
        parts: new Set(),
      },
    ),
  );

  return (
    <Box gap="small" width={{ min: 'small' }}>
      <Box gap="xsmall">
        <Text>Devices summary</Text>
        <NameValueList
          gap="xsmall"
          nameProps={{ width: 'xsmall' }}
          valueProps={{ align: 'end' }}
        >
          <NameValuePair name="Locations">
            {clusterSummary.locations.size}
          </NameValuePair>
          <NameValuePair name="Device types">
            {clusterSummary.device_types.size}
          </NameValuePair>
          <NameValuePair name="Parts">
            {clusterSummary.parts.size}
          </NameValuePair>
        </NameValueList>
      </Box>
      <Anchor alignSelf="end" label="View details" />
    </Box>
  );
};

export const DevicesMap = () => {
  const mapContainerRef = React.useRef();
  const { data } = useContext(DataContext);
  console.log(data.length);
  const devicesWithLocation = data.filter(device => {
    if (device.geometry.coordinates[0] !== null) {
      return device;
    }
  });

  const locations = devicesWithLocation.map(
    device => device.geometry.coordinates,
  );

  return (
    <Map id="map" ref={mapContainerRef}>
      {devicesWithLocation.length ? (
        <>
          <Controls locations={locations} />
          <MarkerCluster
            popup={({ cluster }) => <ClusterDetail cluster={cluster} />}
          >
            {devicesWithLocation.map(device => {
              return (
                <Marker
                  key={device.properties.serial_number}
                  data={device}
                  position={device.geometry.coordinates}
                />
              );
            })}
          </MarkerCluster>
        </>
      ) : null}
    </Map>
  );
};
