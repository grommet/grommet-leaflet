import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

export const ToolbarRegion = ({ gap = 'medium', ...rest }) => {
  return <Box direction="row" gap={gap} {...rest} />;
};

ToolbarRegion.propTypes = {
  gap: PropTypes.string,
};
