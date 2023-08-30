import Popup from '../Popup/Popup';
import './Register.css'

function Register() {
    return (
        <div className='register'>
            <Popup 
            title='Добро пожаловать!'
            buttonText='Зарегистрироваться'
            inscription='Уже зарегистрированы?'
            linkName='Войти'
            linkTo='/signin'
            isRegister={true}
            />
        </div>
    )
};

export default Register;