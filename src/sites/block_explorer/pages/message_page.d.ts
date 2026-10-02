import { default as React } from 'react';
interface MessageContentProps {
    title: React.ReactNode;
    message: React.ReactNode;
    /** The buttons offered below the message. */
    children: React.ReactNode;
}
/**
 * MessageContent takes the place of a page's content to explain what happened
 * and offer where to go next.
 */
export declare const MessageContent: React.FC<MessageContentProps>;
/** NotFoundPage is shown for any address the site has no page for. */
export declare const NotFoundPage: React.FC;
export interface ErrorPageProps {
    onRetry: () => void;
}
/** ErrorPage is shown when a page fails while rendering. */
export declare const ErrorPage: React.FC<ErrorPageProps>;
export {};
