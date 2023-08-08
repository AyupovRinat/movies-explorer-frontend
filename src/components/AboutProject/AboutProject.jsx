import React from 'react';
import './AboutProject.css'

function AboutProject() {
  return (
    <section className='about-project' id='aboutproject'>
      <h2 className='section__title about-project__title'>O проекте</h2>
      <div className='about-project__container'>
        <div className='about-project__discription'>
          <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__discription'>
          <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-project__shedule'>
        <div className='about-project__back'>
          <p className='about-project__shedule-title about-project__shedule-title_back'>1 неделя</p>
          <p className='about-project__shedule-caption'>Back-end</p>
        </div>
        <div className='about-project__front'>
          <p className='about-project__shedule-title about-project__shedule-title_front'>4 недели</p>
          <p className='about-project__shedule-caption'>Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
