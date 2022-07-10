import React from 'react';
import like from '../../images/like.svg';


function MoviesCard(props) {
    return (
        <article className="movies-card">
            <img className="movies-card__image" src={`https://api.nomoreparties.co/${props.item.image.url}`} alt="Изображение фильма" />
            <div className="movies-card__block">
                <h2 className="movies-card__appelation">{props.item.nameRU}</h2>
                <button className="movies-card__like" type="button" >
                    <img className="movies-card__like-image movies-card__like_active" alt="Лайк" src={like} />
                </button>
            </div>
            <div className="movies-card__line" />
            <p className="movies-card__time">{Math.trunc(props.item.duration / 60)}ч { ('0' + (props.item.duration % 60)).slice(-2) }мин</p>
        </article>
    );
}

export default MoviesCard;
