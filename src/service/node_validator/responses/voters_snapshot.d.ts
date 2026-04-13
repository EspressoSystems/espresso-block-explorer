import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { BitVec } from '../../../../../../../../../../../src/service/hotshot_query_service';
import { default as NodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kVotersSnapshotType is the type string for the
 * VotersSnapshot class.
 */
export declare const kVotersSnapshotType: "VotersSnapshot";
/**
 * VotersSnapshot is a response from the node
 * validator that contains a snapshot of the voters in the network.
 */
export declare class VotersSnapshot extends NodeValidatorResponse {
    readonly voters: BitVec[];
    constructor(voters: BitVec[]);
    toJSON(): {
        VotersSnapshot: {
            order: string;
            head: {
                width: number;
                index: number;
            };
            bits: number;
            data: `0x${string}`[];
        }[];
    };
}
declare class VotersSnapshotDecoder implements Converter<unknown, VotersSnapshot> {
    convert(input: unknown): VotersSnapshot;
}
declare class VotersSnapshotEncoder implements Converter<VotersSnapshot> {
    convert(input: VotersSnapshot): {
        VotersSnapshot: {
            order: string;
            head: {
                width: number;
                index: number;
            };
            bits: number;
            data: `0x${string}`[];
        }[];
    };
}
declare class VotersSnapshotCodec extends TypeCheckingCodec<VotersSnapshot, ReturnType<InstanceType<new () => VotersSnapshotEncoder>['convert']>> {
    readonly encoder: VotersSnapshotEncoder;
    readonly decoder: VotersSnapshotDecoder;
}
export declare const votersSnapshotCodec: VotersSnapshotCodec;
export {};
