import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import MoviesCardList from './MoviesCardList';
import SearchForm from './SearchForm';
import Preloader from './Preloader';

function Movies(props) {

  React.useEffect(() => {
    props.onLoadMovies()
  }, []);

  return (
    <main className="main">
      <Header loggedIn={props.loggedIn} />
      <SearchForm onSearch={props.onSearch} />
      {
        props.isLoading
          ? <Preloader />
          : <MoviesCardList
            movies={props.movies}
            savedMovies={props.savedMovies}
            onLoadMore={props.onLoadMore}
            showMore={props.showMore}
            movieRequestError={props.movieRequestError}
            onLikeMovie={props.onLikeMovie}
            onDislikeMovie={props.onDislikeMovie}
          />
      }
      <Footer />
    </main>
  );
}
export default Movies;