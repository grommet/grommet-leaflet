import React from 'react';
import { Box, Grommet, ThemeContext } from 'grommet';
import '../grommet-leaflet-reset.css';

const Popup = ({ ...rest }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Grommet theme={theme} background="transparent">
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

export { Popup };
