// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: ISC
import * as React from 'react';

export interface PinProps {
  kind?: string;
}

export interface PinExtendedProps
  extends PinProps,
    Omit<JSX.IntrinsicElements['div'], keyof PinProps> {}

declare const Pin: React.FC<PinExtendedProps>;

export { Pin };
