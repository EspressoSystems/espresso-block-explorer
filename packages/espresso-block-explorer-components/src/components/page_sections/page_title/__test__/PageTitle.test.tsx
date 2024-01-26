import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Heading1 } from '../../../layout/heading';
import Text from '../../../text/Text';
import PageTitle from '../PageTitle';

describe('Page Title', () => {
  it('should have the correct classes', () => {
    render(
      <PageTitle data-testid="1">
        <Heading1>
          <Text text="Hello" />
        </Heading1>
      </PageTitle>,
    );

    const title = screen.getByTestId('1');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('page-title edge-margin');
  });
});
