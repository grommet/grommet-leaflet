import {
  StatusCriticalSmall,
  StatusGoodSmall,
  StatusWarningSmall,
  StatusUnknownSmall,
} from "grommet-icons";

// utility functions copied from Grommet
const parseMetricToNum = (metric) => {
  if (typeof metric === "number") return metric;
  if (metric.match(/\s/) && process.env.NODE_ENV !== "production") {
    console.warn(`Invalid single measurement value: "${metric}"`);
  }
  return parseFloat(metric.match(/\d+(\.\d+)?/), 10);
};

export const adjustPadStyle = (pad, width) => {
  const offset = parseMetricToNum(width);

  return `${Math.max(parseMetricToNum(pad) - offset, 0)}px`;
};

export const STATUS_MAP = {
  critical: {
    color: "status-critical",
    icon: StatusCriticalSmall,
    borderSize: "3px",
  },
  warning: {
    color: "status-warning",
    icon: StatusWarningSmall,
  },
  good: {
    color: "status-ok",
    icon: StatusGoodSmall,
  },
  unknown: {
    color: "status-unknown",
    icon: StatusUnknownSmall,
  },
};
