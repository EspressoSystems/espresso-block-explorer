import PercentageText from '@/components/text/percentage_text';
import Text from '@/components/text/text';
import { RatioRational } from '@/service/espresso_l1_validator_service/common/ratio';
import { ConsensusMapContext } from '@/sites/delegation_ui/contexts/consensus_map_context';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import React from 'react';
import { RatioRationalText } from './rational_rate_text';

/**
 * ParticipationRateCell displays the voter participation rate for a validator.
 */
export const ParticipationRateCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const consensusMap = React.useContext(ConsensusMapContext);

  const activeValidator = consensusMap.get(validator.addressText);

  if (!activeValidator || activeValidator.voterParticipation == null) {
    return <Text text="-" />;
  }

  const rate = activeValidator.voterParticipation;
  const ratio = rate.ratio;
  if (!Number.isFinite(ratio) || Number.isNaN(ratio)) {
    // Handle invalid number representations
    return <Text text="-" />;
  }

  if (rate instanceof RatioRational) {
    return <RatioRationalText rate={rate} />;
  }

  return (
    <PercentageText percentage={activeValidator.voterParticipation.ratio} />
  );
};
