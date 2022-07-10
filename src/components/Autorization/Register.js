import React from 'react';
import FormAutorization from "./FormAutorization";

function Register(props) {
    const [name, setName] = React.useState('');

    //обработчик изменения name
    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    //обработчик отправки данных формы
    function handleSubmit(data) {
        props.onRegister({
            ...data,
            name,
        });
    }

    return (
        <FormAutorization title="Добро пожаловать!" subtitle="Email" subtitle1="Пароль" btnText="Зарегистрироваться" bottomText="Уже зарегистрированы?" bottomLink="/sign-in" linkText="Войти" onSubmit={handleSubmit}>
            <p className="form__autorization-subtitle">Имя</p>
            <input name="name" className="form__autorization-input" id="name" placeholder="Имя" value={name || ""} onChange={handleNameChange} />
        </FormAutorization>
    )
}

export default Register;






