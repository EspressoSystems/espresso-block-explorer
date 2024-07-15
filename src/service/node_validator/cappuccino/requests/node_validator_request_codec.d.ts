import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as CappuccinoNodeValidatorRequest } from './node_validator_request';

declare class CappuccinoNodeValidatorRequestDecoder implements Converter<unknown, CappuccinoNodeValidatorRequest> {
    convert(input: unknown): CappuccinoNodeValidatorRequest;
}
declare class CappuccinoNodeValidatorRequestEncoder implements Converter<CappuccinoNodeValidatorRequest> {
    convert(input: CappuccinoNodeValidatorRequest): {
        type: "NodeIdentityRollCall";
    };
}
declare class CappuccinoNodeValidatorRequestCodec extends TypeCheckingCodec<CappuccinoNodeValidatorRequest, ReturnType<InstanceType<new () => CappuccinoNodeValidatorRequestEncoder>['convert']>> {
    readonly encoder: CappuccinoNodeValidatorRequestEncoder;
    readonly decoder: CappuccinoNodeValidatorRequestDecoder;
}
export declare const cappuccinoNodeValidatorRequestCodec: CappuccinoNodeValidatorRequestCodec;
export {};
