import EspressoLogoAndTitle from '@/visual/icons/EspressoLogoAndTitle';
import React from 'react';
import NavBar from '../../links/nav_bar/NavBar';
import './header.css';
import { Link, PathResolverContext } from '../..';

interface HeaderProps { }

/**
 * Header is a component for creating and display a consistent Header for
 * every Block Explorer Page.
 */
const Header: React.FC<HeaderProps> = (props) => {
  const resolver = React.useContext(PathResolverContext);

  return (
    <header {...props}>
      <Link href={resolver.explorer()}>
        <EspressoLogoAndTitle />
      </Link>
      {/* Spacer */}
      <NavBar />
    </header>
  )
};

export default Header;
