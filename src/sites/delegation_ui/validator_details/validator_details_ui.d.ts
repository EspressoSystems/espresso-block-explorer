import { default as React } from 'react';
export interface ValidatorDetailsViewProps {
    /**
     * address is the validator address taken from the page URL.
     */
    address: null | string;
}
/**
 * ValidatorDetailsView is the Delegation UI view for a single validator. It
 * is rendered by DelegationUI, so it shares the already loaded validator
 * data with the rest of the Delegation UI.
 */
export declare const ValidatorDetailsView: React.FC<ValidatorDetailsViewProps>;
