import { DataContext } from '@/components/contexts/data_provider';
import { AsyncState } from '@/components/data/async_data/async_snapshot';
import PromiseResolver from '@/components/data/async_data/promise_resolver';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit/contexts/contexts';
import Text from '@/components/text/text';
import WalletAddressText from '@/components/text/wallet_address_text';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { neverPromise } from '@/functional/functional_async';
import WalletAddress from '@/models/wallet_address/wallet_address';
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
  ClaimValidatorExitAsyncSnapshotContext,
  performClaimValidatorExit,
  SetClaimValidatorExitAsyncIterableContext,
} from './contexts/perfom_claim_validator_exit_context';
import { PerformWriteTransactionStatus } from './contexts/perform_write_states';
import { StakingModalCloseContext } from './contexts/staking_modal_close_context';
import { PendingExitOverviewArea } from './pending_exit_overview_area';
import { PendingExitSummaryAndInteraction } from './pending_exit_summary_and_interaction';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingModalTitle } from './staking_modal_title';

export const WithdrawExitContent: React.FC = () => {
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  return (
    <>
      <StakingHeader>
        <StakingModalTitle>
          <Text text="Withdraw" />
          <Text text=" / " />
          <WalletAddressText
            value={
              new WalletAddress(hexArrayBufferCodec.decode(confirmedValidator))
            }
          />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <ProvideContractGasEstimate>
          <PendingExitSummaryAndInteraction />
          <PendingExitOverviewArea />
          <WithdrawExitActionsArea />
        </ProvideContractGasEstimate>
      </StakingContent>
    </>
  );
};

const ProvideContractGasEstimate: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const account = React.useContext(RainbowKitAccountAddressContext);
  const validator = React.useContext(ConfirmedValidatorContext);
  const stakeTableGasEstimator = React.useContext(
    StakeTableContractGasEstimatorContext,
  );

  const promise =
    !stakeTableGasEstimator || !account
      ? neverPromise
      : stakeTableGasEstimator.claimValidatorExit(account, validator);

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

const WithdrawExitActionsArea: React.FC = () => {
  const l1Methods = React.useContext(L1MethodsContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);
  const currentStakeToValidator =
    React.useContext(CurrentStakeToValidatorContext) ?? 0n;
  const validatorAddress = confirmedValidator;
  const asyncSnapshot = React.useContext(
    ClaimValidatorExitAsyncSnapshotContext,
  );
  const setL1Timestamp = React.useContext(SetL1RefreshTimestampContext);
  const close = React.useContext(StakingModalCloseContext);
  const setClaimExitAsyncIterable = React.useContext(
    SetClaimValidatorExitAsyncIterableContext,
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
          <Text text="Claim Exit" />
        </ButtonLarge>
      </div>
    );
  }

  const performClaimExitAction = () =>
    setClaimExitAsyncIterable(
      performClaimValidatorExit(
        l1Methods,
        stakeTableContract,
        validatorAddress,
        setL1Timestamp,
      ),
    );

  if (asyncSnapshot.hasError) {
    // There was an error claiming exit
    return (
      <div className="staking-modal-unstaking-actions-area error">
        <div>
          <Text text="Claim Exit Failed" />
        </div>
        <ButtonLarge
          className="btn-undelegate"
          onClick={performClaimExitAction}
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
    // Claim exit succeeded
    return (
      <div className="staking-modal-unstaking-actions-area succeeded">
        <div>
          <Text text="Exit Claimed Successfully" />
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
          <Text text="Withdrawing..." />
        </div>
        <ButtonLarge className="btn-undelegate" disabled>
          <Text text="Claim Exit" />
        </ButtonLarge>
      </div>
    );
  }

  if (currentStakeToValidator <= 0n) {
    // We have no staking amount
    return (
      <div className="staking-modal-unstaking-actions-area">
        <div>&nbsp;</div>
        <ButtonLarge className="btn-undelegate" disabled>
          <Text text="Claim Exit" />
        </ButtonLarge>
      </div>
    );
  }

  return (
    <div className="staking-modal-unstaking-actions-area">
      <div>&nbsp;</div>
      <ButtonLarge className="btn-undelegate" onClick={performClaimExitAction}>
        <Text text="Claim Exit" />
      </ButtonLarge>
    </div>
  );
};
