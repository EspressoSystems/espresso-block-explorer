import { CombinedDetailsCell } from '../common/cells/combined_details_cell';
import { FeeCell } from '../common/cells/fee_cell';
import { HotShotConsensusCell } from '../common/cells/hot_shot_consensus_cell';
import { MissedSlotsCell } from '../common/cells/missed_slot_cell';
import { MyStakeCell } from '../common/cells/my_stake_cell';
import { NodeNameCell } from '../common/cells/node_name_cell';
import { PendingClaimActionsCell } from '../common/cells/pending_claim_actions_cell';
import { StakedPendingUndelegationCell } from '../common/cells/staked_pending_undelegation_cell';

/**
 * PendingClaimsNodeValidatorTableRow is a component that represents a single
 * row in the validator nodes table, displaying various details about the validator.
 */
export const PendingClaimsNodeValidatorTableRow: React.FC = () => {
  return (
    <tr>
      <td className="combined-details-cell">
        <CombinedDetailsCell />
      </td>
      <td>
        <NodeNameCell />
      </td>
      <td>
        <StakedPendingUndelegationCell />
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
        <PendingClaimActionsCell />
      </td>
    </tr>
  );
};
