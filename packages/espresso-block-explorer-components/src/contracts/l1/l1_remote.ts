import { BlockTag } from 'viem';
import { Config } from 'wagmi';
import {
  estimateGas,
  EstimateGasParameters,
  getBalance,
  GetBalanceParameters,
  getBlock,
  getBlockNumber,
  GetBlockNumberParameters,
  GetBlockParameters,
  getTransaction,
  GetTransactionParameters,
  getTransactionReceipt,
  GetTransactionReceiptParameters,
} from 'wagmi/actions';
import { L1Methods } from './l1_interface';

export class L1MethodsRemote<
  config extends Config,
  chainId extends config['chains'][number]['id'],
> implements L1Methods<config, chainId>
{
  // Implementation of ESPTokenContract methods would go here
  constructor(
    private readonly config: Config,
    private readonly chainID: chainId,
  ) {}

  // Readable methods

  async getBalance(parameters: GetBalanceParameters<config>) {
    return getBalance(this.config, parameters);
  }

  async estimateGas(parameters: EstimateGasParameters<config, chainId>) {
    return estimateGas(this.config, parameters);
  }

  async getTransactionReceipt(
    parameters: GetTransactionReceiptParameters<config>,
  ) {
    return getTransactionReceipt(this.config, parameters);
  }

  async getTransaction(parameters: GetTransactionParameters<config, chainId>) {
    return getTransaction(this.config, parameters);
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
  ) {
    return getBlock(this.config, parameters);
  }

  async getBlockNumber(parameters?: GetBlockNumberParameters<config, chainId>) {
    return getBlockNumber(this.config, parameters);
  }
}
