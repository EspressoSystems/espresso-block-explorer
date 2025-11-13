import { Delegation } from '../../../../../../../../../../../src/service/espresso_l1_validator_service/common/delegation';
import { default as React } from 'react';
/**
 * CurrentDelegationsContext provides a React Context
 * for the current map of validators with whom we are currently delegated.
 */
export declare const CurrentDelegationsContext: React.Context<Map<`0x${string}`, Delegation>>;
/**
 * DeriveCurrentDelegations is a React Component that
 * derives the current mapping of all of the current wallet's delegations.
 */
export declare const DeriveCurrentDelegations: React.FC<React.PropsWithChildren>;
