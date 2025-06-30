import { default as React } from 'react';
interface CDNStatusProps {
    className?: string;
}
/**
 * CDNStatus is a component that represents the CDN's current status.
 * At the moment, we have no way of retrieving this information, or seeing
 * the current status of the CDN.  So for now this always just reports the
 * CDN as being online.
 */
export declare const CDNStatus: React.FC<CDNStatusProps>;
export {};
