import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { default as NodeValidatorRequest } from './node_validator_request';
declare class NodeValidatorRequestCodec extends TypeCheckingCodec<NodeValidatorRequest, string> {
    readonly encoder: Converter<NodeValidatorRequest, string>;
    readonly decoder: Converter<string, NodeValidatorRequest>;
}
export declare const nodeValidatorRequestCodec: NodeValidatorRequestCodec;
export {};
