import React from 'react';
import Header from '../Header';

function Profile(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

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
    return (
        <main className='main'>
            <Header loggedIn={true} />
            <article className="profile-form">
                <form className="profile-form__container" onSubmit={handleSubmit}>
                    <div className="profile-form__content">
                        <h2 className="profile-form__title">Привет, Диана {props.name}!</h2>
                        <div className='profile-form__item'>
                            <label className='profile-form__label' for="name">Имя</label>
                            <input name="name" type="name" className="profile-form__input" id="name" value={name || ""} onChange={handleNameChange} />
                        </div>
                        <div className="profile-form__line" />
                        <div className='profile-form__item'>
                            <label className='profile-form__label' for="email">E-mail</label>
                            <input name="email" className="profile-form__input" id="email" value={email || ""} onChange={handleEmailChange} />
                        </div>
                        <a href="/ " className="profile-form__rename" type="submit">Редактировать</a>
                        <a href="/ " className="profile-form__link" >Выйти из аккаунта</a>
                    </div>
                </form>
            </article >

        </main>
    )
}

export default Profile;


