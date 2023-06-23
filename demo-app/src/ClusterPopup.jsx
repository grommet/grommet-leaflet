import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';
import { getStatusCounts, STATUS_MAP } from 'grommet-leaflet-core';
import { TextEmphasis } from './components';

export const ClusterPopup = ({ cluster }) => {
  const statusCounts = getStatusCounts(cluster.getAllChildMarkers());

  return (
    <Box gap="xsmall">
      <TextEmphasis>Device Summary</TextEmphasis>
      <TextEmphasis size="xsmall">
        Location:{' '}
        <Text size="xsmall" weight="normal">
          San Francisco, CA
        </Text>
      </TextEmphasis>
      {Object.entries(statusCounts).map(([key, value]) => {
        const StatusIcon = STATUS_MAP[key].icon;
        return value > 0 ? (
          <Box key={key} align="center" direction="row" gap="xsmall">
            <StatusIcon color={STATUS_MAP[key].color} size="small" />
            <Text color="text-strong" size="xsmall">
              {value} {STATUS_MAP[key].state}
            </Text>
          </Box>
        ) : null;
      })}
    </Box>
  );
};

ClusterPopup.propTypes = {
  cluster: PropTypes.shape({
    getAllChildMarkers: PropTypes.func,
  }),
};
