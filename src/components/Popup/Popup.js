import './Popup.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import React from 'react';
import useFormAndValidation from '../../utils/useFormAndValidation';
import { isEmail } from 'validator';


function Popup({onSubmit, title, buttonText, inscription, linkName, linkTo, isRegister, errorMessage}) {

    const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation()
    

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values);
    }

    React.useEffect(() => {
        resetForm();
      }, [resetForm]);

    return (
            <div  className='popup'>
                <Link className='popup__link-logo' to='/'><img className='popup__img' src={ logo } alt='logo' /></Link>
                <h2 className='popup__title'>{ title }</h2>
                <form className='popup__form' onSubmit={handleSubmit}>
                    {isRegister && (
                        <>
                        <label className='popup__label' htmlFor='name'>Имя</label>
                        <input className={`popup__input popup__input_value_name ${errors.name && 'popup__input_error'}`} placeholder='Имя' 
                        onChange={handleChange} value= {values.name || ''}
                        name='name' type='text' id='name' minLength='2' maxLength='40' required />
                        {errors.name && <span className='popup__error'>{errors.name || ''}</span>} 
                        </>                       
                    )}
                        <label className='popup__label' htmlFor='email'>E-mail</label>
                        <input className={`popup__input popup__input_value_email ${errors.email && 'popup__input_error'}`} placeholder='Email'
                        onChange={handleChange} value= {values.email || ''} 
                        name='email' type='email' id='email' required/>
                        {errors.email && <span className='popup__error'>{errors.email || ''}</span>}
                        <label className='popup__label' htmlFor='password'>Пароль</label>
                        <input className={`popup__input popup__input_value_password ${errors.password && 'popup__input_error'}`} placeholder='Пароль'
                        onChange={handleChange} value= {values.password || ''}
                        name='password' type='password' id='password'  minLength='6' required/>
                        {errors.password && <span className='popup__error'>{errors.password || ''}</span>}
                        
                    {errorMessage && <span className='popup__server-error'>{errorMessage}</span>}
                    <button className={`popup__btn ${!isValid && 'popup__btn_disabled'}`} 
                    disabled={!isValid} type='submit'>{ buttonText }</button>
                </form>
                <span className='popup__span'>
                    { inscription }
                    <Link className='popup__link' to={ linkTo }>
                        { linkName }
                    </Link>
                    </span>
            </div>
    )
};

export default Popup;


// import './Popup.css';
// import logo from '../../images/logo.svg';
// import { Link } from 'react-router-dom';
// import React from 'react';
// import useFormAndValidation from '../../../utils/useFormAndValidation'

// function Popup({onSubmit, title, buttonText, inscription, linkName, linkTo, isRegister}) {

//     const [ values, setValues ] = React.useState({
//         name:'',
//         email:'',
//         password:'',
//     });

//     const handleChange = (e) => {
//         const {value, name} = e.target;
//         setValues({...values, [name]: value});
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit(values);
//     }

//     return (
//             <div  className='popup'>
//                 <Link className='popup__link-logo' to='/'><img className='popup__img' src={ logo } alt='logo' /></Link>
//                 <h2 className='popup__title'>{ title }</h2>
//                 <form className='popup__form' onSubmit={handleSubmit}>
//                     {isRegister && (
//                         <>
//                         <label className='popup__label' htmlFor='name'>Имя</label>
//                         <input className='popup__input popup__input_value_name' placeholder='Имя' 
//                         onChange={handleChange} value= {values.name}
//                         name='name' type='text' id='name' minLength='2' maxLength='40' required /> 
//                         </>                       
//                     )}
//                         <label className='popup__label' htmlFor='email'>E-mail</label>
//                         <input className='popup__input popup__input_value_email' placeholder='Email'
//                         onChange={handleChange} value= {values.email} 
//                         name='email' type='email' id='email' required/>
//                         <label className='popup__label' htmlFor='password'>Пароль</label>
//                         <input className='popup__input popup__input_value_password' placeholder='Пароль'
//                         onChange={handleChange} value= {values.password}
//                         name='password' type='password' id='password'  minLength='6' required/>
//                         <span className='popup__error'></span>

//                     <button className='popup__btn' type='submit'>{ buttonText }</button>
//                 </form>
//                 <span className='popup__span'>
//                     { inscription }
//                     <Link className='popup__link' to={ linkTo }>
//                         { linkName }
//                     </Link>
//                     </span>
//             </div>
//     )
// };

// export default Popup;