import React from 'react';
import MoviesCard from './MoviesCard';


function MoviesCardList(props) {
    return (
        <section className="movies-cards">
            {props.movies.length !== 0
                ?
                <>
                    <div className="movies-cards__grid">
                        {props.movies.map((item) =>
                            <MoviesCard key={item.id} item={item} onLikeMovie={props.onLikeMovie} onDislikeMovie={props.onDislikeMovie} isLiked={props.savedMovies.some(m => m.movieId === item.id)} />
                        )}
                    </div>
                    {props.showMore && <button className="movies-cards__more" type="button" onClick={props.onLoadMore}>Eщё</button>}
                </>
                : props.movieRequestError
                    ? <h3 className='movies-cards__title-empty'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h3>
                    : <h3 className='movies-cards__title-empty'>Ничего не найдено</h3>
            }
        </section>
    );
}

export default MoviesCardList;
