import React from 'react';
import like from '../../images/like.svg';


function MoviesCard() {

    return (
        <article className="movies-card">
            <img className="movies-card__image" src="https://i.pinimg.com/736x/ae/89/e3/ae89e34032214aa0887ef96203f970dc.jpg" alt="Изображение фильма" />
            <div className="movies-card__block">
                <h2 className="movies-card__appelation">Фото</h2>
                <button className="movies-card__like" type="button" >
                    <img className="movies-card__like-image movies-card__like_active" alt="Лайк" src={like} />
                </button>
            </div>
            <div className="movies-card__line" />
            <p className="movies-card__time">1ч 42мин</p>
        </article>
    );
}

export default MoviesCard;
