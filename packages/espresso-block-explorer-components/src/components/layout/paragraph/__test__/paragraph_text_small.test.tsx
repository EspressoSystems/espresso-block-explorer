import Text from '@/text/Text';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ParagraphTextSmall from '../ParagraphTextSmall';

describe('Paragraph Text Small Component', () => {
  it('should have the classes, tag, and text expected', async () => {
    render(
      <ParagraphTextSmall data-testid="1">
        <Text text="This is some text for a paragraph" />
      </ParagraphTextSmall>,
    );

    {
      const paragraph = screen.getByTestId('1');
      expect(paragraph).toBeInTheDocument();
      expect(paragraph).toHaveTextContent('This is some text for a paragraph');
      expect(paragraph.tagName).equals('P');
      expect(paragraph).toHaveClass('type--paragraph--small');
    }
  });
});
