import React from 'react';
import formLogo from '../../images/logo__COLOR_main-1.png';
import { Link } from 'react-router-dom';

function FormAutorization(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    //обработчик изменения email
    function handleEmailChange(evt) {
        setEmail(evt.target.value);
    }
    
    //обработчик изменения password
    function handlePasswordChange(evt) {
        setPassword(evt.target.value);
    }

    //обработчик отправки данных формы
    function handleSubmit(evt) {
        evt.preventDefault();
        props.onSubmit({
            email,
            password
        });
    }

    return (
        <article className="form">
            <form className="form__autorization-container" onSubmit={handleSubmit}>
                <img className="form__logo" alt="Логотип аккаунта" src={formLogo} />
                <div className="form__autorization-content">
                    <h2 className="form__autorization-title">{props.title}</h2>
                    {props.children}
                    <p className="form__autorization-subtitle">{props.subtitle}</p>
                    <input name="email" className="form__autorization-input" id="email" placeholder="E-mail" value={email || ""} onChange={handleEmailChange} />
                    <p className="form__autorization-subtitle">{props.subtitle1}</p>
                    <input name="password" type="password" className="form__autorization-input" id="password" placeholder="Password" value={password || ""} onChange={handlePasswordChange} />
                    <button className="form__button" type="submit">{props.btnText}</button>
                    <p className="login__form">{props.bottomText}
                        <Link className="login__form-enter" to={props.bottomLink} >{props.linkText}</Link>
                    </p>
                </div>
            </form>
        </article>
    )
}

export default FormAutorization;