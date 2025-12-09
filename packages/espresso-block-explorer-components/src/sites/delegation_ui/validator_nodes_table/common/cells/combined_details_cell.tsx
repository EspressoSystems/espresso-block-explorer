import { ValidatorImage24x24 } from '@/sites/delegation_ui/elements/validator/validator_image';
import { ValidatorName } from '@/sites/delegation_ui/elements/validator/validator_name';
import React from 'react';
import './combined_details_cell.css';
import { HotShotConsensusCell } from './hot_shot_consensus_cell';
import { RankCell } from './rank_cell';

/**
 * CombinedDetailsCell combines multiple details about a validator node
 * into a single cell for display in the validator nodes table.
 */
export const CombinedDetailsCell: React.FC = () => {
  return (
    <>
      #<RankCell />
      <ValidatorImage24x24 />
      <div className="validator-name-shrinkable">
        <ValidatorName />
      </div>
      <HotShotConsensusCell />
    </>
  );
};
