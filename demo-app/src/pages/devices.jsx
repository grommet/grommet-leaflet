import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Anchor,
  Box,
  Data,
  DataSearch,
  DataFilters,
  DataSummary,
  Grid,
  Heading,
  Menu,
  Page,
  PageContent,
  PageHeader,
  ResponsiveContext,
  Toolbar,
} from 'grommet';
import { LinkNext } from 'grommet-icons';
import {
  Container,
  DevicesMap,
  DeviceGroups,
  RecentActivity,
  ReverseAnchor,
} from '../components';
import data from '../utils/devices.json';

const Devices = () => {
  const breakpoint = useContext(ResponsiveContext);

  return (
    <Page kind="full" pad={{ bottom: 'xlarge' }}>
      <PageContent>
        <PageHeader
          title="Devices"
          parent={<ReverseAnchor as={Link} label="Home" to="/" />}
        />
        <Grid
          columns={
            !['xsmall', 'small', 'medium'].includes(breakpoint)
              ? ['flex', 'medium']
              : ['auto']
          }
          gap="medium"
        >
          <Container gap="large">
            <DataView />
            <Box gap="medium">
              <Box direction="row" justify="between" gap="small">
                <Heading level={2} margin="none">
                  Device groups
                </Heading>
                <Anchor label="See all" icon={<LinkNext />} reverse />
              </Box>
            </Box>
            <DeviceGroups max={4} />
          </Container>
          <RecentActivity />
        </Grid>
      </PageContent>
    </Page>
  );
};

export default Devices;

const DataView = () => (
  <Data data={data.servers.items}>
    <Toolbar>
      <DataSearch responsive />
      <DataFilters layer />
      <Box flex />
      <Menu label="Actions" items={[]} kind="toolbar" />
    </Toolbar>
    <DataSummary />
    <Box height="medium">
      <DevicesMap />
    </Box>
  </Data>
);
