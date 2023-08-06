import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './SignForm.css';

function SignForm({ title, textButton, question, linkText, linkPath, children, disableForm, onSubmit, serverMessage, isLoggedIn }) {
  const [isRequesting, setIsRequesting] = useState(false);

  const handleSubmit = (evt) => {
    setIsRequesting(true);
    evt.preventDefault();
    onSubmit().finally(() => setIsRequesting(false))
  };
  
  if (isLoggedIn) return <Navigate to='/' replace />

  return (
    <section className='sign-form'>
      <Link className='sign-form_logo button' to='/'></Link>
      <h1 className='sign-form__title'>{title}</h1>
      <form className='sign-form__form' onSubmit={handleSubmit} noValidate>
        <div className='sign-form__input'>
          {children}
        </div>
        
        <div className='sign-form__links'>
          <p className="form-error">{serverMessage}</p>
          <button type='submit' className={'sign-form__button button'} disabled={disableForm || isRequesting}>
            {textButton}
          </button>
          <p className='sign-form__link-text'>{question}
            <Link to={linkPath} className='sign-form__link  link'>{linkText}</Link>
          </p>
        </div>
      </form>
    </section>

  )
}

export default SignForm;
