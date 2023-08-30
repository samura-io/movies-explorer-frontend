import React from 'react';
import './SearchForm.css';
import search from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm() {

    const searchRef = React.useRef();

    const handleFocus = (evt) => {
        searchRef.current.focus();
    }

    return (
        <section className='search'>
            <div className='secrch__elements'>
                <form className='search__form'>
                    <div className='search__container'>
                        <img className='search__icon' src= {search} alt='search_icon' onClick= {handleFocus}/>
                        <input className='search__input' name='search' placeholder='Фильм' ref = { searchRef }></input>
                        <button className='search__btn' type='submit'>Найти</button>
                    </div>
                    <FilterCheckbox />
                </form>
            </div>
        </section>
    )
};

export default SearchForm;

