import {
  type ContractFunctionRevertedErrorType,
  BaseError as ViemBaseError,
} from 'viem';

/**
 * isViemBaseError is a helper function that determins if a given `unknown` is
 * an `Error` that extends `viem`'s `BaseError` class.
 */
export function isViemBaseError(error: unknown): error is ViemBaseError {
  return error instanceof ViemBaseError;
}

/**
 * isErrorWithName is a type checking function that checks to see if the
 * effective given type is an `Error` with a `name` field that is a `string`.
 */
export function isErrorWithName(
  error: unknown,
): error is Error & { name: string } {
  return (
    error instanceof Error && 'name' in error && typeof error.name === 'string'
  );
}

/**
 * InferViemErrorName is a helper type that extracts the `name` field from a
 * given error type.
 *
 * It is utilized to type check assert that the `name` field matches what is
 * expected for a `ViemError`.
 */
type InferViemErrorName<E> = E extends Error & { name: infer N } ? N : never;

export function isViemErrorWithName<E extends Error & { name: string }>(
  error: unknown,
  name: InferViemErrorName<E>,
): error is E {
  return isErrorWithName(error) && error.name === name;
}

/**
 * isErrorWithCause is a type checking function that ensures that the given
 * type is an `Error` with a `cause` field.
 */
export function isErrorWithCause(
  error: unknown,
): error is Error & { cause: unknown } {
  return error instanceof Error && 'cause' in error;
}

/**
 * extractContractFunctionRevertedError is a helper function that walks the
 * cause chain for errors occured and attempts to see if any error within
 * the chain is a `ContractFunctionRevertedError`, indicating that a
 * transaction was successfully submitted, but the execution reverted during
 * evaluation.
 */
export function extractContractFunctionRevertedError(
  error: unknown,
): null | ContractFunctionRevertedErrorType {
  if (
    isViemErrorWithName<ContractFunctionRevertedErrorType>(
      error,
      'ContractFunctionRevertedError',
    )
  ) {
    return error as ContractFunctionRevertedErrorType;
  }

  if (!isErrorWithCause(error)) {
    return null;
  }

  return extractContractFunctionRevertedError(error.cause);
}

/**
 * extractViemContractFunctionReveretedErrorName is a helper function that
 * will return the `errorName` from the `data` field of a
 * `ContractFunctionRervertedError` if it can be found within the cause chain
 * of the given error.
 */
export function extractViemContractFunctionRevertedErrorName(error: unknown) {
  const revertedError = extractContractFunctionRevertedError(error);

  if (!revertedError) {
    return null;
  }

  return revertedError.data?.errorName ?? null;
}
