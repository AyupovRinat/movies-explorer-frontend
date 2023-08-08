import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({movie, onSave, checkIsSaved, onDelete}) {
  const { pathname } = useLocation();
  const hour = Math.floor(movie.duration / 60)
  const time = `${hour ? hour + 'ч ' : ''}${movie.duration % 60}м`;
  // если есть функция проверки лайка, порверяю лайк, если нет то это страница лайкнутых фильмов
  const isSaved = checkIsSaved ? checkIsSaved(movie) : pathname === '/saved-movies';
  
  const handleCardClick = () => isSaved ? onDelete(movie) : onSave(movie);

  return (
    <li className='movie-card'>
      <div className='movie-card__container'>
        <div className='movie-card__info'>
          <h2 className='movie-card__name'>{movie.nameRU}</h2>
          <p className='movie-card__duration'>{time}</p>
        </div>
        {pathname === '/movies' ? (
          <button onClick={handleCardClick} className={`movie-card__like button${isSaved ? ' movie-card__like_active' : ''}`} type='button'></button>
        ) : (
          <button onClick={handleCardClick} className='movie-card__delete button' type='button'></button>
        )}
      </div>
      <a href={movie.trailerLink} className='movie-card__link link' target="blank">
        <img className='movie-card__img' src={movie.image} alt='Люди рядом с автомобилем' />
      </a>
    </li >
  );
};

export default MoviesCard;

