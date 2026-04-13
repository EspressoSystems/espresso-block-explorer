import { Codec, Converter } from '../../../../../../../../../../../src/convert/codec/convert';
import { ExplorerBlockSummary } from './block_summary';
import { ExplorerTransactionSummary } from './transaction_summary';
/**
 * ExplorerSearchResults is a class that represents the search results from the
 * search request to the Explorer API.
 */
export declare class ExplorerSearchResults {
    readonly blocks: ExplorerBlockSummary[];
    readonly transactions: ExplorerTransactionSummary[];
    constructor(blocks: ExplorerBlockSummary[], transactions: ExplorerTransactionSummary[]);
    toJSON(): unknown;
}
declare class ExplorerSearchResultsDecoder implements Converter<unknown, ExplorerSearchResults> {
    convert(input: unknown): ExplorerSearchResults;
}
declare class ExplorerSearchResultsEncoder implements Converter<ExplorerSearchResults, unknown> {
    convert(input: ExplorerSearchResults): unknown;
}
declare class ExplorerSearchResultsCodec extends Codec<ExplorerSearchResults, unknown> {
    readonly encoder: ExplorerSearchResultsEncoder;
    readonly decoder: ExplorerSearchResultsDecoder;
}
export declare const explorerSearchResultsCodec: ExplorerSearchResultsCodec;
export {};
