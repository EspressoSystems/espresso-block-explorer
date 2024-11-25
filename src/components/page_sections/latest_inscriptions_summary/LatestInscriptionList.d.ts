import { default as React } from '../../../../../../node_modules/react';

/**
 * LatestInscriptionList is a component that displays the list of latest
 * inscriptions contained within the LatestInscriptionListProvider.  If
 * there are no inscriptions, then this component will render nothing.
 */
export declare const LatestInscriptionList: React.FC;
interface LatestInscriptionListPlaceholderProps {
    className?: string;
}
/**
 * LatestInscriptionListPlaceholder is a placeholder component that is used
 * to display a loading state for the LatestInscriptionList component.
 *
 * At the moment this displays nothing.
 */
export declare const LatestInscriptionListPlaceholder: React.FC<LatestInscriptionListPlaceholderProps>;
interface LatestInscriptionListContentProps {
}
/**
 * LatestInscriptionListContent is a component that displays the content of the
 * LatestInscriptionList component.  This component has props, and as a result
 * can have keys and the like attached to them.
 *
 * This provides a way to reference the content of the Inscriptions list
 * component without having direct access to it.
 */
export declare const LatestInscriptionListContent: React.FC<LatestInscriptionListContentProps>;
interface LatestInscriptionListProps {
    className?: string;
}
export declare const LatestInscriptionListAsyncHandler: React.FC<LatestInscriptionListProps>;
export {};
