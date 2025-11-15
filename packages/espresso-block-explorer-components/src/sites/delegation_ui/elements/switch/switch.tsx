import './switch.css';

export interface BaseSwitchProps {
  value?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export const BaseSwitch: React.FC<BaseSwitchProps> = (props) => {
  return (
    <input
      type="checkbox"
      className="bswitch"
      checked={props.value}
      disabled={props.disabled}
      onChange={(event) => {
        if (!props.onChange) {
          return;
        }

        props.onChange(event.target.checked);
      }}
    />
  );
};
