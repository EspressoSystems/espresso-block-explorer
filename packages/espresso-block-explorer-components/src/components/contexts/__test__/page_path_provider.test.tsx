import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  CurrentPagePathContext,
  determineBasedOnPathName,
  OverridePagePath,
  PageType,
  ProvideDerivedPagePath,
} from '../PagePathProvider';

let localPathResolver: null | string = null;
const ConsumePagePathProvider: React.FC = () => {
  localPathResolver = React.useContext(CurrentPagePathContext);
  return <div />;
};

beforeEach(() => {
  localPathResolver = null;
});

describe('determineBasedOnPathName', () => {
  test('should pass specific path prefix cases', () => {
    expect(determineBasedOnPathName('/block/123')).toEqual(PageType.blocks);
    expect(determineBasedOnPathName('/transaction/123')).toEqual(
      PageType.transactions,
    );
    expect(determineBasedOnPathName('/transactions/123')).toEqual(
      PageType.transactions,
    );
    expect(determineBasedOnPathName('/rollup/123')).toEqual(PageType.rollups);
    expect(determineBasedOnPathName('/rollups/123')).toEqual(PageType.rollups);
    expect(determineBasedOnPathName('/')).toEqual(PageType.explorer);
    expect(determineBasedOnPathName('')).toEqual(PageType.unknown);
  });
});

describe('Page Path Provider Context', () => {
  describe('No Provider', () => {
    it('should provide something', () => {
      expect(localPathResolver).toEqual(null);
      render(<ConsumePagePathProvider />);
      expect(localPathResolver).not.toBeNull();
    });
  });

  describe('ProvideDerivedPagePath', () => {
    it('should provide something', () => {
      expect(localPathResolver).toEqual(null);
      render(
        <ProvideDerivedPagePath>
          <ConsumePagePathProvider />
        </ProvideDerivedPagePath>,
      );
      expect(localPathResolver).not.toBeNull();
    });
  });

  describe('Override Page Path Provider', () => {
    it('should change every second', async () => {
      expect(localPathResolver).toEqual(null);
      render(
        <OverridePagePath page={PageType.unknown}>
          <ConsumePagePathProvider />
        </OverridePagePath>,
      );
      const path = localPathResolver;
      expect(path).not.toBeNull();
      expect(path).equals('unknown');
    });
  });
});
