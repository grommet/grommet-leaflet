import { BoxProps, TextProps } from 'grommet';

export interface LeafletThemeType {
  pin?: {
    [x: string]: {
      container?: BoxProps;
    };
  };
  cluster?: {
    size?: {
      [x: string]: {
        container?: BoxProps;
        label?: TextProps;
      };
    };
    [x: string]:
      | {
          container?: BoxProps;
        }
      | undefined;
  };
  popup?: BoxProps;
}
