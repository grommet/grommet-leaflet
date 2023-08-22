import * as React from 'react';
import { BoxProps } from 'grommet';

export interface ClusterProps {
  cluster?: object;
  kind?: string;
  size?: string;
}

export interface ClusterExtendedProps extends ClusterProps, BoxProps {}

declare const Cluster: React.FC<ClusterProps>;

export { Cluster };
