const markerKinds = {
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
      height: { min: '25px', max: '25px' },
      width: { min: '25px', max: '25px' },
    },
    // icon: undefined,
  },
};

const base = {
  pin: {
    ...markerKinds,
  },
  cluster: {
    ...markerKinds,
    size: {
      small: {
        container: {
          height: { min: '36px', max: '36px' },
          width: { min: '36px', max: '36px' },
        },
        label: {
          // any text props
          color: 'text-strong',
          size: 'small',
          weight: 500,
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
          size: 'medium',
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
};

export { base };
