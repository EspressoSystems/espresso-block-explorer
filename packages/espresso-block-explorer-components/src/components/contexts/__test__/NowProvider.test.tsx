import { sleep } from '@/async/sleep';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Now, ProvideTickEverySecond } from '../NowProvider';

let localNow: null | Date = null;
const ConsumeNowComponent: React.FC = () => {
  localNow = React.useContext(Now);
  return <div />;
};

beforeEach(() => {
  localNow = null;
});

describe('Now Provider', () => {
  describe('No Provider', () => {
    it('should provide something', () => {
      expect(localNow).toEqual(null);
      render(<ConsumeNowComponent />);
      expect(localNow).not.toBeNull();
    });
  });

  describe('Override Path Resolver', () => {
    it('should change every second', async () => {
      expect(localNow).toEqual(null);
      render(
        <ProvideTickEverySecond>
          <ConsumeNowComponent />
        </ProvideTickEverySecond>,
      );
      const date1 = localNow;
      expect(localNow).not.toBeNull();

      await sleep(2000);
      const date2 = localNow;
      expect(localNow).not.toBeNull();

      expect(date1?.valueOf()).not.equal(date2?.valueOf());
    });
  });
});
