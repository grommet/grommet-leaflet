import React, { useContext } from 'react';
import {
  Controls,
  GeoJSON,
  Map,
  Marker,
  MarkerCluster,
} from 'grommet-leaflet-core';
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
            {/* <GeoJSON data={devicesWithLocation} /> */}
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
