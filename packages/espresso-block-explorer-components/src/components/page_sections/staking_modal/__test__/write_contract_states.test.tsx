import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import * as stories from '../__docs__/write_contract_states.stories';

const {
  Idle,
  Submitted,
  SubmissionFailure,
  RetrievingReceipt,
  RetrieveReceiptFailure,
  RetrieveReceiptSuccess,
  RetrievingTransaction,
  RetrieveTransactionFailure,
  RetrieveTransactionSuccess,
} = composeStories(stories);

describe('Write Contract States', () => {
  describe('Smoke Tests', () => {
    it('should render Idle', () => {
      render(<Idle />);
    });

    it('should render Submitted', () => {
      render(<Submitted />);
    });

    it('should render SubmissionFailure', () => {
      render(<SubmissionFailure />);
    });

    it('should render RetrievingReceipt', () => {
      render(<RetrievingReceipt />);
    });

    it('should render RetrieveReceiptFailure', () => {
      render(<RetrieveReceiptFailure />);
    });

    it('should render RetrieveReceiptSuccess', () => {
      render(<RetrieveReceiptSuccess />);
    });

    it('should render RetrievingTransaction', () => {
      render(<RetrievingTransaction />);
    });

    it('should render RetrieveTransactionFailure', () => {
      render(<RetrieveTransactionFailure />);
    });

    it('should render RetrieveTransactionSuccess', () => {
      render(<RetrieveTransactionSuccess />);
    });
  });
});
