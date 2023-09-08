import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <div className='portfolio__container'>
                <h2 className='portfolio__title'>Портфолио</h2>
                <a className='portfolio__items' href='https://github.com/samura-io/how-to-learn'
                target='_blank' rel="noreferrer">
                    <h3 className='portfolio__item-name'>Статичный сайт</h3>
                    <span className='portfolio__arrow'>↗</span>
                </a>
                <a className='portfolio__items' href='https://github.com/samura-io/russian-travel'
                 target='_blank' rel="noreferrer">
                    <h3 className='portfolio__item-name'>Адаптивный сайт</h3>
                    <span className='portfolio__arrow'>↗</span>
                </a>
                <a className='portfolio__items' href='https://github.com/samura-io/react-mesto-api-full-gha'
                 target='_blank' rel="noreferrer">
                    <h3 className='portfolio__item-name'>Одностраничное приложение</h3>
                    <span className='portfolio__arrow'>↗</span>
                </a>
            </div>
        </section>
    )
}

export default Portfolio;