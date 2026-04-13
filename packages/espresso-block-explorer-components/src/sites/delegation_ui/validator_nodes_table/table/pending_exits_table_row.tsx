import { CombinedDetailsCell } from '../common/cells/combined_details_cell';
import { FeeCell } from '../common/cells/fee_cell';
import { HotShotConsensusCell } from '../common/cells/hot_shot_consensus_cell';
import { MissedSlotsCell } from '../common/cells/missed_slot_cell';
import { MyStakeCell } from '../common/cells/my_stake_cell';
import { NodeNameCell } from '../common/cells/node_name_cell';
import { PendingExitActionsCell } from '../common/cells/pending_exit_actions_cell';
import { StakedPendingExitCell } from '../common/cells/staked_pending_exit_cell';

/**
 * PendingExitsNodeValidatorTableRow is a component that represents a single
 * row in the validator nodes table, displaying various details about the validator.
 */
export const PendingExitsNodeValidatorTableRow: React.FC = () => {
  return (
    <tr>
      <td className="combined-details-cell">
        <CombinedDetailsCell />
      </td>
      <td>
        <NodeNameCell />
      </td>
      <td align="right">
        <StakedPendingExitCell />
      </td>
      <td align="right">
        <FeeCell />
      </td>
      <td align="right">
        <MissedSlotsCell />
      </td>
      <td align="right">
        <MyStakeCell />
      </td>
      <td>
        <HotShotConsensusCell />
      </td>
      <td>
        <PendingExitActionsCell />
      </td>
    </tr>
  );
};
