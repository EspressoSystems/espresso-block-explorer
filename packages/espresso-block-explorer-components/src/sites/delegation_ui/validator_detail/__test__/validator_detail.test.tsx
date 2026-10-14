import { composeStories } from '@storybook/react-vite';
import '@testing-library/jest-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import * as stories from '../__docs__/validator_detail.stories';
import { deriveValidatorAddressFromQueryParameters } from '../validator_detail';
import { ValidatorDetailPlaceholder } from '../validator_detail_content';

const { FakeData, UnknownValidator, NoAddress } = composeStories(stories);

describe('Validator Detail', { timeout: 30_000 }, () => {
  it('should render the details of a known validator', async () => {
    const { container } = await act(async () => render(<FakeData />));

    expect(
      await screen.findByText('Current Epoch Performance'),
    ).toBeInTheDocument();
    await waitFor(() =>
      expect(container.querySelector('.skeleton-content')).toBeNull(),
    );
  });

  it('should report an unknown validator', async () => {
    await act(async () => render(<UnknownValidator />));

    expect(
      await screen.findByText('This address is not a registered validator.'),
    ).toBeInTheDocument();
  });

  it('should report a missing address', async () => {
    await act(async () => render(<NoAddress />));

    expect(
      await screen.findByText('No valid validator address was given.'),
    ).toBeInTheDocument();
  });
});

describe('deriveValidatorAddressFromQueryParameters', () => {
  const address = '0x4c57e041e38ad226186980af1ab67b391e074c4d';
  const derive = (query: string) =>
    deriveValidatorAddressFromQueryParameters(new URLSearchParams(query));

  it('should read a lowercase address', () => {
    expect(derive(`address=${address}`)).toBe(address);
  });

  it('should normalize a checksummed address to lowercase', () => {
    expect(derive('address=0x4C57e041E38aD226186980aF1aB67b391E074C4d')).toBe(
      address,
    );
  });

  it('should return null for a missing address', () => {
    expect(derive('')).toBeNull();
  });

  it('should return null for a malformed address', () => {
    expect(derive('address=node101')).toBeNull();
  });
});

describe('ValidatorDetailPlaceholder', () => {
  it('should show the page labels with skeleton values', () => {
    const { container } = render(<ValidatorDetailPlaceholder />);

    expect(screen.getByText('Total Stake')).toBeInTheDocument();
    expect(screen.getByText('Estimated APR')).toBeInTheDocument();
    expect(screen.getByText('Vote Participation')).toBeInTheDocument();
    expect(container.querySelectorAll('.skeleton-content').length).toBe(8);
  });
});
