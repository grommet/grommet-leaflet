import React from 'react';
import { Box, Text } from 'grommet';
import { STATUS_MAP, Popup } from 'grommet-leaflet-core';

const StatusSummary = ({ status, location }) => {
  const StatusIcon = STATUS_MAP[status]?.icon;
  return (
    <Box align="center" direction="row" gap="xsmall">
      <StatusIcon color={STATUS_MAP[status].color} size="small" />
      <Text color="text-strong" size="xsmall">
        {location.status[status]} {status}
      </Text>
    </Box>
  );
};

export const ArubaPopup = ({ location }) => {
  return (
    <Popup>
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
          <StatusSummary status="critical" location={location} />
        )}
        {location.status.warning !== 0 && (
          <StatusSummary status="warning" location={location} />
        )}
        {location.status.good !== 0 && (
          <StatusSummary status="good" location={location} />
        )}
      </Box>
    </Popup>
  );
};
