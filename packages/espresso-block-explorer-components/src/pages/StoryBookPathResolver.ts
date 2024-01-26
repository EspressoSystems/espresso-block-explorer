import { PathResolver } from '../components/contexts/PathResolverProvider';

export class StoryBookPathResolver implements PathResolver {
  explorer(): string {
    return '/?path=/story/pages-explorer--explorer';
  }
  blocks(): string {
    return '/?path=/story/pages-blocks--blocks';
  }
  block(height: number): string {
    return `/?path=/story/pages-block--block&args=block:${height}`;
  }
  transactions(): string {
    return '/?path=/story/pages-transactions--transactions';
  }
  transaction(hash: string): string {
    return `/?path=/story/pages-transaction--transaction&args=hash:${encodeURIComponent(
      hash,
    )}`;
  }
  rollUps(): string {
    return '/?path=/story/pages-rollups--rollups';
  }
  rollUp(namespace: number): string {
    return `/?path=/story/pages-rollup--rollup&args=namespace:${namespace}`;
  }
}
