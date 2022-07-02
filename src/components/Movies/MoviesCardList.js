import React from 'react';
import MoviesCard from './MoviesCard';


function MoviesCardList() {

    return (
        <section className="movies-cards">
            <div className="movies-cards__grid">
                {[...Array(16)].map((x, i) =>
                    <MoviesCard key={i} />
                )}
            </div>
            <button className="movies-cards__more" type="button" >Eщё</button>
        </section>
    );
}

export default MoviesCardList;
