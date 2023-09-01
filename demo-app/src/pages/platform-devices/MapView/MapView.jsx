import React from 'react';
import { Box, Notification } from 'grommet';
import { DevicesMap } from './DevicesMap';

const noLocationMessage = ({ withLocation, withoutLocation }) =>
  `${new Intl.NumberFormat(navigator.language).format(
    withoutLocation.features.length,
  )} devices do not have location specified. ${new Intl.NumberFormat(
    navigator.language,
  ).format(withLocation.features.length)} of ${new Intl.NumberFormat(
    navigator.language,
  ).format(
    withLocation.features.length + withoutLocation.features.length,
  )} devices displayed.`;

export const MapView = ({ withLocation, withoutLocation }) => {
  const containerRef = React.useRef();

  return (
    <Box gap="small">
      {withoutLocation.features.length > 0 ? (
        <Notification
          status="info"
          message={noLocationMessage({ withLocation, withoutLocation })}
          actions={[{ label: 'Assign locations', onClick: () => {} }]}
        />
      ) : null}
      <Box
        ref={containerRef}
        background="background-contrast"
        height={{ min: 'medium' }}
        round="small"
        overflow="hidden"
      >
        <DevicesMap />
      </Box>
    </Box>
  );
};
