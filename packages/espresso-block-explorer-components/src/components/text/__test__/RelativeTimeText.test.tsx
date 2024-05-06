import { CurrentLocale } from '@/contexts/LocaleProvider';
import { Now } from '@/contexts/NowProvider';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RelativeTimeText from '../RelativeTimeText';

describe('Relative Time Text Component', () => {
  it('should format format', () => {
    const date = '2024-01-01T17:10:12.123Z';
    const { rerender } = render(
      <Now.Provider value={new Date('2024-01-01T17:11:00Z')}>
        <CurrentLocale.Provider value="en-US">
          <div data-testid="1">
            <RelativeTimeText date={new Date(date)} />
          </div>
        </CurrentLocale.Provider>
      </Now.Provider>,
    );

    {
      const div = screen.getByTestId('1');
      expect(div).toBeInTheDocument();
      expect(div).toHaveTextContent('47s ago');
    }

    rerender(
      <Now.Provider value={new Date('2024-01-01T18:00:00Z')}>
        <CurrentLocale.Provider value="en-US">
          <div data-testid="1">
            <RelativeTimeText date={new Date(date)} />
          </div>
        </CurrentLocale.Provider>
      </Now.Provider>,
    );

    {
      const div = screen.getByTestId('1');
      expect(div).toBeInTheDocument();
      expect(div).toHaveTextContent('49m ago');
    }

    rerender(
      <Now.Provider value={new Date('2024-01-02T00:00:00Z')}>
        <CurrentLocale.Provider value="en-US">
          <div data-testid="1">
            <RelativeTimeText date={new Date(date)} />
          </div>
        </CurrentLocale.Provider>
      </Now.Provider>,
    );

    {
      const div = screen.getByTestId('1');
      expect(div).toBeInTheDocument();
      expect(div).toHaveTextContent('6h ago');
    }

    rerender(
      <Now.Provider value={new Date('2024-02-01T00:00:00Z')}>
        <CurrentLocale.Provider value="en-US">
          <div data-testid="1">
            <RelativeTimeText date={new Date(date)} />
          </div>
        </CurrentLocale.Provider>
      </Now.Provider>,
    );

    {
      const div = screen.getByTestId('1');
      expect(div).toBeInTheDocument();
      expect(div).toHaveTextContent('30d ago');
    }
  });
});
