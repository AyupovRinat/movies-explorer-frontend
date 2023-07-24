import React from 'react';
import './SearchForm.css';
import Checkbox from '../Checkbox/Checkbox';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__form'>
        <fieldset className='search-form__search'>
          <div className='search-form__label'></div>
          <input className='search-form__input input' type="search" placeholder='Фильм' required />
          <button type='submit' className='search-form__button button'></button>
        </fieldset>
        <Checkbox />
      </form>
      <div className='search-form__border'></div>
    </section>
  );
};

export default SearchForm;
