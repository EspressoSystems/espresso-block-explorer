import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as CappuccinoInscriptionResponse } from './inscription_response';

declare class CappuccinoInscriptionResponseDecoder implements Converter<unknown, CappuccinoInscriptionResponse> {
    convert(input: unknown): CappuccinoInscriptionResponse;
}
declare class CappuccinoInscriptionResponseEncoder implements Converter<CappuccinoInscriptionResponse> {
    convert(input: CappuccinoInscriptionResponse): {
        LatestInscription: {
            inscription: unknown;
            chain_details: unknown;
        };
    } | {
        RetrievedInscriptionsForWalletAddress: {
            inscription: unknown;
            chain_details: unknown;
        }[];
    } | {
        Stats: unknown;
    };
}
declare class CappuccinoInscriptionResponseCodec extends TypeCheckingCodec<CappuccinoInscriptionResponse, ReturnType<InstanceType<new () => CappuccinoInscriptionResponseEncoder>['convert']>> {
    readonly encoder: CappuccinoInscriptionResponseEncoder;
    readonly decoder: CappuccinoInscriptionResponseDecoder;
}
export declare const cappuccinoInscriptionResponseCodec: CappuccinoInscriptionResponseCodec;
export {};
