import React from 'react';

function ErrorModal() {
    return (
        <ErrorModal className="error-modal">
            <div className="error-modal__container">
            <h1 className="error-modal__title">404</h1>
            <p className="error-modal__resource">Страница не найдена</p>
            </div>
                <a href="/" className="error-modal__link">Назад</a>
        </ErrorModal>
    );
}

export default ErrorModal;