import { addClassToClassName } from '@/higher_order';
import { WithUiText600 } from '@/typography/typography';
import React from 'react';
import { Label } from '../label/label';
import './value_labeled.css';

const DivText600 = WithUiText600('div');

interface LabelProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * TableLabel represents the Label portion of the TabledLabeledValue component.
 * It ensures that text rendered within the label has the correct typography.
 */
const TableLabel: React.FC<LabelProps> = (props) => (
  <Label>{props.children}</Label>
);

interface ValueProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * Value represents the Value portion of the TabledLabeledValue component.
 * It ensures that text rendered within the value has the correct typography.
 */
const Value: React.FC<ValueProps> = (props) => (
  <DivText600 className="value">{props.children}</DivText600>
);

export interface TableLabeledValueProps {
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
const ValueLabeled: React.FC<TableLabeledValueProps> = ({
  className,
  children,
  ...props
}) => (
  <div {...props} className={addClassToClassName(className, 'value-labeled')}>
    <Value className="value" key={0}>
      {children[0]}
    </Value>
    <TableLabel className="label" key={1}>
      {children[1]}
    </TableLabel>
  </div>
);

export default ValueLabeled;
