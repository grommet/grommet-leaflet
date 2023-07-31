import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';
import { TextEmphasis } from './components';
import { getStatusCounts, STATUS_MAP } from './utils/status';

export const ClusterPopup = ({ cluster }) => {
  const theme = useContext(ThemeContext);
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
