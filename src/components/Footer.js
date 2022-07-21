import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <h4 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
            <div className="footer__line" />
            <nav className="footer__links">
                <p className="footer__resource">&copy;2022.</p>
                <a href="https://practicum.yandex.ru" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
                <a href="https://github.com/DianaDobriak25" target="_blank" rel="noreferrer" className="footer__link">Github</a>
                <a href="https://vk.com" target="_blank" rel="noreferrer" className="footer__link">VK</a>
            </nav>
        </footer>
    );
}

export default Footer;