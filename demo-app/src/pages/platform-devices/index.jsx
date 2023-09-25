import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Data,
  DataFilters,
  DataFilter,
  DataSearch,
  DataSummary,
  Page,
  PageContent,
  PageHeader,
  Text,
  Toolbar,
  DataTableColumns,
} from 'grommet';
import { ToolbarRegion, ViewToggle } from '../../components/DataAndFriends';
import { ContentContainer, ReverseAnchor } from '../../components';
import devicesOriginal from './data/1073-devices-customer.geojson.json';
import { MapView } from './MapView';
import { TableView } from './TableView';

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
    pin: true,
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

const PlatformDevices = () => {
  const [visualization, setVisualization] = React.useState('table');

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
                      active={visualization}
                      setActive={value => setVisualization(value)}
                    />
                    {visualization === 'table' ? (
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
              {visualization === 'map' ? (
                <MapView
                  withLocation={devicesWithLocation}
                  withoutLocation={devicesWithoutLocation}
                />
              ) : null}
              {visualization === 'table' ? (
                <TableView
                  ariaDescribedBy="devices-data-collection"
                  columns={columns}
                  devices={devices}
                />
              ) : null}
            </Box>
          </Data>
        </ContentContainer>
      </PageContent>
    </Page>
  );
};

export default PlatformDevices;
