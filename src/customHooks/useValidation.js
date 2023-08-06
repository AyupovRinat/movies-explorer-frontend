import { useCallback, useEffect, useState } from 'react';
import validator from 'validator';
import { nameRegExp, validationMessage } from '../utils/constants';

const useValidation = (value, params) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isShorter, setIsShorter] = useState(false);
  const [isLonger, setIsLonger] = useState(false);
  const [isValidInput, setIsValidInput] = useState(false);
  const [isNotEmail, setIsNotEmail] = useState(false);
  const [isNotName, setIsNotName] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const checkValidationField = () => {
    for (const param in params) {
      switch (param) {
        case 'isEmpty':
          if (value.trim()) {
            setIsEmpty(false);
            setErrorMessage('');
          } else {
            setErrorMessage(validationMessage.canNotBeEmpty);
            setIsEmpty(true);
            return;
          }
          break;
        case 'minLength':
          if (value.trim().length < params[param]) {
            setIsShorter(true);
            setErrorMessage(validationMessage.tooShort(params.minLength));
            return;
          } else {
            setIsShorter(false);
            setErrorMessage('');
          }
          break;
        case 'maxLength':
          if (value.trim().length > params[param]) {
            setIsLonger(true);;
            setErrorMessage(validationMessage.tooShort(params.minLength));
          } else {
            setIsLonger(false);
            setErrorMessage('');
          }
          break;
        case 'isEmail':
          if (validator.isEmail(value)) {
            setIsNotEmail(false);
            setErrorMessage('');
          } else {
            setIsNotEmail(true);
            setErrorMessage(validationMessage.notEmail);
          }
          break;
        case 'isName':
          if (nameRegExp.test(value)) {
            setIsNotName(false);
            setErrorMessage('');
          } else {
            setIsNotName(true);
            setErrorMessage(validationMessage.isNotName);
          }
          break;
        default:
      }
    }
  };

  const checkValidInput = () => setIsValidInput(isEmpty || isNotName || isNotEmail || isShorter || isLonger);

   useEffect(checkValidationField, [value]);

  useEffect(checkValidInput, [isEmpty, isNotName, isNotEmail, isShorter, isLonger]);

  return {
    isEmpty,
    isEmail: isNotEmail,
    isShorter,
    isLonger,
    isValidInput,
    errorMessage,
  };
};

const useInput = (initialValue, params) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);

  const { errorMessage, ...validation } = useValidation(value, params);



  const onChange = ({ target: input }) => {
    if (!isDirty) setIsDirty(true);
    setValue(input.value);
  };

  const reset = useCallback((newValues = initialValue) => {
    setValue(newValues);
  }, []);

  return {
    value,
    onChange,
    isDirty,
    setValue,
    reset,
    errorMessage: isDirty ? errorMessage : '',
    ...validation,
  };
};

export default useInput;