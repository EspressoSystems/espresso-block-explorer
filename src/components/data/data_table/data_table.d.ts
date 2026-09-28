import { default as React } from 'react';
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
 * DataTableIndexContext is a Context that provides the index of the current
 * row within the DataTable.
 */
export declare const DataTableIndexContext: React.Context<number>;
export declare enum Alignment {
    start = "start",
    center = "center",
    end = "end"
}
/**
 * ColumnData represents the minimum data needed to render a cell, and header
 * column.
 */
type ColumnData<ColumnType> = {
    label: string;
    columnType: ColumnType;
    buildCell: React.ComponentType;
    alignment?: Alignment;
};
export interface DataTableProps<ColumnType> {
    columns: ColumnData<ColumnType>[];
    /**
     * What to render in place of the rows when there is no data. When omitted
     * an empty table body is rendered instead.
     */
    emptyContent?: React.ReactNode;
}
/**
 * DataTable renders the rows of its DataContext, an array, under the given
 * columns. Each cell is built with no props; it reads its row from
 * DataTableRowContext.
 */
declare const DataTable: React.FC<DataTableProps<unknown>>;
export default DataTable;
