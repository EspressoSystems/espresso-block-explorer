import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  CurrentNumberFormatters,
  OverrideNumberFormatterProps,
  OverrideNumberFormatters,
  ProvideDerivedNumberFormatters,
} from '../NumberFormattersProvider';

let localFormatters: null | OverrideNumberFormatterProps['formatters'] = null;
const ConsumeNumberFormattersComponent: React.FC = () => {
  const locale = React.useContext(CurrentNumberFormatters);
  localFormatters = locale;
  return <div />;
};

beforeEach(() => {
  localFormatters = null;
});

describe('Number Formatters Provider', () => {
  describe('No Provider', () => {
    it('should match navigator.languages', () => {
      expect(localFormatters).toEqual(null);
      render(<ConsumeNumberFormattersComponent />);
      expect(localFormatters).not.toBeNull();
    });
  });

  describe('Provide Navigator Language', () => {
    it('should match navigator.language', () => {
      expect(localFormatters).toEqual(null);
      render(
        <ProvideDerivedNumberFormatters>
          <ConsumeNumberFormattersComponent />
        </ProvideDerivedNumberFormatters>,
      );
      expect(localFormatters).not.toBeNull();
    });
  });

  describe('Provide Navigator Language', () => {
    it('should match navigator.language', () => {
      expect(localFormatters).toEqual(null);
      render(
        <ProvideDerivedNumberFormatters>
          <OverrideNumberFormatters
            formatters={{ default: new Intl.NumberFormat('en-US', {}) }}
          >
            <ConsumeNumberFormattersComponent />
          </OverrideNumberFormatters>
        </ProvideDerivedNumberFormatters>,
      );
      const formatters1 = localFormatters;
      expect(localFormatters).not.toBeNull();

      render(
        <ProvideDerivedNumberFormatters>
          <OverrideNumberFormatters
            formatters={{ default: new Intl.NumberFormat('de-DE', {}) }}
          >
            <ConsumeNumberFormattersComponent />
          </OverrideNumberFormatters>
        </ProvideDerivedNumberFormatters>,
      );
      const formatters2 = localFormatters;
      expect(localFormatters).not.toBeNull();

      expect(formatters1).toStrictEqual(formatters2);
      expect(formatters1?.default.format(12345.67)).to.not.equal(
        formatters2?.default.format(12345.67),
      );
      expect(formatters1?.default).not.toBe(formatters2?.default);
    });
  });
});
