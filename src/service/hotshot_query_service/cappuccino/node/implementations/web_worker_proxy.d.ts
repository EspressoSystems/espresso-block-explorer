import { WebWorkerRequest } from '../../../../../../../../../../../../../src/service/espresso_l1_validator_service/web_worker_types';
import { CappuccinoHotShotQueryServiceNodeAPI } from '../node_api';
export type NodeRequest<Method extends keyof CappuccinoHotShotQueryServiceNodeAPI = keyof CappuccinoHotShotQueryServiceNodeAPI> = WebWorkerRequest<'node', Method, Parameters<CappuccinoHotShotQueryServiceNodeAPI[Method]>>;
export declare class WebWorkerProxyNodeAPI {
    private service;
    constructor(service: CappuccinoHotShotQueryServiceNodeAPI);
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
