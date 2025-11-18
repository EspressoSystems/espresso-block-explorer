import { DataContext } from '@/components/contexts/DataProvider';
import PromiseResolver from '@/components/data/async_data/PromiseResolver';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit/contexts/contexts';
import Text from '@/components/text/Text';
import WalletAddressText from '@/components/text/WalletAddressText';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { neverPromise } from '@/functional/functional_async';
import WalletAddress from '@/models/wallet_address/wallet_address';
import React from 'react';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import { ESPBalanceContext } from '../contexts/esp_balance_context';
import { StakeTableContractGasEstimatorContext } from '../contexts/stake_table_contract_context';
import { ApproveButton } from './approve_button';
import { CloseStakingModalButton } from './close_staking_modal';
import { CurrentAllowanceToStakeTableContext } from './contexts/current_allowance_context';
import { EstimatedContractGasContext } from './contexts/estimate_contract_gas_context';
import { DelegateButton } from './delegate_button';
import './new_delegation_content.css';
import { NewStakeInstructionsAndProgress } from './new_stake_instructions_and_progress';
import { StakingCompletionArea } from './staking_completion_area';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingInitialSummaryAndInteraction } from './staking_initial_summary_and_interaction';
import { StakingModalTitle } from './staking_modal_title';
import { StakingOverviewArea } from './staking_overview_area';

export const NewDelegationContent: React.FC = () => {
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  return (
    <>
      <StakingHeader>
        <StakingModalTitle>
          <Text text="Delegate" />
          <Text text=" / " />
          <WalletAddressText value={new WalletAddress(confirmedValidator)} />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <ProvideContractGasEstimate>
          <StakingInitialSummaryAndInteraction />
          <StakingOverviewArea />
          <StakingActionsArea />
          <StakingCompletionArea />
        </ProvideContractGasEstimate>
      </StakingContent>
    </>
  );
};

const ProvideContractGasEstimate: React.FC<React.PropsWithChildren> = ({
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

  const promise =
    !rewardClaimGasEstimator ||
    balance <= 0n ||
    allowance === null ||
    allowance <= 0n ||
    amountToTry <= 0n ||
    !account
      ? neverPromise
      : rewardClaimGasEstimator.delegate(
          account,
          hexArrayBufferCodec.encode(validator),
          amountToTry,
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

const StakingActionsArea: React.FC = () => {
  return (
    <div className="staking-modal-staking-actions-area">
      <ApproveButton />
      <NewStakeInstructionsAndProgress />
      <DelegateButton />
    </div>
  );
};
