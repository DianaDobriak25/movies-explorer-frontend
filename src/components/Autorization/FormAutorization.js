import React from 'react';
import formLogo from '../../images/logo__COLOR_main-2.svg';
import { Link } from 'react-router-dom';

function FormAutorization(props) {
    return (
        <article className="form">
            <form className="form__autorization-container" >
                <img className="form__logo" alt="Логотип аккаунта" src={formLogo} />
                <div className="form__autorization-content">
                    <h2 className="form__autorization-title">{props.title}</h2>
                    {props.children}
                    <p className="form__autorization-subtitle">{props.subtitle}</p>
                    <input name="email" className="form__autorization-input" id="email" placeholder="E-mail" />
                    <p className="form__autorization-subtitle">{props.subtitle1}</p>
                    <input name="password" type="password" className="form__autorization-input" id="password" placeholder="Password" />
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