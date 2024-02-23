import React from 'react';

export interface PathResolver {
  explorer(): string;
  blocks(startAtBlock?: number): string;
  block(height: number): string;
  transactions(startAtBlock?: number, offset?: number): string;
  transactionsForBlock(block: number): string;
  transaction(height: number, offset: number): string;
  rollUps(): string;
  rollUp(namespace: number, startAtBlock?: number, offset?: number): string;
}

class DefaultPathResolver implements PathResolver {
  explorer(): string {
    return '/';
  }

  blocks(startAtBlock?: number): string {
    if (startAtBlock !== undefined) {
      return `/blocks?height=${startAtBlock}`;
    }

    return '/blocks';
  }

  block(height: number): string {
    return `/block/${height}`;
  }

  transactions(startAtBlock?: number, offset?: number): string {
    if (startAtBlock !== undefined) {
      return `/transactions?height=${startAtBlock}&offset=${offset ?? 0}`;
    }
    return '/transactions';
  }

  transactionsForBlock(block: number): string {
    return `/transactions?block=${block}`;
  }

  transaction(height: number, offset: number): string {
    return `/transaction/${height}-${offset}`;
  }

  rollUps(): string {
    return '/rollups';
  }

  rollUp(namespace: number, startAtBlock?: number, offset?: number): string {
    if (startAtBlock !== undefined) {
      return `/rollup/${namespace}?height=${startAtBlock}&offset=${
        offset ?? 0
      }`;
    }
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
