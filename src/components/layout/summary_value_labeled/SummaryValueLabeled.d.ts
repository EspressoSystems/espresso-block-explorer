import { default as React } from 'react';
export interface SummaryValueLabeledProps {
    className?: string;
    children: [React.ReactNode, React.ReactNode];
}
/**
 * TabledLabeledValue is a component that is meant to display a label and
 * value pair of components, and lay them out depending on the screen size
 * of the device in question.
 *
 * If on a sufficiently large device, they should appear side by side as
 * if in a full sized table element. Otherwise, they should appear as
 * a single element of sufficient size.
 */
declare const SummaryValueLabeled: React.FC<SummaryValueLabeledProps>;
export default SummaryValueLabeled;
