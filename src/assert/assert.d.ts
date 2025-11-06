/**
 * assert is meant to mirror a traditional assert function in C, where we can
 * make assertions of our assumptions for documentation. The idea is that this
 * asserts can run in a development / debugging environment, but *should not*
 * be run in production builds.
 */
export declare function isProduction(): boolean;
export declare function isDevelopment(): boolean;
/**
 * assert is a function that will throw a FailedAssertion error when the
 * boolean expression is false.  This is meant to be used in development /
 * debugging environments.
 *
 * When used in a production environment (import.meta.env.PROD === true), this
 * function will be a no-op.
 */
export declare function assert(expression: any, message?: string): asserts expression;
/**
 * assertType is a function that will assert that a given value matches the
 * expected type check. If the assertion fails, an annotated error message
 * will indicate that the types don't match, what the expected type was, and
 * what the actual type was.
 */
export declare function assertType(value: string, type: 'string'): void;
export declare function assertType(value: boolean, type: 'boolean'): void;
export declare function assertType(value: number, type: 'number'): void;
export declare function assertType(value: object, type: 'object'): void;
export declare function assertType(value: null, type: 'object'): void;
export declare function assertType(value: bigint, type: 'bigint'): void;
export declare function assertType(value: undefined, type: 'undefined'): void;
export declare function assertType(value: unknown, type: string): never;
/**
 * assertNotNull is a function that will assert that a given value is not null.
 */
export declare function assertNotNull<T>(value: null | T): asserts value is T;
/**
 * assertInstanceOf ia function that ensures that the given value is in fact
 * an instanceof the given constructor function.
 */
export declare function assertInstanceOf<T, C extends abstract new (...args: any) => T>(value: T, constructor: C): void;
export declare function assertInstanceOf<T, C extends abstract new (...args: any) => T>(value: unknown, constructor: C): never;
