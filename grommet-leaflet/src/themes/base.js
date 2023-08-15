const base = {
  pin: {
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
  },
  cluster: {
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
};

export { base };
