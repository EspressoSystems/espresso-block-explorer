import React from 'react';
import { SortDirection } from '../types';
export interface DataTableState<ColumnType> {
    sortColumn: ColumnType;
    sortDir: SortDirection;
    page: number;
}
export declare const DataTableStateContext: React.Context<DataTableState<unknown>>;
export declare const DataTableSetStateContext: React.Context<React.Dispatch<React.SetStateAction<DataTableState<unknown>>>>;
export declare const DataTableRowContext: React.Context<object>;
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
declare const DataTable: React.FC<DataTableProps<unknown>>;
export default DataTable;
