import { useState, useCallback, useEffect } from 'react';

export default function useFormAndValidation() {
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const [ values, setValues ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(true);

  const handleChange = (e) => {
    const {name, value} = e.target
    if (name === 'email' && !isEmailValid(value) ) {
       e.target.setCustomValidity("Необходимо указать e-mail в формате name@domain.zone")
      } else {
        e.target.setCustomValidity("")
      }
    setValues({...values, [name]: value });
    setErrors({...errors, [name]: e.target.validationMessage});
    setIsValid(e.target.closest('form').checkValidity());
  };

  const isEmailValid = (value) => {
    return EMAIL_REGEXP.test(value);
  }

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}
