import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <p className='footer__description'>
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </p>
                <div className='footer__beyond'>
                    <span className='footer__copyright'>© 2023</span>
                    <div className='footer__links'>
                        <a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel="noreferrer">Яндекс.Практикум</a>
                        <a className='footer__link' href='https://github.com/samura-io' target='_blank' rel="noreferrer">Github</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;