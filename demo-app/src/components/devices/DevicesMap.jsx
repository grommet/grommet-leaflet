import React, { useEffect, useRef, useState } from 'react';
import { Box } from 'grommet';
import { Grommet } from 'grommet-icons';
import {
  Cluster,
  Controls,
  Map,
  Marker,
  MarkerCluster,
  Pin,
} from 'grommet-leaflet-core';

import { userLocation } from '../../utils/locations';
import { getClusterSize, getClusterStatus } from '../../utils/status';
import { DevicesClusterPopup } from './DevicesClusterPopup';
import data from '../../utils/devices.json';
import { hpeLeaflet } from '../../themes';

export const DevicesMap = () => {
  const [geolocation, setGeolocation] = useState();
  const servers = data.servers.items;
  const bounds = L.latLngBounds();
  servers.forEach(server => {
    bounds.extend([server?.location?.[0], server?.location?.[1]]);
  });
  const containerRef = useRef();
  const mapContainerRef = useRef();

  // TO DO -- should this still be the default center?
  // get the user's location
  useEffect(() => {
    userLocation().then(location => {
      setGeolocation(location);
    });
  }, []);

  return (
    <Box ref={containerRef} flex background="background-contrast">
      {geolocation && (
        <Map
          id="map"
          ref={mapContainerRef}
          center={geolocation}
          zoom={6}
          zoomControl={false}
          theme={hpeLeaflet}
        >
          <Controls
            bounds={bounds}
            locations={servers}
            locationsKey="location"
          />
          <Marker position={geolocation} icon={<Grommet />} />
          <MarkerCluster
            popup={cluster => <DevicesClusterPopup cluster={cluster} />}
            icon={cluster => {
              const kind = getClusterStatus(cluster.getAllChildMarkers());
              const size = getClusterSize(cluster);
              return <Cluster kind={kind} size={size} />;
            }}
          >
            {servers.map((server, index) => {
              let status = server?.hardware?.health?.summary?.toLowerCase();
              if (status === 'ok') status = 'good';

              return (
                <Marker
                  key={index}
                  position={server?.location}
                  icon={<Pin kind={status} />}
                />
              );
            })}
          </MarkerCluster>
        </Map>
      )}
    </Box>
  );
};
