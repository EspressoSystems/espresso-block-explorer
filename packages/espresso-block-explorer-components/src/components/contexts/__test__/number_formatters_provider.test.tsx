import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  CurrentNumberFormatters,
  OverrideNumberFormatterProps,
  OverrideNumberFormatters,
  ProvideDerivedNumberFormatters,
} from '../number_formatters_provider';

let localFormatters: null | OverrideNumberFormatterProps['formatters'] = null;
const ConsumeNumberFormattersComponent: React.FC = () => {
  const formatters = React.useContext(CurrentNumberFormatters);
  localFormatters = formatters;
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
            formatters={{
              default: new Intl.NumberFormat('en-US', {}),
              percentage: new Intl.NumberFormat('en-US', {}),
              bytes: new Intl.NumberFormat('en-US', {}),
              bytesPerSecond: new Intl.NumberFormat('en-US', {}),
              variableBytes: new Intl.NumberFormat('en-US', {}),
              transactionsPerSecond: new Intl.NumberFormat('en-US', {}),
              gwei: new Intl.NumberFormat('en-US', {}),
              wei: new Intl.NumberFormat('en-US', {}),
              USD: new Intl.NumberFormat('en-US', {}),
              GBP: new Intl.NumberFormat('en-US', {}),
              EUR: new Intl.NumberFormat('en-US', {}),
              JPY: new Intl.NumberFormat('en-US', {}),
              ESP: new Intl.NumberFormat('en-US', {}),
              ESPFull: new Intl.NumberFormat('en-US', {}),
              ETH: new Intl.NumberFormat('en-US', {}),
              ETHFull: new Intl.NumberFormat('en-US', {}),
              XBT: new Intl.NumberFormat('en-US', {}),
              XBTFull: new Intl.NumberFormat('en-US', {}),
            }}
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
            formatters={{
              default: new Intl.NumberFormat('de-DE', {}),
              percentage: new Intl.NumberFormat('en-US', {}),
              bytes: new Intl.NumberFormat('en-US', {}),
              bytesPerSecond: new Intl.NumberFormat('en-US', {}),
              variableBytes: new Intl.NumberFormat('en-US', {}),
              transactionsPerSecond: new Intl.NumberFormat('en-US', {}),
              gwei: new Intl.NumberFormat('en-US', {}),
              wei: new Intl.NumberFormat('en-US', {}),
              USD: new Intl.NumberFormat('en-US', {}),
              GBP: new Intl.NumberFormat('en-US', {}),
              EUR: new Intl.NumberFormat('en-US', {}),
              JPY: new Intl.NumberFormat('en-US', {}),
              ESP: new Intl.NumberFormat('en-US', {}),
              ESPFull: new Intl.NumberFormat('en-US', {}),
              ETH: new Intl.NumberFormat('en-US', {}),
              ETHFull: new Intl.NumberFormat('en-US', {}),
              XBT: new Intl.NumberFormat('en-US', {}),
              XBTFull: new Intl.NumberFormat('en-US', {}),
            }}
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
