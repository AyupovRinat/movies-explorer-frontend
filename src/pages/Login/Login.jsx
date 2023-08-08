import SignForm from '../../components/SignForm/SignForm';
import useInput from '../../customHooks/useValidation';
import { validationEmailInputParams, validationPasswordInputParams } from '../../utils/constants';
import './Login.css';

function Login({ onLogin, serverMessage, isLoggedIn }) {
  const email = useInput('', validationEmailInputParams);
  const password = useInput('', validationPasswordInputParams);
  const isValidForm = !email.isValidInput && !password.isValidInput;


  return (
    <main className='main'>
      <SignForm
        title='Рады видеть!'
        textButton='Войти'
        question='Еще не зарегистрированы?'
        linkText='Регистрация'
        linkPath='/signup'
        disableForm={!isValidForm}
        serverMessage={serverMessage}
        onSubmit={() => onLogin({ email: email.value, password: password.value })}
        isLoggedIn={isLoggedIn}
      >
        <div className='sign-form__input-container'>
          <label className='sign-form__input-label' htmlFor="email">E-mail</label>
          <input
            className={`sign-form__input-text input' ${email.isValidInput ? ' input_invalid' : ''}`}
            name='email'
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
            name='password'
            type='password'
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

export default Login;
