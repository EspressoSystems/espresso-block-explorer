import React from 'react';
import { ActionsHeadCell } from '../common/cells/actions_head_cell';
import { FeeHeadCell } from '../common/cells/fee_head_cell';
import { HotShotConsensusHeadCell } from '../common/cells/hot_shot_consensus_head_cell';
import { MissedSlotsHeadCell } from '../common/cells/missed_slots_head_cell';
import { ParticipationRateHeadCell } from '../common/cells/participation_rate_head_cell';
import { TotalStakeHeadCell } from '../common/cells/total_stake_head_cell';
import { ValidatorHeadCell } from '../common/cells/validator_head_cell';
import {
  CellType,
  TableColumnSortByContext,
} from '../common/validator_table_sort_state';
import { TableHeading } from './delegation_table_header';

/**
 * ClaimsDelegationTableHeader is a component that renders
 * the header row of the delegation table with sortable columns.
 */
export const ClaimsDelegationTableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <TableColumnSortByContext.Provider value={CellType.validator}>
          <TableHeading sortable>
            <ValidatorHeadCell />
          </TableHeading>
        </TableColumnSortByContext.Provider>
        <TableColumnSortByContext.Provider value={CellType.totalStake}>
          <TableHeading sortable>
            <TotalStakeHeadCell />
          </TableHeading>
        </TableColumnSortByContext.Provider>
        <TableColumnSortByContext.Provider value={CellType.fee}>
          <TableHeading sortable>
            <FeeHeadCell />
          </TableHeading>
        </TableColumnSortByContext.Provider>
        <TableColumnSortByContext.Provider value={CellType.missedSlots}>
          <TableHeading sortable>
            <MissedSlotsHeadCell />
          </TableHeading>
        </TableColumnSortByContext.Provider>
        <TableColumnSortByContext.Provider value={CellType.participationRate}>
          <TableHeading sortable>
            <ParticipationRateHeadCell />
          </TableHeading>
        </TableColumnSortByContext.Provider>
        <TableColumnSortByContext.Provider value={CellType.hotShotConsensus}>
          <TableHeading sortable>
            <HotShotConsensusHeadCell />
          </TableHeading>
        </TableColumnSortByContext.Provider>
        <TableHeading>
          <ActionsHeadCell />
        </TableHeading>
      </tr>
    </thead>
  );
};
