/** The number of a block's transactions shown per page of the block page. */
export declare const kBlockTransactionsPerPage = 50;
/**
 * BlockTransactionsPage is one page of a block's transactions, in position
 * order, and the request that loads it.
 */
export interface BlockTransactionsPage {
    /** The position of the page's first transaction. */
    first: number;
    /** The position of the page's last transaction. */
    last: number;
    /** The number of transactions in the block. */
    total: number;
    /** The service's offset: transactions to skip from the block's newest. */
    skip: number;
    /** The number of transactions to request. */
    limit: number;
    /** The first position of the previous page, if there is one. */
    previous: null | number;
    /** The first position of the next page, if there is one. */
    next: null | number;
}
/**
 * blockTransactionsPage returns the page of a block's transactions that holds
 * the given position. A position outside the block gives the first page.
 */
export declare function blockTransactionsPage(total: number, position: number, perPage?: number): BlockTransactionsPage;
/**
 * parseBlockTransactionsPosition reads the block page's `position` query
 * parameter. Anything other than a whole number gives the first page.
 */
export declare function parseBlockTransactionsPosition(raw: null | string): number;
