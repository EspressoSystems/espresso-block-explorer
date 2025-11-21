import React from 'react';
import { ActionsHeadCell } from '../common/cells/actions_head_cell';
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
  TableSortStateContext,
} from '../common/validator_table_sort_state';

/**
 * ClaimsDelegationTableHeader is a component that renders
 * the header row of the delegation table with sortable columns.
 */
export const ClaimsDelegationTableHeader: React.FC = () => {
  const { sortBy: toggleSort } = React.useContext(TableSortControlsContext);
  const { sortDirection, sortBy } = React.useContext(TableSortStateContext);

  return (
    <thead>
      <tr>
        <th
          className="sortable"
          data-sort-column={
            sortBy === CellType.rank ? sortDirection : undefined
          }
          onClick={() => toggleSort(CellType.rank)}
        >
          <RankHeadCell />
        </th>
        <th
          className="sortable"
          data-sort-column={
            sortBy === CellType.validator ? sortDirection : undefined
          }
          onClick={() => toggleSort(CellType.validator)}
        >
          <ValidatorHeadCell />
        </th>
        <th
          className="sortable"
          data-sort-column={
            sortBy === CellType.totalStake ? sortDirection : undefined
          }
          onClick={() => toggleSort(CellType.totalStake)}
        >
          <TotalStakeHeadCell />
        </th>
        <th
          className="sortable"
          data-sort-column={sortBy === CellType.fee ? sortDirection : undefined}
          onClick={() => toggleSort(CellType.fee)}
        >
          <FeeHeadCell />
        </th>
        <th
          className="sortable"
          data-sort-column={
            sortBy === CellType.missedSlots ? sortDirection : undefined
          }
          onClick={() => toggleSort(CellType.missedSlots)}
        >
          <MissedSlotsHeadCell />
        </th>
        <th
          className="sortable"
          data-sort-column={
            sortBy === CellType.participationRate ? sortDirection : undefined
          }
          onClick={() => toggleSort(CellType.participationRate)}
        >
          <ParticipationRateHeadCell />
        </th>
        <th
          className="sortable"
          data-sort-column={
            sortBy === CellType.hotShotConsensus ? sortDirection : undefined
          }
          onClick={() => toggleSort(CellType.hotShotConsensus)}
        >
          <HotShotConsensusHeadCell />
        </th>
        <th>
          <ActionsHeadCell />
        </th>
      </tr>
    </thead>
  );
};
