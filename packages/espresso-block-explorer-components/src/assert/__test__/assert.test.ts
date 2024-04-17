import { describe, expect, it } from 'vitest';
import { assert, isDevelopment, isProduction } from '../assert';

describe('Assert', () => {
  describe('Production', () => {
    if (!isProduction()) {
      // We ignore these tests if not in production
      it('should not test in development', () => {});
      return;
    }

    it('should not throw when an assertion passes', async () => {
      expect(() => assert(true)).not.toThrow();
    });

    it('should not throw an error when assertion fails', async () => {
      expect(() => assert(false)).not.toThrow();
    });
  });

  describe('Development', () => {
    if (!isDevelopment()) {
      // We ignore these tests if not in development
      it('should not test in production', () => {});
      return;
    }

    it('should not throw when an assertion passes', async () => {
      expect(() => assert(true)).not.toThrow();
    });

    it('should throw an error when assertion fails', async () => {
      expect(() => assert(false)).toThrow();
    });
  });
});
