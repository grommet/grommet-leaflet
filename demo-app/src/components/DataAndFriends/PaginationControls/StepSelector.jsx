import React from 'react';
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
          onChange={({ value, option }) => {
            setStep(option);
          }}
        />
      </Box>
    </Box>
  );
};
