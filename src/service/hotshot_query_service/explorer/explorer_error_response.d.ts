import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * ExplorerErrorResponse is a response that is returned when an error
 * occurs while querying the Explorer API.
 */
export declare class ExplorerErrorResponse {
    readonly explorer: ExplorerErrorWrapper;
    constructor(explorer: ExplorerErrorWrapper);
    toJSON(): {
        Explorer: {
            Explorer: unknown;
        };
    };
}
declare class ExplorerErrorResponseDecoder implements Converter<unknown, ExplorerErrorResponse> {
    convert(input: unknown): ExplorerErrorResponse;
}
declare class ExplorerErrorResponseEncoder implements Converter<ExplorerErrorResponse> {
    convert(input: ExplorerErrorResponse): {
        Explorer: {
            Explorer: unknown;
        };
    };
}
declare class ExplorerErrorResponseCodec extends TypeCheckingCodec<ExplorerErrorResponse, ReturnType<InstanceType<new () => ExplorerErrorResponseEncoder>['convert']>> {
    readonly encoder: ExplorerErrorResponseEncoder;
    readonly decoder: ExplorerErrorResponseDecoder;
}
/**
 * ExplorerErrorWrapper is a wrapper around an EspressoError that
 * occurred while querying the Explorer API.
 */
export declare class ExplorerErrorWrapper {
    readonly error: unknown;
    constructor(error: unknown);
    toJSON(): {
        Explorer: unknown;
    };
}
declare class ExplorerErrorWrapperDecoder implements Converter<unknown, ExplorerErrorWrapper> {
    convert(input: unknown): ExplorerErrorWrapper;
}
declare class ExplorerErrorWrapperEncoder implements Converter<ExplorerErrorWrapper> {
    convert(input: ExplorerErrorWrapper): {
        Explorer: unknown;
    };
}
declare class ExplorerErrorWrapperCodec extends TypeCheckingCodec<ExplorerErrorWrapper, ReturnType<InstanceType<new () => ExplorerErrorWrapperEncoder>['convert']>> {
    readonly encoder: ExplorerErrorWrapperEncoder;
    readonly decoder: ExplorerErrorWrapperDecoder;
}
export declare const explorerErrorWrapperCodec: ExplorerErrorWrapperCodec;
export declare const explorerErrorResponseCodec: ExplorerErrorResponseCodec;
declare class UnwrappedExplorerErrorResponseDecoder implements Converter<unknown, unknown> {
    convert(input: unknown): unknown;
}
export declare const unwrappedExplorerErrorResponseDecoder: UnwrappedExplorerErrorResponseDecoder;
export {};
