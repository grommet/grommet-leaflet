import React from 'react';
import { Link } from 'react-router-dom';
import { Page, PageContent, PageHeader } from 'grommet';
import PinKindsMap from '../PinKindsMap';
import { ReverseAnchor } from '../components';

const GenericKinds = () => {
  return (
    <Page fill>
      <PageContent flex>
        <PageHeader
          title="Pin kinds"
          subtitle="A demo of various pin kinds"
          parent={<ReverseAnchor as={Link} label="Home" to="/" />}
        />
        <PinKindsMap />
      </PageContent>
    </Page>
  );
};

export default GenericKinds;
