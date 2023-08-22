import React, { useContext } from 'react';
import { Controls, Map, Marker, MarkerCluster } from 'grommet-leaflet';
import { DataContext } from 'grommet';

export const DevicesMap = ({ data: devicesWithLocation }) => {
  const mapContainerRef = React.useRef();
  const dataContext = useContext(DataContext);
  const { data } = dataContext;
  const locations = data.map(device => {
    return { coord: device.geometry.coordinates };
  });

  return (
    <>
      <Map id="map" ref={mapContainerRef}>
        {data ? (
          <>
            <Controls locations={locations} />
            {/* <MarkerCluster> */}
            {data.map(device => {
              return (
                <Marker
                  key={device.properties.serial_number}
                  position={device.geometry.coordinates}
                />
              );
            })}
            {/* </MarkerCluster> */}
          </>
        ) : null}
      </Map>
    </>
  );
};
