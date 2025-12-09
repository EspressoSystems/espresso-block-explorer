import * as matchers from '@testing-library/jest-dom/matchers';
import '@vitest/web-worker';
import { expect } from 'vitest';
import 'vitest-canvas-mock';

expect.extend(matchers);
