import Popup from '../Popup/Popup';
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <Popup 
            title='Рады видеть!'
            buttonText='Войти'
            inscription='Ещё не зарегистрированы?'
            linkName='Регистрация'
            linkTo='/signup'
            />
        </div>
    )
};

export default Login;