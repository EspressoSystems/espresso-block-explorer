import { CappuccinoAPITransactionResponse } from './transaction_response';
import { CappuccinoAPILeafResponse } from './leaf_response';
import { CappuccinoDerivedTransactionSummary } from './derived_transaction_summary';
import { CappuccinoDerivedBlockSummary } from './derived_block_summary';
import { CappuccinoAPIBlock } from './block';

/**
 * convertCappuccinoBlockAndLeafToBlockSummary is a helper function that is able
 * to convert ad CappuccinoAPIBlock and a CappuccinoAPILeafResponse into a
 * CappuccinoDerivedBlockSummary.
 *
 * All of the data needed for the CappuccinoDerivedBlockSummary is present in
 * the block and leaf, so this function is able to take the pieces it needs
 * from either, and combine them to create the summary.  This is only necessary
 * when the API is unable to provide this type directly.
 *
 * With the creation of the explorer API, this function should no longer be
 * necessary.
 */
export declare function convertCappuccinoBlockAndLeafToBlockSummary(block: CappuccinoAPIBlock, leaf: CappuccinoAPILeafResponse): Promise<CappuccinoDerivedBlockSummary>;
/**
 * convertCappuccinoBlockToBlockSummary is a helper function that is able to
 * convert a CappuccinoAPIBlock into a CappuccinoDerivedBlockSummary.
 *
 * All of the data needed for the CappuccinoDerivedBlockSummary is present in
 * the block, The block summary is just a different representation of the
 * same data.
 *
 * With the creation of the explorer API, this function should no longer be
 * necessary.
 */
export declare function convertCappuccinoBlockToBlockSummary(block: CappuccinoAPIBlock): Promise<CappuccinoDerivedBlockSummary>;
/**
 * convertCappuccinoLeafAndTransactionsToTransactionSummaries is a helper
 * function that is able to convert a CappuccinoAPILeafResponse and an
 * AsyncIterable of CappuccinoAPITransactionResponse into an AsyncIterable of
 * CappuccinoDerivedTransactionSummary.
 *
 * The leaf is needed to provide the block header, as well as the namespace
 * that corresponds to the transactions.  The transactions are needed to provide
 * the transaction data.
 *
 * This function is only necessary when the API is unable to provide this type
 * directly.
 *
 * With the creation of the explorer API, this function should no longer be
 * necessary.
 */
export declare function convertCappuccinoLeafAndTransactionsToTransactionSummaries(leaf: CappuccinoAPILeafResponse, transactions: AsyncIterable<CappuccinoAPITransactionResponse>): AsyncGenerator<CappuccinoDerivedTransactionSummary>;
