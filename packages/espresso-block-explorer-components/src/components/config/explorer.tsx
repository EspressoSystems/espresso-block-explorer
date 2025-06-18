import { ExplorerConfig } from '@/models/config/environment/explorer';
import React from 'react';

/**
 * BlockExplorerConfigContext provides the current Block Explorer
 * configuration for the entire application. It defaults to null, and should
 * be supplied in order for the interaction with the Block Explorer to work
 * effectively.
 */
export const BlockExplorerConfigContext =
  React.createContext<null | ExplorerConfig>(null);
