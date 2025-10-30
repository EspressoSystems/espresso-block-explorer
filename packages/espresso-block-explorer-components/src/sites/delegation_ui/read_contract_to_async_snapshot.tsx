import {
  AsyncSnapshot,
  AsyncState,
} from '@/components/data/async_data/AsyncSnapshot';
import { AsyncSnapshotContext } from '@/components/data/async_data/AsyncSnapshotContext';
import ProvideAsyncStates from '@/components/data/async_data/ProvideAsyncStates';
import InvalidTypeError from '@/errors/InvalidTypeError';
import { Abi, ContractFunctionArgs, ContractFunctionName } from 'viem';
import { Config, useReadContract, UseReadContractParameters } from 'wagmi';
import { ReadContractData } from 'wagmi/query';

/**
 * ReadContractToAsyncSnapshotProps defines the props
 * for the ReadContractToAsyncSnapshot component.
 *
 * This type is complicated as it tries to infer many of the types
 * from the wagmi useReadContract hook.
 */
export type ReadContractToAsyncSnapshotProps<
  abi extends Abi | readonly unknown[] = Abi,
  functionName extends ContractFunctionName<
    abi,
    'pure' | 'view'
  > = ContractFunctionName<abi, 'pure' | 'view'>,
  args extends ContractFunctionArgs<
    abi,
    'pure' | 'view',
    functionName
  > = ContractFunctionArgs<abi, 'pure' | 'view', functionName>,
  config extends Config = Config,
  selectData = ReadContractData<abi, functionName, args>,
> = React.PropsWithChildren &
  UseReadContractParameters<abi, functionName, args, config, selectData>;

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
export function ReadContractToAsyncSnapshot<
  abi extends Abi | readonly unknown[] = Abi,
  functionName extends ContractFunctionName<
    abi,
    'pure' | 'view'
  > = ContractFunctionName<abi, 'pure' | 'view'>,
  args extends ContractFunctionArgs<
    abi,
    'pure' | 'view',
    functionName
  > = ContractFunctionArgs<abi, 'pure' | 'view', functionName>,
  config extends Config = Config,
  selectData = ReadContractData<abi, functionName, args>,
>(
  props: ReadContractToAsyncSnapshotProps<
    abi,
    functionName,
    args,
    config,
    selectData
  >,
) {
  const { children, ...useReadContractParams } = props;
  const result = useReadContract(
    useReadContractParams as UseReadContractParameters<
      abi,
      functionName,
      args,
      config,
      selectData
    >,
  );

  const state = result.isLoading ? AsyncState.waiting : AsyncState.done;

  if (result.isError) {
    return (
      <AsyncSnapshotContext.Provider
        value={AsyncSnapshot.withError(state, result.error as Error)}
      >
        <ProvideAsyncStates>{children}</ProvideAsyncStates>
      </AsyncSnapshotContext.Provider>
    );
  }

  if (typeof result.data !== 'bigint') {
    return (
      <AsyncSnapshotContext.Provider
        value={AsyncSnapshot.withError(
          state,
          AsyncSnapshot.withError(
            state,
            new InvalidTypeError(typeof result.data, 'bigint'),
          ),
        )}
      >
        <ProvideAsyncStates>{children}</ProvideAsyncStates>
      </AsyncSnapshotContext.Provider>
    );
  }

  return (
    <AsyncSnapshotContext.Provider
      value={AsyncSnapshot.withData(state, BigInt(result.data))}
    >
      <ProvideAsyncStates>{children}</ProvideAsyncStates>
    </AsyncSnapshotContext.Provider>
  );
}
