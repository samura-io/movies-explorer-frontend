import './MoviesCard.css';
import React from 'react';

function MoviesCard({cardInfo, onLike, isSavedMovies, image, savedMovies, onDelete}) {

    const [ formatedDuraion, setFormatedDuraion ] = React.useState('');
    const [ isLiked, setIsLiked] = React.useState(false);
    const [ savedCard, setSavedCard ] = React.useState('');

    React.useEffect(()=>{
        savedMovies.forEach((card)=>{
            if (card.movieId === cardInfo.id) {
                setSavedCard(card);
                setIsLiked(true);
            }
        })
    }, [savedMovies])

    React.useEffect(()=>{
        setFormatedDuraion(formatingDuration(cardInfo.duration))
    }, [cardInfo.duration])

    function formatingDuration(duration) {
        const hours = Math.floor(duration/60);
        const minutes = duration%60;
        return `${hours}ч ${minutes}м`
    }

    function handleLike() {
        setIsLiked(!isLiked);
        onLike(cardInfo, isLiked, savedCard);
    }

    function handleDelete() {
        onDelete(cardInfo)
    }

    return (
        <article className='card'>
            <a className="card__trailer-link" href={ cardInfo.trailerLink } target='_blank' rel="noreferrer" >
                <div className='card__img' style={{ backgroundImage: `url(${image}` }}/>
            </a>
            <div className='card__info-n-like'>
                <p className='card__title'> {cardInfo.nameRU} </p>
                { isSavedMovies ? (
                    <button className='card__delete' onClick={handleDelete}></button>
                ) : (
                    <button className={`card__like ${isLiked && 'card__like_active'}`} onClick={handleLike}></button>
                )
                }
            </div>
            <span className='card__duration'>{formatedDuraion}</span>
        </article>
    )
};

export default MoviesCard;