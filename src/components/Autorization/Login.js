import React from 'react';
import FormAutorization from "./FormAutorization";

function Login(props) {
    return (
        <FormAutorization title="Рады видеть!" subtitle="E-mail" subtitle1="Пароль" btnText="Войти" bottomText="Еще не зарегистрированы?" bottomLink="/sign-up" linkText="Регистрация" onSubmit={props.onLogin} error={props.error} isLoading={props.isLoading}>
        </FormAutorization>
    )
}

export default Login;

