import { encodeNumberIterableToHexits } from '@/convert/hex/hex';
import { generateAllBlocks } from '@/data_source/fake_data_source/generateFakeData';
import { firstAsyncIterator } from '@/functional/functional_async';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/TransactionPage.stories';

const { Transaction } = composeStories(stories);

describe('TransactionPage', async () => {
  it('should render the story', async () => {
    const block1 = await firstAsyncIterator(generateAllBlocks());
    const transaction1 = await firstAsyncIterator(
      block1.transactions[Symbol.asyncIterator](),
    );

    render(
      <Transaction
        data-testid="1"
        hash={`0x${Array.from(
          encodeNumberIterableToHexits(new Uint8Array(transaction1.hash)),
        ).join('')}`}
      />,
    );

    await waitFor(() => {
      const ele = screen.getByTestId('1');
      const elements = ele.querySelectorAll('.tabled-labeled-value');
      expect(elements.length).greaterThan(0);
    });

    const blockPage = screen.getByTestId('1');
    expect(blockPage).toBeInTheDocument();
  });
});
