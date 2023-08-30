import './AboutProject.css'

function AboutProject() {
    return (
        <section className='about-project'>
            <div className='about-project__container'>
                <h2 className='about-project__title'>О проекте</h2>
                <div className='about-project__description-container'>
                    <div className='about-project__description'>
                        <h3 className='about-project__description-title'>
                            Дипломный проект включал 5 этапов
                        </h3>
                        <span className='about-project__description-caption'>
                            Составление плана, работу над бэкендом, вёрстку, 
                            добавление функциональности и финальные доработки.
                        </span>
                    </div>
                    <div className='about-project__description'>
                        <h3 className='about-project__description-title'>
                            На выполнение диплома ушло 5 недель
                        </h3>
                        <span className='about-project__description-caption'>
                            У каждого этапа был мягкий и жёсткий дедлайн, 
                            которые нужно было соблюдать, чтобы успешно защититься.
                        </span>
                    </div>
                </div>
                <div className='about-project__board-container'>
                    <div className='about-project__board-element about-project__board-element_special'>
                        <span className='about-project__weeks about-project__weeks_special'>1 неделя</span>
                        <span className='about-project__development-stack'>Back-end</span>
                    </div>
                    <div className='about-project__board-element'>
                        <span className='about-project__weeks'>4 недели</span>
                        <span className='about-project__development-stack'>Front-end</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;
