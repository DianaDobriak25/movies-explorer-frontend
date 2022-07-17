import React from 'react';
import FormAutorization from "./FormAutorization";
import Input from 'react-validation/build/input';

const valRequired = (value) => {
    if (!value.toString().trim().length) {
        return 'Поле является обязательным';
    }
};

const valName = (value) => {
    if (!value.toString().match(/^[ЁёА-яa-zA-Z\s/-]*$/)) {
        return 'Поле должно содержать только латиницу, кириллицу, пробел или дефис';
    }
};

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
            <Input name="name" className="form__autorization-input" id="name" placeholder="Имя" value={name || ""} onChange={handleNameChange} validations={[valRequired, valName]} />
        </FormAutorization>
    )
}

export default Register;






