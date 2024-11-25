import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { WebWorkerProxyResponse } from '../../../../../../../../../../../../src/models/web_worker/web_worker_proxy_response';
import { default as CappuccinoInscriptionResponse } from './inscription_response';

export declare const kInscriptionResponseType: "InscriptionResponse";
export declare class InscriptionServiceResponse extends WebWorkerProxyResponse {
    readonly response: CappuccinoInscriptionResponse;
    get type(): string;
    constructor(response: CappuccinoInscriptionResponse);
    toJson(): {
        InscriptionResponse: {
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
    };
}
declare class InscriptionServiceResponseEncoder implements Converter<InscriptionServiceResponse> {
    convert(input: InscriptionServiceResponse): {
        InscriptionResponse: {
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
    };
}
declare class InscriptionServiceResponseDecoder implements Converter<unknown, InscriptionServiceResponse> {
    convert(input: unknown): InscriptionServiceResponse;
}
declare class InscriptionServiceResponseCodec extends TypeCheckingCodec<InscriptionServiceResponse, ReturnType<InstanceType<new () => InscriptionServiceResponseEncoder>['convert']>> {
    readonly encoder: InscriptionServiceResponseEncoder;
    readonly decoder: InscriptionServiceResponseDecoder;
}
export declare const inscriptionServiceResponseCodec: InscriptionServiceResponseCodec;
declare class InscriptionResponseToWebWorkerProxyResponseConverter implements Converter<CappuccinoInscriptionResponse, WebWorkerProxyResponse> {
    convert(input: CappuccinoInscriptionResponse): WebWorkerProxyResponse;
}
export declare const inscriptionResponseToWebWorkerProxyResponseConverter: InscriptionResponseToWebWorkerProxyResponseConverter;
export {};
