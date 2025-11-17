import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/staking_modal_claim_withdraw_states.stories';

const {
  None,
  Submitting,
  Waiting,
  Submitted,
  WaitingForReceipt,
  ReceiptRetrieved,
  SubmissionError,
} = composeStories(stories);

describe('Staking Modal:: Claim Withdraw States', async () => {
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
});
