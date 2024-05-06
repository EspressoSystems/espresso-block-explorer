import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';

/**
 * CappuccinoTransactionsRoot represents the transactions root in the Cappuccino
 * API.
 */
export declare class CappuccinoTransactionsRoot {
    readonly root: number[];
    constructor(root: number[]);
    toJSON(): {
        root: number[];
    };
}
export declare class CappuccinoTransactionsRootDecoder implements Converter<unknown, CappuccinoTransactionsRoot> {
    convert(input: unknown): CappuccinoTransactionsRoot;
}
export declare class CappuccinoTransactionsRootEncoder implements Converter<CappuccinoTransactionsRoot> {
    convert(input: CappuccinoTransactionsRoot): {
        root: number[];
    };
}
export declare class CappuccinoTransactionsRootCodec extends TypeCheckingCodec<CappuccinoTransactionsRoot, ReturnType<InstanceType<new () => CappuccinoTransactionsRootEncoder>['convert']>> {
    readonly encoder: CappuccinoTransactionsRootEncoder;
    readonly decoder: CappuccinoTransactionsRootDecoder;
}
export declare const cappuccinoTransactionsRootCodec: CappuccinoTransactionsRootCodec;
