import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';
import { getStatusCounts, STATUS_MAP } from './utils/status';

export const ClusterPopup = ({ cluster }) => {
  const theme = useContext(ThemeContext);
  const statusCounts = getStatusCounts(cluster.getAllChildMarkers());

  return (
    <Box gap="xsmall">
      <Text color="text-strong" weight={500}>
        Device Summary
      </Text>
      <Text color="text-strong" weight={500} size="xsmall">
        Location:{' '}
        <Text size="xsmall" weight="normal">
          San Francisco, CA
        </Text>
      </Text>
      {Object.entries(statusCounts).map(([key, value]) => {
        const icon = theme?.map?.pin?.[key]?.icon;
        return value > 0 ? (
          <Box key={key} align="center" direction="row" gap="xsmall">
            {icon}
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
