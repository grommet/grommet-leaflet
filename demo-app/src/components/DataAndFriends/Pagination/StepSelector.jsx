import React from 'react';
import PropTypes from 'prop-types';
import { Box, Select, Text } from 'grommet';

export const StepSelector = ({
  step,
  setStep,
  options = [10, 25, 50, 100],
}) => {
  return (
    <Box direction="row" align="center" gap="xsmall">
      <Text>Items per page</Text>
      <Box width={{ max: 'xsmall' }}>
        <Select
          value={step}
          options={options}
          onChange={({ option }) => {
            setStep(option);
          }}
        />
      </Box>
    </Box>
  );
};

StepSelector.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.number),
};
