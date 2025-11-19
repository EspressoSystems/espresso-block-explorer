import { Now } from '@/components/contexts/NowProvider';
import Text from '@/components/text/Text';
import TimeLeftText from '@/components/text/TimeLeftText';
import { PendingExitsContext } from '@/sites/delegation_ui/contexts/pending_exits_context';
import { PendingUndelegationsContext } from '@/sites/delegation_ui/contexts/pending_undelegations_context';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import React from 'react';
import './claim_in_cell.css';

/**
 * ClaimInCell displays information related to being able to withdraw claims
 * from a validator node.
 */
export const ClaimInCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const now = React.useContext(Now);
  const pendingExits = React.useContext(PendingExitsContext);
  const pendingUndelegations = React.useContext(PendingUndelegationsContext);

  const validatorAddress = validator.addressText;
  const pendingExit = pendingExits.get(validatorAddress) ?? null;
  const pendingUndelegation =
    pendingUndelegations.get(validatorAddress) ?? null;

  if (pendingExit) {
    const timeRemaining = pendingExit.availableTime.valueOf() - now.valueOf();
    if (timeRemaining <= 0) {
      return (
        <span className="claimable">
          <Text text="Claimable" />
        </span>
      );
    }

    return <TimeLeftText durationInMilliseconds={timeRemaining} />;
  }

  if (pendingUndelegation) {
    const timeRemaining =
      pendingUndelegation.availableTime.valueOf() - now.valueOf();
    if (timeRemaining <= 0) {
      return (
        <span className="claimable">
          <Text text="Claimable" />
        </span>
      );
    }

    return <TimeLeftText durationInMilliseconds={timeRemaining} />;
  }

  return (
    <>
      <Text text="-" />
    </>
  );
};
