import { render } from '@testing-library/react';
import {
  Environment,
  EnvironmentContext,
} from 'espresso-block-explorer-components';
import { describe, expect, it } from 'vitest';
import { DeriveWagmiFromEnvironment } from '../wagmi';

describe('Wagmi Smoke Tests', () => {
  it('mainnet - should not throw', () => {
    render(
      <EnvironmentContext.Provider value={Environment.mainnet}>
        <DeriveWagmiFromEnvironment>
          <div />
        </DeriveWagmiFromEnvironment>
      </EnvironmentContext.Provider>,
    );
  });

  it('decaf - should not throw', () => {
    render(
      <EnvironmentContext.Provider value={Environment.decaf}>
        <DeriveWagmiFromEnvironment>
          <div />
        </DeriveWagmiFromEnvironment>
      </EnvironmentContext.Provider>,
    );
  });

  it('water - should not throw', () => {
    render(
      <EnvironmentContext.Provider value={Environment.water}>
        <DeriveWagmiFromEnvironment>
          <div />
        </DeriveWagmiFromEnvironment>
      </EnvironmentContext.Provider>,
    );
  });

  it('milk - should not throw', () => {
    render(
      <EnvironmentContext.Provider value={Environment.milk}>
        <DeriveWagmiFromEnvironment>
          <div />
        </DeriveWagmiFromEnvironment>
      </EnvironmentContext.Provider>,
    );
  });

  it('fakeData - should not throw', () => {
    render(
      <EnvironmentContext.Provider value={Environment.fakeData}>
        <DeriveWagmiFromEnvironment>
          <div />
        </DeriveWagmiFromEnvironment>
      </EnvironmentContext.Provider>,
    );
  });

  it('unknown - should throw', () => {
    expect(() =>
      render(
        <EnvironmentContext.Provider value={'foo'}>
          <DeriveWagmiFromEnvironment>
            <div />
          </DeriveWagmiFromEnvironment>
        </EnvironmentContext.Provider>,
      ),
    ).toThrowError();
  });
});
