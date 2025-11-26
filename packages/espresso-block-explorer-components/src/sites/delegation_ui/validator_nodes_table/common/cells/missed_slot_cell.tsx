import PercentageText from '@/components/text/PercentageText';
import Text from '@/components/text/Text';
import { RatioRational } from '@/service/espresso_l1_validator_service/common/ratio';
import { ConsensusMapContext } from '@/sites/delegation_ui/contexts/consensus_map_context';
import { ValidatorNodeContext } from '@/sites/delegation_ui/contexts/validator_node_context';
import React from 'react';
import { RatioRationalText } from './rational_rate_text';

/**
 * MissedSlotsCell displays the percentage of missed slots for a validator.
 */
export const MissedSlotsCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const consensusMap = React.useContext(ConsensusMapContext);

  const activeValidator = consensusMap.get(validator.addressText);

  if (!activeValidator || activeValidator.leaderParticipation == null) {
    return <Text text="-" />;
  }

  const rate = activeValidator.leaderParticipation;
  const ratio = rate.ratio;
  if (!Number.isFinite(ratio) || Number.isNaN(ratio)) {
    // Handle invalid number representations
    return <Text text="-" />;
  }

  if (rate instanceof RatioRational) {
    return <RatioRationalText rate={rate.oneMinus()} />;
  }

  return <PercentageText percentage={1 - ratio} />;
};
