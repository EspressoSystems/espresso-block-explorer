import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { ExplorerBlockDetail } from '../../../../../../../../../../../src/service/hotshot_query_service';
import { default as NodeValidatorResponse } from './node_validator_response';
export declare const kLatestBlockType: "LatestBlock";
/**
 * LatestBlock is a response from the node
 * validator that contains the latest block that has been seen by the
 * node validator.
 */
export declare class LatestBlock extends NodeValidatorResponse {
    readonly latestBlock: ExplorerBlockDetail;
    constructor(latestBlock: ExplorerBlockDetail);
    toJSON(): {
        LatestBlock: unknown;
    };
}
declare class LatestBlockDecoder implements Converter<unknown, LatestBlock> {
    convert(input: unknown): LatestBlock;
}
declare class LatestBlockEncoder implements Converter<LatestBlock> {
    convert(input: LatestBlock): {
        LatestBlock: unknown;
    };
}
declare class LatestBlockCodec extends TypeCheckingCodec<LatestBlock, ReturnType<InstanceType<new () => LatestBlockEncoder>['convert']>> {
    readonly encoder: LatestBlockEncoder;
    readonly decoder: LatestBlockDecoder;
}
export declare const latestBlockCodec: LatestBlockCodec;
export {};
