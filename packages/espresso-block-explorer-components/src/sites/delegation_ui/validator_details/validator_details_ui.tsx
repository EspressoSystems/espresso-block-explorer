import { Text } from '@/components/text';
import { ArrowLeft } from '@/components/visual/icons';
import { CurrentLocale } from '@/contexts/locale_provider';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { NodeSetEntry } from '@/service/espresso_staking_api_service/common/node_set_entry';
import { RatioRational } from '@/service/espresso_staking_api_service/common/ratio';
import { default as React } from 'react';
import { AllValidatorsContext } from '../contexts/all_validators_context';
import { ProvideDelegateAfterConnect } from '../contexts/delegate_after_connect_context';
import { ProvideDialogModalControls } from '../contexts/modal_context';
import { DelegationUIBaseHrefContext } from '../contexts/validator_details_context';
import { NodeAddressContext } from '../contexts/node_address_context';
import { PendingExitsContext } from '../contexts/pending_exits_context';
import {
  ProvideValidatorNodeContext,
  ValidatorNodeContext,
} from '../contexts/validator_node_context';
import { InAppLink } from '../elements/link/in_app_link';
import { StakingModal } from '../staking_modal/staking_modal';
import { useValidatorHistoryFile } from './validator_details_contexts';
import { ValidatorDetailsErrorBoundary } from './validator_details_error_boundary';
import { ValidatorDetailsPage } from './validator_details_page';
import { exitedAtFromFile, isValidatorAddress } from './validator_history_file';
import './validator_details_page.css';
import { ExitNotice } from './validator_summary';

export interface ValidatorDetailsViewProps {
  /**
   * address is the validator address taken from the page URL.
   */
  address: null | string;
}

const BackLink: React.FC = () => {
  const baseHref = React.useContext(DelegationUIBaseHrefContext);
  return (
    <InAppLink className="validator-details-back" href={baseHref}>
      <ArrowLeft />
      <Text text="All validators" />
    </InAppLink>
  );
};

/**
 * ValidatorPageMessage is shown in place of the page when the validator
 * cannot be shown. Its children follow the message.
 */
const ValidatorPageMessage: React.FC<
  React.PropsWithChildren<{ message: string }>
> = ({ message, children }) => (
  <div className="validator-details-page-message">
    <BackLink />
    <p>
      <Text text={message} />
    </p>
    {children}
  </div>
);

/**
 * ValidatorDetailsSkeleton mirrors the layout of the validator page while
 * the validator list is still loading, so the page doesn't jump when the
 * data arrives.
 */
const ValidatorDetailsSkeleton: React.FC = () => (
  <div
    className="validator-details-page validator-details-skeleton"
    role="status"
    aria-label="Loading validator"
  >
    <aside className="validator-details-sidebar">
      <BackLink />
      <div className="validator-details-identity">
        <span className="bone avatar" />
        <div className="stack">
          <span className="bone title" />
          <span className="bone chip" />
        </div>
      </div>
      <div className="stack about">
        <span className="bone line" />
        <span className="bone line short" />
      </div>
      <span className="bone button" />
      <div className="facts">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i}>
            <span className="bone label" />
            <span className="bone value" />
          </div>
        ))}
      </div>
    </aside>
    <div className="validator-details-content">
      <section>
        <span className="bone eyebrow" />
        <span className="bone total" />
        <span className="bone chart" />
      </section>
      <section>
        <span className="bone eyebrow" />
        <span className="bone grid" />
      </section>
    </div>
  </div>
);

/**
 * ExitedValidatorClaim shows the connected wallet's stake that is pending
 * exit from a validator that is no longer listed: when it can be claimed,
 * and the claim itself once it can be.
 */
const ExitedValidatorClaim: React.FC<{ address: `0x${string}` }> = ({
  address,
}) => {
  // ExitNotice reads the validator from the ValidatorNodeContext, and an
  // exited validator has no entry left to provide. Only the address of this
  // stand-in is real, as for the Pending Exits table.
  const validator = React.useMemo(
    () =>
      new NodeSetEntry(
        hexArrayBufferCodec.decode(address),
        new TaggedBase64('', new ArrayBuffer(0)),
        0n,
        new RatioRational(0n, 1n),
        null,
      ),
    [address],
  );

  return (
    <ValidatorNodeContext.Provider value={validator}>
      <ExitNotice className="validator-details-page-exit" claimOnly />
    </ValidatorNodeContext.Provider>
  );
};

/**
 * UnlistedValidatorMessage explains an address that isn't in the validator
 * list, which exited validators aren't either.
 *
 * The connected wallet's pending exits come first: they are certain, from
 * the staking API, and the wallet's stake can be claimed from here. Without
 * one, the validator's history file says whether it exited. Only a history
 * that loaded can say the address is not a validator; when it couldn't be
 * loaded, nothing was checked, and the message says so.
 */
const UnlistedValidatorMessage: React.FC<{ address: `0x${string}` }> = ({
  address,
}) => {
  const locale = React.useContext(CurrentLocale);
  const pendingExits = React.useContext(PendingExitsContext);
  const { file } = useValidatorHistoryFile(address);

  const exitedAt = file.state === 'live' ? exitedAtFromFile(file.file) : null;
  const exitedOn = exitedAt
    ? `This validator exited on ${new Intl.DateTimeFormat(locale, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }).format(exitedAt)} and no longer accepts delegations.`
    : null;

  const pendingExit =
    Array.from(pendingExits.keys()).find(
      (key) => key.toLowerCase() === address.toLowerCase(),
    ) ?? null;
  if (pendingExit) {
    return (
      <ValidatorPageMessage
        message={
          exitedOn ??
          'This validator has exited and no longer accepts delegations.'
        }
      >
        <ExitedValidatorClaim address={pendingExit} />
      </ValidatorPageMessage>
    );
  }

  switch (file.state) {
    case 'loading':
      return <ValidatorDetailsSkeleton />;
    case 'error':
      return (
        <ValidatorPageMessage message="This address isn't in the validator list. Its history couldn't be loaded right now, so it may be a validator that has exited." />
      );
    case 'none':
      // No history for this network: all that is known is the list.
      return (
        <ValidatorPageMessage message="This address isn't in the validator list." />
      );
    default:
      return (
        <ValidatorPageMessage
          message={exitedOn ?? 'This address is not a registered validator.'}
        />
      );
  }
};

/**
 * ResolveValidator matches the address from the URL against the known
 * validators, ignoring case, and provides it to the page.
 */
const ResolveValidator: React.FC<ValidatorDetailsViewProps> = ({ address }) => {
  const allValidators = React.useContext(AllValidatorsContext);

  if (!address) {
    return <ValidatorPageMessage message="No validator address was given." />;
  }

  // Anything else from the URL must not reach a history file URL.
  if (!isValidatorAddress(address)) {
    return (
      <ValidatorPageMessage message="This address is not a registered validator." />
    );
  }

  if (allValidators.size === 0) {
    return <ValidatorDetailsSkeleton />;
  }

  const target = address.toLowerCase();
  const match =
    Array.from(allValidators.keys()).find(
      (key) => key.toLowerCase() === target,
    ) ?? null;

  if (!match) {
    return <UnlistedValidatorMessage address={target as `0x${string}`} />;
  }

  return (
    <NodeAddressContext.Provider value={match}>
      <ProvideValidatorNodeContext>
        <ValidatorDetailsPage />
      </ProvideValidatorNodeContext>
    </NodeAddressContext.Provider>
  );
};

/**
 * ValidatorDetailsView is the Delegation UI view for a single validator. It
 * is rendered by DelegationUI, so it shares the already loaded validator
 * data with the rest of the Delegation UI.
 */
export const ValidatorDetailsView: React.FC<ValidatorDetailsViewProps> = ({
  address,
}) => {
  return (
    <ProvideDialogModalControls>
      <ProvideDelegateAfterConnect>
        <StakingModal />
        <ValidatorDetailsErrorBoundary
          key={address ?? ''}
          fallback={
            <ValidatorPageMessage message="This validator couldn't be shown right now." />
          }
        >
          <ResolveValidator address={address} />
        </ValidatorDetailsErrorBoundary>
      </ProvideDelegateAfterConnect>
    </ProvideDialogModalControls>
  );
};
