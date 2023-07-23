import React from 'react';
import { Link } from 'react-router-dom';
import './SignForm.css';

function SignForm({ title, textButton }) {

  return (
    <section className='signform'>
      <Link className='signform_logo' to='/'></Link>
      <h1 className='signform__title'>{title}</h1>
      <form className='signform__form'>
        <div className='signform__input'>
          {title === 'Добро пожаловать!' ? (
            <div className='signform__input-container'>
              <label className='signform__input-label' htmlFor="text">Имя</label>
              <input className='signform__input-text' id='name' name='email' type='text' placeholder='Введите имя' required />
            </div>
          ) : ('')}
          <div className='signform__input-container'>
            <label className='signform__input-label' htmlFor="email">E-mail</label>
            <input className='signform__input-text' id='email' name='email' type='email' placeholder='Введите email' required />
          </div>
          <div className='signform__input-container'>
            <label className='signform__input-label' htmlFor="password">Пароль</label>
            <input className='signform__input-text signform__input-password' id='password' name='password' type='password' placeholder='Введите пароль' required />
            <span className='signform__span'>{title === 'Добро пожаловать!' ? 'Что-то пошло не так...' : ' '}</span>
          </div>
        </div>
        <button type='submit' className={title === 'Добро пожаловать!' ? 'signform__button button' : 'signform__button button signform__button-login'}>
          {textButton}
        </button>
        <div className='signform__links'>
          {title === 'Добро пожаловать!' ? <div className='signform__links-container'>
            <p className='signform__link-text'>Уже зарегистрированы?</p>
            <Link to={'/sign-in'} className='signform__link'>Войти</Link>
          </div>
            : <div className='signform__links-container'>
              <p className='signform__link-text'>Еще не зарегистрированы?</p>
              <Link to={'/sign-up'} className='signform__link'>Регистрация</Link>
            </div>}
        </div>
      </form>
    </section>

  )
}

export default SignForm;
