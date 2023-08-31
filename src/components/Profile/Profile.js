import './Profile.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {

    const [ isEdited, setIsEdited ] = React.useState(false);
    const navigate = useNavigate();

    function handleEditSwitch() {
        setIsEdited(!isEdited);
    }

    return (
        <section className='profile'>
                <form className='profile__form'>
                        <h2 className='profile__title'>Привет, Никита!</h2>
                        <label className='profile__label' htmlFor='name'>
                            Имя
                            <input className='profile__input profile__input_value_name' disabled={isEdited ? '' : 'true'} 
                            defaultValue='Никита' name='name' type='text' id='name' minLength='2' maxLength='40' required placeholder='Имя'/> 
                        </label>                      
                        <label className='profile__label' htmlFor='email'>
                            E-mail
                            <input className='profile__input profile__input_value_email' disabled={isEdited ? '' : 'true'} 
                            defaultValue='nikita@nikita.nikita' name='email' type='email' id='email' required placeholder='Email'/>
                        </label>
                        {
                            isEdited ? (
                                <div className='profile__btns'>
                                    <span className='profile__error'>При обновлении профиля произошла ошибка.</span>
                                    <button className='profile__btn profile__btn_type_submit' type='submit'>Сохранить</button>
                                </div>

                            ) : (
                                <div className='profile__btns'>
                                    <button className='profile__btn profile__btn_type_edit' type='button' onClick={handleEditSwitch}>Редактировать</button>
                                    <button className='profile__btn profile__btn_type_exit' type='button'
                                     onClick={()=>{navigate('/', {replace: true})}}>Выйти из аккаунта</button>
                                </div>
                            )
                        }

                </form>
        </section>
    )
};

export default Profile;