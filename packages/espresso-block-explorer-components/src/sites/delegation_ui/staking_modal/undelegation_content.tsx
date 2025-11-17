import { DataContext } from '@/components/contexts/DataProvider';
import { AsyncState } from '@/components/data/async_data/AsyncSnapshot';
import PromiseResolver from '@/components/data/async_data/PromiseResolver';
import Text from '@/components/text/Text';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { neverPromise } from '@/functional/functional_async';
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
import { PerformWriteTransactionReceiptRetrieved } from './contexts/perform_write_states';
import { StakingAmountContext } from './contexts/staking_amount_context';
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
        <ProvideContractGasEstimate>
          <UnstakingInitialSummaryAndInteraction />
          <UnstakingOverviewArea />
          <UnstakingActionsArea />
        </ProvideContractGasEstimate>
      </StakingContent>
    </>
  );
};

const ProvideContractGasEstimate: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const validator = React.useContext(ConfirmedValidatorContext);
  const currentStake = React.useContext(CurrentStakeToValidatorContext);
  const rewardClaimGasEstimator = React.useContext(
    StakeTableContractGasEstimatorContext,
  );

  const promise =
    !rewardClaimGasEstimator || !currentStake
      ? neverPromise
      : rewardClaimGasEstimator.undelegate(
          hexArrayBufferCodec.encode(validator),
          currentStake,
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
  const currentStake = React.useContext(CurrentStakeToValidatorContext) ?? 0n;
  const validatorAddress = hexArrayBufferCodec.encode(confirmedValidator);
  const asyncSnapshot = React.useContext(UndelegateAsyncSnapshotContext);
  const setL1Timestamp = React.useContext(SetL1RefreshTimestampContext);
  const close = React.useContext(StakingModalCloseContext);
  const setUndelegationAsyncIterable = React.useContext(
    SetUndelegationAsyncIterableContext,
  );

  if (
    l1Methods === null ||
    // If the Contracts are not set
    stakeTableContract === null ||
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

  const performUndelegationAction = () =>
    setUndelegationAsyncIterable(
      performUndelegation(
        l1Methods,
        stakeTableContract,
        validatorAddress,
        stakingAmount.value,
        setL1Timestamp,
      ),
    );

  if (
    asyncSnapshot.asyncState === AsyncState.waiting ||
    (asyncSnapshot.data &&
      !(asyncSnapshot.data instanceof PerformWriteTransactionReceiptRetrieved))
  ) {
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

  if (asyncSnapshot.asyncState === AsyncState.done) {
    if (asyncSnapshot.hasError) {
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
