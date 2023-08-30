import * as React from 'react';
import { BoxProps } from 'grommet';

export interface PopupProps {
  kind?: string;
}

export interface PopupExtendedProps extends PopupProps, BoxProps {}

declare const Popup: React.FC<PopupExtendedProps>;

export { Popup };
