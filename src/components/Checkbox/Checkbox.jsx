import React from 'react';
import './Checkbox.css';

function Checkbox() {
  return (
    <div className='checkbox'>
      <input type='checkbox' className='checkbox__input' id='1'></input>
      <label className='checkbox__label' htmlFor="1">Короткометражки</label>
    </div>
  );
};

export default Checkbox;
