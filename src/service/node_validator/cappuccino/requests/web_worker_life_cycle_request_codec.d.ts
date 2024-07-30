import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as CappuccinoNodeValidatorRequest } from './web_worker_life_cycle_request';

declare class WebWorkerLifeCycleRequestCodec extends TypeCheckingCodec<CappuccinoNodeValidatorRequest, string> {
    readonly encoder: Converter<CappuccinoNodeValidatorRequest, string>;
    readonly decoder: Converter<string, CappuccinoNodeValidatorRequest>;
}
export declare const webWorkerLifeCycleRequestCodec: WebWorkerLifeCycleRequestCodec;
export {};
