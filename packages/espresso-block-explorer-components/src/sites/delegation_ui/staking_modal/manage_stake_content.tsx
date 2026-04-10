import Text from '@/components/text/text';
import { emptyIterator, firstWhereIterable } from '@/functional/functional';
import { PendingWithdrawal } from '@/service/espresso_staking_api_service/common/pending_withdrawal';
import React from 'react';
import { ConfirmedValidatorContext } from '../contexts/confirmed_valdiator_context';
import {
  ValidatorConfirmedStake,
  ValidatorConfirmedUndelegate,
} from '../contexts/validator_selection_context';
import { WalletSnapshotContext } from '../contexts/wallet_snapshot_context';
import ButtonLarge from '../elements/buttons/button_large';
import { CloseStakingModalButton } from './close_staking_modal';
import { StakingModalHistoryControlsContext } from './contexts/staking_modal_history_context';
import './manage_stake_content.css';
import { ManageStakeInitialSummary } from './manage_stake_initial_summary';
import { StakingContent } from './staking_content';
import { StakingHeader } from './staking_header';
import { StakingModalTitle } from './staking_modal_title';

/**
 * ManageStakeContent is a React component that displays the content
 * for managing stake in the staking modal.
 */
export const ManageStakeContent: React.FC = () => {
  return (
    <>
      <StakingHeader>
        <StakingModalTitle>
          <Text text="Manage Delegation" />
        </StakingModalTitle>
        <CloseStakingModalButton />
      </StakingHeader>
      <StakingContent>
        <ManageStakeInitialSummary />
        <ManageStakeActionsArea />
      </StakingContent>
    </>
  );
};

/**
 * ManageStakeActionsArea is a React component that displays the actions area
 * for managing stake in the staking modal.
 */
const ManageStakeActionsArea: React.FC = () => {
  const historyControls = React.useContext(StakingModalHistoryControlsContext);
  const confirmedValidator = React.useContext(ConfirmedValidatorContext);
  const walletSnapshot = React.useContext(WalletSnapshotContext);

  const currentPendingUndelegation =
    firstWhereIterable(
      walletSnapshot?.pendingUndelegations ??
        emptyIterator<PendingWithdrawal>(),
      (withdrawal) => withdrawal.nodeText === confirmedValidator,
    ) ?? null;

  return (
    <div className="staking-modal-manage-stake-actions-area">
      <ButtonLarge
        onClick={() => {
          historyControls.push(new ValidatorConfirmedStake(confirmedValidator));
        }}
      >
        <Text text="Delegate More" />
      </ButtonLarge>

      <ButtonLarge
        disabled={currentPendingUndelegation !== null}
        onClick={() => {
          historyControls.push(
            new ValidatorConfirmedUndelegate(confirmedValidator),
          );
        }}
      >
        <Text text="Undelegate" />
      </ButtonLarge>
    </div>
  );
};
