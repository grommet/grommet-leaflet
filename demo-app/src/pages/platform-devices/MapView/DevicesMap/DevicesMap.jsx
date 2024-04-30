import React, { useContext } from 'react';
import PropTypes from 'prop-types';
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
  const clusterSummary = React.useMemo(
    () =>
      childMarkers.reduce(
        (summary, marker) => {
          const { deviceType, location, part } = marker.options.data.properties;
          summary.deviceTypes.add(deviceType);
          summary.locations.add(location);
          summary.parts.add(part);
          return summary;
        },
        {
          deviceTypes: new Set(),
          locations: new Set(),
          parts: new Set(),
        },
      ),
    [childMarkers],
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
            {clusterSummary.deviceTypes.size}
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

  const devicesWithLocation = data.filter(
    device => device.geometry.coordinates[0] !== null,
  );

  const locations = devicesWithLocation.map(
    device => device.geometry.coordinates,
  );

  return (
    <Map
      id="map"
      ref={mapContainerRef}
      tileLayer={{
        format: 'pmtiles',
        url: import.meta.env.VITE_TILE_LAYER_URL,
        attribution: `
          &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`,
      }}
    >
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

ClusterDetail.propTypes = {
  cluster: PropTypes.object,
};
