import './NotFound.css';
import { useNavigate} from 'react-router-dom';

function NotFound({loggedIn}) {

    console.log(loggedIn);

    const navigate = useNavigate();

    return (
        <div className='not-found'>
             <div className='not-found_error'>
                <h1 className='not-found__code'>404</h1>
                <h2 className='not-found__message'>Страница не найдена</h2>
             </div>
             <button className='not-found__btn' type='button' onClick={()=>{loggedIn ? navigate(-1) : navigate('/')}}>Назад</button>
        </div>
    )
};

export default NotFound;