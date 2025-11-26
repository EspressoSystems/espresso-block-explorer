/**
 * A breakpoint function that triggers the debugger in development builds.
 * In production builds, this function is a no-op.
 */
interface breakpointExecutor {
  breakpoint(): void;
}

/**
 * DebugBreakpointExecutor is an implementation of the BreakpointExecutor that
 * will trigger a debugger statement when breakpoint is called.
 */
class DebugBreakpointExecutor implements breakpointExecutor {
  breakpoint(): void {
    // eslint-disable-next-line no-debugger
    debugger;
  }
}

/**
 * ReleaseBreakpointExecutor is an implementation of the BreakpointExecutor that
 * will be a no-op in production builds.
 */
class ReleaseBreakpointExecutor implements breakpointExecutor {
  breakpoint(): void {
    // This is meant to be a no-op in production builds.
  }
}

/**
 * createBreakpointExecutor creates a BreakpointExecutor based on the
 * environment (development or production).
 */
function createBreakpointExecutor(): breakpointExecutor {
  if (import.meta.env.PROD) {
    return new ReleaseBreakpointExecutor();
  }

  return new DebugBreakpointExecutor();
}

export function isProduction(): boolean {
  return breakpointExecutor instanceof ReleaseBreakpointExecutor;
}

export function isDevelopment(): boolean {
  return breakpointExecutor instanceof DebugBreakpointExecutor;
}

const breakpointExecutor = createBreakpointExecutor();

/**
 * breakpoint is a function that will trigger a debugger statement when
 * called in development builds.
 */
export function breakpoint(): void {
  breakpointExecutor.breakpoint();
}
