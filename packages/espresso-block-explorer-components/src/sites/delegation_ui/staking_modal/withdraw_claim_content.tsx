import { AsyncState } from '@/components/data/async_data/AsyncSnapshot';
import Text from '@/components/text/Text';
import WalletAddressText from '@/components/text/WalletAddressText';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import WalletAddress from '@/models/wallet_address/wallet_address';
import React from 'react';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import { L1MethodsContext } from '../contexts/l1_methods_context';
import { SetL1RefreshTimestampContext } from '../contexts/l1_refresh_timestamp_context';
import { ModalContext } from '../contexts/modal_context';
import { StakeTableContractContext } from '../contexts/stake_table_contract_context';
import {
  NoValidatorSelected,
  SetValidatorSelectionContext,
} from '../contexts/validator_selection_context';
import ButtonLarge from '../elements/buttons/button_large';
import { BackButton } from './back_button';
import { CloseStakingModalButton } from './close_staking_modal';
import { CurrentPendingUndelegationFromValidatorContext } from './contexts/current_pending_undelegation_from_validator_context';
import {
  ClaimWithdrawalAsyncSnapshotContext,
  performClaimWithdrawal,
  PerformClaimWithdrawalReceiptRetrieved,
  SetClaimWithdrawalAsyncIterableContext,
} from './contexts/perform_claim_withdrawal_context';
import { PendingClaimOverviewArea } from './pending_claim_overview_area';
import { PendingClaimSummaryAndInteraction } from './pending_claim_summary_and_interaction';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingModalTitle } from './staking_modal_title';

export const WithdrawClaimContent: React.FC = () => {
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);

  return (
    <>
      <StakingHeader>
        <BackButton />
        <StakingModalTitle>
          <Text text="Claim" />
          <Text text=" / " />
          <WalletAddressText value={new WalletAddress(confirmedValidator)} />
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
  const validatorAddress = hexArrayBufferCodec.encode(confirmedValidator);
  const asyncSnapshot = React.useContext(ClaimWithdrawalAsyncSnapshotContext);
  const setL1Timestamp = React.useContext(SetL1RefreshTimestampContext);
  const modalControls = React.useContext(ModalContext);
  const setSelection = React.useContext(SetValidatorSelectionContext);
  const setClaimWithdrawalAsyncIterable = React.useContext(
    SetClaimWithdrawalAsyncIterableContext,
  );
  const toWithdraw = undelegationObject?.amount ?? 0n;

  if (
    l1Methods === null ||
    // If the Contracts are not set
    stakeTableContract === null ||
    // We have no staking amount
    toWithdraw <= 0n
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

  const performClaimWithdrawalAction = () =>
    setClaimWithdrawalAsyncIterable(
      performClaimWithdrawal(
        l1Methods,
        stakeTableContract,
        validatorAddress,
        setL1Timestamp,
      ),
    );

  if (
    asyncSnapshot.asyncState === AsyncState.waiting ||
    (asyncSnapshot.data &&
      !(asyncSnapshot.data instanceof PerformClaimWithdrawalReceiptRetrieved))
  ) {
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

  if (asyncSnapshot.asyncState === AsyncState.done) {
    if (asyncSnapshot.hasError) {
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

    return (
      <div className="staking-modal-unstaking-actions-area succeeded">
        <div>
          <Text text="Stake Claimed Successfully" />
        </div>
        <ButtonLarge
          onClick={() => {
            setSelection(new NoValidatorSelected());
            modalControls.close();
          }}
        >
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
        onClick={performClaimWithdrawalAction}
      >
        <Text text="Claim Stake" />
      </ButtonLarge>
    </div>
  );
};
