'use client';
import React from 'react';
import NavBar from '../../links/nav_bar/NavBar';
import EspressoLogoAndTitle from '../../visual/icons/EspressoLogoAndTitle';
import './header.css';

interface HeaderProps {}

/**
 * Header is a component for creating and display a consistent Header for
 * every Block Explorer Page.
 */
const Header: React.FC<HeaderProps> = (props) => (
  <header {...props}>
    <EspressoLogoAndTitle />
    {/* Spacer */}
    <NavBar />
  </header>
);

export default Header;
