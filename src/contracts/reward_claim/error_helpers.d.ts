/**
 * isAlreadyClaimedError is a helper function that checks if the given error
 * has a `ContractFunctionRevertedError` with an `errorName` of
 * `AlreadyClaimed` within the error provided.
 */
export declare function isAlreadyClaimedError(error: unknown): boolean;
/**
 * isInvalidAuthRootError is a helper function that checks if the given error
 * has a `ContractFunctionRevertedError` with an `errorName` of
 * `InvalidAuthRoot` within the error provided.
 */
export declare function isInvalidAuthRootError(error: unknown): boolean;
