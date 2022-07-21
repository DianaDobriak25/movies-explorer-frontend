import React from 'react';
import './App.css';
import { CurrentUserContext } from '../../context/CurrentUserContext'; //импортируем объект контекста
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Autorization/Register.js';
import Login from '../Autorization/Login.js';
import Profile from '../Autorization/Profile.js';
import { getUserInfo, register, login, setUserInfo, getSavedMovies, likeMovie, dislikeMovie } from '../../utils/MainApi';
import RequireAuth from '../RequiredAuth';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getMovies } from '../../utils/MoviesApi';
import NotFound from '../NotFound';


function App() {
  const history = useNavigate();

  let [currentUser, setCurrentUser] = React.useState({});
  let [loggedIn, setLoggedIn] = React.useState(false);
  let [showMovies, setShowMovies] = React.useState([]);
  let [filteredMovies, setFilteredMovies] = React.useState([]);
  let [page, setPage] = React.useState(1);
  let [showMore, setShowMore] = React.useState(true);
  let [movieRequestError, setMovieRequestError] = React.useState(false);
  let [isLoading, setIsLoading] = React.useState(false);
  let [savedMovies, setSavedMovies] = React.useState([]);

  function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const user = localStorage.getItem('user');
    if (!jwt || !user) return;
    getUserInfo({
      token: jwt,
      ...JSON.parse(user),
    }).then(data => {
      setCurrentUser(data);
      setLoggedIn(true);
      history('/movies');
    }).catch(err => {
      console.log(err);
    });
    getSavedMovies({ token: jwt })
      .then((data) => {
        setSavedMovies(data.data);

      })
      .catch(err => {
        console.log(err);
      })
  }, []);


  React.useEffect(() => {
    const startPageSize = window.innerWidth < 768
      ? 5
      : window.innerWidth < 1280
        ? 8
        : 12;
    const pageSize = window.innerWidth < 768
      ? 1
      : window.innerWidth < 1280
        ? 2
        : 4;
    if (page === 1) {
      setShowMovies(s => [...paginate(filteredMovies, startPageSize, page)]);
    } else {
      setShowMovies(s => [...s, ...paginate(filteredMovies, pageSize, page)]);
    }
    setShowMore(page !== Math.ceil(filteredMovies.length / pageSize));
  }, [filteredMovies, page]);


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
      console.log(err);
    })
  }

  function handleRegister(params) {
    register(params.name, params.email, params.password).then(data => {
      handleLogin(params);
    }).catch(err => {
      console.log(err);
    });
  }

  const handleMovies = (searchData) => {
    setIsLoading(true);
    getMovies().then(data => {
      localStorage.setItem('searchData', JSON.stringify(searchData));
      const fm = [...data.filter(el => el.nameRU.toLowerCase().includes(searchData.search.toLowerCase()) && (searchData.checked ? el.duration < 40 : true))];
      localStorage.setItem('filteredMovies', JSON.stringify(fm));
      setPage(1);
      setFilteredMovies([...fm]);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }).catch(err => {
      setIsLoading(false);
      setMovieRequestError(true);
      console.log(err);
    });
  }

  const handleLoadMore = () => {
    setPage(++page);
  }

  const handleLoadMovies = () => {
    const fm = localStorage.getItem('filteredMovies');
    if (!fm) return;
    setPage(1);
    setFilteredMovies(JSON.parse(fm));
  }

  function handleUpdateUser(data) {
    const token = localStorage.getItem("jwt");
    setUserInfo({
      token,
      name: data.name,
      email: data.email,
    }).then(data => {
      setCurrentUser(data.data);
    }).catch(err => {
      console.log(err);
    });
  }

  const handleLikeMovie = (item) => {
    const token = localStorage.getItem("jwt");
    likeMovie({ token, item })
      .then(data => {
        setSavedMovies(s => [...s, data.data]);
      })
      .catch(err => {
        console.log(err)
      });
  }

  const handleDislikeMovie = (id) => {
    const token = localStorage.getItem("jwt");
    const savedMovie = savedMovies.find(m => m.movieId === id);
    dislikeMovie({ token, id: savedMovie._id })
      .then(() => {
        setSavedMovies(s => [...s.filter(m => m._id !== savedMovie._id)]);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setCurrentUser({});
    history('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {/* В зависимости от роута будет или Main или Movies или SavedMovies */}
        <Routes>
          <Route exact path="/" element={<Main loggedIn={loggedIn} />} />
          <Route exact path="/movies" element={<RequireAuth loggedIn={loggedIn}>
            <Movies
              loggedIn={loggedIn}
              movies={showMovies}
              onSearch={handleMovies}
              onLoadMore={handleLoadMore}
              showMore={showMore}
              onLoadMovies={handleLoadMovies}
              movieRequestError={movieRequestError}
              isLoading={isLoading}
              onLikeMovie={handleLikeMovie}
              savedMovies={savedMovies}
              onDislikeMovie={handleDislikeMovie}
            />
          </RequireAuth>} />
          <Route exact path="/saved-movies" element={<RequireAuth loggedIn={loggedIn}>
            <SavedMovies
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              onDislikeMovie={handleDislikeMovie}
            />
          </RequireAuth>} />
          <Route exact path="/profile" element={<RequireAuth loggedIn={loggedIn}>
            <Profile
              onUpdateUser={handleUpdateUser}
              onLogout={handleLogout}
            />
          </RequireAuth>} />
          <Route path="/sign-up" element={<Register onRegister={handleRegister} />} />
          <Route path="/sign-in" element={<Login onLogin={handleLogin} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}


export default App;
