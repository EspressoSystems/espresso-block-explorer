import { Text } from '@/components/text';
import { ArrowLeft } from '@/components/visual/icons';
import { CurrentLocale } from '@/contexts/locale_provider';
import { default as React } from 'react';
import { AllValidatorsContext } from '../contexts/all_validators_context';
import { ProvideDialogModalControls } from '../contexts/modal_context';
import { NodeAddressContext } from '../contexts/node_address_context';
import { ProvideValidatorNodeContext } from '../contexts/validator_node_context';
import { InAppLink } from '../elements/link/in_app_link';
import { StakingModal } from '../staking_modal/staking_modal';
import { useValidatorHistoryFile } from './validator_details_contexts';
import { ValidatorDetailsPage } from './validator_details_page';
import { exitedAtFromFile, isValidatorAddress } from './validator_history_file';
import './validator_details_page.css';

export interface ValidatorDetailsViewProps {
  /**
   * address is the validator address taken from the page URL.
   */
  address: null | string;
}

const BackLink: React.FC = () => (
  <InAppLink className="validator-details-back" href="./">
    <ArrowLeft />
    <Text text="All validators" />
  </InAppLink>
);

/**
 * ValidatorPageMessage is shown in place of the page when the validator
 * cannot be shown.
 */
const ValidatorPageMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="validator-details-page-message">
    <BackLink />
    <p>
      <Text text={message} />
    </p>
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
 * ResolveValidator matches the address from the URL against the known
 * validators, ignoring case, and provides it to the page.
 */
/**
 * UnlistedValidatorMessage explains an address that isn't in the validator
 * list: an exited validator (from its history file) or not a validator.
 */
const UnlistedValidatorMessage: React.FC<{ address: `0x${string}` }> = ({
  address,
}) => {
  const locale = React.useContext(CurrentLocale);
  const { file } = useValidatorHistoryFile(address);
  if (file.state === 'loading') {
    return <ValidatorDetailsSkeleton />;
  }

  const exitedAt = file.state === 'live' ? exitedAtFromFile(file.file) : null;
  if (exitedAt) {
    const date = new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(exitedAt);
    return (
      <ValidatorPageMessage
        message={`This validator exited on ${date} and no longer accepts delegations.`}
      />
    );
  }
  return (
    <ValidatorPageMessage message="This address is not a registered validator." />
  );
};

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
      <StakingModal />
      <ResolveValidator address={address} />
    </ProvideDialogModalControls>
  );
};
