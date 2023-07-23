import React from 'react';
import './AboutMe.css';
import foto from '../../images/foto.png'


function AboutMe() {
  return (
    <section className='aboutme' id='aboutme'>
      <h2 className='section__title aboutme__title'>Студент</h2>
      <div className='aboutme__container'>
        <div className='aboutme__profile'>
          <div className='aboutme__name'>Ринат</div>
          <div className='aboutme__job'>Фронтенд-разработчик, 33 года</div>
          <div className='aboutme__description'>Здравствуйте, добрый день. Мне нраваться такие бренды как Версаче, ДольчеГАббана, очки Порше дизайн.
            Люблю туфли из крокодилевой кожи, а особенно их носить. И я стал таким довольно таки матерым шопоголиком. Чего и вам желаю.</div>
          <a href="https://github.com/AyupovRinat" className='aboutme__link link' target='blanc'>Github</a>
        </div>
        <img src={foto} alt="фото студента" className='aboutme__foto' />
      </div>
    </section>
  );
}

export default AboutMe;
