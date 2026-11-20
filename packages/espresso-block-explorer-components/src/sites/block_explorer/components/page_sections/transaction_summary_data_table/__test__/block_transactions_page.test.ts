import { describe, expect, it } from 'vitest';
import {
  blockTransactionsPage,
  parseBlockTransactionsPosition,
} from '../block_transactions_page';

describe('blockTransactionsPage', () => {
  it('fits a small block on one page', () => {
    expect(blockTransactionsPage(14, 0)).toEqual({
      first: 0,
      last: 13,
      total: 14,
      skip: 0,
      limit: 14,
      previous: null,
      next: null,
    });
  });

  it('fits exactly one full page without a next page', () => {
    expect(blockTransactionsPage(50, 0)).toMatchObject({
      first: 0,
      last: 49,
      skip: 0,
      limit: 50,
      previous: null,
      next: null,
    });
  });

  it('puts the 51st transaction on a page of its own', () => {
    expect(blockTransactionsPage(51, 0)).toMatchObject({
      first: 0,
      last: 49,
      skip: 1,
      limit: 50,
      next: 50,
    });
    expect(blockTransactionsPage(51, 50)).toMatchObject({
      first: 50,
      last: 50,
      skip: 0,
      limit: 1,
      previous: 0,
      next: null,
    });
  });

  it('splits exactly two pages without a third', () => {
    expect(blockTransactionsPage(100, 50)).toMatchObject({
      first: 50,
      last: 99,
      skip: 0,
      limit: 50,
      next: null,
    });
  });

  // The service counts its offset from the block's newest transaction, so
  // positions 0-49 of 123 skip the newest 73.
  it('requests the oldest positions first', () => {
    expect(blockTransactionsPage(123, 0)).toMatchObject({
      first: 0,
      last: 49,
      skip: 73,
      limit: 50,
      previous: null,
      next: 50,
    });
  });

  it('pages through the middle of a block', () => {
    expect(blockTransactionsPage(123, 50)).toMatchObject({
      first: 50,
      last: 99,
      skip: 23,
      limit: 50,
      previous: 0,
      next: 100,
    });
  });

  it('requests only what is left on the last page', () => {
    expect(blockTransactionsPage(123, 100)).toMatchObject({
      first: 100,
      last: 122,
      skip: 0,
      limit: 23,
      previous: 50,
      next: null,
    });
  });

  it('shows the page that holds a position inside it', () => {
    expect(blockTransactionsPage(123, 77)).toMatchObject({ first: 50 });
  });

  it('falls back to the first page for a position outside the block', () => {
    expect(blockTransactionsPage(123, 123)).toMatchObject({ first: 0 });
    expect(blockTransactionsPage(123, -1)).toMatchObject({ first: 0 });
    expect(blockTransactionsPage(123, 1.5)).toMatchObject({ first: 0 });
  });

  it('still makes a valid request for an empty block', () => {
    expect(blockTransactionsPage(0, 0)).toMatchObject({
      first: 0,
      total: 0,
      skip: 0,
      limit: 1,
      previous: null,
      next: null,
    });
  });
});

describe('parseBlockTransactionsPosition', () => {
  it('reads a whole number', () => {
    expect(parseBlockTransactionsPosition('50')).toBe(50);
    expect(parseBlockTransactionsPosition('0')).toBe(0);
    expect(parseBlockTransactionsPosition('050')).toBe(50);
  });

  // blockTransactionsPage then shows the first page for it.
  it('reads a number too large for any block', () => {
    expect(parseBlockTransactionsPosition('99999999999999999999')).toBe(1e20);
  });

  it('gives the first page for anything else', () => {
    expect(parseBlockTransactionsPosition(null)).toBe(0);
    expect(parseBlockTransactionsPosition('')).toBe(0);
    expect(parseBlockTransactionsPosition('-5')).toBe(0);
    expect(parseBlockTransactionsPosition('1.5')).toBe(0);
    expect(parseBlockTransactionsPosition('1e3')).toBe(0);
    expect(parseBlockTransactionsPosition('abc')).toBe(0);
    expect(parseBlockTransactionsPosition(' 5')).toBe(0);
    expect(parseBlockTransactionsPosition('+5')).toBe(0);
  });
});
