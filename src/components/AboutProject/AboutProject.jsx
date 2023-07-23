import React from 'react';
import './AboutProject.css'

function AboutProject() {
  return (
    <section className='aboutproject' id='aboutproject'>
      <h2 className='section__title aboutproject__title'>O проекте</h2>
      <div className='aboutproject__container'>
        <div className='aboutproject__discription'>
          <h3 className='aboutproject__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='aboutproject__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='aboutproject__discription'>
          <h3 className='aboutproject__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='aboutproject__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='aboutproject__shedule'>
        <div className='aboutproject__back'>
          <p className='aboutproject__shedule-title aboutproject__shedule-title_back'>1 неделя</p>
          <p className='aboutproject__shedule-caption'>Back-end</p>
        </div>
        <div className='aboutproject__front'>
          <p className='aboutproject__shedule-title aboutproject__shedule-title_front'>4 недели</p>
          <p className='aboutproject__shedule-caption'>Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
