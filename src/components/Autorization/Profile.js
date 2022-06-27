import React from 'react';
import Header from '../Header';

function Profile(props) {
    return (
        <main className='main'>
            <Header loggedIn={true} />
            <article className="profile-form">
                <form className="profile-form__container" >
                    <div className="profile-form__content">
                        <h2 className="profile-form__title">Привет, Диана {props.name}!</h2>
                        <div className='profile-form__item'>
                            <label className='profile-form__label' for="name">Имя</label>
                            <input name="name" type="name" className="profile-form__input" id="name" value="Диана" />
                        </div>
                        <div className="profile-form__line" />
                        <div className='profile-form__item'>
                            <label className='profile-form__label' for="email">E-mail</label>
                            <input name="email" className="profile-form__input" id="email" value="di.dobryak@yandex.ru" />
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


