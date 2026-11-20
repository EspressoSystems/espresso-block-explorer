/**
 * PathResolver is an interface that defines the methods to resolve ths paths
 * for the Block Explorer.
 */
export interface PathResolver {
  explorer(): string;
  blocks(startAtBlock?: number): string;
  /** position picks the page of the block's transactions to show. */
  block(height: number, position?: number): string;
  transactions(startAtBlock?: number, offset?: number): string;
  transactionsForBlock(block: number): string;
  transaction(height: number, offset: number): string;
  rollUps(): string;
  rollUp(namespace: number, startAtBlock?: number, offset?: number): string;
}

/**
 * DefaultPathResolver is the default implementation of the PathResolver
 * interface.
 */
export class DefaultPathResolver implements PathResolver {
  explorer(): string {
    return '/';
  }

  blocks(startAtBlock?: number): string {
    if (startAtBlock !== undefined) {
      return `/blocks?height=${startAtBlock}`;
    }

    return '/blocks';
  }

  block(height: number, position?: number): string {
    if (position !== undefined && position > 0) {
      return `/block/${height}?position=${position}`;
    }

    return `/block/${height}`;
  }

  transactions(startAtBlock?: number, offset?: number): string {
    if (startAtBlock !== undefined) {
      return `/transactions?height=${startAtBlock}&offset=${offset ?? 0}`;
    }
    return '/transactions';
  }

  transactionsForBlock(block: number): string {
    return `/transactions?block=${block}`;
  }

  transaction(height: number, offset: number): string {
    return `/transaction/${height}-${offset}`;
  }

  rollUps(): string {
    return '/rollups';
  }

  rollUp(namespace: number, startAtBlock?: number, offset?: number): string {
    if (startAtBlock !== undefined) {
      return `/rollup/${namespace}?height=${startAtBlock}&offset=${
        offset ?? 0
      }`;
    }
    return `/rollup/${namespace}`;
  }
}
