import { ProvideDerivedDateTimeFormatters } from '@/contexts/date_time_formatters_provider';
import { CurrentLocale } from '@/contexts/locale_provider';
import { Now } from '@/contexts/now_provider';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { default as RelativeAndAbsoluteDateTimeText } from '../relative_and_absolute_date_time_text';

describe('Relative And Absolute Date Time Text Component', () => {
  it('should show how long ago, followed by the timestamp', () => {
    const date = new Date('2024-01-01T17:10:12.000Z');
    const absolute = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    }).format(date);

    render(
      <Now.Provider value={new Date('2024-01-01T17:13:12.000Z')}>
        <CurrentLocale.Provider value="en-US">
          <ProvideDerivedDateTimeFormatters>
            <div data-testid="cell">
              <RelativeAndAbsoluteDateTimeText date={date} />
            </div>
          </ProvideDerivedDateTimeFormatters>
        </CurrentLocale.Provider>
      </Now.Provider>,
    );

    const cell = screen.getByTestId('cell');
    expect(cell).toHaveTextContent(`3 mins ago (${absolute})`);

    // One time element carries both halves, with the machine readable value.
    const times = cell.querySelectorAll('time');
    expect(times).toHaveLength(1);
    expect(times[0]).toHaveAttribute('dateTime', '2024-01-01T17:10:12.000Z');
  });
});
