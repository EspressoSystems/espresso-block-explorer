export interface BaseSwitchProps {
    value?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
}
export declare const BaseSwitch: React.FC<BaseSwitchProps>;
