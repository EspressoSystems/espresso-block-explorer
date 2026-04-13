import { AsyncState } from '@/components/data/async_data/async_snapshot';
import { addClassToClassName } from '@/components/higher_order';
import { Text } from '@/components/text';
import { L1MethodsContext } from '@/contexts/l1_methods_context';
import { StakeTableContractContext } from '@/contexts/stake_table_contract_context';
import { default as React } from 'react';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import { SetL1RefreshTimestampContext } from '../contexts/l1_refresh_timestamp_context';
import { ButtonProps } from '../elements/buttons/button_base';
import { default as ButtonLarge } from '../elements/buttons/button_large';
import { ValidatorName } from '../elements/validator/validator_name';
import { CloseStakingModalButton } from './close_staking_modal';
import { CurrentStakeToValidatorContext } from './contexts/current_stake_to_validator_context';
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
  return (
    <>
      <StakingHeader>
        <StakingModalTitle>
          <span className="accent">
            <Text text="Withdraw" />
            &nbsp;
            <Text text="/" />
            &nbsp;
          </span>
          <ValidatorName />
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
  const asyncSnapshot = React.useContext(
    ClaimValidatorExitAsyncSnapshotContext,
  );
  const child = (
    <>
      <WithdrawExitStatus />
      <WithdrawExitButton />
    </>
  );

  if (asyncSnapshot.hasError) {
    // There was an error claiming exit
    return (
      <div className="staking-modal-unstaking-actions-area error">{child}</div>
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

const WithdrawExitStatus: React.FC = () => {
  const l1Methods = React.useContext(L1MethodsContext);
  const stakeTableContract = React.useContext(StakeTableContractContext);
  const asyncSnapshot = React.useContext(
    ClaimValidatorExitAsyncSnapshotContext,
  );

  if (
    // If the Contracts are not set
    l1Methods === null ||
    stakeTableContract === null
  ) {
    return <div>&nbsp;</div>;
  }

  if (asyncSnapshot.hasError) {
    // There was an error claiming exit
    return (
      <div>
        <Text text="Claim Exit Failed" />
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
      <div>
        <Text text="Exit Claimed Successfully" />
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
        <Text text="Withdrawing..." />
      </div>
    );
  }

  return <div>&nbsp;</div>;
};

const WithdrawExitButton: React.FC = () => {
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
  const processingGuard = React.useRef(false);

  const performClaimExitAction = React.useMemo(
    () => () => {
      if (processingGuard.current) {
        return;
      }

      if (!l1Methods || !stakeTableContract || !validatorAddress) {
        return;
      }

      processingGuard.current = true;

      setClaimExitAsyncIterable(
        performClaimValidatorExit(
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
      setClaimExitAsyncIterable,
    ],
  );

  const ButtonComponent = asyncSnapshot.hasError ? RetryButton : NormalButton;

  // This effect resets the processing reference for debounce protection.
  React.useEffect(() => {
    if (!processingGuard.current) {
      return;
    }

    if (asyncSnapshot.asyncState !== AsyncState.done) {
      return;
    }

    processingGuard.current = false;
  }, [asyncSnapshot]);

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
    // Claim exit succeeded
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

  if (currentStakeToValidator <= 0n) {
    // We have no staking amount
    return <ButtonComponent disabled />;
  }

  return <ButtonComponent onClick={performClaimExitAction} />;
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
      <Text text="Claim Exit" />
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
