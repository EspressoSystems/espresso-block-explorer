import * as matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest';

expect.extend(matchers);

// The components package is consumed here as a built bundle, so its `?worker`
// imports are already hashed `/assets/*.js` URLs that no module runner can
// resolve. Loading them fails asynchronously and keeps logging after the test
// file ends, racing vitest's worker teardown.
class InertWorker implements Worker {
  onmessage = null;
  onmessageerror = null;
  onerror = null;
  postMessage = vi.fn();
  terminate = vi.fn();
  addEventListener = vi.fn();
  removeEventListener = vi.fn();
  dispatchEvent = vi.fn(() => false);
}

vi.stubGlobal('Worker', InertWorker);
