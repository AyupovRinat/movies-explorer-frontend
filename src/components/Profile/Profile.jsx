import React from 'react';
import Header from '../Header/Header';
import './Profile.css'


function Profile({ loggedIn, onSignOut }) {
  return (
    <>
      <Header loggedIn={!loggedIn} />
      <main className='main'>
        <section className='profile'>
          <h1 className='profile__title'>Привет, Ринат!</h1>
          <form className='profile__form'>
            <fieldset className='profile__data'>
              <label className='profile__label'>Имя</label>
              <input className='profile__input input' type="text" name="name" id="" minLength="2" maxLength="40" placeholder='Введите имя' />
            </fieldset>
            <fieldset className='profile__data'>
              <label className='profile__label'>E-mail</label>
              <input className='profile__input input' type="email" name="email" id="" placeholder='Введите E-mail' />
            </fieldset>
            <button type='submit' className='profile__edit-button button'>Редактировать</button>
            <button type='button' className='profile__exit-button button' onClick={onSignOut} >Выйти из аккаунта</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
