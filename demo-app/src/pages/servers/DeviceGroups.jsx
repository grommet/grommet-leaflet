import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Grid, Heading, Paragraph, CardFooter } from 'grommet';
import { StatusCriticalSmall } from 'grommet-icons';
import { TextEmphasis } from '../../components';
import messages from '../../utils/messages.json';
import data from './data/servers.json';

export const DeviceGroups = ({ max }) => (
  <Grid columns="medium" gap="medium">
    {data.groups?.items.slice(0, max).map((item, index) => (
      <Card key={index}>
        <CardBody gap="xsmall">
          <Heading level={3} margin="none">
            {item.displayName}
          </Heading>
          {item.description ? (
            <Paragraph margin="none">{item.description}</Paragraph>
          ) : null}
        </CardBody>
        {item.deviceCounts?.health?.Critical > 0 ? (
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
              {item.deviceCounts?.health?.Critical}{' '}
              {item.deviceCounts?.health?.Critical > 1
                ? messages.servers.lostConnection.multiple
                : messages.servers.lostConnection.single}
            </TextEmphasis>
          </CardFooter>
        ) : null}
      </Card>
    ))}
  </Grid>
);

DeviceGroups.propTypes = {
  max: PropTypes.number,
};
