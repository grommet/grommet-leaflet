import React from 'react';
import { Cafeteria, Cart, Shop, AidOption } from 'grommet-icons';

const markerKinds = {
  default: {
    container: {
      border: {
        color: 'border-strong',
      },
    },
  },
  restaurant: {
    container: {
      background: 'orange',
      border: { color: 'orange' },
    },
    icon: <Cafeteria color="text-strong" size="small" />,
  },
  hospital: {
    container: {
      background: 'red',
      border: { color: 'red' },
    },
    icon: <AidOption color="text-strong" size="small" />,
  },
  grocery: {
    container: {
      background: 'blue',
      border: { color: 'blue' },
    },
    icon: <Cart color="text-strong" size="small" />,
  },
  retail: {
    container: {
      background: 'blue',
      border: { color: 'blue' },
    },
    icon: <Shop color="text-strong" size="small" />,
  },
};

const generic = {
  pin: {
    ...markerKinds,
  },
  cluster: {
    ...markerKinds,
  },
};

export { generic };
