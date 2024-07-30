import { default as React } from '../../../../../../node_modules/react';

/**
 * BlockNavigation is a component that displays the current BlockID
 * and provides the corresponding Previous and Next block navigation
 * components.
 */
export declare const BlockNavigation: React.FC;
export declare const BlockDetailsContentPlaceholder: React.FC<BlockDetailsContentProps>;
interface BlockDetailsContentProps {
}
/**
 * BlockDetailsContext represents the component that displays all of the
 * information about the Block Detail.
 */
export declare const BlockDetailsContent: React.FC<BlockDetailsContentProps>;
interface ProvideBlockDetailsProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideBlockDetails consumes the DataContext in order to provide the
 * BlockDetailContext.  If no data is found, it will indicate as such.
 */
export declare const ProvideBlockDetails: React.FC<ProvideBlockDetailsProps>;
export {};
