import React from 'react';
import { Link } from 'react-router-dom';
import { Page, PageContent, PageHeader } from 'grommet';

import { ReverseAnchor } from '../../components';

const Sites = () => {
  return (
    <Page fill>
      <PageContent flex>
        <PageHeader
          title="Sites"
          parent={<ReverseAnchor as={Link} label="Home" to="/" />}
        />
        placeholder
      </PageContent>
    </Page>
  );
};

export default Sites;
