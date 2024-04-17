/**
 * assert is meant to mirror a traditional assert function in C, where we can
 * make assertions of our assumptions for documentation. The idea is that this
 * asserts can run in a development / debugging environment, but *should not*
 * be run in production builds.
 */

import { FailedAssertion } from '../errors/FailedAssertion';

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
export function assert(booleanExpression: true, message?: string): void;
export function assert(booleanExpression: false, message?: string): never;
export function assert(booleanExpression: boolean, message?: string): void;
export function assert(booleanExpression: true, message?: string): void;
export function assert(booleanExpression: boolean, message?: string): void {
  assertExecutor.assert(booleanExpression, message);
}
