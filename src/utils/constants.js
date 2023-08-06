export const BASE_URL = 'https://api.ayupov.diplom.nomoreparties.sbs';
// export const BASE_URL = 'http://localhost:3000';

export const SHORT_MOVIE_LENGTH = 40;

export const SCREEN_WIDTH = {
  L: 1297,
  M: 785,
}

export const ADD_COUNT = {
  L: 3,
  M: 2,
}

export const START_MOVIES_NUMBERS = {
  L: 12,
  M: 8,
  S: 5,
}

export const validationMessage = {
  isNotName: 'Имя может содержать кирилицу, литиницу пробел и дефис',
  canNotBeEmpty: 'Не может быть пустым!',
  notEmail: 'Не email. Пример: email@example.com',
  tooLong: (length) => `Должно быть меньше ${length} символов.`,
  tooShort: (length) => `Должно быть короче ${length} символов.`,
};

export const validationNameInputParams = { isEmpty: false, minLength: 2, maxLength: 40, isName: true };
export const validationEmailInputParams = { isEmpty: false, isEmail: true };
export const validationPasswordInputParams = { isEmpty: false, minLength: 4, maxLength: 40 };
export const validationMoviesInputParams = { isEmpty: false };

export const serverMesages = {
  successUpdateUser: 'Пользователь успешно обновлён.',
  failedUpdateUser: 'При обновлении профиля произошла ошибка.',
  tooManyRequset: 'Слишком много запросов, подождите немного...',
  doubleEmail: 'Эта почта уже занята.',
  invalidLoginData: 'Неверные почта и пароль',
  validatinError: 'Переданны некорректные данные.',
  internalError: 'Сервер сломался, попробуйте позднее.',
  apocalyptoError: 'Эмм.., неизвестная ошибка, попробуйте позднее...'
}

export const movieAdvice = {
  moviesDbError: 'База фильмов недоступна.',
  notFound: 'Ничего не найдено.',
  enterKeyword: 'Введите ключевое слово.'
}

export const nameRegExp = /^[A-Za-zа-яёА-ЯЁ -]{1,}$/;

export const MOVIES_URL = 'https://api.nomoreparties.co';
