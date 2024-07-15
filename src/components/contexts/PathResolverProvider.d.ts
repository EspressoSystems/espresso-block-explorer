import { default as React } from 'react';

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
 * PathResolverContext is a context that provides a utility for generating
 * the relative paths for links to various sections within the application.
 */
export declare const PathResolverContext: React.Context<PathResolver>;
export interface OverridePathResolverProps {
    pathResolver: PathResolver;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * OverridePathResolver allows for a user to override the default PathResolver
 * if one should need to.
 */
export declare const OverridePathResolver: React.FC<OverridePathResolverProps>;
