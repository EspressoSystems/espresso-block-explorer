import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as CappuccinoInscriptionRequest } from './inscription_request';

declare class CappuccinoInscriptionRequestCodec extends TypeCheckingCodec<CappuccinoInscriptionRequest, unknown> {
    readonly encoder: Converter<CappuccinoInscriptionRequest, unknown>;
    readonly decoder: Converter<string, CappuccinoInscriptionRequest>;
}
export declare const cappuccinoInscriptionRequestCodec: CappuccinoInscriptionRequestCodec;
export {};
