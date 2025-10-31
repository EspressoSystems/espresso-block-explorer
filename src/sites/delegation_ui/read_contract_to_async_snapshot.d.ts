import { Abi, ContractFunctionArgs, ContractFunctionName } from 'viem';
import { Config, UseReadContractParameters } from 'wagmi';
import { ReadContractData } from 'wagmi/query';
/**
 * ReadContractToAsyncSnapshotProps defines the props
 * for the ReadContractToAsyncSnapshot component.
 *
 * This type is complicated as it tries to infer many of the types
 * from the wagmi useReadContract hook.
 */
export type ReadContractToAsyncSnapshotProps<abi extends Abi | readonly unknown[] = Abi, functionName extends ContractFunctionName<abi, 'pure' | 'view'> = ContractFunctionName<abi, 'pure' | 'view'>, args extends ContractFunctionArgs<abi, 'pure' | 'view', functionName> = ContractFunctionArgs<abi, 'pure' | 'view', functionName>, config extends Config = Config, selectData = ReadContractData<abi, functionName, args>> = React.PropsWithChildren & UseReadContractParameters<abi, functionName, args, config, selectData>;
/**
 * ReadContractToAsyncSnapshot is a React component that
 * reads data from a smart contract using the wagmi useReadContract hook
 * and provides the result as an AsyncSnapshot via AsyncSnapshotContext.
 *
 * It will automatically attempt to fetch the reactContract values based on
 * the provided abi, functionName, args, and config generic parameters, and
 * make that data available in the children via AsyncSnapshotContext, and the
 * derived Context states just like PromiseResolver.
 */
export declare function ReadContractToAsyncSnapshot<abi extends Abi | readonly unknown[] = Abi, functionName extends ContractFunctionName<abi, 'pure' | 'view'> = ContractFunctionName<abi, 'pure' | 'view'>, args extends ContractFunctionArgs<abi, 'pure' | 'view', functionName> = ContractFunctionArgs<abi, 'pure' | 'view', functionName>, config extends Config = Config, selectData = ReadContractData<abi, functionName, args>>(props: ReadContractToAsyncSnapshotProps<abi, functionName, args, config, selectData>): import("react/jsx-runtime").JSX.Element;
