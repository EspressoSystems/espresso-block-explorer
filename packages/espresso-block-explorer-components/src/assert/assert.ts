/**
 * assert is meant to mirror a traditional assert function in C, where we can
 * make assertions of our assumptions for documentation. The idea is that this
 * asserts can run in a development / debugging environment, but *should not*
 * be run in production builds.
 */

import { FailedAssertion } from '@/assert/FailedAssertion';

/**
 * AssertExecutor is an interface that defines the contract for the assert
 * function.  This is meant to be used to define the behavior of the assert
 * function in different environments.
 */
interface AssertExecutor {
  assert(booleanExpression: true, message?: string): void;
  assert(booleanExpression: false, message?: string): never;
  assert(booleanExpression: boolean, message?: string): void;
  assert(booleanExpression: true, message?: string): void;
}

/**
 * DebugAssertExecutor is an implementation of the AssertExecutor that will
 * throw a FailedAssertion error when the boolean expression is false.
 * This is meant to be used in development / debugging environments.
 */
class DebugAssertExecutor implements AssertExecutor {
  assert(booleanExpression: true, message?: string): void;
  assert(booleanExpression: false, message?: string): never;
  assert(booleanExpression: boolean, message?: string): void;
  assert(booleanExpression: boolean, message?: string): void {
    if (!booleanExpression) {
      throw new FailedAssertion(message);
    }
  }
}

/**
 * ReleaseAssertExecutor is an implementation of the AssertExecutor that will
 * be a no-op in production builds.  This is meant to be used in production
 * environments.
 */
class ReleaseAssertExecutor implements AssertExecutor {
  assert(booleanExpression: true, message?: string): void;
  assert(booleanExpression: false, message?: string): never;
  assert(booleanExpression: boolean, message?: string): void;
  assert(): void {
    // This is meant to be a no-op in production builds.
  }
}

function createAssertExecutor(): AssertExecutor {
  if (import.meta.env.PROD) {
    return new ReleaseAssertExecutor();
  }

  return new DebugAssertExecutor();
}

export function isProduction(): boolean {
  return assertExecutor instanceof ReleaseAssertExecutor;
}

export function isDevelopment(): boolean {
  return assertExecutor instanceof DebugAssertExecutor;
}

const assertExecutor = createAssertExecutor();

/**
 * assert is a function that will throw a FailedAssertion error when the
 * boolean expression is false.  This is meant to be used in development /
 * debugging environments.
 *
 * When used in a production environment (import.meta.env.PROD === true), this
 * function will be a no-op.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assert(expression: any, message?: string): asserts expression {
  assertExecutor.assert(expression, message);
}

/**
 * assertType is a function that will assert that a given value matches the
 * expected type check. If the assertion fails, an annotated error message
 * will indicate that the types don't match, what the expected type was, and
 * what the actual type was.
 */
export function assertType(value: string, type: 'string'): void;
export function assertType(value: boolean, type: 'boolean'): void;
export function assertType(value: number, type: 'number'): void;
export function assertType(value: object, type: 'object'): void;
export function assertType(value: null, type: 'object'): void;
export function assertType(value: bigint, type: 'bigint'): void;
export function assertType(value: undefined, type: 'undefined'): void;
export function assertType(value: unknown, type: string): never;
export function assertType(value: unknown, type: string) {
  assert(
    typeof value === type,
    `type assertion failed: expected "${type}", received "${typeof value}"`,
  );
}

/**
 * assertNotNull is a function that will assert that a given value is not null.
 */
export function assertNotNull<T>(value: null | T): asserts value is T {
  assert(value !== null, 'expected a non-null value, received null');
}

/**
 * assertInstanceOf ia function that ensures that the given value is in fact
 * an instanceof the given constructor function.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assertInstanceOf<T, C extends abstract new (...args: any) => T>(
  value: T,
  constructor: C,
): void;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assertInstanceOf<T, C extends abstract new (...args: any) => T>(
  value: unknown,
  constructor: C,
): never;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assertInstanceOf<T, C extends abstract new (...args: any) => T>(
  value: unknown,
  constructor: C,
): asserts value is T {
  assert(
    value instanceof constructor,
    `given value is not an instance of "${constructor.name}", specific type is "${typeof value === 'object' && value !== null ? value.constructor.name : typeof value}"`,
  );
}
