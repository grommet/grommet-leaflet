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
              <Map id="map" zoomControl>
                {/* <Controls
                  locations={devices.features.map(feature => {})}
                /> */}
                {/* <GeoJSON data={devices} /> */}
                <MarkerCluster popup={() => {}}>
                  {devices
                    ? devices.features.map(device => {
                        return device.geometry.coordinates[0] ? (
                          <Marker
                            key={device.properties.serial_number}
                            position={device.geometry.coordinates}
                            icon={<Pin status="warning" />}
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
