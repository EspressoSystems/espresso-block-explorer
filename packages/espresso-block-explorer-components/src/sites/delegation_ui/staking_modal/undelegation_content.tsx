import { AsyncState } from '@/components/data/async_data/async_snapshot';
import { addClassToClassName } from '@/components/higher_order';
import Text from '@/components/text/text';
import { L1MethodsContext } from '@/contexts/l1_methods_context';
import { StakeTableContractContext } from '@/contexts/stake_table_contract_context';
import React from 'react';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import { SetL1RefreshTimestampContext } from '../contexts/l1_refresh_timestamp_context';
import { ButtonProps } from '../elements/buttons/button_base';
import ButtonLarge from '../elements/buttons/button_large';
import { CloseStakingModalButton } from './close_staking_modal';
import { CurrentStakeToValidatorContext } from './contexts/current_stake_to_validator_context';
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
          <Text text="Manage Delegation" />
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
  const asyncSnapshot = React.useContext(UndelegateAsyncSnapshotContext);
  const child = (
    <>
      <UnstakingStatus />
      <UnstakingButton />
    </>
  );

  if (asyncSnapshot.hasError) {
    // There was an error undelegating
    return (
      <div className="staking-modal-unstaking-actions-area error">{child}</div>
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
        {child}
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
        {child}
      </div>
    );
  }

  return <div className="staking-modal-unstaking-actions-area">{child}</div>;
};

const UnstakingStatus: React.FC = () => {
  const asyncSnapshot = React.useContext(UndelegateAsyncSnapshotContext);
  if (asyncSnapshot.hasError) {
    // There was an error undelegating
    return (
      <div>
        <Text text="Undelegation Failed" />
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
      <div>
        <Text text="Undelegation Successful" />
      </div>
    );
  }

  if (
    asyncSnapshot.asyncState === AsyncState.waiting ||
    asyncSnapshot.asyncState == AsyncState.active
  ) {
    // We are waiting for the transaction to be completed
    return (
      <div>
        <Text text="Undelegating..." />
      </div>
    );
  }

  return <div>&nbsp;</div>;
};

const UnstakingButton: React.FC = () => {
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
  const stakingAmountValue = stakingAmount?.value ?? 0n;
  const debounceGuard = React.useRef(false);

  const performUndelegationAction = React.useMemo(
    () => () => {
      if (debounceGuard.current) {
        return;
      }
      if (!l1Methods || !stakeTableContract || !validatorAddress) {
        return;
      }
      debounceGuard.current = true;
      setUndelegationAsyncIterable(
        performUndelegation(
          l1Methods,
          stakeTableContract,
          validatorAddress,
          stakingAmountValue,
          (err) => {
            if (!err) {
              setStakingAmount(null);
            }

            setL1Timestamp(new Date());
          },
        ),
      );
    },
    [
      l1Methods,
      stakeTableContract,
      validatorAddress,
      stakingAmountValue,
      setL1Timestamp,
      setStakingAmount,
      setUndelegationAsyncIterable,
    ],
  );

  // Reset the debounceGuard should the conditions be right.
  React.useEffect(() => {
    if (!debounceGuard.current) {
      return;
    }

    if (asyncSnapshot.asyncState !== AsyncState.done) {
      return;
    }

    debounceGuard.current = false;
  }, [asyncSnapshot]);

  const ButtonComponent = asyncSnapshot.hasError ? RetryButton : NormalButton;

  if (
    // If the Contracts are not set
    l1Methods === null ||
    stakeTableContract === null
  ) {
    return <ButtonComponent disabled />;
  }

  if (
    asyncSnapshot.hasData &&
    (asyncSnapshot.data?.status ?? 0) >=
      PerformWriteTransactionStatus.receiptRetrieved
  ) {
    // Undelegation succeeded
    return (
      <ButtonLarge onClick={close}>
        <Text text="Close" />
      </ButtonLarge>
    );
  }

  if (
    asyncSnapshot.asyncState === AsyncState.waiting ||
    asyncSnapshot.asyncState == AsyncState.active
  ) {
    // We are waiting for the transaction to be completed
    return <ButtonComponent disabled />;
  }

  if (
    // We have no staking amount
    stakingAmountValue <= 0n ||
    // We don't have the balance to cover the staking amount
    stakingAmountValue > currentStake
  ) {
    return <ButtonComponent disabled />;
  }

  return <ButtonComponent onClick={performUndelegationAction} />;
};

const NormalButton: React.FC<ButtonProps> = ({
  onClick,
  className,
  ...rest
}) => {
  return (
    <ButtonLarge
      className={addClassToClassName(className, 'btn-undelegate')}
      onClick={onClick}
      {...rest}
    >
      <Text text="Undelegate" />
    </ButtonLarge>
  );
};

const RetryButton: React.FC<ButtonProps> = ({
  onClick,
  className,
  ...rest
}) => {
  return (
    <ButtonLarge
      className={addClassToClassName(className, 'btn-undelegate')}
      onClick={onClick}
      {...rest}
    >
      <Text text="Retry" />
    </ButtonLarge>
  );
};
