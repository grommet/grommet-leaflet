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
import { Cafeteria, Cart, Shop, AidOption, Java } from 'grommet-icons';
import { userLocation } from './utils/locations';
import data from './data/sanfrancisco.json';

const markerKinds = {
  default: {
    container: {
      border: {
        color: 'border-strong',
      },
    },
  },
  restaurant: {
    container: {
      background: 'orange',
      border: { color: 'orange' },
    },
    icon: <Cafeteria color="text-strong" size="small" />,
  },
  hospital: {
    container: {
      background: 'red',
      border: { color: 'red' },
    },
    icon: <AidOption color="text-strong" size="small" />,
  },
  grocery: {
    container: {
      background: 'blue',
      border: { color: 'blue' },
    },
    icon: <Cart color="text-strong" size="small" />,
  },
  retail: {
    container: {
      background: 'blue',
      border: { color: 'blue' },
    },
    icon: <Shop color="text-strong" size="small" />,
  },
};

const genericMap = {
  pin: {
    ...markerKinds,
  },
  cluster: {
    ...markerKinds,
  },
};

const CoffeePin = () => (
  <Box
    round="xsmall"
    background="orange"
    align="center"
    justify="center"
    flex={false}
    height={{ min: '25px', max: '25px' }}
    width={{ min: '25px', max: '25px' }}
  >
    <Java color="text-strong" size="small" />
  </Box>
);

function PinKindsMap() {
  const [geolocation, setGeolocation] = useState();
  const containerRef = useRef();
  const mapContainerRef = useRef();

  // get the user's location
  useEffect(() => {
    userLocation().then(location => {
      setGeolocation(location);
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
          theme={genericMap}
        >
          <Controls locations={data} />
          <Marker
            position={geolocation}
            icon={<Grommet color="purple!" size="large" />}
          />
          <MarkerCluster>
            {data.features?.map((feature, index) => (
              <Marker
                key={index}
                position={feature?.geometry?.coordinates}
                icon={
                  // demo of a one-off custom pin
                  feature?.properties?.name === 'Four Barrel Coffee' ? (
                    <CoffeePin />
                  ) : (
                    <Pin kind={feature?.grommet?.kind} />
                  )
                }
              />
            ))}
          </MarkerCluster>
        </Map>
      )}
    </Box>
  );
}

export default PinKindsMap;
