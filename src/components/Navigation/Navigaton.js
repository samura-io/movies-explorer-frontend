import './Navigation.css';
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import profileIcon from '../../images/accaunt-icon.svg';

function Navigation({ loggedIn }) {

    const [ openNavMenu, setOpenNavMenu ] = React.useState(false);
    const path = useLocation().pathname;

    function handlerToggleNavMenu() {
        if (window.innerWidth <= 770) {
            setOpenNavMenu(!openNavMenu);
        }
    }
 
    return (
        <div className='navigation'>

            { loggedIn ? (
                    <div className='navigation__toggle'>
                        <div className={`navigation__dimming ${openNavMenu && 'navigation__dimming_active'}`} onClick={handlerToggleNavMenu}/>
                        <div className={`navigation__menu-button ${openNavMenu && 'navigation__menu-button_active'}`} onClick={handlerToggleNavMenu}/>
                        <nav className={`navigation__links ${openNavMenu && 'navigation__links_active'}`}>
                            <NavLink className={({isActive}) => `navigation__link navigation__link_type_main ${isActive ? 'navigation__link_active' : ' '}`} to='/' 
                            onClick={handlerToggleNavMenu}>Главная</NavLink>
                            <NavLink className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`} to='/movies/all-movies' 
                            onClick={handlerToggleNavMenu}>Фильмы</NavLink>
                            <NavLink className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`} to='/movies/saved-movies' 
                            onClick={handlerToggleNavMenu}>Сохраненные фильмы</NavLink>
                            <Link className={`navigation__elem navigation__elem_type_account ${path !== '/' && 'navigation__elem_background_gray'}`} to='/profile'>
                                Аккаунт
                                <img className={`navigation__img ${path !== '/' && 'navigation__img_background_gray'}`} src={profileIcon} alt='profile icon'></img>
                            </Link>
                        </nav>
                    </div>
                ) : (
                    <>
                    <div></div>
                    <div className='navigation__access-panel'>
                        <Link className='navigation__access-link' to='/signup'>Регистрация</Link>
                        <Link className='navigation__access-link navigation__access-link_signin' to='/signin'>Войти</Link>
                    </div>
                    </>
                )
                
            }
        </div>
    )
}

export default Navigation;
