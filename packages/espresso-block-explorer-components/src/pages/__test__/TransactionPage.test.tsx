import { encodeNumberIterableToHexits } from '@/convert/hex/hex';
import { generateAllBlocks } from '@/data_source/fake_data_source/generateFakeData';
import {
  expandAsyncIterator,
  firstAsyncIterator,
} from '@/functional/functional_async';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/TransactionPage.stories';

const composedStories = composeStories(stories);
const Default = composedStories.Default as React.FC<{ hash: string }>;

describe('TransactionPage', async () => {
  it('should render the story', async () => {
    const transaction1 = await firstAsyncIterator(
      expandAsyncIterator(generateAllBlocks(), (block) => block.transactions),
    );

    render(
      <Default
        data-testid="1"
        hash={`0x${Array.from(
          encodeNumberIterableToHexits(new Uint8Array(transaction1.hash.data)),
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
