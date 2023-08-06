import { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './Profile.css'
import { validationEmailInputParams, validationNameInputParams } from '../../utils/constants';
import useInput from '../../customHooks/useValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';



function Profile({ isLoggedIn, onSignOut, onSave, serverMessage, resetMessage }) {
  const currentUser = useContext(CurrentUserContext);

  const [isEditMode, setIsEditMode] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);

  
  const closeEditMode = () => {
    setIsEditMode(false);
  }
  const closeEditModeByEsc = (evt) => {
    if(evt.key !=='Escape') return;
    closeEditMode();
  }



  const name = useInput(currentUser.name, validationNameInputParams);
  const email = useInput(currentUser.email, validationEmailInputParams);

  const isEqualUserData = currentUser.name === name.value && currentUser.email === email.value;

  const isValidForm = !name.isValidInput && !email.isValidInput;

  const handleUpdate = (event) => {
    event.preventDefault();
    setIsRequesting(true);
    onSave({ name: name.value, email: email.value })
      .then(() => {
        closeEditMode();
      })
      .finally(() => setIsRequesting(false));
  }

  const openEditMode = () => {
    resetMessage();
    setIsEditMode(true) 
  }

  useEffect(() => {
    document.addEventListener('keydown', closeEditModeByEsc);
    
    return () => {
      document.removeEventListener('keydown', closeEditModeByEsc);
      resetMessage();
    }
      
  }, [])


  

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="main">
        <section className="profile">
          <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
          <form className="profile__form" noValidate>
            <label className="profile__label label">Имя
              <input
                className={`profile__input${name.isValidInput ? ' input_invalid' : ''}`}
                type="name"
                id="name"
                name="name"
                placeholder="Введите имя"
                autoComplete="off"
                value={name.value}
                onChange={name.onChange}
                disabled={!isEditMode}
              />
              <span className="input-error">{name.errorMessage}</span>
            </label>
            <label className="profile__label label">E-mail
              <input
                className={`profile__input${email.isValidInput ? ' input_invalid' : ''}`}
                type="email"
                name="email"
                placeholder="Введите E-mail"
                autoComplete="off"
                value={email.value}
                onChange={email.onChange}
                disabled={!isEditMode}
              />
              <span className="input-error">{email.errorMessage}</span>
            </label>
            <p className="form-error profile__error">{serverMessage}</p>
            {isEditMode &&
              <button type="submit"
                className="profile__button profile__button_save button"
                disabled={isEqualUserData || !isValidForm || isRequesting}
                onClick={handleUpdate}
              >
                Сохранить
              </button>
            }
          </form>
          {!isEditMode &&
            <>
              <button type="button" onClick={openEditMode} className=" profile__button profile__button_edit button">Редактировать</button>
              <button type="button" className="profile__button profile__button_exit button" onClick={onSignOut} >Выйти из аккаунта</button>
            </>
          }
        </section>
      </main>
    </>
  );
}

export default Profile;
