import { curatedRollupMap } from '@/models/block_explorer/rollup_entry/data';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RollUpInfo from '../RollUpInfo';

describe('RollUpInfo Component', () => {
  it('should contain the rollup information', () => {
    const numFormatter = new Intl.NumberFormat('en-US');
    const { rerender } = render(<RollUpInfo data-testid="1" namespace={1} />);

    const simple = screen.getByTestId('1');
    expect(simple).toBeInTheDocument();
    expect(simple).toHaveTextContent('1Namespace-Site-Block Explorer');

    // Test the remaining rollups
    for (const entry of curatedRollupMap.values()) {
      rerender(<RollUpInfo data-testid="1" namespace={entry.namespace} />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent(
        `${numFormatter.format(
          entry.namespace,
        )}Namespace${entry.site.toString()}Site${entry.blockExplorer.toString()}Block Explorer`,
      );
    }
  });
});
