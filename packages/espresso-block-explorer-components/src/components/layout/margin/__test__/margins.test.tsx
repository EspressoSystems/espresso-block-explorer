import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { WithEdgeMargin } from '../margins';

describe('Margins Higher Order Component', () => {
  const EdgeMarginDiv = WithEdgeMargin('div');
  it('should have the classes, tag, and text expected', async () => {
    render(<EdgeMarginDiv data-testid="1" />);

    {
      const div = screen.getByTestId('1');
      expect(div).toBeInTheDocument();
      expect(div.tagName).equals('DIV');
      expect(div).toHaveClass('edge-margin');
    }
  });
});
