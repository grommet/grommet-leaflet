import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Box, Text } from 'grommet';

const StatusSummary = ({ theme, status, location }) => {
  const icon = theme?.map?.pin?.[status]?.icon;
  return (
    <Box align="center" direction="row" gap="xsmall">
      {icon}
      <Text color="text-strong" size="xsmall">
        {location.status[status]} {status}
      </Text>
    </Box>
  );
};

export const NetworkPopup = ({ location }) => {
  const theme = useContext(ThemeContext);
  return (
    <Box gap="xsmall">
      <Text color="text-strong" weight={500}>
        Location Summary
      </Text>
      <Text color="text-strong" weight={500} size="xsmall">
        Location:{' '}
        <Text size="xsmall" weight="normal">
          San Francisco, CA
        </Text>
      </Text>
      <Text color="text-strong" weight={500} size="xsmall">
        Type:{' '}
        <Text size="xsmall" weight="normal">
          {location.type}
        </Text>
      </Text>

      {location.status.critical !== 0 && (
        <StatusSummary theme={theme} status="critical" location={location} />
      )}
      {location.status.warning !== 0 && (
        <StatusSummary theme={theme} status="warning" location={location} />
      )}
      {location.status.good !== 0 && (
        <StatusSummary theme={theme} status="good" location={location} />
      )}
    </Box>
  );
};

StatusSummary.propTypes = {
  theme: PropTypes.object,
  status: PropTypes.string,
  location: PropTypes.shape({
    type: PropTypes.string,
    status: PropTypes.string,
  }),
};

NetworkPopup.propTypes = {
  location: PropTypes.shape({
    type: PropTypes.string,
    status: PropTypes.object,
  }),
};
