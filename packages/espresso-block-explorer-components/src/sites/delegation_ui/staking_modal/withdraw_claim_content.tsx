import { AsyncState } from '@/components/data/async_data/async_snapshot';
import Text from '@/components/text/text';
import { L1MethodsContext } from '@/contexts/l1_methods_context';
import { StakeTableContractContext } from '@/contexts/stake_table_contract_context';
import React from 'react';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import { SetL1RefreshTimestampContext } from '../contexts/l1_refresh_timestamp_context';
import ButtonLarge from '../elements/buttons/button_large';
import { ValidatorName } from '../elements/validator/validator_name';
import { CloseStakingModalButton } from './close_staking_modal';
import {
  CurrentPendingUndelegationFromValidatorContext,
  ProvideCurrentPendingUndelegationToValidator,
} from './contexts/current_pending_undelegation_from_validator_context';
import {
  ClaimWithdrawalAsyncSnapshotContext,
  performClaimWithdrawal,
  SetClaimWithdrawalAsyncIterableContext,
} from './contexts/perform_claim_withdrawal_context';
import { PerformWriteTransactionStatus } from './contexts/perform_write_states';
import { StakingModalCloseContext } from './contexts/staking_modal_close_context';
import { PendingClaimOverviewArea } from './pending_claim_overview_area';
import { PendingClaimSummaryAndInteraction } from './pending_claim_summary_and_interaction';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingModalTitle } from './staking_modal_title';

export const WithdrawClaimContent: React.FC = () => {
  return (
    <ProvideCurrentPendingUndelegationToValidator>
      <WithDrawClaimModalContent />
    </ProvideCurrentPendingUndelegationToValidator>
  );
};

export const WithDrawClaimModalContent: React.FC = () => {
  return (
    <>
      <StakingHeader>
        <StakingModalTitle>
          <span className="accent">
            <Text text="Claim" />
            &nbsp;
            <Text text="/" />
            &nbsp;
          </span>
          <ValidatorName />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <PendingClaimSummaryAndInteraction />
        <PendingClaimOverviewArea />
        <WithdrawClaimActionsArea />
      </StakingContent>
    </>
  );
};

const WithdrawClaimActionsArea: React.FC = () => {
  const l1Methods = React.useContext(L1MethodsContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);
  const undelegationObject = React.useContext(
    CurrentPendingUndelegationFromValidatorContext,
  );
  const validatorAddress = confirmedValidator;
  const asyncSnapshot = React.useContext(ClaimWithdrawalAsyncSnapshotContext);
  const setL1Timestamp = React.useContext(SetL1RefreshTimestampContext);
  const close = React.useContext(StakingModalCloseContext);
  const setClaimWithdrawalAsyncIterable = React.useContext(
    SetClaimWithdrawalAsyncIterableContext,
  );
  const toWithdraw = undelegationObject?.amount ?? 0n;
  const debounceGuard = React.useRef(false);

  const performClaimWithdrawalAction = React.useMemo(
    () => () => {
      if (debounceGuard.current) {
        return;
      }

      if (!l1Methods || !stakeTableContract || !validatorAddress) {
        return;
      }

      debounceGuard.current = true;

      setClaimWithdrawalAsyncIterable(
        performClaimWithdrawal(
          l1Methods,
          stakeTableContract,
          validatorAddress,
          () => {
            setL1Timestamp(new Date());
          },
        ),
      );
    },
    [
      l1Methods,
      stakeTableContract,
      validatorAddress,
      setL1Timestamp,
      setClaimWithdrawalAsyncIterable,
    ],
  );

  // Reset the debounce guard when the conditions are correct.
  React.useEffect(() => {
    if (!debounceGuard.current) {
      return;
    }

    if (asyncSnapshot.asyncState !== AsyncState.done) {
      return;
    }

    debounceGuard.current = false;
  }, [asyncSnapshot]);

  if (
    // If the Contracts are not set
    l1Methods === null ||
    stakeTableContract === null
  ) {
    return (
      <div className="staking-modal-unstaking-actions-area">
        <div>&nbsp;</div>
        <ButtonLarge className="btn-undelegate" disabled>
          <Text text="Claim Stake" />
        </ButtonLarge>
      </div>
    );
  }

  if (asyncSnapshot.hasError) {
    // There was an error processing the claim withdrawal.
    return (
      <div className="staking-modal-unstaking-actions-area error">
        <div>
          <Text text="Claim Stake Failed" />
        </div>
        <ButtonLarge
          className="btn-undelegate"
          onClick={performClaimWithdrawalAction}
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
    // Claim withdrawal succeeded
    return (
      <div className="staking-modal-unstaking-actions-area succeeded">
        <div>
          <Text text="Stake Claimed Successfully" />
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
    // We are waiting for the claim withdrawal to be processed.
    return (
      <div className="staking-modal-unstaking-actions-area waiting">
        <div>
          <Text text="Withdrawing..." />
        </div>
        <ButtonLarge className="btn-undelegate" disabled>
          <Text text="Claim Stake" />
        </ButtonLarge>
      </div>
    );
  }

  if (toWithdraw <= 0n) {
    // We have no staking amount
    return (
      <div className="staking-modal-unstaking-actions-area">
        <div>&nbsp;</div>
        <ButtonLarge className="btn-undelegate" disabled>
          <Text text="Claim Stake" />
        </ButtonLarge>
      </div>
    );
  }

  return (
    <div className="staking-modal-unstaking-actions-area">
      <div>&nbsp;</div>
      <ButtonLarge
        className="btn-undelegate"
        onClick={performClaimWithdrawalAction}
      >
        <Text text="Claim Stake" />
      </ButtonLarge>
    </div>
  );
};
