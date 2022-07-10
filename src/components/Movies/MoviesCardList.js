import React from 'react';
import MoviesCard from './MoviesCard';


function MoviesCardList(props) {

    return (
        <section className="movies-cards">
            <div className="movies-cards__grid">
                {props.movies.map((item, i) =>
                    <MoviesCard key={i} item={item} />
                )}
            </div>
            <button className="movies-cards__more" type="button" >Eщё</button>
        </section>
    );
}

export default MoviesCardList;
