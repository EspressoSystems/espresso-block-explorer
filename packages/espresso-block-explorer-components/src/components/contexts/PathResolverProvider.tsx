import React from 'react';
import { DefaultPathResolver, PathResolver } from './PathResolver';

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
