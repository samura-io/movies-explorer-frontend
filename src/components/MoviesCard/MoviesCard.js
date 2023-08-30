import './MoviesCard.css';

function MoviesCard({cardImg, cardTitle, cardDuration, isSavedMovies}) {

    return (
        <article className='card'>
            <div className='card__img' style={{ backgroundImage: `url(${cardImg})` }}/>
            <div className='card__info-n-like'>
                <p className='card__title'> {cardTitle} </p>
                { isSavedMovies ? (
                    <button className='card__delete'></button>
                ) : (
                    <button className='card__like'></button>
                )
                }
            </div>
            <span className='card__duration'>{cardDuration}</span>
        </article>
    )
};

export default MoviesCard;