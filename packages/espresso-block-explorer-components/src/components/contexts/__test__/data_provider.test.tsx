import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { DataContext, SetData } from '../data_provider';

let localData: null | unknown = null;
const ConsumeDataComponent: React.FC = () => {
  localData = React.useContext(DataContext);
  return <div />;
};

beforeEach(() => {
  localData = null;
});

describe('Data Provider', () => {
  describe('No Provider', () => {
    it('should provide null', () => {
      expect(localData).toEqual(null);
      render(<ConsumeDataComponent />);
      expect(localData).toEqual(null);
    });
  });

  describe('Set Data', () => {
    it('should change when data provided changes', async () => {
      expect(localData).toEqual(null);
      render(
        <SetData data={1}>
          <ConsumeDataComponent />
        </SetData>,
      );
      const data1 = localData;
      expect(localData).not.toBeNull();

      render(
        <SetData data={'hello'}>
          <ConsumeDataComponent />
        </SetData>,
      );
      const data2 = localData;
      expect(localData).not.toBeNull();

      expect(data1).not.equal(data2);
    });
  });
});
