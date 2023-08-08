import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isLoggedIn }) {

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  function handleSidebarButtonClick() {
    setSidebarOpen(true);
  }

  function handleCloseSidebar() {
    setSidebarOpen(false);
  }
  
  return (
    <>
      {!isLoggedIn ? (
        <nav className='nav__auth'>
          <NavLink className='nav__link link' to='/signup'>Регистрация</NavLink>
          <NavLink className='nav__link nav__login link' to='/signin'>Войти</NavLink>
        </nav>
      ) : (
        <>
          <nav className='nav__menu'>
            <NavLink className='nav__link link' to='/movies'>Фильмы</NavLink>
            <NavLink className='nav__link link' to='/saved-movies'>Сохраненные фильмы</NavLink>
          </nav>
          <nav className='nav__profile'>
            <NavLink className='nav__profile-link nav__link link' to='/profile'>Аккаунт</NavLink>
          </nav>
          <button className='nav__sidebar-button button' type='button' onClick={handleSidebarButtonClick}></button>
        </>
      )}
      <nav className={`nav__sidebar ${sidebarOpen ? 'nav__sidebar_active' : ''}`}>
        <div className='nav__sidebar-container'>
          <button className='nav__close-button button' type='button' onClick={handleCloseSidebar}></button>
          <ul className='nav__sidebar-links'>
            <li><NavLink className='nav__sidebar-link link' to='/'>Главная</NavLink></li>
            <li><NavLink className='nav__sidebar-link link' to='/movies'>Фильмы</NavLink></li>
            <li><NavLink className='nav__sidebar-link link' to='/saved-movies'>Сохраненные фильмы</NavLink></li>
          </ul>
          <NavLink className='nav__profile-link nav__link link' to='/profile'>Аккаунт</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Navigation;
