import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as CappuccinoNodeValidatorRequest } from './node_validator_request';
declare class CappuccinoNodeValidatorRequestCodec extends TypeCheckingCodec<CappuccinoNodeValidatorRequest, string> {
    readonly encoder: Converter<CappuccinoNodeValidatorRequest, string>;
    readonly decoder: Converter<string, CappuccinoNodeValidatorRequest>;
}
export declare const cappuccinoNodeValidatorRequestCodec: CappuccinoNodeValidatorRequestCodec;
export {};
