import '../MoviesCardList/MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function SavedMovies({savedMovies, onDelete}) {
    
    return (
        <section className='cards'>
            <div className='cards__container'>
                { savedMovies.map((cardInfo) => (
                        <MoviesCard 
                        key={cardInfo.movieId}
                        cardInfo = {cardInfo}
                        isSavedMovies= {true}
                        image={cardInfo.image}
                        savedMovies={savedMovies}
                        onDelete={onDelete}
                        ></MoviesCard>
                ))
                }
            </div>
        </section>
    )
};

 export default SavedMovies;