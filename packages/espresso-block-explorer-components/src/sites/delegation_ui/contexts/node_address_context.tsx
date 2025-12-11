import React from 'react';

/**
 * NodeAddressContext provides a React Context
 * for a node's address.
 */
export const NodeAddressContext = React.createContext<`0x${string}`>('0x');
