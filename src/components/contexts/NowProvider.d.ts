import React from 'react';
/**
 * Now is a context that is meant to provide the current Date, or some
 * reference for whatever 'now' is considered to be.
 */
export declare const Now: React.Context<Date>;
export interface ProvideTickEverySecondProps {
    children: React.ReactNode | React.ReactNode[];
}
/**
 * ProvideTickEverySecond is a component that will update the Now context
 * every second.
 *
 * @todo this setInterval **might** be called at most once before being
 *       cleared.  Perhaps a setTimeout could be more appropriate in such
 *       cases.  It would also allow us to attempt to provide the next second
 *       at the top of the second instead of just every second.
 */
export declare const ProvideTickEverySecond: React.FC<ProvideTickEverySecondProps>;
