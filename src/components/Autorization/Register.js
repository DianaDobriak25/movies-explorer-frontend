import React from 'react';
import FormAutorization from "./FormAutorization";

function Register() {
    return (
        <FormAutorization title="Добро пожаловать!" subtitle="Email" subtitle1="Пароль" btnText="Зарегистрироваться" bottomText="Уже зарегистрированы?" bottomLink="/sign-in" linkText="Войти">
            <p className="form__autorization-subtitle">Имя</p>
            <input name="name" className="form__autorization-input" id="name" placeholder="Имя" />
        </FormAutorization>
    )
}

export default Register;






