import { default as React } from 'react';
/**
 * Sections enum defines the different sections available in the Delegation UI.
 */
export declare enum Sections {
    all = 0,
    myStakes = 1
}
/**
 * CurrentSectionContext is a React context that holds the current section
 * being viewed in the Delegation UI.
 */
export declare const CurrentSectionContext: React.Context<Sections>;
/**
 * SetCurrentSectionContext is a React context that holds a setter function
 * to update the current section being viewed in the Delegation UI.
 */
export declare const SetCurrentSectionContext: React.Context<React.Dispatch<React.SetStateAction<Sections>>>;
/**
 * ProvideSectionSelection is a React component that provides the current
 * section selection context to its children.
 */
export declare const ProvideSectionSelection: React.FC<React.PropsWithChildren>;
