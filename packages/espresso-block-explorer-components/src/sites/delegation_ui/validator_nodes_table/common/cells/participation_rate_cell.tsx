import PercentageText from '@/components/text/PercentageText';
import Text from '@/components/text/Text';
import React from 'react';
import { ConsensusMapContext } from 'sites/delegation_ui/contexts/consensus_map_context';
import { ValidatorNodeContext } from 'sites/delegation_ui/contexts/validator_node_context';

/**
 * ParticipationRateCell displays the voter participation rate for a validator.
 */
export const ParticipationRateCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const consensusMap = React.useContext(ConsensusMapContext);

  const activeValidator = consensusMap.get(validator.addressText);

  if (!activeValidator) {
    return <Text text="-" />;
  }

  return (
    <PercentageText percentage={activeValidator.voterParticipation.ratio} />
  );
};
