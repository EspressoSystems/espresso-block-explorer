import React from 'react';
import { ConsensusMapContext } from 'sites/delegation_ui/contexts/consensus_map_context';
import { ValidatorNodeContext } from 'sites/delegation_ui/contexts/validator_node_context';
import { ActiveConsensusChip } from 'sites/delegation_ui/elements/chips/active_consensus_chip';
import { InactiveConsensusChip } from 'sites/delegation_ui/elements/chips/inactive_consensus_chip';

/**
 * HotShotConsensusCell displays whether a validator is part of the
 * HotShot consensus set using active/inactive consensus chips.
 */
export const HotShotConsensusCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const consensusSet = React.useContext(ConsensusMapContext);

  const address = validator.addressText;

  if (consensusSet.has(address)) {
    return <ActiveConsensusChip />;
  }

  return <InactiveConsensusChip />;
};
