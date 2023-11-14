import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  Form,
  FormField,
  Page,
  PageContent,
  PageHeader,
  TextInput,
} from 'grommet';
import {
  Controls,
  Map,
  Marker,
  MarkerCluster,
  Pin,
  base,
} from 'grommet-leaflet';
import { deepMerge } from 'grommet/utils';
import { Copy } from 'grommet-icons';
import { generateLocations, userLocation } from '../../utils';
import {
  ClusterPopup,
  ContentContainer,
  ReverseAnchor,
} from '../../components';

const tileLayer = {
  // url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
  // attribution: `
  //   &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>,
  //   &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>
  //   &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`,
  format: 'pmtiles',
  url: 'http://localhost:8080/planet/{z}/{x}/{y}.mvt',
  attribution: `
    &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`,
};

const tiles = {
  earth: '#FFFBF6',
  glacier: '#ffffff',
  residential: '#F4F4F8',
  hospital: '#FFF6F6',
  cemetery: '#EFF2EE',
  school: '#F7F6FF',
  industrial: '#FFF9EF',
  wood: '#F4F9EF',
  grass: '#EBF9E3',
  park: '#E5F9D5',
  water: '#B7DFF2',
  sand: '#ebebeb',
  buildings: '#F2EDE8',
  highwayCasing: '#FFC3C3',
  majorRoadCasing: '#FFB9B9',
  mediumRoadCasing: '#FFCE8E',
  minorRoadCasing: '#cccccc',
  highway: '#FFCEBB',
  majorRoad: '#FFE4B3',
  mediumRoad: '#FFF2C8',
  minorRoad: '#ffffff',
  boundaries: '#9e9e9e',
  mask: '#dddddd',
  countryLabel: '#aaaaaa',
  cityLabel: '#6C6C6C',
  stateLabel: '#999999',
  neighbourhoodLabel: '#888888',
  landuseLabel: '#898989',
  waterLabel: '#41ABDC',
  naturalLabel: '#4B8F14',
  roadsLabel: '#888888',
  poisLabel: '#606060',
};

const ThemeDesigner = () => {
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

  const [value, setValue] = useState(tiles);
  const theme = deepMerge(base, value);

  return (
    <Page pad={{ bottom: 'xlarge' }}>
      <PageContent>
        <PageHeader
          parent={<ReverseAnchor as={Link} to="/" label="Home" />}
          title="Protomaps theme designer"
          subtitle="Sandbox to allow ease of designing theme for protomaps."
          actions={
            <Button
              label="Copy tiles theme"
              icon={<Copy />}
              reverse
              onClick={() =>
                navigator.clipboard.writeText(JSON.stringify(value))
              }
            />
          }
        />
        <Grid align="start" columns={['flex', 'auto']} gap="medium">
          <ContentContainer>
            <Box
              ref={containerRef}
              background="background-contrast"
              height="large"
            >
              {geolocation && (
                <Map
                  id="map"
                  ref={mapContainerRef}
                  center={geolocation}
                  tileLayer={tileLayer}
                  theme={theme}
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
          <Box>
            <Form value={value} onChange={nextValue => setValue(nextValue)}>
              {Object.keys(tiles).map(key => (
                <Box
                  key={key}
                  direction="row"
                  gap="small"
                  align="end"
                  margin={{ bottom: 'xsmall' }}
                >
                  <FormField
                    label={key}
                    name={key}
                    htmlFor={key}
                    contentProps={{ margin: { bottom: 'none', top: 'xsmall' } }}
                  >
                    <TextInput id={key} name={key} />
                  </FormField>
                  <Box
                    background={value[key]}
                    width="36px"
                    height="36px"
                    round="xsmall"
                    border
                  />
                </Box>
              ))}
            </Form>
          </Box>
        </Grid>
      </PageContent>
    </Page>
  );
};

export default ThemeDesigner;
