import React from 'react';
import { Box, Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

const Tip = ({ ...rest }) => {
  return (
    <Grommet theme={hpe} background="transparent">
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
    </Grommet>
  );
};

export { Tip };
