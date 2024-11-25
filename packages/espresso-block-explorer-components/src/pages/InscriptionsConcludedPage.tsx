import React, { ForwardedRef, HTMLProps, useState } from 'react';
import Text from '../components/text/Text';
import './inscriptions_page.css';

import { addClassToClassName } from '@/components/higher_order';
import DiscordLink from '@/components/links/social_media/DiscordLink';
import TwitterLink from '@/components/links/social_media/TwitterLink';
import {
  YourInscriptionsListStreamConsumer,
  YourInscriptionsListStreamContext,
} from '@/components/page_sections/latest_inscriptions_summary/YourInscriptionListLoader';
import { RainbowKitContextInjector } from '@/components/rainbowkit/components/provider';
import {
  RainbowKitAccountContext,
  RainbowKitModalContext,
  RainbowKitMountedContext,
} from '@/components/rainbowkit/contexts/contexts';
import EspressoLogo from '@/components/visual/icons/EspressoLogo';
import { InscriptionServiceRequest } from '@/service/inscription/cappuccino/requests/inscription_service_request';
import { RetrieveInscriptionsForAddress } from '@/service/inscription/cappuccino/requests/retrieve_inscriptions_for_address';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { LatestInscriptionListAsyncHandler, NumberText } from '../components';
import { CappuccinoInscriptionServiceAPIContext } from './CappuccinoInscriptionServiceAPIContext';
import { TweetURLProvider } from './InscriptionsPage';

const config = getDefaultConfig({
  appName: 'Espresso Inscriptions',
  projectId: '9538d52db1aab41aa364a1a95cd57b2a',
  chains: [mainnet /*, polygon, optimism, arbitrum, base*/],
  ssr: true,
});
const queryClient = new QueryClient();

const Heading1: React.FC<HTMLProps<HTMLHeadingElement>> = (props) => {
  return React.createElement('h1', props);
};

interface GuidedStoryProps {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}
const GuidedStoryRaw: (
  props: GuidedStoryProps,
  ref: ForwardedRef<HTMLElement>,
) => JSX.Element = (props, ref) => {
  return (
    <section
      ref={ref}
      // eslint-disable-next-line react/prop-types
      className={addClassToClassName(props.className, 'guided-story')}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {props.children}
    </section>
  );
};

const GuidedStory = React.forwardRef(GuidedStoryRaw);

interface RainbowKitMountedGuardProps {
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * RainbowKitMountedGuard is a component that will only render its children if
 * RainbowKit is mounted.  This is useful for components that rely on RainbowKit
 * being mounted before they can be rendered.
 */
const RainbowKitMountedGuard: React.FC<RainbowKitMountedGuardProps> = (
  props,
) => {
  const mounted = React.useContext(RainbowKitMountedContext);

  if (!mounted) {
    return <></>;
  }

  return <>{props.children}</>;
};

/**
 * ConnectWalletButton is a component that will display a button that allows
 * users to connect their wallet to the application using RainbowKit.  However,
 * if the user already has a connected wallet, this component will not display.
 */
const ConnectWalletButton: React.FC = () => {
  const account = React.useContext(RainbowKitAccountContext);
  const modal = React.useContext(RainbowKitModalContext);

  if (account) {
    // We're already logged in, no need to provide the option to login
    // again
    return <></>;
  }

  return (
    <button className="btn--connect-wallet" onClick={modal.openConnectModal}>
      <Text text="Connect Wallet" />
    </button>
  );
};

/**
 * ConnectedAccount is an element that displays a button with the display
 * name of the connected RainbowKit wallet, or it displays nothing at all.
 */
const ConnectedAccount: React.FC = () => {
  const account = React.useContext(RainbowKitAccountContext);
  const modal = React.useContext(RainbowKitModalContext);

  if (!account) {
    // We're already logged in, no need to provide the option to login
    // again
    return <></>;
  }

  // We want to display a custom component for displaying the account
  // information.
  account.ensName;
  account.ensAvatar;
  const { displayName } = account;

  return (
    <button className="btn--connected-account" onClick={modal.openAccountModal}>
      <Text text={displayName} />
    </button>
  );
};

const AboutUsLink: React.FC = () => {
  return (
    <a href="https://espressosys.com/about" target="_blank" rel="noreferrer">
      <Text text="About Us" />
    </a>
  );
};

/**
 * NavigationLinks is a component that contains the navigation links for the
 * inscriptions page.  This is means to be a component that is hidden on mobile
 * devices.
 */
const NavigationLinks: React.FC = () => {
  return (
    <nav className="inscription-links">
      <AboutUsLink />
    </nav>
  );
};

interface IconNavProps {
  children: React.ReactNode | React.ReactNode[];
}

const IconNav: React.FC<IconNavProps> = (props) => {
  return <div className="icon-nav">{props.children}</div>;
};

/**
 * HeaderActions represents the actions that can be taken in the header of the
 * inscriptions page.  They are meant to be displayed on the right side of the
 * overall header.
 */
const HeaderActions: React.FC = () => {
  return (
    <div className="inscriptions--header--actions">
      <NavigationLinks />

      <IconNav>
        <TwitterLink />
        <DiscordLink />
        <RainbowKitMountedGuard>
          <ConnectWalletButton />
          <ConnectedAccount />
        </RainbowKitMountedGuard>
      </IconNav>
    </div>
  );
};

function useThemeState() {
  return useState({
    theme: '',
  });
}

const ThemeContext = React.createContext<ReturnType<typeof useThemeState>>([
  {
    theme: '',
  },
  () => {},
]);

function useTheme() {
  return React.useContext(ThemeContext);
}

/**
 * InscriptionHeader represents the header of the inscriptions page.  The header
 * contains various navigation and branding elements.
 */
const InscriptionHeader: React.FC = () => {
  const [theme] = useTheme();

  return (
    <div className={addClassToClassName(theme.theme, 'inscriptions--header')}>
      <a href="https://espressosys.com/" target="_blank" rel="noreferrer">
        <EspressoLogo />
      </a>
      <HeaderActions />
    </div>
  );
};

interface InscriptionsMainProps {
  children?: React.ReactNode | React.ReactNode[];
}

const InscriptionsMain: React.FC<InscriptionsMainProps> = (props) => {
  const [theme] = useTheme();
  return (
    <main className={addClassToClassName(theme.theme, 'inscriptions')}>
      {props.children}
    </main>
  );
};

interface InscriptionsConcludedPageProps {
  backgroundImage: React.ReactNode;
  escapeTheWalledGardensImage: React.ReactNode;
}

interface InscriptionsContentProps {
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * InscriptionsContent is a component that represents the content of the
 * inscriptions page. It is present for styling and organization.
 */
const InscriptionsContent: React.FC<InscriptionsContentProps> = (props) => {
  return <div className="inscriptions--content">{props.children}</div>;
};

/**
 * generateTweetIntentURL generates a URL that will trigger a user to post
 * a tweet with a preset message and a URL.
 */
function generateTweetIntentURL(tweetURL: null | URL) {
  const url = new URL('https://twitter.com/intent/tweet');

  if (tweetURL !== null) {
    url.searchParams.set(
      'text',
      'Join me in the Infinite Garden: https://infinitegarden.espressosys.com',
    );
    url.searchParams.set('url', tweetURL.toString());
  } else {
    url.searchParams.set(
      'text',
      'Safeguard against silos in the Infinite Garden: https://infinitegarden.espressosys.com\n\nJoin me in making sure all chains work together as one. Inscribe Espresso Mainnet now.',
    );
  }

  return url;
}

const ThankYouMessage: React.FC = () => {
  const tweetURL = React.useContext(TweetURLProvider);
  if (!tweetURL) {
    return <></>;
  }

  return (
    <p className="engage-steps-thank-you">
      <Text text="After receiving " />
      <NumberText number={4970918} />
      <Text text=" inscriptions to safeguard the Infinite Garden, we are no longer accepting new contributions. You can still share " />
      <a
        href={generateTweetIntentURL(tweetURL).toString()}
        target="blank"
        rel="noreferrer"
      >
        <Text text="your commitment on X" />
      </a>
      <Text text=" or learn more by visiting our " />
      <a href="https://espressosys.com/" target="_blank" rel="noreferrer">
        <Text text="website" />
      </a>
      <Text text=" and " />
      <a href="https://docs.espressosys.com/" target="_blank" rel="noreferrer">
        <Text text="documentation" />
      </a>
      <Text text="." />
    </p>
  );
};

const ZeroNonAccountResults: React.FC = () => {
  const account = React.useContext(RainbowKitAccountContext);
  const yourInscriptionsStream = React.useContext(
    YourInscriptionsListStreamContext,
  );
  const walletAddress = account?.address ?? null;

  React.useEffect(() => {
    if (!walletAddress) {
      if (
        'publish' in yourInscriptionsStream &&
        typeof yourInscriptionsStream.publish === 'function'
      ) {
        // We want to zero our your inscription list, so that we don't show
        // any entries when you're not logged in.
        //
        // By default this wouldn't happen, but this needs to exist to cover
        // an edge case involved when the user disconnects his/her wallet.
        yourInscriptionsStream.publish([]);
      }
      return () => {};
    }

    return () => {};
  }, [walletAddress, yourInscriptionsStream]);

  return <></>;
};

const RetrieveInscriptionsRequest: React.FC = () => {
  const inscriptionService = React.useContext(
    CappuccinoInscriptionServiceAPIContext,
  );
  const account = React.useContext(RainbowKitAccountContext);
  const walletAddress = account?.address ?? null;

  React.useEffect(() => {
    if (!walletAddress) {
      return () => {};
    }

    // Alright we have an account, we want to make a request to fetch the
    // current list of inscriptions for the given wallet address.

    inscriptionService.send(
      new InscriptionServiceRequest(
        new RetrieveInscriptionsForAddress(walletAddress),
      ),
    );

    return () => {};
  }, [walletAddress, inscriptionService]);

  return <></>;
};

/**
 * InscriptionsPage represents the entire Inscriptions page.  This is the main
 * entry point for the Inscriptions page.
 */
const InscriptionsConcludedPage: React.FC<InscriptionsConcludedPageProps> = (
  props,
) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <RainbowKitContextInjector>
            <InscriptionsMain>
              <div className="background-image">{props.backgroundImage}</div>

              <GuidedStory className="inscription-wall">
                <InscriptionsContent>
                  <InscriptionHeader />
                  <Heading1>
                    <Text text="An Infinite Garden has no walls" />
                  </Heading1>
                  <ThankYouMessage />

                  {/* This will govern the requests submitted for the user based on his / her current account */}
                  <ZeroNonAccountResults />
                  <RetrieveInscriptionsRequest />

                  {/* We want to show the user his/her inscriptions */}

                  <YourInscriptionsListStreamConsumer>
                    <LatestInscriptionListAsyncHandler />
                  </YourInscriptionsListStreamConsumer>
                </InscriptionsContent>
              </GuidedStory>
            </InscriptionsMain>
          </RainbowKitContextInjector>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default InscriptionsConcludedPage;
