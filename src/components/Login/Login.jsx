import React from 'react';
import SignForm from '../SignForm/SignForm';
import './Login.css';

function Login() {
  return (
    <main className='main'>
      <SignForm
        title='Рады видеть!'
        textButton='Войти'
      />
    </main>
  );
}

export default Login;
