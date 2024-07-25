import { deepMerge } from '../utils';

const defaultKinds = {
  default: {
    container: {
      // any box props
      align: 'center',
      justify: 'center',
      background: 'background-front',
      border: {
        color: 'border',
        size: 'small',
      },
      elevation: 'medium',
      flex: false,
      round: 'full',
    },
    // icon: undefined,
  },
};

const markerKinds = deepMerge(defaultKinds, {
  default: {
    container: {
      height: { min: '25px', max: '25px' },
      width: { min: '25px', max: '25px' },
    },
  },
});

const base = {
  pin: {
    ...markerKinds,
  },
  cluster: {
    ...defaultKinds,
    size: {
      small: {
        container: {
          height: { min: '36px', max: '36px' },
          width: { min: '36px', max: '36px' },
        },
        label: {
          // any text props
          size: 'small',
        },
      },
      medium: {
        container: {
          direction: 'row-reverse',
          gap: 'xxsmall',
          height: { min: '48px', max: '48px' },
          width: { min: '48px', max: '48px' },
        },
        label: {
          color: 'text-strong',
          size: 'medium',
          weight: 500,
        },
      },
      large: {
        container: {
          direction: 'row-reverse',
          gap: 'xxsmall',
          height: { min: '54px', max: '54px' },
          width: { min: '54px', max: '54px' },
        },
        label: {
          size: 'medium',
        },
      },
    },
  },
  popup: {
    background: 'background-front',
    border: { color: 'border-weak', size: 'xsmall' },
    gap: 'xsmall',
    margin: 'none',
    pad: 'small',
    round: 'xsmall',
  },
  tiles: {
    // water: 'purple',
    // majorRoad: 'transparent',
    // buildings: 'darkgray',
    // park: 'gray',
    // mediumRoad: '#FFF2C8',
    // minorRoad: '#ffffff',
    // boundaries: '#9e9e9e',
  },
  // TODO: define tile API, considering dark/light with flexible theming
  // tiles: {
  // Colors and feature mapping from Protomaps [basemap layers]
  // (https://docs.protomaps.com/basemaps/layers#basemap-layers) derived from OpenStreetMap.
  // earth: '#FFFBF6',
  // glacier: '#ffffff',
  // residential: '#F4F4F8',
  // hospital: '#FFF6F6',
  // cemetery: '#EFF2EE',
  // school: '#F7F6FF',
  // industrial: '#FFF9EF',
  // wood: '#F4F9EF',
  // grass: '#EBF9E3',
  // park: '#E5F9D5',
  // water: '#B7DFF2',
  // sand: '#ebebeb',
  // buildings: '#F2EDE8',
  // highwayCasing: '#FFC3C3',
  // majorRoadCasing: '#FFB9B9',
  // mediumRoadCasing: '#FFCE8E',
  // minorRoadCasing: '#cccccc',
  // highway: '#FFCEBB',
  // majorRoad: '#FFE4B3',
  // mediumRoad: '#FFF2C8',
  // minorRoad: '#ffffff',
  // boundaries: '#9e9e9e',
  // mask: '#dddddd',
  // countryLabel: '#aaaaaa',
  // cityLabel: '#6C6C6C',
  // stateLabel: '#999999',
  // neighbourhoodLabel: '#888888',
  // landuseLabel: '#898989',
  // waterLabel: '#41ABDC',
  // naturalLabel: '#4B8F14',
  // roadsLabel: '#888888',
  // poisLabel: '#606060',
  // },
};

export { base };
