import React from 'react';
import { Link } from 'react-router-dom';
import { Page, PageContent, PageHeader } from 'grommet';
import { PageSection, ReverseAnchor } from '../../components';

const PlatformDevices = () => {
  return (
    <Page fill>
      <PageContent flex>
        <PageHeader
          title="HPE GreenLake Devices"
          parent={<ReverseAnchor as={Link} label="Home" to="/" />}
        />
        <PageSection>yo</PageSection>
      </PageContent>
    </Page>
  );
};

export default PlatformDevices;
