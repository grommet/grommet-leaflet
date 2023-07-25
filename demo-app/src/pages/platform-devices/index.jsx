import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Data, Page, PageContent, PageHeader } from 'grommet';
import { Controls, GeoJSON, Map, Marker, Pin } from 'grommet-leaflet-core';
import { PageSection, ReverseAnchor } from '../../components';
import devices from './data/1073-devices-customer.geojson.json';

const modifedDevices = { ...devices, features: devices.features.slice(0, 3) };

const PlatformDevices = () => {
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
              // skeleton
            >
              <Map id="map">
                {/* <Controls locations={modifedDevices} /> */}
                {/* <GeoJSON data={modifedDevices} /> */}
                {modifedDevices
                  ? modifedDevices.features.map(device => {
                      console.log(device.geometry.coordinates);
                      <Marker
                        position={device.geometry.coordinates}
                        icon={<Pin />}
                      />;
                    })
                  : null}
              </Map>
            </Box>
          </Data>
        </PageSection>
      </PageContent>
    </Page>
  );
};

export default PlatformDevices;
