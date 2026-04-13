import { WebWorkerRequest } from '../../../../../../../../../../../../src/service/espresso_staking_api_service/web_worker_types';
import { HotShotQueryServiceNodeAPI } from '../node_api';
export type NodeRequest<Method extends keyof HotShotQueryServiceNodeAPI = keyof HotShotQueryServiceNodeAPI> = WebWorkerRequest<'node', Method, Parameters<HotShotQueryServiceNodeAPI[Method]>>;
export declare class WebWorkerProxyNodeAPI {
    private service;
    constructor(service: HotShotQueryServiceNodeAPI);
    getStakeTableForEpoch(epoch: number): Promise<{
        stake_table_entry: {
            stake_key: string;
            stake_amount: `0x${string}`;
        };
        state_ver_key: string;
    }[]>;
    getValidatorsAtEpoch(epoch: number): Promise<Record<string, unknown>>;
    handleRequest(request: NodeRequest): Promise<Record<string, unknown> | {
        stake_table_entry: {
            stake_key: string;
            stake_amount: `0x${string}`;
        };
        state_ver_key: string;
    }[]>;
}
