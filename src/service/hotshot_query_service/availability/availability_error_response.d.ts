import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * AvailabilityErrorResponse is a response that is returned when an error
 * occurs while querying the Availability API.
 */
export declare class AvailabilityErrorResponse {
    readonly availability: unknown;
    constructor(availability: unknown);
    toJSON(): {
        Availability: unknown;
    };
}
declare class AvailabilityErrorResponseDecoder implements Converter<unknown, AvailabilityErrorResponse> {
    convert(input: unknown): AvailabilityErrorResponse;
}
declare class AvailabilityErrorResponseEncoder implements Converter<AvailabilityErrorResponse> {
    convert(input: AvailabilityErrorResponse): {
        Availability: unknown;
    };
}
declare class AvailabilityErrorResponseCodec extends TypeCheckingCodec<AvailabilityErrorResponse, ReturnType<InstanceType<new () => AvailabilityErrorResponseEncoder>['convert']>> {
    readonly encoder: AvailabilityErrorResponseEncoder;
    readonly decoder: AvailabilityErrorResponseDecoder;
}
export declare const availabilityErrorResponseCodec: AvailabilityErrorResponseCodec;
declare class UnwrappedAvailabilityErrorResponseDecoder implements Converter<unknown, unknown> {
    convert(input: unknown): unknown;
}
export declare const unwrappedAvailabilityErrorResponseDecoder: UnwrappedAvailabilityErrorResponseDecoder;
export {};
