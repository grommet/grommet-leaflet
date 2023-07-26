import React, { useEffect, useRef, useState } from 'react';
import { Box } from 'grommet';
import { Grommet } from 'grommet-icons';
import {
  Controls,
  Cluster,
  Map,
  Marker,
  MarkerCluster,
  Pin,
} from 'grommet-leaflet-core';
import {
  StatusCriticalSmall,
  StatusGoodSmall,
  StatusWarningSmall,
  StatusUnknownSmall,
} from 'grommet-icons';
import { generateLocations, userLocation } from './utils/locations';
import { ClusterPopup } from './ClusterPopup';
import { getClusterStatus, getClusterSize } from './utils/status';

const markerKinds = {
  default: {
    container: {
      border: {
        color: 'border-strong',
        size: 'small',
      },
    },
  },
  critical: {
    container: {
      // any box props
      background: 'background-front',
      border: { color: 'status-critical', size: '3px' },
    },
    icon: <StatusCriticalSmall color="status-critical" size="13px" />,
  },
  warning: {
    container: {
      background: 'background-front',
      border: { color: 'status-warning' },
    },
    icon: <StatusWarningSmall color="status-warning" size="13px" />,
  },
  good: {
    container: {
      background: 'background-front',
      border: { color: 'status-ok' },
    },
    icon: <StatusGoodSmall color="status-ok" size="13px" />,
  },
  unknown: {
    container: {
      background: 'background-front',
      border: { color: 'status-unknown' },
    },
    icon: <StatusUnknownSmall color="status-unknown" size="13px" />,
  },
};

const hpeLeaflet = {
  pin: { ...markerKinds },
  cluster: { ...markerKinds },
};

function POCMap() {
  const [geolocation, setGeolocation] = useState();
  const [locations, setLocations] = useState();
  const containerRef = useRef();
  const mapContainerRef = useRef();

  // get the user's location
  useEffect(() => {
    userLocation().then(location => {
      setGeolocation(location);
      setLocations(generateLocations(250, { center: location, radius: 6 }));
    });
  }, []);

  return (
    <Box
      ref={containerRef}
      flex="grow"
      background="background-contrast"
      height={{ min: 'medium' }}
    >
      {geolocation && (
        <Map
          id="map"
          ref={mapContainerRef}
          center={geolocation}
          theme={hpeLeaflet}
        >
          <Controls locations={locations} />
          <Marker
            position={geolocation}
            icon={<Grommet color="purple!" size="large" />}
          />
          <MarkerCluster
            popup={cluster => <ClusterPopup cluster={cluster} />}
            icon={cluster => {
              const kind = getClusterStatus(cluster.getAllChildMarkers());
              const size = getClusterSize(cluster);

              return <Cluster kind={kind} size={size} />;
            }}
          >
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={location?.coord}
                icon={<Pin kind={location?.status} />}
              />
            ))}
          </MarkerCluster>
        </Map>
      )}
    </Box>
  );
}

export default POCMap;
