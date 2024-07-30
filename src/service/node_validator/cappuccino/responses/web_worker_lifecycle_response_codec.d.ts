import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as WebWorkerLifeCycleResponse } from './web_worker_life_cycle_response';

declare class WebWorkerLifeCycleResponseDecoder implements Converter<unknown, WebWorkerLifeCycleResponse> {
    convert(input: unknown): WebWorkerLifeCycleResponse;
}
declare class WebWorkerLifeCycleResponseEncoder implements Converter<WebWorkerLifeCycleResponse> {
    convert(input: WebWorkerLifeCycleResponse): "ConnectionClosed" | "ConnectionConnecting" | "ConnectionOpened";
}
declare class WebWorkerLifeCycleResponseCodec extends TypeCheckingCodec<WebWorkerLifeCycleResponse, ReturnType<InstanceType<new () => WebWorkerLifeCycleResponseEncoder>['convert']>> {
    readonly encoder: WebWorkerLifeCycleResponseEncoder;
    readonly decoder: WebWorkerLifeCycleResponseDecoder;
}
export declare const webWorkerLifeCycleResponseCodec: WebWorkerLifeCycleResponseCodec;
export {};
