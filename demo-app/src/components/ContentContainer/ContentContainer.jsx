// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: ISC
import React from 'react';
import { Box } from 'grommet';

export const ContentContainer = ({ ...rest }) => {
  return (
    <Box background="background-front" pad="medium" round="medium" {...rest} />
  );
};
