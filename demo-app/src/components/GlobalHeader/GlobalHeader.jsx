import React from 'react';
import { Avatar, Box, Button, Header, Nav, Text } from 'grommet';
import {
  AppsRounded,
  HelpOption,
  Grommet,
  Notification,
  Search,
} from 'grommet-icons';
import { Link } from 'react-router-dom';

function GlobalHeader() {
  return (
    <Header
      background="background-front"
      border={{ color: 'border-weak', side: 'bottom' }}
      pad={{ horizontal: 'large', vertical: 'small' }}
      // sticky="scrollup"
    >
      <Box direction="row" align="center" gap="small" flex>
        <Grommet color="purple!" />
        <Text>My Site</Text>
      </Box>
      <Box flex />
      <Nav direction="row" justify="center" gap="xxsmall">
        <Button as={Link} label="Home" to="/" size="small" />
        <Button as={Link} label="Devices" to="/devices" size="small" />
        <Button as={Link} label="Sites" to="/sites" size="small" />
        <Button label="Settings" size="small" />
      </Nav>
      <Box flex />
      <Box direction="row" align="center" gap="small">
        <Box direction="row" align="center" gap="xxsmall">
          <Button a11yTitle="global header search" icon={<Search />} />
          <Button
            a11yTitle="global header notifications"
            icon={<Notification />}
          />
          <Button a11yTitle="global header help" icon={<HelpOption />} />
          <Button a11yTitle="global header apps" icon={<AppsRounded />} />
        </Box>
        <Avatar
          src="https://avatars.githubusercontent.com/u/11637956?v=4"
          size="36px"
        />
      </Box>
    </Header>
  );
}

export { GlobalHeader };
