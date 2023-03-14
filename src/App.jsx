import React from "react";
import {
  Anchor,
  Footer,
  Grommet,
  Page,
  PageContent,
  PageHeader,
} from "grommet";
import { hpe } from "grommet-theme-hpe";
import GlobalHeader from "./GlobalHeader";
import Map from "./Map";

function App() {
  return (
    <Grommet theme={hpe} full>
      <Page kind="full" fill>
        <GlobalHeader />
        <PageContent flex>
          <PageHeader title="Map" />
          <Map />
          <Footer pad="small">
            <Anchor href="">grommet-leaflet GitHub repository</Anchor>
          </Footer>
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;
