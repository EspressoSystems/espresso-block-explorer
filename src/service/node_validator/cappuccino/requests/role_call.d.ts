import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as CappuccinoNodeValidatorRequest } from './node_validator_request';

export declare const kCappuccinoNodeIdentityRoleCallType: "NodeIdentityRollCall";
export declare class CappuccinoNodeIdentityRoleCall extends CappuccinoNodeValidatorRequest {
    get type(): "NodeIdentityRollCall";
    toJSON(): {
        type: "NodeIdentityRollCall";
    };
}
declare class CappuccinoNodeIdentityRoleCallDecoder implements Converter<unknown, CappuccinoNodeIdentityRoleCall> {
    convert(input: unknown): CappuccinoNodeIdentityRoleCall;
}
declare class CappuccinoNodeIdentityRoleCallEncoder implements Converter<CappuccinoNodeIdentityRoleCall> {
    convert(): {
        type: "NodeIdentityRollCall";
    };
}
declare class CappuccinoNodeIdentityRoleCallCodec extends TypeCheckingCodec<CappuccinoNodeIdentityRoleCall, ReturnType<InstanceType<new () => CappuccinoNodeIdentityRoleCallEncoder>['convert']>> {
    readonly encoder: CappuccinoNodeIdentityRoleCallEncoder;
    readonly decoder: CappuccinoNodeIdentityRoleCallDecoder;
}
export declare const cappuccinoNodeIdentityRoleCallCodec: CappuccinoNodeIdentityRoleCallCodec;
export {};
