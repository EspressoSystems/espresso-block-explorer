import React from 'react';
import { SortDirection } from '../types';
/**
 * DataTableState represents the underlying DataTableState. The DataTable
 * knows absolutely nothing about the Data being worked with or the ColumnType.
 * The only assumptions that are made is that the ColumnTypes are equatable and
 * distinct.
 */
export interface DataTableState<ColumnType> {
    sortColumn: ColumnType;
    sortDir: SortDirection;
}
/**
 * DataTableStateContext is a Context for passing the DataTableState.
 */
export declare const DataTableStateContext: React.Context<DataTableState<unknown>>;
/**
 * DataTableSetStateContext is a Context that wraps a function for changing
 * the table state.
 */
export declare const DataTableSetStateContext: React.Context<React.Dispatch<React.SetStateAction<DataTableState<unknown>>>>;
/**
 * DataTableRowContext is a Context that provides an individual row within
 * the DataTable.
 */
export declare const DataTableRowContext: React.Context<object>;
/**
 * ColumnData represents the minimum data needed to render a cell, and header
 * column.
 */
type ColumnData<ColumnType> = {
    label: string;
    columnType: ColumnType;
    buildCell: React.FC;
};
export interface DataTableProps<ColumnType> {
    columns: ColumnData<ColumnType>[];
}
export interface SortDirectionComponent {
}
export interface DataTableHeadProps {
}
/**
 * DataTable is a component that is meant to display data in a tabular form.
 * The data layout is dictated by the columns passed to the DataTable in it's
 * props.
 *
 * The DataTable forwards this data to the Head element, and the body element
 * for display.  The DataTable is capable of handling sortable columns if
 * the need should arise.
 *
 * It records the current page, sorted column and direction in it's local
 * state for quick reference.
 *
 * The DataTable itself is not responsible for setting up it's own state,
 * but it does consume and attempt to modify the State. As such, in order
 * to effectively utilize the DataTable the DataTableStateContext.Provider,
 * and DataTableSetStateContext.Provider should be set as an ancestor above
 * the created DataTable.
 *
 * The DataTable Body gets it's data from a DataContext.  That DataContext
 * is expected to be an Array of data, but no other restrictions are imposed.
 *
 * The Cells that get rendered within the Body are provided via the data
 * passed into the column Props. These Cells are constructed with no props
 * being passed, instead a DataTableRowContext.Provider is created to wrap
 * every row. This should allow every cell to access any data they need for
 * that individual row.
 *
 */
declare const DataTable: React.FC<DataTableProps<unknown>>;
export default DataTable;
