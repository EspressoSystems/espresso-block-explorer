import NumberText from '@/components/text/NumberText';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import React from 'react';
import { RankMapContext } from 'sites/delegation_ui/contexts/rank_map_context';
import { ValidatorNodeContext } from 'sites/delegation_ui/contexts/validator_node_context';

/**
 * RankCell is a component that displays
 * the rank of the current validator node.
 */
export const RankCell: React.FC = () => {
  const validator = React.useContext(ValidatorNodeContext);
  const rankMap = React.useContext(RankMapContext);

  const address = hexArrayBufferCodec.encode(validator.address);

  const rank = rankMap.get(address);
  return <NumberText number={rank ?? -1} />;
};
