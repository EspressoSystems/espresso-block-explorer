import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoAPIBitVec } from '../../../../../../../../../../../../src/service/hotshot_query_service';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 */
export declare const kCappuccinoLatestVotersType: "LatestVoters";
/**
 * CappuccinoLatestVoters is a response from the Cappuccino node
 * validator that contains a snapshot of the voters in the network.
 */
export declare class CappuccinoLatestVoters extends CappuccinoNodeValidatorResponse {
    readonly latestVoter: CappuccinoAPIBitVec;
    constructor(latestVoter: CappuccinoAPIBitVec);
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
declare class CappuccinoLatestVotersDecoder implements Converter<unknown, CappuccinoLatestVoters> {
    convert(input: unknown): CappuccinoLatestVoters;
}
declare class CappuccinoLatestVotersEncoder implements Converter<CappuccinoLatestVoters> {
    convert(input: CappuccinoLatestVoters): {
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
declare class CappuccinoLatestVotersCodec extends TypeCheckingCodec<CappuccinoLatestVoters, ReturnType<InstanceType<new () => CappuccinoLatestVotersEncoder>['convert']>> {
    readonly encoder: CappuccinoLatestVotersEncoder;
    readonly decoder: CappuccinoLatestVotersDecoder;
}
export declare const cappuccinoLatestVotersCodec: CappuccinoLatestVotersCodec;
export {};
