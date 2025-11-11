import { BlockTag } from 'viem';
import { Config } from 'wagmi';
import { estimateGas, EstimateGasParameters, getBalance, GetBalanceParameters, getBlock, getBlockNumber, GetBlockNumberParameters, GetBlockParameters, getTransaction, GetTransactionParameters, getTransactionReceipt, GetTransactionReceiptParameters } from 'wagmi/actions';
export interface L1MethodsReadOnly<config extends Config, chainId extends config['chains'][number]['id']> {
    /**
     * Action for fetching native currency or token balance.
     */
    getBalance(parameters: GetBalanceParameters<config>): ReturnType<typeof getBalance<config>>;
    /**
     * Action for estimating the gas necessary to complete a transaction without
     * submitting it to the network.
     */
    estimateGas(parameters: EstimateGasParameters<config, chainId>): ReturnType<typeof estimateGas<config, chainId>>;
    /**
     * Action for return the Transaction Receipt given a Transaction hash.
     */
    getTransactionReceipt(parameters: GetTransactionReceiptParameters<config>): ReturnType<typeof getTransactionReceipt<config, chainId>>;
    /**
     * Action for fetching transactions given hashes or block identifiers.
     */
    getTransaction(parameters: GetTransactionParameters<config, chainId>): ReturnType<typeof getTransaction<config, chainId>>;
    /**
     * Action for fetching information about a block at a block number, hash or tag.
     */
    getBlock<includeTransactions extends boolean = false, blockTag extends BlockTag = 'latest'>(parameters?: GetBlockParameters<includeTransactions, blockTag, config, chainId>): ReturnType<typeof getBlock<config, chainId, includeTransactions, blockTag>>;
    /**
     * Action for fetching the number of the most recent block seen.
     */
    getBlockNumber(parameters?: GetBlockNumberParameters<config, chainId>): ReturnType<typeof getBlockNumber<config, chainId>>;
}
export interface L1MethodsWritable {
}
export interface L1Methods<config extends Config, chainId extends config['chains'][number]['id']> extends L1MethodsReadOnly<config, chainId>, L1MethodsWritable {
}
