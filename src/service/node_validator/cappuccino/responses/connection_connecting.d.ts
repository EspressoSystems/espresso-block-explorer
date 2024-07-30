import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as WebworkerLifeCycleResponse } from './web_worker_life_cycle_response';

/**
 * kCappuccinoConnectionConnectingType is the type string for the
 * CappuccinoConnectionConnecting class.
 */
export declare const kCappuccinoConnectionConnectingType: "ConnectionConnecting";
/**
 * CappuccinoConnectionConnecting is a response from the Cappuccino node
 * validator that contains a snapshot of the histograms in the network.
 */
export declare class CappuccinoConnectionConnecting extends WebworkerLifeCycleResponse {
    toJSON(): "ConnectionConnecting";
}
declare class CappuccinoConnectionConnectingDecoder implements Converter<unknown, CappuccinoConnectionConnecting> {
    convert(input: unknown): CappuccinoConnectionConnecting;
}
declare class CappuccinoConnectionConnectingEncoder implements Converter<CappuccinoConnectionConnecting> {
    convert(): "ConnectionConnecting";
}
declare class CappuccinoConnectionConnectingCodec extends TypeCheckingCodec<CappuccinoConnectionConnecting, ReturnType<InstanceType<new () => CappuccinoConnectionConnectingEncoder>['convert']>> {
    readonly encoder: CappuccinoConnectionConnectingEncoder;
    readonly decoder: CappuccinoConnectionConnectingDecoder;
}
export declare const cappuccinoConnectionConnectingCodec: CappuccinoConnectionConnectingCodec;
export {};
