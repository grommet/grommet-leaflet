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
  Toolbar,
  DataSummary,
  Button,
} from 'grommet';
import { ToolbarRegion, ViewToggle } from '../../components/DataAndFriends';
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
};

const devicesWithoutLocation = {
  ...devices,
  features: devices.features.filter(device => {
    if (device.geometry.coordinates[0] === null) {
      return device;
    }
  }),
};

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

const columns = [
  {
    property: 'properties.serial_number',
    header: 'Serial number',
    primary: true,
    search: true,
  },
  {
    property: 'properties.device_type',
    header: 'Device type',
    search: true,
  },
  {
    property: 'properties.geo.city',
    header: 'City',
    search: true,
  },
  {
    property: 'properties.geo.state',
    header: 'State',
    search: true,
  },
  {
    property: 'properties.geo.country',
    header: 'Country',
    search: true,
  },
];

const noLocationMessage = `${new Intl.NumberFormat(navigator.language).format(
  devicesWithoutLocation.features.length,
)} devices do not have location specified. ${new Intl.NumberFormat(
  navigator.language,
).format(devicesWithLocation.features.length)} of ${new Intl.NumberFormat(
  navigator.language,
).format(
  devicesWithLocation.features.length + devicesWithoutLocation.features.length,
)} devices displayed.`;

const PlatformDevices = () => {
  const containerRef = React.useRef();
  // const [loading, setLoading] = React.useState(true);
  const [view, setView] = React.useState('map');

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

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
            properties={properties}
            // views={[
            //   {
            //     name: 'My preferred view',
            //     properties: {
            //       'properties.geo.city': ['Paris'],
            //     },
            //   },
            // ]}
          >
            <Box gap="small">
              <Toolbar direction="column" gap="xsmall">
                <ToolbarRegion>
                  <ToolbarRegion gap="small">
                    <DataSearch />
                    <DataFilters layer heading="Device filters">
                      <DataFilter property="properties.geo.city" />
                      <DataFilter property="properties.geo.city" />
                    </DataFilters>
                  </ToolbarRegion>
                  <ToolbarRegion gap="small">
                    <ViewToggle
                      options={['list', 'map', 'table']}
                      view={view}
                      setView={value => {
                        console.log(value);
                        setView(value);
                      }}
                    />
                  </ToolbarRegion>
                </ToolbarRegion>
                <DataSummary />
              </Toolbar>

              {view === 'map' ? (
                <Box gap="small">
                  {devicesWithoutLocation.features.length > 0 ? (
                    <Notification
                      status="info"
                      message={noLocationMessage}
                      actions={[
                        { label: 'Assign locations', onClick: () => {} },
                      ]}
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
                    <DevicesMap />
                  </Box>
                </Box>
              ) : null}
              {view === 'table' ? <DataTable columns={columns} /> : null}
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
