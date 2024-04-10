/**
 * assert is meant to mirror a traditional assert function in C, where we can
 * make assertions of our assumptions for documentation. The idea is that this
 * asserts can run in a development / debugging environment, but *should not*
 * be run in production builds.
 */

export class FailedAssertion extends Error {
  constructor(message: string = 'assertion failed') {
    super(message);
    // eslint-disable-next-line no-debugger
    debugger;
  }

  toJSON() {
    return {
      name: FailedAssertion.name,
      message: this.message,
    };
  }
}

/*
function assertDebug(booleanExpression: true, message?: string): void;
function assertDebug(booleanExpression: false, message?: string): never;
function assertDebug(booleanExpression: boolean, message?: string): void;
function assertDebug(booleanExpression: boolean, message?: string): void {
  if (!booleanExpression) {
    throw new FailedAssertion(message);
  }
}

function assertRelease(booleanExpression: true, message?: string): void;
function assertRelease(booleanExpression: false, message?: string): never;
function assertRelease(booleanExpression: boolean, message?: string): void;
function assertRelease(): void {
  // This is meant to be a no-op in production builds.
}

let assert = assertDebug;

if (import.meta.env.PROD) {
  assert = assertRelease;
}

export { assert };
*/

interface AssertExecutor {
  assert(booleanExpression: true, message?: string): void;
  assert(booleanExpression: false, message?: string): never;
  assert(booleanExpression: boolean, message?: string): void;
  assert(booleanExpression: true, message?: string): void;
}

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

const assertExecutor = createAssertExecutor();

export function assert(booleanExpression: true, message?: string): void;
export function assert(booleanExpression: false, message?: string): never;
export function assert(booleanExpression: boolean, message?: string): void;
export function assert(booleanExpression: true, message?: string): void;
export function assert(booleanExpression: boolean, message?: string): void {
  assertExecutor.assert(booleanExpression, message);
}
