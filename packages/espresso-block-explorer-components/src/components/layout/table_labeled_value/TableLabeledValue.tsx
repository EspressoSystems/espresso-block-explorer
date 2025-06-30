import { Label } from '@/components/layout/label/label';
import { addClassToClassName } from '@/higher_order';
import { WithUiSmall } from '@/typography/typography';
import React from 'react';
import './table_labeled_value.css';

const DivTextSmall = WithUiSmall('div');

interface LabelProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * TableLabel represents the Label portion of the TableLabeledValue component.
 * It ensures that text rendered within the label has the correct typography.
 */
const TableLabel: React.FC<LabelProps> = (props) => (
  <Label className="type--ui--text-600">{props.children}</Label>
);

interface ValueProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * Value represents the Value portion of the TableLabeledValue component.
 * It ensures that text rendered within the value has the correct typography.
 */
const Value: React.FC<ValueProps> = (props) => (
  <DivTextSmall className="value">{props.children}</DivTextSmall>
);

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
const TableLabeledValue: React.FC<TableLabeledValueProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    {...props}
    className={addClassToClassName(className, 'tabled-labeled-value')}
  >
    <TableLabel className="label" key={0}>
      {children[0]}
    </TableLabel>
    <Value className="value" key={1}>
      {children[1]}
    </Value>
  </div>
);

export default TableLabeledValue;
