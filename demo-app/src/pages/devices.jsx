import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Page, PageContent, PageHeader } from 'grommet';
import { Previous } from 'grommet-icons';

const Devices = () => {
  return (
    <Page kind="full" fill>
      <PageContent flex>
        <PageHeader
          title="Devices"
          parent={
            <Link to="/">
              <Anchor label="Dashboard" icon={<Previous />} />
            </Link>
          }
        />
        placeholder
      </PageContent>
    </Page>
  );
};

export default Devices;
