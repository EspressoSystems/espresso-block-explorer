import { ProvideDerivedDateTimeFormatters } from '@/contexts/date_time_formatters_provider';
import { CurrentLocale } from '@/contexts/locale_provider';
import { Now } from '@/contexts/now_provider';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { default as RelativeTimeSinceDateText } from '../relative_time_since_date_text';

/**
 * renderSince renders how long before `now` the given `date` was, formatted
 * for the given locale, and returns the text that came out.
 */
function renderSince(date: string, now: string, locale = 'en-US'): string {
  const { unmount } = render(
    <Now.Provider value={new Date(now)}>
      <CurrentLocale.Provider value={locale}>
        <ProvideDerivedDateTimeFormatters>
          <div data-testid="since">
            <RelativeTimeSinceDateText date={new Date(date)} />
          </div>
        </ProvideDerivedDateTimeFormatters>
      </CurrentLocale.Provider>
    </Now.Provider>,
  );
  const text = screen.getByTestId('since').textContent ?? '';
  unmount();
  return text;
}

describe('Relative Time Text Component', () => {
  const date = '2024-01-01T17:10:12.123Z';

  it('should word elapsed time the way block explorers do', () => {
    expect(renderSince(date, '2024-01-01T17:11:00Z')).toBe('47 secs ago');
    expect(renderSince(date, '2024-01-01T18:00:00Z')).toBe('49 mins ago');
    expect(renderSince(date, '2024-01-02T00:00:00Z')).toBe('6 hrs ago');
    expect(renderSince(date, '2024-02-01T00:00:00Z')).toBe('30 days ago');
  });

  it('should use the singular for exactly one of a unit', () => {
    expect(renderSince(date, '2024-01-01T17:10:13.123Z')).toBe('1 sec ago');
    expect(renderSince(date, '2024-01-01T17:11:12.123Z')).toBe('1 min ago');
    expect(renderSince(date, '2024-01-01T18:10:12.123Z')).toBe('1 hr ago');
    expect(renderSince(date, '2024-01-02T17:10:12.123Z')).toBe('1 day ago');
  });

  it('should never read as zero or as the future', () => {
    // Less than a second old.
    expect(renderSince(date, '2024-01-01T17:10:12.500Z')).toBe('1 sec ago');
    // Slightly ahead of the viewer's clock.
    expect(renderSince(date, '2024-01-01T17:10:10Z')).toBe('1 sec ago');
  });

  it('should leave other languages to the browser', () => {
    // Compared against Intl itself, as French spaces its units with a
    // non-breaking space that varies between ICU versions.
    const expected = new Intl.RelativeTimeFormat('fr-FR', {
      style: 'short',
      numeric: 'always',
    }).format(-5, 'seconds');
    const text = renderSince(date, '2024-01-01T17:10:17.123Z', 'fr-FR');
    expect(text).toBe(expected);
    // The narrow style this replaced rendered it as "-5 s".
    expect(text).not.toMatch(/^-/);
  });
});
