import React from 'react';
import './Checkbox.css';

function Checkbox({ checkbox, onCheck }) {
  return (
    <div className='checkbox'>
      <input type='checkbox' className='checkbox__input' id='1' onChange={onCheck} checked={checkbox}></input>
      <label className='checkbox__label' htmlFor="1">Короткометражки</label>
    </div>
  );
};

export default Checkbox;
