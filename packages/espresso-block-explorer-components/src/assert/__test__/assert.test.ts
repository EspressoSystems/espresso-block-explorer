import { describe, expect, it } from 'vitest';
import { assert } from '../assert';

describe('Assert', () => {
  it('should not throw when an assertion passes', () => {
    expect(() => assert(true)).not.toThrow();
  });

  it('should throw an error when assertion fails', () => {
    expect(() => assert(false)).toThrow();
  });
});
