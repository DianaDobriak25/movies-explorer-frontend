import React from 'react';
import promoLogo from '../../images/P__logo.svg';



function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <img className="promo__logo" alt="Логотип аккаунта" src={promoLogo} />
                <h1 className="promo__text">Учебный проект студента факультета Веб-разработки.</h1>
            </div>
        </section>
    );
}
export default Promo;