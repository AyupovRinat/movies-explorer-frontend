import React from 'react';
import './SearchForm.css';
import Checkbox from '../Checkbox/Checkbox';

function SearchForm() {
  return (
    <section className='searchform'>
      <form className='searchform__form'>
        <fieldset className='searchform__search'>
          <div className='searchform__label'></div>
          <input className='searchform__input' type="search" placeholder='Фильм' required />
          <button type='submit' className='searchform__button button'></button>
        </fieldset>
        <Checkbox />
      </form>
      <div className='searchform__border'></div>
    </section>
  );
};

export default SearchForm;
