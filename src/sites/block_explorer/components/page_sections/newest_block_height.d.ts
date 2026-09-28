/**
 * useNewestBlockHeight returns the newest block's height, refreshed every few
 * seconds, or null until the query service has answered (and if it cannot).
 *
 * The service reports a block count, so the newest block is one below it. The
 * height never moves backwards, as replicas behind a load balancer can lag.
 */
export declare function useNewestBlockHeight(): null | number;
