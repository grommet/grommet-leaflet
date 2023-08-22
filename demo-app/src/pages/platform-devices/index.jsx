import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Data,
  Notification,
  Page,
  PageContent,
  PageHeader,
  List,
  DataTable,
  DataFilters,
  DataFilter,
  DataSearch,
  DataSort,
  Toolbar,
} from 'grommet';
import { ContentContainer, ReverseAnchor } from '../../components';
import devices from './data/1073-devices-customer.geojson.json';
import { DevicesMap } from './DevicesMap';

const devicesWithLocation = {
  ...devices,
  features: devices.features.filter(device => {
    if (device.geometry.coordinates[0] !== null) {
      return device;
    }
  }),
  // .slice(0, 20),
};

const devicesWithoutLocation = {
  ...devices,
  features: devices.features.filter(device => {
    if (device.geometry.coordinates[0] === null) {
      return device;
    }
  }),
};

const PlatformDevices = () => {
  const containerRef = React.useRef();
  // const [loading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  const properties = {
    'properties.serial_number': {
      label: 'Serial number',
      search: true,
    },
    'properties.device_type': {
      label: 'Device type',
      search: true,
    },
    'properties.geo.city': {
      label: 'City',
      search: true,
    },
    'properties.geo.state': {
      label: 'State',
      search: true,
    },
    'properties.geo.country': {
      label: 'Country',
      search: true,
    },
  };

  return (
    <Page fill>
      <PageContent flex>
        <PageHeader
          title="HPE GreenLake Devices"
          parent={<ReverseAnchor as={Link} label="Home" to="/" />}
        />
        <ContentContainer flex={false}>
          <Data
            data={devicesWithLocation.features}
            toolbar
            properties={properties}
          >
            {/* <Toolbar> */}
            {/* <DataSearch /> */}
            {/* <DataFilters layer heading="Device filters"> */}
            {/* <DataFilter property="properties.geo.city" /> */}
            {/* <DataSort /> */}
            {/* </DataFilters> */}
            {/* </Toolbar> */}
            <Box gap="small">
              {devicesWithoutLocation.features.length > 0 ? (
                <Notification
                  status="info"
                  message={`${new Intl.NumberFormat(navigator.language).format(
                    devicesWithoutLocation.features.length,
                  )} devices do not have location specified. ${new Intl.NumberFormat(
                    navigator.language,
                  ).format(
                    devicesWithLocation.features.length,
                  )} of ${new Intl.NumberFormat(navigator.language).format(
                    devicesWithLocation.features.length +
                      devicesWithoutLocation.features.length,
                  )} devices displayed.`}
                  actions={[{ label: 'Assign locations', onClick: () => {} }]}
                />
              ) : null}
              <Box
                ref={containerRef}
                background="background-contrast"
                height={{ min: 'medium' }}
                round="small"
                overflow="hidden"
                // skeleton={loading}
              >
                {/* {devicesWithLocation ? (
                  <DevicesMap data={devicesWithLocation} />
                ) : null} */}
                <DevicesMap />
              </Box>
            </Box>
          </Data>
        </ContentContainer>
        <Box height="medium" background="blue" flex={false}>
          fddf
        </Box>
      </PageContent>
    </Page>
  );
};

export default PlatformDevices;
