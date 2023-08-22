import React, { useContext } from 'react';
import { Controls, Map, Marker, MarkerCluster } from 'grommet-leaflet';
import { DataContext } from 'grommet';

export const DevicesMap = () => {
  const mapContainerRef = React.useRef();
  const dataContext = useContext(DataContext);
  const { data } = dataContext;
  const locations = data.map(device => {
    return device.geometry.coordinates;
  });

  return (
    <Map id="map" ref={mapContainerRef}>
      {data.length >= 1 ? (
        <>
          <Controls locations={locations} />
          <MarkerCluster>
            {data.map(device => {
              return (
                <Marker
                  key={device.properties.serial_number}
                  position={device.geometry.coordinates}
                  popup={device.properties.serial_number}
                />
              );
            })}
          </MarkerCluster>
        </>
      ) : null}
    </Map>
  );
};
