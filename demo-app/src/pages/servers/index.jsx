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
import { ContentContainer, ReverseAnchor } from '../../components';
import { DeviceGroups } from './DeviceGroups';
import { RecentActivity } from './RecentActivity';
import { ServersMap } from './ServersMap';
import data from './data/servers.json';

const Servers = () => {
  const breakpoint = useContext(ResponsiveContext);

  return (
    <Page kind="full" pad={{ bottom: 'xlarge' }}>
      <PageContent>
        <PageHeader
          title="Servers"
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
          <ContentContainer gap="large">
            <DataView />
            <Box gap="medium">
              <Box direction="row" justify="between" gap="small">
                <Heading level={2} margin="none">
                  Device groups
                </Heading>
                <Anchor label="See all" icon={<LinkNext />} reverse />
              </Box>
              <DeviceGroups max={4} />
            </Box>
          </ContentContainer>
          <RecentActivity />
        </Grid>
      </PageContent>
    </Page>
  );
};

export default Servers;

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
      <ServersMap />
    </Box>
  </Data>
);
