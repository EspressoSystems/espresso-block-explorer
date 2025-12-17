import { default as React } from 'react';
/**
 * CellType enumerates the different types of columns that can be
 * sorted in the validator table.
 */
export declare enum CellType {
    rank = 0,
    validator = 1,
    totalStake = 2,
    fee = 3,
    missedSlots = 4,
    participationRate = 5,
    hotShotConsensus = 6,
    pendingExit = 7,
    pendingClaim = 8
}
/**
 * SortDirection enumerates the possible directions for sorting the table.
 */
export declare enum SortDirection {
    asc = 0,
    desc = 1
}
/**
 * TableSortState represents the current state of sorting for any table.
 */
export interface TableSortState<T> {
    sortBy: T;
    sortDirection: SortDirection;
}
export interface TableControls<T> {
    sortBy(newSortBy: T): void;
}
/**
 * TableSortControlsContext provides the controls to modify the table
 * sorting state for a given sort by column.
 */
export declare const TableSortControlsContext: React.Context<TableControls<unknown>>;
/**
 * TableSortStateContext provides the current sorting state of the table.
 */
export declare const TableSortStateContext: React.Context<TableSortState<CellType>>;
/**
 * TableSortByContext provides the current column type that is being
 * sorted.
 */
export declare const TableColumnSortByContext: React.Context<CellType | null>;
/**
 * useValidatorTableSortState is a custom hook that manages the sorting state
 * for the validator table, providing the current state and controls to modify
 * it.
 */
export declare const useValidatorTableSortState: (sortByCell?: CellType, sortDirection?: SortDirection) => {
    tableState: TableSortState<CellType>;
    tableControls: {
        sortBy: (newSortBy: CellType) => void;
    };
};
export interface ValidatorTableSortStateProviderProps extends React.PropsWithChildren {
    sortBy?: CellType;
    sortDirection?: SortDirection;
}
/**
 * ValidatorTableSortStateProvider is a context provider that manages
 * the sorting state for the validator table and provides sorted validator
 * data to its children.
 */
export declare const ValidatorTableSortStateProvider: React.FC<ValidatorTableSortStateProviderProps>;
