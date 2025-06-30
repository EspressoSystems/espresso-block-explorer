import { StakeTableEntryWrapper } from '../../../../../../../../../src/models/espresso/stake_table/stake_table_entry_wrapper';
import { Validator } from '../../../../../../../../../src/models/espresso/stake_table/validator';
import { default as React } from 'react';
export declare const CurrentStakeTableContext: React.Context<Map<string, StakeTableEntryWrapper>>;
export declare const CurrentValidatorsContext: React.Context<Map<string, Validator>>;
interface ProvideCappuccinoNodeValidatorStreamsProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideCappuccinoNodeValidatorStream is a React Context Provider that will
 * setup the node validator state, and provide React Contexts to distribute
 * the underlying node validator data to the components on the Node Validator
 * Page.
 */
export declare const ProvideCappuccinoNodeValidatorStreams: React.FC<ProvideCappuccinoNodeValidatorStreamsProps>;
export {};
