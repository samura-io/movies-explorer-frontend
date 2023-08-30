import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigaton.js';
import { Link, useLocation } from 'react-router-dom';

function Header ({ loggedIn }) {

    const path = useLocation().pathname;

    return (
        <header className={`header ${path !== '/' && 'header_background_transparent'}`}>
            <div className='header__container'>
                <Link to='/'><img className='header__logo' src={logo} alt='main logo'></img></Link>
                <Navigation 
                loggedIn={loggedIn}
                />
            </div>
        </header>
    )
}

export default Header;