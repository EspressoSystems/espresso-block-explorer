import { BlockTag, FeeValuesType } from 'viem';
import { Config } from 'wagmi';
import { EstimateFeesPerGasParameters, EstimateGasParameters, GetBalanceParameters, GetBlockNumberParameters, GetBlockParameters, GetBlockReturnType, GetTransactionParameters, GetTransactionReceiptParameters, GetTransactionReceiptReturnType, GetTransactionReturnType } from 'wagmi/actions';
import { L1Methods } from './l1_interface';
export declare class L1MethodsRemote<config extends Config, chainId extends config['chains'][number]['id']> implements L1Methods<config, chainId> {
    private readonly config;
    private readonly chainID;
    constructor(config: config, chainID: chainId);
    getBalance(parameters: GetBalanceParameters<config>): Promise<import('@wagmi/core').GetBalanceReturnType>;
    estimateFeesPerGas<type extends FeeValuesType = 'eip1559'>(parameters: EstimateFeesPerGasParameters<FeeValuesType, config>): Promise<import('@wagmi/core').EstimateFeesPerGasReturnType<type>>;
    estimateGas(parameters: EstimateGasParameters<config, chainId>): Promise<bigint>;
    getTransactionReceipt(parameters: GetTransactionReceiptParameters<config>): Promise<GetTransactionReceiptReturnType<config, chainId>>;
    getTransaction(parameters: GetTransactionParameters<config, chainId>): Promise<GetTransactionReturnType<config, chainId>>;
    getBlock<includeTransactions extends boolean = false, blockTag extends BlockTag = 'latest'>(parameters?: GetBlockParameters<includeTransactions, blockTag, config, chainId>): Promise<GetBlockReturnType<includeTransactions, blockTag, config, chainId>>;
    getBlockNumber(parameters?: GetBlockNumberParameters<config, chainId>): Promise<bigint>;
}
