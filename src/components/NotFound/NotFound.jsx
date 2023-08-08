import React from 'react';
import './NotFound.css';

const NotFound = ({ onBack }) => {
  return (
    <main className='main'>
      <section className='not-found'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__subtitle'>Страница не найдена</p>
        <button className='not-found__button button' type='button' onClick={onBack}>Назад</button>
      </section>
    </main>
  );
};

export default NotFound;
