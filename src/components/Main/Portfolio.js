import React from 'react';

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <div className="portfolio__item">
                <a href="https://google.com" target="_blank" rel="noreferrer" className="portfolio__link">Статичный сайт</a>
                <a href="https://google.com" target="_blank" rel="noreferrer" className='portfolio__arrow'>↗</a>
            </div>
            <div className="portfolio__line" />
            <div className="portfolio__item">
                <a href="https://google.com" target="_blank" rel="noreferrer" className="portfolio__link">Адаптивный сайт</a>
                <a href="https://google.com" target="_blank" rel="noreferrer" className='portfolio__arrow'>↗</a>
            </div>
            <div className="portfolio__line" />
            <div className="portfolio__item">
                <a href="https://google.com" target="_blank" rel="noreferrer" className="portfolio__link">Одностраничное приложение</a>
                <a href="https://google.com" target="_blank" rel="noreferrer" className='portfolio__arrow'>↗</a>
            </div>
        </section>
    );
}
export default Portfolio;