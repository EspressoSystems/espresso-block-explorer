import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { act, render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/staking_modal_staking_states.stories';

const {
  None,
  ApproveSubmitting,
  ApproveWaiting,
  ApproveSubmitted,
  ApproveWaitingForReceipt,
  ApproveReceiptRetrieved,
  ApproveSubmissionError,

  DelegateSubmitting,
  DelegateWaiting,
  DelegateSubmitted,
  DelegateWaitingForReceipt,
  DelegateReceiptRetrieved,
  DelegateSubmissionError,
} = composeStories(stories);

describe('Staking Modal:: Staking States', async () => {
  it('should render the None state error', async () => {
    await expect(act(() => render(<None />))).resolves.not.toThrow();
  });

  it('should render the ApproveSubmitting state error', async () => {
    await expect(
      act(() => render(<ApproveSubmitting />)),
    ).resolves.not.toThrow();
  });

  it('should render the ApproveWaiting state error', async () => {
    await expect(act(() => render(<ApproveWaiting />))).resolves.not.toThrow();
  });
  it('should render the ApproveSubmitted state error', async () => {
    await expect(
      act(() => render(<ApproveSubmitted />)),
    ).resolves.not.toThrow();
  });
  it('should render the ApproveWaitingForReceipt state error', async () => {
    await expect(
      act(() => render(<ApproveWaitingForReceipt />)),
    ).resolves.not.toThrow();
  });
  it('should render the ApproveReceiptRetrieved state error', async () => {
    await expect(
      act(() => render(<ApproveReceiptRetrieved />)),
    ).resolves.not.toThrow();
  });
  it('should render the ApproveSubmissionError state error', async () => {
    await expect(
      act(() => render(<ApproveSubmissionError />)),
    ).resolves.not.toThrow();
  });

  it('should render the DelegateSubmitting state error', async () => {
    await expect(
      act(() => render(<DelegateSubmitting />)),
    ).resolves.not.toThrow();
  });

  it('should render the DelegateWaiting state error', async () => {
    await expect(act(() => render(<DelegateWaiting />))).resolves.not.toThrow();
  });
  it('should render the DelegateSubmitted state error', async () => {
    await expect(
      act(() => render(<DelegateSubmitted />)),
    ).resolves.not.toThrow();
  });
  it('should render the DelegateWaitingForReceipt state error', async () => {
    await expect(
      act(() => render(<DelegateWaitingForReceipt />)),
    ).resolves.not.toThrow();
  });
  it('should render the DelegateReceiptRetrieved state error', async () => {
    await expect(
      act(() => render(<DelegateReceiptRetrieved />)),
    ).resolves.not.toThrow();
  });
  it('should render the DelegateSubmissionError state error', async () => {
    await expect(
      act(() => render(<DelegateSubmissionError />)),
    ).resolves.not.toThrow();
  });
});
