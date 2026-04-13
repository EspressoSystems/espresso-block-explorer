import { default as React } from 'react';
import { ActionsHeadCell } from '../common/cells/actions_head_cell';
import { FeeHeadCell } from '../common/cells/fee_head_cell';
import { HotShotConsensusHeadCell } from '../common/cells/hot_shot_consensus_head_cell';
import { MissedSlotsHeadCell } from '../common/cells/missed_slots_head_cell';
import { MyStakeHeadCell } from '../common/cells/my_stake_head_cell';
import { UndelegatedHeadCell } from '../common/cells/undelegated_head_cell';
import { ValidatorHeadCell } from '../common/cells/validator_head_cell';
import {
  CellType,
  TableColumnSortByContext,
} from '../common/validator_table_sort_state';
import { TableHeading } from './delegation_table_header';

/**
 * PendingClaimsDelegationTableHeader is a component that renders
 * the header row of the delegation table with sortable columns.
 */
export const PendingClaimsDelegationTableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <TableColumnSortByContext.Provider value={CellType.validator}>
          <TableHeading sortable>
            <ValidatorHeadCell />
          </TableHeading>
        </TableColumnSortByContext.Provider>
        <TableColumnSortByContext.Provider value={CellType.pendingClaim}>
          <TableHeading sortable>
            <UndelegatedHeadCell />
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
            <MyStakeHeadCell />
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
