import React from 'react';
import './SearchForm.css';
import Checkbox from '../Checkbox/Checkbox';

function SearchForm({ input, checkbox, onSubmit, onCheck}) {
  const handleSubnit = (event) => {
    event.preventDefault();
    onSubmit();
  }
  return (
    <section className='search-form'>
      <form className='search-form__form' noValidate onSubmit={handleSubnit}>
        <fieldset className='search-form__search'>
          <div className='search-form__label'></div>
          <input className='search-form__input input' type="search" placeholder='Фильм' value={input.value} onChange={input.onChange} />
          <button type='submit' className='search-form__button button'></button>
        </fieldset>
        <Checkbox checkbox={checkbox} onCheck={onCheck} />
      </form>
      <div className='search-form__border'></div>
    </section>
  );
};

export default SearchForm;
