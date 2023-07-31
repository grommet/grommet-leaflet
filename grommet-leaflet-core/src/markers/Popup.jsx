import React from 'react';
import { Box } from 'grommet';
import '../grommet-leaflet-reset.css';

const Popup = ({ ...rest }) => (
  <Box
    background="background-front"
    border={{ color: 'border-weak', size: 'xsmall' }}
    gap="xsmall"
    margin="none"
    // leave some breathing room
    pad={{ vertical: 'small', left: 'small', right: 'medium' }}
    round="xsmall"
    {...rest}
  />
);

export { Popup };
