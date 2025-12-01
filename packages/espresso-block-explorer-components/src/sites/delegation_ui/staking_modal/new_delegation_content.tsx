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
import {
  CurrentAllowanceToStakeTableContext,
  ProvideCurrentAllowanceToStakeTable,
} from './contexts/current_allowance_context';
import { ProvideCurrentCurrentEpochActiveValidators } from './contexts/current_epoch_active_validators_context';
import { ProvideEpochCurrentStakeToValidator } from './contexts/current_epoch_stake_to_validator_context';
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
          &nbsp;
          <Text text="/" />
          &nbsp;
          <WalletAddressText
            value={
              new WalletAddress(hexArrayBufferCodec.decode(confirmedValidator))
            }
          />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <ProvideCurrentAllowanceToStakeTable>
          <ProvideCurrentCurrentEpochActiveValidators>
            <ProvideEpochCurrentStakeToValidator>
              <ProvideDelegateContractGasEstimate>
                <StakingInitialSummaryAndInteraction />
                <StakingOverviewArea />
                <StakingActionsArea />
                <StakingCompletionArea />
              </ProvideDelegateContractGasEstimate>
            </ProvideEpochCurrentStakeToValidator>
          </ProvideCurrentCurrentEpochActiveValidators>
        </ProvideCurrentAllowanceToStakeTable>
      </StakingContent>
    </>
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
