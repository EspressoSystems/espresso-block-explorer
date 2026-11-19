/** The number of a block's transactions shown per page of the block page. */
export const kBlockTransactionsPerPage = 50;

/**
 * BlockTransactionsPage is one page of a block's transactions, in position
 * order, and the request that loads it.
 */
export interface BlockTransactionsPage {
  /** The position of the page's first transaction. */
  first: number;
  /** The position of the page's last transaction. */
  last: number;
  /** The number of transactions in the block. */
  total: number;
  /** The service's offset: transactions to skip from the block's newest. */
  skip: number;
  /** The number of transactions to request. */
  limit: number;
  /** The first position of the previous page, if there is one. */
  previous: null | number;
  /** The first position of the next page, if there is one. */
  next: null | number;
}

/**
 * blockTransactionsPage returns the page of a block's transactions that holds
 * the given position. A position outside the block gives the first page.
 */
export function blockTransactionsPage(
  total: number,
  position: number,
  perPage: number = kBlockTransactionsPerPage,
): BlockTransactionsPage {
  const first =
    Number.isInteger(position) && position >= 0 && position < total
      ? Math.floor(position / perPage) * perPage
      : 0;
  const end = Math.min(first + perPage, total);

  return {
    first,
    last: Math.max(end - 1, first),
    total,
    skip: total - end,
    // An empty block still needs a valid request; it returns nothing.
    limit: Math.max(end - first, 1),
    previous: first > 0 ? first - perPage : null,
    next: end < total ? end : null,
  };
}

/**
 * parseBlockTransactionsPosition reads the block page's `position` query
 * parameter. Anything other than a whole number gives the first page.
 */
export function parseBlockTransactionsPosition(raw: null | string): number {
  return raw !== null && /^\d+$/.test(raw) ? Number(raw) : 0;
}
