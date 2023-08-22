import * as React from 'react';

export interface ClusterProps {
  cluster?: object;
  kind?: string;
  size?: string;
}

declare const Cluster: React.FC<ClusterProps>;

export { Cluster };
