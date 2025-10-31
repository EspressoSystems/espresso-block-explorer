import React from 'react';
import { FeeHeadCell } from '../common/cells/fee_head_cell';
import { HotShotConsensusHeadCell } from '../common/cells/hot_shot_consensus_head_cell';
import { MissedSlotsHeadCell } from '../common/cells/missed_slots_head_cell';
import { ParticipationRateHeadCell } from '../common/cells/participation_rate_head_cell';
import { RankHeadCell } from '../common/cells/rank_head_cell';
import { TotalStakeHeadCell } from '../common/cells/total_stake_head_cell';
import { ValidatorHeadCell } from '../common/cells/validator_head_cell';
import {
  CellType,
  TableSortControlsContext,
} from '../common/validator_table_sort_state';

/**
 * DelegationTableHeader is a component that renders
 * the header row of the delegation table with sortable columns.
 */
export const DelegationTableHeader: React.FC = () => {
  const { sortBy } = React.useContext(TableSortControlsContext);

  return (
    <thead>
      <tr>
        <th onClick={() => sortBy(CellType.rank)}>
          <RankHeadCell />
        </th>
        <th onClick={() => sortBy(CellType.validator)}>
          <ValidatorHeadCell />
        </th>
        <th onClick={() => sortBy(CellType.totalStake)}>
          <TotalStakeHeadCell />
        </th>
        <th onClick={() => sortBy(CellType.fee)}>
          <FeeHeadCell />
        </th>
        <th onClick={() => sortBy(CellType.missedSlots)}>
          <MissedSlotsHeadCell />
        </th>
        <th onClick={() => sortBy(CellType.participationRate)}>
          <ParticipationRateHeadCell />
        </th>
        <th onClick={() => sortBy(CellType.hotShotConsensus)}>
          <HotShotConsensusHeadCell />
        </th>
      </tr>
    </thead>
  );
};
