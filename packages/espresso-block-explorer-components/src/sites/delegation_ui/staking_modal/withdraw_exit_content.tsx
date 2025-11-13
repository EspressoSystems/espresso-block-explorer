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
import { CurrentStakeToValidatorContext } from './contexts/current_stake_to_validator_context';
import {
  ClaimValidatorExitAsyncSnapshotContext,
  performClaimValidatorExit,
  PerformClaimValidatorExitReceiptRetrieved,
  SetClaimValidatorExitAsyncIterableContext,
} from './contexts/perfom_claim_validator_exit_context';
import './new_delegation_content.css';
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
        <BackButton />
        <StakingModalTitle>
          <Text text="Withdraw" />
          <Text text=" / " />
          <WalletAddressText value={new WalletAddress(confirmedValidator)} />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <PendingExitSummaryAndInteraction />
        <PendingExitOverviewArea />
        <WithdrawExitActionsArea />
      </StakingContent>
    </>
  );
};

const WithdrawExitActionsArea: React.FC = () => {
  const l1Methods = React.useContext(L1MethodsContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);
  const currentStakeToValidator =
    React.useContext(CurrentStakeToValidatorContext) ?? 0n;
  const validatorAddress = hexArrayBufferCodec.encode(confirmedValidator);
  const asyncSnapshot = React.useContext(
    ClaimValidatorExitAsyncSnapshotContext,
  );
  const setL1Timestamp = React.useContext(SetL1RefreshTimestampContext);
  const modalControls = React.useContext(ModalContext);
  const setSelection = React.useContext(SetValidatorSelectionContext);
  const setClaimExitAsyncIterable = React.useContext(
    SetClaimValidatorExitAsyncIterableContext,
  );

  if (
    l1Methods === null ||
    // If the Contracts are not set
    stakeTableContract === null ||
    // We have no staking amount
    currentStakeToValidator <= 0n
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

  if (
    asyncSnapshot.asyncState === AsyncState.waiting ||
    (asyncSnapshot.data &&
      !(
        asyncSnapshot.data instanceof PerformClaimValidatorExitReceiptRetrieved
      ))
  ) {
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

  if (asyncSnapshot.asyncState === AsyncState.done) {
    if (asyncSnapshot.hasError) {
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

    return (
      <div className="staking-modal-unstaking-actions-area succeeded">
        <div>
          <Text text="Exit Claimed Successfully" />
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
      <ButtonLarge className="btn-undelegate" onClick={performClaimExitAction}>
        <Text text="Claim Exit" />
      </ButtonLarge>
    </div>
  );
};
