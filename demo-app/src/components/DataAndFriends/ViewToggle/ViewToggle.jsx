import React from 'react';
import { List, MapLocation, Table } from 'grommet-icons';
import { ToggleButtonGroup } from '../../ToggleButtonGroup';

const OPTIONS_MAP = {
  list: {
    id: 'list',
    label: <List />,
    value: 'list',
    order: 2,
  },
  map: {
    id: 'map',
    label: <MapLocation />,
    value: 'map',
    order: 1,
  },
  table: {
    id: 'table',
    label: <Table />,
    value: 'table',
    order: 0,
  },
};

export const ViewToggle = ({ options: optionsProp, view, setView }) => {
  const options = [];

  optionsProp.forEach(option => {
    if (OPTIONS_MAP[option]) {
      options.push(OPTIONS_MAP[option]);
    }
  });

  return (
    <ToggleButtonGroup
      options={options.sort((a, b) => (a.order > b.order ? 1 : -1))}
      value={view}
      setValue={setView}
    />
  );
};
