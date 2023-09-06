import Popup from '../Popup/Popup';
import './Register.css';
import React from 'react';
import { Navigate } from 'react-router-dom';

function Register({onSubmit, rigiserErrorMessage, loggedIn}) {

    return (
        <div className='register'>
            <Popup 
            title='Добро пожаловать!'
            buttonText='Зарегистрироваться'
            inscription='Уже зарегистрированы?'
            linkName='Войти'
            linkTo='/signin'
            isRegister={true}
            onSubmit = {onSubmit}
            errorMessage={rigiserErrorMessage}
            />
            {loggedIn && <Navigate to="/movies" />}
        </div>
    )
};

export default Register;