import React from 'react';
import { Box, RadioButtonGroup } from 'grommet';
import styled from 'styled-components';

const toggleButtonStyle = {
  active: { background: 'active-background' },
  pad: { horizontal: '8px', vertical: '8px' },
  round: '6px',
};

const StyledRadioButtonGroup = styled(RadioButtonGroup)`
  label {
    padding: 0;
  }

  label > div {
    padding: 0;
  }
`;

export const ToggleButtonGroup = ({ options, value, onChange, ...rest }) => {
  return (
    <StyledRadioButtonGroup
      name="radio"
      direction="row"
      margin="none"
      options={options}
      border
      round={toggleButtonStyle.round}
      value={value}
      onChange={onChange}
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
    </StyledRadioButtonGroup>
  );
};
