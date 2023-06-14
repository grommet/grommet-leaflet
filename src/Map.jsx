import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Box } from 'grommet';
import { Grommet } from 'grommet-icons';

import GrommetMarker from './GrommetMarker';
import MarkerClusterGroup from './MarkerClusterGroup';
import { GrommetGeoJSON } from './GrommetGeoJSON';
import { Pin } from './markers';
import { generateLocations } from './utils/locations';
import { ClusterPopup } from './ClusterPopup';
import geojsonLocations from './utils/geojson_data.json';

const initialStyle = {
  height: '100%',
};

function Map() {
  const [geolocation, setGeolocation] = useState();
  const containerRef = useRef();
  const mapContainerRef = useRef();

  // get the user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const nextLocation = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        setGeolocation(nextLocation);
        localStorage.setItem('geolocation', JSON.stringify(nextLocation));
      },
      () => {
        const stored = localStorage.getItem('geolocation');
        if (stored) setGeolocation(JSON.parse(stored));
      },
    );
  }, []);

  return (
    <Box ref={containerRef} flex background="background-contrast">
      {geolocation && (
        <MapContainer
          id="map"
          ref={mapContainerRef}
          center={geolocation}
          zoom={6}
          scrollWheelZoom={false}
          style={initialStyle}
        >
          <TileLayer
            attribution={`
              &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, 
              &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> 
              &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`}
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
          <GrommetMarker position={geolocation} icon={<Grommet />} />
          <MarkerClusterGroup
            popup={cluster => <ClusterPopup cluster={cluster} />}
          >
            {generateLocations(50, { center: geolocation, radius: 5 }).map(
              (location, index) => (
                <GrommetMarker
                  key={index}
                  position={location?.coord}
                  icon={<Pin status={location?.status} />}
                />
              ),
            )}
          </MarkerClusterGroup>
          <MarkerClusterGroup
            popup={cluster => <ClusterPopup cluster={cluster} />}
          >
            <GrommetGeoJSON key="my-geojson" data={geojsonLocations} />
          </MarkerClusterGroup>
        </MapContainer>
      )}
    </Box>
  );
}

export default Map;
