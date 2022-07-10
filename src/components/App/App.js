import React from 'react';
import './App.css';
import { CurrentUserContext } from '../../context/CurrentUserContext'; //импортируем объект контекста
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Autorization/Register.js';
import Login from '../Autorization/Login.js';
import Profile from '../Autorization/Profile.js';
import { getUserInfo, register, login, setUserInfo } from '../../utils/MainApi';
// import ErrorModal from '../ErrorModal';
import RequireAuth from '../RequiredAuth';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getMovies } from '../../utils/MoviesApi';


function App() {
  const history = useNavigate();

  // const [isErrorModal, setIsErrorModal] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([]);



  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const user = localStorage.getItem('user');
    const movies = localStorage.getItem('searchResult');
    if (!jwt || !user) return;
    getUserInfo({
      token: jwt,
      ...JSON.parse(user),
    }).then(data => {
      setCurrentUser(data);
      setLoggedIn(true);
      history("/movies");
    }).catch(err => {
      console.log(err);
    });
    if (movies) {
      setMovies(JSON.parse(movies));
    }
  }, []);


  function handleLogin(params) {
    login(params.email, params.password).then(data => {
      localStorage.setItem('jwt', data.token);
      getUserInfo({
        token: data.token,
        email: params.email,
        name: params.name,
      }).then(data => {
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data));
        setCurrentUser(data);
        setLoggedIn(true);
        history("/movies");
      });
    }).catch(err => {
      // setIsErrorModal(true);
    })
  }

  function handleRegister(params) {
    register(params.name, params.email, params.password).then(data => {
      handleLogin(params);
    }).catch(err => {
      // setIsErrorModal(true);
    });
  }

  function handleMovies(searchData) {
    getMovies().then(data => {
      const resultMovies = data.filter(el => el.nameRU.includes(searchData.search));
      localStorage.setItem("searchData", JSON.stringify(searchData));
      localStorage.setItem("searchResult", JSON.stringify(resultMovies));
      setMovies(resultMovies);
    }).catch(err => {
      console.log(err);
    });
  }

  function handleUpdateUser(data) {
    setUserInfo({
      name: data.name,
      email: data.email,
    }).then(data => {
      setCurrentUser(data.data);
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {/* В зависимости от роута будет или Main или Movies или SavedMovies */}
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/movies" element={<RequireAuth loggedIn={loggedIn}>
            <Movies
              movies={movies} onSearch={handleMovies} />
          </RequireAuth>} />
          <Route exact path="/saved-movies" element={<RequireAuth loggedIn={loggedIn}>
            <SavedMovies />
          </RequireAuth>} />
          <Route exact path="/profile" element={<RequireAuth loggedIn={loggedIn}>
            <Profile
              onUpdateUser={handleUpdateUser}
            />
          </RequireAuth>} />
          <Route path="/sign-up" element={<Register onRegister={handleRegister} />} />
          <Route path="/sign-in" element={<Login onLogin={handleLogin} />} />
        </Routes>
        {/* <ErrorModal
          isOpen={isErrorModal}
        /> */}
      </div>
    </CurrentUserContext.Provider>
  );
}


export default App;
