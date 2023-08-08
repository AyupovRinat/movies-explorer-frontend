import React from 'react';
import './AboutMe.css';
import foto from '../../images/foto.png'


function AboutMe() {
  return (
    <section className='about-me' id='aboutme'>
      <h2 className='section__title about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__profile'>
          <p className='about-me__name'>Ринат</p>
          <p className='about-me__job'>Фронтенд-разработчик, 33 года</p>
          <p className='about-me__description'>Здравствуйте, добрый день. Мне нраваться такие бренды как Версаче, ДольчеГАббана, очки Порше дизайн.
            Люблю туфли из крокодилевой кожи, а особенно их носить. Пиджаки люблю такие итальянские или французские с бархатом. И я стал таким довольно таки матерым шопоголиком. Чего и вам желаю.</p>
          <a href="https://github.com/AyupovRinat" className='about-me__link link' target='blank'>Github</a>
        </div>
        <img src={foto} alt="фото студента" className='about-me__img' />
      </div>
    </section>
  );
}

export default AboutMe;
