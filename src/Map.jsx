import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Box, Text } from 'grommet';
import { Grommet } from 'grommet-icons';

import GrommetMarker from './GrommetMarker';
import MarkerClusterGroup from './MarkerClusterGroup';
import { GrommetGeoJSON } from './GrommetGeoJSON';
import { Pin } from './markers';
import { generateLocations } from './utils/locations';
import { geojsonLocations } from './utils/geojson_data';
import { getStatusCounts, STATUS_MAP } from './utils/status';

const initialStyle = {
  height: '100%',
};

const ClusterTip = ({ cluster }) => {
  const statusCounts = getStatusCounts(cluster.getAllChildMarkers());

  return (
    <Box gap="xsmall">
      <Text color="text-strong" weight={500}>
        Device Summary
      </Text>
      {/* TO DO should we not use bold? */}
      <Text weight="bold" size="xsmall">
        Location:{' '}
        <Text size="xsmall" weight="normal">
          San Francisco, CA
        </Text>
      </Text>
      {Object.entries(statusCounts).map(([key, value]) => {
        const StatusIcon = STATUS_MAP[key].icon;
        return value > 0 ? (
          <Box key={key} align="center" direction="row" gap="xsmall">
            <StatusIcon color={STATUS_MAP[key].color} size="small" />
            <Text color="text-strong" size="xsmall">
              {value} {STATUS_MAP[key].state}
            </Text>
          </Box>
        ) : null;
      })}
    </Box>
  );
};

ClusterTip.propTypes = {
  cluster: PropTypes.shape({
    getAllChildMarkers: PropTypes.func,
  }),
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
          <MarkerClusterGroup tip={cluster => <ClusterTip cluster={cluster} />}>
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
          <MarkerClusterGroup tip={cluster => <ClusterTip cluster={cluster} />}>
            <GrommetGeoJSON key="my-geojson" data={geojsonLocations} />
          </MarkerClusterGroup>
        </MapContainer>
      )}
    </Box>
  );
}

export default Map;
