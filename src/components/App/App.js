import React from 'react';
import './App.css';
import { CurrentUserContext } from '../../context/CurrentUserContext'; //импортируем объект контекста
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Autorization/Register.js';
import Login from '../Autorization/Login.js';
import Profile from '../Autorization/Profile.js';
import RequireAuth from '../RequiredAuth';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <CurrentUserContext.Provider value={"User"}>
      <div className="page">
        {/* В зависимости от роута будет или Main или Movies или SavedMovies */}
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/movies" element={<RequireAuth loggedIn={true}>
            <Movies />
          </RequireAuth>} />
          <Route exact path="/saved-movies" element={<RequireAuth loggedIn={true}>
            <SavedMovies />
          </RequireAuth>} />
          <Route exact path="/profile" element={<RequireAuth loggedIn={true}>
            <Profile />
          </RequireAuth>} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}


export default App;
