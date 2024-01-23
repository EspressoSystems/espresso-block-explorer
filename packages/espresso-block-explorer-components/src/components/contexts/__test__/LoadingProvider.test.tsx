import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { LoadingContext, SetLoading } from '../LoadingProvider';

let localLoading: null | boolean = null;
const ConsumeLoadingComponent: React.FC = () => {
  localLoading = React.useContext(LoadingContext);
  return <div />;
};

beforeEach(() => {
  localLoading = null;
});

describe('Data Provider', () => {
  describe('No Provider', () => {
    it('should provide false', () => {
      expect(localLoading).toEqual(null);
      render(<ConsumeLoadingComponent />);
      expect(localLoading).toEqual(false);
    });
  });

  describe('Set Data', () => {
    it('should change when data provided changes', async () => {
      expect(localLoading).toEqual(null);
      render(
        <SetLoading loading={true}>
          <ConsumeLoadingComponent />
        </SetLoading>,
      );
      const loading1 = localLoading;
      expect(localLoading).not.toBeNull();

      render(
        <SetLoading loading={false}>
          <ConsumeLoadingComponent />
        </SetLoading>,
      );
      const loading2 = localLoading;
      expect(localLoading).not.toBeNull();

      expect(loading1).not.equal(loading2);
    });
  });
});
