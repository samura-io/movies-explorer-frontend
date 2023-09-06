import React from 'react';
import './FilterCheckbox.css';
function FilterCheckbox({ searchShortsMovies, positionCheckbox }) {

    const [ inputShortsMovieValue, setInputShortsMovieValue ] = React.useState(positionCheckbox);

    React.useEffect(()=>{
        setInputShortsMovieValue(positionCheckbox)
    }, [positionCheckbox])

    React.useEffect(()=>{
        searchShortsMovies(inputShortsMovieValue);
    }, [inputShortsMovieValue])

    const handleShortsMovieChange = (evt) => {
        setInputShortsMovieValue(evt.target.checked);
    }

    return (
        <div className='checkbox'>
            <label className='checkbox__label'>
                <input className='checkbox__checkbox-hidden' type='checkbox'
                name='shortfilms' id='shortfilms' onChange={ handleShortsMovieChange } checked={inputShortsMovieValue} ></input>
                <span className='checkbox__checkbox-fake' />
                <span className='checkbox__span'>Короткометражки</span>
            </label> 
        </div>
    )
};

export default FilterCheckbox;