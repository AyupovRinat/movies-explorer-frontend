import React from 'react';
import SignForm from '../SignForm/SignForm';
import './Register.css';

function Register() {

  return (
    <main className='main'>
      <SignForm
        title="Добро пожаловать!"
        textButton="Зарегистрироваться"
      />
    </main>
  );
}

export default Register;
