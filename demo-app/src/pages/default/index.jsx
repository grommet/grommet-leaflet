import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Page, PageContent, PageHeader } from 'grommet';
import { Controls, Map, Marker, MarkerCluster, Pin } from 'grommet-leaflet';
import * as pmtiles from 'pmtiles';
import { leafletLayer } from 'protomaps';
import { generateLocations, userLocation } from '../../utils';
import {
  ClusterPopup,
  ContentContainer,
  ReverseAnchor,
} from '../../components';

const p = new pmtiles.PMTiles('http://localhost:8080/planet.pmtiles');

console.log('p', p);

console.log(pmtiles.leafletRasterLayer(p));

const layer = leafletLayer({
  // url: 'http://localhost:8080/planet.pmtiles',
  url: 'http://localhost:8080/planet/{z}/{x}/{y}.mvt',
  // url: 'http://localhost:8080/planet/{z}/{x}/{y}.png',
});
// console.log('layer', layer);
// console.log('layer.options', layer.options);
// console.log('layer.options.url', layer.options.url);
// console.log('YO', layer.views);

// console.log('p', p);
// console.log('p.views', p.source);

const tileLayer = {
  // url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
  url: layer.options.url,
  attribution: `
    &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>,
    &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>,
    &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`,
};

const Default = () => {
  const [geolocation, setGeolocation] = useState();
  const [locations, setLocations] = useState();
  const containerRef = useRef();
  const mapContainerRef = useRef();

  // get the user's location
  useEffect(() => {
    userLocation().then(location => {
      setGeolocation(location);
      setLocations(generateLocations(50, { center: location, radius: 6 }));
    });
  }, []);

  return (
    <Page fill pad={{ bottom: 'xlarge' }}>
      <PageContent flex>
        <PageHeader
          parent={<ReverseAnchor as={Link} to="/" label="Home" />}
          title="Default pins and clusters"
          // eslint-disable-next-line max-len
          subtitle="This is the default pin and cluster behavior when no `kind` has been specified on the individual Pin or Cluster."
        />
        <ContentContainer fill>
          <Box
            ref={containerRef}
            flex="grow"
            background="background-contrast"
            height={{ min: 'medium' }}
          >
            {geolocation && (
              <Map
                id="map"
                ref={mapContainerRef}
                center={geolocation}
                tileLayer={tileLayer}
              >
                {locations ? (
                  <Controls
                    locations={locations.map(location => location.coord)}
                  />
                ) : null}
                <MarkerCluster
                  popup={({ cluster }) => <ClusterPopup cluster={cluster} />}
                >
                  {locations.map((location, index) => (
                    <Marker
                      key={index}
                      position={location?.coord}
                      icon={<Pin />}
                    />
                  ))}
                </MarkerCluster>
              </Map>
            )}
          </Box>
        </ContentContainer>
      </PageContent>
    </Page>
  );
};

export default Default;
