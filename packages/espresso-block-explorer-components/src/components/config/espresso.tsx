import { EspressoAddresses } from '@/models/config/environment/espresso';
import React from 'react';

/**
 * EspressoConfigContext provides the current Espresso configuration for the
 * entire application.  It defaults to null, and should be supplied in order
 * for the interaction with the Web3 APIs to work effectively.
 */
export const EspressoConfigContext =
  React.createContext<null | EspressoAddresses>(null);
