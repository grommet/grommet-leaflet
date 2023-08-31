import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Data,
  DataTable,
  DataFilters,
  DataFilter,
  DataSearch,
  DataSummary,
  Notification,
  Page,
  PageContent,
  PageHeader,
  Pagination,
  Text,
  Toolbar,
  DataTableColumns,
} from 'grommet';
import { ToolbarRegion, ViewToggle } from '../../components/DataAndFriends';
import { ContentContainer, ReverseAnchor } from '../../components';
import devicesOriginal from './data/1073-devices-customer.geojson.json';
import { DevicesMap } from './DevicesMap';

const devices = {
  ...devicesOriginal,
  features: devicesOriginal.features.map(feature => {
    return {
      ...feature,
      properties: {
        ...feature.properties,
        location: [
          feature.properties.name,
          feature.properties.geo?.city,
          feature.properties.geo?.state,
          feature.properties.geo?.country,
        ]
          .filter(Boolean)
          .join(', '),
      },
    };
  }),
};

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
  'properties.name': {
    label: 'Name',
    search: true,
  },
  'properties.ip_address': {
    label: 'IP address',
    search: true,
  },
  'properties.mac': {
    label: 'MAC address',
    search: true,
  },
  'properties.part_number': {
    label: 'Part number',
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
  'properties.location': {
    label: 'Location',
    search: true,
  },
};

const columns = [
  {
    property: 'properties.serial_number',
    header: 'Serial number',
    primary: true,
  },
  {
    property: 'properties.device_type',
    header: 'Device type',
  },
  {
    property: 'properties.part_number',
    header: 'Part number',
  },
  { property: 'properties.mac', header: 'MAC address' },
  {
    property: 'properties.ip_address',
    header: 'IP address',
    render: datum =>
      datum.properties.ip_address || <Text a11yTitle="No value">--</Text>,
  },
  {
    property: 'properties.name',
    header: 'Location name',
    render: datum =>
      datum.properties.name || <Text a11yTitle="No value">--</Text>,
  },
  {
    property: 'properties.geo.city',
    header: 'City',
    render: datum =>
      datum.properties.geo?.city || <Text a11yTitle="No value">--</Text>,
  },
  {
    property: 'properties.geo.state',
    header: 'State',
    render: datum =>
      datum.properties.geo?.state || <Text a11yTitle="No value">--</Text>,
  },
  {
    property: 'properties.geo.country',
    header: 'Country',
    render: datum =>
      datum.properties.geo?.country || <Text a11yTitle="No value">--</Text>,
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
  const [view, setView] = React.useState('map');
  const [sort, setSort] = React.useState({
    property: 'properties.serial_number',
    direction: 'asc',
  });
  const [page, setPage] = React.useState(1);
  const limit = 25;
  const numberItems = devices.features.length;
  const pageResultStart = (page - 1) * limit + 1;
  const pageResultEnd = Math.min(page * limit, numberItems);

  return (
    <Page fill>
      <PageContent>
        <PageHeader
          id="devices-data-collection"
          title="Acme, Inc. Devices"
          parent={<ReverseAnchor as={Link} label="Home" to="/" />}
        />
        <ContentContainer flex={false}>
          <Data data={devices.features} properties={properties}>
            <Box gap="small">
              <Toolbar direction="column" gap="xsmall">
                <ToolbarRegion>
                  <ToolbarRegion gap="small">
                    <DataSearch />
                    <DataFilters layer heading="Device filters">
                      <DataFilter property="properties.location" />
                      <DataFilter property="properties.device_type" />
                      <DataFilter property="properties.name" />
                      <DataFilter property="properties.part_number" />
                    </DataFilters>
                  </ToolbarRegion>
                  <ToolbarRegion gap="small">
                    <ViewToggle
                      options={['map', 'table']}
                      view={view}
                      setView={value => setView(value)}
                    />
                    {view === 'table' ? (
                      <DataTableColumns
                        drop
                        options={columns.map(({ header, property }) => ({
                          property,
                          label: header,
                        }))}
                      />
                    ) : null}
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
                  >
                    <DevicesMap />
                  </Box>
                </Box>
              ) : null}
              {view === 'table' ? (
                <Box gap="xsmall">
                  <DataTable
                    aria-describedby="devices-data-collection"
                    columns={columns}
                    alignSelf="start"
                    fill="vertical"
                    sort={sort}
                    onSort={setSort}
                    pin
                    sortable
                    verticalAlign="top"
                  />
                  {numberItems > limit && (
                    <Box
                      direction="row"
                      fill="horizontal"
                      border="top"
                      justify="end"
                    >
                      <Text>
                        Showing {pageResultStart}-{pageResultEnd} of{' '}
                        {numberItems}
                      </Text>
                      <Pagination
                        step={limit}
                        numberItems={numberItems}
                        page={page}
                        onChange={({ page }) => setPage(page)}
                        direction="row"
                        flex={false}
                      />
                    </Box>
                  )}
                </Box>
              ) : null}
            </Box>
          </Data>
        </ContentContainer>
      </PageContent>
    </Page>
  );
};

export default PlatformDevices;
