import React from 'react';
import MoviesCard from './MoviesCard';


function MoviesCardList(props) {
    return (
        <section className="movies-cards">
            <div className="movies-cards__grid">
                {props.movies.map((item, i) =>
                    <MoviesCard item={item} onDislikeMovie={props.onDislikeMovie} key={i} />
                )}
            </div>
        </section>
    );
}

export default MoviesCardList;