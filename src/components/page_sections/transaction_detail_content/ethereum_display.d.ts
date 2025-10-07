import { EthHeader } from '../../../../../../../../../../../src/service/ethereum/header';
import { EthTransaction } from '../../../../../../../../../../../src/service/ethereum/transaction';
import { default as React } from 'react';
/**
 * EthHeaderContext provides a React context for an Ethereum block header.
 */
export declare const EthHeaderContext: React.Context<EthHeader | null>;
/**
 * EthHeaderDisplay provides a React component to display an Ethereum block
 * header.
 */
export declare const EthHeaderDisplay: React.FC;
/**
 * EthTransactionContext provides a React context for an Ethereum transaction.
 */
export declare const EthTransactionContext: React.Context<EthTransaction | null>;
/**
 * EthTransactionExtensionComponentContext provides a React context for an
 * Ethereum transaction extension component.
 *
 * This allows for extended Transactions to provide their own display logic
 * to be used within `EthTransactionDisplay`.
 */
export declare const EthTransactionExtensionComponentContext: React.Context<React.FC<{}>>;
/**
 * EthTransactionDisplay provides a React component to display an Ethereum
 * transaction, utilizing an extension component if necessary.
 */
export declare const EthTransactionDisplay: React.FC;
