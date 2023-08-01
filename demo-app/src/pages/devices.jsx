import React from 'react';
import { Link } from 'react-router-dom';
import { Page, PageContent, PageHeader } from 'grommet';

import { ReverseAnchor } from '../components';

const Devices = () => {
  return (
    <Page fill>
      <PageContent flex>
        <PageHeader
          title="Devices"
          parent={<ReverseAnchor as={Link} label="Home" to="/" />}
        />
        placeholder
      </PageContent>
    </Page>
  );
};

export default Devices;
