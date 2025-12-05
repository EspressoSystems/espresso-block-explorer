import { PathResolverContext } from '@/components/contexts/path_resolver_provider';
import { InternalLink } from '@/components/links/link/link';
import EspressoLogoAndTitle from '@/visual/icons/espresso_logo_and_title';
import React from 'react';
import NavBar from '../../links/nav_bar/nav_bar';
import './header.css';

interface HeaderProps {}

/**
 * Header is a component for creating and display a consistent Header for
 * every Block Explorer Page.
 */
const Header: React.FC<HeaderProps> = (props) => {
  const resolver = React.useContext(PathResolverContext);

  return (
    <header className="main" {...props}>
      <InternalLink href={resolver.explorer()}>
        <EspressoLogoAndTitle />
      </InternalLink>
      {/* Spacer */}
      <NavBar />
    </header>
  );
};

export default Header;
