import {
  DefaultPathResolver,
  PathResolver,
} from '@/components/contexts/path_resolver';

/**
 * AbsolutePathResolver is a PathResolver that generates absolute paths.
 * This is useful for generating links that are not relative to the current
 * webpage.
 */
export class AbsolutePathResolver implements PathResolver {
  private default: PathResolver = new DefaultPathResolver();
  private baseURL: URL;
  constructor(baseURL: URL) {
    this.baseURL = baseURL;
  }

  explorer(): string {
    return new URL(`.${this.default.explorer()}`, this.baseURL).toString();
  }

  blocks(startAtBlock?: number): string {
    return new URL(
      `./${this.default.blocks(startAtBlock)}`,
      this.baseURL,
    ).toString();
  }

  block(height: number): string {
    return new URL(`.${this.default.block(height)}`, this.baseURL).toString();
  }

  transactions(startAtBlock?: number, offset?: number): string {
    return new URL(
      `.${this.default.transactions(startAtBlock, offset)}`,
      this.baseURL,
    ).toString();
  }

  transactionsForBlock(block: number): string {
    return new URL(
      `.${this.default.transactionsForBlock(block)}`,
      this.baseURL,
    ).toString();
  }

  transaction(height: number, offset: number): string {
    return new URL(
      `.${this.default.transaction(height, offset)}`,
      this.baseURL,
    ).toString();
  }

  rollUps(): string {
    return new URL(`.${this.default.rollUps()}`, this.baseURL).toString();
  }

  rollUp(namespace: number, startAtBlock?: number, offset?: number): string {
    return new URL(
      `./${this.default.rollUp(namespace, startAtBlock, offset)}`,
      this.baseURL,
    ).toString();
  }

  nodes(): string {
    return new URL(`.${this.default.nodes()}`, this.baseURL).toString();
  }
}
