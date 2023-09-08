import React from 'react';
import './SearchForm.css';
import search from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm({onSubmit, searchText, inputShortsMovieValue}) {

    const [ placeholder, setPlaceholder] = React.useState('Фильм');
    const [ movievalue, setmovieValue] = React.useState(searchText);
    const [ searchShortsMovies, setSearchShortsMovies ] = React.useState(false);

    const searchRef = React.useRef();

    React.useEffect(()=>{
        setmovieValue(searchText)
    }, [searchText])

    const handleFocus = () => {
        searchRef.current.focus();
    }

    const handleMovieChange = (evt) => {
        setmovieValue(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (searchRef.current.value) {
            onSubmit(movievalue, searchShortsMovies)
        } else (
            setPlaceholder('Нужно ввести ключевое слово')
        )
    }

    const handleShortsInput = (value) => {
        setSearchShortsMovies(value)
    }

    return (
        <section className='search'>
            <div className='search__elements'>
                <form className='search__form' onSubmit={handleSubmit}>
                    <div className='search__container'>
                        <img className='search__icon' src= { search } alt='search_icon' onClick= { handleFocus }/>
                        <input className='search__input' name='search' placeholder={ placeholder } ref = { searchRef }
                         onChange={ handleMovieChange } value={movievalue}></input>
                        <button className='search__btn' type='submit'>Найти</button>
                    </div>
                    <FilterCheckbox 
                    searchShortsMovies={ handleShortsInput }
                    positionCheckbox={inputShortsMovieValue}/>
                </form>
            </div>
        </section>
    )
};

export default SearchForm;

