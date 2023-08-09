import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { Box, DataContext } from 'grommet';
import {
  Cluster,
  Controls,
  Map,
  Marker,
  MarkerCluster,
  Pin,
} from 'grommet-leaflet-core';
import ReactDOMServer from 'react-dom/server';
import L, { marker } from 'leaflet';
import { getClusterSize, getClusterStatus, userLocation } from '../../utils';
import { ServersClusterPopup } from './ServersClusterPopup';
import data from '../../data/servers.json';
import { hpeLeaflet } from '../../themes';
import { base } from 'grommet-leaflet-core/src/themes';
import { deepMerge } from 'grommet/utils';

const useGrommetLeafletMap = ({ locations, theme }) => {
  const mapRef = useRef();
  // grab grommet theme from the application
  const appTheme = useContext(ThemeContext);
  // merge map theme and caller's theme into app theme
  const mapTheme = deepMerge(appTheme, { map: deepMerge(base, theme) });

  const [markerClusterGroup, setMarkerClusterGroup] = useState();

  useEffect(() => {
    const map = L.map('map').setView([0, 0], 1);
    if (mapRef?.current) {
      const b = L.latLngBounds();
      locations
        .map(server => server.location)
        .forEach(location => {
          b.extend([location?.[0], location?.[1]]);
        });

      if (b) {
        map.flyToBounds(b, { duration: 1.5 });
      }

      L.tileLayer(
        'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
        {
          maxZoom: 19,
          attribution: `&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>,
        &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>
        &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`,
        },
      ).addTo(map);

      const markerClusterGroup = L.markerClusterGroup({
        showCoverageOnHover: false,
        iconCreateFunction: cluster => {
          // if (popupProp) {
          //   const popup = cluster.bindPopup(
          //     ReactDOMServer.renderToString(
          //       <ThemeContext.Provider value={theme}>
          //         <Popup>{popupProp(cluster)}</Popup>
          //       </ThemeContext.Provider>,
          //     ),
          //   );

          //   cluster.on('click', () => {
          //     popup.openPopup();
          //   });
          // }

          const kind = getClusterStatus(cluster.getAllChildMarkers());
          const size = getClusterSize(cluster);

          return L.divIcon({
            // 'grommet-cluster-group' class prevents leaflet default divIcon styles
            className: 'grommet-cluster-group',
            html: ReactDOMServer.renderToString(
              <ThemeContext.Provider value={mapTheme}>
                <Cluster cluster={cluster} kind={kind} size={size} />
              </ThemeContext.Provider>,
            ),
          });
        },
      });

      setMarkerClusterGroup(markerClusterGroup);
      const markerList = [];
      locations.forEach(datum => {
        let status = datum?.hardware?.health?.summary?.toLowerCase();
        if (status === 'ok') status = 'good';

        const marker = new L.marker(datum.location, {
          icon: L.divIcon({
            // 'grommet-marker' class prevents leaflet default divIcon styles
            className: 'grommet-marker',
            html: ReactDOMServer.renderToString(
              <ThemeContext.Provider value={mapTheme}>
                <Pin kind={status} />
              </ThemeContext.Provider>,
            ),
          }),
          kind: status,
        });
        markerList.push(marker);
      });

      markerClusterGroup.addLayers(markerList);

      markerClusterGroup.addTo(map);
    }
    return () => map.remove();
  }, []);

  useEffect(() => {
    // this is the equivalent of what
    markerClusterGroup?.clearLayers();
    // const b = L.latLngBounds();
    // locations
    //   .map(server => server.location)
    //   .forEach(location => {
    //     b.extend([location?.[0], location?.[1]]);
    //   });

    // if (b) {
    //   map.flyToBounds(b, { duration: 1.5 });
    // }
    const markerList = [];
    locations.forEach(datum => {
      let status = datum?.hardware?.health?.summary?.toLowerCase();
      if (status === 'ok') status = 'good';

      const marker = new L.marker(datum.location, {
        icon: L.divIcon({
          // 'grommet-marker' class prevents leaflet default divIcon styles
          className: 'grommet-marker',
          html: ReactDOMServer.renderToString(
            <ThemeContext.Provider value={mapTheme}>
              <Pin kind={status} />
            </ThemeContext.Provider>,
          ),
        }),
        kind: status,
      });
      markerList.push(marker);
    });
    markerClusterGroup?.addLayers(markerList);

    // markerClusterGroup?.refreshClusters();
  }, [locations]);

  return <Box id="map" ref={mapRef} height="medium" />;
};
export const ServersMapNative = () => {
  const { data } = useContext(DataContext);

  const map = useGrommetLeafletMap({ locations: data, theme: hpeLeaflet });
  console.log('render');
  return map;
};
