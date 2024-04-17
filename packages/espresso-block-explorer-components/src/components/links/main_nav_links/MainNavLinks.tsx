import React from 'react';
import { PageType } from '../../contexts/PagePathProvider';
import { PathResolverContext } from '../../contexts/PathResolverProvider';
import Text from '../../text/Text';
import NavLink from '../nav_link/NavLink';

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
      <li>
        <NavLink pageType={PageType.rollups} href={resolver.rollUps()}>
          <Text text="Rollups" />
        </NavLink>
      </li>
    </ul>
  );
};

export default MainNavLinks;
