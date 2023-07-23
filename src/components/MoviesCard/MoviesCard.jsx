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
      <li className='moviecard'>
        <div className='moviecard__conteiner'>
          <div className='moviecard__info'>
            <h2 className='moviecard__name'>33 слова о дизайне</h2>
            <p className='moviecard__duration'>1ч 47м</p>
          </div>
          {pathname === '/movies' ? (
            <button className='moviescard__like button' type='button'></button>
          ) : (
            <button className='moviescard__delete button' type='button'></button>
          )}
        </div>
        <a href="https://youtu.be/4JTaNzBStD8" className='moviecard__link link' target="blank">
          <img className='moviecard__img' src={PictureOne} alt='Кадр из фильма' />
        </a>
      </li >
      <li className='moviecard'>
        <div className='moviecard__conteiner'>
          <div className='moviecard__info'>
            <h2 className='moviecard__name'>33 слова о дизайне</h2>
            <p className='moviecard__duration'>1ч 47м</p>
          </div>
          {pathname === '/movies' ? (
            <button className='moviescard__like button' type='button'></button>
          ) : (
            <button className='moviescard__delete button' type='button'></button>
          )}
        </div>
        <a href="https://youtu.be/4JTaNzBStD8" className='moviecard__link link' target="blank">
          <img className='moviecard__img' src={PictureTwo} alt='Кадр из фильма' />
        </a>
      </li >
      <li className='moviecard'>
        <div className='moviecard__conteiner'>
          <div className='moviecard__info'>
            <h2 className='moviecard__name'>33 слова о дизайне</h2>
            <p className='moviecard__duration'>1ч 47м</p>
          </div>
          {pathname === '/movies' ? (
            <button className='moviescard__like moviescard__like_active button' type='button'></button>
          ) : (
            <button className='moviescard__delete button' type='button'></button>
          )}
        </div>
        <a href="https://youtu.be/4JTaNzBStD8" className='moviecard__link link' target="blank">
          <img className='moviecard__img' src={PictureThree} alt='Кадр из фильма' />
        </a>
      </li >
      <li className='moviecard'>
        <div className='moviecard__conteiner'>
          <div className='moviecard__info'>
            <h2 className='moviecard__name'>33 слова о дизайне</h2>
            <p className='moviecard__duration'>1ч 47м</p>
          </div>
          {pathname === '/movies' ? (
            <button className='moviescard__like button' type='button'></button>
          ) : (
            <button className='moviescard__delete button' type='button'></button>
          )}
        </div>
        <a href="https://youtu.be/4JTaNzBStD8" className='moviecard__link link' target="blank">
          <img className='moviecard__img' src={PictureFour} alt='Кадр из фильма' />
        </a>
      </li >
    </>
  );
};

export default MoviesCard;

