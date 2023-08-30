import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import './App.css';
import Footer from '../Footer/Footer.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound/NotFoud.js'

// import SavedMovies from '../SavedMovies/SavedMovies.js';

function App() {

    const [loggedIn] = React.useState(true);

    return (
        <div className='root'>
        <Header loggedIn={loggedIn}/>
        <Routes>
            <Route path='/movies/*' element={ <Movies/> } />
            <Route path='/profile' element={ <Profile/> } />
            <Route path='/signin' element={ <Login/> } />
            <Route path='/signup' element={ <Register/> } />
            <Route path='*' element={ <NotFound/> } />
            <Route path='/' element={ <Main /> } />
        </Routes>
        <Footer />
        </div>

    )
}

export default App;