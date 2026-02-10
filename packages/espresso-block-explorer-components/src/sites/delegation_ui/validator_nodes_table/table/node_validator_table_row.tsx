import { ActionsCell } from '../common/cells/actions_cell';
import { CombinedDetailsCell } from '../common/cells/combined_details_cell';
import { FeeCell } from '../common/cells/fee_cell';
import { HotShotConsensusCell } from '../common/cells/hot_shot_consensus_cell';
import { MissedSlotsCell } from '../common/cells/missed_slot_cell';
import { MyStakeCell } from '../common/cells/my_stake_cell';
import { NodeNameCell } from '../common/cells/node_name_cell';
import { TotalStakeCell } from '../common/cells/total_stake_cell';

/**
 * NodeValidatorTableRow is a component that represents a single row
 * in the validator nodes table, displaying various details about the validator.
 */
export const NodeValidatorTableRow: React.FC = () => {
  return (
    <tr>
      <td className="combined-details-cell">
        <CombinedDetailsCell />
      </td>
      <td>
        <NodeNameCell />
      </td>
      <td>
        <TotalStakeCell />
      </td>
      <td>
        <FeeCell />
      </td>
      <td>
        <MissedSlotsCell />
      </td>
      <td>
        <MyStakeCell />
      </td>
      <td>
        <HotShotConsensusCell />
      </td>
      <td>
        <ActionsCell />
      </td>
    </tr>
  );
};
