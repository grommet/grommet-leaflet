import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Data, Page, PageContent, PageHeader } from 'grommet';
import {
  Controls,
  GeoJSON,
  Map,
  Marker,
  MarkerCluster,
  Pin,
} from 'grommet-leaflet-core';
import { PageSection, ReverseAnchor } from '../../components';
import devices from './data/1073-devices-customer.geojson.json';

const PlatformDevices = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Page fill>
      <PageContent flex>
        <PageHeader
          title="HPE GreenLake Devices"
          parent={<ReverseAnchor as={Link} label="Home" to="/" />}
        />
        <PageSection>
          <Data>
            <Box
              background="background-contrast"
              height={{ min: 'medium' }}
              skeleton={loading}
            >
              <Map id="map">
                <Controls locations={devices} />
                {/* <GeoJSON data={devices} /> */}
                <MarkerCluster>
                  {devices
                    ? devices.features.map(device => {
                        return device.geometry.coordinates[0] ? (
                          <Marker
                            key={device.properties.serial_number}
                            position={device.geometry.coordinates}
                            // icon={<Pin />}
                          />
                        ) : null;
                      })
                    : null}
                </MarkerCluster>
              </Map>
            </Box>
          </Data>
        </PageSection>
      </PageContent>
    </Page>
  );
};

export default PlatformDevices;
