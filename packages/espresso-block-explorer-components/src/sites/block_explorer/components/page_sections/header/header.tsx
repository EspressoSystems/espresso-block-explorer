import { PathResolverContext } from '@/block_explorer/contexts/path_resolver_provider';
import { InternalLink } from '@/block_explorer/components/links/link/link';
import { default as EspressoLogoAndTitle } from '@/visual/icons/espresso_logo_and_title';
import { default as React } from 'react';
import { default as NavBar } from '../../links/nav_bar/nav_bar';
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
