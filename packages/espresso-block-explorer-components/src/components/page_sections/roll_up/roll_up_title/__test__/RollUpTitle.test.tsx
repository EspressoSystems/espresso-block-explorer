import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { curatedRollupMap } from '../../../../../types/data_source/rollup_entry/data';
import RollUpTitle from '../RollUpTitle';

describe('RollUpTitle Component', () => {
  it('should contain the name', () => {
    const { rerender } = render(<RollUpTitle data-testid="1" namespace={1} />);

    const simple = screen.getByTestId('1');
    expect(simple).toBeInTheDocument();
    expect(simple).toHaveTextContent(`Unregistered Rollup (1)`);

    // Test the remaining rollups
    for (const entry of curatedRollupMap.values()) {
      rerender(<RollUpTitle data-testid="1" namespace={entry.namespace} />);
      const element = screen.getByTestId('1');
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent(entry.name);
    }
  });
});
