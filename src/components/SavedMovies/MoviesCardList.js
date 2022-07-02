import React from 'react';
import MoviesCard from './MoviesCard';


function MoviesCardList() {

    return (
        <section className="movies-cards">
            <div className="movies-cards__grid">
                {[...Array(2)].map((x, i) =>
                    <MoviesCard key={i} />
                )}
            </div>
        </section>
    );
}

export default MoviesCardList;