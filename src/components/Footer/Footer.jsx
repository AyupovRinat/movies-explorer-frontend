import React from 'react';
import './Footer.css';



function Footer() {
  return (
    <section className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__container'>
        <p className='footer__date'>&copy; {(new Date().getFullYear())}</p>
        <ul className='footer-links'>
          <li className='footer-link-item'>
            <a href="https://practicum.yandex.ru/" target='blank' className='footer__link link'>Яндекс.Практикум</a>
          </li>
          <li className='footer-link-item'>
            <a href="https://github.com/AyupovRinat" target='blank' className='footer__link link'>Github</a>
          </li>
        </ul>
      </div>

    </section >
  );
}

export default Footer;
