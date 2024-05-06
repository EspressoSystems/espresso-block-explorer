import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';

/**
 * CappuccinoNamespaceTable represents the namespace table in the Cappuccino API.
 */
export declare class CappuccinoNamespaceTable {
    readonly bytes: ArrayBuffer;
    constructor(bytes: ArrayBuffer);
    toJSON(): {
        bytes: string;
    };
}
declare class CappuccinoNamespaceTableDecoder implements Converter<unknown, CappuccinoNamespaceTable> {
    convert(input: unknown): CappuccinoNamespaceTable;
}
declare class CappuccinoNamespaceTableEncoder implements Converter<CappuccinoNamespaceTable> {
    convert(input: CappuccinoNamespaceTable): {
        bytes: string;
    };
}
declare class CappuccinoNamespaceTableCodec extends TypeCheckingCodec<CappuccinoNamespaceTable, ReturnType<InstanceType<new () => CappuccinoNamespaceTableEncoder>['convert']>> {
    readonly encoder: CappuccinoNamespaceTableEncoder;
    readonly decoder: CappuccinoNamespaceTableDecoder;
}
export declare const cappuccinoNamespaceTableCodec: CappuccinoNamespaceTableCodec;
export {};
