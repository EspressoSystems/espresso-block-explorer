import React from 'react';

/**
 * EspressoCurrentEpochContext provides a React Context
 * for the last queried epoch of the block chain.
 */
export const EspressoCurrentEpochContext = React.createContext<bigint>(0n);
