import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { ValidatorHistory } from '../sample_history';
import { ValidatorDetailsErrorBoundary } from '../validator_details_error_boundary';
import { ValidatorActivityTable } from '../validator_history';

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

const Throws: React.FC = () => {
  throw new Error('render failed');
};

describe('ValidatorDetailsErrorBoundary', () => {
  it('shows the fallback instead of the children that threw', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    render(
      <div>
        <p>Validator list</p>
        <ValidatorDetailsErrorBoundary fallback={<p>Unavailable</p>}>
          <Throws />
        </ValidatorDetailsErrorBoundary>
      </div>,
    );

    expect(screen.getByText('Validator list')).toBeTruthy();
    expect(screen.getByText('Unavailable')).toBeTruthy();
  });

  it('catches a history row whose date cannot be formatted', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    const history = {
      activity: [
        {
          date: new Date('garbage'),
          kind: 'delegate',
          delegator: `0x${'aa'.repeat(20)}`,
          amount: 1,
          txHash: null,
        },
      ],
      txExplorerURL: null,
    } as unknown as ValidatorHistory;

    render(
      <ValidatorDetailsErrorBoundary fallback={<p>Unavailable</p>}>
        <ValidatorActivityTable history={history} />
      </ValidatorDetailsErrorBoundary>,
    );

    expect(screen.getByText('Unavailable')).toBeTruthy();
  });

  it('tries again when keyed to another validator', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    const view = render(
      <ValidatorDetailsErrorBoundary key="a" fallback={<p>Unavailable</p>}>
        <Throws />
      </ValidatorDetailsErrorBoundary>,
    );
    expect(screen.getByText('Unavailable')).toBeTruthy();

    view.rerender(
      <ValidatorDetailsErrorBoundary key="b" fallback={<p>Unavailable</p>}>
        <p>Validator B</p>
      </ValidatorDetailsErrorBoundary>,
    );
    expect(screen.getByText('Validator B')).toBeTruthy();
  });
});
