import React from 'react';

/**
 * ProofOfStakeReleasedContext is a React Context that dictates whether the
 * functionality provided by the `Proof of Stake` upgrade is available or not.
 *
 * This acts as a feature flag that prevents certain calls from completing.
 */
export const ProofOfStakeReleasedContext = React.createContext<boolean>(false);
