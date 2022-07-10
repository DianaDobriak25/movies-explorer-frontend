import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import MoviesCardList from './MoviesCardList';
import SearchForm from './SearchForm';




function Movies(props) {
  return (
    <main className="main">
    <Header loggedIn={true} />
      <SearchForm onSearch={props.onSearch} />
      <MoviesCardList movies={props.movies} />
      <Footer />
    </main>
  );
}
export default Movies;