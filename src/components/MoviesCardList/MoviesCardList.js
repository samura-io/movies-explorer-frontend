import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList({ searchMovies, message, onLike, savedMovies }) {
    const [ moviesQuantity, setMoviesQuantity ] = React.useState();
    const [ displayedFilms, setDisplayedFilms ] = React.useState([]);
    const [ addedMoviesQuantity, setAddedMoviesQuantity ] = React.useState(0);
    const [ isActiveButtonMore, setIsActiveButtonMore ] = React.useState(false);


    const handlerResize = () => {
        if (window.innerWidth <= 500) {
            setMoviesQuantity(5);
            setAddedMoviesQuantity(2);
        } else if (window.innerWidth > 500 && window.innerWidth <= 900) {
            setMoviesQuantity(8);
            setAddedMoviesQuantity(2);
        } else {
            setMoviesQuantity(16);
            setAddedMoviesQuantity(4);
        };
    }

    const handleClickButtonMore = () => {
        setMoviesQuantity(moviesQuantity + addedMoviesQuantity)
    }

    const handlerDisplayButtonMore = () => {
        if (searchMovies.length > moviesQuantity) {
            setIsActiveButtonMore(true)
        } else {
            setIsActiveButtonMore(false)
        }
    }

    React.useEffect(()=>{
        window.addEventListener('resize', handlerResize);
        setDisplayedFilms(searchMovies.slice(0, moviesQuantity));
        handlerDisplayButtonMore();
        return () => {
            window.removeEventListener('resize', handlerResize);
        }
    }, [moviesQuantity])

    React.useEffect(()=>{
            handlerResize();
            setDisplayedFilms(searchMovies.slice(0, moviesQuantity));
            handlerDisplayButtonMore();
    }, [searchMovies]);

    return (
        <section className='cards'>
            {message && <p className='cards__message'>{ message }</p>}
            <div className='cards__container'>
                { displayedFilms.map((cardInfo) => (
                        <MoviesCard 
                        cardInfo = {cardInfo}
                        key={cardInfo.id}
                        onLike={onLike}
                        isSavedMovies= {false}
                        savedMovies={savedMovies}
                        image={`https://api.nomoreparties.co${cardInfo.image.url}`}
                        />
                ))
                }
            </div>
            {isActiveButtonMore && (
                <button className='cards__btn' onClick={ handleClickButtonMore }>Ещё</button>
            )}
        </section>
    )
}

export default MoviesCardList;