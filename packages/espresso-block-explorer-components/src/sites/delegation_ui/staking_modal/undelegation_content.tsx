import { DataContext } from '@/components/contexts/data_provider';
import { PromiseResolver } from '@/components/data';
import { AsyncState } from '@/components/data/async_data/async_snapshot';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit/contexts/contexts';
import Text from '@/components/text/text';
import { neverPromise } from '@/functional/functional_async';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import React from 'react';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import { L1MethodsContext } from '../contexts/l1_methods_context';
import { SetL1RefreshTimestampContext } from '../contexts/l1_refresh_timestamp_context';
import {
  StakeTableContractContext,
  StakeTableContractGasEstimatorContext,
} from '../contexts/stake_table_contract_context';
import ButtonLarge from '../elements/buttons/button_large';
import { CloseStakingModalButton } from './close_staking_modal';
import { CurrentStakeToValidatorContext } from './contexts/current_stake_to_validator_context';
import { EstimatedContractGasContext } from './contexts/estimate_contract_gas_context';
import {
  performUndelegation,
  SetUndelegationAsyncIterableContext,
  UndelegateAsyncSnapshotContext,
} from './contexts/perform_undelgation_context';
import { PerformWriteTransactionStatus } from './contexts/perform_write_states';
import {
  SetStakingAmountContext,
  StakingAmountContext,
} from './contexts/staking_amount_context';
import { StakingModalCloseContext } from './contexts/staking_modal_close_context';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingModalTitle } from './staking_modal_title';
import './undelegation_content.css';
import { UnstakingInitialSummaryAndInteraction } from './unstaking_initial_summary_and_interaction';
import { UnstakingOverviewArea } from './unstaking_overview_area';

export const UndelegationContent: React.FC = () => {
  return (
    <>
      <StakingHeader>
        <StakingModalTitle>
          <Text text="Manage Stake" />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <ProvideUndelegateContractGasEstimate>
          <UnstakingInitialSummaryAndInteraction />
          <UnstakingOverviewArea />
          <UnstakingActionsArea />
        </ProvideUndelegateContractGasEstimate>
      </StakingContent>
    </>
  );
};

/**
 * ProvideUndelegateContractGasEstimate provides an estimated gas amount
 * for undelegation operations to its children via the
 * EstimatedContractGasContext.
 */
const ProvideUndelegateContractGasEstimate: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const account = React.useContext(RainbowKitAccountAddressContext);
  const currentStakeToValidator =
    React.useContext(CurrentStakeToValidatorContext) ?? 0n;
  const validator = React.useContext(ConfirmedValidatorContext);
  const stakeTableGasEstimator = React.useContext(
    StakeTableContractGasEstimatorContext,
  );

  const promise = React.useMemo(
    () =>
      !account ||
      !validator ||
      !stakeTableGasEstimator ||
      !currentStakeToValidator
        ? neverPromise
        : stakeTableGasEstimator.undelegate(
            account,
            validator,
            currentStakeToValidator,
          ),

    // We only want to refresh this, if the estimator changes, or if the
    // criteria of our account or validator switch between being set or not,
    // or if the stake to the current validator is positive or not.
    //
    // Beyond these conditions, the gas price is assumed to be the same,
    // regardless of the specific values utilized.
    //
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      stakeTableGasEstimator,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      !!account,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      !!validator,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      currentStakeToValidator > 0n,
    ],
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

const UnstakingActionsArea: React.FC = () => {
  const l1Methods = React.useContext(L1MethodsContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);
  const stakingAmount = React.useContext(StakingAmountContext);
  const setStakingAmount = React.useContext(SetStakingAmountContext);
  const currentStake = React.useContext(CurrentStakeToValidatorContext) ?? 0n;
  const validatorAddress = confirmedValidator;
  const asyncSnapshot = React.useContext(UndelegateAsyncSnapshotContext);
  const setL1Timestamp = React.useContext(SetL1RefreshTimestampContext);
  const close = React.useContext(StakingModalCloseContext);
  const setUndelegationAsyncIterable = React.useContext(
    SetUndelegationAsyncIterableContext,
  );

  if (
    // If the Contracts are not set
    l1Methods === null ||
    stakeTableContract === null
  ) {
    return (
      <div className="staking-modal-unstaking-actions-area">
        <div>&nbsp;</div>
        <ButtonLarge className="btn-undelegate" disabled>
          <Text text="Undelegate" />
        </ButtonLarge>
      </div>
    );
  }

  const performUndelegationAction = () =>
    setUndelegationAsyncIterable(
      performUndelegation(
        l1Methods,
        stakeTableContract,
        validatorAddress,
        stakingAmount.value,
        (date) => {
          setStakingAmount(MonetaryValue.ESP(0n));
          setL1Timestamp(date);
        },
      ),
    );

  if (asyncSnapshot.hasError) {
    // There was an error undelegating
    return (
      <div className="staking-modal-unstaking-actions-area error">
        <div>
          <Text text="Undelegation Failed" />
        </div>
        <ButtonLarge
          className="btn-undelegate"
          onClick={performUndelegationAction}
        >
          <Text text="Retry" />
        </ButtonLarge>
      </div>
    );
  }

  if (
    asyncSnapshot.hasData &&
    (asyncSnapshot.data?.status ?? 0) >=
      PerformWriteTransactionStatus.receiptRetrieved
  ) {
    // Undelegation succeeded
    return (
      <div className="staking-modal-unstaking-actions-area succeeded">
        <div>
          <Text text="Delegation Successful" />
        </div>
        <ButtonLarge onClick={close}>
          <Text text="Close" />
        </ButtonLarge>
      </div>
    );
  }

  if (
    asyncSnapshot.asyncState === AsyncState.waiting ||
    asyncSnapshot.asyncState == AsyncState.active
  ) {
    // We are waiting for the transaction to be completed
    return (
      <div className="staking-modal-unstaking-actions-area waiting">
        <div>
          <Text text="Undelegating..." />
        </div>
        <ButtonLarge className="btn-undelegate" disabled>
          <Text text="Undelegate" />
        </ButtonLarge>
      </div>
    );
  }

  if (
    // We have no staking amount
    stakingAmount.value <= 0n ||
    // We don't have the balance to cover the staking amount
    stakingAmount.value > currentStake
  ) {
    return (
      <div className="staking-modal-unstaking-actions-area">
        <div>&nbsp;</div>
        <ButtonLarge className="btn-undelegate" disabled>
          <Text text="Undelegate" />
        </ButtonLarge>
      </div>
    );
  }

  return (
    <div className="staking-modal-unstaking-actions-area">
      <div>&nbsp;</div>
      <ButtonLarge
        className="btn-undelegate"
        onClick={performUndelegationAction}
      >
        <Text text="Undelegate" />
      </ButtonLarge>
    </div>
  );
};
