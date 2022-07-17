import React from 'react';
import like from '../../images/like.svg';
import liked from '../../images/liked.svg';


function MoviesCard(props) {
    const handleLikeMovie = () => {
        const payload = {
            country: props.item.country,
            director: props.item.director,
            duration: props.item.duration,
            year: props.item.year,
            description: props.item.description,
            image: `https://api.nomoreparties.co/${props.item.image.url}`,
            trailerLink: props.item.trailerLink,
            nameRU: props.item.nameRU,
            nameEN: props.item.nameEN,
            thumbnail: `https://api.nomoreparties.co/${props.item.image.formats.thumbnail.url}`,
            movieId: props.item.id,
        }
        props.onLikeMovie(payload);
    }

    const handleDislikeMovie = () => {
        props.onDislikeMovie(props.item.id);
    }

    return (
        <article className="movies-card">
            <img className="movies-card__image" src={`https://api.nomoreparties.co/${props.item.image.url}`} alt="Изображение фильма" />
            <div className="movies-card__block">
                <h2 className="movies-card__appelation">{props.item.nameRU}</h2>
                <button className="movies-card__like" type="button" onClick={props.isLiked ? handleDislikeMovie : handleLikeMovie}>
                    <img className="movies-card__like-image movies-card__like_active" alt="Лайк" src={props.isLiked ? liked : like} />
                </button>
            </div>
            <div className="movies-card__line" />
            <p className="movies-card__time">{Math.trunc(props.item.duration / 60)}ч {('0' + (props.item.duration % 60)).slice(-2)}мин</p>
        </article>
    );
}

export default MoviesCard;
