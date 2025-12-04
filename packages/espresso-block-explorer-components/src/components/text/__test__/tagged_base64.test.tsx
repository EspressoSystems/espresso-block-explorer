import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TaggedBase64Text from '../tagged_base64_text';

describe('Tagged Base 64 Text Component', () => {
  it('should format with full value', () => {});

  it('should format as truncated value', () => {
    render(
      <div data-testid="1">
        <TaggedBase64Text
          value={
            new TaggedBase64(
              'TAG',
              new Uint8Array([0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef])
                .buffer,
            )
          }
        />
      </div>,
    );
    const text = screen.getByTestId('1');
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('ASNFZ4mrze8');
  });

  it('should format non-truncated', () => {
    render(
      <div data-testid="1">
        <TaggedBase64Text
          value={
            new TaggedBase64(
              'TAG',
              new Uint8Array([
                0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc,
                0xba, 0x98, 0x76, 0x54, 0x32, 0x10,
              ]).buffer,
            )
          }
        />
      </div>,
    );
    const text = screen.getByTestId('1');
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent('TAG~ASNF…qYdlQyEA');
  });
});
