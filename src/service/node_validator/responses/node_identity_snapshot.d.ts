import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { default as NodeIdentity } from '../node_identity';
import { default as NodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kNodeIdentitySnapshotType is the type string for the
 * NodeIdentitySnapshot class.
 */
export declare const kNodeIdentitySnapshotType: "NodeIdentitySnapshot";
/**
 * NodeIdentitySnapshot is a response from the node
 * validator that contains a snapshot of the identities of all current known
 * nodes in the network.
 */
export declare class NodeIdentitySnapshot extends NodeValidatorResponse {
    readonly nodes: NodeIdentity[];
    constructor(nodes: NodeIdentity[]);
    toJSON(): {
        NodeIdentitySnapshot: unknown[];
    };
}
declare class NodeIdentitySnapshotDecoder implements Converter<unknown, NodeIdentitySnapshot> {
    convert(input: unknown): NodeIdentitySnapshot;
}
declare class NodeIdentitySnapshotEncoder implements Converter<NodeIdentitySnapshot> {
    convert(input: NodeIdentitySnapshot): {
        NodeIdentitySnapshot: unknown[];
    };
}
declare class NodeIdentitySnapshotCodec extends TypeCheckingCodec<NodeIdentitySnapshot, ReturnType<InstanceType<new () => NodeIdentitySnapshotEncoder>['convert']>> {
    readonly encoder: NodeIdentitySnapshotEncoder;
    readonly decoder: NodeIdentitySnapshotDecoder;
}
export declare const nodeIdentitySnapshotCodec: NodeIdentitySnapshotCodec;
export {};
