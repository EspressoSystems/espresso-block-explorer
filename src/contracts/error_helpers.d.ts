import { ContractFunctionRevertedErrorType, BaseError as ViemBaseError } from 'viem';
/**
 * isViemBaseError is a helper function that determins if a given `unknown` is
 * an `Error` that extends `viem`'s `BaseError` class.
 */
export declare function isViemBaseError(error: unknown): error is ViemBaseError;
/**
 * isErrorWithName is a type checking function that checks to see if the
 * effective given type is an `Error` with a `name` field that is a `string`.
 */
export declare function isErrorWithName(error: unknown): error is Error & {
    name: string;
};
/**
 * InferViemErrorName is a helper type that extracts the `name` field from a
 * given error type.
 *
 * It is utilized to type check assert that the `name` field matches what is
 * expected for a `ViemError`.
 */
type InferViemErrorName<E> = E extends Error & {
    name: infer N;
} ? N : never;
export declare function isViemErrorWithName<E extends Error & {
    name: string;
}>(error: unknown, name: InferViemErrorName<E>): error is E;
/**
 * isErrorWithCause is a type checking function that ensures that the given
 * type is an `Error` with a `cause` field.
 */
export declare function isErrorWithCause(error: unknown): error is Error & {
    cause: unknown;
};
/**
 * extractContractFunctionRevertedError is a helper function that walks the
 * cause chain for errors occured and attempts to see if any error within
 * the chain is a `ContractFunctionRevertedError`, indicating that a
 * transaction was successfully submitted, but the execution reverted during
 * evaluation.
 */
export declare function extractContractFunctionRevertedError(error: unknown): null | ContractFunctionRevertedErrorType;
/**
 * extractViemContractFunctionReveretedErrorName is a helper function that
 * will return the `errorName` from the `data` field of a
 * `ContractFunctionRervertedError` if it can be found within the cause chain
 * of the given error.
 */
export declare function extractViemContractFunctionRevertedErrorName(error: unknown): string | null;
export {};
