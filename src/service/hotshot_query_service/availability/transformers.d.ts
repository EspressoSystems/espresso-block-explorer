import { AvailabilityAPIBlock } from './block';
import { AvailabilityDerivedBlockSummary } from './derived_block_summary';
import { AvailabilityDerivedTransactionSummary } from './derived_transaction_summary';
import { AvailabilityAPILeafResponse } from './leaf_response';
import { AvailabilityAPITransactionResponse } from './transaction_response';
/**
 * convertBlockAndLeafToBlockSummary is a helper function that is able
 * to convert an AvailabilityAPIBlock and a AvailabilityAPILeafResponse into a
 * AvailabilityDerivedBlockSummary.
 *
 * All of the data needed for the AvailabilityDerivedBlockSummary is present in
 * the block and leaf, so this function is able to take the pieces it needs
 * from either, and combine them to create the summary.  This is only necessary
 * when the API is unable to provide this type directly.
 *
 * With the creation of the explorer API, this function should no longer be
 * necessary.
 */
export declare function convertBlockAndLeafToBlockSummary(block: AvailabilityAPIBlock, _leaf: AvailabilityAPILeafResponse): Promise<AvailabilityDerivedBlockSummary>;
/**
 * convertBlockToBlockSummary is a helper function that is able to
 * convert a AvailabilityAPIBlock into a AvailabilityDerivedBlockSummary.
 *
 * All of the data needed for the AvailabilityDerivedBlockSummary is present in
 * the block, The block summary is just a different representation of the
 * same data.
 *
 * With the creation of the explorer API, this function should no longer be
 * necessary.
 */
export declare function convertBlockToBlockSummary(block: AvailabilityAPIBlock): Promise<AvailabilityDerivedBlockSummary>;
/**
 * convertLeafAndTransactionsToTransactionSummaries is a helper
 * function that is able to convert a AvailabilityAPILeafResponse and an
 * AsyncIterable of AvailabilityAPITransactionResponse into an AsyncIterable of
 * AvailabilityDerivedTransactionSummary.
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
export declare function convertLeafAndTransactionsToTransactionSummaries(leaf: AvailabilityAPILeafResponse, transactions: AsyncIterable<AvailabilityAPITransactionResponse>): AsyncGenerator<AvailabilityDerivedTransactionSummary>;
