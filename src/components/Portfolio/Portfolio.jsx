import React from 'react';
import './Portfolio.css';
import arrow from '../../images/strelka.svg';


function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a href="https://ayupovrinat.github.io/how-to-learn/" className='portfolio__link link' target='blank'>
            <p className='portfolio__subtitle'>Статичный сайт</p>
            <img src={arrow} alt="указатель" className='portfolio__arrow' />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a href="https://ayupovrinat.github.io/russian-travel/" className='portfolio__link link' target='blank'>
            <p className='portfolio__subtitle'>Адаптивный сайт</p>
            <img src={arrow} alt="указатель" className='portfolio__arrow' />
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a href="https://ayupovrinat.github.io/mesto-react/" className='portfolio__link link' target='blank'>
            <p className='portfolio__subtitle'>Одностраничное приложение</p>
            <img src={arrow} alt="указатель" className='portfolio__arrow' />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
