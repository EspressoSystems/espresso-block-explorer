import { BlockTag, FeeValuesType } from 'viem';
import { Config } from 'wagmi';
import {
  estimateFeesPerGas,
  EstimateFeesPerGasParameters,
  estimateGas,
  EstimateGasParameters,
  getBalance,
  GetBalanceParameters,
  getBlock,
  getBlockNumber,
  GetBlockNumberParameters,
  GetBlockParameters,
  GetBlockReturnType,
  getTransaction,
  GetTransactionParameters,
  getTransactionReceipt,
  GetTransactionReceiptParameters,
  GetTransactionReceiptReturnType,
  GetTransactionReturnType,
} from 'wagmi/actions';
import { L1Methods } from './l1_interface';

export class L1MethodsRemote<
  config extends Config,
  chainId extends config['chains'][number]['id'],
> implements L1Methods<config, chainId> {
  // Implementation of ESPTokenContract methods would go here
  constructor(
    private readonly config: config,
    private readonly chainID: chainId,
  ) {}

  // Readable methods

  async getBalance(parameters: GetBalanceParameters<config>) {
    return getBalance<config>(this.config, {
      ...parameters,
      chainId: this.chainID,
    });
  }

  async estimateFeesPerGas<type extends FeeValuesType = 'eip1559'>(
    parameters: EstimateFeesPerGasParameters<FeeValuesType, config>,
  ) {
    const result = await estimateFeesPerGas<config, type>(this.config, {
      ...parameters,
      chainId: this.chainID,
    });

    // result.maxPriorityFeePerGas;
    // result.maxFeePerGas;
    // result.gasPrice;
    return result;
  }

  async estimateGas(parameters: EstimateGasParameters<config, chainId>) {
    return estimateGas<config, chainId>(this.config, {
      ...parameters,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...({ chainId: this.chainID } as any),
    });
  }

  async getTransactionReceipt(
    parameters: GetTransactionReceiptParameters<config>,
  ): Promise<GetTransactionReceiptReturnType<config, chainId>> {
    return getTransactionReceipt<config, chainId>(this.config, {
      ...parameters,
      chainId: this.chainID,
    });
  }

  async getTransaction(
    parameters: GetTransactionParameters<config, chainId>,
  ): Promise<GetTransactionReturnType<config, chainId>> {
    return getTransaction(this.config, {
      ...parameters,
      chainId: this.chainID,
    });
  }

  async getBlock<
    includeTransactions extends boolean = false,
    blockTag extends BlockTag = 'latest',
  >(
    parameters?: GetBlockParameters<
      includeTransactions,
      blockTag,
      config,
      chainId
    >,
  ): Promise<
    GetBlockReturnType<includeTransactions, blockTag, config, chainId>
  > {
    return getBlock(this.config, { ...parameters, chainId: this.chainID });
  }

  async getBlockNumber(parameters?: GetBlockNumberParameters<config, chainId>) {
    return getBlockNumber(this.config, {
      ...parameters,
      chainId: this.chainID,
    });
  }
}
