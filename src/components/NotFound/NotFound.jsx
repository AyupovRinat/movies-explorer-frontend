import React from 'react';
import './NotFound.css';

const NotFound = ({ onBack }) => {
  return (
    <main className='notfound'>
      <h1 className='notfound__title'>404</h1>
      <p className='notfound__subtitle'>Страница не найдена</p>
      <button className='notfound__button button' type='button' onClick={onBack}>Назад</button>
    </main>
  );
};

export default NotFound;
