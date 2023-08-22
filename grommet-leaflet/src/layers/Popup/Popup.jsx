import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Box } from 'grommet';
import '../../grommet-leaflet-reset.css';

const Popup = ({ ...rest }) => {
  const theme = useContext(ThemeContext);
  return <Box {...theme?.map?.popup} {...rest} />;
};

export { Popup };
