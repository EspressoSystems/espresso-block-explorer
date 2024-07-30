import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as WebworkerLifeCycleResponse } from './web_worker_life_cycle_response';

/**
 * kCappuccinoConnectionOpenedType is the type string for the
 * CappuccinoConnectionOpened class.
 */
export declare const kCappuccinoConnectionOpenedType: "ConnectionOpened";
/**
 * CappuccinoConnectionOpened is a response from the Cappuccino node
 * validator that contains a snapshot of the histograms in the network.
 */
export declare class CappuccinoConnectionOpened extends WebworkerLifeCycleResponse {
    toJSON(): "ConnectionOpened";
}
declare class CappuccinoConnectionOpenedDecoder implements Converter<unknown, CappuccinoConnectionOpened> {
    convert(input: unknown): CappuccinoConnectionOpened;
}
declare class CappuccinoConnectionOpenedEncoder implements Converter<CappuccinoConnectionOpened> {
    convert(): "ConnectionOpened";
}
declare class CappuccinoConnectionOpenedCodec extends TypeCheckingCodec<CappuccinoConnectionOpened, ReturnType<InstanceType<new () => CappuccinoConnectionOpenedEncoder>['convert']>> {
    readonly encoder: CappuccinoConnectionOpenedEncoder;
    readonly decoder: CappuccinoConnectionOpenedDecoder;
}
export declare const cappuccinoConnectionOpenedCodec: CappuccinoConnectionOpenedCodec;
export {};
