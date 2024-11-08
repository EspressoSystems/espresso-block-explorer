import React, { ForwardedRef, HTMLProps, useState } from 'react';
import {
  ArrowRight,
  DiscordLink,
  ErrorDisplay,
  EspressoLogo,
  TwitterIcon,
  TwitterLink,
} from '../components';
import Text from '../components/text/Text';
import './inscriptions_page.css';

import { ErrorStreamConsumer } from '@/components/contexts/ErrorStreamConsumer';
import { WebSocketResponseStreamConsumer } from '@/components/contexts/WebSocketResponseProvider';
import { addClassToClassName } from '@/components/higher_order';
import { LatestInscriptionListAsyncHandler } from '@/components/page_sections/latest_inscriptions_summary/LatestInscriptionList';
import { LatestInscriptionListStreamConsumer } from '@/components/page_sections/latest_inscriptions_summary/LatestInscriptionListLoader';
import { RainbowKitContextInjector } from '@/components/rainbowkit/components/provider';
import {
  ModalContextValue,
  RainbowKitAccount,
  RainbowKitAccountContext,
  RainbowKitModalContext,
  RainbowKitMountedContext,
} from '@/components/rainbowkit/contexts/contexts';
import Check from '@/components/visual/icons/Check';
import Close from '@/components/visual/icons/Close';
import Inscription from '@/service/inscription/cappuccino/inscription';
import InscriptionAndSignature from '@/service/inscription/cappuccino/inscription_and_signature';
import { InscriptionServiceRequest } from '@/service/inscription/cappuccino/requests/inscription_service_request';
import { PutInscription } from '@/service/inscription/cappuccino/requests/put_inscription';
import WalletAddress from '@/service/inscription/cappuccino/wallet_address';
import { kInscriptionMessageToSign } from '@/service/inscription/cappuccino/web_worker_proxy_api';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  useSignTypedData,
  UseSignTypedDataReturnType,
  WagmiProvider,
} from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { parseHexString } from '../convert';
import { CappuccinoInscriptionServiceAPIContext } from './CappuccinoInscriptionServiceAPIContext';

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

const Heading2: React.FC<HTMLProps<HTMLHeadingElement>> = (props) => {
  return React.createElement('h2', props);
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

interface ProvideThemeStateProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProvideThemeState: React.FC<ProvideThemeStateProps> = (props) => {
  const theme = useThemeState();

  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

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

const InscriptionFooter: React.FC = () => {
  const [theme] = useTheme();

  return (
    <div className={addClassToClassName(theme.theme, 'inscriptions--footer')}>
      <ScrollToContinue />
    </div>
  );
};

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

interface EngageStepProps {
  children: [React.ReactNode, React.ReactNode, React.ReactNode];
}

/**
 * EngageStep is a component that indicates a step that the user is meant to
 * take on this guided engagement journey.
 */
const EngageStep: React.FC<EngageStepProps> = (props) => {
  const [leading, action, trailing] = props.children;
  return (
    <div className="engage-step">
      <span>{leading}</span>
      <span>{action}</span>
      {trailing}
    </div>
  );
};

interface EngageStepStatusProps {
  done: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * EngageStepStatus is a simple wrapper for the EngageStep that is used to
 * separate the activation of the engagement step from the actual step itself.
 * Additionally, this can help govern whether the step may have been taken
 * already, thus disabling it for the immediate future.
 */
const EngageStepStatus: React.FC<EngageStepStatusProps> = (props) => {
  return (
    <div
      className="engage-step--status"
      data-completed={props.done}
      onClick={props.onClick}
    >
      {props.children}
      {props.done ? (
        <div className="done">
          <Check />
          <Text text="Done" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

/**
 * determineInscribeAction is a helper function that is utilized to determine
 * the next step to take depending on what the current state of the inscribe
 * action the user is in.
 *
 * If the user has already inscribed, then we do not want them to do anything
 * further, so this will return undefined instead of a function.
 *
 * If the user does not have an account, then we will want to prompt them to
 * connect their account.
 *
 * If the user has an account, and has not inscribed, then we will want to
 * prompt them to inscribe their message by signing it.
 */
function determineInscribeAction(
  alreadyInscribed: boolean,
  account: null | RainbowKitAccount,
  modalContext: ModalContextValue,
  signTypedData: UseSignTypedDataReturnType<unknown>,
  signatureCallback: (inscriptionAndSignature: InscriptionAndSignature) => void,
) {
  if (alreadyInscribed) {
    // We've already inscribed, no need to do this again
    return undefined;
  }

  if (!account) {
    // We do not have an account currently, so we want to open the connect
    // account prompt.
    return () => {
      modalContext.openConnectModal();
    };
  }

  // We have an account linked, and we haven't signed, so we want to prompt the
  // user with the ability to sign the message.
  return async () => {
    try {
      const now = new Date();
      const time = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        now.getHours(),
        now.getMinutes(),
      );
      const inscription = new Inscription(
        new WalletAddress(parseHexString(account.address)),
        time,
        kInscriptionMessageToSign,
      );

      const signature = await signTypedData.signTypedDataAsync({
        account: account.address,
        domain: {
          name: 'Espresso Inscription',
          // chainId: 1,
          // verifyingContract: '0x0000000000000000000000000000000000000000',
          // version: '1',
          // salt:
        },
        types: {
          EspressoInscription: [
            { name: 'address', type: 'address' },
            { name: 'message', type: 'string' },
            { name: 'time', type: 'uint64' },
          ],
        },
        primaryType: 'EspressoInscription',
        message: {
          address: account.address,
          message: inscription.message,
          time: BigInt(Math.floor(inscription.time.getTime() / 1000)),
        },
      });

      signatureCallback(
        new InscriptionAndSignature(inscription, parseHexString(signature)),
      );
    } catch (e) {
      console.error(e);
      // We have an error, this is likely due to the user cancelling the request.
    }
  };
}

/**
 * useEngageStepsState is a hook that provides the state, and setState functions
 * for the EngageSteps components.
 */
function useEngageStepsState() {
  return useState({
    likeAndRetweetActivated: false,
    inscribeYourCommitmentActivated: false,
    makeANewPostOnXActivated: false,
  });
}

/**
 * EngageStepsStateContext is a context that provides the state and setState
 * functions for the EngageSteps components.
 */
const EngageStepsStateContext = React.createContext<
  ReturnType<typeof useEngageStepsState>
>([
  {
    likeAndRetweetActivated: false,
    inscribeYourCommitmentActivated: false,
    makeANewPostOnXActivated: false,
  },
  () => {},
]);

interface ProvideEngageStepsStateProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideEngageStepsStates is a component that provides the context for the
 * EngageSteps to downstream components.
 */
const ProvideEngageStepsStates: React.FC<ProvideEngageStepsStateProps> = (
  props,
) => {
  const engageSteps = useEngageStepsState();

  return (
    <EngageStepsStateContext.Provider value={engageSteps}>
      {props.children}
    </EngageStepsStateContext.Provider>
  );
};

/**
 * useEngageSteps is a hook that automatically retrieves the state of the
 * EngageStepsStateContext.
 */
function useEngageSteps() {
  return React.useContext(EngageStepsStateContext);
}

/**
 * generateTweetIntentURL generates a URL that will trigger a user to post
 * a tweet with a preset message and a URL.
 */
function generateTweetIntentURL() {
  const url = new URL('https://twitter.com/intent/tweet');
  url.searchParams.set(
    'text',
    'Join me in the Infinite Garden.\n\nA place where composability means anyone can contribute, anything can be built, and everyone has access.',
  );
  url.searchParams.set('url', 'https://infinitegarden.espressosys.com/');
  return url;
}

/*
 * EngageSteps is a component that represents the steps that the user is meant
 * to take on their guided engagement journey.
 */
const EngageSteps: React.FC = () => {
  const account = React.useContext(RainbowKitAccountContext);
  const modalContext = React.useContext(RainbowKitModalContext);
  const signTypedData = useSignTypedData();
  const inscriptionService = React.useContext(
    CappuccinoInscriptionServiceAPIContext,
  );
  const context = useInscriptionsModalContext();
  const [engageStepsState, setEngageStepsState] = useEngageSteps();

  if (
    engageStepsState.makeANewPostOnXActivated &&
    engageStepsState.inscribeYourCommitmentActivated
  ) {
    // If both of these conditions are met, we want to display a thank you message instead of the
    // engagement steps.

    return (
      <p className="engage-steps-thank-you">
        <Text text="Thank you! " />
        <YourSupportHasBeenNotedMessage />
      </p>
    );
  }

  const step3 = (
    <EngageStepStatus done={engageStepsState.makeANewPostOnXActivated}>
      <EngageStep>
        <Text text="3" />
        <Text text="Share on X" />
        <ArrowRight />
      </EngageStep>
    </EngageStepStatus>
  );

  return (
    <div className="engage-steps">
      <EngageStepStatus
        done={account !== null}
        onClick={
          account !== null
            ? undefined
            : () => {
                modalContext.openConnectModal();
              }
        }
      >
        <EngageStep>
          <Text text="1" />
          <Text text="Connect Wallet" />
          <ArrowRight />
        </EngageStep>
      </EngageStepStatus>
      <EngageStepStatus
        done={engageStepsState.inscribeYourCommitmentActivated}
        onClick={determineInscribeAction(
          engageStepsState.inscribeYourCommitmentActivated,
          account,
          modalContext,
          signTypedData,
          (signatureAndInscription) => {
            // Let's record the current state, so that we don't double trigger.
            setEngageStepsState({
              ...engageStepsState,
              inscribeYourCommitmentActivated: true,
            });

            // Now let's submit it to the service.
            inscriptionService.send(
              new InscriptionServiceRequest(
                new PutInscription(signatureAndInscription),
              ),
            );

            // Let's open the thank you modal.
            context.openThankYouModal();
          },
        )}
      >
        <EngageStep>
          <Text text="2" />
          <Text text="Sign Espresso Mainnet" />
          <ArrowRight />
        </EngageStep>
      </EngageStepStatus>

      {engageStepsState.makeANewPostOnXActivated ? (
        step3
      ) : (
        <a
          href={generateTweetIntentURL().toString()}
          target="_blank"
          rel="noreferrer"
          onClick={(event) => {
            if (event.button !== 0) {
              return;
            }

            setEngageStepsState({
              ...engageStepsState,
              makeANewPostOnXActivated: true,
            });
          }}
        >
          {step3}
        </a>
      )}
    </div>
  );
};

/**
 * InscriptionsSection is a component that represents the last section of the
 * Guided Engagement Journey.  This is where the user will be able to see the
 * latest inscriptions that have been made by the community, and to add their
 * own to the list.
 */
const InscriptionsSection: React.FC = () => {
  const ref = useIntersectionObserver('transparent', {
    root: null,
    rootMargin: '0px',
    threshold: 0.0001,
  });

  return (
    <GuidedStory ref={ref} className="inscription-wall">
      <InscriptionHeader />

      {/*
        This component displays any errors that have occurred while attempting
        to retrieve the data.
      */}
      <ErrorDisplay className="edge-margin" />

      <InscriptionsContent>
        <Heading2>
          <Text text="An Infinite Garden has no walls" />
        </Heading2>

        <p>
          <Text text="Join us on our mission to safeguard against silos, ensuring all chains work together as one." />
          <br />
          <Text text="Leave your mark on Espresso Mainnet by signing with your wallet." />
          <br />
          <span style={{ fontSize: '0.8em', opacity: '0.8' }}>
            <Text text="(No transaction or fees required)" />
          </span>
        </p>

        <EngageSteps />

        <LatestInscriptionListStreamConsumer>
          <LatestInscriptionListAsyncHandler />
        </LatestInscriptionListStreamConsumer>
      </InscriptionsContent>
    </GuidedStory>
  );
};

const YourSupportHasBeenNotedMessage: React.FC = () => {
  return (
    <>
      <Text text="Your support has been noted. To learn more about how Espresso is working to safeguard the Infinite Garden, visit our " />
      <a href="https://espressosys.com/" target="_blank" rel="noreferrer">
        <Text text="website" />
      </a>
      <Text text=" and " />
      <a
        href="https://docs.espressosys.com/sequencer"
        target="_blank"
        rel="noreferrer"
      >
        <Text text="documentation" />
      </a>
      <Text text="." />
    </>
  );
};

interface ModalBarrierProps {
  children?: React.ReactNode | React.ReactNode[];
  display: boolean;
}

const ModalBarrier: React.FC<ModalBarrierProps> = (props) => {
  return (
    <div className="modal-barrier" data-display={props.display}>
      {props.children}
    </div>
  );
};

interface DialogHeadingProps {
  children: React.ReactNode | React.ReactNode[];
}

const DialogHeading: React.FC<DialogHeadingProps> = (props) => {
  return (
    <div className="dialog-inline-padding dialog-block-start-padding dialog--heading">
      {props.children}
    </div>
  );
};

interface InscriptionsModalState {
  isThankYouModalOpen: boolean;
  isOverCapacityModalOpen: boolean;
}

interface InscriptionsModalContextValue extends InscriptionsModalState {
  openThankYouModal: () => void;
  closeThankYouModal: () => void;
  openOverCapacityModal: () => void;
  closeOverCapacityModal: () => void;
}

const InscriptionsModalContext =
  React.createContext<InscriptionsModalContextValue>({
    openThankYouModal: () => {},
    closeThankYouModal: () => {},
    openOverCapacityModal: () => {},
    closeOverCapacityModal: () => {},
    isThankYouModalOpen: false,
    isOverCapacityModalOpen: false,
  });

function useInscriptionModalContextState() {
  const [state, setState] = React.useState<InscriptionsModalState>({
    isThankYouModalOpen: false,
    isOverCapacityModalOpen: false,
  });

  return {
    ...state,
    openThankYouModal: () => {
      setState({
        ...state,
        isThankYouModalOpen: true,
      });
    },
    closeThankYouModal: () => {
      setState({
        ...state,
        isThankYouModalOpen: false,
      });
    },
    openOverCapacityModal: () => {
      setState({
        ...state,
        isOverCapacityModalOpen: true,
      });
    },
    closeOverCapacityModal: () => {
      setState({
        ...state,
        isOverCapacityModalOpen: false,
      });
    },
  };
}

interface ProvideInscriptionsModalContextProps {
  children: React.ReactNode | React.ReactNode[];
}

const ProvideInscriptionsModalContext: React.FC<
  ProvideInscriptionsModalContextProps
> = (props) => {
  const context = useInscriptionModalContextState();

  return (
    <InscriptionsModalContext.Provider value={context}>
      {props.children}
    </InscriptionsModalContext.Provider>
  );
};

function useInscriptionsModalContext() {
  return React.useContext(InscriptionsModalContext);
}

const ThankYouModal: React.FC = () => {
  const context = useInscriptionsModalContext();
  const [engageStepsState, setEngageStepsState] = useEngageSteps();

  return (
    <ModalBarrier display={context.isThankYouModalOpen}>
      <dialog open>
        <DialogHeading>
          <Heading2>
            <Text text="Thank you" />
          </Heading2>
          <button className="btn-close">
            <Close
              onClick={(event) => {
                if (event.button !== 0) {
                  return;
                }

                context.closeThankYouModal();
              }}
            />
          </button>
        </DialogHeading>
        <p className="dialog-inline-padding dialog-block-end-padding">
          <YourSupportHasBeenNotedMessage />
        </p>
        <hr />
        <div className="dialog--footer">
          <a
            href={generateTweetIntentURL().toString()}
            className="btn--dialog"
            target="_blank"
            rel="noreferrer"
            onClick={(event) => {
              if (event.button !== 0) {
                return;
              }

              setEngageStepsState({
                ...engageStepsState,
                makeANewPostOnXActivated: true,
              });

              context.closeThankYouModal();
            }}
          >
            <TwitterIcon />
            <Text text="Share" />
          </a>
        </div>
      </dialog>
    </ModalBarrier>
  );
};

interface ScrollToContinueProps {
  className?: string;
}

const ScrollToContinue: React.FC<ScrollToContinueProps> = (props) => {
  return (
    <div
      className={addClassToClassName(
        props.className,
        'scroll-to-continue-section',
      )}
    >
      <Text text="Scroll to continue" />
    </div>
  );
};

const EscapeTheWalledGardensSection: React.FC = () => {
  return (
    <GuidedStory className="escape-the-walled-garden">
      <div className="guided-story--content">
        <Heading1>
          <Text text="Escape the" />
          <Text text=" " />
          <br />
          <Text text="Walled Gardens" />
        </Heading1>
      </div>
    </GuidedStory>
  );
};

const OurDataSection: React.FC = () => {
  return (
    <GuidedStory className="our-data">
      <div className="guided-story--content">
        <Heading2>
          <Text text="Our assets. Our apps. Our data." />
          <Text text=" " />
          <br />
          <Text text="All exist in walled gardens." />
          <Text text=" " />
          <br />
          <Text text="Silos created by corporate giants." />
        </Heading2>

        <p>
          <Text text="Controlling our experiences, deciding what we build, limiting how we interact." />
        </p>
      </div>
    </GuidedStory>
  );
};

function useIntersectionObserver(
  themeToSet: string,
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  },
): React.RefObject<HTMLElement> {
  const ref = React.useRef<HTMLElement>(null);
  const [theme, setTheme] = useTheme();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting && theme.theme !== themeToSet) {
        setTheme({
          ...theme,
          theme: themeToSet,
        });
      }

      if (!entry.isIntersecting && theme.theme === themeToSet) {
        setTheme({
          ...theme,
          theme: '',
        });
      }
    }, options);

    if (!ref.current) {
      return () => {
        // No cleanup to perform
      };
    }

    const { current } = ref;
    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, [ref, options, theme, setTheme, themeToSet]);

  return ref;
}

const ThereIsABetterWaySection: React.FC = () => {
  const ref = useIntersectionObserver('light');

  return (
    <GuidedStory ref={ref} className="there-is-a-better-way">
      <div className="guided-story--content">
        <Heading2>
          <Text text="There is a better way." />
        </Heading2>
      </div>
    </GuidedStory>
  );
};

const InfiniteGarden: React.FC = () => {
  return (
    <GuidedStory className="infinite-garden">
      <div className="guided-story--content">
        <Heading2>
          <Text text="The Infinite Garden" />
        </Heading2>
        <p>
          <Text text="Escape onchain, where anyone can contribute, anything can be built, and everyone has access. Join the enterprises, artists, degens, and dreamers who make their home in the infinite garden. Scaling across hundreds of chains, there is room for all of us." />
        </p>
      </div>
    </GuidedStory>
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

interface InscriptionsPageProps {}

/**
 * InscriptionsPage represents the entire Inscriptions page.  This is the main
 * entry point for the Inscriptions page.
 */
const InscriptionsPage: React.FC<InscriptionsPageProps> = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <RainbowKitContextInjector>
            <WebSocketResponseStreamConsumer>
              <ErrorStreamConsumer>
                <ProvideEngageStepsStates>
                  <ProvideInscriptionsModalContext>
                    <ProvideThemeState>
                      <InscriptionsMain>
                        <InscriptionFooter />

                        <EscapeTheWalledGardensSection />
                        <OurDataSection />
                        <ThereIsABetterWaySection />
                        <InfiniteGarden />
                        <InscriptionsSection />
                      </InscriptionsMain>
                      <ThankYouModal />
                    </ProvideThemeState>
                  </ProvideInscriptionsModalContext>
                </ProvideEngageStepsStates>
              </ErrorStreamConsumer>
            </WebSocketResponseStreamConsumer>
          </RainbowKitContextInjector>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default InscriptionsPage;
