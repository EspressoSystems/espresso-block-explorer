import { PathResolver } from '../components/contexts/PathResolverProvider';

export class StoryBookPathResolver implements PathResolver {
  explorer(): string {
    return '/?path=/story/pages-explorer--explorer';
  }
  blocks(startAtBlock?: number): string {
    if (startAtBlock !== undefined) {
      return `/?path=/story/pages-blocks--blocks&args=startAtBlock:${startAtBlock}`;
    }
    return '/?path=/story/pages-blocks--blocks';
  }
  block(height: number): string {
    return `/?path=/story/pages-block--block&args=block:${height}`;
  }
  transactions(startAtBlock?: number, offset?: number): string {
    if (startAtBlock !== undefined) {
      return `/?path=/story/pages-transactions--transactions&args=startAtBlock:${startAtBlock};offset:${
        offset ?? 0
      }`;
    }
    return '/?path=/story/pages-transactions--transactions';
  }
  transactionsForBlock(block: number): string {
    return `?path=/story/pages-transactions-for-block--transactions-for-block&args=block:${block}`;
  }
  transaction(height: number, offset: number): string {
    return `/?path=/story/pages-transaction--transaction&args=height:${height};offset:${offset}`;
  }
  rollUps(): string {
    return '/?path=/story/pages-rollups--rollups';
  }
  rollUp(namespace: number, startAtBlock?: number, offset?: number): string {
    if (startAtBlock !== undefined) {
      return `/?path=/story/pages-rollup--rollup&args=namespace:${namespace};startAtBlock:${startAtBlock};offset:${
        offset ?? 0
      }`;
    }
    return `/?path=/story/pages-rollup--rollup&args=namespace:${namespace}`;
  }
}
