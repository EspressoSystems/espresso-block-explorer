import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as CappuccinoNodeIdentity } from '../node_identity';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kCappuccinoLatestNodeIdentityType is the type string for the
 * CappuccinoLatestNodeIdentity class.
 */
export declare const kCappuccinoLatestNodeIdentityType: "LatestNodeIdentity";
/**
 * CappuccinoLatestNodeIdentity is a response from the Cappuccino node
 * validator that contains a real-time update for one of the Node
 * Identities in the network.
 */
export declare class CappuccinoLatestNodeIdentity extends CappuccinoNodeValidatorResponse {
    readonly nodeIdentity: CappuccinoNodeIdentity;
    constructor(nodeIdentity: CappuccinoNodeIdentity);
    toJSON(): {
        LatestNodeIdentity: unknown;
    };
}
declare class CappuccinoLatestNodeIdentityDecoder implements Converter<unknown, CappuccinoLatestNodeIdentity> {
    convert(input: unknown): CappuccinoLatestNodeIdentity;
}
declare class CappuccinoLatestNodeIdentityEncoder implements Converter<CappuccinoLatestNodeIdentity> {
    convert(input: CappuccinoLatestNodeIdentity): {
        LatestNodeIdentity: unknown;
    };
}
declare class CappuccinoLatestNodeIdentityCodec extends TypeCheckingCodec<CappuccinoLatestNodeIdentity, ReturnType<InstanceType<new () => CappuccinoLatestNodeIdentityEncoder>['convert']>> {
    readonly encoder: CappuccinoLatestNodeIdentityEncoder;
    readonly decoder: CappuccinoLatestNodeIdentityDecoder;
}
export declare const cappuccinoLatestNodeIdentityCodec: CappuccinoLatestNodeIdentityCodec;
export {};
