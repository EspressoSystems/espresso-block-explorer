import { default as React } from '../../../../node_modules/react';

/**
 * ReducedStorageProvider is a context that provides the storage mechanism that
 * the EngageSteps will use to persist their state.
 */
export declare const ReducedStorageProvider: React.Context<Pick<Storage, "getItem" | "setItem" | "removeItem">>;
export interface ProvideLocalStorageProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideLocalStorage is a component that provides the ReducedStorageProvider
 * of the localStorage.
 */
export declare const ProvideLocalStorage: React.FC<ProvideLocalStorageProps>;
interface InscriptionsPageProps {
    backgroundImage: React.ReactNode;
    escapeTheWalledGardensImage: React.ReactNode;
}
/**
 * TweetURLProvider is a context that provides the URL of the tweet that the
 * user is meant to share as part of the guided engagement journey.
 */
export declare const TweetURLProvider: React.Context<URL | null>;
/**
 * InscriptionsPage represents the entire Inscriptions page.  This is the main
 * entry point for the Inscriptions page.
 */
declare const InscriptionsPage: React.FC<InscriptionsPageProps>;
export default InscriptionsPage;
