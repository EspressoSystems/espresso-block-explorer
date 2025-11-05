import { addClassToClassName } from '@/components/higher_order';
import React from 'react';
import ButtonLarge from './button_large';
import './segmented_button.css';

export interface ButtonSegment<T> {
  value: T;
  label: React.ReactNode;
}

export interface SegmentedButtonProps<T> {
  className?: string;
  selected: T;
  onSelectionChange: (value: T) => void;
  segments: ButtonSegment<T>[];
}

function useSegmentedButtonState<T>(initialValue: T) {
  const [selectedValue, setSelectedValue] = React.useState<T>(initialValue);
  return [selectedValue, setSelectedValue] as const;
}

const CurrentButtonSegmentContext =
  React.createContext<null | ButtonSegment<unknown>>(null);

const CurrentButtonSegmentSetterContext = React.createContext<
  (value: unknown) => void
>(() => {});

const CurrentButtonSegmentValueContext = React.createContext<null | unknown>(
  null,
);

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
