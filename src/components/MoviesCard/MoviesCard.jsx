import React from 'react';
import { useLocation } from 'react-router-dom';
import PictureOne from '../../images/pica.png';
import PictureTwo from '../../images/picb.png';
import PictureThree from '../../images/picc.png';
import PictureFour from '../../images/picd.png';
import './MoviesCard.css';

function MoviesCard(props) {
  const pathname = useLocation().pathname;

  return (
    <>
      <li className='movie-card'>
        <div className='movie-card__container'>
          <div className='movie-card__info'>
            <h2 className='movie-card__name'>33 слова о дизайне</h2>
            <p className='movie-card__duration'>1ч 47м</p>
          </div>
          {pathname === '/movies' ? (
            <button className='movie-card__like button' type='button'></button>
          ) : (
            <button className='movie-card__delete button' type='button'></button>
          )}
        </div>
        <a href="https://youtu.be/4JTaNzBStD8" className='movie-card__link link' target="blank">
          <img className='movie-card__img' src={PictureOne} alt='Люди рядом с автомобилем' />
        </a>
      </li >
      <li className='movie-card'>
        <div className='movie-card__container'>
          <div className='movie-card__info'>
            <h2 className='movie-card__name'>33 слова о дизайне</h2>
            <p className='movie-card__duration'>1ч 47м</p>
          </div>
          {pathname === '/movies' ? (
            <button className='movie-card__like button' type='button'></button>
          ) : (
            <button className='movie-card__delete button' type='button'></button>
          )}
        </div>
        <a href="https://youtu.be/4JTaNzBStD8" className='movie-card__link link' target="blank">
          <img className='movie-card__img' src={PictureTwo} alt='Мужчина в очках' />
        </a>
      </li >
      <li className='movie-card'>
        <div className='movie-card__container'>
          <div className='movie-card__info'>
            <h2 className='movie-card__name'>33 слова о дизайне</h2>
            <p className='movie-card__duration'>1ч 47м</p>
          </div>
          {pathname === '/movies' ? (
            <button className='movie-card__like movie-card__like_active button' type='button'></button>
          ) : (
            <button className='movie-card__delete button' type='button'></button>
          )}
        </div>
        <a href="https://youtu.be/4JTaNzBStD8" className='movie-card__link link' target="blank">
          <img className='movie-card__img' src={PictureThree} alt='Зал с колоннами' />
        </a>
      </li >
      <li className='movie-card'>
        <div className='movie-card__container'>
          <div className='movie-card__info'>
            <h2 className='movie-card__name'>33 слова о дизайне</h2>
            <p className='movie-card__duration'>1ч 47м</p>
          </div>
          {pathname === '/movies' ? (
            <button className='movie-card__like button' type='button'></button>
          ) : (
            <button className='movie-card__delete button' type='button'></button>
          )}
        </div>
        <a href="https://youtu.be/4JTaNzBStD8" className='movie-card__link link' target="blank">
          <img className='movie-card__img' src={PictureFour} alt='Мик Джагер' />
        </a>
      </li >
      <li className='movie-card'>
        <div className='movie-card__container'>
          <div className='movie-card__info'>
            <h2 className='movie-card__name'>33 слова о дизайне</h2>
            <p className='movie-card__duration'>1ч 47м</p>
          </div>
          {pathname === '/movies' ? (
            <button className='movie-card__like button' type='button'></button>
          ) : (
            <button className='movie-card__delete button' type='button'></button>
          )}
        </div>
        <a href="https://youtu.be/4JTaNzBStD8" className='movie-card__link link' target="blank">
          <img className='movie-card__img' src={PictureFour} alt='Мик Джагер' />
        </a>
      </li >
    </>
  );
};

export default MoviesCard;

