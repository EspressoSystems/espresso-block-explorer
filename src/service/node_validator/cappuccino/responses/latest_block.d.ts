import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoExplorerBlockDetail } from '../../../../../../../../../../../../src/service/hotshot_query_service';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';
export declare const kCappuccinoLatestBlockType: "LatestBlock";
/**
 * CappuccinoLatestBlock is a response from the Cappuccino node
 * validator that contains the latest block that has been seen by the
 * node validator.
 */
export declare class CappuccinoLatestBlock extends CappuccinoNodeValidatorResponse {
    readonly latestBlock: CappuccinoExplorerBlockDetail;
    constructor(latestBlock: CappuccinoExplorerBlockDetail);
    toJSON(): {
        LatestBlock: unknown;
    };
}
declare class CappuccinoLatestBlockDecoder implements Converter<unknown, CappuccinoLatestBlock> {
    convert(input: unknown): CappuccinoLatestBlock;
}
declare class CappuccinoLatestBlockEncoder implements Converter<CappuccinoLatestBlock> {
    convert(input: CappuccinoLatestBlock): {
        LatestBlock: unknown;
    };
}
declare class CappuccinoLatestBlockCodec extends TypeCheckingCodec<CappuccinoLatestBlock, ReturnType<InstanceType<new () => CappuccinoLatestBlockEncoder>['convert']>> {
    readonly encoder: CappuccinoLatestBlockEncoder;
    readonly decoder: CappuccinoLatestBlockDecoder;
}
export declare const cappuccinoLatestBlockCodec: CappuccinoLatestBlockCodec;
export {};
