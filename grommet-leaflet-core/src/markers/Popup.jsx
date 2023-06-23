import React from 'react';
import { Box, Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import '../grommet-leaflet-reset.css';

const Popup = ({ ...rest }) => {
  return (
    <Grommet theme={hpe} background="transparent">
      <Box
        background="background-front"
        border={{ color: 'border-weak', size: 'xsmall' }}
        gap="xsmall"
        margin="none"
        pad="small"
        round="xsmall"
        {...rest}
      />
    </Grommet>
  );
};

export { Popup };
