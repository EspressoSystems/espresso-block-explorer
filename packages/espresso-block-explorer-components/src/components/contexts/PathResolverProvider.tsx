import React from 'react';

export interface PathResolver {
  explorer(): string;
  blocks(): string;
  block(height: number): string;
  transactions(): string;
  transaction(hash: string): string;
  rollUps(): string;
  rollUp(namespace: number): string;
}

class DefaultPathResolver implements PathResolver {
  explorer(): string {
    return '/';
  }
  blocks(): string {
    return '/blocks';
  }
  block(height: number): string {
    return `/block/${height}`;
  }
  transactions(): string {
    return '/transactions';
  }
  transaction(hash: string): string {
    return `/transaction/${hash}`;
  }
  rollUps(): string {
    return '/rollups';
  }
  rollUp(namespace: number): string {
    return `/rollup/${namespace}`;
  }
}

/**
 * PathResolverContext is a context that provides a utility for generating
 * the relative paths for links to various sections within the application.
 */
export const PathResolverContext = React.createContext<PathResolver>(
  new DefaultPathResolver(),
);

export interface OverridePathResolverProps {
  pathResolver: PathResolver;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * OverridePathResolver allows for a user to override the default PathResolver
 * if one should need to.
 */
export const OverridePathResolver: React.FC<OverridePathResolverProps> = (
  props,
) => {
  return <PathResolverContext.Provider {...props} value={props.pathResolver} />;
};
