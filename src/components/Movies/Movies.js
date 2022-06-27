import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import MoviesCardList from './MoviesCardList';
import SearchForm from './SearchForm';




function Movies() {
  return (
    <main className="main">
    <Header loggedIn={true} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  );
}
export default Movies;