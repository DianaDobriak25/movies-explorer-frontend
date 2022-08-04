import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import SearchForm from '../Movies/SearchForm';
import MoviesCardList from './MoviesCardList';



function SavedMovies(props) {

  const [search, setSearch] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  const handleSearchSavedMovies = (data) => {
    setSearch(data.search);
    setChecked(data.checked);
  }

  return (
    <main className="main">
      <Header loggedIn={props.loggedIn} />
      <SearchForm onSearch={handleSearchSavedMovies} />
      <MoviesCardList
        movies={props.savedMovies.filter(el => el.nameRU.toLowerCase().includes(search.toLowerCase()) && (checked ? el.duration < 40 : true))}
        onDislikeMovie={props.onDislikeMovie}
      />
      <Footer />
    </main>
  );
}
export default SavedMovies;