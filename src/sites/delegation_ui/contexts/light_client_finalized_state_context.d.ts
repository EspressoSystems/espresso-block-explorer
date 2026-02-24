import { LightClientState } from '../../../contracts/light_client/light_client_interface';
import { default as React } from 'react';
/**
 * LightClientFinalizedStateContext is a context holding the LightClientState
 * that is currently provided for the rest of the React app.
 */
export declare const LightClientFinalizedStateContext: React.Context<LightClientState | null>;
export declare const RetrieveLightClientFinalizedState: React.FC<React.PropsWithChildren>;
