export const FORM_PLACEHOLDER = {
  firstName: 'Введите имя...',
  lastName: 'Введите фамилию...',
  email: 'Введите почту...',
  dateOfBirth: 'Установите дату рождения...',
  framework: 'Выбирете фреймворк...',
  frameworkVersion: 'Выбирете версию...',
  hobby: 'Напишите свои увлечения...'
};

export const FORM_ERRORS = {
  firstName: '',
  lastName: '',
  email: '',
  dateOfBirth: '',
  framework: '',
  frameworkVersion: '',
  hobby: ''
};

export const FORM_SUCCESS = {
  firstName: 'Принято!',
  lastName: 'Принято!',
  email: 'Принято!',
  dateOfBirth: 'Принято!',
  framework: 'Принято!',
  frameworkVersion: 'Принято!',
  hobby: ''
};
export const VALIDATION_MESSAGES = {
  firstName: {
    required: 'Имя обязательно',
      minlength: 'Имя должно содержать не менее 4 символов',
      maxlength: 'Имя должно содержать не более 15 символов'
  },
  lastName: {
    required: 'Фамилия обязательна',
      minlength: 'Фамилия должно содержать не менее 7 символов',
      maxlength: 'Фамилия должна содержать не более 25 символов'
  },
  email: {
    required: 'Email обязателен',
    emailNotAllowed: 'Неправильный формат email адреса',
    pending: 'Выполняеться проверка...'
  },
  dateOfBirth: {
    required: 'Дата обязательна'
  },
  framework: 'Фреймворк обязателен',
  frameworkVersion: 'Версия обязательна',
  hobby: 'Принято!'
};

export const FRAMEWORKS = [['angular'], ['react'], ['vue']];
export const FRAMEWORKS_VERSION =  [['1.1.1', '1.2.1', '1.3.3'], ['2.1.2', '3.2.4', '4.3.1'], ['3.3.1', '5.2.1', '5.1.3']];
