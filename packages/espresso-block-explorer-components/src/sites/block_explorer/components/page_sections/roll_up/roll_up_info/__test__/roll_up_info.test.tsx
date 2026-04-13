import { NamespaceContext } from '@/models/block_explorer/rollup_entry/contexts';
import { curatedRollupMap } from '@/models/block_explorer/rollup_entry/data';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { default as RollUpInfo } from '../roll_up_info';

describe('RollUpInfo Component', () => {
  it('should contain the rollup information', () => {
    const numFormatter = new Intl.NumberFormat('en-US');
    const { rerender } = render(
      <NamespaceContext.Provider value={1}>
        <RollUpInfo data-testid="1" />
      </NamespaceContext.Provider>,
    );

    const simple = screen.getByTestId('1');
    expect(simple).toBeInTheDocument();
    expect(simple).toHaveTextContent('1Namespace-Site-Block Explorer');

    // Test the remaining rollups
    for (const entry of curatedRollupMap.values()) {
      rerender(
        <NamespaceContext.Provider value={entry.namespace}>
          <RollUpInfo data-testid="1" />
        </NamespaceContext.Provider>,
      );
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent(
        `${numFormatter.format(
          entry.namespace,
        )}Namespace${entry.site.toString()}Site${entry?.blockExplorer?.toString() ?? '-'}Block Explorer`,
      );
    }
  });
});
