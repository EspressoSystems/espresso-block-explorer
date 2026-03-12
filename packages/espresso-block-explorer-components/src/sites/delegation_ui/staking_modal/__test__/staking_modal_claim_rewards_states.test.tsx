import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/staking_modal_claim_rewards_states.stories';

const {
  None,
  Submitting,
  Waiting,
  Submitted,
  WaitingForReceipt,
  ReceiptRetrieved,
  SubmissionError,
  ReceiptReverted,
  AlreadyClaimedError,
  InvalidAuthRootError,
} = composeStories(stories);

describe('Staking Modal:: Claim Rewards States', async () => {
  it('should render the None state error', async () => {
    await expect(act(() => render(<None />))).resolves.not.toThrow();
  });

  it('should render the Submitting state error', async () => {
    await expect(act(() => render(<Submitting />))).resolves.not.toThrow();
  });

  it('should render the Waiting state error', async () => {
    await expect(act(() => render(<Waiting />))).resolves.not.toThrow();
  });
  it('should render the Submitted state error', async () => {
    await expect(act(() => render(<Submitted />))).resolves.not.toThrow();
  });
  it('should render the WaitingForReceipt state error', async () => {
    await expect(
      act(() => render(<WaitingForReceipt />)),
    ).resolves.not.toThrow();
  });
  it('should render the ReceiptRetrieved state error', async () => {
    await expect(
      act(() => render(<ReceiptRetrieved />)),
    ).resolves.not.toThrow();
  });
  it('should render the SubmissionError state error', async () => {
    await expect(act(() => render(<SubmissionError />))).resolves.not.toThrow();
  });

  it('should show error state when receipt status is reverted', async () => {
    await act(() => render(<ReceiptReverted />));

    expect(screen.queryByText('Claim Successful')).not.toBeInTheDocument();
    expect(screen.getByText('Claim Failed')).toBeInTheDocument();
    expect(screen.getByText('Retry')).toBeInTheDocument();
    expect(
      screen.queryByText('Authorization data is stale. Please retry.'),
    ).not.toBeInTheDocument();
  });

  it('should show success-like UI for AlreadyClaimed error', async () => {
    await act(() => render(<AlreadyClaimedError />));

    expect(
      screen.getByText('Your rewards have already been claimed.'),
    ).toBeInTheDocument();
    expect(screen.queryByText('Claim Failed')).not.toBeInTheDocument();
    expect(screen.queryByText('Retry')).not.toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('should show retry message for InvalidAuthRoot error', async () => {
    await act(() => render(<InvalidAuthRootError />));

    expect(screen.getByText('Claim Failed')).toBeInTheDocument();
    expect(
      screen.getByText('Authorization data is stale. Please retry.'),
    ).toBeInTheDocument();
    expect(screen.getByText('Retry')).toBeInTheDocument();
  });
});
