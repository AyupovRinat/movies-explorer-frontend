import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <section className='moviescards'>
      <ul className='moviescards__list'>
        <MoviesCard />
      </ul>
      <button type='button' className='movies__add-button button'>Ещё</button>
    </section>
  );
};

export default MoviesCardList;

