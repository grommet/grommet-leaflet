import { useState, useRef, useEffect } from 'react';
import { Grommet, Box, Text, Page, PageContent } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { Controls, Map, Marker, MarkerCluster, Pin } from 'grommet-leaflet';
import { hpeLeaflet } from './hpeLeaflet';

const statuses = ['good', 'warning', 'critical', 'unknown'];

// get user location
function userLocation() {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(
      position => {
        resolve([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        const stored = localStorage.getItem('geolocation');
        if (stored) resolve(JSON.parse(stored));
      },
    );
  });
}

function generateLocations(n: number, options: object) {
  const { center, radius }: any = options;
  const locations = [];
  for (let i = 0; i < n; i += 1) {
    locations.push({
      coord: [
        center[0] - Math.random() * radius,
        center[1] - Math.random() * radius,
      ],
      status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }
  return locations;
}

const App = () => {
  const [geolocation, setGeolocation] = useState<any>();
  const [locations, setLocations] = useState<any>();
  const containerRef = useRef<any>();
  const mapContainerRef = useRef<any>();

  // get the user's location
  useEffect(() => {
    userLocation().then(location => {
      setGeolocation(location);
      setLocations(generateLocations(50, { center: location, radius: 6 }));
    });
  }, []);
  return (
    <Grommet theme={hpe} full>
      <Page fill pad={{ bottom: 'xlarge' }}>
        <PageContent flex>
          <Box background="background-front" pad="medium" round="medium">
            <Box
              ref={containerRef}
              flex="grow"
              background="background-contrast"
              height={{ min: 'medium' }}
            >
              {geolocation && (
                <Map
                  dragging={true}
                  id="map"
                  ref={mapContainerRef}
                  center={geolocation}
                >
                  {locations ? (
                    <Controls
                      locations={locations.map(
                        (location: any) => location.coord,
                      )}
                    />
                  ) : null}
                  <MarkerCluster
                    zoomToBoundsOnClick={false}
                    popup={() => (
                      <Box gap="xsmall">
                        <Text>Device Summary</Text>
                        <Text size="xsmall">Location: San Francisco, CA</Text>
                      </Box>
                    )}
                  >
                    {locations.map((location: any, index: number) => (
                      <Marker
                        key={index}
                        position={location?.coord}
                        icon={<Pin />}
                      >
                        <Box gap="xsmall">
                          <Text>Device Summary</Text>
                          <Text size="xsmall">Location: San Francisco, CA</Text>
                        </Box>
                      </Marker>
                    ))}
                  </MarkerCluster>
                </Map>
              )}
            </Box>
          </Box>
        </PageContent>
      </Page>
    </Grommet>
  );
};

export default App;
