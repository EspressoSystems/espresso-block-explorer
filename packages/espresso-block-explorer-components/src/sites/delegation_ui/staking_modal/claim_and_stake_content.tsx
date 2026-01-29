import { assert } from '@/assert/assert';
import { AsyncState } from '@/components/data/async_data/async_snapshot';
import PromiseResolver from '@/components/data/async_data/promise_resolver';
import { addClassToClassName } from '@/components/higher_order';
import {
  RainbowKitAccountAddressContext,
  RainbowKitChainContext,
} from '@/components/rainbowkit/contexts/contexts';
import FullWalletAddressText from '@/components/text/full_wallet_address';
import MoneyText from '@/components/text/money_text';
import Text from '@/components/text/text';
import { DataContext } from '@/contexts/data_provider';
import { ESPTokenContractContext } from '@/contexts/esp_token_contract_context';
import { L1MethodsContext } from '@/contexts/l1_methods_context';
import {
  StakeTableContractContext,
  StakeTableContractGasEstimatorContext,
} from '@/contexts/stake_table_contract_context';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import {
  compareArrayBuffer,
  mapIterable,
  zipWithIterable,
} from '@/functional/functional';
import { neverPromise } from '@/functional/functional_async';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import WalletAddress from '@/models/wallet_address/wallet_address';
import React from 'react';
import { WagmiContext } from 'wagmi';
import { ConnectWalletButton } from '../connect_wallet_button';
import {
  AllValidatorsContext,
  NodeAddressListContext,
} from '../contexts/all_validators_context';
import { ClaimPortalIntentContext } from '../contexts/claim_portal_intent_context';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import {
  Sections,
  SetCurrentSectionContext,
} from '../contexts/current_section_context';
import {
  ESPBalanceAsyncSnapshotContext,
  ESPBalanceContext,
} from '../contexts/esp_balance_context';
import { SetL1RefreshTimestampContext } from '../contexts/l1_refresh_timestamp_context';
import {
  MinimumDelegationAmountContext,
  RetrieveMinimumDelegationAmount,
} from '../contexts/minimum_delegation_amount_context';
import { NodeAddressContext } from '../contexts/node_address_context';
import { ValidatorNodeContext } from '../contexts/validator_node_context';
import ButtonLarge from '../elements/buttons/button_large';
import { ValidatorName } from '../elements/validator/validator_name';
import { ApproveButton } from './approve_button';
import './claim_and_stake_content.css';
import { CloseStakingModalButton } from './close_staking_modal';
import {
  CurrentAllowanceToStakeTableContext,
  ProvideCurrentAllowanceToStakeTable,
} from './contexts/current_allowance_context';
import { ProvideCurrentCurrentEpochActiveValidators } from './contexts/current_epoch_active_validators_context';
import { ProvideEpochCurrentStakeToValidator } from './contexts/current_epoch_stake_to_validator_context';
import { EstimatedContractGasContext } from './contexts/estimate_contract_gas_context';
import {
  ApproveAsyncSnapshotContext,
  performApprove,
  SetApproveAsyncIterableContext,
} from './contexts/perform_approve_delegation_context';
import {
  DelegateAsyncSnapshotContext,
  performDelegation,
  SetDelegationAsyncIterableContext,
} from './contexts/perform_delegation_context';
import { StakingAmountContext } from './contexts/staking_amount_context';
import { StakingModalCloseContext } from './contexts/staking_modal_close_context';
import { DelegateButton } from './delegate_button';
import { NewStakeInstructionsAndProgress } from './new_stake_instructions_and_progress';
import { NoticeArea } from './notice_area';
import { ProvideCurrentStakingInformation } from './provide_staking_information';
import { StakingCompletionArea } from './staking_completion_area';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingModalTitle } from './staking_modal_title';
import { StakingOverviewArea } from './staking_overview_area';
import { ValidatorDisplayArea } from './validator_display_area';
import CheckCircle from '@/components/visual/icons/sharp_line/check_circle';

/**
 * ClaimAndStakeContent is a somewhat complex Modal Content with multiple
 * facets. The purpose of this mode is to guide the user toward fulfilling the
 * "claim and stake" intent.
 *
 * This means guiding the user to resolve the specified steps accordingly,
 * while providing sufficient context for the user to fulfill the Intent as
 * configured (should it be configured).
 *
 * As a result, we need to account for multiple different states of Intent
 * fulfillment for the sake of the user.
 */
export const ClaimAndStakeContent: React.FC = () => {
  return (
    <ProvideCurrentStakingInformation>
      <DelegationUIClaimPortalHandOffRouter />
    </ProvideCurrentStakingInformation>
  );
};

const DelegationUIClaimPortalHandOffRouter: React.FC = () => {
  return (
    <CompletionCheck>
      <DelegationUIClaimPortalHandOffAccountCheck>
        <DelegationUICClaimPortalHandOffChainCheck>
          <DelegationUIClaimPortalHandOffFilterValidators>
            <DelegationUIClaimPortalHandOffValidatorChoice>
              <DelegationUIClaimPortalHandOffBalanceCheck>
                <ClaimAndStakePerformDelegationContent />
              </DelegationUIClaimPortalHandOffBalanceCheck>
            </DelegationUIClaimPortalHandOffValidatorChoice>
          </DelegationUIClaimPortalHandOffFilterValidators>
        </DelegationUICClaimPortalHandOffChainCheck>
      </DelegationUIClaimPortalHandOffAccountCheck>
    </CompletionCheck>
  );
};

const CompletionCheck: React.FC<React.PropsWithChildren> = ({ children }) => {
  const delegationAsyncSnapshot = React.useContext(
    DelegateAsyncSnapshotContext,
  );

  if (
    delegationAsyncSnapshot.asyncState === AsyncState.done &&
    delegationAsyncSnapshot.hasData
  ) {
    // We want to present a completion screen for the user.
    return <DelegationSuccessContent />;
  }

  return children;
};
/**
 * DelegationUIClaimPortalHandOffAccountCheck is a component that serves
 * to check that the user currently has his/her Wallet connected.
 *
 * If the User has not Wallet connected, then it will display elements to
 * urge the user to connect his/her wallet to the page before being able
 * to continue.
 *
 * If there is an Intent populated, and it has an `address` specified for a
 * specific Wallet, then that will also be check, and if the User has
 * connected the wrong wallet, elements will be presented to notify the
 * User of the miss-match, and guide the User to correct it.
 */
const DelegationUIClaimPortalHandOffAccountCheck: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const intent = React.useContext(ClaimPortalIntentContext) ?? {
    intent: 'claim-and-stake',
    address: null,
    amount: null,
  };

  const connectedAccountAddress = React.useContext(
    RainbowKitAccountAddressContext,
  );

  if (!connectedAccountAddress) {
    // We do not currently have a wallet connected. Let's guide the user
    // toward connecting his/her wallet.
    return (
      <>
        <StakingHeader>
          <StakingModalTitle>
            <Text text="Connect your wallet" />
          </StakingModalTitle>
        </StakingHeader>
        <StakingContent>
          <div className="claim-and-stake-content">
            <p>
              <Text text="You currently do not have a wallet connected. Please connect your wallet in order to continue." />
            </p>
            <br />
            <ConnectWalletButton />
          </div>
        </StakingContent>
      </>
    );
  }

  const haveAddress = hexArrayBufferCodec.decode(connectedAccountAddress);

  if (
    intent.address != null &&
    connectedAccountAddress !== intent.address.toString()
  ) {
    const wantAddress = intent.address.address;
    if (compareArrayBuffer(haveAddress, wantAddress) !== 0) {
      // The user is connected to the wrong address.
      return (
        <>
          <StakingHeader>
            <StakingModalTitle>
              <Text text="Wrong wallet connected" />
            </StakingModalTitle>
          </StakingHeader>
          <StakingContent>
            <div className="claim-and-stake-content">
              <p>
                <Text text="The current wallet that is connected, " />
                <strong>
                  <FullWalletAddressText
                    value={new WalletAddress(haveAddress)}
                  />
                </strong>
                <Text text=", is not the expected wallet, " />
                <strong>
                  <FullWalletAddressText
                    value={new WalletAddress(wantAddress)}
                  />
                </strong>
                <Text text="." />
                <br />
                <br />
                <Text text="Please reconnect your wallet to the correct address." />
              </p>
              <br />
              <ConnectWalletButton />
            </div>
          </StakingContent>
        </>
      );
    }
  }

  // Is the Wallet connected to the correct chain?
  return children;
};

/**
 * DelegationUICClaimPortalHandOffChainCheck is a component that checks to
 * ensure tha the user is connected to the correct Chain.
 *
 * If the User is not connected to the correct chain, elements will be
 * displayed to the User to guide him/her towards correcting the Chain being
 * utilized.
 */
const DelegationUICClaimPortalHandOffChainCheck: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const chain = React.useContext(RainbowKitChainContext);
  const config = React.useContext(WagmiContext);

  const haveChainID = chain?.id ?? null;
  const wantChainID = config?.chains[0]?.id ?? -1;

  if (haveChainID !== wantChainID) {
    return (
      <>
        <StakingHeader>
          <StakingModalTitle>
            <Text text="Connected to the Wrong Chain" />
          </StakingModalTitle>
        </StakingHeader>
        <StakingContent>
          <div className="claim-and-stake-content">
            <p>
              <Text text="The wallet is currently configured to utilize the wrong chain." />
              <br />
              <br />
              <Text text="Please select the correct chain." />
            </p>
            <br />
            <ConnectWalletButton />
          </div>
        </StakingContent>
      </>
    );
  }

  assert(chain !== undefined && chain !== null);
  assert(config !== undefined && config !== null);

  return children;
};

const DelegationUIClaimPortalHandOffFilterValidators: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const nodeList = React.useContext(NodeAddressListContext);
  const nodeMap = React.useContext(AllValidatorsContext);

  const filteredNodeList = nodeList.filter((address) => {
    const node = nodeMap.get(address);
    const name = node?.metadata?.content?.name;
    return Boolean(name);
  });

  if (nodeList.length <= 0) {
    // We do not currently have the node list, so we need to load the list.
    return (
      <>
        <StakingHeader>
          <StakingModalTitle>
            <Text text="Waiting for Node information" />
          </StakingModalTitle>
        </StakingHeader>
        <StakingContent>
          <div className="claim-and-stake-content">
            <p>
              <Text text="Waiting for node information in order to pick a Node to Stake to." />
            </p>
          </div>
        </StakingContent>
      </>
    );
  }

  return (
    <NodeAddressListContext.Provider value={filteredNodeList}>
      {children}
    </NodeAddressListContext.Provider>
  );
};

const DelegationUIClaimPortalHandOffValidatorChoice: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  // We need to resolve the Validator.

  const nodeList = React.useContext(NodeAddressListContext);
  const nodeMap = React.useContext(AllValidatorsContext);

  // We choose a random entry from our list of nodes.
  // We memoize this value, so the selected node does not keep changing
  // every time the component re calculates.
  const randomOrderNodeList = React.useMemo(
    () =>
      Array.from(
        zipWithIterable(
          nodeList,
          mapIterable(nodeList, () => Math.random()),
          (a, b) => [a, b] as const,
        ),
      )
        .toSorted((a, b) => a[1] - b[1])
        .map((a) => a[0]),
    [nodeList.length > 0],
  );

  const [validatorAddress = null] = randomOrderNodeList;
  const node = !validatorAddress ? null : nodeMap.get(validatorAddress);

  if (!validatorAddress || !node) {
    // We have no nodes that meet the criteria we are looking for.
    return (
      <>
        <StakingHeader>
          <StakingModalTitle>
            <Text text="Unable to determine a Node to Stake to" />
          </StakingModalTitle>
        </StakingHeader>
        <StakingContent>
          <div className="claim-and-stake-content">
            <p>
              <Text text="No valid node found that matches the expected criteria." />
            </p>
          </div>
        </StakingContent>
      </>
    );
  }

  // We have our selected Node Validator

  return (
    <NodeAddressContext.Provider value={validatorAddress}>
      <ValidatorNodeContext.Provider value={node}>
        {children}
      </ValidatorNodeContext.Provider>
    </NodeAddressContext.Provider>
  );
};

const DelegationUIClaimPortalHandOffBalanceCheck: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const balance = React.useContext(ESPBalanceContext);
  const balanceAsyncSnapshot = React.useContext(ESPBalanceAsyncSnapshotContext);
  const intent = React.useContext(ClaimPortalIntentContext);

  if (
    balanceAsyncSnapshot.asyncState === AsyncState.done &&
    balanceAsyncSnapshot.hasError
  ) {
    return (
      <>
        <StakingHeader>
          <StakingModalTitle>
            <Text text="Failed to retrieve current Wallet Balance" />
          </StakingModalTitle>
        </StakingHeader>
        <StakingContent>
          <div className="claim-and-stake-content">
            <p>
              <Text text="Unable to determine current Wallet balance.  We are unable to continue, please refresh the page and try again." />
            </p>
          </div>
        </StakingContent>
      </>
    );
  }

  if (balanceAsyncSnapshot.asyncState === AsyncState.waiting) {
    // We're waiting for the balance to load
    return (
      <>
        <StakingHeader>
          <StakingModalTitle>
            <Text text="Waiting for Wallet balance" />
          </StakingModalTitle>
        </StakingHeader>
        <StakingContent>
          <div className="claim-and-stake-content">
            <p>
              <Text text="We need to be able to determine the current wallet balance in order to continue." />
            </p>
          </div>
        </StakingContent>
      </>
    );
  }

  assert(balance !== null && balance !== undefined);

  const wantAmount = intent?.amount ?? balance;
  const haveAmount = balance;

  if (wantAmount !== null && haveAmount < wantAmount) {
    // The User does not have enough balance to cover the desired delegation
    // operation
    return (
      <>
        <StakingHeader>
          <StakingModalTitle>
            <Text text="Insufficient Balance" />
          </StakingModalTitle>
        </StakingHeader>
        <StakingContent>
          <div className="claim-and-stake-content">
            <p>
              <Text text="We're unable to fulfill the Staking Intent as specified.  It requires a larger balance than the connected Wallet currently has." />
              <br />
              <br />
              <Text text="Desired Staking amount: " />
              <strong>
                <MoneyText money={MonetaryValue.ESP(wantAmount)} />
              </strong>
              <Text text=", current balance: " />
              <strong>
                <MoneyText money={MonetaryValue.ESP(haveAmount)} />{' '}
              </strong>
            </p>
            <br />
            <ConnectWalletButton />
          </div>
        </StakingContent>
      </>
    );
  }

  return (
    <StakingAmountContext.Provider value={MonetaryValue.ESP(wantAmount)}>
      {children}
    </StakingAmountContext.Provider>
  );
};

/**
 * ClaimAndStakePerformDelegationContent is the initial content for the
 * Delegation workflow view.
 */
const ClaimAndStakePerformDelegationContent: React.FC = () => {
  return (
    <RetrieveMinimumDelegationAmount>
      <ProvideCurrentAllowanceToStakeTable>
        <ProvideCurrentCurrentEpochActiveValidators>
          <ProvideEpochCurrentStakeToValidator>
            <DelegateToValidatorAutomatically />
          </ProvideEpochCurrentStakeToValidator>
        </ProvideCurrentCurrentEpochActiveValidators>
      </ProvideCurrentAllowanceToStakeTable>
    </RetrieveMinimumDelegationAmount>
  );
};

/**
 * NewDelegationModalContent is the content for new delegations
 * in the staking modal.
 */
const DelegateToValidatorAutomatically: React.FC = () => {
  return (
    <>
      <AutoDriveApprove />
      <AutoDriveDelegate />
      <ClaimAndStakeDelegationContent />
    </>
  );
};

const DelegationSuccessContent: React.FC = () => {
  const close = React.useContext(StakingModalCloseContext);
  const setCurrentSection = React.useContext(SetCurrentSectionContext);

  return (
    <>
      <StakingHeader>
        <StakingModalTitle>
          <Text text="Delegation" />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <div className="claim-and-stake-content">
          <div className="claim-and-stake-success-box">
            <CheckCircle />
            <h3>
              <Text text="Delegation Successful" />
            </h3>
            <p>
              <Text text="You've successfully delegated to a node." />
            </p>
          </div>
          <p>
            <Text text="You can track your delegations utilizing the " />
            <strong>
              <Text text="My Stakes" />
            </strong>
            <Text text=" filter" />
          </p>
          <div className="claim-and-stake-actions-area">
            <ButtonLarge
              onClick={() => {
                setCurrentSection(Sections.myStakes);
                close();
              }}
            >
              <Text text="Visit My Stakes" />
            </ButtonLarge>
            <ButtonLarge onClick={close}>
              <Text text="Back to Dashboard" />
            </ButtonLarge>
          </div>
        </div>
      </StakingContent>
    </>
  );
};

const AutoDriveApprove: React.FC = () => {
  const allowance = React.useContext(CurrentAllowanceToStakeTableContext);
  const approveAsyncSnapshot = React.useContext(ApproveAsyncSnapshotContext);
  const setApproveAsyncIterable = React.useContext(
    SetApproveAsyncIterableContext,
  );
  const stakingAmount = React.useContext(StakingAmountContext)!;
  const currentBalance = React.useContext(ESPBalanceContext);
  const setL1Timestamp = React.useContext(SetL1RefreshTimestampContext);
  const minimumAmount = React.useContext(MinimumDelegationAmountContext);
  const l1Methods = React.useContext(L1MethodsContext);
  const espContract = React.useContext(ESPTokenContractContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const [firstTime, setFirstTime] = React.useState(true);

  React.useEffect(() => {
    if (approveAsyncSnapshot.asyncState !== AsyncState.none) {
      // If we're not in the right Approve Async state, then we don't want to
      // automatically drive the approval process.
      return;
    }

    if (allowance === null || allowance === undefined) {
      // If we have not retrieved our allowance, then we don't want to be
      // premature, and we want to wait until we have our allowance before
      // we make our decision.
      return;
    }

    if (allowance >= stakingAmount.value) {
      // If our current allowance already covers the staking amount, then
      // there's nothing to do.
      return;
    }

    if (stakingAmount.value < minimumAmount) {
      // We don't have enough amount to even try and stake, so don't
      // bother with automatically progressing.
      return;
    }

    if (currentBalance < stakingAmount.value) {
      // If the user isn't able to stake the intended amount, then we should
      // not automatically drive this interaction.
      return;
    }

    if (!l1Methods || !espContract || !stakeTableContract) {
      // We don't have the necessary contracts/methods to perform
      // the auto approval.
      return;
    }

    if (!firstTime) {
      // As a fail safe, we only want to evaluate this once.
      // This should prevent a hot-loop of continually re-performing this
      // action.
      return;
    }
    setFirstTime(false);

    setApproveAsyncIterable(
      performApprove(
        l1Methods,
        espContract,
        stakeTableContract,
        setL1Timestamp,
      ),
    );

    return () => {};
  }, [
    allowance,
    approveAsyncSnapshot,
    setApproveAsyncIterable,
    stakingAmount,
    currentBalance,
    setL1Timestamp,
    minimumAmount,
    l1Methods,
    espContract,
    stakeTableContract,
    firstTime,
    setFirstTime,
  ]);

  return null;
};

const AutoDriveDelegate: React.FC = () => {
  const allowance = React.useContext(CurrentAllowanceToStakeTableContext);
  const stakingAmount = React.useContext(StakingAmountContext)!;
  const currentBalance = React.useContext(ESPBalanceContext);
  const setL1Timestamp = React.useContext(SetL1RefreshTimestampContext);
  const minimumAmount = React.useContext(MinimumDelegationAmountContext);
  const l1Methods = React.useContext(L1MethodsContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const approveAsyncSnapshot = React.useContext(ApproveAsyncSnapshotContext);
  const delegationAsyncSnapshot = React.useContext(
    DelegateAsyncSnapshotContext,
  );
  const setDelegationAsyncIterable = React.useContext(
    SetDelegationAsyncIterableContext,
  );
  const node = React.useContext(ValidatorNodeContext);
  const [firstTime, setFirstTime] = React.useState(true);

  React.useEffect(() => {
    if (delegationAsyncSnapshot.asyncState !== AsyncState.none) {
      // If we're not in the right Approve Async state, then we don't want to
      // automatically drive the approval process.
      return;
    }

    if (approveAsyncSnapshot.asyncState === AsyncState.active) {
      // We don't want to try and process anything at the same time as the
      // approve process.
      return;
    }

    if (!allowance) {
      // If we have not retrieved our allowance, then we don't want to be
      // premature, and we want to wait until we have our allowance before
      // we make our decision.
      return;
    }

    if (allowance < stakingAmount.value) {
      // If our current allowance already covers the staking amount, then
      // there's nothing to do.
      return;
    }

    if (stakingAmount.value < minimumAmount) {
      // We don't have enough amount to even try and stake, so don't
      // bother with automatically progressing.
      return;
    }

    if (currentBalance < stakingAmount.value) {
      // If the user isn't able to stake the intended amount, then we should
      // not automatically drive this interaction.
      return;
    }

    if (!node) {
      // We don't have a node to perform the delegation on.
      return;
    }

    if (!l1Methods || !stakeTableContract) {
      // We don't have the necessary contracts/methods to perform
      // the auto approval.
      return;
    }

    if (!firstTime) {
      // As a fail safe, we only want to evaluate this once.
      // This should prevent a hot-loop of continually re-performing this
      // action.
      return;
    }
    setFirstTime(false);

    setDelegationAsyncIterable(
      performDelegation(
        l1Methods,
        stakeTableContract,
        node.addressText,
        stakingAmount.value,
        setL1Timestamp,
      ),
    );

    return () => {};
  }, [
    allowance,
    approveAsyncSnapshot,
    delegationAsyncSnapshot,
    setDelegationAsyncIterable,
    stakingAmount,
    currentBalance,
    setL1Timestamp,
    minimumAmount,
    l1Methods,
    stakeTableContract,
    firstTime,
    setFirstTime,
  ]);

  return null;
};

/**
 * ClaimAndStakeDelegationContent is a React component that displays the
 * content and interactive fields for performing delegation to the randomly
 * assigned Validator.
 */
const ClaimAndStakeDelegationContent: React.FC = () => {
  return (
    <>
      <StakingHeader>
        <StakingModalTitle>
          <span className="accent">
            <Text text="Delegate" />
            &nbsp;
            <Text text="/" />
            &nbsp;
          </span>
          <ValidatorName />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <ProvideDelegateContractGasEstimate>
          <div className="staking-modal-initial-summary-and-interaction">
            <ValidatorDisplayArea />
            <NoticeArea />
            <StakingAmountSummary />
          </div>
          <StakingOverviewArea />
          <StakingActionsArea />
          <StakingCompletionArea />
        </ProvideDelegateContractGasEstimate>
      </StakingContent>
    </>
  );
};

/**
 * StakingAmountSummary is a React component that displays the summary
 * of the action to perform.  This is utilized to indicate to the user
 * what the intended action we are attempting to perform is.
 */
const StakingAmountSummary: React.FC = () => {
  const stakingAmount = React.useContext(StakingAmountContext)!;
  const currentBalance = React.useContext(ESPBalanceContext);
  const minimumAmount = React.useContext(MinimumDelegationAmountContext);

  const hasBalance = currentBalance >= (stakingAmount?.value ?? 0n);
  const isInsufficientBalance = !hasBalance;
  const isLessThanMinimum =
    stakingAmount !== null &&
    stakingAmount.value !== 0n &&
    stakingAmount.value < minimumAmount;
  const errorClass =
    isInsufficientBalance || isLessThanMinimum ? 'error' : undefined;

  return (
    <div className="staking-modal-esp-input-area">
      <label htmlFor="staking-modal-esp-input">
        <Text text="Amount to Stake" />
      </label>
      <div
        className={addClassToClassName(errorClass, 'staking-modal-esp-display')}
      >
        <MoneyText money={stakingAmount} />
      </div>
    </div>
  );
};

/**
 * ProvideDelegateContractGasEstimate is a React component that provides the gas
 * estimate the delegate method on the StakeTable.  The estimate is passed
 * to its children via the EstimatedContractGasContext.
 */
const ProvideDelegateContractGasEstimate: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const account = React.useContext(RainbowKitAccountAddressContext);
  const allowance = React.useContext(CurrentAllowanceToStakeTableContext) ?? 0n;
  const balance = React.useContext(ESPBalanceContext);
  const validator = React.useContext(ConfirmedValidatorContext);
  const rewardClaimGasEstimator = React.useContext(
    StakeTableContractGasEstimatorContext,
  );

  const amountToTry = allowance < balance ? allowance : balance;

  const promise = React.useMemo(
    () =>
      !rewardClaimGasEstimator ||
      balance <= 0n ||
      allowance === null ||
      allowance <= 0n ||
      amountToTry <= 0n ||
      !account
        ? neverPromise
        : rewardClaimGasEstimator.delegate(account, validator, amountToTry),

    // We only want to refresh this, if the estimator changes, or if the
    // criteria of our account or validator switch between being set or not,
    // or if the amount is positive or not.
    //
    // Beyond these conditions, the gas price is assumed to be the same,
    // regardless of the specific values utilized.
    //
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rewardClaimGasEstimator, !!account, !!validator, amountToTry > 0n],
  );

  return (
    <PromiseResolver promise={promise}>
      <TransformDataToGasEstimate>{children}</TransformDataToGasEstimate>
    </PromiseResolver>
  );
};

const TransformDataToGasEstimate: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = (React.useContext(DataContext) ?? null) as null | bigint;

  return (
    <EstimatedContractGasContext.Provider value={data}>
      {children}
    </EstimatedContractGasContext.Provider>
  );
};

/**
 * StakingActionsArea is a React component that displays the actions area
 * for new delegations in the staking modal.
 */
const StakingActionsArea: React.FC = () => {
  return (
    <div className="staking-modal-staking-actions-area">
      <ApproveButton />
      <NewStakeInstructionsAndProgress />
      <DelegateButton />
    </div>
  );
};
