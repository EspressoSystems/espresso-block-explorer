import {
  RainbowKitAccountAddressContext,
  RainbowKitModalContext,
} from '@/components/rainbowkit';
import { MoneyText, Text, WalletAddressText } from '@/components/text';
import { LinkShare2 } from '@/components/visual/icons/sharp_line';
import { MonetaryValue } from '@/models/block_explorer';
import { WalletAddress } from '@/models/wallet_address';
import { CurrentLocale } from '@/contexts/locale_provider';
import { Now } from '@/contexts/now_provider';
import { default as React } from 'react';
import { CurrentDelegationsContext } from '../contexts/current_delegations_context';
import { ModalContext } from '../contexts/modal_context';
import { ValidatorNodeContext } from '../contexts/validator_node_context';
import { PendingExitsContext } from '../contexts/pending_exits_context';
import { PendingUndelegationsContext } from '../contexts/pending_undelegations_context';
import {
  SetValidatorSelectionContext,
  ValidatorConfirmedExitWithdraw,
  ValidatorConfirmedStake,
  ValidatorConfirmedUndelegate,
  ValidatorConfirmedUndelegateWithdraw,
  ValidatorSelectionEnum,
} from '../contexts/validator_selection_context';
import { default as ButtonLarge } from '../elements/buttons/button_large';
import { ActiveConsensusChip } from '../elements/chips/active_consensus_chip';
import { ExitingChip } from '../elements/chips/exiting_chip';
import { InactiveConsensusChip } from '../elements/chips/inactive_consensus_chip';
import { MoreInfoElement } from '../elements/tooltip/more_info';
import { default as CopyWalletAddress } from '../validator_nodes_table/common/cells/copy_wallet_address';
import {
  useValidatorFacts,
  ValidatorHistoryContext,
} from './validator_details_contexts';
import {
  commissionIncreaseSinceDelegation,
  CommissionIncrease,
} from './commission_warning';
import './validator_summary.css';

/**
 * ValidatorStatusChip shows whether the validator is in the active set.
 */
export const ValidatorStatusChip: React.FC = () => {
  const facts = useValidatorFacts();
  const history = React.useContext(ValidatorHistoryContext);
  if (history?.exitedAt) {
    return <ExitingChip />;
  }
  return facts.isActive ? <ActiveConsensusChip /> : <InactiveConsensusChip />;
};

/**
 * ValidatorRankChip shows the validator's rank by stake, if known.
 */
export const ValidatorRankChip: React.FC = () => {
  const facts = useValidatorFacts();
  if (facts.rank === null) {
    return null;
  }

  return (
    <span className="bchip validator-details-rank-chip">
      <Text text={`#${facts.rank} by stake`} />
    </span>
  );
};

/**
 * ValidatorAddress displays the shortened validator address with a copy
 * button.
 */
export const ValidatorAddress: React.FC<{ className?: string }> = ({
  className,
}) => {
  const validator = React.useContext(ValidatorNodeContext);
  const walletAddress = new WalletAddress(validator.address);

  return (
    <CopyWalletAddress className={className} value={walletAddress}>
      <WalletAddressText value={walletAddress} />
    </CopyWalletAddress>
  );
};

/**
 * ValidatorWebsiteLink links to the validator's website, when it has a safe
 * http(s) website in its metadata.
 */
export const ValidatorWebsiteLink: React.FC<{ className?: string }> = ({
  className,
}) => {
  const facts = useValidatorFacts();
  if (!facts.website) {
    return null;
  }

  return (
    <a
      className={className}
      href={facts.website.toString()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Text text={facts.website.hostname} />
      <LinkShare2 />
    </a>
  );
};

/**
 * SampleDataChip marks a section whose values are sample data rather than
 * data from the network.
 */
export const SampleDataChip: React.FC = () => (
  <span className="validator-details-sample-chip">
    <Text text="Sample data" />
    <MoreInfoElement>
      <p>
        <Text text="Validator history is not available from the staking API yet. These values are placeholders that end on the validator's real current stake and commission." />
      </p>
    </MoreInfoElement>
  </span>
);

export interface ValidatorStakeActionsProps {
  className?: string;

  /**
   * beforeOpen runs before another modal is opened, so that a modal hosting
   * these actions can close itself first.
   */
  beforeOpen?: () => void;
}

/**
 * ValidatorStakeActions renders Undelegate and Delegate more when the
 * connected wallet has stake on the validator in the current
 * ValidatorNodeContext, and Delegate otherwise. They open the existing
 * staking modal directly on the undelegate or delegate step. With an
 * undelegation in progress, Undelegate is shown as Undelegating (disabled)
 * or, once it can be claimed, Withdraw.
 */
export const ValidatorStakeActions: React.FC<ValidatorStakeActionsProps> = ({
  className,
  beforeOpen,
}) => {
  const validator = React.useContext(ValidatorNodeContext);
  const account = React.useContext(RainbowKitAccountAddressContext);
  const rainbowKitModal = React.useContext(RainbowKitModalContext);
  const stakingModal = React.useContext(ModalContext);
  const setSelection = React.useContext(SetValidatorSelectionContext);
  const delegations = React.useContext(CurrentDelegationsContext);
  const pendingUndelegations = React.useContext(PendingUndelegationsContext);
  const pendingExits = React.useContext(PendingExitsContext);
  const history = React.useContext(ValidatorHistoryContext);
  const now = React.useContext(Now);
  const locale = React.useContext(CurrentLocale);

  const openStakingModal = (selection: ValidatorSelectionEnum) => {
    beforeOpen?.();
    setSelection(selection);
    stakingModal.open();
  };

  // An exiting validator takes no new stake, and stake in it is claimed
  // through ExitNotice once the exit escrow ends.
  if (history?.exitedAt || pendingExits.has(validator.addressText)) {
    return (
      <div className={className}>
        <ButtonLarge
          className="validator-details-delegate"
          disabled
          title="This validator is exiting and no longer accepts delegations."
        >
          <Text text="Delegate" />
        </ButtonLarge>
      </div>
    );
  }

  if (!account) {
    return (
      <div className={className}>
        <ButtonLarge
          className="validator-details-delegate"
          onClick={() => {
            beforeOpen?.();
            rainbowKitModal.openConnectModal?.();
          }}
        >
          <Text text="Delegate" />
        </ButtonLarge>
      </div>
    );
  }

  const address = validator.addressText;

  const delegated = delegations.has(address);
  const pending = pendingUndelegations.get(address) ?? null;
  const withdrawable =
    pending !== null && pending.availableTime.valueOf() <= now.valueOf();

  // Only one undelegation per validator can be in progress. While one is,
  // Undelegate becomes a disabled "Undelegating" that says when the funds
  // can be claimed. Once they can, ClaimNotice offers the claim and
  // Undelegate stays disabled until it's done.
  let undelegateButton: React.ReactNode = null;
  if (pending && withdrawable) {
    undelegateButton = delegated && (
      <ButtonLarge
        className="validator-details-undelegate"
        disabled
        title="Claim your undelegated ESP first, then you can undelegate again."
      >
        <Text text="Undelegate" />
      </ButtonLarge>
    );
  } else if (pending) {
    const available = new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(pending.availableTime);
    undelegateButton = (
      <ButtonLarge
        className="validator-details-undelegate"
        disabled
        title={`An undelegation from this validator is in progress. You can claim it from ${available}, then undelegate again.`}
      >
        <Text text="Undelegating" />
      </ButtonLarge>
    );
  } else if (delegated) {
    undelegateButton = (
      <ButtonLarge
        className="validator-details-undelegate"
        onClick={() =>
          openStakingModal(new ValidatorConfirmedUndelegate(address))
        }
      >
        <Text text="Undelegate" />
      </ButtonLarge>
    );
  }

  return (
    <div className={className}>
      {undelegateButton}
      <ButtonLarge
        className="validator-details-delegate"
        onClick={() => openStakingModal(new ValidatorConfirmedStake(address))}
      >
        <Text text={delegated ? 'Delegate more' : 'Delegate'} />
      </ButtonLarge>
    </div>
  );
};

/**
 * UndelegationNote says when the connected wallet's pending undelegation
 * from the current validator can be claimed, or nothing without one.
 */
export const UndelegationNote: React.FC = () => {
  const facts = useValidatorFacts();
  const now = React.useContext(Now);
  const locale = React.useContext(CurrentLocale);
  const available = facts.myUndelegationAvailable;
  if (!available || !facts.myPendingUndelegation) {
    return null;
  }

  const text =
    available.valueOf() <= now.valueOf()
      ? 'Ready to claim'
      : `Claimable from ${new Intl.DateTimeFormat(locale, {
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        }).format(available)}`;

  return (
    <small className="validator-details-undelegation-note">
      <Text text={text} />
    </small>
  );
};

/**
 * ClaimNotice offers to claim the connected wallet's undelegated ESP from
 * the current validator once it's available, and renders nothing before.
 */
export const ClaimNotice: React.FC<{
  className?: string;
  beforeOpen?: () => void;
}> = ({ className, beforeOpen }) => {
  const validator = React.useContext(ValidatorNodeContext);
  const account = React.useContext(RainbowKitAccountAddressContext);
  const stakingModal = React.useContext(ModalContext);
  const setSelection = React.useContext(SetValidatorSelectionContext);
  const pendingUndelegations = React.useContext(PendingUndelegationsContext);
  const now = React.useContext(Now);

  const address = validator.addressText;
  const pending = pendingUndelegations.get(address) ?? null;
  if (!account || !pending || pending.availableTime.valueOf() > now.valueOf()) {
    return null;
  }

  return (
    <div
      className={
        className
          ? `validator-details-claim-notice ${className}`
          : 'validator-details-claim-notice'
      }
    >
      <span>
        <MoneyText money={MonetaryValue.ESP(pending.amount)} />
        <Text text=" is ready to claim" />
      </span>
      <ButtonLarge
        className="validator-details-claim"
        onClick={() => {
          beforeOpen?.();
          setSelection(new ValidatorConfirmedUndelegateWithdraw(address));
          stakingModal.open();
        }}
      >
        <Text text="Claim" />
      </ButtonLarge>
    </div>
  );
};

/**
 * ExitNotice explains that the current validator is exiting. With stake in
 * it, it says when that stake can be claimed, and offers the claim once it
 * can be.
 */
export const ExitNotice: React.FC<{
  className?: string;
  beforeOpen?: () => void;
}> = ({ className, beforeOpen }) => {
  const validator = React.useContext(ValidatorNodeContext);
  const history = React.useContext(ValidatorHistoryContext);
  const stakingModal = React.useContext(ModalContext);
  const setSelection = React.useContext(SetValidatorSelectionContext);
  const pendingExits = React.useContext(PendingExitsContext);
  const now = React.useContext(Now);
  const locale = React.useContext(CurrentLocale);

  const address = validator.addressText;
  const pending = pendingExits.get(address) ?? null;
  if (!pending && !history?.exitedAt) {
    return null;
  }

  const classes = [
    'validator-details-claim-notice',
    'validator-details-exit-notice',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  const date = (value: Date) =>
    new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(value);

  if (pending && pending.availableTime.valueOf() <= now.valueOf()) {
    return (
      <div className={classes}>
        <span>
          <MoneyText money={MonetaryValue.ESP(pending.amount)} />
          <Text text=" from this exited validator is ready to claim" />
        </span>
        <ButtonLarge
          className="validator-details-claim"
          onClick={() => {
            beforeOpen?.();
            setSelection(new ValidatorConfirmedExitWithdraw(address));
            stakingModal.open();
          }}
        >
          <Text text="Claim" />
        </ButtonLarge>
      </div>
    );
  }

  return (
    <div className={classes}>
      <span>
        <Text text="This validator is exiting and no longer accepts delegations." />
        {pending && (
          <small>
            <Text text="Your " />
            <MoneyText money={MonetaryValue.ESP(pending.amount)} />
            <Text
              text={` can be claimed from ${date(pending.availableTime)}.`}
            />
          </small>
        )}
      </span>
    </div>
  );
};

/**
 * NodeVersionChip tags the validator's node version as the latest release
 * for the network or outdated, when espressonodes could tell.
 */
export const NodeVersionChip: React.FC = () => {
  const history = React.useContext(ValidatorHistoryContext);
  const status = history?.nodeVersionStatus ?? null;
  if (!status) {
    return null;
  }

  const latest = status.status === 'latest';
  return (
    <span
      className={`bchip validator-details-version-chip ${status.status}`}
      title={
        latest || !status.latest
          ? undefined
          : `The latest release for this network is ${status.latest}.`
      }
    >
      <Text text={latest ? 'Latest' : 'Outdated'} />
    </span>
  );
};

const AlertIcon: React.FC = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path d="M8 1.8 15 14H1L8 1.8Z" />
    <path d="M8 6.2v3.6M8 11.6v.6" />
  </svg>
);

/**
 * useCommissionIncrease is the current validator's commission increase
 * since the connected wallet last delegated to it, if it still has stake
 * there and the commission went up since.
 */
export function useCommissionIncrease(): null | CommissionIncrease {
  const validator = React.useContext(ValidatorNodeContext);
  const account = React.useContext(RainbowKitAccountAddressContext);
  const delegations = React.useContext(CurrentDelegationsContext);
  const history = React.useContext(ValidatorHistoryContext);
  const facts = useValidatorFacts();

  if (
    !account ||
    !history ||
    history.status !== 'live' ||
    !delegations.has(validator.addressText)
  ) {
    return null;
  }
  return commissionIncreaseSinceDelegation(
    history.activity,
    history.commissionChanges,
    account,
    facts.commission,
    history.delegationBaselines,
  );
}

function useShortDate(): (date: Date) => string {
  const locale = React.useContext(CurrentLocale);
  const formatter = React.useMemo(
    () => new Intl.DateTimeFormat(locale, { month: 'short', day: 'numeric' }),
    [locale],
  );
  return (date) => formatter.format(date);
}

const percent = (rate: number) => `${(rate * 100).toFixed(2)}%`;

/**
 * commissionIncreaseText describes an increase in one sentence.
 */
export function commissionIncreaseText(
  increase: CommissionIncrease,
  date: (date: Date) => string,
): string {
  return `Commission went up from ${percent(increase.from)} to ${percent(increase.to)} on ${date(increase.changedAt)}, after you delegated on ${date(increase.delegatedAt)}.`;
}

/**
 * CommissionWarning warns a delegator that the current validator raised its
 * commission after they delegated, so they now earn less.
 */
export const CommissionWarning: React.FC<{ className?: string }> = ({
  className,
}) => {
  const increase = useCommissionIncrease();
  const date = useShortDate();
  if (!increase) {
    return null;
  }

  return (
    <div
      className={['validator-details-commission-warning', className]
        .filter(Boolean)
        .join(' ')}
      role="status"
    >
      <AlertIcon />
      <span>
        <b>
          <Text
            text={`Commission went up from ${percent(increase.from)} to ${percent(increase.to)}`}
          />
        </b>
        <Text
          text={` on ${date(increase.changedAt)}, after you delegated on ${date(increase.delegatedAt)}.`}
        />
        <small>
          <Text text="Your rewards from this validator are now lower. You can undelegate at any time; it takes 7 days." />
        </small>
      </span>
    </div>
  );
};
