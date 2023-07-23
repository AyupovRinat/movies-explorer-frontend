import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation'

function Header({ loggedIn }) {

const pathname = useLocation().pathname;

  return (
    <header className={`header ${pathname==='/' ? 'header__promo' : ''}`}>
      <Link className='header__logo' to='/'></Link>
      <Navigation loggedIn={loggedIn} />
    </header>
  )
}

export default Header;
