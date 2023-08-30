import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
// Временно дабавил фильмы в файл .src/vendor/films.js чтобы реализовать карточки как в макете
import movies from '../../vendor/films.js';

function MoviesCardList() {

    const [cardsCounter, setCardsCounter] = React.useState(16);
    const [cards, setCards] = React.useState(movies.slice(0, cardsCounter))

    function more() {
        let counter = cardsCounter;
        counter += 16;
        setCardsCounter(counter);
        setCards(movies.slice(0, counter))
    }

    return (
        <section className='cards'>
            <div className='cards__container'>
                { cards.map(({ id, nameRU, duration, image }) => (
                        <MoviesCard 
                        key={id}
                        cardTitle={nameRU}
                        cardDuration={duration}
                        cardImg={`https://api.nomoreparties.co/${image.url}`}
                        isSavedMovies= {false}
                        />
                ))
                }
            </div>
            <button className='cards__btn' onClick= {more} >Ещё</button>
        </section>
    )
}

export default MoviesCardList;