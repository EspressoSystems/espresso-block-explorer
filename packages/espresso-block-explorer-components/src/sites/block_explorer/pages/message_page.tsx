import { default as LabeledAnchorButton } from '@/block_explorer/components/hid/buttons/labeled_anchor_button/labeled_anchor_button';
import { default as LabeledButton } from '@/block_explorer/components/hid/buttons/labeled_button/labeled_button';
import { default as Card } from '@/block_explorer/components/layout/card/card';
import { default as Heading1 } from '@/block_explorer/components/layout/heading/heading1';
import { WithEdgeMargin } from '@/block_explorer/components/layout/margin/margins';
import { default as Footer } from '@/block_explorer/components/page_sections/footer/footer';
import { default as Header } from '@/block_explorer/components/page_sections/header/header';
import { default as PageTitle } from '@/block_explorer/components/page_sections/page_title/page_title';
import {
  OverridePagePath,
  PageType,
} from '@/block_explorer/contexts/page_path_provider';
import { PathResolverContext } from '@/block_explorer/contexts/path_resolver_provider';
import { Text } from '@/components/text';
import { default as React } from 'react';
import './message_page.css';

const EdgeMarginCard = WithEdgeMargin(Card);
const EdgeMarginPageTitle = WithEdgeMargin(PageTitle);

interface MessagePageProps {
  title: string;
  message: string;
  /** The buttons offered below the message. */
  children: React.ReactNode;
}

/**
 * MessagePage is a page of the site that, in place of content, explains
 * what happened and offers where to go next.
 */
const MessagePage: React.FC<MessagePageProps> = (props) => (
  <OverridePagePath page={PageType.unknown}>
    <Header />

    <EdgeMarginPageTitle>
      <Heading1>
        <Text text={props.title} />
      </Heading1>
    </EdgeMarginPageTitle>

    <EdgeMarginCard className="message-page">
      <p>
        <Text text={props.message} />
      </p>
      <div className="message-page--actions">{props.children}</div>
    </EdgeMarginCard>

    <Footer />
  </OverridePagePath>
);

/** NotFoundPage is shown for any address the site has no page for. */
export const NotFoundPage: React.FC = () => {
  const pathResolver = React.useContext(PathResolverContext);

  return (
    <MessagePage
      title="Page not found"
      message="We couldn't find the page you're looking for. Check the address, or use one of the links below."
    >
      <LabeledAnchorButton href={pathResolver.explorer()}>
        <Text text="Go to Explorer" />
      </LabeledAnchorButton>
      <LabeledAnchorButton href={pathResolver.blocks()}>
        <Text text="View blocks" />
      </LabeledAnchorButton>
      <LabeledAnchorButton href={pathResolver.transactions()}>
        <Text text="View blobs" />
      </LabeledAnchorButton>
    </MessagePage>
  );
};

export interface ErrorPageProps {
  onRetry: () => void;
}

/** ErrorPage is shown when a page fails while rendering. */
export const ErrorPage: React.FC<ErrorPageProps> = (props) => {
  const pathResolver = React.useContext(PathResolverContext);

  return (
    <MessagePage
      title="Something went wrong"
      message="This page ran into a problem and couldn't be shown. Try again, or go back to the Explorer."
    >
      <LabeledButton onClick={props.onRetry}>
        <Text text="Try again" />
      </LabeledButton>
      <LabeledAnchorButton href={pathResolver.explorer()}>
        <Text text="Go to Explorer" />
      </LabeledAnchorButton>
    </MessagePage>
  );
};
