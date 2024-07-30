import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as WebworkerLifeCycleResponse } from './web_worker_life_cycle_response';

/**
 * kCappuccinoConnectionClosedType is the type string for the
 * CappuccinoConnectionClosed class.
 */
export declare const kCappuccinoConnectionClosedType: "ConnectionClosed";
/**
 * CappuccinoConnectionClosed is a response from the Cappuccino node
 * validator that contains a snapshot of the histograms in the network.
 */
export declare class CappuccinoConnectionClosed extends WebworkerLifeCycleResponse {
    toJSON(): "ConnectionClosed";
}
declare class CappuccinoConnectionClosedDecoder implements Converter<unknown, CappuccinoConnectionClosed> {
    convert(input: unknown): CappuccinoConnectionClosed;
}
declare class CappuccinoConnectionClosedEncoder implements Converter<CappuccinoConnectionClosed> {
    convert(): "ConnectionClosed";
}
declare class CappuccinoConnectionClosedCodec extends TypeCheckingCodec<CappuccinoConnectionClosed, ReturnType<InstanceType<new () => CappuccinoConnectionClosedEncoder>['convert']>> {
    readonly encoder: CappuccinoConnectionClosedEncoder;
    readonly decoder: CappuccinoConnectionClosedDecoder;
}
export declare const cappuccinoConnectionClosedCodec: CappuccinoConnectionClosedCodec;
export {};
