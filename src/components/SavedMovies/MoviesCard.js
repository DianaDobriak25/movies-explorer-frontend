import React from 'react';
import del from '../../images/d1.png';


function MoviesCard(props) {

    const handleDislikeMovie = () => {
        props.onDislikeMovie(props.item.movieId)
    }

    return (
        <article className="movies-card">
            <img className="movies-card__image" src={props.item.image} alt="Изображение фильма" />
            <div className="movies-card__block">
                <h2 className="movies-card__appelation">{props.item.nameRU}</h2>
                <button className="movies-card__delete" type="button" onClick={handleDislikeMovie} >
                    <img className="movies-card__delete-image" alt="Удалить" src={del} />
                </button>
            </div>
            <div className="movies-card__line" />
            <p className="movies-card__time">{Math.trunc(props.item.duration / 60)}ч {('0' + (props.item.duration % 60)).slice(-2)}мин</p>
        </article>
    );
}

export default MoviesCard;