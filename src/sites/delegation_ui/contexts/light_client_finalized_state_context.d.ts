import { LightClientState } from '../../../contracts/light_client/light_client_interface';
import { default as React } from 'react';
export declare const LightClientFinalizedStateContext: React.Context<LightClientState | null>;
export declare const RetrieveLightClientFinalizedState: React.FC<React.PropsWithChildren>;
