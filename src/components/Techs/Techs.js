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
                <div className='techs__list'>
                    <div className='techs__blocks'>
                        <div className='techs__elem'>HTML</div>
                    </div>
                    <div className='techs__blocks'>
                        <div className='techs__elem'>CSS</div>
                    </div>
                    <div className='techs__blocks'>
                        <div className='techs__elem'>JS</div>
                    </div>
                    <div className='techs__blocks'>
                        <div className='techs__elem'>React</div>
                    </div>
                    <div className='techs__blocks'>
                        <div className='techs__elem'>Git</div>
                    </div>
                    <div className='techs__blocks'>
                        <div className='techs__elem'>Express.js</div>
                    </div>
                    <div className='techs__blocks'>
                    <div className='techs__elem'>mongoDB</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Techs;