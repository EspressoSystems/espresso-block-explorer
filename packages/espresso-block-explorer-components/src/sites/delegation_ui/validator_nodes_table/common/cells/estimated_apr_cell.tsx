import { PercentageText, Text } from '@/components/text';
import { ActiveValidatorsContext } from '@/sites/delegation_ui/contexts/active_validators_context';
import { ConsensusMapContext } from '@/sites/delegation_ui/contexts/consensus_map_context';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import { default as React } from 'react';

/**
 * EstimatedAPRCell displays the estimated APR a delegator earns with a
 * validator: the network's estimated APR, less the validator's commission.
 * Validators outside the active set earn no rewards, so show "-" for them.
 */
export const EstimatedAPRCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const consensusMap = React.useContext(ConsensusMapContext);
  const activeNodesSnapshot = React.useContext(ActiveValidatorsContext);

  if (!activeNodesSnapshot || !consensusMap.has(validator.addressText)) {
    return <Text text="-" />;
  }

  return (
    <PercentageText
      percentage={
        activeNodesSnapshot.apr.ratio * (1 - validator.commission.valueOf())
      }
    />
  );
};
