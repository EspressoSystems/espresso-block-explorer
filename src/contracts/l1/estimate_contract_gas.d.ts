import { Abi, Account, Chain, ContractFunctionArgs, ContractFunctionName, EstimateContractGasParameters, EstimateContractGasReturnType } from 'viem';
import { Config } from 'wagmi';
/**
 * estimateContractGas is a wagmi style convenience function for estimating the
 * gas for a contract call.
 */
export declare function estimateContractGas<const abi extends Abi | readonly unknown[], functionName extends ContractFunctionName<abi, 'nonpayable' | 'payable'>, args extends ContractFunctionArgs<abi, 'pure' | 'view', functionName>, chain extends Chain | undefined, account extends Account | undefined = undefined>(config: Config, parameters: EstimateContractGasParameters<abi, functionName, args, chain> & {
    chainId?: number;
}): Promise<EstimateContractGasReturnType>;
