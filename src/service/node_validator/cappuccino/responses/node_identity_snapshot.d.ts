import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as CappuccinoNodeIdentity } from '../node_identity';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';

export declare const kCappuccinoNodeIdentitySnapshotType: "NodeIdentitySnapshot";
/**
 * CappuccinoNodeIdentitySnapshot is a response from the Cappuccino node
 * validator that contains a snapshot of the identities of all current known
 * nodes in the network.
 */
export declare class CappuccinoNodeIdentitySnapshot extends CappuccinoNodeValidatorResponse {
    readonly nodes: CappuccinoNodeIdentity[];
    get type(): "NodeIdentitySnapshot";
    constructor(nodes: CappuccinoNodeIdentity[]);
    toJSON(): {
        nodes: unknown[];
        type: "NodeIdentitySnapshot";
    };
}
declare class CappuccinoNodeIdentitySnapshotDecoder implements Converter<unknown, CappuccinoNodeIdentitySnapshot> {
    convert(input: unknown): CappuccinoNodeIdentitySnapshot;
}
declare class CappuccinoNodeIdentitySnapshotEncoder implements Converter<CappuccinoNodeIdentitySnapshot> {
    convert(input: CappuccinoNodeIdentitySnapshot): {
        nodes: unknown[];
        type: "NodeIdentitySnapshot";
    };
}
declare class CappuccinoNodeIdentitySnapshotCodec extends TypeCheckingCodec<CappuccinoNodeIdentitySnapshot, ReturnType<InstanceType<new () => CappuccinoNodeIdentitySnapshotEncoder>['convert']>> {
    readonly encoder: CappuccinoNodeIdentitySnapshotEncoder;
    readonly decoder: CappuccinoNodeIdentitySnapshotDecoder;
}
export declare const cappuccinoNodeIdentitySnapshotCodec: CappuccinoNodeIdentitySnapshotCodec;
export {};
