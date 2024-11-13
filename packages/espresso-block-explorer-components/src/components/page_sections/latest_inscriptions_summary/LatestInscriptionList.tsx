import { ErrorContext, PathResolverContext } from '@/components/contexts';
import { RainbowKitAccountContext } from '@/components/rainbowkit/contexts/contexts';
import { HexText } from '@/components/text';
import FriendlyDateTimeText from '@/components/text/FriendlyDateTimeText';
import FullHexText from '@/components/text/FullHexText';
import Text from '@/components/text/Text';
import { ExternalLink } from '@/components/visual';
import { DataContext } from '@/contexts/DataProvider';
import { LoadingContext } from '@/contexts/LoadingProvider';
import { parseHexString } from '@/convert/hex';
import { compareArrayBuffer, iota, mapIterable } from '@/functional/functional';
import InscriptionAndChainDetails from '@/service/inscription/cappuccino/inscription_and_chain_details';
import React from 'react';
import {
  InscriptionAndChainDetailsContext,
  LatestInscriptionListProvider,
} from './LatestInscriptionListLoader';
import './inscription_display.css';

/**
 * InscriptionDisplay represents a single inscription in the list, or "wall"
 * of inscriptions.
 *
 * It displays the address (either full, or truncated based on screen size), and
 * the timestamp of the inscription.
 */
const InscriptionDisplay: React.FC = () => {
  const account = React.useContext(RainbowKitAccountContext);
  const pathResolver = React.useContext(PathResolverContext);
  const inscriptionAndChainDetails = React.useContext(
    InscriptionAndChainDetailsContext,
  );

  const { inscription, chainDetails } = inscriptionAndChainDetails;
  const isMyAddress =
    account !== null &&
    compareArrayBuffer(
      parseHexString(account.address),
      inscription.address.address,
    ) === 0;

  if (inscription.address.address.byteLength === 0) {
    // This is a null Inscription
    return <></>;
  }

  return (
    <div className="inscription-display" data-self={isMyAddress}>
      <div className="inscription-display--full-address">
        <a
          href={pathResolver.transaction(
            chainDetails.block,
            chainDetails.offset,
          )}
          className="block-explorer-link"
          target="_blank"
          rel="noreferrer"
        >
          <FullHexText value={inscription.address.address} />
        </a>
      </div>

      <div className="inscription-display--trunc-address">
        <a
          href={pathResolver.transaction(
            chainDetails.block,
            chainDetails.offset,
          )}
          className="block-explorer-link"
          target="_blank"
          rel="noreferrer"
        >
          <HexText value={inscription.address.address} />
        </a>
      </div>

      {isMyAddress ? (
        <span className="your-inscription">
          <Text text="Your inscription" />
        </span>
      ) : null}

      <a
        href={pathResolver.transaction(chainDetails.block, chainDetails.offset)}
        className="block-explorer-link"
        target="_blank"
        rel="noreferrer"
      >
        <ExternalLink />
      </a>

      <div className="inscription-display--time">
        <FriendlyDateTimeText date={inscription.time} />
      </div>
    </div>
  );
};

/**
 * LatestInscriptionList is a component that displays the list of latest
 * inscriptions contained within the LatestInscriptionListProvider.  If
 * there are no inscriptions, then this component will render nothing.
 */
export const LatestInscriptionList: React.FC = () => {
  const inscriptions = React.useContext(LatestInscriptionListProvider);

  if (inscriptions.length <= 0) {
    return <></>;
  }

  // Alright we want to display this list of summaries.
  const reversedInscriptions = Array.from(
    mapIterable(
      iota(inscriptions.length),
      (index) => inscriptions[inscriptions.length - 1 - index],
    ),
  );

  return (
    <>
      {Array.from(reversedInscriptions).map((inscriptionAndChainDetails) => (
        <InscriptionAndChainDetailsContext.Provider
          key={`${inscriptionAndChainDetails.chainDetails.block}-${inscriptionAndChainDetails.chainDetails.offset}`}
          value={inscriptionAndChainDetails}
        >
          <InscriptionDisplay />
        </InscriptionAndChainDetailsContext.Provider>
      ))}
    </>
  );
};

interface LatestInscriptionListPlaceholderProps {
  className?: string;
}

/**
 * LatestInscriptionListPlaceholder is a placeholder component that is used
 * to display a loading state for the LatestInscriptionList component.
 *
 * At the moment this displays nothing.
 */
export const LatestInscriptionListPlaceholder: React.FC<
  LatestInscriptionListPlaceholderProps
> = () => {
  return <></>;
};

interface LatestInscriptionListContentProps {}

/**
 * LatestInscriptionListContent is a component that displays the content of the
 * LatestInscriptionList component.  This component has props, and as a result
 * can have keys and the like attached to them.
 *
 * This provides a way to reference the content of the Inscriptions list
 * component without having direct access to it.
 */
export const LatestInscriptionListContent: React.FC<
  LatestInscriptionListContentProps
> = (props) => {
  return <LatestInscriptionList {...props} />;
};

interface LatestInscriptionListProps {
  className?: string;
}
export const LatestInscriptionListAsyncHandler: React.FC<
  LatestInscriptionListProps
> = (props) => {
  const error = React.useContext(ErrorContext);
  const loading = React.useContext(LoadingContext);
  const data = React.useContext(DataContext);

  if (error && !data) {
    return <></>;
  }

  if (loading) {
    return <LatestInscriptionListPlaceholder {...props} />;
  }

  return (
    <LatestInscriptionListProvider.Provider
      value={(data ?? []) as InscriptionAndChainDetails[]}
    >
      <LatestInscriptionListContent {...props} />
    </LatestInscriptionListProvider.Provider>
  );
};
