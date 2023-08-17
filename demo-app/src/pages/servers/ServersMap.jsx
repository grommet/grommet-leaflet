import React, { useRef } from 'react';
import { Anchor, Box, Text } from 'grommet';
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
import data from './data/servers.json';

export const ServersMap = () => {
  const containerRef = useRef();
  const mapContainerRef = useRef();

  return (
    <Box ref={containerRef} flex background="background-contrast">
      <Map ref={mapContainerRef} theme={hpeLeaflet}>
        <Controls locations={data.servers.items.map(item => item.location)} />
        <MarkerCluster
          popup={cluster => <ServersClusterPopup cluster={cluster} />}
          icon={cluster => {
            const kind = getClusterStatus(cluster.getAllChildMarkers());
            const size = getClusterSize(cluster);
            return <Cluster kind={kind} size={size} />;
          }}
          chunkedLoading
        >
          {data.servers.items.map((server, index) => {
            let status = server?.hardware?.health?.summary?.toLowerCase();
            if (status === 'ok') status = 'good';

            return (
              <Marker
                key={index}
                position={server?.location}
                icon={<Pin kind={status} />}
                popup={() => (
                  <MarkerPopup
                    name={server.displayName}
                    model={server.hardware?.model}
                  />
                )}
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
