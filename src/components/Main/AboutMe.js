import React from 'react';
import diana from '../../images/photo12.jpg';


function AboutMe() {
    return (
        <section className="about-me" id="aboutMe">
            <h2 className="about-me__student">Студент</h2>
            <div className="about-me__line" />
            <div className="about-me__container">
                <div className="about-me__block1">
                    <h2 className="about-me__name">Диана</h2>
                    <p className="about-me__description">Фронтенд-разработчик, 23 года</p>
                    <p className="about-me__history">Я родилась в г. Донецк, закончила ДонНУ по направлению: "Информационные системы управления".
                        2 года назад переехала в солнечный город-Краснодар.
                        Всегда интересовалась информационными новшествами, решила выбрать для себя узкое направление-веб-разработку.
                        По окончанию курса хочу выйти на рынок труда в сфере IT.
                    </p>
                    <div className="about-me__links">
                        <a href="https://vk.com" target="_blank" className="about-me__link">Vk</a>
                        <a href="https://github.com/DianaDobriak25" target="_blank" className="about-me__link">Github</a>
                    </div>
                </div>
                <div className="about-me__block2">
                    <img className="about-me__photo" alt="Фото студента Дианы" src={diana} />
                </div>
            </div>
        </section>
    );
}
export default AboutMe;