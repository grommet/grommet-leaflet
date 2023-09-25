import React from 'react';
import { DataContext } from 'grommet';
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

export const ViewToggle = ({ options: optionsProp, active, setActive }) => {
  const { view, onView } = React.useContext(DataContext);
  const options = [];

  optionsProp.forEach(option => {
    if (OPTIONS_MAP[option]) {
      options.push(OPTIONS_MAP[option]);
    }
  });

  const handleClick = event => {
    if (event.target.value === 'map' && onView) {
      onView({ ...view, page: undefined, step: undefined });
    }
    setActive(event.target.value);
  };

  return (
    <ToggleButtonGroup
      options={options.sort((a, b) => (a.order > b.order ? 1 : -1))}
      value={active}
      onChange={handleClick}
    />
  );
};
