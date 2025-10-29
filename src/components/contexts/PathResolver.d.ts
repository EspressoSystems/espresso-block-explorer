/**
 * PathResolver is an interface that defines the methods to resolve ths paths
 * for the Block Explorer.
 */
export interface PathResolver {
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
/**
 * DefaultPathResolver is the default implementation of the PathResolver
 * interface.
 */
export declare class DefaultPathResolver implements PathResolver {
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
