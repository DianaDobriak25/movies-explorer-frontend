import React from 'react';
import FormAutorization from "./FormAutorization";

function Login() {
    return (
        <FormAutorization title="Рады видеть!" subtitle="E-mail" subtitle1="Пароль" btnText="Войти" bottomText="Еще не зарегистрированы?" bottomLink="/sign-up" linkText="Регистрация" >
        </FormAutorization>
    )
}

export default Login;

