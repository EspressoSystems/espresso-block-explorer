import { default as React } from 'react';
/** NotFoundPage is shown for any address the site has no page for. */
export declare const NotFoundPage: React.FC;
export interface ErrorPageProps {
    onRetry: () => void;
}
/** ErrorPage is shown when a page fails while rendering. */
export declare const ErrorPage: React.FC<ErrorPageProps>;
