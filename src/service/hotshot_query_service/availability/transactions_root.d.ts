import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * AvailabilityTransactionsRoot represents the transactions root in the
 * Availability API.
 */
export declare class AvailabilityTransactionsRoot {
    readonly root: number[];
    constructor(root: number[]);
    toJSON(): {
        root: number[];
    };
}
export declare class AvailabilityTransactionsRootDecoder implements Converter<unknown, AvailabilityTransactionsRoot> {
    convert(input: unknown): AvailabilityTransactionsRoot;
}
export declare class AvailabilityTransactionsRootEncoder implements Converter<AvailabilityTransactionsRoot> {
    convert(input: AvailabilityTransactionsRoot): {
        root: number[];
    };
}
export declare class AvailabilityTransactionsRootCodec extends TypeCheckingCodec<AvailabilityTransactionsRoot, ReturnType<InstanceType<new () => AvailabilityTransactionsRootEncoder>['convert']>> {
    readonly encoder: AvailabilityTransactionsRootEncoder;
    readonly decoder: AvailabilityTransactionsRootDecoder;
}
export declare const availabilityTransactionsRootCodec: AvailabilityTransactionsRootCodec;
