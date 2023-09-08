import Popup from '../Popup/Popup';
import './Login.css';
import api from '../../utils/MainApi';
import React from 'react';
import { Navigate } from 'react-router-dom';

function Login({onSubmit, loginErrorMessage, loggedIn}) {

    return (
        <div className='login'>
            <Popup 
            title='Рады видеть!'
            buttonText='Войти'
            inscription='Ещё не зарегистрированы?'
            linkName='Регистрация'
            linkTo='/signup'
            onSubmit = {onSubmit}
            errorMessage={loginErrorMessage}
            />
            {loggedIn && <Navigate to="/movies" />}
        </div>
    )
};

export default Login;