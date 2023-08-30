import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { Routes,Route } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies.js';
// import Preloader from '../Preloader/Preloader.js';

function Movies() {

    return (
        <section className='movies'>
            <SearchForm />
            {/* <Preloader /> */}
            <Routes>
                <Route path='/all-movies' element={ <MoviesCardList/> } />
                <Route path='/saved-movies' element={ <SavedMovies/> } />
            </Routes>
        </section>
    )
}

export default Movies;