import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoExplorerBlockDetail } from '../../../../../../../../../../../../src/service/hotshot_query_service/cappuccino/explorer/block_detail';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';

export declare const kCappuccinoLatestBlockSnapshotType: "LatestBlockSnapshot";
/**
 * CappuccinoLatestBlockSnapshot is a response from the Cappuccino node
 * validator that contains the latest block that has been seen by the
 * node validator.
 */
export declare class CappuccinoLatestBlockSnapshot extends CappuccinoNodeValidatorResponse {
    readonly latestBlock: CappuccinoExplorerBlockDetail;
    get type(): "LatestBlockSnapshot";
    constructor(latestBlock: CappuccinoExplorerBlockDetail);
    toJSON(): {
        latestBlock: unknown;
        type: "LatestBlockSnapshot";
    };
}
declare class CappuccinoLatestBlockSnapshotDecoder implements Converter<unknown, CappuccinoLatestBlockSnapshot> {
    convert(input: unknown): CappuccinoLatestBlockSnapshot;
}
declare class CappuccinoLatestBlockSnapshotEncoder implements Converter<CappuccinoLatestBlockSnapshot> {
    convert(input: CappuccinoLatestBlockSnapshot): {
        latestBlock: unknown;
        type: "LatestBlockSnapshot";
    };
}
declare class CappuccinoLatestBlockSnapshotCodec extends TypeCheckingCodec<CappuccinoLatestBlockSnapshot, ReturnType<InstanceType<new () => CappuccinoLatestBlockSnapshotEncoder>['convert']>> {
    readonly encoder: CappuccinoLatestBlockSnapshotEncoder;
    readonly decoder: CappuccinoLatestBlockSnapshotDecoder;
}
export declare const cappuccinoLatestBlockSnapshotCodec: CappuccinoLatestBlockSnapshotCodec;
export {};
