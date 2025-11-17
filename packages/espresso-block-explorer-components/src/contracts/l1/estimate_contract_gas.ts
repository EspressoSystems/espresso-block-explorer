import {
  Abi,
  Account,
  Chain,
  ContractFunctionArgs,
  ContractFunctionName,
  EstimateContractGasParameters,
  EstimateContractGasReturnType,
} from 'viem';
import { estimateContractGas as viem_estimateContractGas } from 'viem/actions';
import { Config } from 'wagmi';

/**
 * estimateContractGas is a wagmi style convenience function for estimating the
 * gas for a contract call.
 */
export async function estimateContractGas<
  const abi extends Abi | readonly unknown[],
  functionName extends ContractFunctionName<abi, 'nonpayable' | 'payable'>,
  args extends ContractFunctionArgs<abi, 'pure' | 'view', functionName>,
  chain extends Chain | undefined,
  account extends Account | undefined = undefined,
>(
  config: Config,
  parameters: EstimateContractGasParameters<abi, functionName, args, chain> & {
    chainId?: number;
  },
): Promise<EstimateContractGasReturnType> {
  const { chainId, ...restParameters } = parameters;
  const client = config.getClient({ chainId: chainId });
  return viem_estimateContractGas<abi, functionName, args, chain, account>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    client as any,
    restParameters,
  );
}
