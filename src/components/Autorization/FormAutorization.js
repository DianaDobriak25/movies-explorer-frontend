import React from 'react';
import formLogo from '../../images/logo__COLOR_main-2.svg';
import { Link } from 'react-router-dom';
import validator from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from "react-validation/build/button";

const valRequired = (value) => {
    if (!value.toString().trim().length) {
        // We can return string or jsx as the 'error' prop for the validated Component
        return 'Поле является обязательным';
    }
};

const valEmail = (value) => {
    if (!validator.isEmail(value)) {
        return `${value} не является корректным Email`
    }
};

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
            <Form className="form__autorization-container" onSubmit={handleSubmit}>
                <img className="form__logo" alt="Логотип аккаунта" src={formLogo} />
                <div className="form__autorization-content">
                    <h2 className="form__autorization-title">{props.title}</h2>
                    {props.children}
                    <p className="form__autorization-subtitle">{props.subtitle}</p>
                    <Input name="email" className="form__autorization-input" id="email" placeholder="E-mail" value={email || ""} onChange={handleEmailChange} validations={[valRequired, valEmail]} />
                    <p className="form__autorization-subtitle">{props.subtitle1}</p>
                    <Input name="password" type="password" className="form__autorization-input" id="password" placeholder="Password" value={password || ""} onChange={handlePasswordChange} validations={[valRequired]} />
                    <Button className="form__button" type="submit">{props.btnText}</Button>
                    <p className="login__form">{props.bottomText}
                        <Link className="login__form-enter" to={props.bottomLink} >{props.linkText}</Link>
                    </p>
                </div>
            </Form>
        </article>
    )
}

export default FormAutorization;