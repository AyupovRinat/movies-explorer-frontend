import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation'

function Header({ isLoggedIn }) {

const pathname = useLocation().pathname;

  return (
    <header className={`header ${pathname==='/' ? 'header__promo' : ''}`}>
      <Link className='header__logo button' to='/'></Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  )
}

export default Header;
