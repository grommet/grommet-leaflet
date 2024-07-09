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
import { Controls, Map, Marker, MarkerCluster, base } from 'grommet-leaflet';
import { Copy } from 'grommet-icons';
import { generateLocations, userLocation } from '../../utils';
import {
  ClusterPopup,
  ContentContainer,
  ReverseAnchor,
} from '../../components';

const tileLayer = {
  format: 'pmtiles',
  url: import.meta.env.VITE_TILE_LAYER_URL,
  attribution: `
    &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors`,
};

const tiles = {
  earth: '#DFDFDF',
  glacier: '#ffffff4A',
  residential: 'transparent',
  hospital: 'transparent',
  cemetery: 'transparent',
  school: 'transparent',
  industrial: 'transparent',
  wood: '#17EBA015',
  grass: '#17EBA015',
  park: '#17EBA015',
  water: '#00C8FF1A',
  sand: 'transparent',
  buildings: '#0000002A',
  highwayCasing: '#CFCFCF',
  majorRoadCasing: '#CFCFCF',
  mediumRoadCasing: '#CFCFCF',
  minorRoadCasing: '#CFCFCF',
  highway: '#0000000C',
  majorRoad: '#00000009',
  mediumRoad: '#00000005',
  minorRoad: '#00000001',
  boundaries: '#0000002C',
  mask: '#7630EA',
  countryLabel: '#333333',
  cityLabel: '#333333',
  stateLabel: '#333333',
  neighbourhoodLabel: '#333333',
  landuseLabel: '#333333',
  waterLabel: '#333333',
  naturalLabel: '#333333',
  roadsLabel: '#333333',
  poisLabel: '#F740FF',
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

  const [tileValues, setTileValues] = useState(tiles);
  const [theme, setTheme] = useState(null);
  const [redraw, setRedraw] = useState(false);

  useEffect(() => {
    setTheme({ ...base, tiles: tileValues });
    setRedraw(true);
  }, [tileValues]);

  useEffect(() => {
    if (redraw) {
      setRedraw(false);
    }
  }, [redraw]);

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
                navigator.clipboard.writeText(JSON.stringify(tileValues))
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
              {geolocation && !redraw && (
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
                      <Marker key={index} position={location?.coord} />
                    ))}
                  </MarkerCluster>
                </Map>
              )}
            </Box>
          </ContentContainer>
          <Box>
            <Form
              value={tileValues}
              onChange={nextValue => setTileValues(nextValue)}
            >
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
                    background={tileValues[key]}
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
