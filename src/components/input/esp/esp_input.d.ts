import { default as MonetaryValue } from '../../../../../../../../../../../src/models/block_explorer/monetary_value';
import { default as React } from 'react';
import { TextEditingProps } from '../text/text';
export interface ESPInputProps extends Omit<TextEditingProps, 'value' | 'onChange'> {
    value?: null | MonetaryValue;
    onChange?: (event: React.ChangeEvent<HTMLInputElement> | React.SyntheticEvent<HTMLInputElement, Event>, value: MonetaryValue) => void;
}
export declare const ESPInput: React.FC<ESPInputProps>;
