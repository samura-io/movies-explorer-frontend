import './AboutMe.css';
import studentPhoto from '../../images/student-photo.png';

function AboutMe() {
    return (
        <section className='about-me'>
            <div className='about-me__container'>
                <h2 className='about-me__title'>Студент</h2>
                <div className='about-me__student'>
                    <div className='about-me__student-info'>
                        <h3 className='about-me__student-title'>Никита</h3>
                        <h4 className='about-me__student-subtitle'>Веб-разработчик, 25 лет</h4>
                        <p className='about-me__description'>
                            Здесь, в Тамбове, я – король скорости и стиля!
                            Мои тачки мелькают как молнии, зарплата зашкаливает высоко в небеса,
                            а наложницы... их столько, что я уже думаю о собственной реалити-шоу! 
                            Конечно, это шутка, данную информацию я редактирую на 5 этапе, сейчас нету времени.
                        </p>
                        <a className='about-me__github' href='https://github.com/samura-io' target='_blank' rel="noreferrer">GitHub</a>
                    </div>
                    <div className='about-me__photo-container'>
                        <img className='about-me__student-photo' src={ studentPhoto } alt='student_photo' />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AboutMe;