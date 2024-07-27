import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import styled, { ThemeContext } from './my-styled-components';
import { normalizeTheme } from '../../utils';

const StyledBox = styled(Box)`
  // to create the pin shape
  border-bottom-right-radius: 0;
  // translate to re-align with leaflet div
  transform: rotate(45deg) translateX(-35%);
  &:hover {
    transform: rotate(45deg) translateX(-35%) scale(1.1);
    transition: transform 0.4s;
  }
`;

const Pin = ({ kind = 'default' }) => {
  const theme = React.useContext(ThemeContext);
  const normalizedTheme = normalizeTheme([
    theme?.map?.pin?.default?.container,
    theme?.map?.pin?.[kind]?.container,
  ]);

  let icon = theme?.map?.pin?.[kind]?.icon;
  if (icon) {
    icon = React.cloneElement(icon, {
      // style needed to offset for rotation of location pin so
      // icon is vertical
      style: { transform: 'rotate(-45deg)' },
    });
  }

  return <StyledBox {...normalizedTheme}>{icon}</StyledBox>;
};

Pin.propTypes = {
  kind: PropTypes.string,
};

export { Pin };
