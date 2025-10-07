import { EthHeader } from '../../../../../../../../../../../src/service/ethereum/header';
import { EthTransaction } from '../../../../../../../../../../../src/service/ethereum/transaction';
import { OptimismDepositTx } from '../../../../../../../../../../../src/service/optimism/deposit';
import { OptimismSingularBatch } from '../../../../../../../../../../../src/service/optimism/singular_batch';
import { default as React } from 'react';
/**
 * OptimismEspressoBatchV0 represents the data that is submitted to Espresso
 * from optimism.
 */
export declare class OptimismEspressoBatchV0 {
    readonly batchHeader: EthHeader;
    readonly singularBatch: OptimismSingularBatch;
    readonly l1DepositInfo: EthTransaction;
    constructor(batchHeader: EthHeader, singularBatch: OptimismSingularBatch, l1DepositInfo: EthTransaction);
}
/**
 * decodeOptimismEspressoBatch decodes an OptimismEspressoBatchV0 from the
 * given payload it is assumed to be RLP encoded.
 */
export declare function decodeOptimismEspressoBatch(payload: Uint8Array): OptimismEspressoBatchV0;
/**
 * OptimismBatchV0 represents an OptimismBatch that is submitted to Espresso.
 * It contains a signature and the OptimismEspressoBatch.
 */
export declare class OptimismBatchV0 {
    readonly signature: ArrayBuffer;
    readonly batch: OptimismEspressoBatchV0;
    constructor(signature: ArrayBuffer, batch: OptimismEspressoBatchV0);
}
/**
 * extractOptimismBatch extracts an OptimismBatchV0 from the given payload.
 */
export declare function extractOptimismBatch(payload: Uint8Array): null | OptimismBatchV0;
/**
 * OptimismBatchDecodeAndDisplay is a component that displays the Optimism Batch
 * information successfully parsed from data stored within a
 * TransactionDetail.
 */
export declare const OptimismBatchDecodeAndDisplay: React.FC;
/**
 * OptimismBatchContext provides a React context for an OptimismBatchV0.
 */
export declare const OptimismBatchContext: React.Context<OptimismBatchV0 | null>;
/**
 * OptimismBatchDisplay provides a React component to display an
 * OptimismBatchV0.
 */
export declare const OptimismBatchDisplay: React.FC;
/**
 * OptimismSingularBatchContext provides a React context for an
 * OptimismSingularBatch.
 */
export declare const OptimismSingularBatchContext: React.Context<OptimismSingularBatch | null>;
/**
 * OptimismSingularBatchDisplay provides a React component to display an
 * OptimismSingularBatch.
 */
export declare const OptimismSingularBatchDisplay: React.FC;
/**
 * OptimismDepositTransactionContext provides a React context for an
 * OptimismDepositTx.
 */
export declare const OptimismDepositTransactionContext: React.Context<OptimismDepositTx | null>;
/**
 * OptimismDepositTransactionDisplay provides a React component to display an
 * OptimismDepositTx.
 */
export declare const OptimismDepositTransactionDisplay: React.FC;
