import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <section className='movies-cards'>
      <ul className='movies-cards__list'>
        <MoviesCard />
      </ul>
      <button type='button' className='movies-cards__add-button button'>Ещё</button>
    </section>
  );
};

export default MoviesCardList;

