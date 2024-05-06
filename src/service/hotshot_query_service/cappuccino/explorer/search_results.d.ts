import { CappuccinoExplorerTransactionSummary } from './transaction_summary';
import { CappuccinoExplorerBlockSummary } from './block_summary';
import { Codec, Converter } from '../../../../../../../../../../../../src/convert/codec/convert';

export declare class CappuccinoExplorerSearchResults {
    readonly blocks: CappuccinoExplorerBlockSummary[];
    readonly transactions: CappuccinoExplorerTransactionSummary[];
    constructor(blocks: CappuccinoExplorerBlockSummary[], transactions: CappuccinoExplorerTransactionSummary[]);
    toJSON(): unknown;
}
declare class CappuccinoExplorerSearchResultsDecoder implements Converter<unknown, CappuccinoExplorerSearchResults> {
    convert(input: unknown): CappuccinoExplorerSearchResults;
}
declare class CappuccinoExplorerSearchResultsEncoder implements Converter<CappuccinoExplorerSearchResults, unknown> {
    convert(input: CappuccinoExplorerSearchResults): unknown;
}
declare class CappuccinoExplorerSearchResultsCodec extends Codec<CappuccinoExplorerSearchResults, unknown> {
    readonly encoder: CappuccinoExplorerSearchResultsEncoder;
    readonly decoder: CappuccinoExplorerSearchResultsDecoder;
}
export declare const cappuccinoExplorerSearchResultsCodec: CappuccinoExplorerSearchResultsCodec;
export {};
