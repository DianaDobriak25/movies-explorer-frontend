import React from 'react';

function NotFound() {
    return (
        <section className="not-found">
            <div className="not-found__container">
                <h1 className="not-found__title">404</h1>
                <p className="not-found__resource">Страница не найдена</p>
                <a href="/" className="not-found__link">Назад</a>
            </div>
        </section>
    );
}

export default NotFound;