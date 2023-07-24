import React from 'react';
import { Link } from 'react-router-dom';
import './SignForm.css';

function SignForm({ title, textButton }) {

  return (
    <section className='sign-form'>
      <Link className='sign-form_logo button' to='/'></Link>
      <h1 className='sign-form__title'>{title}</h1>
      <form className='sign-form__form'>
        <div className='sign-form__input'>
          {title === 'Добро пожаловать!' ? (
            <div className='sign-form__input-container'>
              <label className='sign-form__input-label' htmlFor="text">Имя</label>
              <input className='sign-form__input-text input' id='name' name='email' type='text' placeholder='Введите имя' minLength="2" maxLength="40" required />
            </div>
          ) : ('')}
          <div className='sign-form__input-container'>
            <label className='sign-form__input-label' htmlFor="email">E-mail</label>
            <input className='sign-form__input-text input' id='email' name='email' type='email' placeholder='Введите email' required />
          </div>
          <div className='sign-form__input-container'>
            <label className='sign-form__input-label' htmlFor="password">Пароль</label>
            <input className='sign-form__input-text sign-form__input-password input' id='password' name='password' type='password' minLength="4" maxLength="40" placeholder='Введите пароль' required />
            <span className='sign-form__span'>{title === 'Добро пожаловать!' ? 'Что-то пошло не так...' : ' '}</span>
          </div>
        </div>
        <button type='submit' className={title === 'Добро пожаловать!' ? 'sign-form__button button' : 'sign-form__button button sign-form__button-login'}>
          {textButton}
        </button>
        <div className='sign-form__links'>
          {title === 'Добро пожаловать!' ? <div className='sign-form__links-container'>
            <p className='sign-form__link-text'>Уже зарегистрированы?</p>
            <Link to={'/signin'} className='sign-form__link link'>Войти</Link>
          </div>
            : <div className='sign-form__links-container'>
              <p className='sign-form__link-text'>Еще не зарегистрированы?</p>
              <Link to={'/signup'} className='sign-form__link  link'>Регистрация</Link>
            </div>}
        </div>
      </form>
    </section>

  )
}

export default SignForm;
