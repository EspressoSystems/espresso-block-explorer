'use client';

import {
  Footer,
  Header,
  Heading1,
  OverridePagePath,
  PageTitle,
  PageType,
  Text,
  WithEdgeMargin,
} from 'espresso-block-explorer-components';

const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);

/**
 * Home represents the default home screen navigated to by the path '/'.
 * 
 * It is currently a placeholder as we do not have the elements / components
 * for the "Block Explorer" home page fleshed out quite yet.
 */
export default function Home() {
  return (
    <OverridePagePath page={PageType.explorer}>
      <Header />

      <EdgeMarginPageTitle>
        <Heading1>
          <Text text="Explorer" />
        </Heading1>
      </EdgeMarginPageTitle>

      <Footer />
    </OverridePagePath>
  );
}
