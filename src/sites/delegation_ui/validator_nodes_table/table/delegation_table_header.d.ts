import { default as React } from 'react';
export interface TableHeadingProps extends React.PropsWithChildren {
    sortable?: boolean;
}
/**
 * TableHeading is a reusable component for the common table header cell
 * elements that are utilized by each table head in the delegation ui
 * validator table.
 */
export declare const TableHeading: React.FC<TableHeadingProps>;
/**
 * DelegationTableHeader is a component that renders
 * the header row of the delegation table with sortable columns.
 */
export declare const DelegationTableHeader: React.FC;
