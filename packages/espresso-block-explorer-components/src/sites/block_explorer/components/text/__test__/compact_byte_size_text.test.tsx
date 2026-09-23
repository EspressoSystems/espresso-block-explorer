import { CurrentLocale } from '@/contexts/locale_provider';
import { ProvideDerivedNumberFormatters } from '@/contexts/number_formatters_provider';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { default as CompactByteSizeText } from '../compact_byte_size_text';

function renderSize(bytes: number, withExact?: boolean) {
  const { unmount } = render(
    <CurrentLocale.Provider value="en-US">
      <ProvideDerivedNumberFormatters>
        <div data-testid="size">
          <CompactByteSizeText bytes={bytes} withExact={withExact} />
        </div>
      </ProvideDerivedNumberFormatters>
    </CurrentLocale.Provider>,
  );
  const span = screen.getByTestId('size').firstElementChild!;
  const result = {
    text: span.textContent,
    title: span.getAttribute('title'),
  };
  unmount();
  return result;
}

describe('Compact Byte Size Text Component', () => {
  it('should show the rounded size, with the exact count on hover', () => {
    expect(renderSize(1500000)).toEqual({
      text: '1.5 MB',
      title: '1,500,000 bytes',
    });
  });

  it('should follow the rounded size with the exact count when asked', () => {
    expect(renderSize(1500000, true)).toEqual({
      text: '1.5 MB (1,500,000 bytes)',
      title: '1,500,000 bytes',
    });
  });

  it('should show a plain byte count on its own', () => {
    // Below a kilobyte the rounded size already is the exact count.
    expect(renderSize(0, true)).toEqual({ text: '0 B', title: null });
    expect(renderSize(512, true)).toEqual({ text: '512 B', title: null });
  });
});
