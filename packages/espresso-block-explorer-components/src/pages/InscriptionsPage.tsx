import React, { useState } from 'react';
import {
  ArrowRight,
  DiscordLink,
  EspressoLogo,
  Heading2,
  TwitterIcon,
  TwitterLink,
} from '../components';
import Text from '../components/text/Text';
import './inscriptions_page.css';

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
import { PutInscription } from '@/service/inscription/cappuccino/requests/inscription_request';
import { InscriptionRequest } from '@/service/inscription/cappuccino/requests/web_worker_proxy_request';
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
  appName: 'My Test App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet /*, polygon, optimism, arbitrum, base*/],
  ssr: true,
});
const queryClient = new QueryClient();

interface InscriptionsPageProps {}

interface GuidedStoryProps {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}
const GuidedStory: React.FC<GuidedStoryProps> = (props) => {
  return (
    <section className={addClassToClassName(props.className, 'guided-story')}>
      {props.children}
    </section>
  );
};

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

/**
 * InscriptionHeader represents the header of the inscriptions page.  The header
 * contains various navigation and branding elements.
 */
const InscriptionHeader: React.FC = () => {
  return (
    <div className="inscriptions--header">
      <a href="https://espressosys.com/" target="_blank" rel="noreferrer">
        <EspressoLogo />
      </a>
      <HeaderActions />
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
        types: {
          'Espresso Inscription': [
            { name: 'address', type: 'address' },
            { name: 'message', type: 'string' },
            { name: 'time', type: 'int64' },
          ],
        },
        primaryType: 'Espresso Inscription',
        message: {
          address: account.address,
          message: inscription.message,
          time: BigInt(Math.floor(inscription.time.getTime() / 1000)),
        },
      });

      console.info('signature', signature);
      signatureCallback(
        new InscriptionAndSignature(inscription, parseHexString(signature)),
      );
    } catch (e) {
      console.error(e);
      // We have an error, this is likely due to the user cancelling the request.
    }
  };
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

  const [state, setState] = useState({
    likeAndRetweetActivated: false,
    inscribeYourCommitmentActivated: false,
    makeANewPostOnXActivated: false,
  });

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
          <Text text="Connect your Wallet" />
          <ArrowRight />
        </EngageStep>
      </EngageStepStatus>
      <EngageStepStatus
        done={state.inscribeYourCommitmentActivated}
        onClick={determineInscribeAction(
          state.inscribeYourCommitmentActivated,
          account,
          modalContext,
          signTypedData,
          (signatureAndInscription) => {
            // Let's record the current state, so that we don't double trigger.
            setState({
              ...state,
              inscribeYourCommitmentActivated: true,
            });

            // Now let's submit it to the service.
            inscriptionService.send(
              new InscriptionRequest(
                new PutInscription(signatureAndInscription),
              ),
            );
          },
        )}
      >
        <EngageStep>
          <Text text="2" />
          <Text text="Inscribe your commitment" />
          <ArrowRight />
        </EngageStep>
      </EngageStepStatus>
      <EngageStepStatus
        done={state.makeANewPostOnXActivated}
        onClick={
          state.makeANewPostOnXActivated
            ? undefined
            : () => {
                window.open('about:blank', '_blank');
                setState({
                  ...state,
                  makeANewPostOnXActivated: true,
                });
              }
        }
      >
        <EngageStep>
          <Text text="3" />
          <Text text="Share your commitment on X" />
          <ArrowRight />
        </EngageStep>
      </EngageStepStatus>
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
  return (
    <GuidedStory className="infinite-garden">
      <InscriptionHeader />

      <InscriptionsContent>
        <Heading2>
          <Text text="An Infinite Garden has no walls" />
        </Heading2>

        <p>
          <Text text="Join us on our mission to safeguard against silos, ensuring all chains work together as one." />
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
}

const ModalBarrier: React.FC<ModalBarrierProps> = (props) => {
  return <div className="modal-barrier">{props.children}</div>;
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

  if (!context.isThankYouModalOpen) {
    return <></>;
  }

  return (
    <ModalBarrier>
      <dialog open>
        <DialogHeading>
          <Heading2>
            <Text text="Thank you" />
          </Heading2>
          <Close onClick={() => {}} />
        </DialogHeading>
        <p className="dialog-inline-padding dialog-block-end-padding">
          <YourSupportHasBeenNotedMessage />
        </p>
        <hr />
        <div className="dialog--footer">
          <a href="about:blank" className="btn--dialog" rel="noreferrer">
            <TwitterIcon />
            <Text text="Share" />
          </a>
        </div>
      </dialog>
    </ModalBarrier>
  );
};

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
            <ProvideInscriptionsModalContext>
              <div className="inscriptions">
                <InscriptionsSection />
              </div>
              <ThankYouModal />
            </ProvideInscriptionsModalContext>
          </RainbowKitContextInjector>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default InscriptionsPage;
