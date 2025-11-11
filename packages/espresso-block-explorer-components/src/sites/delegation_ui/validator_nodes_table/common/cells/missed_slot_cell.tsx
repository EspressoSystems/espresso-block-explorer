import PercentageText from '@/components/text/PercentageText';
import Text from '@/components/text/Text';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import React from 'react';
import { ConsensusMapContext } from 'sites/delegation_ui/contexts/consensus_map_context';
import { ValidatorNodeContext } from 'sites/delegation_ui/contexts/validator_node_context';

/**
 * MissedSlotsCell displays the percentage of missed slots for a validator.
 */
export const MissedSlotsCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const consensusMap = React.useContext(ConsensusMapContext);

  const activeValidator = consensusMap.get(
    hexArrayBufferCodec.encode(validator.address),
  );

  if (!activeValidator) {
    return <Text text="-" />;
  }

  return (
    <PercentageText
      percentage={1 - activeValidator.leaderParticipation.ratio}
    />
  );
};
