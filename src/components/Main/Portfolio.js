import React from 'react';

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <div className="portfolio__item">
                <a href="/" className="portfolio__link">Статичный сайт</a>
                <a href="/" className='portfolio__arrow'>↗</a>
            </div>
            <div className="portfolio__line" />
            <div className="portfolio__item">
                <a href="/" className="portfolio__link">Адаптивный сайт</a>
                <a href="/" className='portfolio__arrow'>↗</a>
            </div>
            <div className="portfolio__line" />
            <div className="portfolio__item">
                <a href="/" className="portfolio__link">Одностраничное приложение</a>
                <a href="/" className='portfolio__arrow'>↗</a>
            </div>
        </section>
    );
}
export default Portfolio;