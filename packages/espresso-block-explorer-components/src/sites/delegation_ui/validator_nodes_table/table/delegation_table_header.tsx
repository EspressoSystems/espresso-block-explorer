import { default as React } from 'react';
import { ActionsHeadCell } from '../common/cells/actions_head_cell';
import { FeeHeadCell } from '../common/cells/fee_head_cell';
import { HotShotConsensusHeadCell } from '../common/cells/hot_shot_consensus_head_cell';
import { MissedSlotsHeadCell } from '../common/cells/missed_slots_head_cell';
import { MyStakeHeadCell } from '../common/cells/my_stake_head_cell';
import { TotalStakeHeadCell } from '../common/cells/total_stake_head_cell';
import { ValidatorHeadCell } from '../common/cells/validator_head_cell';
import {
  CellType,
  TableColumnSortByContext,
  TableSortControlsContext,
  TableSortStateContext,
} from '../common/validator_table_sort_state';
import { SortIndicator } from './sort_indicator';

export interface TableHeadingProps extends React.PropsWithChildren {
  sortable?: boolean;
}

/**
 * TableHeading is a reusable component for the common table header cell
 * elements that are utilized by each table head in the delegation ui
 * validator table.
 */
export const TableHeading: React.FC<TableHeadingProps> = ({
  sortable,
  children,
}) => {
  const { sortBy: toggleSort } = React.useContext(TableSortControlsContext);
  const { sortDirection, sortBy } = React.useContext(TableSortStateContext);
  const cellType = React.useContext(TableColumnSortByContext);
  if (!sortable || !cellType) {
    return (
      <th>
        <div>{children}</div>
      </th>
    );
  }

  return (
    <th
      className="sortable"
      data-sort-column={sortBy === cellType ? sortDirection : undefined}
      onClick={() => toggleSort(cellType)}
    >
      <div>
        {children}
        <SortIndicator />
      </div>
    </th>
  );
};

/**
 * DelegationTableHeader is a component that renders
 * the header row of the delegation table with sortable columns.
 */
export const DelegationTableHeader: React.FC = () => {
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
        <TableColumnSortByContext.Provider value={CellType.myStake}>
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
