import React from 'react';
import { HotShotConsensusCell } from './hot_shot_consensus_cell';
import { NodeNameCell } from './node_name_cell';
import { RankCell } from './rank_cell';

/**
 * CombinedDetailsCell combines multiple details about a validator node
 * into a single cell for display in the validator nodes table.
 */
export const CombinedDetailsCell: React.FC = () => {
  return (
    <>
      #<RankCell />
      <NodeNameCell />
      <HotShotConsensusCell />
    </>
  );
};
