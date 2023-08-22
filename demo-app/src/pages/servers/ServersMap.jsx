import React, { useContext, useRef, useMemo } from 'react';
import { Box, DataContext } from 'grommet';
import {
  Cluster,
  Controls,
  Map,
  Marker,
  MarkerCluster,
  Pin,
} from 'grommet-leaflet';
import { hpeLeaflet } from '../../themes';
import { getClusterSize, getClusterStatus } from '../../utils';
import { ServersClusterPopup } from './ServersClusterPopup';

export const ServersMap = () => {
  const { data } = useContext(DataContext);
  const locations = useMemo(() => data.map(server => server.location), [data]);
  const containerRef = useRef();
  const mapContainerRef = useRef();

  return (
    <Box ref={containerRef} flex background="background-contrast">
      <Map ref={mapContainerRef} theme={hpeLeaflet}>
        <Controls locations={locations} />
        <MarkerCluster
          popup={cluster => <ServersClusterPopup cluster={cluster} />}
          icon={cluster => {
            const kind = getClusterStatus(cluster.getAllChildMarkers());
            const size = getClusterSize(cluster);
            return <Cluster kind={kind} size={size} />;
          }}
          chunkedLoading
        >
          {data.map((server, index) => {
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
    </Box>
  );
};
