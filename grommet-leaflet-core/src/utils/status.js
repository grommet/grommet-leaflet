import {
  StatusCriticalSmall,
  StatusWarningSmall,
  StatusGoodSmall,
  StatusUnknownSmall,
} from 'grommet-icons';

export const STATUS_MAP = {
  critical: {
    color: 'status-critical',
    icon: StatusCriticalSmall,
    borderSize: '3px',
  },
  warning: {
    color: 'status-warning',
    icon: StatusWarningSmall,
  },
  good: {
    color: 'status-ok',
    icon: StatusGoodSmall,
  },
  unknown: {
    color: 'status-unknown',
    icon: StatusUnknownSmall,
  },
};
