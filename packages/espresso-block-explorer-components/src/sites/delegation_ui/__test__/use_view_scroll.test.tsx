import { act, cleanup, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useViewScroll } from '../use_view_scroll';

const validator = `0x${'ab'.repeat(20)}`;
const other = `0x${'cd'.repeat(20)}`;

interface View {
  address: undefined | string;
}

let scrollTo: ReturnType<typeof vi.fn>;

function renderView(initial: View = { address: undefined }) {
  return renderHook(
    ({ address }: View) => useViewScroll(address !== undefined, address),
    { initialProps: initial },
  );
}

/** How far down the page can be scrolled; the list is the long view. */
let pageHeight = 0;

function setScrollY(y: number) {
  Object.defineProperty(window, 'scrollY', { value: y, configurable: true });
}

/** The user scrolls the page to a position. */
function userScrollsTo(y: number) {
  setScrollY(y);
  act(() => {
    window.dispatchEvent(new Event('scroll'));
  });
}

/** The user follows a link, which is how a view is left without Back. */
function followLink() {
  act(() => {
    document.body.click();
  });
}

/** The user presses the browser's Back or Forward button. */
function historyButton() {
  act(() => {
    window.dispatchEvent(new PopStateEvent('popstate'));
  });
}

beforeEach(() => {
  pageHeight = 10_000;
  // Like a browser, scrolling stops at the end of the page.
  scrollTo = vi.fn((_x: number, y: number) => {
    setScrollY(Math.min(y, pageHeight));
    window.dispatchEvent(new Event('scroll'));
  });
  vi.stubGlobal('scrollTo', scrollTo);
  setScrollY(0);
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('useViewScroll', () => {
  it('leaves the first view where the browser put it', () => {
    renderView();
    expect(scrollTo).not.toHaveBeenCalled();
  });

  it('opens a validator at the top', () => {
    const view = renderView();
    userScrollsTo(2400);
    followLink();
    view.rerender({ address: validator });

    expect(scrollTo).toHaveBeenCalledExactlyOnceWith(0, 0);
  });

  it('returns to where the list was left when going Back', () => {
    const view = renderView();
    userScrollsTo(2400);
    followLink();
    view.rerender({ address: validator });
    // Scrolling and clicking around the validator page must not move the
    // remembered position.
    userScrollsTo(300);
    followLink();

    historyButton();
    view.rerender({ address: undefined });

    expect(scrollTo).toHaveBeenLastCalledWith(0, 2400);
    expect(window.scrollY).toBe(2400);
  });

  it('returns to the list position when the router renders during the Back press', () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    const view = renderView();
    userScrollsTo(2400);
    followLink();
    view.rerender({ address: validator });

    // The router's listener was added first, and it renders the list
    // before the hook's own listener hears of the Back press.
    const router = () => view.rerender({ address: undefined });
    window.addEventListener('popstate', router, true);
    vi.setSystemTime(Date.now() + 60_000);
    historyButton();
    window.removeEventListener('popstate', router, true);

    expect(window.scrollY).toBe(2400);
  });

  it('waits for the list to be tall enough to return to its position', () => {
    vi.useFakeTimers({
      toFake: ['requestAnimationFrame', 'cancelAnimationFrame', 'Date'],
    });
    const view = renderView();
    userScrollsTo(2400);
    followLink();
    view.rerender({ address: validator });

    // Back: the list's rows are not rendered yet, so the page is short.
    pageHeight = 0;
    historyButton();
    view.rerender({ address: undefined });
    expect(window.scrollY).toBe(0);

    vi.advanceTimersToNextFrame();
    expect(window.scrollY).toBe(0);
    pageHeight = 10_000;
    vi.advanceTimersToNextFrame();
    expect(window.scrollY).toBe(2400);

    // It stops once it is there.
    const calls = scrollTo.mock.calls.length;
    vi.advanceTimersToNextFrame();
    expect(scrollTo.mock.calls.length).toBe(calls);
  });

  it('stops returning to the position when the user scrolls instead', () => {
    vi.useFakeTimers({
      toFake: ['requestAnimationFrame', 'cancelAnimationFrame', 'Date'],
    });
    const view = renderView();
    userScrollsTo(2400);
    followLink();
    view.rerender({ address: validator });
    pageHeight = 0;
    historyButton();
    view.rerender({ address: undefined });

    window.dispatchEvent(new Event('wheel'));
    pageHeight = 10_000;
    vi.advanceTimersToNextFrame();

    expect(window.scrollY).toBe(0);
  });

  it('returns to the list position when Forward left it and Back returns', () => {
    const view = renderView();
    followLink();
    view.rerender({ address: validator });
    historyButton();
    view.rerender({ address: undefined });
    userScrollsTo(1800);
    // Forward: no link is followed this time.
    historyButton();
    view.rerender({ address: validator });
    expect(scrollTo).toHaveBeenLastCalledWith(0, 0);

    historyButton();
    view.rerender({ address: undefined });
    expect(window.scrollY).toBe(1800);
  });

  it('opens the list at the top when a link leads to it', () => {
    const view = renderView();
    userScrollsTo(2400);
    followLink();
    view.rerender({ address: validator });
    followLink();
    view.rerender({ address: undefined });

    expect(scrollTo).toHaveBeenLastCalledWith(0, 0);
  });

  it('opens a validator at the top when going Forward to it', () => {
    const view = renderView();
    userScrollsTo(2400);
    followLink();
    view.rerender({ address: validator });
    historyButton();
    view.rerender({ address: undefined });
    historyButton();
    view.rerender({ address: validator });

    expect(scrollTo).toHaveBeenLastCalledWith(0, 0);
  });

  it('starts at the top when moving from one validator to another', () => {
    const view = renderView({ address: validator });
    view.rerender({ address: other });

    expect(scrollTo).toHaveBeenCalledExactlyOnceWith(0, 0);
  });

  it('forgets a Back press that did not change the view', () => {
    vi.useFakeTimers();
    const view = renderView();
    userScrollsTo(2400);
    followLink();
    view.rerender({ address: validator });
    historyButton();
    vi.advanceTimersByTime(10_000);
    view.rerender({ address: undefined });

    expect(scrollTo).toHaveBeenLastCalledWith(0, 0);
  });
});
