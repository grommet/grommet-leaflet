// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: ISC
import React from 'react';
import { Text } from 'grommet';

export const TextEmphasis = ({ ...rest }) => {
  return <Text weight={500} color="text-strong" {...rest} />;
};
