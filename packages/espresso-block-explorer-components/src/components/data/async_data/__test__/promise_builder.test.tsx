import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { AsyncSnapshot, AsyncState } from '../async_snapshot';
import PromiseBuilder, { PromiseBuilderBuilderProps } from '../promise_builder';

describe('Promise Builder Component', () => {
  it('Resolves Successfully', async () => {
    const resolutionStack: AsyncSnapshot<unknown>[] = [];

    const Comp: React.FC<PromiseBuilderBuilderProps<unknown>> = (props) => {
      const snapshot = props.snapshot;
      resolutionStack.push(snapshot);

      return <div data-testid="1" data-async-state={snapshot.asyncState} />;
    };

    render(<PromiseBuilder promise={Promise.resolve(1)} builder={Comp} />);

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
  });
});
