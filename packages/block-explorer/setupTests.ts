import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);

// This package consumes the components package as a built bundle, so its
// `?worker` specifiers are already hashed `/assets/*.js` URLs that no module
// runner can resolve. Loading them fails asynchronously and keeps logging after
// the test file ends, racing vitest's worker teardown. Worker round-trips are
// covered in the components package, which tests against source `?worker`;
// here every listener is inert, so a test awaiting worker-delivered data would
// time out rather than fail.
class InertWorker implements Worker {
  onmessage = null;
  onmessageerror = null;
  onerror = null;
  postMessage() {}
  terminate() {}
  addEventListener() {}
  removeEventListener() {}
  dispatchEvent() {
    return true;
  }
}

globalThis.Worker = InertWorker;
