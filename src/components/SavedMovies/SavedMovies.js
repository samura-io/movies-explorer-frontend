import '../MoviesCardList/MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import savedMovies from '../../vendor/savedMovies.js';

function SavedMovies() {
    
    return (
        <section className='cards'>
            <div className='cards__container'>
                { savedMovies.map(({ id, nameRU, duration, image }) => (
                    <div key={id}>
                        <MoviesCard 
                        cardTitle={nameRU}
                        cardDuration={duration}
                        cardImg={`https://api.nomoreparties.co/${image.url}`}
                        isSavedMovies= {true}
                        />
                    </div>
                ))
                }
            </div>
        </section>
    )
};

 export default SavedMovies;