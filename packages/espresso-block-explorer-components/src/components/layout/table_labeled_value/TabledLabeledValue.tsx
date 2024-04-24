import { addClassToClassName } from '@/higher_order';
import { WithUiSmall, WithUiText600 } from '@/typography/typography';
import React from 'react';
import './tabled_labeled_value.css';

const LabelText600 = WithUiText600('label');
const DivTextSmall = WithUiSmall('div');

interface LabelProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * Label represents the Label portion of the TabledLabeledValue component.
 * It ensures that text rendered within the label has the correct typography.
 */
const Label: React.FC<LabelProps> = (props) => (
  <LabelText600>{props.children}</LabelText600>
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
  <DivTextSmall className="value">{props.children}</DivTextSmall>
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
const TabledLabeledValue: React.FC<TableLabeledValueProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    {...props}
    className={addClassToClassName(className, 'tabled-labeled-value')}
  >
    <Label className="label" key={0}>
      {children[0]}
    </Label>
    <Value className="value" key={1}>
      {children[1]}
    </Value>
  </div>
);

export default TabledLabeledValue;
