import { EspressoAddresses } from '../../../../../../../../../../src/models/config/environment/espresso';
import { default as React } from 'react';
/**
 * EspressoConfigContext provides the current Espresso configuration for the
 * entire application.  It defaults to null, and should be supplied in order
 * for the interaction with the Web3 APIs to work effectively.
 */
export declare const EspressoConfigContext: React.Context<EspressoAddresses | null>;
