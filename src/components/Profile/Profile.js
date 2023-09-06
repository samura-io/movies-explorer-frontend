import './Profile.css';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import useFormAndValidation from '../../utils/useFormAndValidation';

function Profile({onExit, onSubmit, profileErrorMessage}) {

    const [ isEdited, setIsEdited ] = React.useState(false);
    const [ errorMessage, setErrorMessage] = React.useState(profileErrorMessage);
    const currentUserContext = React.useContext(CurrentUserContext);
    const {values, handleChange, isValid, resetForm} = useFormAndValidation()

    function handleEditSwitch() {
        setErrorMessage('');
        setIsEdited(!isEdited);
    }

    React.useEffect(() => {
        resetForm();
    }, [resetForm]);

    React.useEffect(() => {
        if (profileErrorMessage === "Успешно!") {
            setErrorMessage(profileErrorMessage);
            setTimeout(handleEditSwitch, 1000);
        }
    }, [onSubmit]);

    function handleExit() {
        onExit();
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit(values)
    }

    return (
        <section className='profile'>
                <form className='profile__form' onSubmit={handleSubmit}>
                        <h2 className='profile__title'>Привет, {currentUserContext.name}!</h2>
                        <label className={`profile__label ${isEdited && 'profile__label_active'}`} htmlFor='name'>
                            Имя
                            <input className='profile__input profile__input_value_name' disabled={isEdited ? '' : 'true'} value={values.name} 
                            defaultValue={currentUserContext.name} name='name' type='text' id='name' minLength='2' maxLength='40'
                            required placeholder='Имя' onChange={handleChange}/> 
                        </label>                      
                        <label className='profile__label' htmlFor='email'>
                            E-mail
                            <input className='profile__input profile__input_value_email' disabled={isEdited ? '' : 'true'}  value={values.email}
                            defaultValue={currentUserContext.email} name='email' type='email' id='email' 
                            required placeholder='Email' onChange={handleChange}/>
                        </label>
                        {
                            isEdited ? (
                                <div className='profile__btns'>
                                    <span className='profile__error'>{errorMessage}</span>
                                    <button className={`profile__btn profile__btn_type_submit ${!isValid && 'profile__btn_disabled'}`} 
                                    disabled={!isValid} type='submit'>Сохранить</button>
                                </div>

                            ) : (
                                <div className='profile__btns'>
                                    <button className='profile__btn profile__btn_type_edit' type='button' onClick={handleEditSwitch}>Редактировать</button>
                                    <button className='profile__btn profile__btn_type_exit' type='button'
                                     onClick={ handleExit }>Выйти из аккаунта</button>
                                </div>
                            )
                        }

                </form>
        </section>
    )
};

export default Profile;