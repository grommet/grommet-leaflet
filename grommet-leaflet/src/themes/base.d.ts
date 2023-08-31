import { BoxProps, TextProps } from 'grommet';

export interface GrommetLeafletThemeType {
  pin?: {
    [kind: string]: {
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
    [kind: string]:
      | {
          container?: BoxProps;
        }
      | undefined;
  };
  popup?: BoxProps;
}
