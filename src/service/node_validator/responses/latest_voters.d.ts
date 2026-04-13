import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { BitVec } from '../../../../../../../../../../../src/service/hotshot_query_service';
import { default as NodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 */
export declare const kLatestVotersType: "LatestVoters";
/**
 * LatestVoters is a response from the node
 * validator that contains a snapshot of the voters in the network.
 */
export declare class LatestVoters extends NodeValidatorResponse {
    readonly latestVoter: BitVec;
    constructor(latestVoter: BitVec);
    toJSON(): {
        LatestVoters: {
            order: string;
            head: {
                width: number;
                index: number;
            };
            bits: number;
            data: `0x${string}`[];
        };
    };
}
declare class LatestVotersDecoder implements Converter<unknown, LatestVoters> {
    convert(input: unknown): LatestVoters;
}
declare class LatestVotersEncoder implements Converter<LatestVoters> {
    convert(input: LatestVoters): {
        LatestVoters: {
            order: string;
            head: {
                width: number;
                index: number;
            };
            bits: number;
            data: `0x${string}`[];
        };
    };
}
declare class LatestVotersCodec extends TypeCheckingCodec<LatestVoters, ReturnType<InstanceType<new () => LatestVotersEncoder>['convert']>> {
    readonly encoder: LatestVotersEncoder;
    readonly decoder: LatestVotersDecoder;
}
export declare const latestVotersCodec: LatestVotersCodec;
export {};
