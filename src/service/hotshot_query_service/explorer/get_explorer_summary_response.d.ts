import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { ExplorerSummary } from './explorer_summary';
/**
 * ExplorerGetExplorerSummaryResponse is a class that represents the
 * response of the Explorer API for getting the explorer summary.
 */
export declare class ExplorerGetExplorerSummaryResponse {
    readonly explorerSummary: ExplorerSummary;
    constructor(explorerSummary: ExplorerSummary);
    toJSON(): unknown;
}
declare class ExplorerGetExplorerSummaryResponseDecoder implements Converter<unknown, ExplorerGetExplorerSummaryResponse> {
    convert(input: unknown): ExplorerGetExplorerSummaryResponse;
}
declare class ExplorerGetExplorerSummaryResponseEncoder implements Converter<ExplorerGetExplorerSummaryResponse, unknown> {
    convert(input: ExplorerGetExplorerSummaryResponse): unknown;
}
declare class ExplorerGetExplorerSummaryResponseCodec extends TypeCheckingCodec<ExplorerGetExplorerSummaryResponse, ReturnType<InstanceType<new () => ExplorerGetExplorerSummaryResponseEncoder>['convert']>> {
    readonly encoder: ExplorerGetExplorerSummaryResponseEncoder;
    readonly decoder: ExplorerGetExplorerSummaryResponseDecoder;
}
export declare const explorerGetExplorerSummaryResponseCodec: ExplorerGetExplorerSummaryResponseCodec;
export {};
