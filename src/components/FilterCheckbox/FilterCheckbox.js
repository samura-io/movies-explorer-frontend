import React from 'react';
import './FilterCheckbox.css';
function FilterCheckbox() {

    return (
        <div className='checkbox'>
            <label className='checkbox__label'>
                <input className='checkbox__checkbox-hidden' type='checkbox'
                name='shortfilms' id='shortfilms' value='shortfilms'></input>
                <span className='checkbox__checkbox-fake' />
                <span className='checkbox__span'>Короткометражки</span>
            </label> 
        </div>
    )
};

export default FilterCheckbox;