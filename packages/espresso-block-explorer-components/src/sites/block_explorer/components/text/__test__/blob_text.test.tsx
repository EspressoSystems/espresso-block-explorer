import { DataContext } from '@/contexts/data_provider';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LatestBlocksSummaryDataTable } from '../../page_sections/block_summary_data_table/block_summary_data_table';
import { default as BlobText } from '../blob_text';

describe('BlobText', () => {
  it('shows the definition of a blob on hover', () => {
    render(<BlobText text="Latest Blobs" />);
    expect(screen.getByText('Latest Blobs').getAttribute('title')).toBe(
      'Blob: An Espresso Transaction',
    );
  });

  it('gives the blob count column header the same definition', () => {
    render(
      <DataContext.Provider value={[]}>
        <LatestBlocksSummaryDataTable />
      </DataContext.Provider>,
    );
    expect(
      screen
        .getByRole('columnheader', { name: '# Blobs' })
        .getAttribute('title'),
    ).toBe('Blob: An Espresso Transaction');
  });
});
