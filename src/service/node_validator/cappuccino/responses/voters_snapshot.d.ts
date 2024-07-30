import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoAPIBitVec } from '../../../../../../../../../../../../src/service/hotshot_query_service';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';

/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kCappuccinoVotersSnapshotType is the type string for the
 * CappuccinoVotersSnapshot class.
 */
export declare const kCappuccinoVotersSnapshotType: "VotersSnapshot";
/**
 * CappuccinoVotersSnapshot is a response from the Cappuccino node
 * validator that contains a snapshot of the voters in the network.
 */
export declare class CappuccinoVotersSnapshot extends CappuccinoNodeValidatorResponse {
    readonly voters: CappuccinoAPIBitVec[];
    constructor(voters: CappuccinoAPIBitVec[]);
    toJSON(): {
        VotersSnapshot: {
            order: string;
            head: {
                width: number;
                index: number;
            };
            bits: number;
            data: number[];
        }[];
    };
}
declare class CappuccinoVotersSnapshotDecoder implements Converter<unknown, CappuccinoVotersSnapshot> {
    convert(input: unknown): CappuccinoVotersSnapshot;
}
declare class CappuccinoVotersSnapshotEncoder implements Converter<CappuccinoVotersSnapshot> {
    convert(input: CappuccinoVotersSnapshot): {
        VotersSnapshot: {
            order: string;
            head: {
                width: number;
                index: number;
            };
            bits: number;
            data: number[];
        }[];
    };
}
declare class CappuccinoVotersSnapshotCodec extends TypeCheckingCodec<CappuccinoVotersSnapshot, ReturnType<InstanceType<new () => CappuccinoVotersSnapshotEncoder>['convert']>> {
    readonly encoder: CappuccinoVotersSnapshotEncoder;
    readonly decoder: CappuccinoVotersSnapshotDecoder;
}
export declare const cappuccinoVotersSnapshotCodec: CappuccinoVotersSnapshotCodec;
export {};
