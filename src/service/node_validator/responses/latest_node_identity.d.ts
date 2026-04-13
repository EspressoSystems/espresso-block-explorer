import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { default as NodeIdentity } from '../node_identity';
import { default as NodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kLatestNodeIdentityType is the type string for the
 * LatestNodeIdentity class.
 */
export declare const kLatestNodeIdentityType: "LatestNodeIdentity";
/**
 * LatestNodeIdentity is a response from the node
 * validator that contains a real-time update for one of the Node
 * Identities in the network.
 */
export declare class LatestNodeIdentity extends NodeValidatorResponse {
    readonly nodeIdentity: NodeIdentity;
    constructor(nodeIdentity: NodeIdentity);
    toJSON(): {
        LatestNodeIdentity: unknown;
    };
}
declare class LatestNodeIdentityDecoder implements Converter<unknown, LatestNodeIdentity> {
    convert(input: unknown): LatestNodeIdentity;
}
declare class LatestNodeIdentityEncoder implements Converter<LatestNodeIdentity> {
    convert(input: LatestNodeIdentity): {
        LatestNodeIdentity: unknown;
    };
}
declare class LatestNodeIdentityCodec extends TypeCheckingCodec<LatestNodeIdentity, ReturnType<InstanceType<new () => LatestNodeIdentityEncoder>['convert']>> {
    readonly encoder: LatestNodeIdentityEncoder;
    readonly decoder: LatestNodeIdentityDecoder;
}
export declare const latestNodeIdentityCodec: LatestNodeIdentityCodec;
export {};
