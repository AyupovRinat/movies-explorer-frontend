import React from 'react';
import './NavTab.css'

function NavTab() {
  return (
    <section className='nav-tab'>
      <nav className='nav-tab__links'>
        <ul className='nav-tab__list'>
          <li className='nav-tab__link'><a href='#aboutproject' className='nav-tab__link link'>О проекте</a></li>
          <li className='nav-tab__link'><a href='#techs' className='nav-tab__link link'>Технологии</a></li>
          <li className='nav-tab__link'><a href='#aboutme' className='nav-tab__link link'>Студент</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
