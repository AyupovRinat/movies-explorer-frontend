import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';

function MoviesCardList({filteredMovies, showMoreMoviesButton, onMoreMovies, isMoviePreloader, searchMessage, showMovieAdvice,...props }) {
  const { pathname } = useLocation();

  return (
    <section className='movies-cards'>
      <ul className='movies-cards__list'>
        {
          filteredMovies.map((movie) => (
            <MoviesCard key={movie.movieId} movie={movie} {...props } />
          ))
        }
      </ul>
      {
        isMoviePreloader ? <Preloader /> :
        showMoreMoviesButton &&
        <button type='button' onClick={onMoreMovies} className='movies-cards__add-button button'>Ещё</button>
      }
      {
        showMovieAdvice && <p className='movies-cards__advice'>{searchMessage}</p>
      }
    </section>
  );
};

export default MoviesCardList;

