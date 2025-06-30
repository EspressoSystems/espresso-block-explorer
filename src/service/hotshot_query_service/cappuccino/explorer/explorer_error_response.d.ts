import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { EspressoError } from '../../../../../../../../../../../../src/errors/index';
/**
 * CappuccinoExplorerErrorResponse is a response that is returned when an error
 * occurs while querying the Cappuccino Explorer API.
 */
export declare class CappuccinoExplorerErrorResponse {
    readonly explorer: CappuccinoExplorerErrorWrapper;
    constructor(explorer: CappuccinoExplorerErrorWrapper);
    toJSON(): {
        Explorer: {
            Explorer: unknown;
        };
    };
}
declare class CappuccinoExplorerErrorResponseDecoder implements Converter<unknown, CappuccinoExplorerErrorResponse> {
    convert(input: unknown): CappuccinoExplorerErrorResponse;
}
declare class CappuccinoExplorerErrorResponseEncoder implements Converter<CappuccinoExplorerErrorResponse> {
    convert(input: CappuccinoExplorerErrorResponse): {
        Explorer: {
            Explorer: unknown;
        };
    };
}
declare class CappuccinoExplorerErrorResponseCodec extends TypeCheckingCodec<CappuccinoExplorerErrorResponse, ReturnType<InstanceType<new () => CappuccinoExplorerErrorResponseEncoder>['convert']>> {
    readonly encoder: CappuccinoExplorerErrorResponseEncoder;
    readonly decoder: CappuccinoExplorerErrorResponseDecoder;
}
/**
 * CappuccinoExplorerErrorWrapper is a wrapper around an EspressoError that
 * occurred while querying the Cappuccino Explorer API.
 */
export declare class CappuccinoExplorerErrorWrapper {
    readonly error: EspressoError;
    constructor(error: EspressoError);
    toJSON(): {
        Explorer: unknown;
    };
}
declare class CappuccinoExplorerErrorWrapperDecoder implements Converter<unknown, CappuccinoExplorerErrorWrapper> {
    convert(input: unknown): CappuccinoExplorerErrorWrapper;
}
declare class CappuccinoExplorerErrorWrapperEncoder implements Converter<CappuccinoExplorerErrorWrapper> {
    convert(input: CappuccinoExplorerErrorWrapper): {
        Explorer: unknown;
    };
}
declare class CappuccinoExplorerErrorWrapperCodec extends TypeCheckingCodec<CappuccinoExplorerErrorWrapper, ReturnType<InstanceType<new () => CappuccinoExplorerErrorWrapperEncoder>['convert']>> {
    readonly encoder: CappuccinoExplorerErrorWrapperEncoder;
    readonly decoder: CappuccinoExplorerErrorWrapperDecoder;
}
export declare const cappuccinoExplorerErrorWrapperCodec: CappuccinoExplorerErrorWrapperCodec;
export declare const cappuccinoExplorerErrorResponseCodec: CappuccinoExplorerErrorResponseCodec;
declare class UnwrappedCappuccinoExplorerErrorResponseDecoder implements Converter<unknown, EspressoError> {
    convert(input: unknown): EspressoError;
}
export declare const unwrappedCappuccinoExplorerErrorResponseDecoder: UnwrappedCappuccinoExplorerErrorResponseDecoder;
export {};
