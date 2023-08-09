import React, { useContext, useEffect, useRef, useState } from 'react';
import { Box, DataContext } from 'grommet';
import { Grommet } from 'grommet-icons';
import {
  Cluster,
  Controls,
  Map,
  Marker,
  MarkerCluster,
  Pin,
} from 'grommet-leaflet-core';

import { getClusterSize, getClusterStatus, userLocation } from '../../utils';
import { ServersClusterPopup } from './ServersClusterPopup';
import data from '../../data/servers.json';
import { hpeLeaflet } from '../../themes';

export const ServersMap = () => {
  // const servers = data.servers.items;
  const { data } = useContext(DataContext);

  const containerRef = useRef();
  const mapContainerRef = useRef();

  console.log('render');
  return (
    <Box ref={containerRef} flex background="background-contrast">
      <Map ref={mapContainerRef} theme={hpeLeaflet}>
        <Controls locations={data.map(server => server.location)} />
        <MarkerCluster
          popup={cluster => <ServersClusterPopup cluster={cluster} />}
          icon={cluster => {
            const kind = getClusterStatus(cluster.getAllChildMarkers());
            const size = getClusterSize(cluster);
            console.log(cluster);
            return <Cluster kind={kind} size={size} />;
          }}
          chunkedLoading
        >
          {data.map((server, index) => {
            let status = server?.hardware?.health?.summary?.toLowerCase();
            if (status === 'ok') status = 'good';
            return (
              <Marker
                // A unique key is necessary here in order for the cluster to properly update its icon
                // https://github.com/yuzhva/react-leaflet-markercluster/issues/100#issuecomment-578213443
                // https://github.com/yuzhva/react-leaflet-markercluster/issues/100#issuecomment-597668784
                // TO DO, what are the performace downsides with a large amount of data?

                // https://react-leaflet.js.org/docs/start-introduction/#limitations
                // The components exposed are abstractions for Leaflet layers, not DOM elements.
                // Some of them have properties that can be updated directly by calling the setters exposed by Leaflet while others
                // should be completely replaced, by setting an unique value on their key property so they are properly
                // handled by React's algorithm.
                key={server.id}
                // key={index}
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
