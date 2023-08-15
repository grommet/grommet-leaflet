import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';
import { getStatusCounts } from '../../utils';
import { Server, StatusCriticalSmall } from 'grommet-icons';
import { TextEmphasis } from '../shared';
import messages from '../../utils/messages.json';

export const ServersClusterPopup = ({ cluster }) => {
  const childMarkers = cluster.getAllChildMarkers();
  const statusCounts = getStatusCounts(childMarkers);

  return (
    <Box gap="small">
      <Box direction="row" gap="xsmall">
        <Server size="xlarge" color="text-strong" />
        <Box>
          {/* TO DO get dynamically */}
          <TextEmphasis size="large">Fort Collins</TextEmphasis>
          <Text>{childMarkers.length} servers</Text>
        </Box>
      </Box>

      {statusCounts.critical ? (
        <Box border="top" direction="row" gap="xsmall" pad={{ top: 'xsmall' }}>
          <StatusCriticalSmall color="status-critical" height="small" />
          <TextEmphasis size="small">
            {statusCounts.critical}{' '}
            {statusCounts.critical > 1
              ? messages.servers.lostConnection.multiple
              : messages.servers.lostConnection.single}
          </TextEmphasis>
        </Box>
      ) : null}
    </Box>
  );
};

ServersClusterPopup.propTypes = {
  cluster: PropTypes.shape({
    getAllChildMarkers: PropTypes.func,
  }),
};
