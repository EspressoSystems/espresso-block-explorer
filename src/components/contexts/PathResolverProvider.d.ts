import { default as React } from 'react';
import { PathResolver } from './PathResolver';
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
