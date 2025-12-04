import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  CurrentDateTimeFormatters,
  OverrideDateTimeFormatters,
  OverrideDateTimeFormattersProps,
  ProvideDerivedDateTimeFormatters,
} from '../date_time_formatters_provider';

let localFormatters: null | OverrideDateTimeFormattersProps['formatters'] =
  null;
const ConsumeNumberFormattersComponent: React.FC = () => {
  const formatters = React.useContext(CurrentDateTimeFormatters);
  localFormatters = formatters;
  return <div />;
};

beforeEach(() => {
  localFormatters = null;
});

describe('Date Time Formatters Provider', () => {
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
        <ProvideDerivedDateTimeFormatters>
          <ConsumeNumberFormattersComponent />
        </ProvideDerivedDateTimeFormatters>,
      );
      expect(localFormatters).not.toBeNull();
    });
  });

  describe('Provide Navigator Language', () => {
    it('should match navigator.language', () => {
      expect(localFormatters).toEqual(null);
      render(
        <ProvideDerivedDateTimeFormatters>
          <ConsumeNumberFormattersComponent />
        </ProvideDerivedDateTimeFormatters>,
      );
      const formatters1 = localFormatters;
      expect(localFormatters).not.toBeNull();

      render(
        <ProvideDerivedDateTimeFormatters>
          <OverrideDateTimeFormatters
            formatters={{
              default: new Intl.DateTimeFormat('en-US', {}),
              utcFullDateTime: new Intl.DateTimeFormat('en-US', {}),
              friendly: new Intl.DateTimeFormat('en-US', {}),
              time: new Intl.DateTimeFormat('en-US', {}),
              relative: new Intl.RelativeTimeFormat('en-US', {}),
              hours: new Intl.NumberFormat('en-US', {}),
              minutes: new Intl.NumberFormat('en-US', {}),
              seconds: new Intl.NumberFormat('en-US', {}),

              numDays: new Intl.NumberFormat('en-US', {}),
              numHours: new Intl.NumberFormat('en-US', {}),
              numMinutes: new Intl.NumberFormat('en-US', {}),
            }}
          >
            <ConsumeNumberFormattersComponent />
          </OverrideDateTimeFormatters>
        </ProvideDerivedDateTimeFormatters>,
      );
      const formatters2 = localFormatters;
      expect(localFormatters).not.toBeNull();

      expect(formatters1).toStrictEqual(formatters2);
      const now = new Date();
      expect(formatters1?.time.format(now)).to.not.equal(
        formatters2?.time.format(now),
      );
      expect(formatters1?.default).not.toBe(formatters2?.default);
    });
  });
});
