import './Popup.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Popup({ title, buttonText, inscription, linkName, linkTo, isRegister}) {

    return (
            <div  className='popup'>
                <Link className='popup__link-logo' to='/'><img className='popup__img' src={ logo } alt='logo' /></Link>
                <h2 className='popup__title'>{ title }</h2>
                <form className='popup__form'>
                    {isRegister && (
                        <>
                        <label className='popup__label' htmlFor='name'>Имя</label>
                        <input className='popup__input popup__input_value_name' placeholder='Имя' 
                        defaultValue='Никита' name='name' type='text' id='name' minLength='2' maxLength='40' required /> 
                        </>                       
                    )}
                        <label className='popup__label' htmlFor='email'>E-mail</label>
                        <input className='popup__input popup__input_value_email' placeholder='Email' 
                        defaultValue='nikita@nikita.nikita' name='email' type='email' id='email' required/>
                        <label className='popup__label' htmlFor='password'>Пароль</label>
                        <input className='popup__input popup__input_value_password' placeholder='Пароль'
                        defaultValue='1234566' name='password' type='password' id='password'  minLength='6' required/>
                        <span className='popup__error'></span>

                    <button className='popup__btn' type='submit'>{ buttonText }</button>
                </form>
                <span className='popup__span'>
                    { inscription }
                    <Link className='popup__link' to={ linkTo }>
                        { linkName }
                    </Link>
                    </span>
            </div>
    )
};

export default Popup;