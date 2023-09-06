import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import './App.css';
import Footer from '../Footer/Footer.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotFound from '../NotFound/NotFoud.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import api from '../../utils/MainApi';

function App() {

    const [currentUser, setCurrentUser] = React.useState({});
    const [loginErrorMessage, setLoginErrorMessager] = React.useState('');
    const [rigiserErrorMessage, setRigiserErrorMessager] = React.useState('');
    const [savedMovies, setSavedMovies] = React.useState(['']);
    const [profileErrorMessage, setProfileErrorMessage] = React.useState('');
    const [loggedIn,setLoggedIn] = React.useState(false);
    const navigate = useNavigate();
    const [authCheckComplete, setAuthCheckComplete] = React.useState(false);

    React.useEffect(()=>{
        handleAuth();
        api.getUserInfo()
        .then((res)=>{
            setCurrentUser(res);
        })
        .catch((err)=>{
            console.log(err)
        })
        handleGetSevedMovies();
    },[loggedIn])

    const handleGetSevedMovies = () => {
        api.getMovies()
        .then((res)=>{
            setSavedMovies(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const handleRegistration = (values) => {
        setRigiserErrorMessager('');
        api.register(values.email,values.password, values.name)
        .then(()=>{
            handleLogin(values);
        })
        .catch((err)=>{
            console.log(err)
            setRigiserErrorMessager(err);
        })
    }

    const handleLogin = (values) => {
        setLoginErrorMessager('');
        api.login(values.email,values.password)
        .then(()=>{
            handleAuth();
            navigate('/movies');
        })
        .catch((err)=>{
            console.log(err)
            setLoginErrorMessager(err);
        })
    }

    const handleAuth = () => {
        api.checkAuth()
        .then(()=>{
            setLoggedIn(true);
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            setAuthCheckComplete(true);
        })
    }

    const handleExit= () => {
        api.logout()
        .then(()=>{
            navigate('/', {replace:true});
            setLoggedIn(false);
            setAuthCheckComplete(false);
            localStorage.clear();
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const handleLike = (cardInfo, isLiked, savedCard) => {
        if (isLiked) {
            handleDelete(savedCard);
        } else {
            api.createMovie(
                cardInfo.country,
                cardInfo.director,
                cardInfo.duration,
                cardInfo.year,
                cardInfo.description,
                `https://api.nomoreparties.co${cardInfo.image.url}`,
                cardInfo.trailerLink,
                cardInfo.nameRU,
                cardInfo.nameEN,
                `https://api.nomoreparties.co${cardInfo.image.formats.thumbnail.url}`,
                cardInfo.id
            )
            .then((res)=>{
                handleGetSevedMovies();
            })
        }
    }

    const handleDelete = (cardInfo) => {
        api.deleteMovies(cardInfo._id)
        .then((res)=>{
            handleGetSevedMovies();
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const handleEditUserInfo = (value) => {
        api.updateUserInfo(value.name, value.email)
        .then((res)=>{
            setCurrentUser(res);
            setProfileErrorMessage('Успешно!');
        })
        .catch((err)=>{
            setProfileErrorMessage(err);
        })
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='root'>
            <Header loggedIn={loggedIn}/>
            <Routes>
                {authCheckComplete &&
                <>
                <Route path='/movies/*' element={<ProtectedRoute 
                element={Movies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                onLike={handleLike} 
                onDelete={handleDelete}/>} />

                <Route path='/profile' element={<ProtectedRoute 
                element={Profile}
                onExit={handleExit}
                loggedIn={loggedIn}
                onSubmit={handleEditUserInfo}
                profileErrorMessage={profileErrorMessage} />} />

                <Route path='*' element={ <NotFound loggedIn={loggedIn}/> } />
                </>
                }
                
                <Route path='/signin' element={ <Login
                onSubmit={handleLogin}
                loginErrorMessage={loginErrorMessage}
                loggedIn={loggedIn}/> } />

                <Route path='/signup' element={ <Register
                onSubmit={handleRegistration} 
                rigiserErrorMessage={rigiserErrorMessage}
                loggedIn={loggedIn}/> } />

                <Route path='/' element={ <Main 
                loggedIn={loggedIn}/> } />
            </Routes>
            <Footer />
            </div>
        </CurrentUserContext.Provider>

    )
}

export default App;