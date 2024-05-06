import { CappuccinoExplorerSummary } from './explorer_summary';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';

export declare class CappuccinoExplorerGetExplorerSummaryResponse {
    readonly explorerSummary: CappuccinoExplorerSummary;
    constructor(explorerSummary: CappuccinoExplorerSummary);
    toJSON(): unknown;
}
declare class CappuccinoExplorerGetExplorerSummaryResponseDecoder implements Converter<unknown, CappuccinoExplorerGetExplorerSummaryResponse> {
    convert(input: unknown): CappuccinoExplorerGetExplorerSummaryResponse;
}
declare class CappuccinoExplorerGetExplorerSummaryResponseEncoder implements Converter<CappuccinoExplorerGetExplorerSummaryResponse, unknown> {
    convert(input: CappuccinoExplorerGetExplorerSummaryResponse): unknown;
}
declare class CappuccinoExplorerGetExplorerSummaryResponseCodec extends TypeCheckingCodec<CappuccinoExplorerGetExplorerSummaryResponse, ReturnType<InstanceType<new () => CappuccinoExplorerGetExplorerSummaryResponseEncoder>['convert']>> {
    readonly encoder: CappuccinoExplorerGetExplorerSummaryResponseEncoder;
    readonly decoder: CappuccinoExplorerGetExplorerSummaryResponseDecoder;
}
export declare const cappuccinoExplorerGetExplorerSummaryResponseCodec: CappuccinoExplorerGetExplorerSummaryResponseCodec;
export {};
