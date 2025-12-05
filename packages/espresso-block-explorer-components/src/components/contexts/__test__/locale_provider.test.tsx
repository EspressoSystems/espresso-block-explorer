import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  CurrentLocale,
  OverrideLocale,
  ProvideNavigatorLanguage,
} from '../locale_provider';

let localLocale: null | string = null;
const ConsumeLocaleComponent: React.FC = () => {
  const locale = React.useContext(CurrentLocale);
  localLocale = locale;
  return <div />;
};

beforeEach(() => {
  localLocale = null;
});

describe('Locale Provider', () => {
  describe('No Provider', () => {
    it('should match navigator.languages', () => {
      expect(localLocale).toEqual(null);
      render(<ConsumeLocaleComponent />);
      expect(localLocale).toEqual(navigator.language);
    });
  });

  describe('Provide Navigator Language', () => {
    it('should match navigator.language', () => {
      expect(localLocale).toEqual(null);
      render(
        <ProvideNavigatorLanguage>
          <ConsumeLocaleComponent />
        </ProvideNavigatorLanguage>,
      );
      expect(localLocale).toEqual(navigator.language);
    });
  });

  describe('Provide Navigator Language', () => {
    it('should match navigator.language', () => {
      expect(localLocale).toEqual(null);
      render(
        <ProvideNavigatorLanguage>
          <OverrideLocale locale="hi">
            <ConsumeLocaleComponent />
          </OverrideLocale>
        </ProvideNavigatorLanguage>,
      );
      expect(localLocale).toEqual('hi');

      render(
        <ProvideNavigatorLanguage>
          <OverrideLocale locale="fr-FR">
            <ConsumeLocaleComponent />
          </OverrideLocale>
        </ProvideNavigatorLanguage>,
      );
      expect(localLocale).toEqual('fr-FR');
    });
  });
});
