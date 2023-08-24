import React from 'react';
import { Box, RadioButtonGroup, ThemeContext } from 'grommet';

const toggleButtonStyle = {
  active: { background: 'active-background' },
  pad: { horizontal: '8px', vertical: '8px' },
  round: '6px',
};

const radioButtonReset = {
  radioButton: {
    container: {
      extend: ``,
    },
    extend: ``,
  },
};

export const ToggleButtonGroup = ({ options, value, setValue, ...rest }) => {
  return (
    <ThemeContext.Extend value={radioButtonReset}>
      <RadioButtonGroup
        name="radio"
        direction="row"
        margin="none"
        options={options}
        border
        round={toggleButtonStyle.round}
        value={value}
        onChange={event => setValue(event.target.value)}
        {...rest}
      >
        {(option, { checked }) => {
          return (
            <Box
              background={
                checked
                  ? toggleButtonStyle.active.background
                  : toggleButtonStyle.background
              }
              border={option.order < options.length - 1 && { side: 'right' }}
              pad={toggleButtonStyle.pad}
            >
              {option.label}
            </Box>
          );
        }}
      </RadioButtonGroup>
    </ThemeContext.Extend>
  );
};
