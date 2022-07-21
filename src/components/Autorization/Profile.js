import React from 'react';
import Header from '../Header';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Form from 'react-validation/build/form';
import validator from 'validator';
import { control, button } from 'react-validation';

const Input = ({ error, isChanged, isUsed, ...props }) => (
    <>
        <input {...props} />
        <p className='profile-form__error'>{isChanged && isUsed && error}</p>
    </>
);
const MyValidationInput = control(Input);

const Button = ({ hasErrors, ...props }) => {
    return (
        <button {...props} disabled={hasErrors || !props.changed} />
    );
};
const MyValidationButton = button(Button);

const valRequired = (value) => {
    if (!value.toString().trim().length) {
        return 'Поле является обязательным';
    }
};

const valEmail = (value) => {
    if (!validator.isEmail(value)) {
        return `${value} не является корректным Email`
    }
};

const valName = (value) => {
    if (!value.toString().match(/^[ЁёА-яa-zA-Z\s/-]*$/)) {
        return 'Поле должно содержать только латиницу, кириллицу, пробел или дефис';
    }
};

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    //обработчик изменения name
    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    //обработчик изменения email
    function handleEmailChange(evt) {
        setEmail(evt.target.value);
    }

    //обработчик отправки данных формы
    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            name,
            email
        });
    }

    function handleLogout(e) {
        e.preventDefault();
        props.onLogout();
    }

    return (
        <main className='main'>
            <Header loggedIn={true} />
            <article className="profile-form">
                <Form className="profile-form__container" onSubmit={handleSubmit}>
                    <div className="profile-form__content">
                        <h2 className="profile-form__title">Привет, {currentUser.name}!</h2>
                        <div className='profile-form__item'>
                            <label className='profile-form__label'>Имя</label>
                            <MyValidationInput name="name" type="name" className="profile-form__input" id="name" value={name || ""} onChange={handleNameChange} validations={[valRequired, valName]} />
                        </div>
                        <div className="profile-form__line" />
                        <div className='profile-form__item'>
                            <label className='profile-form__label'>E-mail</label>
                            <MyValidationInput name="email" className="profile-form__input" id="email" value={email || ""} onChange={handleEmailChange} validations={[valRequired, valEmail]} />
                        </div>
                        <MyValidationButton className="profile-form__rename" type="submit" changed={currentUser.name !== name || currentUser.email !== email}>Редактировать</MyValidationButton>
                        <a href="/ " className="profile-form__link" onClick={handleLogout} >Выйти из аккаунта</a>
                    </div>
                </Form>
            </article >
        </main>
    )
}

export default Profile;
