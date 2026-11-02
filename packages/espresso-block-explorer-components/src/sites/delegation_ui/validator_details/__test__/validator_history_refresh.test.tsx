import React from 'react';
import { act, cleanup, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { EnvironmentContext } from '@/components/config/environment';
import { Environment } from '@/models/config/environment/environment';
import { ValidatorHistoryURLContext } from '../../contexts/validator_details_context';
import { useValidatorHistoryFile } from '../validator_details_contexts';
import {
  VALIDATOR_HISTORY_REFRESH_MS,
  ValidatorHistoryFile,
} from '../validator_history_file';

const address = `0x${'aa'.repeat(20)}` as `0x${string}`;
const other = `0x${'bb'.repeat(20)}` as `0x${string}`;
const fixture = (latest_epoch: number): ValidatorHistoryFile => ({
  schema_version: 1,
  network: 'mainnet',
  address,
  generated_at: '2026-10-29T00:00:00Z',
  latest_epoch,
  epochs: [],
  network_epochs: [],
  stake_history: [],
  events: [],
  delegation_baselines: {},
});
const response = (latest: number) => ({
  ok: true,
  status: 200,
  json: async () => fixture(latest),
});
let testId = 0;

function wrapperForTest() {
  const url = `https://review.invalid/history-${testId++}/`;
  return function Wrapper({ children }: React.PropsWithChildren) {
    return (
      <EnvironmentContext.Provider value={Environment.mainnet}>
        <ValidatorHistoryURLContext.Provider value={url}>
          {children}
        </ValidatorHistoryURLContext.Provider>
      </EnvironmentContext.Provider>
    );
  };
}

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2026-10-29T00:00:00Z'));
});
afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('validator history refresh', () => {
  it('refreshes mounted consumers after five minutes and shares requests', async () => {
    const fetch = vi
      .fn()
      .mockResolvedValueOnce(response(1))
      .mockResolvedValue(response(2));
    vi.stubGlobal('fetch', fetch);
    const wrapper = wrapperForTest();
    const first = renderHook(() => useValidatorHistoryFile(address), {
      wrapper,
    });
    const second = renderHook(() => useValidatorHistoryFile(address), {
      wrapper,
    });
    await act(async () => {});
    expect(first.result.current.file).toMatchObject({
      state: 'live',
      file: { latest_epoch: 1 },
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    await act(async () => {
      await vi.advanceTimersByTimeAsync(VALIDATOR_HISTORY_REFRESH_MS);
    });
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(first.result.current.file).toMatchObject({
      state: 'live',
      file: { latest_epoch: 2 },
    });
    expect(second.result.current.file).toMatchObject({
      state: 'live',
      file: { latest_epoch: 2 },
    });
    first.unmount();
    second.unmount();
    await act(async () => {
      await vi.advanceTimersByTimeAsync(VALIDATOR_HISTORY_REFRESH_MS);
      window.dispatchEvent(new Event('focus'));
    });
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it('refreshes on focus after expiry without refetching fresh cache entries', async () => {
    const fetch = vi
      .fn()
      .mockResolvedValueOnce(response(1))
      .mockResolvedValue(response(2));
    vi.stubGlobal('fetch', fetch);
    const { result } = renderHook(() => useValidatorHistoryFile(address), {
      wrapper: wrapperForTest(),
    });
    await act(async () => {
      window.dispatchEvent(new Event('focus'));
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    vi.setSystemTime(Date.now() + VALIDATOR_HISTORY_REFRESH_MS);
    await act(async () => {
      window.dispatchEvent(new Event('focus'));
    });
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(result.current.file).toMatchObject({
      state: 'live',
      file: { latest_epoch: 2 },
    });
  });

  it.each([404, 503])(
    'recovers from an initial %i without remounting',
    async (status) => {
      const fetch = vi
        .fn()
        .mockResolvedValueOnce({ ok: false, status })
        .mockResolvedValue(response(2));
      vi.stubGlobal('fetch', fetch);
      const { result } = renderHook(() => useValidatorHistoryFile(address), {
        wrapper: wrapperForTest(),
      });
      await act(async () => {});
      expect(result.current.file.state).toBe(
        status === 404 ? 'missing' : 'error',
      );
      await act(async () => {
        await vi.advanceTimersByTimeAsync(VALIDATOR_HISTORY_REFRESH_MS);
      });
      expect(result.current.file).toMatchObject({
        state: 'live',
        file: { latest_epoch: 2 },
      });
    },
  );

  it('ignores a late response for the previous validator', async () => {
    let resolveFirst!: (value: ReturnType<typeof response>) => void;
    const fetch = vi
      .fn()
      .mockReturnValueOnce(
        new Promise((resolve) => {
          resolveFirst = resolve;
        }),
      )
      .mockResolvedValue(response(2));
    vi.stubGlobal('fetch', fetch);
    const { result, rerender } = renderHook(
      ({ wallet }) => useValidatorHistoryFile(wallet),
      {
        initialProps: { wallet: address },
        wrapper: wrapperForTest(),
      },
    );
    rerender({ wallet: other });
    await act(async () => {});
    expect(result.current.file).toMatchObject({
      state: 'live',
      file: { latest_epoch: 2 },
    });
    await act(async () => {
      resolveFirst(response(1));
    });
    expect(result.current.file).toMatchObject({
      state: 'live',
      file: { latest_epoch: 2 },
    });
  });
});
