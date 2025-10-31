import { FeeCell } from '../common/cells/fee_cell';
import { HotShotConsensusCell } from '../common/cells/hot_shot_consensus_cell';
import { MissedSlotsCell } from '../common/cells/missed_slot_cell';
import { NodeNameCell } from '../common/cells/node_name_cell';
import { ParticipationRateCell } from '../common/cells/participation_rate_cell';
import { RankCell } from '../common/cells/rank_cell';
import { StakeCell } from '../common/cells/stake_cell';

/**
 * NodeValidatorTableRow is a component that represents a single row
 * in the validator nodes table, displaying various details about the validator.
 */
export const NodeValidatorTableRow: React.FC = () => {
  return (
    <tr>
      <td>
        <RankCell />
      </td>
      <td>
        <NodeNameCell />
      </td>
      <td>
        <StakeCell />
      </td>
      <td>
        <FeeCell />
      </td>
      <td>
        <MissedSlotsCell />
      </td>
      <td>
        <ParticipationRateCell />
      </td>
      <td>
        <HotShotConsensusCell />
      </td>
    </tr>
  );
};
