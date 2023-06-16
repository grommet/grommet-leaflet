import React from "react";
import { Avatar, Box, Button, Header, Nav, Text } from "grommet";
import { AppsRounded, HelpOption, Grommet, Notification } from "grommet-icons";

function GlobalHeader() {
  return (
    <Header pad="small" border="bottom">
      <Box direction="row" align="center" gap="small">
        <Grommet />
        <Text>My Site</Text>
      </Box>
      <Nav direction="row" justify="center">
        <Button label="Dashboard" />
        <Button label="Sites" />
        <Button label="Settings" />
      </Nav>
      <Box direction="row" align="center" gap="small">
        <Button icon={<Notification />} />
        <Button icon={<HelpOption />} />
        <Button icon={<AppsRounded />} />
        <Avatar src="https://avatars.githubusercontent.com/u/11637956?v=4" />
      </Box>
    </Header>
  );
}

export default GlobalHeader;
