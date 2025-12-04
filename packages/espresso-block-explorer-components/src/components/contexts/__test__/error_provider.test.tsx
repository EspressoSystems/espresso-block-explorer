import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import {
  ErrorCarry,
  ErrorContext,
  ErrorJoiner,
  SetError,
} from '../ErrorProvider';

let localError: null | unknown = null;
const ConsumeErrorComponent: React.FC = () => {
  localError = React.useContext(ErrorContext);
  return <div />;
};

beforeEach(() => {
  localError = null;
});

describe('Error Provider', () => {
  describe('No Provider', () => {
    it('should provide null', () => {
      expect(localError).toEqual(null);
      render(<ConsumeErrorComponent />);
      expect(localError).toEqual(null);
    });
  });

  describe('Set Data', () => {
    it('should change when data provided changes', async () => {
      expect(localError).toEqual(null);
      render(
        <SetError error={new Error('error 1')}>
          <ConsumeErrorComponent />
        </SetError>,
      );
      const loading1 = localError;
      expect(localError).not.toBeNull();

      render(
        <SetError error={new TypeError('type error 1')}>
          <ConsumeErrorComponent />
        </SetError>,
      );
      const loading2 = localError;
      expect(localError).not.toBeNull();

      expect(loading1).not.equal(loading2);
    });
  });
});

describe('Error Joiner', () => {
  const err1 = new Error('1');
  const err2 = new Error('2');

  it('should carry the error, and return it if no other error', () => {
    render(
      <ErrorContext.Provider value={err2}>
        <ErrorCarry>
          <ErrorContext.Provider value={null}>
            <ErrorJoiner>
              <ConsumeErrorComponent />
            </ErrorJoiner>
          </ErrorContext.Provider>
        </ErrorCarry>
      </ErrorContext.Provider>,
    );

    expect(localError).to.equal(err2);
  });

  it('should prioritize the first error', () => {
    render(
      <ErrorContext.Provider value={err2}>
        <ErrorCarry>
          <ErrorContext.Provider value={err1}>
            <ErrorJoiner>
              <ConsumeErrorComponent />
            </ErrorJoiner>
          </ErrorContext.Provider>
        </ErrorCarry>
      </ErrorContext.Provider>,
    );

    expect(localError).to.equal(err1);
  });

  it('should have no error if nothing is in error', () => {
    render(
      <ErrorContext.Provider value={null}>
        <ErrorCarry>
          <ErrorContext.Provider value={null}>
            <ErrorJoiner>
              <ConsumeErrorComponent />
            </ErrorJoiner>
          </ErrorContext.Provider>
        </ErrorCarry>
      </ErrorContext.Provider>,
    );

    expect(localError).to.equal(null);
  });
});
