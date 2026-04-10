import { PageType } from '@/block_explorer/contexts/page_path_provider';
import { PathResolverContext } from '@/block_explorer/contexts/path_resolver_provider';
import { default as Text } from '@/text/text';
import { default as React } from 'react';
import { default as NavLink } from '../nav_link/nav_link';

/**
 * MainNavLinks is a component that contains all of the main navigation links
 * for use in the main nav bar components.
 */
const MainNavLinks: React.FC = () => {
  const resolver = React.useContext(PathResolverContext);

  return (
    <ul>
      <li>
        <NavLink pageType={PageType.explorer} href={resolver.explorer()}>
          <Text text="Explorer" />
        </NavLink>
      </li>
      <li>
        <NavLink
          pageType={PageType.transactions}
          href={resolver.transactions()}
        >
          <Text text="Transactions" />
        </NavLink>
      </li>
      <li>
        <NavLink pageType={PageType.blocks} href={resolver.blocks()}>
          <Text text="Blocks" />
        </NavLink>
      </li>
      {/* <li>
        <NavLink pageType={PageType.rollups} href={resolver.rollUps()}>
          <Text text="Rollups" />
        </NavLink>
      </li> */}
      <li>
        <NavLink pageType={PageType.nodes} href={resolver.nodes()}>
          <Text text="Nodes" />
        </NavLink>
      </li>
    </ul>
  );
};

export default MainNavLinks;
