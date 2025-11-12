import { AsyncState } from '@/components/data/async_data/AsyncSnapshot';
import Text from '@/components/text/Text';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
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
  performUndelegation,
  PerformUndelegationReceiptRetrieved,
  SetUndelegationAsyncIterableContext,
  UndelegateAsyncSnapshotContext,
} from './contexts/perform_undelgation_context';
import { StakingAmountContext } from './contexts/staking_amount_context';
import './new_delegation_content.css';
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
        <BackButton />
        <StakingModalTitle>
          <Text text="Manage Stake" />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <UnstakingInitialSummaryAndInteraction />
        <UnstakingOverviewArea />
        <UnstakingActionsArea />
      </StakingContent>
    </>
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
  const modalControls = React.useContext(ModalContext);
  const setSelection = React.useContext(SetValidatorSelectionContext);
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
      !(asyncSnapshot.data instanceof PerformUndelegationReceiptRetrieved))
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
        onClick={performUndelegationAction}
      >
        <Text text="Undelegate" />
      </ButtonLarge>
    </div>
  );
};
