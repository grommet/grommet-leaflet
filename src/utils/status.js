import {
  StatusCriticalSmall,
  StatusWarningSmall,
  StatusGoodSmall,
  StatusUnknownSmall,
} from "grommet-icons";

export const STATUS_MAP = {
  critical: {
    color: "status-critical",
    icon: StatusCriticalSmall,
    borderSize: "3px",
    state: "Disconnected",
  },
  warning: {
    color: "status-warning",
    icon: StatusWarningSmall,
    state: "Warning",
  },
  good: {
    color: "status-ok",
    icon: StatusGoodSmall,
    state: "Connected",
  },
  unknown: {
    color: "status-unknown",
    icon: StatusUnknownSmall,
    state: "Unknown",
  },
};

export const getStatusCounts = (markers) => {
  let critical = 0;
  let warning = 0;
  let good = 0;
  let unknown = 0;
  markers.forEach((marker) => {
    const status = marker.options.status;
    if (status === "critical") critical += 1;
    else if (status === "warning") warning += 1;
    else if (status === "good") good += 1;
    else unknown += 1;
  });

  return { critical, warning, good, unknown };
};
