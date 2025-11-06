import { FeeCell } from '../common/cells/fee_cell';
import { HotShotConsensusCell } from '../common/cells/hot_shot_consensus_cell';
import { MissedSlotsCell } from '../common/cells/missed_slot_cell';
import { NodeNameCell } from '../common/cells/node_name_cell';
import { ParticipationRateCell } from '../common/cells/participation_rate_cell';
import { RankCell } from '../common/cells/rank_cell';
import { TotalStakeCell } from '../common/cells/total_stake_cell';
import { GridCell } from './grid_cell';

/**
 * NodeValidatorGridRow is a component that represents a single row
 * in the validator nodes grid, displaying various details about the validator.
 */
export const NodeValidatorGridRow: React.FC = () => {
  return (
    <>
      <GridCell>
        <RankCell />
      </GridCell>
      <GridCell>
        <NodeNameCell />
      </GridCell>
      <GridCell>
        <TotalStakeCell />
      </GridCell>
      <GridCell>
        <FeeCell />
      </GridCell>
      <GridCell>
        <MissedSlotsCell />
      </GridCell>
      <GridCell>
        <ParticipationRateCell />
      </GridCell>
      <GridCell>
        <HotShotConsensusCell />
      </GridCell>
    </>
  );
};
