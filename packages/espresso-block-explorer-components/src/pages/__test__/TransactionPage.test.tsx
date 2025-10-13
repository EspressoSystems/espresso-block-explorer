import { hexArrayBufferCodec } from '@/convert/codec';
import { generateAllBlocks } from '@/data_source/fake_data_source/generateFakeData';
import {
  expandAsyncIterator,
  firstAsyncIterator,
} from '@/functional/functional_async';
import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/TransactionPage.stories';

const { FakeData } = composeStories(stories);

describe('TransactionPage', async () => {
  it('should render the story', async () => {
    const transaction1 = await firstAsyncIterator(
      expandAsyncIterator(generateAllBlocks(), (block) => block.transactions),
    );

    const hash = hexArrayBufferCodec.encode(transaction1.hash.data); // verify that the hash is valid

    render(<FakeData data-testid="1" hash={hash} />);

    await waitFor(() => {
      const ele = screen.getByTestId('1');
      const elements = ele.querySelectorAll('.tabled-labeled-value');
      expect(elements.length).greaterThan(0);
    });

    const blockPage = screen.getByTestId('1');
    expect(blockPage).toBeInTheDocument();
  });
});
