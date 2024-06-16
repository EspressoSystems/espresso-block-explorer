import React, { createContext } from 'react';

/**
 * PageType represents the different page types we are expecting to be on.
 * they may correspond beyond 1 to 1 for different paths.
 */
export enum PageType {
  explorer = 'explorer',
  blocks = 'blocks',
  transactions = 'transactions',
  rollups = 'rollups',
  nodes = 'nodes',

  unknown = 'unknown',
}

function determineBasedOnPathName(pathName: string = location.pathname) {
  if (pathName.startsWith('/block')) {
    return PageType.blocks;
  }

  if (pathName.startsWith('/transaction')) {
    return PageType.transactions;
  }

  if (pathName.startsWith('/rollup')) {
    return PageType.rollups;
  }

  if (pathName === '/') {
    return PageType.explorer;
  }

  return PageType.unknown;
}

/**
 * CurrentPagePathContext represents the current Page Path of the page that
 * we are currently on.
 */
const CurrentPagePathContext = createContext(PageType.explorer);
export { CurrentPagePathContext };

export interface ProvideCurrentPagePathProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideDerivedPagePath will provide the CurrentPagePathContext with the
 * value retrieved from location.pathname.
 */
export const ProvideDerivedPagePath: React.FC<ProvideCurrentPagePathProps> = (
  props,
) => {
  return (
    <CurrentPagePathContext.Provider value={determineBasedOnPathName()}>
      {props.children}
    </CurrentPagePathContext.Provider>
  );
};

export interface OverridePagePathProps {
  page: PageType;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * OverridePagePath allows descendent components to be given a new relative
 * page path.
 */
export const OverridePagePath: React.FC<OverridePagePathProps> = (props) => (
  <CurrentPagePathContext.Provider value={props.page}>
    {props.children}
  </CurrentPagePathContext.Provider>
);
