import React, { useEffect, useRef, useState } from 'react';
import { Box } from 'grommet';
import { Grommet } from 'grommet-icons';
import {
  Controls,
  Map,
  Marker,
  MarkerCluster,
  Pin,
} from 'grommet-leaflet-core';
import { Java } from 'grommet-icons';
import { userLocation } from './utils/locations';
import data from './data/sanfrancisco.json';
import { generic } from './themes';

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
          theme={generic}
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
                popup={<Box>{feature?.properties?.name}</Box>}
              />
            ))}
          </MarkerCluster>
        </Map>
      )}
    </Box>
  );
}

export default PinKindsMap;
