import SignForm from '../../components/SignForm/SignForm';
import useInput from '../../customHooks/useValidation';
import { validationEmailInputParams, validationNameInputParams, validationPasswordInputParams } from '../../utils/constants';
import './Register.css';

function Register({ onRegister, serverMessage, isLoggedIn }) {
  const name = useInput('', validationNameInputParams);
  const email = useInput('', validationEmailInputParams);
  const password = useInput('', validationPasswordInputParams);
  const isValidForm = !name.isValidInput && !email.isValidInput && !password.isValidInput;

  return (
    <main className='main'>
      <SignForm
        isLoggedIn={isLoggedIn}
        title="Добро пожаловать!"
        textButton="Зарегистрироваться"
        question='Уже зарегистрированы?'
        linkText='Войти'
        linkPath='/signin'
        disableForm={!isValidForm}
        serverErrorMessage={serverMessage}
        onSubmit={() => onRegister({ name: name.value, email: email.value, password: password.value })}
      >
        <div className='sign-form__input-container'>
          <label className='sign-form__input-label' htmlFor="text">Имя</label>
          <input
            className={`sign-form__input-text input' ${name.isValidInput ? ' input_invalid' : ''}`}
            id='name'
            name='email'
            type='text'
            placeholder='Введите имя'
            minLength="2"
            maxLength="40"
            value={name.value}
            onChange={name.onChange}
            required
          />
          <span className='input-error'>{name.errorMessage}</span>
        </div>
        <div className='sign-form__input-container'>
          <label className='sign-form__input-label' htmlFor="email">E-mail</label>
          <input
            className={`sign-form__input-text input' ${email.isValidInput ? ' input_invalid' : ''}`}
            id='email' name='email'
            type='email'
            placeholder='Введите email'
            value={email.value}
            onChange={email.onChange}
            required
          />
          <span className='input-error'>{email.errorMessage}</span>
        </div>
        <div className='sign-form__input-container'>
          <label className='sign-form__input-label' htmlFor="password">Пароль</label>
          <input
            className={`sign-form__input-text input' ${password.isValidInput ? ' input_invalid' : ''}`}
            id='password'
            name='password'
            type='password'
            minLength="4"
            maxLength="40"
            placeholder='Введите пароль'
            value={password.value}
            onChange={password.onChange}
            required
          />
          <span className='input-error'>{password.errorMessage}</span>
        </div>

      </SignForm>
    </main>
  );
}

export default Register;
