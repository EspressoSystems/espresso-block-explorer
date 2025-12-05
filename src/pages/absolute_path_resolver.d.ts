import { PathResolver } from '../../../../../../../../../src/components/contexts/path_resolver';
/**
 * AbsolutePathResolver is a PathResolver that generates absolute paths.
 * This is useful for generating links that are not relative to the current
 * webpage.
 */
export declare class AbsolutePathResolver implements PathResolver {
    private default;
    private baseURL;
    constructor(baseURL: URL);
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
