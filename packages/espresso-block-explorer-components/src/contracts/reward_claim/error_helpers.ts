import { extractViemContractFunctionRevertedErrorName } from '../error_helpers';

/**
 * isAlreadyClaimedError is a helper function that checks if the given error
 * has a `ContractFunctionRevertedError` with an `errorName` of
 * `AlreadyClaimed` within the error provided.
 */
export function isAlreadyClaimedError(error: unknown): boolean {
  return (
    extractViemContractFunctionRevertedErrorName(error) === 'AlreadyClaimed'
  );
}

/**
 * isInvalidAuthRootError is a helper function that checks if the given error
 * has a `ContractFunctionRevertedError` with an `errorName` of
 * `InvalidAuthRoot` within the error provided.
 */
export function isInvalidAuthRootError(error: unknown): boolean {
  return (
    extractViemContractFunctionRevertedErrorName(error) === 'InvalidAuthRoot'
  );
}
