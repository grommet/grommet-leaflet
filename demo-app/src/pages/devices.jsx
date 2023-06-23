import React from 'react';
import { Link } from 'react-router-dom';
import {
  Anchor,
  Box,
  Card,
  CardBody,
  Data,
  DataSearch,
  DataFilters,
  DataSummary,
  Toolbar,
  Grid,
  Heading,
  Menu,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  CardFooter,
} from 'grommet';
import { LinkNext, Previous, StatusCriticalSmall } from 'grommet-icons';
import {
  Container,
  DevicesMap,
  RecentActivity,
  TextEmphasis,
} from '../components';
import data from '../utils/devices.json';
import messages from '../utils/messages.json';

const Devices = () => {
  return (
    <Page kind="full" pad={{ bottom: 'xlarge' }}>
      <PageContent>
        <PageHeader
          title="Devices"
          parent={
            <Link to="/">
              <Anchor label="Dashboard" icon={<Previous />} />
            </Link>
          }
        />
        <Grid
          // TO DO responsive layout
          columns={['flex', 'medium']}
          gap="medium"
        >
          <Container gap="large">
            <DataView />
            <DeviceGroups />
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

const DeviceGroups = () => (
  <Box gap="medium">
    <Box direction="row" justify="between" gap="small">
      <Heading level={2} margin="none">
        Device groups
      </Heading>
      <Anchor label="See all" icon={<LinkNext />} reverse />
    </Box>
    <Grid columns="medium" gap="medium">
      {data.groups?.items.map(item => (
        <Card key={item}>
          <CardBody gap="xsmall">
            <Heading level={3} margin="none">
              {item.displayName}
            </Heading>
            {item.description ? (
              <Paragraph margin="none">{item.description}</Paragraph>
            ) : null}
          </CardBody>
          {item.deviceCounts?.health?.['Critical'] > 0 ? (
            <CardFooter
              border={{ color: 'border-weak', side: 'top' }}
              justify="start"
              gap="xsmall"
            >
              <StatusCriticalSmall
                color="status-critical"
                size="small"
                height="small"
              />
              <TextEmphasis size="small">
                {item.deviceCounts?.health?.['Critical']}{' '}
                {item.deviceCounts?.health?.['Critical'] > 1
                  ? messages.servers.lostConnection.multiple
                  : messages.servers.lostConnection.single}
              </TextEmphasis>
            </CardFooter>
          ) : null}
        </Card>
      ))}
    </Grid>
  </Box>
);
