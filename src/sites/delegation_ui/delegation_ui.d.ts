import { default as React } from 'react';
interface DelegationPageProps {
    className?: string;
    /**
     * validatorAddress selects the validator details view when it is not
     * undefined (null means the URL had no address). Both views share the same
     * contexts, so switching between them keeps the loaded validator data.
     */
    validatorAddress?: null | string;
}
/**
 * DelegationUI is a component that represents the entire Delegation UI
 * self contained page.
 */
declare const DelegationUI: React.FC<DelegationPageProps>;
export default DelegationUI;
