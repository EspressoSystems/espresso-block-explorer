import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * AvailabilityNamespaceTable represents the namespace table in the Availability API.
 */
export declare class AvailabilityNamespaceTable {
    readonly bytes: ArrayBuffer;
    constructor(bytes: ArrayBuffer);
    toJSON(): {
        bytes: string;
    };
}
declare class AvailabilityNamespaceTableDecoder implements Converter<unknown, AvailabilityNamespaceTable> {
    convert(input: unknown): AvailabilityNamespaceTable;
}
declare class AvailabilityNamespaceTableEncoder implements Converter<AvailabilityNamespaceTable> {
    convert(input: AvailabilityNamespaceTable): {
        bytes: string;
    };
}
declare class AvailabilityNamespaceTableCodec extends TypeCheckingCodec<AvailabilityNamespaceTable, ReturnType<InstanceType<new () => AvailabilityNamespaceTableEncoder>['convert']>> {
    readonly encoder: AvailabilityNamespaceTableEncoder;
    readonly decoder: AvailabilityNamespaceTableDecoder;
}
export declare const availabilityNamespaceTableCodec: AvailabilityNamespaceTableCodec;
export {};
