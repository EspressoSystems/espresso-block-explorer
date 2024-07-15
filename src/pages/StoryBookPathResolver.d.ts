import { PathResolver } from '../../../../../../../../../src/components/contexts/PathResolverProvider';

export declare class StoryBookPathResolver implements PathResolver {
    explorer(): string;
    blocks(startAtBlock?: number): string;
    block(height: number): string;
    transactions(startAtBlock?: number, offset?: number): string;
    transactionsForBlock(block: number): string;
    transaction(height: number, offset: number): string;
    rollUps(): string;
    rollUp(namespace: number, startAtBlock?: number, offset?: number): string;
    nodes(): string;
}
