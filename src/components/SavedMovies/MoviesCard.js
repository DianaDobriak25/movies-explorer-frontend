import React from 'react';
import del from '../../images/d1.png';


function MoviesCard() {

    return (
        <article className="movies-card">
            <img className="movies-card__image" src="https://i.pinimg.com/736x/ae/89/e3/ae89e34032214aa0887ef96203f970dc.jpg" alt="Изображение фильма" />
            <div className="movies-card__block">
                <h2 className="movies-card__appelation">Фото</h2>
                <button className="movies-card__delete" type="button" >
                    <img className="movies-card__delete-image" alt="Удалить" src={del} />
                </button>
            </div>
            <div className="movies-card__line" />
            <p className="movies-card__time">1ч 42мин</p>
        </article>
    );
}

export default MoviesCard;