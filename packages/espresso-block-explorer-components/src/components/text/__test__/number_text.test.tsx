import { OverrideLocale } from '@/contexts/locale_provider';
import { ProvideDerivedNumberFormatters } from '@/contexts/number_formatters_provider';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NumberText from '../number_text';

describe('Number Text Component', () => {
  it('Should format the value passed to it an a Locale standard way', () => {
    render(
      <div data-testid="1">
        <OverrideLocale locale="hi">
          <ProvideDerivedNumberFormatters>
            <NumberText number={1234567.89} />
          </ProvideDerivedNumberFormatters>
        </OverrideLocale>
      </div>,
    );
    const text = screen.getByTestId('1');
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('12,34,567.89');
  });
});
