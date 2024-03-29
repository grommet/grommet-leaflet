import React, { useEffect, useRef, useState } from 'react';
import { Box } from 'grommet';
import { Cluster, Controls, Map, Marker, MarkerCluster } from 'grommet-leaflet';
import { ClusterPopup } from '../../components';
import { hpeLeaflet } from '../../themes';
import { userLocation, formatLocationsToLatLng } from '../../utils/locations';
import { getClusterStatus } from '../../utils/status';
import { NetworkPin } from './NetworkPin';
import { NetworkPopup } from './NetworkPopup';
import { generateNetworkLocations } from './data/network-device-data';

const NetworkMap = () => {
  const [geolocation, setGeolocation] = useState();
  const [locations, setLocations] = useState();
  const containerRef = useRef();
  const mapContainerRef = useRef();

  // get the user's location
  useEffect(() => {
    userLocation().then(location => {
      setGeolocation(location);
      setLocations(
        generateNetworkLocations(20, { center: location, radius: 6 }),
      );
    });
  }, []);

  return (
    <Box ref={containerRef} flex background="background-contrast">
      {geolocation && (
        <Map
          id="map"
          ref={mapContainerRef}
          theme={hpeLeaflet}
          tileLayer={{
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: `
            &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors`,
          }}
        >
          <Controls locations={formatLocationsToLatLng(locations)} />
          <MarkerCluster
            popup={({ cluster }) => <ClusterPopup cluster={cluster} />}
            icon={({ cluster }) => {
              const kind = getClusterStatus(cluster.getAllChildMarkers());
              return <Cluster kind={kind} size="medium" />;
            }}
          >
            {locations.map((location, index) => {
              const total =
                location.status.critical +
                location.status.warning +
                location.status.good;
              let status = 'good';
              const THRESHOLD = total * 0.15;
              if (THRESHOLD < location.status.critical) {
                status = 'critical';
              } else if (THRESHOLD < location.status.warning) {
                status = 'warning';
              }
              return (
                <Marker
                  key={index}
                  position={location?.coord}
                  icon={
                    <NetworkPin
                      kind={status}
                      label={location?.type.slice(0, 1)}
                    />
                  }
                  popup={<NetworkPopup location={location} />}
                />
              );
            })}
          </MarkerCluster>
        </Map>
      )}
    </Box>
  );
};

export { NetworkMap };
