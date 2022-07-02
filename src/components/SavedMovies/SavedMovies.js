import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import SearchForm from '../Movies/SearchForm';
import MoviesCardList from './MoviesCardList';



function SavedMovies(props) {
  return (
    <main className="main">
      <Header loggedIn={true} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  );
}
export default SavedMovies;