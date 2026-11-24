import { default as React } from 'react';

/**
 * HISTORY_NAVIGATION_MS is how long after the browser's Back or Forward
 * button a change of view still counts as caused by it.
 */
const HISTORY_NAVIGATION_MS = 2_000;

/**
 * RESTORE_MS is how long to keep trying to return to the list's position.
 * The list's rows are not rendered yet when the view changes, so the page
 * is too short to scroll that far until they are back.
 */
const RESTORE_MS = 1_500;

const USER_SCROLL_EVENTS = ['wheel', 'touchstart', 'keydown', 'pointerdown'];

/**
 * scrollToWhenPossible scrolls to a position further down the page as soon
 * as the page is tall enough to reach it, and gives up after RESTORE_MS or
 * when the user starts scrolling themselves. It returns a function that
 * stops it.
 */
function scrollToWhenPossible(top: number): () => void {
  const deadline = Date.now() + RESTORE_MS;
  let frame = 0;
  const stop = () => {
    window.cancelAnimationFrame(frame);
    for (const type of USER_SCROLL_EVENTS) {
      window.removeEventListener(type, stop);
    }
  };
  const attempt = () => {
    window.scrollTo(0, top);
    if (Math.abs(window.scrollY - top) <= 1 || Date.now() >= deadline) {
      stop();
      return;
    }
    frame = window.requestAnimationFrame(attempt);
  };

  for (const type of USER_SCROLL_EVENTS) {
    window.addEventListener(type, stop, { passive: true });
  }
  attempt();
  return stop;
}

/**
 * duringHistoryNavigation says whether the view is changing because of the
 * browser's Back or Forward button.
 *
 * The host's router renders the new view while the popstate event is still
 * being dispatched, before listeners added after its own have run. The
 * event in flight is then the only sign of it. When the router renders
 * later instead, the time of the last popstate is.
 */
function duringHistoryNavigation(lastPopStateAt: number): boolean {
  const inFlight = (window as { event?: Event }).event;
  return (
    inFlight?.type === 'popstate' ||
    Date.now() - lastPopStateAt < HISTORY_NAVIGATION_MS
  );
}

/**
 * useViewScroll sets the scroll position when the Delegation UI switches
 * between the validator list and a validator's page. Both are rendered by
 * the same component, so without it the new view would open wherever the
 * previous one was scrolled to.
 *
 * Opening a view starts at the top, as a separate page load would. Coming
 * back to the list with the browser's Back (or Forward) button returns to
 * where the list was left, so the user doesn't lose their place.
 */
export function useViewScroll(
  showValidator: boolean,
  validatorAddress: undefined | null | string,
): void {
  const listScroll = React.useRef(0);
  const lastPopStateAt = React.useRef(Number.NEGATIVE_INFINITY);
  const mounted = React.useRef(false);

  React.useEffect(() => {
    const onPopState = () => {
      lastPopStateAt.current = Date.now();
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // A layout effect, so the position is set before the new view is painted,
  // and the list's scroll listener is gone before the page, shorter without
  // the list, moves the scroll.
  React.useLayoutEffect(() => {
    let stopRestoring: undefined | (() => void);
    // The first view is a page load, which the browser positions itself.
    if (mounted.current) {
      if (
        !showValidator &&
        listScroll.current > 0 &&
        duringHistoryNavigation(lastPopStateAt.current)
      ) {
        stopRestoring = scrollToWhenPossible(listScroll.current);
      } else {
        window.scrollTo(0, 0);
      }
    }
    mounted.current = true;

    if (showValidator) {
      return;
    }

    // Remember where the list is scrolled to while it is showing.
    const remember = () => {
      listScroll.current = window.scrollY;
    };
    window.addEventListener('scroll', remember, { passive: true });
    return () => {
      stopRestoring?.();
      window.removeEventListener('scroll', remember);
    };
  }, [showValidator, validatorAddress]);
}
