import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { Box } from 'grommet';

function Map() {
  const [geolocation, setGeolocation] = useState();
  const containerRef = useRef();
  const mapContainerRef = useRef();

  const adjustSize = () => {
    const map = document.getElementById('map');
    if (containerRef.current && map) {
      const height = containerRef.current.getBoundingClientRect().height;
      map.style.height = `${height}px`;
    }
  };

  // get the user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
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

  // adjust the map size when the window is resized
  useEffect(() => {
    window.addEventListener('resize', adjustSize);
    return () => window.removeEventListener('resize', adjustSize);
  });

  useLayoutEffect(adjustSize);

  return (
    <Box ref={containerRef} flex background="background-contrast">
      {geolocation && (
        <MapContainer
          id="map"
          ref={mapContainerRef}
          center={geolocation}
          zoom={6}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution={`
              &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, 
              &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> 
              &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`}
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
          <Marker position={geolocation} />
        </MapContainer>
      )}
    </Box>
  );
}

export default Map;
