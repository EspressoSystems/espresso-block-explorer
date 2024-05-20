import EspressoLogoAndTitle from '@/visual/icons/EspressoLogoAndTitle';
import React from 'react';
import NavBar from '../../links/nav_bar/NavBar';
import './header.css';
import { Link } from '../..';

interface HeaderProps { }

/**
 * Header is a component for creating and display a consistent Header for
 * every Block Explorer Page.
 */
const Header: React.FC<HeaderProps> = (props) => (
  <header {...props}>
    <Link href="/">
      <EspressoLogoAndTitle />
    </Link>
    {/* Spacer */}
    <NavBar />
  </header>
);

export default Header;
