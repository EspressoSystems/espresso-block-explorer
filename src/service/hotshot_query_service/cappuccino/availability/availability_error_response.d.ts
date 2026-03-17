import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
/**
 * CappuccinoAvailabilityErrorResponse is a response that is returned when an error
 * occurs while querying the Cappuccino Availability API.
 */
export declare class CappuccinoAvailabilityErrorResponse {
    readonly availability: unknown;
    constructor(availability: unknown);
    toJSON(): {
        Availability: unknown;
    };
}
declare class CappuccinoAvailabilityErrorResponseDecoder implements Converter<unknown, CappuccinoAvailabilityErrorResponse> {
    convert(input: unknown): CappuccinoAvailabilityErrorResponse;
}
declare class CappuccinoAvailabilityErrorResponseEncoder implements Converter<CappuccinoAvailabilityErrorResponse> {
    convert(input: CappuccinoAvailabilityErrorResponse): {
        Availability: unknown;
    };
}
declare class CappuccinoAvailabilityErrorResponseCodec extends TypeCheckingCodec<CappuccinoAvailabilityErrorResponse, ReturnType<InstanceType<new () => CappuccinoAvailabilityErrorResponseEncoder>['convert']>> {
    readonly encoder: CappuccinoAvailabilityErrorResponseEncoder;
    readonly decoder: CappuccinoAvailabilityErrorResponseDecoder;
}
export declare const cappuccinoAvailabilityErrorResponseCodec: CappuccinoAvailabilityErrorResponseCodec;
declare class UnwrappedCappuccinoAvailabilityErrorResponseDecoder implements Converter<unknown, unknown> {
    convert(input: unknown): unknown;
}
export declare const unwrappedCappuccinoAvailabilityErrorResponseDecoder: UnwrappedCappuccinoAvailabilityErrorResponseDecoder;
export {};
