import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { default as BlobText } from '../blob_text';

describe('BlobText', () => {
  it('says what blobs are on hover', () => {
    render(<BlobText text="Latest Blobs" />);
    expect(screen.getByText('Latest Blobs').getAttribute('title')).toBe(
      'Espresso Transactions',
    );
  });
});
