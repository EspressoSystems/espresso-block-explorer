import { addClassToClassName } from '@/components/higher_order';
import React from 'react';
import ButtonLarge from './button_large';
import './segmented_button.css';

/**
 * ButtonSegment represents a single segment within the segmented button
 * group.
 */
export interface ButtonSegment<T> {
  value: T;
  label: React.ReactNode;
}

/**
 * SegmentedButtonProps defines the properties for the SegmentedButton
 * component.
 */
export interface SegmentedButtonProps<T> {
  className?: string;
  selected: T;
  onSelectionChange: (value: T) => void;
  segments: ButtonSegment<T>[];
}

/**
 * useSegmentedButtonState is a custom hook that manages the state of the
 * currently selected value in the segmented button group.
 */
function useSegmentedButtonState<T>(initialValue: T) {
  const [selectedValue, setSelectedValue] = React.useState<T>(initialValue);
  return [selectedValue, setSelectedValue] as const;
}

/**
 * CurrentButtonSegmentContext holds the current button segment being
 * rendered within the segmented button group.
 */
const CurrentButtonSegmentContext =
  React.createContext<null | ButtonSegment<unknown>>(null);

/**
 * CurrentButtonSegmentSetterContext holds the setter function to update
 * the currently selected value in the segmented button group.
 */
const CurrentButtonSegmentSetterContext = React.createContext<
  (value: unknown) => void
>(() => {});

/**
 * CurrentButtonSegmentValueContext holds the currently selected value
 * in the segmented button group.
 */
const CurrentButtonSegmentValueContext = React.createContext<null | unknown>(
  null,
);

/**
 * SegmentedButton is a button group that allows the user to select one of
 * multiple segments. Each segment is represented by a button. The selected
 * segment is highlighted.
 */
export function SegmentedButton<T>(props: SegmentedButtonProps<T>) {
  const [state, setState] = useSegmentedButtonState(props.selected);

  return (
    <CurrentButtonSegmentValueContext.Provider value={state}>
      <CurrentButtonSegmentSetterContext.Provider
        value={(value) => {
          setState(value as T);
          props.onSelectionChange(value as T);
        }}
      >
        <div className={addClassToClassName(props.className, 'btn-segmented')}>
          {props.segments.map((segment, index) => (
            <CurrentButtonSegmentContext.Provider value={segment} key={index}>
              <IndividualSegmentButton />
            </CurrentButtonSegmentContext.Provider>
          ))}
        </div>
      </CurrentButtonSegmentSetterContext.Provider>
    </CurrentButtonSegmentValueContext.Provider>
  );
}

/**
 * IndividualSegmentButton represents a single button within the segmented
 * button group.
 */
const IndividualSegmentButton: React.FC = () => {
  const segment = React.useContext(CurrentButtonSegmentContext);
  const currentValue = React.useContext(CurrentButtonSegmentValueContext);
  const selectValue = React.useContext(CurrentButtonSegmentSetterContext);
  if (!segment) {
    return null;
  }

  return (
    <ButtonLarge
      className="btn-segment"
      data-selected={segment.value === currentValue}
      onClick={() => {
        selectValue(segment.value);
      }}
    >
      {segment.label}
    </ButtonLarge>
  );
};
