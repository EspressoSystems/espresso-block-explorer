import { addClassToClassName } from '@/higher_order';
import { WithUiSmall, WithUiText600 } from '@/typography/typography';
import React from 'react';
import './summary_table_labeled_value.css';

const DivText600 = WithUiText600('div');
const LabelTextSmall = WithUiSmall('label');

interface LabelProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * Label represents the Label portion of the TableLabeledValue component.
 * It ensures that text rendered within the label has the correct typography.
 */
const Label: React.FC<LabelProps> = ({ className, children, ...props }) => (
  <LabelTextSmall {...props} className={className}>
    {children}
  </LabelTextSmall>
);

interface ValueProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * Value represents the Value portion of the TableLabeledValue component.
 * It ensures that text rendered within the value has the correct typography.
 */
const Value: React.FC<ValueProps> = ({ className, children, ...props }) => (
  <DivText600 {...props} className={addClassToClassName(className, 'value')}>
    {children}
  </DivText600>
);

export interface SummaryTableLabeledValueProps {
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
const SummaryTableLabeledValue: React.FC<SummaryTableLabeledValueProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    {...props}
    className={addClassToClassName(className, 'summary-tabled-labeled-value')}
  >
    <Label key={0}>{children[0]}</Label>
    <Value key={1}>{children[1]}</Value>
  </div>
);

export default SummaryTableLabeledValue;
