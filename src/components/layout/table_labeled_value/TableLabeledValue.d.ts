import { default as React } from '../../../../../../node_modules/react';

export interface TableLabeledValueProps {
    className?: string;
    children: [React.ReactNode, React.ReactNode];
}
/**
 * TableLabeledValue is a component that is meant to display a label and
 * value pair of components, and lay them out depending on the screen size
 * of the device in question.
 *
 * If on a sufficiently large device, they should appear side by side as
 * if in a full sized table element. Otherwise, they should appear as
 * a single element of sufficient size.
 */
declare const TableLabeledValue: React.FC<TableLabeledValueProps>;
export default TableLabeledValue;
