import './Techs.css'

function Techs() {
    return (
        <section className='techs'>
            <div className='techs__container'>
                <h2 className='techs__title'>Технологии</h2>
                <h3 className='techs__description-title'>7 технологий</h3>
                <span className='techs__description-caption'>
                    На курсе веб-разработки мы освоили технологии, 
                    которые применили в дипломном проекте.
                </span>
                <ul className='techs__list'>
                    <div className='techs__blocks'>
                        <li className='techs__elem'>HTML</li>
                    </div>
                    <div className='techs__blocks'>
                        <li className='techs__elem'>CSS</li>
                    </div>
                    <div className='techs__blocks'>
                        <li className='techs__elem'>JS</li>
                    </div>
                    <div className='techs__blocks'>
                        <li className='techs__elem'>React</li>
                    </div>
                    <div className='techs__blocks'>
                        <li className='techs__elem'>Git</li>
                    </div>
                    <div className='techs__blocks'>
                        <li className='techs__elem'>Express.js</li>
                    </div>
                    <div className='techs__blocks'>
                    <li className='techs__elem'>mongoDB</li>
                    </div>
                </ul>
            </div>
        </section>
    )
}

export default Techs;