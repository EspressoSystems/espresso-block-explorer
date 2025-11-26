import { createBufferedChannel } from '@/async/channel/BufferedChannel';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import AsyncIterableResolver from '../AsyncIterableResolver';
import { AsyncSnapshot, AsyncState } from '../AsyncSnapshot';
import { AsyncSnapshotContext } from '../AsyncSnapshotContext';

describe('Async Iterable Resolver Component', () => {
  it('It Consumes Events one at a Time Successfully', async () => {
    const resolutionStack: AsyncSnapshot<unknown>[] = [];

    const Comp: React.FC = (props) => {
      const snapshot = React.useContext(AsyncSnapshotContext);
      resolutionStack.push(snapshot);
      return (
        <div
          data-async-state={snapshot.asyncState}
          data-async-data={snapshot.data}
          {...props}
        />
      );
    };

    const N = 15;
    const channel = createBufferedChannel<number>(N + 1);

    for (let i = 0; i < N; i++) {
      await channel.publish(i);
    }

    channel.close();

    render(
      <AsyncIterableResolver asyncIterable={channel}>
        <Comp data-testid="1" />
      </AsyncIterableResolver>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('1')).toHaveAttribute(
        'data-async-state',
        String(AsyncState.active),
      );
      expect(screen.getByTestId('1')).toHaveAttribute(
        'data-async-data',
        String(0),
      );
    });

    await waitFor(() => {
      expect(screen.getByTestId('1')).toHaveAttribute(
        'data-async-state',
        String(AsyncState.active),
      );
      expect(screen.getByTestId('1')).toHaveAttribute(
        'data-async-data',
        String(N - 1),
      );
    });

    await waitFor(() => {
      expect(screen.getByTestId('1')).toHaveAttribute(
        'data-async-state',
        String(AsyncState.done),
      );
    });

    expect(resolutionStack.length).gt(N);
    {
      // initial state
      const entry = resolutionStack[0];
      expect(entry.asyncState).equals(AsyncState.waiting);
      expect(entry.hasData).equals(false);
      expect(entry.hasError).equals(false);
      expect(entry.data).equals(undefined);
      expect(entry.error).equals(undefined);
    }

    for (let i = 1; i < N + 1; i++) {
      // intermediate state
      const entry = resolutionStack[i];
      expect(entry.asyncState).equals(AsyncState.active);
      expect(entry.hasData).equals(true);
      expect(entry.hasError).equals(false);
      expect(entry.data).equals(i - 1);
      expect(entry.error).equals(undefined);
    }

    {
      const entry = resolutionStack[resolutionStack.length - 1];
      expect(entry.asyncState).equals(AsyncState.done);
      expect(entry.hasData).equals(true);
      expect(entry.hasError).equals(false);
      expect(entry.data).equals(N - 1);
      expect(entry.error).equals(undefined);
    }
  });
});
