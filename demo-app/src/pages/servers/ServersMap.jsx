import React, { useContext, useRef, useMemo } from 'react';
import { Anchor, Box, DataContext, Text } from 'grommet';
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
import { TextEmphasis } from '../../components';

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
          popup={({ cluster }) => <ServersClusterPopup cluster={cluster} />}
          icon={({ cluster }) => {
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
                popup={
                  <MarkerPopup
                    name={server.displayName}
                    model={server.hardware?.model}
                  />
                }
              />
            );
          })}
        </MarkerCluster>
      </Map>
    </Box>
  );
};

const MarkerPopup = ({ name, model }) => (
  <Box gap="xsmall" pad={{ right: 'xsmall' }}>
    <Box>
      <TextEmphasis>{name}</TextEmphasis>
      <Text size="small">{model}</Text>
    </Box>
    <Anchor label="View details" size="small" />
  </Box>
);
