import { PathResolver } from '@/contexts/PathResolver';
import { mapIterable } from '@/functional/functional';

export class StoryBookPathResolver implements PathResolver {
  private readonly suffix: string;

  constructor() {
    // Let's see if we can inspect the suffix for the current URL.
    // Then we can add that suffix to the paths we generate.

    const currentUrl = new URL(window.location.href);
    const pageID = currentUrl.searchParams.get('id') ?? '';
    const suffix = pageID.split('--').pop() ?? 'default';
    this.suffix = suffix!;
  }

  private paramsForPage(
    page: string,
    args?: Iterable<[string, unknown]>,
  ): URLSearchParams {
    const params = new URLSearchParams();
    params.set('path', `/story/pages-${page}--${this.suffix}`);
    if (args) {
      const mappedArgs = Array.from(
        mapIterable(args, ([key, value]) => `${key}:${String(value)}`),
      );

      params.set('args', mappedArgs.join(';'));
    }
    return params;
  }

  private stringForParams(params: URLSearchParams): string {
    return `/?${params.toString()}`;
  }

  explorer(): string {
    return this.stringForParams(this.paramsForPage('explorer'));
  }
  blocks(startAtBlock?: number): string {
    if (startAtBlock !== undefined) {
      return this.stringForParams(
        this.paramsForPage('blocks', [['startAtBlock', startAtBlock]]),
      );
    }
    return this.stringForParams(this.paramsForPage('blocks'));
  }
  block(height: number): string {
    return this.stringForParams(
      this.paramsForPage('block', [['args', `block:${height}`]]),
    );
  }
  transactions(startAtBlock?: number, offset?: number): string {
    if (startAtBlock !== undefined) {
      return this.stringForParams(
        this.paramsForPage('transactions', [
          ['startAtBlock', startAtBlock],
          ['offset', offset ?? 0],
        ]),
      );
    }

    return this.stringForParams(this.paramsForPage('transactions'));
  }
  transactionsForBlock(block: number): string {
    return this.stringForParams(
      this.paramsForPage('transactions-for-block', [['startAtBlock', block]]),
    );
  }
  transaction(height: number, offset: number): string {
    return this.stringForParams(
      this.paramsForPage('transactions', [
        ['startAtBlock', height],
        ['offset', offset],
      ]),
    );
  }
  rollUps(): string {
    return this.stringForParams(this.paramsForPage('rollups'));
  }
  rollUp(namespace: number, startAtBlock?: number, offset?: number): string {
    if (startAtBlock !== undefined) {
      return this.stringForParams(
        this.paramsForPage('rollup', [
          ['namespace', namespace],
          ['startAtBlock', startAtBlock],
          ['offset', offset ?? 0],
        ]),
      );
    }

    return this.stringForParams(
      this.paramsForPage('rollup', [['namespace', namespace]]),
    );
  }
  nodes(): string {
    return this.stringForParams(this.paramsForPage('nodes'));
  }
}
