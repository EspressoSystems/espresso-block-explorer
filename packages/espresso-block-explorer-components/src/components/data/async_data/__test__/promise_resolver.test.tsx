import '@testing-library/jest-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { AsyncSnapshot, AsyncState } from '../async_snapshot';
import { AsyncSnapshotContext } from '../async_snapshot_context';
import PromiseResolver from '../promise_resolver';

describe('Promise Resolver Component', () => {
  it('Resolves Successfully', async () => {
    const resolutionStack: AsyncSnapshot<unknown>[] = [];

    const Comp: React.FC = (props) => {
      const snapshot = React.useContext(AsyncSnapshotContext);
      resolutionStack.push(snapshot);
      return <div data-async-state={snapshot.asyncState} {...props} />;
    };

    const { rerender } = await act(async () =>
      render(
        <PromiseResolver promise={Promise.resolve(1)}>
          <Comp data-testid="1" />
        </PromiseResolver>,
      ),
    );

    await waitFor(() => {
      expect(screen.getByTestId('1')).toHaveAttribute(
        'data-async-state',
        String(AsyncState.done),
      );
    });

    expect(resolutionStack.length).equals(2);
    {
      // First state
      const entry = resolutionStack[0];
      expect(entry.asyncState).equals(AsyncState.waiting);
      expect(entry.hasData).equals(false);
      expect(entry.hasError).equals(false);
      expect(entry.data).equals(undefined);
      expect(entry.error).equals(undefined);
    }
    {
      // second state
      const entry = resolutionStack[1];
      expect(entry.asyncState).equals(AsyncState.done);
      expect(entry.hasData).equals(true);
      expect(entry.hasError).equals(false);
      expect(entry.data).equals(1);
      expect(entry.error).equals(undefined);
    }

    rerender(
      <PromiseResolver promise={Promise.resolve(2)}>
        <Comp data-testid="1" />
      </PromiseResolver>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('1')).toHaveAttribute(
        'data-async-state',
        String(AsyncState.done),
      );
    });

    // We get a duplicate of the previous state when we rerender the
    // component.
    expect(resolutionStack.length).equals(5);
    {
      // second state (again)
      const entry = resolutionStack[2];
      expect(entry.asyncState).equals(AsyncState.done);
      expect(entry.hasData).equals(true);
      expect(entry.hasError).equals(false);
      expect(entry.data).equals(1);
      expect(entry.error).equals(undefined);
    }
    {
      // third state
      const entry = resolutionStack[3];
      expect(entry.asyncState).equals(AsyncState.waiting);
      expect(entry.hasData).equals(false);
      expect(entry.hasError).equals(false);
      expect(entry.data).equals(undefined);
      expect(entry.error).equals(undefined);
    }
    {
      // fourth state
      const entry = resolutionStack[4];
      expect(entry.asyncState).equals(AsyncState.done);
      expect(entry.hasData).equals(true);
      expect(entry.hasError).equals(false);
      expect(entry.data).equals(2);
      expect(entry.error).equals(undefined);
    }
  });

  it('Rejects Successfully', async () => {
    const resolutionStack: AsyncSnapshot<unknown>[] = [];

    const Comp: React.FC = (props) => {
      const snapshot = React.useContext(AsyncSnapshotContext);
      resolutionStack.push(snapshot);
      return <div data-async-state={snapshot.asyncState} {...props} />;
    };

    render(
      <PromiseResolver promise={Promise.reject(1)}>
        <Comp data-testid="1" />
      </PromiseResolver>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('1')).toHaveAttribute(
        'data-async-state',
        String(AsyncState.done),
      );
    });

    expect(resolutionStack.length).equals(2);
    {
      // First state
      const entry = resolutionStack[0];
      expect(entry.asyncState).equals(AsyncState.waiting);
      expect(entry.hasData).equals(false);
      expect(entry.hasError).equals(false);
      expect(entry.data).equals(undefined);
      expect(entry.error).equals(undefined);
    }
    {
      // second state
      const entry = resolutionStack[1];
      expect(entry.asyncState).equals(AsyncState.done);
      expect(entry.hasData).equals(false);
      expect(entry.hasError).equals(true);
      expect(entry.data).equals(undefined);
      expect(entry.error).equals(1);
    }
  });
});
